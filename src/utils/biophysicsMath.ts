export type Language = 'en' | 'ar';

export interface PosRppgParams {
  heartRateBpm: number;
  arterialStiffness: number; // 0.0 (compliant) to 1.0 (stiff)
  motionNoise: number; // 0.0 to 1.0
  enableFilter: boolean;
  sampleRateHz?: number;
}

export interface PosRppgSnapshot {
  rawSignal: number[];
  filteredSignal: number[];
  sdppgSignal: number[];
  sqi: number; // 0.0 - 1.0
  rmssdMs: number;
  bOverA: number;
  dOverA: number;
  dicroticNotchRatio: number;
  stiffnessIndexMs: number;
  systolicIdx: number;
  notchIdx: number;
  diastolicIdx: number;
}

/**
 * SYNTHETIC GENERATOR (SIMULATED DATA — NOT A CLINICAL MEASUREMENT):
 * Generates an illustrative multi-harmonic arterial pulse wave + second derivative (SDPPG)
 * with synthetic motion artifact corruption and simulated zero-phase moving bandpass recovery.
 * Equation:
 *   x_clean(t) = exp(-((phi - 0.16)/0.068)^2) + A_ref * exp(-((phi - c_ref)/0.085)^2) + A_dia * exp(-((phi - c_dia)/0.095)^2) - 0.28
 *   n_motion(t) = noise * (0.55*sin(2*pi*4.2*t + 0.4) + 0.38*sin(2*pi*0.28*t) + 0.22*cos(2*pi*7.8*t))
 */
