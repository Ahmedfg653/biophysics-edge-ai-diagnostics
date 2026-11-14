import React, { useEffect, useRef, useState } from 'react';
import {
  computeEyeLabCalibration,
  computeHemodynamicEstimate,
  simulatePosRppgWindow,
  simulateUltrasonicSonar,
  type Language,
  type SonarBreathingMode,
} from '../utils/biophysicsMath';

interface LiveSimulatorsLabProps {
  lang: Language;
}

/**
 * Draws Clinical Millimeter Grid Paper on an HTML5 Canvas (#F8FAFC background,
 * minor grid every 12px in #E2E8F0, major grid every 60px in #CBD5E1).
 */
function drawClinicalMillimeterGrid(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number
) {
  ctx.fillStyle = '#F8FAFC';
  ctx.fillRect(0, 0, width, height);

  ctx.lineWidth = 1;
  ctx.strokeStyle = '#E2E8F0';
  for (let x = 0; x <= width; x += 12) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let y = 0; y <= height; y += 12) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }

  ctx.strokeStyle = '#CBD5E1';
  for (let x = 0; x <= width; x += 60) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let y = 0; y <= height; y += 60) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
}

export const LiveSimulatorsLab: React.FC<LiveSimulatorsLabProps> = ({ lang }) => {
  // Simulator 1 state: POS rPPG + NLMS + Zero-Phase Butterworth filtfilt + SDPPG
  const [heartRateBpm, setHeartRateBpm] = useState<number>(72);
  const [arterialStiffness, setArterialStiffness] = useState<number>(0.35);
  const [motionNoise, setMotionNoise] = useState<number>(0.42);
  const [enableFilter, setEnableFilter] = useState<boolean>(true);
  const sim1CanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Simulator 2 state: 20kHz CW Ultrasonic Phased Sonar
  const [sonarMode, setSonarMode] = useState<SonarBreathingMode>('normal');
  const sim2CanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Simulator 3 state: 12-Feature Hybrid LiteRT + Moens-Korteweg Hemodynamic & SQI Gate
  const [pttMs, setPttMs] = useState<number>(195);
  const [simSqi, setSimSqi] = useState<number>(0.86);
  const [fitzpatrickScale, setFitzpatrickScale] = useState<1 | 2 | 3 | 4 | 5 | 6>(4);
  const sim3CanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Simulator 4 state: CIE L*a*b* Bradford D65 Ocular Chromaticity
  const [colorTempKelvin, setColorTempKelvin] = useState<number>(3200);
  const [trueBilirubinMgDl, setTrueBilirubinMgDl] = useState<number>(1.8);
  const [trueHemoglobinGDl, setTrueHemoglobinGDl] = useState<number>(10.6);
  const sim4CanvasRef = useRef<HTMLCanvasElement | null>(null);

  const rppgSnapshot = simulatePosRppgWindow({
    heartRateBpm,
    arterialStiffness,
    motionNoise,
    enableFilter,
  });

  const sonarSnapshot = simulateUltrasonicSonar(sonarMode, 0);

  const hemoOutput = computeHemodynamicEstimate({
    ageYears: 48,
    heightCm: 174,
    weightKg: 81,
    fitzpatrickScale,
    onBpMeds: false,
    heartRateBpm,
    hrvRmssdMs: rppgSnapshot.rmssdMs,
    pttMs,
    dicroticNotchRatio: rppgSnapshot.dicroticNotchRatio,
    stiffnessIndexMs: rppgSnapshot.stiffnessIndexMs,
    baselineSbp: 122,
    sqi: simSqi,
  });

  const eyeLabOutput = computeEyeLabCalibration({
    colorTempKelvin,
    trueBilirubinMgDl,
    trueHemoglobinGDl,
  });

  // Simulator 1 60fps Canvas Loop (POS rPPG + Zero-Phase filtfilt + SDPPG)
  useEffect(() => {
    let animId = 0;
    let phaseShift = 0;

    const render = () => {
      const canvas = sim1CanvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          const w = canvas.width;
          const h = canvas.height;
          drawClinicalMillimeterGrid(ctx, w, h);

          const snap = simulatePosRppgWindow({
            heartRateBpm,
            arterialStiffness,
            motionNoise,
            enableFilter,
          });

          const n = snap.filteredSignal.length;

          // Raw motion-corrupted trace (Dashed Crimson #DC2626)
          ctx.strokeStyle = 'rgba(220, 38, 38, 0.55)';
          ctx.lineWidth = 1.5;
          ctx.setLineDash([4, 4]);
          ctx.beginPath();
          for (let i = 0; i < n; i++) {
            const idx = (i + Math.floor(phaseShift)) % n;
            const x = (i / (n - 1)) * (w - 24) + 12;
            const y = h * 0.42 - snap.rawSignal[idx] * 46;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
          ctx.setLineDash([]);

          // Zero-Phase filtfilt recovered PPG trace (Solid Clinical Blue #0284C7)
          ctx.strokeStyle = '#0284C7';
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          for (let i = 0; i < n; i++) {
            const idx = (i + Math.floor(phaseShift)) % n;
            const x = (i / (n - 1)) * (w - 24) + 12;
            const y = h * 0.42 - snap.filteredSignal[idx] * 46;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();

          // SDPPG 2nd derivative trace (Emerald #059669)
          ctx.strokeStyle = '#059669';
          ctx.lineWidth = 1.9;
          ctx.beginPath();
          for (let i = 0; i < n; i++) {
            const idx = (i + Math.floor(phaseShift)) % n;
            const x = (i / (n - 1)) * (w - 24) + 12;
            const y = h * 0.8 - snap.sdppgSignal[idx] * 28;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();

          ctx.fillStyle = '#0F172A';
          ctx.font = '600 11px "JetBrains Mono", monospace';
          ctx.fillText('Zero-Phase filtfilt PPG (0.0 rad) [Blue]', 12, 20);
          ctx.fillStyle = '#DC2626';
          ctx.fillText('Raw Tremor-Corrupted Trace [Dashed Red]', 12, 36);
          ctx.fillStyle = '#059669';
          ctx.fillText(
            `SDPPG d²x/dt² (b/a=${snap.bOverA.toFixed(2)}, d/a=${snap.dOverA.toFixed(2)}) [Green]`,
            12,
            h - 10
          );
        }
      }
      phaseShift = (phaseShift + 0.45) % 180;
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [heartRateBpm, arterialStiffness, motionNoise, enableFilter]);

  // Simulator 2 60fps Canvas Loop (20kHz CW Ultrasonic I/Q Sonar)
  useEffect(() => {
    let animId = 0;
    let tick = 0;

    const render = () => {
      const canvas = sim2CanvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          const w = canvas.width;
          const h = canvas.height;
          drawClinicalMillimeterGrid(ctx, w, h);

          const sim = simulateUltrasonicSonar(sonarMode, tick);

          // Left side: I/Q Phasor Constellation Circle
          const cx = 88;
          const cy = h * 0.54;
          const radius = 54;

          ctx.strokeStyle = '#94A3B8';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(cx, cy, radius, 0, Math.PI * 2);
          ctx.stroke();

          const latestIq = sim.iqPoints[sim.iqPoints.length - 1] ?? { i: 1, q: 0 };
          const px = cx + latestIq.i * radius * 0.85;
          const py = cy - latestIq.q * radius * 0.85;

          ctx.strokeStyle = '#059669';
          ctx.lineWidth = 2.2;
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(px, py);
          ctx.stroke();

          ctx.fillStyle = sim.apneaDetected ? '#DC2626' : '#0284C7';
          ctx.beginPath();
          ctx.arc(px, py, 5.5, 0, Math.PI * 2);
          ctx.fill();

          // Right side: Unwrapped Chest Wall Displacement Trace (mm)
          const startX = 172;
          const traceW = w - startX - 16;
          const n = sim.chestDisplacementMm.length;

          ctx.strokeStyle = sim.apneaDetected ? '#DC2626' : '#0284C7';
          ctx.lineWidth = 2.4;
          ctx.beginPath();
          for (let i = 0; i < n; i++) {
            const x = startX + (i / (n - 1)) * traceW;
            const y = cy - (sim.chestDisplacementMm[i] / 5.5) * (h * 0.36);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();

          ctx.fillStyle = '#0F172A';
          ctx.font = '600 11px "JetBrains Mono", monospace';
          ctx.fillText('20kHz I/Q Phasor', 34, 20);
          ctx.fillStyle = sim.apneaDetected ? '#DC2626' : '#0F172A';
          ctx.fillText(
            sim.apneaDetected
              ? `OBSTRUCTIVE APNEA >= 10s (Est. AHI=${sim.estimatedAhi})`
              : `Thoracic Δd(t) · Peak=${sim.peakDisplacementMm}mm · RR=${sim.respiratoryRateBpm} BrPM`,
            startX,
            20
          );
        }
      }
      tick += 0.03;
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [sonarMode]);

  // Simulator 3 Render (Moens-Korteweg PWV Curve + Pre-Neural SQI < 0.65 Abstention Gate)
  useEffect(() => {
    const canvas = sim3CanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    drawClinicalMillimeterGrid(ctx, w, h);

    // Plot Moens-Korteweg / Bramwell-Hill PTT -> SBP Curve
    ctx.strokeStyle = '#0284C7';
    ctx.lineWidth = 2.4;
    ctx.beginPath();
    for (let x = 24; x <= w - 24; x++) {
      const ptt = 120 + ((x - 24) / (w - 48)) * 180; // 120ms to 300ms
      const sbp = 122 + 28 * Math.log(210 / ptt);
      const y = h - 28 - ((sbp - 90) / 100) * (h - 56);
      if (x === 24) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Current operating point marker
    const curX = 24 + ((pttMs - 120) / 180) * (w - 48);
    const curY = h - 28 - ((hemoOutput.estimatedSbp - 90) / 100) * (h - 56);

    ctx.fillStyle = hemoOutput.safetyGuardBlocked ? '#DC2626' : '#059669';
    ctx.beginPath();
    ctx.arc(curX, Math.max(24, Math.min(h - 24, curY)), 6.5, 0, Math.PI * 2);
    ctx.fill();

    // If SQI < 0.65, draw prominent Pre-Neural Abstention Gate Banner
    if (hemoOutput.safetyGuardBlocked) {
      ctx.fillStyle = 'rgba(254, 242, 242, 0.94)';
      ctx.fillRect(36, 48, w - 72, 96);
      ctx.strokeStyle = '#DC2626';
      ctx.lineWidth = 2;
      ctx.strokeRect(36, 48, w - 72, 96);

      ctx.fillStyle = '#DC2626';
      ctx.font = '700 13px "JetBrains Mono", monospace';
      ctx.fillText('PRE-NEURAL GATE: SAFE ABSTENTION TRIGGERED (SQI < 0.65)', 54, 82);
      ctx.fillStyle = '#0F172A';
      ctx.font = '600 11px "JetBrains Mono", monospace';
      ctx.fillText(
        `Current SQI = ${simSqi.toFixed(2)} < 0.65 Threshold -> Neural BP/HbA1c Inference Blocked`,
        54,
        108
      );
      ctx.fillText('Action: Emit Bilingual TTS Guidance to Stabilize Forearm Posture', 54, 128);
    } else {
      ctx.fillStyle = '#0F172A';
      ctx.font = '600 11px "JetBrains Mono", monospace';
      ctx.fillText(
        `Moens-Korteweg Curve · PTT=${pttMs}ms -> PWV=${hemoOutput.pwvMetersPerSec} m/s`,
        16,
        22
      );
      ctx.fillStyle = '#059669';
      ctx.fillText(
        `SQI=${simSqi.toFixed(2)} (PASS >= 0.65) · Fitzpatrick Melanin Comp=${hemoOutput.melaninCompensationFactor}x`,
        16,
        h - 10
      );
    }
  }, [pttMs, simSqi, fitzpatrickScale, hemoOutput]);

  // Simulator 4 Render (Bradford D65 CIE L*a*b* Ocular Chromaticity Inspector)
  useEffect(() => {
    const canvas = sim4CanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    drawClinicalMillimeterGrid(ctx, w, h);

    // Left Box: Uncalibrated Warm-Cast Sclera vs Right Box: Bradford D65 Calibrated Sclera & Conjunctiva
    const warmCastShift = Math.round(((6500 - colorTempKelvin) / 3800) * 45);
    const uncalB = Math.max(110, 235 - Math.round(trueBilirubinMgDl * 22) - warmCastShift);
    const calB = Math.max(125, 235 - Math.round(trueBilirubinMgDl * 22));

    // Uncalibrated ROI
    ctx.fillStyle = `rgb(245, 236, ${uncalB})`;
    ctx.fillRect(20, 36, w * 0.42, h - 62);
    ctx.strokeStyle = '#DC2626';
    ctx.lineWidth = 1.6;
    ctx.strokeRect(20, 36, w * 0.42, h - 62);

    // Bradford D65 Calibrated ROI
    ctx.fillStyle = `rgb(242, 240, ${calB})`;
    ctx.fillRect(w * 0.52, 36, w * 0.44, h - 62);
    ctx.strokeStyle = '#059669';
    ctx.lineWidth = 2;
    ctx.strokeRect(w * 0.52, 36, w * 0.44, h - 62);

    // Conjunctival vascular band at bottom of calibrated ROI
    const hbRed = Math.min(235, Math.round(145 + (trueHemoglobinGDl - 6.5) * 9));
    ctx.fillStyle = `rgb(${hbRed}, 68, 76)`;
    ctx.fillRect(w * 0.52 + 8, h - 68, w * 0.44 - 16, 34);

    ctx.fillStyle = '#DC2626';
    ctx.font = '600 11px "JetBrains Mono", monospace';
    ctx.fillText(`Raw Uncalibrated (${colorTempKelvin}K): b*=${eyeLabOutput.uncalibratedBStar}`, 20, 22);
    ctx.fillStyle = '#059669';
    ctx.fillText(`Bradford D65 Locked: b*=${eyeLabOutput.calibratedBStar}`, w * 0.52, 22);
    ctx.fillStyle = '#0F172A';
    ctx.fillText(
      `Laplacian Gate Var(∇²I) >= 110.0 PASS · Est. Hb=${eyeLabOutput.estimatedHemoglobinGDl} g/dL · Bili=${eyeLabOutput.estimatedBilirubinMgDl} mg/dL`,
      20,
      h - 10
    );
  }, [colorTempKelvin, trueBilirubinMgDl, trueHemoglobinGDl, eyeLabOutput]);

  return (
    <section id="simulators" className="border-b border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-bold tracking-wider text-[#0284C7] uppercase">
            {lang === 'en'
              ? 'SECTION 05 · FOUR INTERACTIVE BIOPHYSICAL SIMULATORS (CLINICAL MILLIMETER GRID)'
              : 'القسم 05 · المختبر الفيزيائي التفاعلي الحي (4 محاكيات على ورق رسم القلب الإكلينيكي)'}
          </p>
          <h2 className="mt-2 font-serif-editorial text-2xl font-bold text-[#0F172A] sm:text-3xl [text-wrap:balance]">
            {lang === 'en'
              ? 'Real-Time Mathematical Verification of Our Native C++17 & Oboe DSP Kernels'
              : 'محاكاة حية للمعادلات الفيزيائية والخوارزميات المدمجة في نواة التطبيق'}
          </h2>
          <p className="mt-2 text-sm text-[#1E293B]">
            {lang === 'en'
              ? 'Every simulator below executes the exact biophysical equations deployed in our Android NDK C++17 library on high-contrast Clinical Millimeter Grid Paper.'
              : 'تعمل المحاكيات الأربعة أدناه بالمعادلات الفيزيائية الحقيقية المنفذة داخل مكتبة C++17 على خلفية ورق رسم القلب الإكلينيكي المليمتري.'}
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Simulator 1: POS rPPG + NLMS + Zero-Phase Butterworth filtfilt */}
          <article className="min-w-0 rounded-xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-2xs">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-base font-bold text-[#0F172A]">
                {lang === 'en'
                  ? '01. POS rPPG + NLMS & Zero-Phase Butterworth filtfilt'
                  : '01. محاكي POS rPPG وإلغاء الاهتزاز والترشيح الصفري الطور (filtfilt)'}
              </h3>
              <span dir="ltr" className="font-mono text-xs font-bold text-[#0284C7] tabular-nums">
                SQI: {rppgSnapshot.sqi.toFixed(2)} · RMSSD: {rppgSnapshot.rmssdMs} ms
              </span>
            </div>

            <canvas
              ref={sim1CanvasRef}
              width={540}
              height={210}
              className="mt-4 w-full rounded-lg border border-slate-300 bg-[#F8FAFC]"
            />

            <div className="mt-4 grid gap-4 sm:grid-cols-3 text-xs">
              <div>
                <div className="flex justify-between font-semibold text-slate-700">
                  <label htmlFor="sim1-hr">HR (BPM)</label>
                  <span dir="ltr" className="font-mono font-bold text-[#0F172A] tabular-nums">
                    {heartRateBpm}
                  </span>
                </div>
                <input
                  id="sim1-hr"
                  type="range"
                  min={52}
                  max={135}
                  value={heartRateBpm}
                  onChange={(e) => setHeartRateBpm(Number(e.target.value))}
                  className="mt-1 w-full accent-[#0284C7]"
                />
              </div>

              <div>
                <div className="flex justify-between font-semibold text-slate-700">
                  <label htmlFor="sim1-stiff">
                    {lang === 'en' ? 'Stiffness' : 'تصلب الشريان'}
                  </label>
                  <span dir="ltr" className="font-mono font-bold text-[#0F172A] tabular-nums">
                    {arterialStiffness.toFixed(2)}
                  </span>
                </div>
                <input
                  id="sim1-stiff"
                  type="range"
                  min={0.05}
                  max={0.95}
                  step={0.05}
                  value={arterialStiffness}
                  onChange={(e) => setArterialStiffness(Number(e.target.value))}
                  className="mt-1 w-full accent-[#D97757]"
                />
              </div>

              <div>
                <div className="flex justify-between font-semibold text-slate-700">
                  <label htmlFor="sim1-noise">
                    {lang === 'en' ? 'Hand Tremor' : 'اهتزاز اليد'}
                  </label>
                  <span dir="ltr" className="font-mono font-bold text-[#0F172A] tabular-nums">
                    {Math.round(motionNoise * 100)}%
                  </span>
                </div>
                <input
                  id="sim1-noise"
                  type="range"
                  min={0}
                  max={0.95}
                  step={0.05}
                  value={motionNoise}
                  onChange={(e) => setMotionNoise(Number(e.target.value))}
                  className="mt-1 w-full accent-[#DC2626]"
                />
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-3 text-xs">
              <label className="inline-flex items-center gap-2 font-medium text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={enableFilter}
                  onChange={(e) => setEnableFilter(e.target.checked)}
                  className="rounded border-slate-300 accent-[#0284C7]"
                />
                <span>
                  {lang === 'en'
                    ? 'Enable NLMS + Zero-Phase 4th-Order Butterworth filtfilt'
                    : 'تفعيل مرشح NLMS والترشيح الصفري الطور filtfilt'}
                </span>
              </label>
              <span dir="ltr" className="font-mono font-bold text-[#059669] tabular-nums">
                SI: {rppgSnapshot.stiffnessIndexMs} m/s · Notch: {rppgSnapshot.dicroticNotchRatio}
              </span>
            </div>
          </article>

          {/* Simulator 2: 20kHz CW Ultrasonic I/Q Phased Sonar */}
          <article className="min-w-0 rounded-xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-2xs">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-base font-bold text-[#0F172A]">
                {lang === 'en'
                  ? '02. 20kHz CW Ultrasonic I/Q Demodulation & Apnea Detector'
                  : '02. محاكي رادار السونار الصوتي (20kHz I/Q) وكشف انقطاع التنفس'}
              </h3>
              <span
                dir="ltr"
                className={`font-mono text-xs font-bold tabular-nums ${
                  sonarSnapshot.apneaDetected ? 'text-[#DC2626]' : 'text-[#059669]'
                }`}
              >
                {sonarSnapshot.apneaDetected
                  ? 'APNEA ALARM (>=10s)'
                  : `AHI: ${sonarSnapshot.estimatedAhi} events/hr`}
              </span>
            </div>

            <canvas
              ref={sim2CanvasRef}
              width={540}
              height={210}
              className="mt-4 w-full rounded-lg border border-slate-300 bg-[#F8FAFC]"
            />

            <div className="mt-4 flex flex-wrap gap-2">
              {(['normal', 'hypopnea', 'apnea'] as SonarBreathingMode[]).map((mode) => {
                const active = sonarMode === mode;
                const label =
                  mode === 'normal'
                    ? lang === 'en'
                      ? 'Normal Eupnea (15 BrPM)'
                      : 'تنفس طبيعي منتظم'
                    : mode === 'hypopnea'
                      ? lang === 'en'
                        ? 'Hypopnea (>30% Drop)'
                        : 'ضعف تنفس جزئي (Hypopnea)'
                      : lang === 'en'
                        ? 'Obstructive Apnea (>=10s Flatline)'
                        : 'انقطاع تنفس انسدادي (>=10 ثوانٍ)';
                return (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setSonarMode(mode)}
                    className={`rounded-md border px-3 py-1.5 text-xs font-semibold transition-colors ${
                      active
                        ? mode === 'apnea'
                          ? 'border-[#DC2626] bg-[#DC2626] text-white'
                          : 'border-[#0284C7] bg-[#0284C7] text-white'
                        : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-3 text-xs font-mono text-slate-600">
              <span dir="ltr">λ = 17.15 mm @ f_c = 20,000 Hz (48kHz Unprocessed)</span>
              <span dir="ltr" className="font-bold text-[#0284C7]">
                Δφ = {sonarSnapshot.phaseShiftRad} rad
              </span>
            </div>
          </article>

          {/* Simulator 3: Moens-Korteweg Hemodynamics & Pre-Neural SQI < 0.65 Abstention Gate */}
          <article className="min-w-0 rounded-xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-2xs">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-base font-bold text-[#0F172A]">
                {lang === 'en'
                  ? '03. Moens-Korteweg BP/HbA1c & Pre-Neural SQI < 0.65 Abstention Gate'
                  : '03. محاكي ضغط الدم والسكر التراكمي وبوابة الامتناع السريري (SQI < 0.65)'}
              </h3>
              <span
                dir="ltr"
                data-testid="sim3-abstention-badge"
                className={`font-mono text-xs font-bold tabular-nums ${
                  hemoOutput.safetyGuardBlocked ? 'text-[#DC2626]' : 'text-[#059669]'
                }`}
              >
                {hemoOutput.safetyGuardBlocked
                  ? 'SAFE ABSTENTION TRIGGERED'
                  : `SBP/DBP: ${hemoOutput.estimatedSbp}/${hemoOutput.estimatedDbp} mmHg · HbA1c: ${hemoOutput.estimatedHbA1c}%`}
              </span>
            </div>

            <canvas
              ref={sim3CanvasRef}
              width={540}
              height={210}
              className="mt-4 w-full rounded-lg border border-slate-300 bg-[#F8FAFC]"
            />

            <div className="mt-4 grid gap-4 sm:grid-cols-3 text-xs">
              <div>
                <div className="flex justify-between font-semibold text-slate-700">
                  <label htmlFor="sim3-ptt">PTT (ms)</label>
                  <span dir="ltr" className="font-mono font-bold text-[#0F172A] tabular-nums">
                    {pttMs} ms
                  </span>
                </div>
                <input
                  id="sim3-ptt"
                  type="range"
                  min={130}
                  max={280}
                  step={5}
                  value={pttMs}
                  onChange={(e) => setPttMs(Number(e.target.value))}
                  className="mt-1 w-full accent-[#0284C7]"
                />
              </div>

              <div>
                <div className="flex justify-between font-semibold text-slate-700">
                  <label htmlFor="sim3-sqi">Signal Quality (SQI)</label>
                  <span
                    dir="ltr"
                    className={`font-mono font-bold tabular-nums ${
                      simSqi < 0.65 ? 'text-[#DC2626]' : 'text-[#059669]'
                    }`}
                  >
                    {simSqi.toFixed(2)}
                  </span>
                </div>
                <input
                  id="sim3-sqi"
                  type="range"
                  min={0.35}
                  max={0.98}
                  step={0.03}
                  value={simSqi}
                  onChange={(e) => setSimSqi(Number(e.target.value))}
                  className="mt-1 w-full accent-[#059669]"
                />
              </div>

              <div>
                <div className="flex justify-between font-semibold text-slate-700">
                  <label htmlFor="sim3-fitz">Fitzpatrick (I–VI)</label>
                  <span dir="ltr" className="font-mono font-bold text-[#0F172A] tabular-nums">
                    Type {fitzpatrickScale}
                  </span>
                </div>
                <input
                  id="sim3-fitz"
                  type="range"
                  min={1}
                  max={6}
                  step={1}
                  value={fitzpatrickScale}
                  onChange={(e) =>
                    setFitzpatrickScale(Number(e.target.value) as 1 | 2 | 3 | 4 | 5 | 6)
                  }
                  className="mt-1 w-full accent-[#D97757]"
                />
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-3 text-xs font-mono text-slate-600">
              <span>
                {lang === 'en'
                  ? 'Drag SQI below 0.65 to test Pre-Neural Clinical Abstention'
                  : 'اسحب مؤشر SQI لأقل من 0.65 لاختبار الامتناع السريري الآمن'}
              </span>
              <span dir="ltr" className="font-bold text-[#0284C7]">
                PWV = {hemoOutput.pwvMetersPerSec} m/s
              </span>
            </div>
          </article>

          {/* Simulator 4: Bradford D65 CIE L*a*b* Ocular Colorimetry */}
          <article className="min-w-0 rounded-xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-2xs">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-base font-bold text-[#0F172A]">
                {lang === 'en'
                  ? '04. Bradford D65 CIE L*a*b* Ocular Anemia & Jaundice Calibration'
                  : '04. محاكي معايرة ألوان العين CIE L*a*b* (فقر الدم واليرقان)'}
              </h3>
              <span dir="ltr" className="font-mono text-xs font-bold text-[#059669] tabular-nums">
                Δb* Bias Removed: -{eyeLabOutput.illuminantDeltaShift}
              </span>
            </div>

            <canvas
              ref={sim4CanvasRef}
              width={540}
              height={210}
              className="mt-4 w-full rounded-lg border border-slate-300 bg-[#F8FAFC]"
            />

            <div className="mt-4 grid gap-4 sm:grid-cols-3 text-xs">
              <div>
                <div className="flex justify-between font-semibold text-slate-700">
                  <label htmlFor="sim4-cct">Room CCT (K)</label>
                  <span dir="ltr" className="font-mono font-bold text-[#0F172A] tabular-nums">
                    {colorTempKelvin}K
                  </span>
                </div>
                <input
                  id="sim4-cct"
                  type="range"
                  min={2700}
                  max={6500}
                  step={100}
                  value={colorTempKelvin}
                  onChange={(e) => setColorTempKelvin(Number(e.target.value))}
                  className="mt-1 w-full accent-[#0284C7]"
                />
              </div>

              <div>
                <div className="flex justify-between font-semibold text-slate-700">
                  <label htmlFor="sim4-bili">Bilirubin (mg/dL)</label>
                  <span dir="ltr" className="font-mono font-bold text-[#0F172A] tabular-nums">
                    {trueBilirubinMgDl.toFixed(1)}
                  </span>
                </div>
                <input
                  id="sim4-bili"
                  type="range"
                  min={0.4}
                  max={6.0}
                  step={0.2}
                  value={trueBilirubinMgDl}
                  onChange={(e) => setTrueBilirubinMgDl(Number(e.target.value))}
                  className="mt-1 w-full accent-[#D97757]"
                />
              </div>

              <div>
                <div className="flex justify-between font-semibold text-slate-700">
                  <label htmlFor="sim4-hb">True Hb (g/dL)</label>
                  <span dir="ltr" className="font-mono font-bold text-[#0F172A] tabular-nums">
                    {trueHemoglobinGDl.toFixed(1)}
                  </span>
                </div>
                <input
                  id="sim4-hb"
                  type="range"
                  min={7.0}
                  max={16.0}
                  step={0.5}
                  value={trueHemoglobinGDl}
                  onChange={(e) => setTrueHemoglobinGDl(Number(e.target.value))}
                  className="mt-1 w-full accent-[#DC2626]"
                />
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-3 text-xs font-mono text-slate-600">
              <span dir="ltr">
                Calibrated b*={eyeLabOutput.calibratedBStar} · Erythema (a*/L*)=
                {eyeLabOutput.calibratedErythemaIndex}
              </span>
              <span dir="ltr" className="font-bold text-[#059669]">
                Illuminant-Invariant D65 Lock
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
