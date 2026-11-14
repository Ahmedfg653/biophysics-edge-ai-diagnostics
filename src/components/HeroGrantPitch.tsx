import React, { useState } from 'react';
import {
  ShieldAlert,
  Activity,
  Cpu,
  Sliders,
  Download,
  FileCode2,
  CheckCircle2,
  AlertOctagon,
  GraduationCap,
  ArrowRight,
} from 'lucide-react';
import { Language, computeSelectiveRiskCoverageCurve } from '../utils/biophysicsMath';
import { FIRST_SCREEN_REVIEWER_QA } from '../data/scientificAuditData';

interface Props {
  lang: Language;
  onJumpToSimulators: () => void;
  onJumpToGrantPackage: () => void;
}

export const HeroGrantPitch: React.FC<Props> = ({
  lang,
  onJumpToSimulators,
  onJumpToGrantPackage,
}) => {
  const isAr = lang === 'ar';
  const [sqiGateSlider, setSqiGateSlider] = useState<number>(0.65);
  const riskCurve = computeSelectiveRiskCoverageCurve(sqiGateSlider);

  return (
    <section className="relative pt-6 pb-12 border-b border-slate-200 bg-gradient-to-b from-white via-slate-50/70 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* MANDATORY PERMANENT NON-DIAGNOSTIC PROTOTYPE BANNER (Section 1.1 & 2.3) */}
        <div className="mb-6 p-4 rounded-xl border-2 border-amber-500 bg-amber-50/95 text-amber-950 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="flex items-start gap-3">
              <ShieldAlert className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <div className="font-mono text-xs sm:text-sm font-extrabold uppercase tracking-wide text-amber-900">
                  {isAr
                    ? 'نموذج بحثي أولي فقط — غير مخصص للتشخيص الطبي أو اتخاذ القرارات العلاجية'
                    : 'RESEARCH PROTOTYPE ONLY — NOT FOR MEDICAL DIAGNOSIS OR TREATMENT DECISIONS'}
                </div>
                <p className="text-xs text-amber-900/90 mt-1 leading-relaxed">
                  {isAr
                    ? 'حالة التحقق السريري: لم يُجرَ أي تحقق سريري على البشر حتى الآن (Clinical validation has not yet been conducted — 0 ادعاءات مصادق عليها سريرياً). جميع المختبرات التفاعلية في هذا الموقع تعمل على مولدات إشارات اصطناعية رياضية (SIMULATED DATA) لتوضيح منهجية بوابة الامتناع الانتقائي (Selective Prediction Gate).'
                    : 'Clinical Validation Status: Clinical validation has not yet been conducted (0 clinically validated claims). All interactive waveform laboratories on this site execute deterministic mathematical synthetic signal generators (SIMULATED DATA) to demonstrate the Selective Prediction Abstention Gate architecture.'}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <a
                href="/research-brief-2026-11-14.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-900 hover:bg-amber-950 text-white text-xs font-semibold transition"
              >
                <Download className="w-3.5 h-3.5" />
                {isAr ? 'موجز البحث (PDF/HTML)' : 'Research Brief (PDF/HTML)'}
              </a>
              <a
                href="#evidence-audit"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-amber-100 text-amber-950 border border-amber-400 text-xs font-mono font-semibold transition"
              >
                <FileCode2 className="w-3.5 h-3.5" />
                {isAr ? 'مصفوفة التدقيق (12 بنداً)' : 'Audit Matrix (12 Items)'}
              </a>
            </div>
          </div>
        </div>

        {/* Metadata Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-900 text-xs font-mono font-semibold">
            <Activity className="w-3.5 h-3.5 text-blue-700" />
            {isAr
              ? 'التركيز الأساسي للإصدار الأول (V1): نبض الكاميرا rPPG المحكوم بجودة الإشارة'
              : 'V1 PRIMARY SCOPE: QUALITY-GATED SMARTPHONE rPPG & SELECTIVE ABSTENTION'}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-mono font-semibold">
            <Cpu className="w-3.5 h-3.5 text-emerald-700" />
            {isAr
              ? 'معمارية محلية C++17 / Kotlin متوافقة مع صفحات 16KB'
              : '16KB ELF PAGE-ALIGNED C++17 / KOTLIN ON-DEVICE ARCHITECTURE'}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 border border-slate-300 text-slate-800 text-xs font-mono">
            {isAr ? 'مراجعة التدقيق العلمي: 14 نوفمبر 2026' : 'Audit Revision: 14 November 2026'}
          </span>
        </div>

        {/* REVISED SCIENTIFIC TITLE (Section 1.2) */}
        <h1 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-[1.22] font-serif">
          {isAr
            ? 'الامتناع الواعي بعدم اليقين لتقدير النبض البصري عن بُعد (rPPG) عبر الهاتف الذكي تحت تغيرات الحركة والإضاءة: نموذج بحثي أولي محكوم بجودة الإشارة، التنبؤ الانتقائي، ومعمارية المعالجة المحلية'
            : 'Uncertainty-Aware Abstention for Smartphone-Based Remote PPG Under Motion and Illumination Variations: A Quality-Gated Research Prototype, Signal Reliability, Selective Prediction, and On-Device Processing Architecture'}
        </h1>

        <p className="mt-4 text-sm sm:text-base text-slate-700 max-w-5xl leading-relaxed">
          {isAr
            ? 'يركز هذا المشروع البحثي في إصداره الأول (V1) على مساهمة علمية وهندسية محددة وقابلة للاختبار: تصميم وتقييم بوابة امتناع انتقائي (Selective Prediction Gate) ثنائية المرحلة تمنع إخراج تقديرات معدل نبض القلب (HR) عندما تتدهور إشارة rPPG البصرية بسبب حركة اليد/الرأس أو ضبابية البؤرة أو تغير الإضاءة، مع فصل صارم بين الكود المنفذ حالياً (IMPLEMENTED)، والمحاكاة الاصطناعية (SIMULATED)، والفرضيات الاستكشافية المستقبلية (PROPOSED).'
            : 'This research project focuses its primary V1 contribution on a specific, falsifiable scientific and systems problem: designing and evaluating a two-stage Selective Prediction Abstention Gate that prevents corrupted Heart Rate (HR) outputs when smartphone optical rPPG signals degrade under motion, defocus blur, or ambient illumination shifts—while maintaining a strict separation between IMPLEMENTED code, SIMULATED synthetic models, and PROPOSED future clinical hypotheses.'}
        </p>

        {/* Academic Attribution & Governance Strip (Section 6) */}
        <div className="mt-5 p-4 rounded-xl bg-slate-100/90 border border-slate-200/90 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1 text-xs text-slate-700">
            <div className="flex flex-wrap items-center gap-2">
              <GraduationCap className="w-4 h-4 text-blue-800 shrink-0" />
              <span className="font-bold text-slate-900">
                {isAr
                  ? 'الباحث الطلابي الرئيسي ومطور النموذج الأولي:'
                  : 'Lead Student Researcher & Prototype Developer:'}
              </span>
              <span>Ahmed Elshal</span>
              <span className="font-mono text-[11px] text-blue-800 bg-white px-2 py-0.5 rounded border border-slate-200">
                ORCID: 0009-0009-2697-1139
              </span>
              <span className="font-mono text-[11px] text-slate-600">Ahmed.elshal224@gmail.com</span>
            </div>
            <div>
              <span className="font-bold text-slate-900">
                {isAr
                  ? 'الإشراف الأكاديمي والتوجيه العلمي (معهد المستقبل العالي للدراسات التكنولوجية المتخصصة — FA-HISTS): '
                  : 'Academic Advisors / Faculty Mentors (Higher Future Institute for Specialized Technological Studies — FA-HISTS): '}
              </span>
              <span>
                {isAr
                  ? 'د. هيام عبد المرضي ود. أسامة حلمي (قسم علوم الحاسب — خطاب الاعتماد المؤسسي الرسمي قيد الاستكمال قبل التقديم لأي منحة تشترط باحثاً رئيسياً PI).'
                  : 'Dr. Hayam Abd El-Mardy & Dr. Osama Helmy (Computer Science Dept. — Formal written institutional endorsement to be completed prior to any PI-led grant submission).'}
              </span>
            </div>
            <div className="text-[11px] text-slate-500">
              {isAr
                ? 'ملاحظة الحوكمة والأخلاقيات (IRB): لم تُجرَ أي تجارب سريرية بشرية حتى تاريخه. عضوية Dell EMC Academic Alliance وHuawei ICT Academy هي شراكات مناهج تدريبية للمعهد وليست جهات راعية أو مصادقة سريرياً على هذا النموذج.'
                : 'IRB & Affiliation Disclosure: No human-subject clinical trial has been conducted to date. Dell EMC Academic Alliance and Huawei ICT Academy are institutional training memberships of Future Academy, not project sponsors.'}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              onClick={onJumpToSimulators}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-900 hover:bg-blue-800 text-white text-xs font-semibold transition shadow-xs cursor-pointer"
            >
              <Sliders className="w-4 h-4" />
              {isAr ? 'مختبر الإشارات الاصطناعية ومنحنى المخاطرة' : 'Interactive Synthetic Signal & Risk Lab'}
            </button>
            <button
              onClick={onJumpToGrantPackage}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 text-xs font-semibold transition cursor-pointer"
            >
              <span>{isAr ? 'برامج Anthropic وحاسبة التوكنز الموثقة' : 'Anthropic Programs & Verified API Budget'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* FIRST-SCREEN 5 REVIEWER QUESTIONS (Section 8.2) */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-800">
              {isAr
                ? 'الإجابات الخمس المباشرة لمراجعي المنح والأقران (First-Screen Reviewer Brief)'
                : 'First-Screen Five-Question Brief for Grant Evaluators & Peer Reviewers'}
            </h2>
            <span className="text-xs font-mono text-slate-500">
              {isAr ? 'فصل شفاف بين المنفذ والمحاكي والمقترح' : 'Strict separation of Implemented, Simulated & Proposed'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {FIRST_SCREEN_REVIEWER_QA.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs font-bold text-blue-900">{item.id}</span>
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${
                        item.badge === 'IMPLEMENTED'
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                          : item.badge === 'SIMULATED'
                            ? 'bg-amber-50 text-amber-800 border-amber-300'
                            : 'bg-sky-50 text-sky-800 border-sky-300'
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-xs font-bold text-slate-900 mb-1.5 leading-snug">
                    {isAr ? item.questionAr : item.questionEn}
                  </h3>
                  <p className="text-[11.5px] text-slate-600 leading-relaxed">
                    {isAr ? item.answerAr : item.answerEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* THREE CORE SCIENTIFIC DIAGRAMS ON THE FIRST SCREEN (Section 8.2) */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Diagram A + C: V1 Quality-Gated rPPG Pipeline + Good vs Corrupted Signal Comparison */}
          <div className="lg:col-span-6 p-5 rounded-xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] font-mono font-bold uppercase text-blue-900 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                  {isAr ? 'مخطط (أ): معمارية بوابة الامتناع لـ rPPG (V1)' : 'Diagram A: Quality-Gated rPPG Pipeline (V1 Scope)'}
                </span>
                <span className="text-[11px] font-mono text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  SIMULATED / PROPOSED THRESHOLDS
                </span>
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-3">
                {isAr
                  ? 'مسار المعالجة المحلي ثنائي البوابة ومقارنة الإشارة السليمة مقابل التالفة بالحركة'
                  : 'Two-Stage Selective Abstention Pipeline & Clean vs. Motion-Corrupted Signal Comparison'}
              </h3>

              {/* SVG Pipeline Diagram */}
              <svg viewBox="0 0 620 155" className="w-full h-auto bg-slate-50 rounded-lg border border-slate-200 p-2">
                {/* Node 1: Camera ROI */}
                <rect x="10" y="22" width="125" height="68" rx="8" fill="#ffffff" stroke="#334155" strokeWidth="1.5" />
                <text x="72" y="44" textAnchor="middle" className="text-[10px] font-bold fill-slate-900" fontFamily="monospace">
                  1. Camera2 YUV
                </text>
                <text x="72" y="59" textAnchor="middle" className="text-[9px] fill-slate-600" fontFamily="sans-serif">
                  128x128 Grayscale ROI
                </text>
                <text x="72" y="74" textAnchor="middle" className="text-[9px] fill-blue-800" fontFamily="monospace">
                  Spatial Mean RGB_lin
                </text>

                <path d="M135 56 L162 56" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arrow)" />

                {/* Node 2: Focus Gate */}
                <rect x="162" y="22" width="135" height="68" rx="8" fill="#fffbeb" stroke="#d97706" strokeWidth="1.5" />
                <text x="229" y="43" textAnchor="middle" className="text-[10px] font-bold fill-amber-900" fontFamily="monospace">
                  2. Focus Gate
                </text>
                <text x="229" y="58" textAnchor="middle" className="text-[9px] fill-amber-950" fontFamily="monospace">
                  Var(∇²I) &ge; &tau;_focus
                </text>
                <text x="229" y="73" textAnchor="middle" className="text-[8.5px] fill-amber-800" fontFamily="sans-serif">
                  Candidate: 110.0 (8-bit)
                </text>

                <path d="M297 56 L324 56" stroke="#475569" strokeWidth="1.5" />

                {/* Node 3: POS + filtfilt + SQI Gate */}
                <rect x="324" y="22" width="145" height="68" rx="8" fill="#f0f9ff" stroke="#0284c7" strokeWidth="1.5" />
                <text x="396" y="42" textAnchor="middle" className="text-[10px] font-bold fill-sky-950" fontFamily="monospace">
                  3. POS + SQI Gate
                </text>
                <text x="396" y="57" textAnchor="middle" className="text-[9px] fill-sky-900" fontFamily="monospace">
                  0.70·Spec + 0.30·Kurt
                </text>
                <text x="396" y="72" textAnchor="middle" className="text-[8.5px] fill-sky-800" fontFamily="sans-serif">
                  Candidate: SQI &ge; 0.65
                </text>

                <path d="M469 42 L498 32" stroke="#15803d" strokeWidth="1.5" />
                <path d="M469 70 L498 82" stroke="#b91c1c" strokeWidth="1.5" />

                {/* Node 4A: Accept */}
                <rect x="498" y="12" width="112" height="40" rx="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
                <text x="554" y="30" textAnchor="middle" className="text-[9.5px] font-bold fill-emerald-950" fontFamily="monospace">
                  ACCEPT WINDOW
                </text>
                <text x="554" y="43" textAnchor="middle" className="text-[8.5px] fill-emerald-800" fontFamily="sans-serif">
                  Output HR + 95% CI
                </text>

                {/* Node 4B: Abstain */}
                <rect x="498" y="64" width="112" height="42" rx="6" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.5" />
                <text x="554" y="82" textAnchor="middle" className="text-[9.5px] font-bold fill-rose-950" fontFamily="monospace">
                  ABSTAIN (BLOCK)
                </text>
                <text x="554" y="96" textAnchor="middle" className="text-[8.5px] fill-rose-800" fontFamily="sans-serif">
                  Suppress False HR
                </text>

                {/* Bottom note */}
                <text x="310" y="136" textAnchor="middle" className="text-[9.5px] fill-slate-600" fontFamily="monospace">
                  Non-causal 3.0s (180-sample @ 60Hz) buffered window | f0 &plusmn; 0.15Hz &amp; 2f0 &plusmn; 0.15Hz Hanning PSD
                </text>
              </svg>
            </div>

            {/* Good vs Corrupted Signal Comparison Strip */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-emerald-50/60 border border-emerald-200">
                <div className="flex items-center justify-between text-xs font-bold text-emerald-950 mb-1">
                  <span className="inline-flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                    {isAr ? 'نافذة إشارة مقبولة (SQI = 0.88)' : 'High-Reliability Window (SQI = 0.88)'}
                  </span>
                  <span className="font-mono text-[10px] text-emerald-800">PASS GATE</span>
                </div>
                <svg viewBox="0 0 220 42" className="w-full h-10">
                  <path
                    d="M 2 30 Q 18 5, 30 22 Q 38 32, 46 20 Q 56 28, 72 32 Q 88 5, 100 22 Q 108 32, 116 20 Q 126 28, 142 32 Q 158 5, 170 22 Q 178 32, 186 20 Q 196 28, 215 32"
                    fill="none"
                    stroke="#059669"
                    strokeWidth="2"
                  />
                </svg>
                <p className="text-[11px] text-emerald-900 mt-1">
                  {isAr
                    ? 'تركيز طيفي واضح عند f0 و2f0 وتفرطح مورفولوجي منتظم -> يُسمح بتقدير النبض.'
                    : 'Concentrated harmonic energy at f0 & 2f0 -> Selective gate permits HR output.'}
                </p>
              </div>

              <div className="p-3 rounded-lg bg-rose-50/60 border border-rose-200">
                <div className="flex items-center justify-between text-xs font-bold text-rose-950 mb-1">
                  <span className="inline-flex items-center gap-1">
                    <AlertOctagon className="w-3.5 h-3.5 text-rose-700" />
                    {isAr ? 'نافذة تالفة بالحركة (SQI = 0.34)' : 'Motion-Corrupted Window (SQI = 0.34)'}
                  </span>
                  <span className="font-mono text-[10px] text-rose-800">ABSTAINED</span>
                </div>
                <svg viewBox="0 0 220 42" className="w-full h-10">
                  <path
                    d="M 2 20 L 14 38 L 26 4 L 38 36 L 52 9 L 65 39 L 78 6 L 92 35 L 106 12 L 118 40 L 132 5 L 148 37 L 162 8 L 176 38 L 192 6 L 206 35 L 218 14"
                    fill="none"
                    stroke="#e11d48"
                    strokeWidth="1.8"
                  />
                </svg>
                <p className="text-[11px] text-rose-900 mt-1">
                  {isAr
                    ? 'طيف مبعثر بسبب اهتزاز اليد (4.2Hz) -> تمتنع البوابة عن إخراج نبض خاطئ.'
                    : 'Broadband motion artifact (4.2Hz tremor) -> Gate abstains to prevent false HR.'}
                </p>
              </div>
            </div>
          </div>

          {/* Diagram B: Interactive Selective Prediction Risk-Coverage Curve (Section 8.2 & 10.4) */}
          <div className="lg:col-span-6 p-5 rounded-xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] font-mono font-bold uppercase text-emerald-900 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                  {isAr
                    ? 'مخطط (ب): منحنى المخاطرة مقابل التغطية (Risk–Coverage Curve)'
                    : 'Diagram B: Selective Prediction Risk–Coverage Trade-Off Curve'}
                </span>
                <span className="text-[11px] font-mono font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-300">
                  SIMULATED MODEL CURVE
                </span>
              </div>

              <h3 className="text-sm font-bold text-slate-900 mb-2">
                {isAr
                  ? 'انخفاض خطأ معدل النبض الانتقائي (Selective HR MAE) مع رفع عتبة الامتناع (τ_SQI)'
                  : 'Selective Risk (HR MAE in BPM) vs. Accepted Window Coverage (%) Across Threshold τ_SQI'}
              </h3>

              {/* Interactive Threshold Slider */}
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 mb-3">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-semibold text-slate-800">
                    {isAr
                      ? 'اضبط عتبة بوابة جودة الإشارة المرشحة (Candidate SQI Gate τ):'
                      : 'Adjust Candidate SQI Gate Threshold (τ_SQI):'}
                  </span>
                  <span className="font-mono font-bold text-blue-900 bg-blue-100 px-2 py-0.5 rounded">
                    τ_SQI = {sqiGateSlider.toFixed(2)} {sqiGateSlider === 0.65 ? '(Default Baseline)' : ''}
                  </span>
                </div>
                <input
                  type="range"
                  min={0.1}
                  max={0.9}
                  step={0.05}
                  value={sqiGateSlider}
                  onChange={(e) => setSqiGateSlider(parseFloat(e.target.value))}
                  aria-label="Candidate SQI Gate Threshold"
                  className="w-full accent-blue-900 cursor-pointer"
                />
                <div className="grid grid-cols-3 gap-2 mt-2 text-center">
                  <div className="p-1.5 rounded bg-white border border-slate-200">
                    <div className="text-[10px] text-slate-500 font-mono">
                      {isAr ? 'نسبة التغطية (Coverage)' : 'Accepted Coverage'}
                    </div>
                    <div className="text-sm font-bold font-mono text-slate-900">
                      {riskCurve.activePoint.coveragePercent}%
                    </div>
                  </div>
                  <div className="p-1.5 rounded bg-white border border-slate-200">
                    <div className="text-[10px] text-slate-500 font-mono">
                      {isAr ? 'معدل الامتناع (Abstention)' : 'Abstention Rate'}
                    </div>
                    <div className="text-sm font-bold font-mono text-amber-800">
                      {riskCurve.activePoint.abstentionPercent}%
                    </div>
                  </div>
                  <div className="p-1.5 rounded bg-emerald-50 border border-emerald-200">
                    <div className="text-[10px] text-emerald-800 font-mono">
                      {isAr ? 'الخطأ الانتقائي (Selective MAE)' : 'Selective Risk (HR MAE)'}
                    </div>
                    <div className="text-sm font-bold font-mono text-emerald-900">
                      {riskCurve.activePoint.selectiveHrMaeBpm} BPM
                    </div>
                  </div>
                </div>
              </div>

              {/* SVG Risk-Coverage Curve Plot */}
              <svg viewBox="0 0 540 165" className="w-full h-auto bg-slate-50 rounded-lg border border-slate-200 p-2">
                {/* Axes */}
                <line x1="52" y1="18" x2="52" y2="132" stroke="#64748b" strokeWidth="1.2" />
                <line x1="52" y1="132" x2="510" y2="132" stroke="#64748b" strokeWidth="1.2" />

                {/* Y-axis labels (HR MAE BPM from 1 to 7 BPM) */}
                <text x="45" y="24" textAnchor="end" className="text-[9px] fill-slate-500" fontFamily="monospace">
                  7.0 BPM
                </text>
                <text x="45" y="78" textAnchor="end" className="text-[9px] fill-slate-500" fontFamily="monospace">
                  4.0 BPM
                </text>
                <text x="45" y="130" textAnchor="end" className="text-[9px] fill-slate-500" fontFamily="monospace">
                  1.0 BPM
                </text>

                {/* Unfiltered Baseline Horizontal Dashed Line (6.85 BPM at 100% Coverage) */}
                <line
                  x1="52"
                  y1="26"
                  x2="510"
                  y2="26"
                  stroke="#dc2626"
                  strokeWidth="1.3"
                  strokeDasharray="4 4"
                />
                <text x="505" y="21" textAnchor="end" className="text-[8.5px] font-bold fill-rose-700" fontFamily="monospace">
                  Ungated Baseline (100% Cov): MAE = 6.85 BPM
                </text>

                {/* Selective Risk Curve Polyline */}
                <polyline
                  fill="none"
                  stroke="#1e3a8a"
                  strokeWidth="2.5"
                  points={riskCurve.curve
                    .map((pt) => {
                      const x = 52 + ((100 - pt.coveragePercent) / 60) * 440;
                      const y = 132 - ((pt.selectiveHrMaeBpm - 1.0) / 6.2) * 110;
                      return `${x.toFixed(1)},${y.toFixed(1)}`;
                    })
                    .join(' ')}
                />

                {/* Active Threshold Marker */}
                {(() => {
                  const pt = riskCurve.activePoint;
                  const cx = 52 + ((100 - pt.coveragePercent) / 60) * 440;
                  const cy = 132 - ((pt.selectiveHrMaeBpm - 1.0) / 6.2) * 110;
                  return (
                    <g>
                      <circle cx={cx} cy={cy} r="5.5" fill="#059669" stroke="#ffffff" strokeWidth="2" />
                      <text
                        x={Math.min(440, Math.max(95, cx))}
                        y={Math.max(38, cy - 10)}
                        textAnchor="middle"
                        className="text-[9px] font-bold fill-emerald-900"
                        fontFamily="monospace"
                      >
                        τ={pt.sqiThreshold} (Cov {pt.coveragePercent}%, MAE {pt.selectiveHrMaeBpm} BPM)
                      </text>
                    </g>
                  );
                })()}

                {/* X-axis labels */}
                <text x="58" y="148" className="text-[9px] fill-slate-600" fontFamily="monospace">
                  100% Coverage (0% Abstained)
                </text>
                <text x="505" y="148" textAnchor="end" className="text-[9px] fill-slate-600" fontFamily="monospace">
                  55% Coverage (45% Abstained — Strict Gate)
                </text>
              </svg>
            </div>

            <p className="mt-2 text-[11px] text-slate-500 leading-relaxed">
              {isAr
                ? 'تنبيه منهجي: يوضح هذا المنحنى النموذج الرياضي لمقايضة المخاطرة مقابل التغطية (Risk–Coverage Trade-off) في src/utils/biophysicsMath.ts. يتطلب الإثبات التجريبي النهائي تشغيل هذا البروتوكول على قاعدتي PURE وUBFC-rPPG بعتبات مجمدة مسبقاً.'
                : 'Methodological Note: This curve renders the mathematical Selective Prediction Risk–Coverage model in src/utils/biophysicsMath.ts. Empirical validation requires executing this protocol on PURE and UBFC-rPPG with pre-frozen validation thresholds.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