export function simulatePosRppgWindow(params: PosRppgParams): PosRppgSnapshot {
  const fs = params.sampleRateHz ?? 60;
  const numSamples = 180; // 3.0 seconds @ 60Hz
  const hrHz = Math.max(40, Math.min(180, params.heartRateBpm)) / 60;
  const periodSamples = fs / hrHz;
  const stiffness = Math.max(0, Math.min(1, params.arterialStiffness));
  const noise = Math.max(0, Math.min(1, params.motionNoise));

  const cleanWave: number[] = [];
  const rawWave: number[] = [];

  // Deterministic synthetic waveform + multi-frequency motion artifact
  for (let i = 0; i < numSamples; i++) {
    const t = i / fs;
    const phase = (t * hrHz) % 1;

    // Systolic upstroke (Gaussian peak around phase 0.16)
    const systolic = Math.exp(-Math.pow((phase - 0.16) / 0.068, 2));
    // Reflected tidal wave grows and shifts earlier with arterial stiffness
    const reflectedCenter = 0.34 - stiffness * 0.07;
    const reflectedAmp = 0.25 + stiffness * 0.32;
    const reflected = reflectedAmp * Math.exp(-Math.pow((phase - reflectedCenter) / 0.085, 2));
    // Dicrotic diastolic wave weakens and flattens with higher stiffness
    const diastolicCenter = 0.56 - stiffness * 0.04;
    const diastolicAmp = 0.34 * (1 - stiffness * 0.55);
    const diastolic = diastolicAmp * Math.exp(-Math.pow((phase - diastolicCenter) / 0.095, 2));

    const cleanVal = systolic + reflected + diastolic - 0.28;
    cleanWave.push(cleanVal);

    // Synthetic hand tremor (~4.2 Hz) + breathing baseline drift (~0.28 Hz) + 7.8Hz residual
    const motionArtifact =
      noise *
      (0.55 * Math.sin(2 * Math.PI * 4.2 * t + 0.4) +
        0.38 * Math.sin(2 * Math.PI * 0.28 * t) +
        0.22 * Math.cos(2 * Math.PI * 7.8 * t));

    rawWave.push(cleanVal + motionArtifact);
  }

  // Zero-phase forward-backward smoothing (illustrative browser simulation of NLMS + 4th-order Butterworth filtfilt)
  const filteredWave = params.enableFilter
    ? applyZeroPhaseMovingBandpass(rawWave, cleanWave, noise)
    : [...rawWave];

  // Second derivative (SDPPG = d^2x/dt^2)
  const sdppg: number[] = new Array(numSamples).fill(0);
  const dt = 1 / fs;
  for (let i = 1; i < numSamples - 1; i++) {
    sdppg[i] = (filteredWave[i + 1] - 2 * filteredWave[i] + filteredWave[i - 1]) / (dt * dt * 120);
  }
  sdppg[0] = sdppg[1];
  sdppg[numSamples - 1] = sdppg[numSamples - 2];

  // Locate primary beat landmarks within the middle complete cycle
  const cycleStart = Math.floor(periodSamples * 0.3);
  const cycleEnd = Math.min(numSamples - 2, Math.floor(cycleStart + periodSamples));
  let systolicIdx = cycleStart;
  let maxVal = -Infinity;
  for (let i = cycleStart; i <= cycleEnd; i++) {
    if (filteredWave[i] > maxVal) {
      maxVal = filteredWave[i];
      systolicIdx = i;
    }
  }

  // Search for dicrotic notch (local min after systolic peak) & diastolic peak
  const notchSearchStart = Math.min(numSamples - 3, systolicIdx + Math.max(3, Math.floor(periodSamples * 0.18)));
  const notchSearchEnd = Math.min(numSamples - 2, systolicIdx + Math.max(6, Math.floor(periodSamples * 0.48)));
  let notchIdx = notchSearchStart;
  let minNotch = Infinity;
  for (let i = notchSearchStart; i <= notchSearchEnd; i++) {
    if (filteredWave[i] < minNotch) {
      minNotch = filteredWave[i];
      notchIdx = i;
    }
  }

  const diaSearchEnd = Math.min(numSamples - 1, notchIdx + Math.max(4, Math.floor(periodSamples * 0.25)));
  let diastolicIdx = notchIdx;
  let maxDia = -Infinity;
  for (let i = notchIdx; i <= diaSearchEnd; i++) {
    if (filteredWave[i] > maxDia) {
      maxDia = filteredWave[i];
      diastolicIdx = i;
    }
  }

  // Illustrative synthetic SQI & SDPPG ratios (NOT derived from clinical subject recordings)
  const rawSqi = Math.max(0.18, 0.97 - noise * 0.68);
  const sqi = params.enableFilter ? Math.min(0.98, Math.max(0.32, 0.97 - noise * 0.31)) : rawSqi;

  const bOverA = Number((-0.78 + stiffness * 0.44).toFixed(3));
  const dOverA = Number((-0.18 - stiffness * 0.36).toFixed(3));
  const dicroticNotchRatio = Number(Math.max(0.15, Math.min(0.85, 0.34 + stiffness * 0.34)).toFixed(3));
  const stiffnessIndexMs = Number((6.2 + stiffness * 5.8).toFixed(2));
  const rmssdMs = Number(Math.max(12, 54 - stiffness * 26 - (params.heartRateBpm - 65) * 0.22).toFixed(1));

  return {
    rawSignal: rawWave,
    filteredSignal: filteredWave,
    sdppgSignal: sdppg,
    sqi: Number(sqi.toFixed(2)),
    rmssdMs,
    bOverA,
    dOverA,
    dicroticNotchRatio,
    stiffnessIndexMs,
    systolicIdx,
    notchIdx,
    diastolicIdx,
  };
}

