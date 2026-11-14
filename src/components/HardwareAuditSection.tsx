import React from 'react';
import {
  Cpu,
  HardDrive,
  AlertTriangle,
  CheckCircle2,
  Terminal,
  ExternalLink,
  Gauge,
} from 'lucide-react';
import { Language } from '../utils/biophysicsMath';

interface Props {
  lang: Language;
}

export const HardwareAuditSection: React.FC<Props> = ({ lang }) => {
  const isAr = lang === 'ar';

  const verifiedChipSpecs = [
    {
      componentEn: 'Primary Prime Core',
      componentAr: 'النواة الرئيسية الفائقة (Prime Core)',
      spec: '1× Arm Cortex-X925 @ up to 3.73 GHz',
      status: 'VERIFIED MEDIATEK SPEC',
    },
    {
      componentEn: 'Performance & Efficiency Cluster',
      componentAr: 'أنوية الأداء والكفاءة',
      spec: '3× Arm Cortex-X4 + 4× Arm Cortex-A720',
      status: 'VERIFIED MEDIATEK SPEC',
    },
    {
      componentEn: 'Neural Processing Unit (NPU)',
      componentAr: 'وحدة المعالجة العصبية (NPU)',
      spec: 'MediaTek NPU 890 (8th-Gen Agentic/GenAI & INT8/FP16 Tensor Engine)',
      status: 'VERIFIED MEDIATEK SPEC',
    },
    {
      componentEn: 'Graphics Processing Unit (GPU)',
      componentAr: 'وحدة معالجة الرسوميات (GPU)',
      spec: 'Arm Immortalis-G925 MC12',
      status: 'VERIFIED MEDIATEK SPEC',
    },
  ];

  const estimatedTargets = [
    {
      stageEn: 'C++17 NEON SIMD POS + Reflection-Padded filtfilt (180-sample window)',
      stageAr: 'مرشح C++17 NEON SIMD POS + filtfilt مع انعكاس الحواف (نافذة 180 عينة)',
      targetValue: '1.15 ms (p50) / 1.48 ms (p99)',
      badge: 'ESTIMATED DESIGN TARGET',
      noteEn: 'Calculated from instruction-count complexity on Cortex-A720/X4; requires physical Perfetto trace log.',
      noteAr: 'محسوب من التعقيد الحسابي لتعليمات NEON؛ يتطلب سجل قياس Perfetto فعلي على الجهاز.',
    },
    {
      stageEn: 'LiteRT NeuroPilot NPU Delegate Inference (12-Feature Vector)',
      stageAr: 'استدلال مفوض LiteRT NeuroPilot NPU (متجه 12 ميزة)',
      targetValue: '0.68 ms (p50) / 0.95 ms (p99)',
      badge: 'ESTIMATED DESIGN TARGET',
      noteEn: 'Target latency for INT8/FP16 CompiledModel via LiteRT MediaTek NeuroPilot delegate.',
      noteAr: 'زمن الاستجابة المستهدف لنموذج INT8/FP16 عبر مفوض LiteRT MediaTek NeuroPilot.',
    },
    {
      stageEn: 'JNI DirectByteBuffer Ring-Buffer Heap Allocations',
      stageAr: 'تخصيصات الذاكرة الديناميكية (Heap Allocations) في الحلقة الفورية',
      targetValue: '0 allocations/frame (Pre-allocated Ring Buffer)',
      badge: 'ARCHITECTURAL INVARIANT',
      noteEn: 'Enforced by pre-allocating ByteBuffer.allocateDirect() at session startup outside the frame callback.',
      noteAr: 'يتحقق عبر التخصيص المسبق للذاكرة المباشرة (allocateDirect) عند بدء الجلسة خارج حلقة الإطارات.',
    },
    {
      stageEn: 'Android 15+ ELF Shared Library Page Alignment',
      stageAr: 'محاذاة صفحات المكتبات المشتركة (ELF Page Alignment) لأندرويد 15+',
      targetValue: '16,384 Bytes (p_align = 0x4000 / 2**14)',
      badge: 'VERIFIABLE VIA READELF',
      noteEn: 'Configured via CMake -Wl,-z,max-page-size=16384 per Google Play Nov 2025 mandate.',
      noteAr: 'مضبوط عبر علم الربط -Wl,-z,max-page-size=16384 وفق إلزام متجر Google Play.',
    },
  ];

  return (
    <section id="hardware" className="py-12 border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-300 text-slate-800 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Cpu className="w-4 h-4 text-blue-800" />
            {isAr
              ? 'تدقيق العتاد ووقت التشغيل: المواصفات الموثقة مقابل الأهداف التصميمية المقدرة (القسم 5 من التدقيق)'
              : 'HARDWARE & RUNTIME AUDIT: VERIFIED SILICON SPECS VS. ESTIMATED DESIGN TARGETS (SECTION 5)'}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-serif">
            {isAr
              ? 'معمارية شريحة MediaTek Dimensity 9400+ (NPU 890) وبروتوكول قياس الأداء القابل لإعادة الإنتاج'
              : 'MediaTek Dimensity 9400+ (NPU 890) Target Architecture & Reproducible Profiling Protocol'}
          </h2>

          <p className="mt-2 text-sm text-slate-600 max-w-4xl leading-relaxed">
            {isAr
              ? 'يفصل هذا القسم بدقة بين المواصفات الرسمية الموثقة لشريحة MediaTek Dimensity 9400+ وتوافق Google AI Edge LiteRT، وبين أرقام الكمون الزمني (مثل 0.68 ms و1.15 ms) التي تُصنف بشفافية كـ "أهداف تصميمية مقدرة (ESTIMATED DESIGN TARGETS)" بانتظار تصدير سجلات القياس الفعلي (Perfetto / Android Studio Profiler) من الجهاز.'
              : 'This section strictly separates verified MediaTek Dimensity 9400+ silicon specifications and Google AI Edge LiteRT documentation from runtime execution latency targets (e.g., 0.68 ms NPU, 1.15 ms DSP), which are transparently labeled as ESTIMATED DESIGN TARGETS pending physical handset profiler logs.'}
          </p>
        </div>

        {/* Warning Box on Estimated Latency Targets */}
        <div className="mb-6 p-4 rounded-xl bg-amber-50 border border-amber-300 text-amber-950 text-xs leading-relaxed flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong className="block font-bold mb-1">
              {isAr
                ? 'إفصاح منهجي حول أرقام الأداء العتادي (القسم 5.2 من التدقيق):'
                : 'Methodological Disclosure on Runtime Latency Figures (Audit Section 5.2):'}
            </strong>
            {isAr
              ? 'إن مواصفات المعالج (Cortex-X925 @ 3.73GHz وNPU 890) ودعم LiteRT NeuroPilot ومحاذاة صفحات 16KB هي حقائق تقنية موثقة رسمياً. أما أزمنة التنفيذ التفصيلية (0.68 ms على NPU و1.15 ms لمرشح C++17 و2.9% استهلاك CPU) فهي تقديرات هندسية مستهدفة (Estimated Design Targets) وليست قياسات مسجلة بعد من جهاز فيزيائي. يوضح الجدول أدناه البروتوكول المعياري اللازم لإثباتها.'
              : 'While the Dimensity 9400+ hardware specifications, LiteRT NeuroPilot delegate support, and Android 15+ 16KB ELF alignment rules are officially documented facts, the specific runtime latency numbers (0.68 ms NPU, 1.15 ms C++17 DSP, 2.9% CPU utilization) are Estimated Engineering Design Targets—not yet exported from a physical handset profiler.'}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          {/* Verified Hardware Specs */}
          <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                {isAr
                  ? '1. المواصفات الرسمية الموثقة للشريحة المستهدفة'
                  : '1. Verified Official Target SoC Specifications'}
              </h3>
              <a
                href="https://www.mediatek.com/products/smartphones/mediatek-dimensity-9400-plus"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-mono text-blue-700 hover:underline"
              >
                MediaTek Spec <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="space-y-2.5 text-xs">
              {verifiedChipSpecs.map((item) => (
                <div key={item.componentEn} className="p-3 rounded-xl bg-white border border-slate-200">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-slate-900">
                      {isAr ? item.componentAr : item.componentEn}
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {item.status}
                    </span>
                  </div>
                  <div className="font-mono text-slate-700 text-[11.5px]">{item.spec}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Estimated Runtime Design Targets */}
          <div className="lg:col-span-7 p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Gauge className="w-4 h-4 text-amber-700" />
                {isAr
                  ? '2. أهداف الكمون والذاكرة التصميمية (بانتظار سجلات القياس الفعلي)'
                  : '2. Estimated Runtime Latency & Memory Targets (Pending Physical Trace Logs)'}
              </h3>
              <a
                href="https://ai.google.dev/edge/litert/next/mediatek"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-mono text-blue-700 hover:underline"
              >
                LiteRT NeuroPilot Docs <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="space-y-2.5 text-xs">
              {estimatedTargets.map((t) => (
                <div key={t.stageEn} className="p-3 rounded-xl bg-white border border-slate-200">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <span className="font-bold text-slate-900">{isAr ? t.stageAr : t.stageEn}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-blue-900">{t.targetValue}</span>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-300">
                        {t.badge}
                      </span>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-600">{isAr ? t.noteAr : t.noteEn}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mandatory Benchmark Reproducibility Protocol (Audit Section 5.2) */}
        <div className="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800">
          <div className="flex items-center gap-2 text-xs font-mono text-sky-300 uppercase mb-2">
            <Terminal className="w-4 h-4" />
            {isAr
              ? 'بروتوكول التحقق العتادي الإلزامي لتحويل الأهداف التصميمية إلى BENCHMARKED (القسم 5.2)'
              : 'Mandatory Hardware Benchmark Protocol to Transition Targets from PROPOSED to BENCHMARKED (Section 5.2)'}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
            <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
              <strong className="block text-white mb-1">
                {isAr ? '1. توصيف البيئة والاحماء (Warm-up & Iterations):' : '1. Environment, Warm-up & Iterations:'}
              </strong>
              {isAr
                ? 'تسجيل طراز الهاتف الفعلي، إصدار نواة Android 15/16، إصدار LiteRT وNeuroPilot، مع تشغيل 50 دورة إحماء (Warm-up runs) متبوعة بـ 1,000 دورة قياس وحساب الوسيط (p50) والمئين (p95 وp99).'
                : 'Log exact handset model, Android 15/16 kernel build, LiteRT & NeuroPilot runtime versions; execute 50 warm-up runs followed by 1,000 timed iterations reporting p50, p95, and p99 latencies.'}
            </div>
            <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
              <strong className="block text-white mb-1">
                {isAr ? '2. التحقق من محاذاة 16KB عبر llvm-readelf:' : '2. 16KB ELF Alignment Verification Command:'}
              </strong>
              <code className="block font-mono text-[11px] text-emerald-300 bg-slate-950 p-2 rounded mt-1">
                llvm-readelf -l libbiophysics_ndk.so | grep LOAD
                <br />
                # Must verify: Align = 0x4000 (16,384 B)
              </code>
            </div>
            <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
              <strong className="block text-white mb-1">
                {isAr ? '3. البصمة الحرارية واستهلاك البطارية:' : '3. Thermal & Battery Drain Profiling:'}
              </strong>
              {isAr
                ? 'تصدير ملفات Perfetto trace وBattery Historian خلال جلسة تشغيل متواصلة لمدة 15 دقيقة عند 60fps للتحقق من عدم حدوث اختناق حراري (Thermal Throttling).'
                : 'Export Perfetto system trace and Battery Historian logs across a continuous 15-minute 60fps capture session to verify absence of thermal throttling.'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
