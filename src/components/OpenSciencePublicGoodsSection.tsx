import React from 'react';
import {
  BookOpenCheck,
  Database,
  ShieldAlert,
  Lock,
  CheckCircle2,
  FileCode2,
} from 'lucide-react';
import { Language } from '../utils/biophysicsMath';

interface Props {
  lang: Language;
}

export const OpenSciencePublicGoodsSection: React.FC<Props> = ({ lang }) => {
  const isAr = lang === 'ar';

  const deliverables = [
    {
      id: 'OSS-01',
      titleEn: '1. Quality-Gated C++17 NDK & TypeScript Reference Signal Processing Library (Apache-2.0 / MIT)',
      titleAr: '1. مكتبة معالجة الإشارات المرجعية بلغة C++17 NDK وTypeScript (برخصة مفتوحة المصدر Apache-2.0 / MIT)',
      badge: 'IMPLEMENTED / SIMULATED',
      badgeStyle: 'bg-emerald-50 text-emerald-900 border-emerald-300',
      descEn:
        'Open-source reference implementations of our 64-byte cache-line aligned BiophysicalFramePacket (verified via static_assert & offsetof), non-causal reflection-padded 4th-order Butterworth filtfilt, composite SQI & Laplacian focus gates, and Selective Prediction Risk–Coverage evaluation scripts.',
      descAr:
        'تنفيذات مرجعية مفتوحة المصدر لهيكل BiophysicalFramePacket المحاذي لـ 64 بايت (المتحقق منه عبر static_assert وoffsetof)، ومرشح filtfilt غير السببي مع انعكاس الحواف، وبوابات الامتناع (SQI وLaplacian)، ونصوص حساب منحنى المخاطرة مقابل التغطية.',
    },
    {
      id: 'OSS-02',
      titleEn: '2. Reproducible Retrospective Evaluation Harness for Public rPPG Datasets (PURE & UBFC-rPPG)',
      titleAr: '2. حزمة التقييم الاسترجاعي القابلة لإعادة الإنتاج لقواعد بيانات الفيديو العامة (PURE وUBFC-rPPG)',
      badge: 'PROPOSED PROTOCOL',
      badgeStyle: 'bg-sky-50 text-sky-900 border-sky-300',
      descEn:
        'Automated TRIPOD+AI compliant evaluation scripts enforcing strict subject-independent train/validation/test partitioning, pre-test threshold freezing, clustered bootstrap 95% CIs, Bland–Altman Limits of Agreement, and coverage-conditioned comparisons against POS and CHROM baselines.',
      descAr:
        'نصوص تقييم إحصائي متوافقة مع إرشادات TRIPOD+AI تفرض الفصل الصارم على مستوى الأفراد، وتجميد العتبات قبل الاختبار، وحساب فترات ثقة Bootstrap العنقودية، وحدود توافق Bland–Altman، والمقارنة العادلة المشروطة بالتغطية.',
    },
    {
      id: 'OSS-03',
      titleEn: '3. Planned Protocol: FA-HISTS De-Identified ROI Signal Traces Schema (Pending Future IRB Approval)',
      titleAr: '3. البروتوكول المستقبلي المخطط: مخطط إشارات منطقة الاهتمام منزوعة الهوية (بانتظار موافقة IRB مستقبلاً)',
      badge: 'PLANNED / NOT YET COLLECTED',
      badgeStyle: 'bg-amber-50 text-amber-900 border-amber-300',
      descEn:
        'Audit Section 4.4 & 4.5 Disclosure: The FA-HISTS-Multimodal-Abstention-Dataset is a PLANNED future protocol (0 human subjects collected to date). Because raw facial video is biometric personally identifiable data (NOT inherently de-identified), any future data collection requires prior formal IRB approval, explicit written informed consent, and immediate extraction of spatially averaged ROI RGB traces so raw identifiable faces are never publicly distributed.',
      descAr:
        'إفصاح القسم 4.4 و4.5 من التدقيق: إن قاعدة بيانات FA-HISTS هي بروتوكول مستقبلي مخطط (لم يُجمع أي متطوعين حتى تاريخه). وبما أن فيديو الوجه الخام يُعد بيانات بيومترية مُعرّفة للهوية الشخصية، فإن أي جمع مستقبلي يتطلب موافقة مسبقة من لجنة الأخلاقيات (IRB)، وموافقة مستنيرة مكتوبة، والاقتصار على نشر المتوسطات اللونية الزمنية لمنطقة الاهتمام (ROI RGB Traces) دون نشر فيديو الوجه الخام.',
    },
  ];

  return (
    <section id="open-science" className="py-12 border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <BookOpenCheck className="w-4 h-4 text-emerald-700" />
            {isAr
              ? 'مخرجات العلم المفتوح وضوابط خصوصية الفيديو البيومتري (القسم 4.4 و4.5 من التدقيق)'
              : 'OPEN-SCIENCE DELIVERABLES & BIOMETRIC VIDEO PRIVACY GOVERNANCE (SECTIONS 4.4 & 4.5)'}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-serif">
            {isAr
              ? 'الالتزام بالعلم المفتوح: الكود المرجعي المتاح اليوم مقابل بروتوكول البيانات المستقبلي المحكوم بلجنة الأخلاقيات (IRB)'
              : 'Open-Science Public Goods: Available Reference Code vs. Planned IRB-Governed De-Identified Signal Schema'}
          </h2>
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {deliverables.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs font-bold text-slate-500">{item.id}</span>
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${item.badgeStyle}`}>
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                  {isAr ? item.titleAr : item.titleEn}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isAr ? item.descAr : item.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Biometric Privacy & De-Identification Box */}
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-300 text-amber-950 text-xs leading-relaxed flex items-start gap-3">
          <Lock className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
          <div>
            <strong className="block font-bold mb-1">
              {isAr
                ? 'قاعدة حماية الخصوصية البيومترية (فيديو الوجه الخام ليس منزوع الهوية بطبيعته):'
                : 'Biometric Facial Video Privacy Rule (Raw Facial Video Is NOT Inherently De-Identified):'}
            </strong>
            {isAr
              ? 'خلافاً للإشارات الرقمية المجردة (مثل منحنيات ECG أو PPG التلامسية)، يحتوي فيديو الوجه الخام (Raw RGB Facial Video) على ملامح الوجه البيومترية المُعرّفة للهوية. لذلك ينص بروتوكولنا المستقبلي على عدم نشر أي فيديو وجه خام بدون موافقة كتابية صريحة ومحددة، والاكتفاء بنشر المصفوفات الزمنية للمتوسط المكاني (1D Spatial Mean RGB_lin Time-Series) ومؤشرات الجودة (SQI / Focus Variance) منزوعة الهوية بالكامل.'
              : 'Unlike 1D contact physiological waveforms, raw RGB facial video contains biometric facial identity features and cannot be described as de-identified by default. Accordingly, our planned open-science release schema distributes spatially averaged 1D ROI time-series (R_lin, G_lin, B_lin), IMU accelerometer traces, and reference pulse oximeter waveforms—never raw identifiable facial video without explicit dedicated consent and IRB authorization.'}
          </div>
        </div>
      </div>
    </section>
  );
};