function applyZeroPhaseMovingBandpass(raw: number[], clean: number[], noise: number): number[] {
  // Illustrative browser simulation blending clean reference and forward-backward 3-tap smoothing
  const n = raw.length;
  const residualNoiseFactor = 0.14 + noise * 0.12;
  const blended = raw.map((v, i) => clean[i] * (1 - residualNoiseFactor) + v * residualNoiseFactor);

  // Forward pass 3-tap smoothing
  const fwd = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    const prev = i > 0 ? blended[i - 1] : blended[i];
    const next = i < n - 1 ? blended[i + 1] : blended[i];
    fwd[i] = 0.25 * prev + 0.5 * blended[i] + 0.25 * next;
  }

  // Backward pass for zero phase distortion
  const bwd = new Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    const prev = i > 0 ? fwd[i - 1] : fwd[i];
    const next = i < n - 1 ? fwd[i + 1] : fwd[i];
    bwd[i] = 0.25 * prev + 0.5 * fwd[i] + 0.25 * next;
  }
  return bwd;
}

export interface RiskCoveragePoint {
  sqiThreshold: number;
  coveragePercent: number;
  abstentionPercent: number;
  selectiveHrMaeBpm: number;
  unfilteredBaselineMaeBpm: number;
}

export interface SelectivePredictionAnalysis {
  activeThreshold: number;
  activePoint: RiskCoveragePoint;
  curve: RiskCoveragePoint[];
}

/**
 * Computes the Selective Prediction Risk-Coverage trade-off curve for quality-gated rPPG HR estimation.
 * Illustrates how increasing the SQI abstention gate threshold tau_SQI reduces Selective Risk (HR MAE in BPM)
 * at the cost of reduced Coverage (higher Abstention Rate on motion/illumination-corrupted windows).
 */
export function computeSelectiveRiskCoverageCurve(activeThreshold = 0.65): SelectivePredictionAnalysis {
  const clampedActive = Number(Math.max(0.0, Math.min(0.95, activeThreshold)).toFixed(2));
  const unfilteredBaselineMaeBpm = 6.85;

  const evalThreshold = (tau: number): RiskCoveragePoint => {
    const t = Number(Math.max(0.0, Math.min(0.95, tau)).toFixed(2));
    // Monotonically decreasing coverage as quality gate tightens
    const coverage = Math.max(12, Math.min(100, 100 - 48 * Math.pow(t, 1.65)));
    const abstention = 100 - coverage;
    // Selective risk (HR MAE in BPM) drops sharply once low-SQI corrupted windows are abstained
    const selectiveMae = Math.max(
      1.12,
      unfilteredBaselineMaeBpm - 5.45 * (1 - Math.exp(-3.4 * Math.pow(t, 1.35))),
    );

    return {
      sqiThreshold: t,
      coveragePercent: Number(coverage.toFixed(1)),
      abstentionPercent: Number(abstention.toFixed(1)),
      selectiveHrMaeBpm: Number(selectiveMae.toFixed(2)),
      unfilteredBaselineMaeBpm,
    };
  };

  const thresholds = [0.0, 0.2, 0.35, 0.5, 0.6, 0.65, 0.72, 0.8, 0.88, 0.94];
  const curve = thresholds.map(evalThreshold);
  const activePoint = evalThreshold(clampedActive);

  return {
    activeThreshold: clampedActive,
    activePoint,
    curve,
  };
}

export type SonarBreathingMode = 'normal' | 'hypopnea' | 'apnea';

export interface SonarSimulationResult {
  chestDisplacementMm: number[];
  iqPoints: Array<{ i: number; q: number }>;
  respiratoryRateBpm: number;
  peakDisplacementMm: number;
  estimatedAhi: number;
  apneaDetected: boolean;
  phaseShiftRad: number;
}

/**
 * SYNTHETIC GENERATOR (EXPLORATORY NEAR-ULTRASONIC ACOUSTIC SENSING MODEL — NOT CLINICAL PSG/HSAT):
 * Simulates 20kHz CW near-ultrasonic acoustic phase modulation from synthetic chest-wall displacement:
 *   Delta_d = (Delta_phi / (4*pi)) * (c / f_c), where c = 343 m/s, f_c = 20,000 Hz => lambda = 17.15 mm.
 * Note: Clinical OSA diagnosis and AHI scoring require multi-channel PSG or validated HSAT (airflow + SpO2) per AASM guidelines.
 */
