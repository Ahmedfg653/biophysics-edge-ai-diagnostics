import React, { useState } from 'react';
import {
  ShieldAlert,
  CheckCircle2,
  FlaskConical,
  FileCode2,
  Scale,
  Database,
  FileSpreadsheet,
  ExternalLink,
  Download,
  Filter,
  AlertTriangle,
} from 'lucide-react';
import { Language } from '../utils/biophysicsMath';
import {
  EvidenceStatusBadge,
  SOURCE_AUDIT_MATRIX,
  CORRECTED_STANDARDS_TABLE,
  DATASET_PROVENANCE_TABLE,
  TRIPOD_AI_PROTOCOL_ITEMS,
  OFFICIAL_20_VERIFICATION_LINKS,
} from '../data/scientificAuditData';

interface Props {
  lang: Language;
}

export const EvidenceAuditSection: React.FC<Props> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [selectedBadgeFilter, setSelectedBadgeFilter] = useState<EvidenceStatusBadge | 'ALL'>('ALL');
  const [activeTab, setActiveTab] = useState<'matrix' | 'standards' | 'datasets' | 'tripod' | 'links'>('matrix');

  const filteredMatrix =
    selectedBadgeFilter === 'ALL'
      ? SOURCE_AUDIT_MATRIX
      : SOURCE_AUDIT_MATRIX.filter((row) => row.statusBadge === selectedBadgeFilter);

  const badgeStyle = (badge: EvidenceStatusBadge) => {
    switch (badge) {
      case 'IMPLEMENTED':
        return 'bg-emerald-50 text-emerald-800 border-emerald-300';
      case 'SIMULATED':
        return 'bg-amber-50 text-amber-800 border-amber-300';
      case 'PROPOSED':
        return 'bg-sky-50 text-sky-800 border-sky-300';
      case 'BENCHMARKED':
        return 'bg-purple-50 text-purple-800 border-purple-300';
      case 'CLINICALLY VALIDATED':
        return 'bg-slate-100 text-slate-600 border-slate-300';
    }
  };

  return (
    <section id="evidence-audit" className="py-12 border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 border border-amber-300 text-amber-900 text-xs font-mono uppercase tracking-wider mb-3">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-700" />
              {isAr
                ? 'مصفوفة التدقيق العلمي والمنهجي الشامل (مراجعة 14 نوفمبر 2026)'
                : 'COMPREHENSIVE SCIENTIFIC & TECHNICAL AUDIT MATRIX (14 NOV 2026 REVISION)'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-serif">
              {isAr
                ? 'فصل الأدلة: المنفذ برمجياً مقابل المحاكاة الاصطناعية والمقترح البحثي'
                : 'Evidence Classification: Implemented Code vs. Synthetic Simulation vs. Proposed Protocol'}
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-4xl leading-relaxed">
              {isAr
                ? 'عملاً بقواعد النزاهة العلمية الموجهة لمراجعي المنح والأقران، يوثق هذا القسم كل ملف برمجي وكل ادعاء في المشروع ويصنفه بدقة إلى: منفذ برمجياً (IMPLEMENTED)، محاكاة اصطناعية (SIMULATED)، مقترح معماري/بروتوكولي (PROPOSED)، مع التصريح الواضح بأن عدد الادعاءات المصادق عليها سريرياً حالياً هو صفر (0 CLINICALLY VALIDATED).'
                : 'To ensure full transparency for peer reviewers and grant evaluators, this section maps every source file and scientific claim in the repository into strict evidence tiers: IMPLEMENTED, SIMULATED, PROPOSED, BENCHMARKED (0 physical logs to date), and CLINICALLY VALIDATED (0 — Clinical validation has not yet been conducted).'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <a
              href="/research-brief-2026-11-14.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              {isAr ? 'موجز البحث القابل للطباعة (HTML/PDF)' : 'Printable Research Brief (HTML/PDF)'}
            </a>
            <a
              href="/source-audit-matrix-2026-11-14.json"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 text-xs font-mono font-semibold transition"
            >
              <FileCode2 className="w-3.5 h-3.5 text-blue-700" />
              {isAr ? 'تقرير التدقيق (JSON)' : 'Audit Matrix (JSON)'}
            </a>
          </div>
        </div>

        {/* 5 Evidence Status Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 my-6">
          <div className="p-3.5 rounded-xl border border-emerald-300 bg-emerald-50/60">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 border border-emerald-300">
                IMPLEMENTED
              </span>
              <span className="text-xl font-bold font-mono text-emerald-900">4</span>
            </div>
            <p className="mt-2 text-xs text-emerald-950 leading-snug">
              {isAr
                ? 'كود حقيقي منفذ ومختبر برمجياً في المستودع (حسابات الرياضيات، هياكل C++17 المحاذية لـ 64 بايت، ومقدر إزاحة الساعة المحلي بـ 4 طوابع).'
                : 'Working code & reference structures verifiable in repository (unit-tested math, 64B-aligned C++17 struct, local 4-timestamp clock offset estimator).'}
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-amber-300 bg-amber-50/60">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">
                SIMULATED
              </span>
              <span className="text-xl font-bold font-mono text-amber-900">4</span>
            </div>
            <p className="mt-2 text-xs text-amber-950 leading-snug">
              {isAr
                ? 'مولدات إشارات رياضية اصطناعية حتمية داخل المتصفح (POS rPPG، الطور الصوتي 20kHz، معادلات Bramwell-Hill، والتكيف اللوني Bradford).'
                : 'Deterministic synthetic signal generators in browser (POS rPPG wave, 20kHz phase model, Bramwell-Hill explorer, Bradford L*a*b* model).'}
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-sky-300 bg-sky-50/60">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-sky-100 text-sky-900 border border-sky-300">
                PROPOSED
              </span>
              <span className="text-xl font-bold font-mono text-sky-900">4</span>
            </div>
            <p className="mt-2 text-xs text-sky-950 leading-snug">
              {isAr
                ? 'بروتوكولات ومعماريات مقترحة قيد التحقق المستقبلي (معايرة عتبات SQI=0.65 وFocus=110.0، والتقييم على PURE وUBFC-rPPG).'
                : 'Architectural designs & planned protocols (validation-split tuning of SQI=0.65 & Focus=110.0, retrospective PURE/UBFC-rPPG runs).'}
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-purple-300 bg-purple-50/50">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-purple-100 text-purple-900 border border-purple-300">
                BENCHMARKED
              </span>
              <span className="text-sm font-bold font-mono text-purple-900">
                {isAr ? '7 اختبارات وحدة' : '7 Unit Tests'}
              </span>
            </div>
            <p className="mt-2 text-xs text-purple-950 leading-snug">
              {isAr
                ? 'تم التحقق من الدوال الرياضية بـ 7 اختبارات آلية (node:test)؛ بينما أرقام الكمون العتادي على Dimensity 9400+ هي أهداف تصميمية مقدرة (0 سجلات جهاز فعلي حتى الآن).'
                : 'Pure math verified via 7 node:test assertions; silicon latency figures on Dimensity 9400+ are Estimated Design Targets (0 physical profiler trace logs to date).'}
            </p>
          </div>

          <div className="p-3.5 rounded-xl border-2 border-rose-300 bg-rose-50/70">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-rose-100 text-rose-900 border border-rose-300">
                CLINICALLY VALIDATED
              </span>
              <span className="text-xl font-bold font-mono text-rose-900">0</span>
            </div>
            <p className="mt-2 text-xs font-semibold text-rose-950 leading-snug">
              {isAr
                ? 'لم يُجرَ أي تحقق سريري على البشر حتى الآن (Clinical validation has not yet been conducted). هذا المشروع نموذج بحثي أولي فقط.'
                : 'Clinical validation has not yet been conducted (0 clinically validated claims). Research prototype only — not for medical diagnosis.'}
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3 mb-6">
          <button
            onClick={() => setActiveTab('matrix')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition ${
              activeTab === 'matrix'
                ? 'bg-blue-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            {isAr ? '1. مصفوفة تدقيق الادعاءات والملفات (12 بنداً)' : '1. Claim & Source File Audit Matrix (12 Items)'}
          </button>

          <button
            onClick={() => setActiveTab('standards')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition ${
              activeTab === 'standards'
                ? 'bg-blue-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Scale className="w-3.5 h-3.5" />
            {isAr
              ? '2. جدول تصحيح المعايير الطبية والقياسية (IEEE / ISO / CLSI / AASM)'
              : '2. Corrected Medical & Technical Standards Table'}
          </button>

          <button
            onClick={() => setActiveTab('datasets')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition ${
              activeTab === 'datasets'
                ? 'bg-blue-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            {isAr
              ? '3. تدقيق قواعد البيانات والخصوصية (PURE / UBFC / MIMIC-IV)'
              : '3. Datasets Provenance, Licensing & Privacy Audit'}
          </button>

          <button
            onClick={() => setActiveTab('tripod')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition ${
              activeTab === 'tripod'
                ? 'bg-blue-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <FlaskConical className="w-3.5 h-3.5" />
            {isAr
              ? '4. ملحق البروتوكول الإحصائي (TRIPOD+AI 2024)'
              : '4. TRIPOD+AI Statistical & Validation Protocol Appendix'}
          </button>

          <button
            onClick={() => setActiveTab('links')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition ${
              activeTab === 'links'
                ? 'bg-blue-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            {isAr ? '5. الروابط الرسمية الـ 20 الموثقة' : '5. All 20 Official Verification References'}
          </button>
        </div>

        {/* TAB 1: SOURCE AUDIT MATRIX */}
        {activeTab === 'matrix' && (
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <Filter className="w-3.5 h-3.5 text-slate-500" />
                <span>{isAr ? 'تصفية حسب حالة الدليل:' : 'Filter by Evidence Status:'}</span>
                {(['ALL', 'IMPLEMENTED', 'SIMULATED', 'PROPOSED'] as const).map((status) => (
                  <button
                    key={status}
                    onClick={() => setSelectedBadgeFilter(status)}
                    className={`px-2.5 py-1 rounded font-mono text-[11px] font-semibold border transition ${
                      selectedBadgeFilter === status
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
              <span className="text-xs font-mono text-slate-500">
                {isAr
                  ? `عرض ${filteredMatrix.length} من ${SOURCE_AUDIT_MATRIX.length} بند تدقيق`
                  : `Showing ${filteredMatrix.length} of ${SOURCE_AUDIT_MATRIX.length} audited repository items`}
              </span>
            </div>

            <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-2xs">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-semibold">
                    <th className="p-3 w-24">{isAr ? 'الرمز / الحالة' : 'ID & Status'}</th>
                    <th className="p-3 w-56">{isAr ? 'المكون / الادعاء وموقع الملف' : 'Module / Claim & Source File'}</th>
                    <th className="p-3">{isAr ? 'الواقع الفعلي في الكود' : 'Actual State in Code'}</th>
                    <th className="p-3">{isAr ? 'ملاحظة التدقيق العلمي' : 'Audit Problem Identified'}</th>
                    <th className="p-3">{isAr ? 'التصحيح المطبق في الموقع' : 'Revision Applied'}</th>
                    <th className="p-3">{isAr ? 'ما يلزم لإثباته مستقبلاً' : 'Required to Prove'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {filteredMatrix.map((row) => (
                    <tr key={row.id} className="hover:bg-slate-50/80 transition align-top">
                      <td className="p-3">
                        <div className="font-mono font-bold text-slate-900 mb-1">{row.id}</div>
                        <span
                          className={`inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${badgeStyle(
                            row.statusBadge,
                          )}`}
                        >
                          {row.statusBadge}
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="font-bold text-slate-900 mb-1">
                          {isAr ? row.claimOrModuleAr : row.claimOrModuleEn}
                        </div>
                        <div className="font-mono text-[11px] text-blue-800 bg-blue-50/70 px-2 py-1 rounded border border-blue-200 break-all">
                          {row.sourceFilePath}
                        </div>
                      </td>
                      <td className="p-3 text-slate-700 leading-relaxed">
                        {isAr ? row.currentImplementationAr : row.currentImplementationEn}
                      </td>
                      <td className="p-3 text-amber-900 bg-amber-50/30 leading-relaxed">
                        {isAr ? row.auditFindingAr : row.auditFindingEn}
                      </td>
                      <td className="p-3 text-emerald-950 bg-emerald-50/30 leading-relaxed font-medium">
                        {isAr ? row.appliedRevisionAr : row.appliedRevisionEn}
                      </td>
                      <td className="p-3 text-slate-700 leading-relaxed">
                        {isAr ? row.requiredToProveAr : row.requiredToProveEn}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: CORRECTED STANDARDS TABLE */}
        {activeTab === 'standards' && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-300 text-amber-950 text-xs leading-relaxed flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold mb-1">
                  {isAr
                    ? 'تصحيح جوهري لمعايير التقييم الطبي والسريري (القسم 3 من وثيقة التدقيق):'
                    : 'Critical Correction of Clinical & Metrological Standards Mapping (Audit Section 3):'}
                </strong>
                {isAr
                  ? 'تم فصل معيار الأجهزة القابلة للارتداء بدون كفة (IEEE Std 1708-2025) عن معيار أجهزة الكفة الهوائية المتقطعة (ISO 81060-2:2018)، وتصحيح نطاق معيار CLSI EP17-A2 (المختص بحدود الكشف الدنيا LoB/LoD/LoQ فقط وليس مقارنة الطرق الكمية CLSI EP09)، وحذف مخطط كلارك للخطأ (Clarke Error Grid) من تقييم صوت القلب PCG لأنه مخصص حصرياً لقياس سكر الدم.'
                  : 'We strictly separate wearable cuffless BP validation (IEEE Std 1708-2025) from intermittent automated cuff sphygmomanometers (ISO 81060-2:2018), correct the scope of CLSI EP17-A2 (which defines LoB/LoD/LoQ detection limits rather than quantitative method bias in CLSI EP09), and remove Clarke Error Grid from PCG/Wear OS evaluation (as Clarke Error Grid applies exclusively to blood glucose reference accuracy).'}
              </div>
            </div>

            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-semibold">
                    <th className="p-3 w-48">{isAr ? 'اسم المعيار والإصدار' : 'Standard & Active Version'}</th>
                    <th className="p-3 w-40">{isAr ? 'الجهة المصدرة' : 'Issuing Body'}</th>
                    <th className="p-3">{isAr ? 'النطاق العلمي الدقيق' : 'Exact Metrological Scope'}</th>
                    <th className="p-3">{isAr ? 'نوع الجهاز الذي ينطبق عليه' : 'Applicable Device Type'}</th>
                    <th className="p-3">{isAr ? 'التصحيح المطبق في مشروعنا' : 'Audit Correction Applied'}</th>
                    <th className="p-3 w-28">{isAr ? 'المرجع الرسمي' : 'Official Link'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {CORRECTED_STANDARDS_TABLE.map((std) => (
                    <tr key={std.standardName} className="hover:bg-slate-50 align-top">
                      <td className="p-3">
                        <div className="font-bold text-slate-900 font-mono">{std.standardName}</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">{std.activeVersion}</div>
                      </td>
                      <td className="p-3 font-medium text-slate-700">{std.issuingBody}</td>
                      <td className="p-3 text-slate-700 leading-relaxed">
                        {isAr ? std.scopeAr : std.scopeEn}
                      </td>
                      <td className="p-3 text-slate-700 leading-relaxed">
                        {isAr ? std.applicableDeviceTypeAr : std.applicableDeviceTypeEn}
                      </td>
                      <td className="p-3 text-emerald-950 bg-emerald-50/30 font-medium leading-relaxed">
                        {isAr ? std.auditCorrectionAr : std.auditCorrectionEn}
                      </td>
                      <td className="p-3">
                        <a
                          href={std.officialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-blue-700 hover:underline font-mono text-[11px]"
                        >
                          {isAr ? 'فتح المعيار' : 'Verify Standard'}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: DATASETS PROVENANCE & PRIVACY */}
        {activeTab === 'datasets' && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-sky-50 border border-sky-300 text-sky-950 text-xs leading-relaxed">
              <strong className="block font-bold mb-1">
                {isAr
                  ? 'تدقيق قواعد البيانات والخصوصية (القسم 4 من وثيقة التدقيق):'
                  : 'Datasets Provenance, Modality Separation & Facial Video Privacy Audit (Section 4):'}
              </strong>
              {isAr
                ? '1) قاعدتا MIMIC-IV v3.1 (السجلات السريرية الجدولية) وMIMIC-IV Waveform v0.1.0 (موجات ECG/PPG/ABP السريرية) منفصلتان تماماً ولا تحتوي أي منهما على فيديو للوجه. 2) قاعدتا PURE وUBFC-rPPG هما القاعدتان اللتان تحتويان على فيديو الوجه لـ rPPG مع قيود ديموغرافية موثقة في تمثيل البشرة الداكنة (Nature Digital Medicine 2025). 3) قاعدة بيانات FA-HISTS المقترحة هي بروتوكول مستقبلي مخطط (PROPOSED) لم يُجمع بعد، وفيديو الوجه الخام يُعد بيانات بيومترية مُعرّفة للهوية تتطلب موافقة لجنة الأخلاقيات (IRB) وموافقة مستنيرة مكتوبة.'
                : '1) MIMIC-IV v3.1 (tabular clinical EHR) and MIMIC-IV Waveform v0.1.0 (bedside ECG/PPG/ABP waveforms) are distinct databases, and NEITHER contains facial video. 2) PURE (n=10) and UBFC-rPPG (n=42) provide facial rPPG video but have documented skin-tone representation limitations (Nature Digital Medicine 2025 scoping review of 62 rPPG datasets). 3) The FA-HISTS dataset is a Planned Protocol (PROPOSED, 0 subjects collected to date), and raw facial video is biometric identifiable data requiring formal IRB approval and written informed consent.'}
            </div>

            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-semibold">
                    <th className="p-3 w-48">{isAr ? 'قاعدة البيانات والحالة' : 'Dataset & Project Status'}</th>
                    <th className="p-3">{isAr ? 'الإصدار ونوع الإشارات' : 'Version & Signal Modality'}</th>
                    <th className="p-3">{isAr ? 'حجم العينة ومواصفات الكاميرا' : 'Sample Size & Camera Specs'}</th>
                    <th className="p-3 w-28">{isAr ? 'فيديو وجه؟' : 'Facial Video?'}</th>
                    <th className="p-3">{isAr ? 'الترخيص ومتطلبات الخصوصية' : 'License & Privacy / IRB Rules'}</th>
                    <th className="p-3">{isAr ? 'القيود الديموغرافية والمنهجية' : 'Demographic & Technical Limitations'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {DATASET_PROVENANCE_TABLE.map((ds) => (
                    <tr key={ds.datasetName} className="hover:bg-slate-50 align-top">
                      <td className="p-3">
                        <div className="font-bold text-slate-900">{ds.datasetName}</div>
                        <div className="mt-1 flex items-center gap-2">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${badgeStyle(
                              ds.projectStatus,
                            )}`}
                          >
                            {ds.projectStatus}
                          </span>
                          <a
                            href={ds.officialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-blue-700 hover:underline font-mono text-[11px]"
                          >
                            URL <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </td>
                      <td className="p-3 text-slate-700 leading-relaxed">
                        {isAr ? ds.versionAndModalityAr : ds.versionAndModalityEn}
                      </td>
                      <td className="p-3 text-slate-700 leading-relaxed">
                        {isAr ? ds.subjectsAndCameraAr : ds.subjectsAndCameraEn}
                      </td>
                      <td className="p-3 font-mono font-bold">
                        {ds.containsFacialVideo ? (
                          <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            {isAr ? 'نعم (RGB Video)' : 'YES (RGB Video)'}
                          </span>
                        ) : (
                          <span className="text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                            {isAr ? 'لا يوجد فيديو' : 'NO VIDEO'}
                          </span>
                        )}
                      </td>
                      <td className="p-3 text-slate-700 leading-relaxed">
                        {isAr ? ds.accessAndLicenseAr : ds.accessAndLicenseEn}
                      </td>
                      <td className="p-3 text-amber-950 bg-amber-50/30 leading-relaxed">
                        {isAr ? ds.demographicLimitationsAr : ds.demographicLimitationsEn}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 4: TRIPOD+AI STATISTICAL APPENDIX */}
        {activeTab === 'tripod' && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-900 text-white text-xs leading-relaxed">
              <div className="font-mono text-blue-300 uppercase tracking-wider mb-1">
                {isAr
                  ? 'ملحق المنهجية الإحصائية المتوافق مع إرشادات TRIPOD+AI (BMJ 2024)'
                  : 'TRIPOD+AI (BMJ 2024) Statistical & Validation Protocol Appendix'}
              </div>
              <p className="text-slate-200">
                {isAr
                  ? 'يحدد هذا البروتوكول القواعد الصارمة لتقييم بوابة الامتناع الانتقائي (Selective Prediction Gate) على قواعد بيانات الفيديو العامة (PURE وUBFC-rPPG) لمنع تسرب بيانات الأفراد (Subject Data Leakage) وضمان تجميد العتبات قبل الاختبار.'
                  : 'This protocol defines the binding statistical rules for evaluating the Selective Prediction Abstention Gate on retrospective facial video datasets (PURE, UBFC-rPPG), enforcing zero subject-level data leakage and pre-test threshold freezing.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {TRIPOD_AI_PROTOCOL_ITEMS.map((item) => (
                <div
                  key={item.categoryEn}
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-2">
                      {isAr ? item.categoryAr : item.categoryEn}
                    </h3>
                    <p className="text-xs text-slate-700 leading-relaxed mb-3">
                      {isAr ? item.specificationAr : item.specificationEn}
                    </p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-slate-200 font-mono text-[11px] text-blue-900 overflow-x-auto">
                    {item.formulaOrRule}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: ALL 20 OFFICIAL VERIFICATION LINKS */}
        {activeTab === 'links' && (
          <div className="space-y-4">
            <p className="text-xs text-slate-600">
              {isAr
                ? 'جميع الروابط المرجعية الـ 20 الواردة في القسم 12 من وثيقة التدقيق العلمي (تم التحقق منها بتاريخ 14 نوفمبر 2026):'
                : 'All 20 primary verification references mandated in Section 12 of the Audit Instructions (Verified Date: 14 November 2026):'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {OFFICIAL_20_VERIFICATION_LINKS.map((link) => (
                <a
                  key={link.num}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/30 transition flex items-start justify-between gap-3 group"
                >
                  <div className="flex items-start gap-2.5">
                    <span className="w-6 h-6 rounded-md bg-slate-900 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {link.num}
                    </span>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-blue-900">
                        {isAr ? link.titleAr : link.titleEn}
                      </div>
                      <div className="text-[11px] font-mono text-slate-500 mt-1 break-all">{link.url}</div>
                      <div className="mt-1 inline-flex items-center gap-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                          {link.category}
                        </span>
                        <span className="text-[10px] font-mono text-emerald-700">
                          {isAr ? `تم التحقق: ${link.verifiedDate}` : `Verified: ${link.verifiedDate}`}
                        </span>
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-700 shrink-0 mt-1" />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
