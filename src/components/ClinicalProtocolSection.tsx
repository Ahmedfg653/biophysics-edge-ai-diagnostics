import React from 'react';
import {
  ShieldCheck,
  AlertTriangle,
  Sliders,
  CheckCircle2,
  XCircle,
} from 'lucide-react';
import { Language } from '../utils/biophysicsMath';

interface Props {
  lang: Language;
}

export const ClinicalProtocolSection: React.FC<Props> = ({ lang }) => {
  const isAr = lang === 'ar';

  const edgeCaseRules = [
    {
      code: 'ERR_NO_F0_PEAK',
      conditionEn: 'No distinguishable fundamental cardiac peak f0 in [0.70, 3.50] Hz (42–210 BPM)',
      conditionAr: 'عدم وجود ذروة تردد قلبي أساسي f0 واضحة في النطاق [0.70, 3.50] Hz (42–210 نبضة/دقيقة)',
      actionEn: 'Set SQI = 0.0 -> Immediate Abstention (Suppress HR output)',
      actionAr: 'ضبط SQI = 0.0 -> امتناع فوري وحجب تقدير النبض',
    },
    {
      code: 'ERR_SENSOR_CLIPPING',
      conditionEn: '> 5.0% of ROI pixels saturated at 0 (underexposed) or 255 (specular glare)',
      conditionAr: 'تشبع أكثر من 5.0% من بكسلات منطقة الاهتمام عند 0 (إظلام) أو 255 (وهج مرآوي)',
      actionEn: 'Set SQI = 0.0 -> Prompt user to adjust lighting angle',
      actionAr: 'ضبط SQI = 0.0 -> تنبيه المستخدم لتعديل زاوية الإضاءة',
    },
    {
      code: 'ERR_ROI_MOTION_BURST',
      conditionEn: 'Inter-frame ROI bounding-box centroid displacement > 15% of ROI width',
      conditionAr: 'إزاحة مركز منطقة الاهتمام (ROI) بين إطارين متتاليين بنسبة تتجاوز 15%',
      actionEn: 'Flush 3.0s ring buffer -> Abstain until 3.0s of stable tracking resumes',
      actionAr: 'تفريغ نافذة الـ 3.0 ثانية -> الامتناع حتى استقرار التتبع لمدة 3 ثوانٍ',
    },
    {
      code: 'ERR_FRAME_JITTER_DROP',
      conditionEn: 'Camera2 SENSOR_TIMESTAMP inter-frame delta > 33.3 ms (dropped frames below 30 fps)',
      conditionAr: 'فجوة الطابع الزمني بين إطارين تتجاوز 33.3 مللي ثانية (سقوط إطارات تحت 30fps)',
      actionEn: 'Invalidate current 180-sample window -> Abstain',
      actionAr: 'إلغاء صلاحية نافذة الـ 180 عينة الحالية -> امتناع فوري',
    },
  ];

  return (
    <section id="clinical-protocol" className="py-12 border-b border-slate-200 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-900 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Sliders className="w-4 h-4 text-blue-800" />
            {isAr
              ? 'التعريف الرياضي الدقيق لبوابات الامتناع والحالات الحدية (القسم 3.10 و3.11 من التدقيق)'
              : 'EXACT MATHEMATICAL SPECIFICATION OF ABSTENTION GATES & EDGE CASES (SECTIONS 3.10 & 3.11)'}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-serif">
            {isAr
              ? 'بوابة جودة الإشارة المركبة (SQI) وبوابة البؤرة المكانية (Laplacian): العتبات الأولية وقواعد الحالات الحدية'
              : 'Composite SQI & Laplacian Focus Abstention Gates: Heuristic Baseline Thresholds & Edge-Case Rules'}
          </h2>

          <p className="mt-2 text-sm text-slate-600 max-w-4xl leading-relaxed">
            {isAr
              ? 'يوثق هذا القسم المعادلات الرياضية الكاملة وعرض النطاق الترددي (Δf) وأبعاد رقعة الصورة الرمادية لحساب مؤشر جودة الإشارة (SQI) وتباين لابلاسيان للبؤرة المكانية Var(∇²I)، مع تصنيف الأرقام (0.70، 0.30، 0.65، 110.0) بصفتها عتبات استكشافية أولية (Empirical Heuristic Baseline Thresholds) تتطلب المعايرة والتجميد على مجموعة التحقق قبل الاختبار.'
              : 'This section defines the complete mathematical formulation, spectral integration bandwidth (Δf), and grayscale ROI patch normalization for the Composite SQI and Laplacian Focus gates—explicitly classifying the parameters (0.70, 0.30, 0.65, 110.0) as Empirical Heuristic Baseline Thresholds that require validation-split tuning and pre-test freezing.'}
          </p>
        </div>

        {/* Two Gate Specification Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Gate 1: Laplacian Spatial Focus Gate */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-amber-50 text-amber-900 border border-amber-300">
                STAGE 1 GATE: SPATIAL DEFOCUS & MOTION BLUR
              </span>
              <span className="font-mono text-[11px] font-bold text-sky-900 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                HEURISTIC BASELINE: 110.0
              </span>
            </div>

            <h3 className="text-base font-bold text-slate-900 mb-2">
              {isAr
                ? 'بوابة تباين لابلاسيان للبؤرة المكانية: Var(∇²I) >= τ_focus'
                : 'Laplacian Spatial Focus Variance Gate: Var(∇²I) >= τ_focus'}
            </h3>

            <div className="p-3 rounded-xl bg-slate-900 text-slate-100 font-mono text-[11px] mb-3 overflow-x-auto leading-relaxed">
              <div>// 1. Normalize segmented ROI to fixed 128×128 8-bit grayscale [0..255]:</div>
              <div>I_gray(x,y) = round(0.299·R + 0.587·G + 0.114·B) ∈ [0, 255]</div>
              <div className="mt-1">// 2. Convolve with 3×3 discrete Laplacian kernel:</div>
              <div>L(x,y) = I(x+1,y) + I(x-1,y) + I(x,y+1) + I(x,y-1) - 4·I(x,y)</div>
              <div className="mt-1">// 3. Compute spatial variance across N_pix = 126×126 interior pixels:</div>
              <div>Var(∇²I) = (1 / N_pix) Σ [L(x,y) - μ_L]² &gt;= τ_focus (Candidate: 110.0)</div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {isAr
                ? 'لماذا يجب تثبيت دقة وتدرج الرقعة؟ لأن تباين لابلاسيان يعتمد تربيعياً على مدى كثافة البكسل ([0..255] مقابل [0..1]) وعلى أبعاد الرقعة (128×128) ومرشح شحذ الصورة (ISP Sharpening). لذلك تُعامل القيمة 110.0 كعتبة مرشحة أولية تُعاير لكل مجموعة بيانات وكاميرا.'
                : 'Why normalize patch resolution and bit depth? Because Laplacian variance scales quadratically with intensity range ([0..255] vs. [0..1]), ROI resize dimensions (128×128), and camera ISP sharpening. Thus, τ_focus = 110.0 is an initial candidate threshold tuned on the validation split.'}
            </p>
          </div>

          {/* Gate 2: Composite Signal Quality Index (SQI) Gate */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-blue-50 text-blue-900 border border-blue-300">
                STAGE 2 GATE: TEMPORAL & SPECTRAL RELIABILITY
              </span>
              <span className="font-mono text-[11px] font-bold text-sky-900 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                HEURISTIC BASELINE: 0.65
              </span>
            </div>

            <h3 className="text-base font-bold text-slate-900 mb-2">
              {isAr
                ? 'بوابة مؤشر جودة الإشارة المركب: SQI = w1·SQI_spec + w2·SQI_kurt >= τ_SQI'
                : 'Composite Temporal-Spectral Gate: SQI = w1·SQI_spec + w2·SQI_kurt >= τ_SQI'}
            </h3>

            <div className="p-3 rounded-xl bg-slate-900 text-slate-100 font-mono text-[11px] mb-3 overflow-x-auto leading-relaxed">
              <div>// 1. Hanning-windowed PSD over 3.0s (N=180 @ 60Hz), Δf = ±0.15 Hz:</div>
              <div>SQI_spec = [ ∫_(f0-0.15)^(f0+0.15) P(f)df + ∫_(2f0-0.15)^(2f0+0.15) P(f)df ] / ∫_(0.50)^(5.00) P(f)df</div>
              <div className="mt-1">// 2. Bounded Morphological Kurtosis Factor in [0, 1]:</div>
              <div>κ = [ (1/N) Σ (x_i - μ)⁴ ] / [ (1/N) Σ (x_i - μ)² ]² ; SQI_kurt = exp(-|κ - 2.65| / 2.50)</div>
              <div className="mt-1">// 3. Candidate Linear Combination (Tuned on Validation Split):</div>
              <div>SQI = 0.70 · SQI_spec + 0.30 · SQI_kurt &gt;= τ_SQI (Candidate: 0.65)</div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {isAr
                ? 'يقيس SQI_spec نسبة الطاقة المركزة حول التردد القلبي الأساسي f0 وتوافقياته الثانية 2f0 (بعرض نطاق Δf = ±0.15 Hz) إلى إجمالي القدرة في النطاق الفسيولوجي [0.5, 5.0] Hz، بينما يرفض SQI_kurt النوافذ ذات القمم الشاذة الناتجة عن الارتطام المفاجئ.'
                : 'SQI_spec measures the fraction of power concentrated within Δf = ±0.15 Hz around the fundamental cardiac frequency f0 and second harmonic 2f0 relative to the [0.5, 5.0] Hz band, while SQI_kurt penalizes impulsive motion spikes.'}
            </p>
          </div>
        </div>

        {/* Deterministic Edge-Case Handling Table */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
          <h3 className="text-sm font-bold text-slate-900 mb-3">
            {isAr
              ? 'قواعد معالجة الحالات الحدية الأربعة (Deterministic Edge-Case Abstention Rules — القسم 3.10)'
              : 'Four Deterministic Edge-Case Abstention Rules (Audit Section 3.10)'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            {edgeCaseRules.map((rule) => (
              <div key={rule.code} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="font-mono text-[11px] font-bold text-rose-800 bg-rose-50 px-2 py-0.5 rounded border border-rose-200 inline-block mb-1.5">
                  {rule.code}
                </div>
                <div className="font-semibold text-slate-900 mb-1">
                  {isAr ? rule.conditionAr : rule.conditionEn}
                </div>
                <div className="text-[11px] text-emerald-900 font-medium">
                  {isAr ? rule.actionAr : rule.actionEn}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