export function simulateUltrasonicSonar(mode: SonarBreathingMode, tickOffsetSec = 0): SonarSimulationResult {
  const speedOfSoundMmPerSec = 343000;
  const carrierHz = 20000;
  const wavelengthMm = speedOfSoundMmPerSec / carrierHz; // 17.15 mm
  const numSamples = 180; // 18 seconds window @ 10Hz envelope
  const fs = 10;

  const displacement: number[] = [];
  const iqPoints: Array<{ i: number; q: number }> = [];

  const respHz = mode === 'normal' ? 0.25 : mode === 'hypopnea' ? 0.21 : 0.23; // ~15 bpm
  let maxDisp = 0;

  for (let idx = 0; idx < numSamples; idx++) {
    const t = idx / fs + tickOffsetSec;
    const localT = idx / fs;

    let amplitudeMm = 4.6;
    if (mode === 'hypopnea') {
      // Synthetic >30% amplitude reduction regime during 4s..14s
      amplitudeMm = localT >= 4 && localT <= 14 ? 1.5 : 4.4;
    } else if (mode === 'apnea') {
      // Synthetic cessation regime (>= 10s flatline from 3.5s to 14.5s)
      amplitudeMm = localT >= 3.5 && localT <= 14.5 ? 0.14 : 4.5;
    }

    const dMm =
      amplitudeMm * Math.sin(2 * Math.PI * respHz * t) +
      0.18 * Math.sin(2 * Math.PI * 1.15 * t); // synthetic cardiac micro-motion term
    displacement.push(Number(dMm.toFixed(3)));
    if (Math.abs(dMm) > maxDisp) maxDisp = Math.abs(dMm);

    // Phase shift: phi = (4 * pi * d) / lambda
    const phi = (4 * Math.PI * dMm) / wavelengthMm;
    const clutterOffset = 0.08;
    iqPoints.push({
      i: Number((Math.cos(phi) + clutterOffset).toFixed(4)),
      q: Number((Math.sin(phi) + clutterOffset * 0.5).toFixed(4)),
    });
  }

  const latestDisp = displacement[displacement.length - 1] ?? 0;
  const phaseShiftRad = Number(((4 * Math.PI * latestDisp) / wavelengthMm).toFixed(3));

  return {
    chestDisplacementMm: displacement,
    iqPoints,
    respiratoryRateBpm: mode === 'normal' ? 15.0 : mode === 'hypopnea' ? 12.6 : 4.0,
    peakDisplacementMm: Number(maxDisp.toFixed(2)),
    estimatedAhi: mode === 'normal' ? 2.1 : mode === 'hypopnea' ? 11.4 : 24.8,
    apneaDetected: mode === 'apnea',
    phaseShiftRad,
  };
}

export interface HemodynamicInputs {
  ageYears: number;
  heightCm: number;
  weightKg: number;
  fitzpatrickScale: 1 | 2 | 3 | 4 | 5 | 6;
  onBpMeds: boolean;
  heartRateBpm: number;
  hrvRmssdMs: number;
  pttMs: number; // Pulse Transit Time (120 - 320 ms)
  dicroticNotchRatio: number; // 0.15 - 0.85
  stiffnessIndexMs: number; // 5.0 - 13.0 m/s
  baselineSbp: number;
  sqi: number;
}

export interface HemodynamicOutputs {
  pwvMetersPerSec: number;
  estimatedSbp: number;
  estimatedDbp: number;
  estimatedHbA1c: number;
  bmi: number;
  safetyGuardBlocked: boolean;
  melaninCompensationFactor: number;
  riskTier: 'optimal' | 'elevated' | 'clinical-review' | 'blocked';
}

