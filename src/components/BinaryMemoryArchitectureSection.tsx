import React from 'react';
import {
  Cpu,
  Binary,
  CheckCircle2,
  AlertCircle,
  Code2,
} from 'lucide-react';
import { Language } from '../utils/biophysicsMath';

interface Props {
  lang: Language;
}

export const BinaryMemoryArchitectureSection: React.FC<Props> = ({ lang }) => {
  const isAr = lang === 'ar';

  const byteMapFields = [
    {
      offset: 'Bytes 00..07 (8 B)',
      field: 'int64_t timestampNs',
      descEn: 'Monotonic sensor frame timestamp (SENSOR_TIMESTAMP in nanoseconds)',
      descAr: 'الطابع الزمني الرتيب لإطار المستشعر بالنانوثانية (SENSOR_TIMESTAMP)',
      color: 'bg-blue-50 border-blue-300 text-blue-950',
    },
    {
      offset: 'Bytes 08..31 (24 B)',
      field: 'double linearRgb[3]',
      descEn: 'SPATIAL MEAN of segmented ROI after inverse-gamma linearization (R_lin, G_lin, B_lin) — NOT a full image frame',
      descAr: 'المتوسط المكاني لمنطقة الاهتمام (ROI) بعد إزالة جاما (R_lin, G_lin, B_lin) — وليس إطار الصورة الكامل',
      color: 'bg-emerald-50 border-emerald-300 text-emerald-950',
    },
    {
      offset: 'Bytes 32..39 (8 B)',
      field: 'double posPulseSample',
      descEn: 'POS projection sample after reflection-padded forward-backward filtfilt on 3.0s buffered window',
      descAr: 'عينة إسقاط POS بعد مرشح filtfilt الأمامي-الخلفي على نافذة مخزنة بطول 3.0 ثانية',
      color: 'bg-indigo-50 border-indigo-300 text-indigo-950',
    },
    {
      offset: 'Bytes 40..47 (8 B)',
      field: 'double sdppgSample',
      descEn: 'Second derivative acceleration plethysmogram sample (d²x/dt²)',
      descAr: 'عينة المشتقة الثانية لموجة النبض (SDPPG = d²x/dt²)',
      color: 'bg-purple-50 border-purple-300 text-purple-950',
    },
    {
      offset: 'Bytes 48..55 (8 B)',
      field: 'double sqiScore',
      descEn: 'Composite Signal Quality Index (0.70 * Spectral + 0.30 * Kurtosis) in [0.0, 1.0]',
      descAr: 'مؤشر جودة الإشارة المركب (0.70 * الطيف + 0.30 * التفرطح) في النطاق [0.0, 1.0]',
      color: 'bg-amber-50 border-amber-300 text-amber-950',
    },
    {
      offset: 'Bytes 56..59 (4 B)',
      field: 'uint32_t focusPassFlag',
      descEn: 'Laplacian focus gate flag (1 = Var(∇²I) >= tau_focus; 0 = Abstained due to blur/motion)',
      descAr: 'علم اجتياز بوابة البؤرة المكانية لابلاسيان (1 = مقبول؛ 0 = ممتنع بسبب الضبابية)',
      color: 'bg-sky-50 border-sky-300 text-sky-950',
    },
    {
      offset: 'Bytes 60..63 (4 B)',
      field: 'uint32_t reservedPadding',
      descEn: 'Explicit 4-byte tail padding to complete exact 64-byte ARMv9 L1 cache line',
      descAr: 'حشو صريح بطول 4 بايت لإكمال سطر ذاكرة الكاش L1 بحجم 64 بايت بالضبط',
      color: 'bg-slate-100 border-slate-300 text-slate-800',
    },
  ];

  return (
    <section id="binary-architecture" className="py-12 border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Binary className="w-4 h-4 text-emerald-700" />
            {isAr
              ? 'معمارية الذاكرة الثنائية C++17 المحققة عبر static_assert (IMPLEMENTED REFERENCE STRUCT)'
              : 'C++17 64-BYTE CACHE-LINE STRUCT VERIFIED VIA STATIC_ASSERT (AUDIT SECTION 5.3 & 5.4)'}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-serif">
            {isAr
              ? 'تخطيط الذاكرة الثنائي (64-Byte Cache-Line) والطبيعة غير السببية لمرشح filtfilt'
              : '64-Byte L1 Cache-Line Memory Layout (offsetof Verified) & Non-Causal filtfilt Window Buffering'}
          </h2>

          <p className="mt-2 text-sm text-slate-600 max-w-4xl leading-relaxed">
            {isAr
              ? 'عملاً بالقسمين 5.3 و5.4 من وثيقة التدقيق العلمي، يوضح هذا القسم التخطيط الدقيق بالبايت لهيكل BiophysicalFramePacket (بحجم 64 بايت بالضبط ومحاذاة 64 بايت)، مع التوضيح الصريح بأن المصفوفة double linearRgb[3] تخزن المتوسط المكاني لمنطقة الاهتمام (ROI Spatial Mean) بعد إزالة جاما وليس الصورة الخام الكاملة، وتوثيق زمن تجميع النافذة غير السببي لمرشح filtfilt.'
              : 'In compliance with Audit Sections 5.3 and 5.4, this section documents the exact byte-by-byte layout of BiophysicalFramePacket (64 bytes, 64-byte aligned), clarifies that double linearRgb[3] stores the spatial mean of the segmented ROI rather than a full image frame, and specifies the non-causal buffering latency of forward-backward filtfilt.'}
          </p>
        </div>

        {/* 64-Byte Visual Map */}
        <div className="grid grid-cols-1 md:grid-cols-7 gap-2.5 mb-6">
          {byteMapFields.map((item) => (
            <div
              key={item.offset}
              className={`p-3 rounded-xl border ${item.color} flex flex-col justify-between text-xs`}
            >
              <div>
                <div className="font-mono text-[10.5px] font-bold uppercase opacity-80">{item.offset}</div>
                <div className="font-mono font-bold text-xs mt-1 break-all">{item.field}</div>
                <p className="mt-2 text-[11px] leading-snug">
                  {isAr ? item.descAr : item.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Compile-Time static_assert & Non-Causal filtfilt Explanation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                <Code2 className="w-4 h-4" />
                {isAr
                  ? 'فحوصات وقت الترجمة (Compile-Time static_assert & offsetof)'
                  : 'Compile-Time Verification (static_assert & offsetof)'}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-700">
                C++17 STANDARD
              </span>
            </div>
            <pre className="font-mono text-[11px] text-slate-200 overflow-x-auto leading-relaxed bg-slate-950 p-3.5 rounded-xl border border-slate-800">
{`#include <cstddef>
#include <cstdint>

struct alignas(64) BiophysicalFramePacket {
    int64_t  timestampNs;        // Offset 0  (8 bytes)
    double   linearRgb[3];       // Offset 8  (24 bytes: ROI spatial mean R,G,B)
    double   posPulseSample;     // Offset 32 (8 bytes)
    double   sdppgSample;        // Offset 40 (8 bytes)
    double   sqiScore;           // Offset 48 (8 bytes)
    uint32_t focusPassFlag;      // Offset 56 (4 bytes)
    uint32_t reservedPadding;    // Offset 60 (4 bytes)
};

static_assert(sizeof(BiophysicalFramePacket) == 64, "Must be exactly 64 bytes");
static_assert(alignof(BiophysicalFramePacket) == 64, "Must be 64-byte aligned");
static_assert(offsetof(BiophysicalFramePacket, timestampNs) == 0);
static_assert(offsetof(BiophysicalFramePacket, linearRgb) == 8);
static_assert(offsetof(BiophysicalFramePacket, posPulseSample) == 32);
static_assert(offsetof(BiophysicalFramePacket, sdppgSample) == 40);
static_assert(offsetof(BiophysicalFramePacket, sqiScore) == 48);
static_assert(offsetof(BiophysicalFramePacket, focusPassFlag) == 56);
static_assert(offsetof(BiophysicalFramePacket, reservedPadding) == 60);`}
            </pre>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <AlertCircle className="w-4 h-4 text-blue-800" />
                {isAr
                  ? 'توضيح هندسي حاسم: مرشح filtfilt غير السببي (Non-Causal Window Buffering)'
                  : 'Engineering Clarification: Non-Causal Forward-Backward filtfilt Window Latency'}
              </div>

              <p>
                {isAr
                  ? '1. ماذا يخزن الحقل double linearRgb[3]؟ يخزن هذا الحقل (24 بايت) المتوسط الحسابي المكاني للبكسلات داخل منطقة الاهتمام المقسمة (Segmented Skin ROI) بعد تطبيق تحويل إزالة جاما (Inverse Gamma Linearization)، ولا يخزن مصفوفة بكسلات الكاميرا الكاملة.'
                  : '1. What does double linearRgb[3] store? This 24-byte array stores the spatial average (mean R_lin, G_lin, B_lin) computed across the segmented skin ROI after inverse-gamma linearization—never the raw full-frame pixel buffer.'}
              </p>

              <p>
                {isAr
                  ? '2. السببية وزمن التجميع في مرشح filtfilt (القسم 5.4): يقوم مرشح Butterworth الأمامي-الخلفي الصفري الطور (Zero-Phase filtfilt) بتمرير الإشارة للأمام ثم عكسها وتمريرها للخلف مع إضافة حشو انعكاسي عند الأطراف (Reflection Padding = 3 × N_order = 12 عينة). هذا يعني أنه مرشح غير سببي (Non-causal) يعمل على نافذة زمنية مجمعة بطول 3.0 ثانية (180 عينة عند 60Hz) تنزلق كل 1.0 ثانية، وليس مرشحاً لحظياً عينة-بعينة.'
                  : '2. Non-Causality & Window Latency of filtfilt (Audit Section 5.4): Zero-phase forward-backward filtering passes the signal forward and then backward after applying odd-symmetric boundary reflection padding (3 * N_order = 12 samples). Consequently, filtfilt is non-causal within each sliding 3.0-second (180-sample @ 60 Hz) buffered window (updated every 1.0s stride), trading window buffering delay for zero phase distortion of the dicrotic notch.'}
              </p>

              <div className="p-3 rounded-xl bg-white border border-slate-200 font-mono text-[11px] text-slate-800">
                <div>Window Length: N = 180 samples (3.0s @ 60 Hz)</div>
                <div>Reflection Padding: L_pad = 3 × 4 = 12 samples at both boundaries</div>
                <div>Filter Order: 4th-order Butterworth cascade (2× Biquad SOS) -&gt; 8th-order effective zero-phase</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
