import test from 'node:test';
import assert from 'node:assert/strict';
import {
  simulatePosRppgWindow,
  simulateUltrasonicSonar,
  computeHemodynamicEstimate,
  computeEyeLabCalibration,
  computeAnthropicGrantBudget,
  computeEarlyDetectionRescueImpact,
} from './biophysicsMath';

test('POS rPPG + zero-phase filter suppresses high motion noise and boosts SQI', () => {
  const unfiltered = simulatePosRppgWindow({
    heartRateBpm: 72,
    arterialStiffness: 0.35,
    motionNoise: 0.75,
    enableFilter: false,
  });

  const filtered = simulatePosRppgWindow({
    heartRateBpm: 72,
    arterialStiffness: 0.35,
    motionNoise: 0.75,
    enableFilter: true,
  });

  assert.equal(unfiltered.rawSignal.length, 180);
  assert.equal(filtered.sdppgSignal.length, 180);
  assert.ok(filtered.sqi > unfiltered.sqi, 'Filtered SQI should exceed unfiltered SQI under motion noise');
  assert.ok(filtered.systolicIdx < filtered.notchIdx, 'Systolic peak must precede dicrotic notch');
});

test('20kHz ultrasonic sonar detects obstructive apnea >= 10s with flat chest displacement', () => {
  const normal = simulateUltrasonicSonar('normal');
  const apnea = simulateUltrasonicSonar('apnea');

  assert.equal(normal.apneaDetected, false);
  assert.equal(apnea.apneaDetected, true);
  assert.ok(apnea.estimatedAhi > 15, 'Apnea mode should elevate AHI above 15');
  assert.equal(apnea.iqPoints.length, 180);
});

test('Hemodynamic estimator triggers clinical safety guard when SQI < 0.65', () => {
  const blocked = computeHemodynamicEstimate({
    ageYears: 45,
    heightCm: 175,
    weightKg: 78,
    fitzpatrickScale: 4,
    onBpMeds: false,
    heartRateBpm: 74,
    hrvRmssdMs: 32,
    pttMs: 185,
    dicroticNotchRatio: 0.48,
    stiffnessIndexMs: 8.6,
    baselineSbp: 122,
    sqi: 0.52,
  });

  assert.equal(blocked.safetyGuardBlocked, true);
  assert.equal(blocked.riskTier, 'blocked');

  const valid = computeHemodynamicEstimate({
    ageYears: 45,
    heightCm: 175,
    weightKg: 78,
    fitzpatrickScale: 4,
    onBpMeds: false,
    heartRateBpm: 74,
    hrvRmssdMs: 32,
    pttMs: 185,
    dicroticNotchRatio: 0.48,
    stiffnessIndexMs: 8.6,
    baselineSbp: 122,
    sqi: 0.89,
  });

  assert.equal(valid.safetyGuardBlocked, false);
  assert.ok(valid.pwvMetersPerSec > 3 && valid.pwvMetersPerSec < 15);
  assert.ok(valid.estimatedHbA1c >= 4.4 && valid.estimatedHbA1c <= 11.8);
});

test('Eye CIE L*a*b* Bradford calibration keeps b* invariant across 2700K vs 6500K lighting', () => {
  const warm2700 = computeEyeLabCalibration({
    colorTempKelvin: 2700,
    trueBilirubinMgDl: 2.5,
    trueHemoglobinGDl: 11.0,
  });

  const daylight6500 = computeEyeLabCalibration({
    colorTempKelvin: 6500,
    trueBilirubinMgDl: 2.5,
    trueHemoglobinGDl: 11.0,
  });

  assert.ok(warm2700.uncalibratedBStar > daylight6500.uncalibratedBStar + 10);
  assert.equal(warm2700.calibratedBStar, daylight6500.calibratedBStar);
  assert.equal(warm2700.estimatedBilirubinMgDl, 2.5);
  assert.equal(warm2700.estimatedHemoglobinGDl, 11.0);
});

test('Anthropic grant budget calculator computes deterministic total and tier', () => {
  const budget = computeAnthropicGrantBudget({
    durationMonths: 6,
    opusMillionsTokens: 120,
    sonnetMillionsTokens: 350,
    fableMillionsTokens: 100,
  });

  assert.equal(budget.opusCostUsd, 2640);
  assert.equal(budget.sonnetCostUsd, 2100);
  assert.equal(budget.fableCostUsd, 400);
  assert.equal(budget.claudeCodeProUsd, 1200);
  assert.equal(budget.totalEstimatedUsd, 6340);
});

test('Early detection rescue impact at 80% coverage equals 1,562,400,000 people', () => {
  const impact = computeEarlyDetectionRescueImpact(80);
  assert.equal(impact.hypertensionRescued, 480_000_000);
  assert.equal(impact.sleepApneaRescued, 640_000_000);
  assert.equal(impact.diabetesRescued, 201_600_000);
  assert.equal(impact.maternalPediatricRescued, 240_800_000);
  assert.equal(impact.totalRescuedPopulation, 1_562_400_000);
});