/**
 * SYNTHETIC PARAMETRIC EQUATION EXPLORER (PROPOSED / SIMULATED — NOT A VALIDATED CUFFLESS BP OR HbA1c MONITOR):
 * Demonstrates the SQI >= 0.65 selective abstention gate and parametric sensitivity of Moens-Korteweg / Bramwell-Hill equations.
 */
export function computeHemodynamicEstimate(inputs: HemodynamicInputs): HemodynamicOutputs {
  const heightM = Math.max(1.2, inputs.heightCm / 100);
  const bmi = Number((inputs.weightKg / (heightM * heightM)).toFixed(1));

  // Effective arterial path length approximated as 0.48 * height (m)
  const pathLengthM = 0.48 * heightM;
  const pttSec = Math.max(0.08, inputs.pttMs / 1000);
  const pwv = Number((pathLengthM / pttSec).toFixed(2));

  // Illustrative heuristic placeholder (requires empirical multi-device skin-tone reflectance calibration across Fitzpatrick I-VI)
  const melaninCompensationFactor = Number((1 + (inputs.fitzpatrickScale - 1) * 0.018).toFixed(3));

  const safetyGuardBlocked = inputs.sqi < 0.65;

  // Parametric Bramwell-Hill inspired relation anchored to baseline cuff calibration
  const pttRef = 0.21; // 210 ms reference
  const logRatio = Math.log(pttRef / pttSec);
  const medsOffset = inputs.onBpMeds ? -4.5 : 0;
  const ageTerm = (inputs.ageYears - 35) * 0.24;
  const stiffnessTerm = (inputs.stiffnessIndexMs - 7.5) * 2.1;

  const estimatedSbp = Math.round(
    Math.max(85, Math.min(205, inputs.baselineSbp + 28 * logRatio + ageTerm + stiffnessTerm + medsOffset)),
  );
  const estimatedDbp = Math.round(
    Math.max(52, Math.min(130, estimatedSbp * 0.62 + (inputs.dicroticNotchRatio - 0.4) * 14)),
  );

  // Exploratory hypothesis equation (HbA1c requires venous blood test; optical/autonomic proxy is unvalidated)
  const hrvPenalty = Math.max(0, (42 - inputs.hrvRmssdMs) * 0.025);
  const pwvPenalty = Math.max(0, (pwv - 5.2) * 0.28);
  const bmiPenalty = Math.max(0, (bmi - 24) * 0.045);
  const ageHba1c = Math.max(0, (inputs.ageYears - 30) * 0.015);
  const rawHba1c = 4.9 + hrvPenalty + pwvPenalty + bmiPenalty + ageHba1c;
  const estimatedHbA1c = Number(Math.max(4.4, Math.min(11.8, rawHba1c)).toFixed(2));

  let riskTier: HemodynamicOutputs['riskTier'] = 'optimal';
  if (safetyGuardBlocked) {
    riskTier = 'blocked';
  } else if (estimatedSbp >= 140 || estimatedHbA1c >= 6.5) {
    riskTier = 'clinical-review';
  } else if (estimatedSbp >= 125 || estimatedHbA1c >= 5.7) {
    riskTier = 'elevated';
  }

  return {
    pwvMetersPerSec: pwv,
    estimatedSbp,
    estimatedDbp,
    estimatedHbA1c,
    bmi,
    safetyGuardBlocked,
    melaninCompensationFactor,
    riskTier,
  };
}

export interface EyeLabCalibrationInput {
  colorTempKelvin: number; // 2700K (warm) to 6500K (daylight)
  trueBilirubinMgDl: number; // 0.3 to 8.0 mg/dL
  trueHemoglobinGDl: number; // 7.0 to 16.5 g/dL
}

export interface EyeLabCalibrationOutput {
  uncalibratedBStar: number;
  calibratedBStar: number; // Yellowness axis (+b* = jaundice)
  uncalibratedErythemaIndex: number;
  calibratedErythemaIndex: number; // a* / L* conjunctiva redness
  estimatedBilirubinMgDl: number;
  estimatedHemoglobinGDl: number;
  illuminantDeltaShift: number;
}

