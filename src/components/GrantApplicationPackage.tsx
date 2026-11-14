import React, { useState } from 'react';
import {
  FileText,
  Copy,
  Check,
  ExternalLink,
  BookOpen,
  ShieldCheck,
} from 'lucide-react';
import { Language } from '../utils/biophysicsMath';
import { PEER_REVIEWED_REFERENCES_12 } from '../data/bilingualContent';
import { OFFICIAL_20_VERIFICATION_LINKS } from '../data/scientificAuditData';

interface Props {
  lang: Language;
}

export const GrantApplicationPackage: React.FC<Props> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (key: string, text: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const auditedGrantFields = [
    {
      key: 'title',
      labelEn: '1. Audited Research Project Title (Scoped V1 Contribution)',
      labelAr: '1. عنوان المشروع البحثي المعتمد بعد التدقيق (التركيز على بوابة الامتناع لـ rPPG)',
      valueEn:
        'Uncertainty-Aware Abstention for Smartphone-Based Remote PPG Under Motion and Illumination Variations: A Quality-Gated Research Prototype, Signal Reliability, Selective Prediction, and On-Device Processing Architecture',
      valueAr:
        'الامتناع الواعي بعدم اليقين لتقدير النبض البصري عن بُعد (rPPG) عبر الهاتف الذكي تحت تغيرات الحركة والإضاءة: نموذج بحثي أولي محكوم بجودة الإشارة، التنبؤ الانتقائي، ومعمارية المعالجة المحلية',
    },
    {
      key: 'team',
      labelEn: '2. Research Team Roles, Institutional Affiliation & IRB Status Disclosure',
      labelAr: '2. أدوار الفريق البحثي، الانتماء المؤسسي، والإفصاح عن حالة لجنة الأخلاقيات (IRB)',
      valueEn:
        'Lead Student Researcher & Prototype Developer: Ahmed Elshal (ORCID: 0009-0009-2697-1139, Email: Ahmed.elshal224@gmail.com) | Academic Advisors / Faculty Mentors: Dr. Hayam Abd El-Mardy & Dr. Osama Helmy — Computer Science Department, Higher Future Institute for Specialized Technological Studies (Future Academy / FA-HISTS), Cairo, Egypt. (Note: Formal written institutional endorsement on FA-HISTS letterhead to be completed prior to any PI-led track submission. IRB Status: No human-subject clinical trial has been conducted to date; current work consists of synthetic mathematical modeling and on-device systems architecture.)',
      valueAr:
        'الباحث الطلابي الرئيسي ومطور النموذج الأولي: أحمد الشال (ORCID: 0009-0009-2697-1139، البريد: Ahmed.elshal224@gmail.com) | المشرفان الأكاديميان: د. هيام عبد المرضي ود. أسامة حلمي — قسم علوم الحاسب، معهد المستقبل العالي للدراسات التكنولوجية المتخصصة (FA-HISTS)، القاهرة، مصر. (ملاحظة: يجري استكمال خطاب الاعتماد المؤسسي الرسمي قبل التقديم لأي مسار يشترط باحثاً رئيسياً PI. حالة لجنة الأخلاقيات IRB: لم تُجرَ أي تجارب سريرية بشرية حتى تاريخه.)',
    },
    {
      key: 'programs',
      labelEn: '3. Separation of Anthropic Support Tracks & Verified Public API Budget Request',
      labelAr: '3. الفصل بين مساري دعم Anthropic وطلب ميزانية API الموثقة',
      valueEn:
        'We distinguish between Anthropic’s two academic tracks: (Track B — Primary API Request) Anthropic AI for Science Program: requesting $7,200 USD in Base Scenario free API credits over 6 months (well within the $20,000 / 6-month program ceiling; applications reviewed on the first Monday of each month) using standard public API models (Claude Opus 4.1/4 at $15/$75 per 1M tokens, Claude Sonnet 4.5/4 at $3/$15 per 1M tokens, and Claude Haiku 3.5 at $0.80/$4.00 per 1M tokens with 50% Prompt Caching). (Track A — Separate Workspace Track) Claude Team Plan for Scientists ($0 Standard / $15 Premium per month for up to 25 seats for 12 months), which requires formal PI/faculty institutional verification.',
      valueAr:
        'نفصل بدقة بين مساري دعم البحث العلمي لدى Anthropic: (المسار B — طلب أرصدة API الأساسي) برنامج Anthropic AI for Science: نطلب 7,200 دولار أمريكي في السيناريو الأساسي كأرصدة API مجانية لمدة 6 أشهر (ضمن سقف البرنامج البالغ 20,000 دولار لمدة 6 أشهر) باستخدام نماذج API العامة القياسية (Claude Opus 4.1/4 وClaude Sonnet 4.5/4 وClaude Haiku 3.5 مع تخزين مؤقت بنسبة 50%). (المسار A — مسار مساحة العمل المنفصل) خطة Claude Team للعلماء (0$ للمقعد القياسي و15$ للمميز حتى 25 مقعداً لمدة 12 شهراً) والمهيأة للمجموعات البحثية بقيادة باحث رئيسي (PI).',
    },
    {
      key: 'methodology',
      labelEn: '4. 6-Month Retrospective Evaluation & Systems Verification Roadmap (TRIPOD+AI Compliant)',
      labelAr: '4. خارطة طريق التحقق الاسترجاعي والهندسي لمدة 6 أشهر (المتوافقة مع TRIPOD+AI)',
      valueEn:
        'Months 1–2: Automated synthetic artifact injection & C++17 static_assert / 16KB ELF alignment verification. Months 3–4: Subject-independent retrospective evaluation on public facial rPPG video datasets (PURE n=10, UBFC-rPPG n=42) tuning candidate thresholds (tau_SQI = 0.65, tau_focus = 110.0) exclusively on the Validation split and freezing them prior to Held-Out Test evaluation. Months 5–6: Publication of full Selective Prediction Risk–Coverage curves, Bland–Altman 95% Limits of Agreement, and physical Dimensity 9400+ Perfetto/LiteRT profiler trace logs.',
      valueAr:
        'الشهران 1–2: أتمتة اختبارات حقن الضوضاء الاصطناعية والتحقق من محاذاة الذاكرة C++17 وصفحات 16KB. الشهران 3–4: تقييم استرجاعي مستقل على مستوى الأفراد على قاعدتي بيانات فيديو الوجه العامتين (PURE n=10 وUBFC-rPPG n=42) مع معايرة العتبات المرشحة (tau_SQI = 0.65 وtau_focus = 110.0) على قسم التحقق وتجميدها قبل الاختبار النهائي. الشهران 5–6: نشر منحنيات المخاطرة مقابل التغطية الكاملة، وحدود توافق Bland–Altman، وسجلات القياس الفعلي على المعالج.',
    },
  ];

  return (
    <section id="grant-package" className="py-12 border-b border-slate-200 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-900 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <FileText className="w-4 h-4 text-blue-800" />
            {isAr
              ? 'حزمة مسوغات التقديم للمنحة والمراجع العلمية الـ 12 + الـ 20 رابطاً رسمياً'
              : 'AUDITED GRANT SUBMISSION DOSSIER & VERIFIED SCIENTIFIC REFERENCES (SECTIONS 3.13 & 12)'}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-serif">
            {isAr
              ? 'نموذج التقديم الجاهز للنسخ (متوافق مع التدقيق العلمي) وقائمة المراجع المحكمة (DOIs)'
              : 'Copy-Ready Audited Grant Dossier & Peer-Reviewed Bibliography (Verified DOIs & Official Links)'}
          </h2>
        </div>

        {/* Copyable Audited Grant Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {auditedGrantFields.map((field) => {
            const textToCopy = isAr ? field.valueAr : field.valueEn;
            const isCopied = copiedKey === field.key;
            return (
              <div
                key={field.key}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-xs font-mono font-bold text-slate-900 uppercase">
                      {isAr ? field.labelAr : field.labelEn}
                    </h3>
                    <button
                      onClick={() => handleCopy(field.key, textToCopy)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 text-[11px] font-mono font-semibold transition cursor-pointer"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-700" />
                          <span>{isAr ? 'تم النسخ' : 'Copied'}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>{isAr ? 'نسخ النص' : 'Copy'}</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">{textToCopy}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 12 Audited Scientific DOI References */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-800" />
              {isAr
                ? 'المراجع العلمية المحكمة الـ 12 (تم تدقيق العناوين والمؤلفين وروابط DOI — القسم 3.13)'
                : '12 Audited Peer-Reviewed Scientific References (Verified Authors, Years & DOIs — Section 3.13)'}
            </h3>
            <span className="text-xs font-mono text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
              VERIFIED DOIs (2026-11-14)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            {PEER_REVIEWED_REFERENCES_12.map((ref) => (
              <div
                key={ref.num}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-mono font-bold text-blue-900">
                      [{ref.num}] {ref.authors} ({ref.year})
                    </span>
                    <span className="font-mono text-[10.5px] text-slate-500">{ref.journal}</span>
                  </div>
                  <div className="font-semibold text-slate-900 mb-2">{ref.title}</div>
                </div>
                <a
                  href={`https://doi.org/${ref.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-[11px] text-blue-700 hover:underline"
                >
                  DOI: {ref.doi}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Summary of the 20 Official Verification Links (Section 12) */}
        <div className="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              {isAr
                ? 'فهرس الروابط الرسمية الـ 20 للتحقق المستقل (القسم 12 من وثيقة التدقيق)'
                : 'Complete Index of 20 Official Verification URLs (Audit Section 12 — Last Verified 14 Nov 2026)'}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px] font-mono">
            {OFFICIAL_20_VERIFICATION_LINKS.map((item) => (
              <a
                key={item.num}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-slate-800/90 hover:bg-slate-800 border border-slate-700 text-slate-200 flex items-center justify-between gap-2 transition"
              >
                <span className="truncate">
                  [{item.num}] {isAr ? item.titleAr : item.titleEn}
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
