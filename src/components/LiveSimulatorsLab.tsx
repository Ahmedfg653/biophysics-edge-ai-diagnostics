import React, { useState } from 'react';
import {
  Activity,
  Radio,
  HeartPulse,
  Eye,
  AlertTriangle,
  ShieldAlert,
  CheckCircle2,
  Sliders,
  Info,
} from 'lucide-react';
import {
  Language,
  simulatePosRppgWindow,
  simulateUltrasonicSonar,
  computeHemodynamicEstimate,
  computeEyeLabCalibration,
  SonarBreathingMode,
} from '../utils/biophysicsMath';

interface Props {
  lang: Language;
}

export const LiveSimulatorsLab: React.FC<Props> = ({ lang }) => {
  const isAr = lang === 'ar';

  // Simulator 1: POS rPPG + SDPPG State
  const [hrBpm, setHrBpm] = useState<number>(72);
  const [stiffness, setStiffness] = useState<number>(0.32);
  const [motionNoise, setMotionNoise] = useState<number>(0.45);
  const [enableFilter, setEnableFilter] = useState<boolean>(true);

  const rppgSnap = simulatePosRppgWindow({
    heartRateBpm: hrBpm,
    arterialStiffness: stiffness,
    motionNoise,
    enableFilter,
  });

  // Simulator 2: 20kHz Near-Ultrasonic Acoustic Phase Model State
  const [sonarMode, setSonarMode] = useState<SonarBreathingMode>('normal');
  const [sonarPhaseOffset, setSonarPhaseOffset] = useState<number>(0);
  const sonarSnap = simulateUltrasonicSonar(sonarMode, sonarPhaseOffset);

  // Simulator 3: Parametric Hemodynamic & SQI Abstention Explorer State
  const [ageYears, setAgeYears] = useState<number>(46);
  const [pttMs, setPttMs] = useState<number>(195);
  const [simSqi, setSimSqi] = useState<number>(0.82);
  const [fitzpatrick, setFitzpatrick] = useState<1 | 2 | 3 | 4 | 5 | 6>(4);
  const [baselineSbp, setBaselineSbp] = useState<number>(122);
  const [onBpMeds, setOnBpMeds] = useState<boolean>(false);

  const hemoOut = computeHemodynamicEstimate({
    ageYears,
    heightCm: 174,
    weightKg: 79,
    fitzpatrickScale: fitzpatrick,
    onBpMeds,
    heartRateBpm: hrBpm,
    hrvRmssdMs: rppgSnap.rmssdMs,
    pttMs,
    dicroticNotchRatio: rppgSnap.dicroticNotchRatio,
    stiffnessIndexMs: rppgSnap.stiffnessIndexMs,
    baselineSbp,
    sqi: simSqi,
  });

  // Simulator 4: Ocular CIE L*a*b* Bradford Chromatic Adaptation State
  const [kelvin, setKelvin] = useState<number>(3200);
  const [trueBilirubin, setTrueBilirubin] = useState<number>(2.4);
  const [trueHb, setTrueHb] = useState<number>(10.8);

  const eyeOut = computeEyeLabCalibration({
    colorTempKelvin: kelvin,
    trueBilirubinMgDl: trueBilirubin,
    trueHemoglobinGDl: trueHb,
  });

  // Helper to convert 1D array to SVG polyline points
  const toPolyline = (arr: number[], width: number, height: number, minVal: number, maxVal: number) => {
    if (arr.length === 0) return '';
    const range = Math.max(0.0001, maxVal - minVal);
    return arr
      .map((val, idx) => {
        const x = (idx / (arr.length - 1)) * width;
        const normY = (val - minVal) / range;
        const y = height - Math.max(0, Math.min(1, normY)) * (height - 16) - 8;
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(' ');
  };

  return (
    <section id="simulators" className="py-12 border-b border-slate-200 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100 border border-amber-400 text-amber-950 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-800" />
            {isAr
              ? 'مختبر النماذج الرياضية الاصطناعية التفاعلي (بيانات محاكاة — ليست قياسات مرضى)'
              : 'INTERACTIVE MATHEMATICAL SIGNAL GENERATORS (SIMULATED DATA — NOT PATIENT RECORDINGS)'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-serif">
            {isAr
              ? 'المختبرات الرياضية التفاعلية الأربعة: الشفافية الكاملة لمعادلات التوليد الاصطناعي'
              : 'Four Interactive Mathematical Signal Laboratories: Full Synthetic Equation Transparency'}
          </h2>
          <p className="mt-2 text-sm text-slate-600 max-w-4xl leading-relaxed">
            {isAr
              ? 'تعمل جميع الرسوم الموجية والمخرجات الرقمية في هذا القسم بواسطة دوال رياضية حتمية مكتوبة بلغة TypeScript داخل الملف src/utils/biophysicsMath.ts. تم وضع شارة "SIMULATED DATA — NOT A CLINICAL MEASUREMENT" والمعادلة الرياضية المولدة فوق كل محاكي لضمان عدم الخلط بين النمذجة الفيزيائية الحيوية وبين القياسات السريرية الفعلية.'
              : 'Every waveform and numerical readout in this section is generated in real time by deterministic TypeScript mathematical functions in src/utils/biophysicsMath.ts. Each simulator displays a permanent "SIMULATED DATA — NOT A CLINICAL MEASUREMENT" badge and its exact synthetic generator equation so reviewers can inspect the underlying mathematical assumptions directly.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* =====================================================================
              SIMULATOR 1: POS rPPG + SDPPG + Motion Noise & SQI Gate (V1 Core)
             ===================================================================== */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between">
            <div>
              {/* Mandatory Permanent Simulated Badge */}
              <div className="mb-3 p-2.5 rounded-lg bg-amber-50 border border-amber-300 flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-extrabold text-amber-950 uppercase">
                  <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
                  {isAr
                    ? 'بيانات اصطناعية محاكاة — ليست قياساً سريرياً لمريض'
                    : 'SIMULATED DATA — NOT A CLINICAL MEASUREMENT'}
                </span>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-900">
                  V1 CORE MODEL (SIMULATED)
                </span>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <Activity className="w-5 h-5 text-blue-800" />
                <h3 className="text-base font-bold text-slate-900">
                  {isAr
                    ? '1. مولد موجة النبض الشرياني الاصطناعي (POS rPPG & SDPPG) وبوابة SQI'
                    : '1. Synthetic Multi-Harmonic POS rPPG, SDPPG & SQI Gate Simulator'}
                </h3>
              </div>

              {/* Exact Mathematical Equation Box */}
              <div className="p-2.5 rounded-lg bg-slate-900 text-slate-100 font-mono text-[10.5px] mb-3 overflow-x-auto">
                <div className="text-amber-300 font-bold mb-0.5">
                  // Generator: simulatePosRppgWindow() in src/utils/biophysicsMath.ts
                </div>
                <div>
                  x_clean(t) = exp(-((φ-0.16)/0.068)²) + A_ref·exp(-((φ-c_ref)/0.085)²) + A_dia·exp(-((φ-c_dia)/0.095)²) - 0.28
                </div>
                <div>
                  n_motion(t) = noise · [0.55·sin(2π·4.2t + 0.4) + 0.38·sin(2π·0.28t) + 0.22·cos(2π·7.8t)]
                </div>
              </div>

              {/* Interactive Sliders */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                <div>
                  <div className="flex justify-between font-semibold text-slate-700 mb-1">
                    <span>{isAr ? 'معدل النبض الاصطناعي:' : 'Synthetic HR:'}</span>
                    <span className="font-mono text-blue-900">{hrBpm} BPM</span>
                  </div>
                  <input
                    type="range"
                    min={50}
                    max={140}
                    value={hrBpm}
                    onChange={(e) => setHrBpm(Number(e.target.value))}
                    aria-label="Synthetic Heart Rate BPM"
                    className="w-full accent-blue-900 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between font-semibold text-slate-700 mb-1">
                    <span>{isAr ? 'معامل الصلابة الشريانية:' : 'Stiffness Param:'}</span>
                    <span className="font-mono text-blue-900">{stiffness.toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.05}
                    value={stiffness}
                    onChange={(e) => setStiffness(Number(e.target.value))}
                    aria-label="Arterial Stiffness Parameter"
                    className="w-full accent-blue-900 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between font-semibold text-slate-700 mb-1">
                    <span>{isAr ? 'ضوضاء الحركة (4.2Hz):' : 'Motion Noise:'}</span>
                    <span className="font-mono text-rose-800">{motionNoise.toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.05}
                    value={motionNoise}
                    onChange={(e) => setMotionNoise(Number(e.target.value))}
                    aria-label="Synthetic Motion Noise"
                    className="w-full accent-rose-700 cursor-pointer"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between mb-2">
                <button
                  onClick={() => setEnableFilter(!enableFilter)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold border transition cursor-pointer ${
                    enableFilter
                      ? 'bg-emerald-50 text-emerald-900 border-emerald-300'
                      : 'bg-slate-100 text-slate-700 border-slate-300'
                  }`}
                >
                  <Sliders className="w-3.5 h-3.5" />
                  {enableFilter
                    ? isAr
                      ? 'الترشيح الأمامي-الخلفي (Zero-Phase Smoothing): مفعل'
                      : 'Zero-Phase Forward-Backward Smoothing: ON'
                    : isAr
                      ? 'الترشيح الأمامي-الخلفي: متوقف (إشارة خام)'
                      : 'Zero-Phase Smoothing: OFF (Raw Corrupted)'}
                </button>

                <span
                  className={`font-mono text-xs font-bold px-2.5 py-1 rounded border ${
                    rppgSnap.sqi >= 0.65
                      ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                      : 'bg-rose-100 text-rose-900 border-rose-300'
                  }`}
                >
                  SQI = {rppgSnap.sqi.toFixed(2)} {rppgSnap.sqi >= 0.65 ? '(GATE PASS)' : '(ABSTAIN / BLOCK)'}
                </span>
              </div>

              {/* Dual SVG Plot: Filtered vs Raw Wave + SDPPG */}
              <div className="space-y-2">
                <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="flex justify-between text-[10px] font-mono text-slate-400 mb-1">
                    <span>
                      {isAr
                        ? 'موجة POS rPPG الاصطناعية (180 عينة / نافذة 3.0 ثانية غير سببية)'
                        : 'Synthetic POS rPPG Window (180 samples / 3.0s non-causal buffer)'}
                    </span>
                    <span className="text-emerald-400">Green: Filtered | Red: Raw Motion-Corrupted</span>
                  </div>
                  <svg viewBox="0 0 520 90" className="w-full h-22">
                    <polyline
                      fill="none"
                      stroke="#f43f5e"
                      strokeWidth="1.2"
                      strokeOpacity="0.65"
                      points={toPolyline(rppgSnap.rawSignal, 520, 90, -1.2, 1.8)}
                    />
                    <polyline
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2.2"
                      points={toPolyline(rppgSnap.filteredSignal, 520, 90, -1.2, 1.8)}
                    />
                  </svg>
                </div>

                <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="flex justify-between text-[10px] font-mono text-slate-400 mb-1">
                    <span>
                      {isAr
                        ? 'المشتقة الثانية للموجة (SDPPG = d²x/dt²) ونسب المعالم الاصطلاحية'
                        : 'Second Derivative Acceleration Plethysmogram (SDPPG = d²x/dt²)'}
                    </span>
                    <span className="text-sky-400">
                      b/a = {rppgSnap.bOverA} | d/a = {rppgSnap.dOverA} | Notch = {rppgSnap.dicroticNotchRatio}
                    </span>
                  </div>
                  <svg viewBox="0 0 520 65" className="w-full h-16">
                    <polyline
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="1.8"
                      points={toPolyline(rppgSnap.sdppgSignal, 520, 65, -2.5, 2.5)}
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mt-3 pt-2.5 border-t border-slate-100 text-[11px] text-slate-500 leading-relaxed">
              {isAr
                ? 'ملاحظة هندسية (القسم 5.4): يعمل مرشح filtfilt غير السببي على نافذة مخزنة بطول 3.0 ثانية (180 عينة عند 60Hz)، مما يضيف زمن تجميع نافذة مقابل إلغاء تشوه الطور.'
                : 'Engineering Note (Audit Section 5.4): Forward-backward zero-phase filtering operates on a buffered 3.0s (180-sample @ 60Hz) window, trading window buffering latency for zero phase distortion.'}
            </div>
          </div>

          {/* =====================================================================
              SIMULATOR 2: 20 kHz Near-Ultrasonic Acoustic Phase Model (Exploratory)
             ===================================================================== */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between">
            <div>
              {/* Mandatory Permanent Simulated Badge */}
              <div className="mb-3 p-2.5 rounded-lg bg-amber-50 border border-amber-300 flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-extrabold text-amber-950 uppercase">
                  <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
                  {isAr
                    ? 'بيانات اصطناعية محاكاة — ليست قياساً سريرياً لمريض'
                    : 'SIMULATED DATA — NOT A CLINICAL MEASUREMENT'}
                </span>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-900">
                  EXPLORATORY ACOUSTIC MODEL (PROPOSED)
                </span>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <Radio className="w-5 h-5 text-indigo-800" />
                <h3 className="text-base font-bold text-slate-900">
                  {isAr
                    ? '2. النموذج الرياضي الاستكشافي للطور الصوتي شبه فوق الصوتي (20 kHz)'
                    : '2. Exploratory 20 kHz Near-Ultrasonic Acoustic Phase-Modulation Simulator'}
                </h3>
              </div>

              {/* Exact Mathematical Equation Box */}
              <div className="p-2.5 rounded-lg bg-slate-900 text-slate-100 font-mono text-[10.5px] mb-3 overflow-x-auto">
                <div className="text-amber-300 font-bold mb-0.5">
                  // Generator: simulateUltrasonicSonar() in src/utils/biophysicsMath.ts
                </div>
                <div>
                  d_chest(t) = A_mode(t)·sin(2π·f_resp·t) + 0.18·sin(2π·1.15t) | λ = c / f_c = 343,000 / 20,000 = 17.15 mm
                </div>
                <div>
                  φ(t) = (4π · d_chest(t)) / λ ; I(t) = cos(φ(t)) + I_clutter , Q(t) = sin(φ(t)) + Q_clutter
                </div>
              </div>

              {/* Synthetic Regime Selector Buttons (No "Patient" Labels - Audit Section 2.2) */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <button
                  onClick={() => setSonarMode('normal')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition cursor-pointer ${
                    sonarMode === 'normal'
                      ? 'bg-indigo-900 text-white border-indigo-900'
                      : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
                  }`}
                >
                  {isAr ? 'موجة تنفس منتظم اصطناعية (0.25 Hz)' : 'Synthetic Eupnea Waveform (0.25 Hz)'}
                </button>
                <button
                  onClick={() => setSonarMode('hypopnea')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition cursor-pointer ${
                    sonarMode === 'hypopnea'
                      ? 'bg-amber-700 text-white border-amber-700'
                      : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
                  }`}
                >
                  {isAr ? 'نموذج انخفاض سعة اصطناعي (>30%)' : 'Synthetic Amplitude-Drop Model (>30%)'}
                </button>
                <button
                  onClick={() => setSonarMode('apnea')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition cursor-pointer ${
                    sonarMode === 'apnea'
                      ? 'bg-rose-800 text-white border-rose-800'
                      : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
                  }`}
                >
                  {isAr ? 'نموذج توقف موجة اصطناعي (11 ثانية)' : 'Synthetic Flatline Model (11s Window)'}
                </button>
                <button
                  onClick={() => setSonarPhaseOffset((prev) => prev + 0.8)}
                  className="px-2.5 py-1.5 rounded-lg text-xs font-mono bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 cursor-pointer"
                >
                  {isAr ? 'إزاحة الطور الزمني +0.8s' : 'Step Phase +0.8s'}
                </button>
              </div>

              {/* Waveform & I/Q Constellation */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2 p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="flex justify-between text-[10px] font-mono text-slate-400 mb-1">
                    <span>
                      {isAr
                        ? 'إزاحة جدار الصدر الاصطناعية (ملم خلال نافذة 18 ثانية)'
                        : 'Synthetic Chest-Wall Displacement d(t) [mm over 18s window]'}
                    </span>
                    <span className="text-indigo-300">Peak: ±{sonarSnap.peakDisplacementMm} mm</span>
                  </div>
                  <svg viewBox="0 0 360 95" className="w-full h-24">
                    <polyline
                      fill="none"
                      stroke={sonarMode === 'apnea' ? '#f43f5e' : sonarMode === 'hypopnea' ? '#f59e0b' : '#818cf8'}
                      strokeWidth="2.2"
                      points={toPolyline(sonarSnap.chestDisplacementMm, 360, 95, -5.5, 5.5)}
                    />
                  </svg>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex flex-col items-center justify-center">
                  <div className="text-[10px] font-mono text-slate-400 mb-1 text-center">
                    {isAr ? 'مخطط الطور المتعامد I/Q' : 'Baseband I/Q Arc'}
                  </div>
                  <svg viewBox="0 0 100 100" className="w-22 h-22">
                    <circle cx="50" cy="50" r="38" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />
                    {sonarSnap.iqPoints.slice(-35).map((pt, idx) => (
                      <circle
                        key={idx}
                        cx={50 + pt.i * 34}
                        cy={50 - pt.q * 34}
                        r="2.2"
                        fill="#38bdf8"
                        fillOpacity={(idx + 5) / 40}
                      />
                    ))}
                  </svg>
                  <div className="text-[10px] font-mono text-sky-300 mt-1">
                    Δφ = {sonarSnap.phaseShiftRad} rad
                  </div>
                </div>
              </div>

              {/* Mandatory AASM & 7 Hardware Constraints Disclosure (Audit Section 3.5 & 3.6) */}
              <div className="mt-3 p-3 rounded-lg bg-amber-50/70 border border-amber-200 text-[11px] text-amber-950 space-y-1.5">
                <div className="font-bold">
                  {isAr
                    ? 'قيود سريرية وفيزيائية إلزامية (إرشادات AASM والأسئلة العتادية السبعة):'
                    : 'Mandatory Clinical & Acoustic Hardware Limitations (AASM Guidelines & Section 3.5–3.6):'}
                </div>
                <p>
                  {isAr
                    ? '• إرشادات AASM السريرية: تشخيص انقطاع التنفس الانسدادي (OSA) وحساب مؤشر AHI السريري يتطلبان تخطيط نوم متعدد القنوات (PSG) أو فحص نوم منزلي معتمد (HSAT) يقيس تدفق الهواء الأنفي/الفموي وتشبع الأكسجين (SpO2 >= 3% desaturation). حركة جدار الصدر وحدها لا تشخص OSA.'
                    : '• AASM Clinical Guideline: Clinical OSA diagnosis and AHI scoring require multi-channel Polysomnography (PSG) or validated HSAT measuring nasal/oral airflow and arterial SpO2 desaturation (>=3%). Single-channel chest-wall motion CANNOT clinically diagnose OSA.'}
                </p>
                <p>
                  {isAr
                    ? '• الأسئلة الهندسية السبعة المفتوحة للتحقق العتادي: (1) هبوط استجابة سماعة الهاتف عند 20 kHz، (2) حساسية الميكروفون، (3) مرشحات النظام رغم AudioSource.UNPROCESSED، (4) هامش Nyquist عند 48 kHz (تردد 24 kHz)، (5) ثبات الطور I/Q، (6) تداخل الانعكاسات المتعددة للغرفة والأغطية، (7) الاستهلاك الحراري والبطارية خلال 8 ساعات.'
                    : '• 7 Open Hardware Verification Questions: (1) Miniature speaker roll-off at 20 kHz, (2) MEMS mic sensitivity at 20 kHz, (3) OEM DSP filtering despite UNPROCESSED flag, (4) 48 kHz sampling Nyquist margin (24 kHz), (5) I/Q phase stability across frames, (6) Room/bedding multipath clutter, and (7) 8-hour thermal & battery drain.'}
                </p>
              </div>
            </div>
          </div>

          {/* =====================================================================
              SIMULATOR 3: Hemodynamic Parametric Equation Explorer & SQI Gate
             ===================================================================== */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between">
            <div>
              {/* Mandatory Permanent Simulated Badge */}
              <div className="mb-3 p-2.5 rounded-lg bg-amber-50 border border-amber-300 flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-extrabold text-amber-950 uppercase">
                  <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
                  {isAr
                    ? 'بيانات اصطناعية محاكاة — ليست قياساً سريرياً لمريض'
                    : 'SIMULATED DATA — NOT A CLINICAL MEASUREMENT'}
                </span>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-900">
                  PARAMETRIC EQUATION EXPLORER (PROPOSED)
                </span>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <HeartPulse className="w-5 h-5 text-rose-800" />
                <h3 className="text-base font-bold text-slate-900">
                  {isAr
                    ? '3. مستكشف معادلات Bramwell-Hill البارامترية وبوابة الامتناع (SQI < 0.65)'
                    : '3. Parametric Bramwell-Hill Hemodynamic Explorer & SQI Abstention Gate'}
                </h3>
              </div>

              {/* Exact Mathematical Equation Box */}
              <div className="p-2.5 rounded-lg bg-slate-900 text-slate-100 font-mono text-[10.5px] mb-3 overflow-x-auto">
                <div className="text-amber-300 font-bold mb-0.5">
                  // Generator: computeHemodynamicEstimate() in src/utils/biophysicsMath.ts
                </div>
                <div>
                  PWV = (0.48 · Height_m) / PTT_sec ; SBP_sim = SBP_base + 28·ln(0.21 / PTT_sec) + 0.24·(Age-35) + 2.1·(SI-7.5)
                </div>
                <div>
                  Gate Rule: if (SQI &lt; 0.65) =&gt; ABSTAIN (Suppress all hemodynamic outputs)
                </div>
              </div>

              {/* Sliders */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                <div>
                  <div className="flex justify-between font-semibold text-slate-700 mb-1">
                    <span>{isAr ? 'مؤشر جودة الإشارة (SQI Gate):' : 'Input Signal Quality (SQI):'}</span>
                    <span
                      className={`font-mono font-bold ${
                        simSqi < 0.65 ? 'text-rose-700' : 'text-emerald-800'
                      }`}
                    >
                      {simSqi.toFixed(2)} {simSqi < 0.65 ? '(< 0.65 BLOCKED)' : '(>= 0.65 PASS)'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0.3}
                    max={0.95}
                    step={0.03}
                    value={simSqi}
                    onChange={(e) => setSimSqi(Number(e.target.value))}
                    aria-label="Simulated Signal Quality Index"
                    className="w-full accent-blue-900 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between font-semibold text-slate-700 mb-1">
                    <span>{isAr ? 'زمن عبور النبضة الاصطناعي (PTT):' : 'Synthetic PTT Input:'}</span>
                    <span className="font-mono text-blue-900">{pttMs} ms</span>
                  </div>
                  <input
                    type="range"
                    min={135}
                    max={290}
                    step={5}
                    value={pttMs}
                    onChange={(e) => setPttMs(Number(e.target.value))}
                    aria-label="Synthetic Pulse Transit Time ms"
                    className="w-full accent-blue-900 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between font-semibold text-slate-700 mb-1">
                    <span>{isAr ? 'ضغط المعايرة الأساسي بالكفة (SBP_base):' : 'Baseline Cuff Calibration SBP:'}</span>
                    <span className="font-mono text-blue-900">{baselineSbp} mmHg</span>
                  </div>
                  <input
                    type="range"
                    min={95}
                    max={160}
                    step={1}
                    value={baselineSbp}
                    onChange={(e) => setBaselineSbp(Number(e.target.value))}
                    aria-label="Baseline Cuff Calibration SBP"
                    className="w-full accent-blue-900 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between font-semibold text-slate-700 mb-1">
                    <span>{isAr ? 'مقياس لون البشرة (Fitzpatrick I–VI):' : 'Skin Tone Scale (Fitzpatrick):'}</span>
                    <span className="font-mono text-blue-900">
                      Type {fitzpatrick} (Factor {hemoOut.melaninCompensationFactor})
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={6}
                    step={1}
                    value={fitzpatrick}
                    onChange={(e) => setFitzpatrick(Number(e.target.value) as 1 | 2 | 3 | 4 | 5 | 6)}
                    aria-label="Fitzpatrick Skin Tone Scale"
                    className="w-full accent-blue-900 cursor-pointer"
                  />
                </div>
              </div>

              {/* Output Display with Hard Abstention Gate */}
              {hemoOut.safetyGuardBlocked ? (
                <div className="p-4 rounded-xl bg-rose-50 border-2 border-rose-400 text-rose-950 text-xs">
                  <div className="font-mono font-bold uppercase text-rose-900 flex items-center gap-2 mb-1">
                    <ShieldAlert className="w-4 h-4 text-rose-700" />
                    {isAr
                      ? 'تم تفعيل بوابة الامتناع الواعية بعدم اليقين (SQI < 0.65 — ABSTAINED)'
                      : 'UNCERTAINTY-AWARE ABSTENTION GATE TRIGGERED (SQI < 0.65 — OUTPUT BLOCKED)'}
                  </div>
                  <p>
                    {isAr
                      ? 'تم حجب جميع المخرجات الهيموديناميكية لمنع إخراج أرقام مضللة من نافذة إشارة منخفضة الجودة. ارفع مؤشر SQI إلى 0.65 أو أعلى لمعاينة المعادلة البارامترية.'
                      : 'All parametric outputs are suppressed to prevent false physiological estimates from a corrupted signal window. Increase SQI to >= 0.65 to inspect the parametric model.'}
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-2.5 text-center">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="text-[10px] font-mono text-slate-500">
                      {isAr ? 'سرعة موجة النبض (PWV)' : 'Simulated PWV'}
                    </div>
                    <div className="text-base font-bold font-mono text-slate-900">
                      {hemoOut.pwvMetersPerSec} m/s
                    </div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="text-[10px] font-mono text-slate-500">
                      {isAr ? 'ضغط بارامتري (بمعايرة كفة)' : 'Cuff-Anchored Parametric BP'}
                    </div>
                    <div className="text-base font-bold font-mono text-blue-900">
                      {hemoOut.estimatedSbp}/{hemoOut.estimatedDbp} mmHg
                    </div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-amber-50/70 border border-amber-200">
                    <div className="text-[10px] font-mono text-amber-900">
                      {isAr ? 'فرضية استكشافية غير مصادق عليها' : 'Unvalidated Proxy Hypothesis'}
                    </div>
                    <div className="text-xs font-bold font-mono text-amber-950 mt-0.5">
                      HbA1c Requires Lab Blood Test
                    </div>
                  </div>
                </div>
              )}

              {/* Mandatory PTT vs PAT & IEEE 1708-2025 vs ISO 81060-2 Disclosure (Audit Section 3.2, 3.3, 3.7, 3.9) */}
              <div className="mt-3 p-3 rounded-lg bg-slate-100 border border-slate-200 text-[11px] text-slate-700 space-y-1">
                <div>
                  <strong>{isAr ? 'الفرق بين PTT وPAT والمعايرة:' : 'PTT vs. PAT & Cuff Calibration (Section 3.2–3.3):'}</strong>{' '}
                  {isAr
                    ? 'زمن عبور النبضة (PTT) يُقاس بين نقطتين شريانيتين، بينما زمن وصول النبضة (PAT) من موجة R في ECG يشمل فترة ما قبل القذف القلبي المتغيرة (PEP). كلاهما يتطلب معايرة أولية ودورية بجهاز كفة مرجعي (ISO 81060-2:2018)، ويخضع تقييم الأجهزة القابلة للارتداء بدون كفة لمعيار IEEE Std 1708-2025.'
                    : 'Pulse Transit Time (PTT) is measured between two arterial sites, whereas Pulse Arrival Time (PAT) includes the variable Pre-Ejection Period (PEP). Cuffless tracking requires baseline and periodic recalibration against an ISO 81060-2:2018 cuff sphygmomanometer and evaluation under IEEE Std 1708-2025.'}
                </div>
                <div>
                  <strong>{isAr ? 'تنبيه معامل البشرة وHbA1c (القسم 3.7 و3.9):' : 'Skin-Tone Factor & HbA1c Caveat (Section 3.7 & 3.9):'}</strong>{' '}
                  {isAr
                    ? 'معامل الميلانين الخطي (1 + 0.018*(Fitzpatrick-1)) هو عنصر نائب توضيحي لا يغني عن المعايرة التجريبية عبر Fitzpatrick I–VI. كما تم إزالة HbA1c من قدرات النظام الحالية لأن السكر التراكمي يتطلب تحليلاً مخبرياً لدم وريدي.'
                    : 'The linear multiplier 1 + 0.018*(Fitzpatrick-1) is an illustrative placeholder, not a substitute for multi-device empirical skin-tone calibration. HbA1c is excluded from V1 capabilities as clinical HbA1c requires venous blood laboratory assay.'}
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================================
              SIMULATOR 4: Ocular CIE L*a*b* Bradford Chromatic Adaptation (Exploratory)
             ===================================================================== */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between">
            <div>
              {/* Mandatory Permanent Simulated Badge */}
              <div className="mb-3 p-2.5 rounded-lg bg-amber-50 border border-amber-300 flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-extrabold text-amber-950 uppercase">
                  <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
                  {isAr
                    ? 'بيانات اصطناعية محاكاة — ليست قياساً سريرياً لمريض'
                    : 'SIMULATED DATA — NOT A CLINICAL MEASUREMENT'}
                </span>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-900">
                  EXPLORATORY COLORIMETRY (PROPOSED)
                </span>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <Eye className="w-5 h-5 text-emerald-800" />
                <h3 className="text-base font-bold text-slate-900">
                  {isAr
                    ? '4. محاكي التكيف اللوني Bradford D65 لصلبة العين والملتحمة (CIE L*a*b*)'
                    : '4. Exploratory Ocular CIE L*a*b* & Bradford D65 Illuminant Shift Simulator'}
                </h3>
              </div>

              {/* Exact Mathematical Equation Box */}
              <div className="p-2.5 rounded-lg bg-slate-900 text-slate-100 font-mono text-[10.5px] mb-3 overflow-x-auto">
                <div className="text-amber-300 font-bold mb-0.5">
                  // Generator: computeEyeLabCalibration() in src/utils/biophysicsMath.ts
                </div>
                <div>
                  Chain: sRGB -&gt; Inverse Gamma Linear RGB -&gt; Sensor CCM -&gt; CIE XYZ -&gt; Bradford M_A to D65 (6500K) -&gt; CIE L*a*b*
                </div>
                <div>
                  b*_uncal = b*_D65 + 16.4 · ((6500 - T_kelvin) / 3800) ; (a*/L*)_uncal = (a*/L*)_D65 + 0.14 · ((6500 - T_kelvin) / 3800)
                </div>
              </div>

              {/* Sliders */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                <div>
                  <div className="flex justify-between font-semibold text-slate-700 mb-1">
                    <span>{isAr ? 'حرارة الإضاءة المحيطة:' : 'Illuminant Temp:'}</span>
                    <span className="font-mono text-amber-800">{kelvin} K</span>
                  </div>
                  <input
                    type="range"
                    min={2700}
                    max={6500}
                    step={100}
                    value={kelvin}
                    onChange={(e) => setKelvin(Number(e.target.value))}
                    aria-label="Ambient Illuminant Color Temperature Kelvin"
                    className="w-full accent-amber-700 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between font-semibold text-slate-700 mb-1">
                    <span>{isAr ? 'مدخل البيليروبين الافتراضي:' : 'Synthetic Bilirubin:'}</span>
                    <span className="font-mono text-blue-900">{trueBilirubin.toFixed(1)} mg/dL</span>
                  </div>
                  <input
                    type="range"
                    min={0.5}
                    max={6.5}
                    step={0.2}
                    value={trueBilirubin}
                    onChange={(e) => setTrueBilirubin(Number(e.target.value))}
                    aria-label="Synthetic Bilirubin Input"
                    className="w-full accent-blue-900 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between font-semibold text-slate-700 mb-1">
                    <span>{isAr ? 'مدخل الهيموجلوبين الافتراضي:' : 'Synthetic Hb Input:'}</span>
                    <span className="font-mono text-rose-800">{trueHb.toFixed(1)} g/dL</span>
                  </div>
                  <input
                    type="range"
                    min={7.5}
                    max={16.0}
                    step={0.3}
                    value={trueHb}
                    onChange={(e) => setTrueHb(Number(e.target.value))}
                    aria-label="Synthetic Hemoglobin Input"
                    className="w-full accent-rose-800 cursor-pointer"
                  />
                </div>
              </div>

              {/* Comparison Cards: Uncalibrated vs D65 Calibrated */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-300">
                  <div className="font-mono font-bold text-amber-950 mb-1">
                    {isAr
                      ? `بدون معايرة لونية (عند إضاءة ${kelvin}K)`
                      : `Uncalibrated Raw Sensor (${kelvin}K Ambient)`}
                  </div>
                  <div className="space-y-1 font-mono text-[11px] text-amber-900">
                    <div>
                      Raw Scleral +b*: <strong>{eyeOut.uncalibratedBStar}</strong> (Shift +{eyeOut.illuminantDeltaShift})
                    </div>
                    <div>
                      Raw Conjunctiva a*/L*: <strong>{eyeOut.uncalibratedErythemaIndex}</strong>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-300">
                  <div className="font-mono font-bold text-emerald-950 mb-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                    {isAr
                      ? 'بعد تحويل Bradford إلى المرجع القياسي D65'
                      : 'After Bradford Adaptation to D65 Reference'}
                  </div>
                  <div className="space-y-1 font-mono text-[11px] text-emerald-900">
                    <div>
                      D65 Calibrated +b*: <strong>{eyeOut.calibratedBStar}</strong>
                    </div>
                    <div>
                      D65 Calibrated a*/L*: <strong>{eyeOut.calibratedErythemaIndex}</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mandatory CLSI EP17-A2 vs EP09/EP05 & Camera ISP Lock Disclosure (Audit Section 3.1 & 3.8) */}
              <div className="mt-3 p-3 rounded-lg bg-slate-100 border border-slate-200 text-[11px] text-slate-700 space-y-1">
                <div className="flex items-start gap-1.5">
                  <Info className="w-4 h-4 text-blue-800 shrink-0 mt-0.5" />
                  <div>
                    <strong>
                      {isAr
                        ? 'تصحيح معيار CLSI EP17-A2 ومتطلبات المعايرة البصرية (القسم 3.1 و3.8):'
                        : 'CLSI Standard Correction & Optical Calibration Requirements (Section 3.1 & 3.8):'}
                    </strong>{' '}
                    {isAr
                      ? 'يختص معيار CLSI EP17-A2 بتحديد حدود الكشف التحليلية الدنيا (LoB, LoD, LoQ) للفحوصات المخبرية فقط، ولا يُستخدم لإثبات خطأ الهيموجلوبين (MAE) أو مساحة المنحنى للبيليروبين (AUC). إن تقييم الدقة الكمية مقابل تحاليل الدم الوريدية يتطلب معيار CLSI EP09 (مقارنة الطرق وتقدير الانحياز) ومعياري CLSI EP05/EP15 (التكرارية والدقة)، بالإضافة إلى قفل التوازن الأبيض التلقائي للكاميرا (AWB Lock) واستخدام بطاقة مرجعية لونية قياسية داخل الإطار.'
                      : 'CLSI EP17-A2 defines analytical detection limits (LoB, LoD, LoQ) only and does NOT validate clinical Hb MAE or Bilirubin AUC. Quantitative method comparison against venous laboratory CBC/bilirubin requires CLSI EP09 (method comparison & bias estimation) and CLSI EP05/EP15 (precision), alongside locked camera ISP auto-white-balance and an in-frame physical color reference card.'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