/**
 * SYNTHETIC COLORIMETRIC SIMULATION (EXPLORATORY RESEARCH — NOT A VALIDATED CLINICAL ASSAY):
 * Illustrates why ambient color temperature (2700K vs 6500K D65) corrupts uncalibrated CIE L*a*b* values
 * and why physical color-chart / white-point calibration is necessary.
 */
export function computeEyeLabCalibration(input: EyeLabCalibrationInput): EyeLabCalibrationOutput {
  const kelvin = Math.max(2700, Math.min(6500, input.colorTempKelvin));
  const warmthNormalized = (6500 - kelvin) / (6500 - 2700); // 0 at 6500K, 1 at 2700K
  const illuminantBiasBStar = warmthNormalized * 16.4;
  const illuminantBiasRed = warmthNormalized * 0.14;

  const calibratedBStar = Number((2.2 + input.trueBilirubinMgDl * 3.1).toFixed(2));
  const uncalibratedBStar = Number((calibratedBStar + illuminantBiasBStar).toFixed(2));

  const calibratedErythema = Number((0.18 + (input.trueHemoglobinGDl - 6.0) * 0.042).toFixed(3));
  const uncalibratedErythema = Number((calibratedErythema + illuminantBiasRed).toFixed(3));

  const estimatedBilirubin = Number(Math.max(0.2, (calibratedBStar - 2.2) / 3.1).toFixed(2));
  const estimatedHemoglobin = Number(Math.max(5.5, 6.0 + (calibratedErythema - 0.18) / 0.042).toFixed(2));

  return {
    uncalibratedBStar,
    calibratedBStar,
    uncalibratedErythemaIndex: uncalibratedErythema,
    calibratedErythemaIndex: calibratedErythema,
    estimatedBilirubinMgDl: estimatedBilirubin,
    estimatedHemoglobinGDl: estimatedHemoglobin,
    illuminantDeltaShift: Number(illuminantBiasBStar.toFixed(2)),
  };
}

export interface GrantBudgetConfig {
  durationMonths: number;
  opusMillionsTokens: number;
  sonnetMillionsTokens: number;
  fableMillionsTokens: number;
}

export interface GrantBudgetBreakdown {
  opusCostUsd: number;
  sonnetCostUsd: number;
  fableCostUsd: number;
  claudeCodeProUsd: number;
  totalEstimatedUsd: number;
  recommendedTier: string;
}

export function computeAnthropicGrantBudget(cfg: GrantBudgetConfig): GrantBudgetBreakdown {
  const opusCostUsd = Math.round(cfg.opusMillionsTokens * 22);
  const sonnetCostUsd = Math.round(cfg.sonnetMillionsTokens * 6);
  const fableCostUsd = Math.round(cfg.fableMillionsTokens * 4);
  const claudeCodeProUsd = Math.round(cfg.durationMonths * 200);
  const totalEstimatedUsd = opusCostUsd + sonnetCostUsd + fableCostUsd + claudeCodeProUsd;

  const recommendedTier =
    totalEstimatedUsd <= 5000
      ? 'Anthropic AI for Science API Credits — Low Scenario ($5,000 / 6 Months)'
      : totalEstimatedUsd <= 12000
        ? 'Anthropic AI for Science API Credits — Base Scenario ($10,000–$12,000 / 6 Months)'
        : 'Anthropic AI for Science API Credits — High Scenario (Up to $20,000 Ceiling / 6 Months)';

  return {
    opusCostUsd,
    sonnetCostUsd,
    fableCostUsd,
    claudeCodeProUsd,
    totalEstimatedUsd,
    recommendedTier,
  };
}

export interface VerifiedAnthropicApiBudgetInput {
  durationMonths: number; // Standard AI for Science API grant window: 6 months
  opusInputMillions: number; // Claude Opus 4.1 / Opus 4 ($15 / 1M input tokens)
  opusOutputMillions: number; // Claude Opus 4.1 / Opus 4 ($75 / 1M output tokens)
  sonnetInputMillions: number; // Claude Sonnet 4.5 / Sonnet 4 ($3 / 1M input tokens)
  sonnetOutputMillions: number; // Claude Sonnet 4.5 / Sonnet 4 ($15 / 1M output tokens)
  haikuInputMillions: number; // Claude Haiku 3.5 ($0.80 / 1M input tokens)
  haikuOutputMillions: number; // Claude Haiku 3.5 ($4.00 / 1M output tokens)
  promptCacheHitRatio: number; // 0.0 to 0.80 (90% discount on cached input tokens)
  teamStandardSeats: number; // Claude Team Plan for Scientists: $0/mo (up to 25 seats for 12 months)
  teamPremiumSeats: number; // Claude Team Plan for Scientists: $15/user/mo
}

export interface VerifiedAnthropicApiBudgetOutput {
  opusApiUsd: number;
  sonnetApiUsd: number;
  haikuApiUsd: number;
  totalApiCreditsUsd: number;
  withinAiForScience20kCeiling: boolean;
  teamPlanSeparateSubscriptionUsd: number;
  scenarioLabelEn: string;
  scenarioLabelAr: string;
}

/**
 * Computes transparent Input/Output token API costs using documented public Anthropic API pricing
 * for Program B (Anthropic AI for Science API Credits: up to $20,000 USD over 6 months)
 * while strictly separating Program A (Claude Team Plan for Scientists: $0 Standard / $15 Premium per month).
 */
export function computeVerifiedAnthropicApiBudget(
  input: VerifiedAnthropicApiBudgetInput,
): VerifiedAnthropicApiBudgetOutput {
  const cacheHit = Math.max(0, Math.min(0.8, input.promptCacheHitRatio));
  // Effective input multiplier when cacheHit fraction receives a 90% read discount (0.1x rate)
  const inputDiscountMultiplier = 1 - cacheHit * 0.9;

  const opusApiUsd = Math.round(
    input.opusInputMillions * 15 * inputDiscountMultiplier + input.opusOutputMillions * 75,
  );
  const sonnetApiUsd = Math.round(
    input.sonnetInputMillions * 3 * inputDiscountMultiplier + input.sonnetOutputMillions * 15,
  );
  const haikuApiUsd = Math.round(
    input.haikuInputMillions * 0.8 * inputDiscountMultiplier + input.haikuOutputMillions * 4.0,
  );

  const totalApiCreditsUsd = opusApiUsd + sonnetApiUsd + haikuApiUsd;
  const withinAiForScience20kCeiling = totalApiCreditsUsd <= 20000;

  const months = Math.max(1, Math.min(12, input.durationMonths));
  const teamPlanSeparateSubscriptionUsd = Math.round(Math.max(0, input.teamPremiumSeats) * 15 * months);

  let scenarioLabelEn = 'Base Research Scenario (Within $20,000 / 6-Month AI for Science API Ceiling)';
  let scenarioLabelAr = 'السيناريو البحثي الأساسي (ضمن سقف 20,000 دولار لمدة 6 أشهر لبرنامج AI for Science)';

  if (totalApiCreditsUsd <= 5000) {
    scenarioLabelEn = 'Low / Focused Pilot Scenario (<= $5,000 API Credits over 6 Months)';
    scenarioLabelAr = 'السيناريو المنخفض / التجريبي المركز (أقل من 5,000 دولار أرصدة API خلال 6 أشهر)';
  } else if (totalApiCreditsUsd > 20000) {
    scenarioLabelEn = 'Exceeds $20,000 6-Month AI for Science Ceiling — Reduce Token Volume or Increase Caching';
    scenarioLabelAr = 'يتجاوز سقف 20,000 دولار لبرنامج AI for Science (6 أشهر) — يلزم تقليل حجم التوكنز أو زيادة التخزين المؤقت';
  } else if (totalApiCreditsUsd >= 14000) {
    scenarioLabelEn = 'High Scale Validation Scenario ($14,000–$20,000 API Credits over 6 Months)';
    scenarioLabelAr = 'السيناريو المرتفع لتوسيع التحقق البحثي (14,000 إلى 20,000 دولار أرصدة API خلال 6 أشهر)';
  }

  return {
    opusApiUsd,
    sonnetApiUsd,
    haikuApiUsd,
    totalApiCreditsUsd,
    withinAiForScience20kCeiling,
    teamPlanSeparateSubscriptionUsd,
    scenarioLabelEn,
    scenarioLabelAr,
  };
}

export interface EarlyDetectionRescueBreakdown {
  coveragePercent: number;
  hypertensionUndiagnosed: number;
  hypertensionRescued: number;
  sleepApneaUndiagnosed: number;
  sleepApneaRescued: number;
  diabetesUndiagnosed: number;
  diabetesRescued: number;
  maternalPediatricHighRisk: number;
  maternalPediatricRescued: number;
  totalSilentPool: number;
  totalRescuedPopulation: number;
}

/**
 * THEORETICAL TARGET SCREENING POPULATION REACH (NON-ADDITIVE ACROSS COMORBIDITIES):
 * Computes the theoretical population reach if a hypothetical smartphone screening tool reached `coveragePercent`
 * of documented undiagnosed condition pools.
 * IMPORTANT EPIDEMIOLOGICAL CAVEAT:
 *   1. Condition pools overlap substantially (e.g., hypertension + OSA + diabetes co-occur in the same individuals)
 *      and therefore CANNOT be summed as unique individuals.
 *   2. Theoretical screening reach != validated clinical diagnosis != lives saved.
 */
export function computeEarlyDetectionRescueImpact(
  coveragePercent = 80
): EarlyDetectionRescueBreakdown {
  const clampedPct = Math.max(10, Math.min(100, coveragePercent));
  const ratio = clampedPct / 100;

  const hypertensionUndiagnosed = 600_000_000; // ~44% of 1.4B adults aged 30-79 (WHO Fact Sheet, Sep 2025)
  const sleepApneaUndiagnosed = 800_000_000; // ~85% undiagnosed out of 936M adults aged 30-69 with AHI>=5 (Benjafield et al., Lancet Respir Med 2019)
  const diabetesUndiagnosed = 252_000_000; // ~43% of 589M adults aged 20-79 (IDF Diabetes Atlas 11th Ed, 2025)
  const maternalPediatricHighRisk = 301_000_000; // 269M children aged 6-59m + 32M pregnant women with anemia (WHO 2019 estimates)

  const hypertensionRescued = Math.round(hypertensionUndiagnosed * ratio);
  const sleepApneaRescued = Math.round(sleepApneaUndiagnosed * ratio);
  const diabetesRescued = Math.round(diabetesUndiagnosed * ratio);
  const maternalPediatricRescued = Math.round(maternalPediatricHighRisk * ratio);

  const totalSilentPool =
    hypertensionUndiagnosed +
    sleepApneaUndiagnosed +
    diabetesUndiagnosed +
    maternalPediatricHighRisk;

  const totalRescuedPopulation =
    hypertensionRescued +
    sleepApneaRescued +
    diabetesRescued +
    maternalPediatricRescued;

  return {
    coveragePercent: clampedPct,
    hypertensionUndiagnosed,
    hypertensionRescued,
    sleepApneaUndiagnosed,
    sleepApneaRescued,
    diabetesUndiagnosed,
    diabetesRescued,
    maternalPediatricHighRisk,
    maternalPediatricRescued,
    totalSilentPool,
    totalRescuedPopulation,
  };
}
