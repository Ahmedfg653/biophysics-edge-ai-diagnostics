import React from 'react';
import {
  ABSTENTION_GATES_DATA,
  FACULTY_SUPERVISORS_DATA,
  HERO_COPY,
  SUPERVISION_BANNER,
} from '../data/bilingualContent';
import type { Language } from '../utils/biophysicsMath';

interface HeroGrantPitchProps {
  lang: Language;
  onToggleLanguage: (next: Language) => void;
}

export const HeroGrantPitch: React.FC<HeroGrantPitchProps> = ({ lang, onToggleLanguage }) => {
  return (
    <section
      id="top"
      className="relative border-b border-slate-200 bg-white pt-8 pb-14 lg:pt-12 lg:pb-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Control Row: Journal Monograph Classification + Bilingual Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div className="space-y-1">
            <p className="font-mono text-xs font-bold tracking-wider text-[#0284C7] uppercase">
              {HERO_COPY.eyebrow[lang]}
            </p>
            <p className="text-xs font-medium text-slate-600">
              {SUPERVISION_BANNER.supervisionStatement[lang]}
            </p>
          </div>

          <div
            role="group"
            aria-label="Language Switcher"
            className="inline-flex rounded-md border border-slate-300 bg-[#F8FAFC] p-1"
          >
            <button
              type="button"
              onClick={() => onToggleLanguage('en')}
              aria-pressed={lang === 'en'}
              className={`rounded px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap ${
                lang === 'en'
                  ? 'bg-[#0F172A] text-white'
                  : 'text-slate-700 hover:text-[#0F172A]'
              }`}
            >
              English (Academic Default)
            </button>
            <button
              type="button"
              onClick={() => onToggleLanguage('ar')}
              aria-pressed={lang === 'ar'}
              className={`rounded px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap ${
                lang === 'ar'
                  ? 'bg-[#0F172A] text-white'
                  : 'text-slate-700 hover:text-[#0F172A]'
              }`}
            >
              العربية (النسخة الكاملة)
            </button>
          </div>
        </div>

        {/* Monograph Title & Executive Abstract */}
        <div className="mt-8">
          <h1 className="font-serif-editorial text-2xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-[2.5rem] lg:leading-[1.2] [text-wrap:balance]">
            {HERO_COPY.title[lang]}
          </h1>
          <p className="mt-4 max-w-5xl text-base leading-relaxed text-[#1E293B] sm:text-lg">
            {HERO_COPY.subtitle[lang]}
          </p>
        </div>

        {/* Official Authors & Faculty Supervision Masthead Block (Nature / IEEE Style) */}
        <div
          data-testid="masthead-authors-block"
          className="mt-7 rounded-xl border border-slate-200 bg-[#F8FAFC] p-5 sm:p-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0F172A]">
              {lang === 'en'
                ? 'OFFICIAL AUTHORS, PRINCIPAL INVESTIGATOR & FACULTY SUPERVISORS (CO-PIs)'
                : 'الباحث الرئيسي وهيئة الإشراف الأكاديمي والعلمي الرسمي (قسم علوم الحاسب - معهد المستقبل العالي FA-HISTS)'}
            </span>
            <span dir="ltr" className="font-mono text-xs font-semibold text-[#059669]">
              MOHE License No. 1471 (1993) · Supreme Council Decree No. 359
            </span>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {FACULTY_SUPERVISORS_DATA.map((member) => (
              <div
                key={member.id}
                className="rounded-lg border border-slate-200 bg-white p-4 shadow-2xs"
              >
                <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#0284C7]">
                  {member.roleBadge[lang]}
                </p>
                <h2 className="mt-1 text-base font-bold text-[#0F172A]">
                  {member.name[lang]}
                </h2>
                <p className="mt-0.5 text-xs font-semibold text-slate-700">
                  {member.academicTitle[lang]}
                </p>
                <p className="mt-1 text-[11px] text-slate-500">
                  {member.department[lang]}
                </p>
                <p className="mt-2.5 border-t border-slate-100 pt-2 text-xs leading-relaxed text-slate-600">
                  {member.supervisionScope[lang]}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-3 text-xs text-slate-600">
            <span>{SUPERVISION_BANNER.facultySupervisorsLine[lang]}</span>
            <a
              href="#supervision"
              className="font-semibold text-[#0284C7] hover:underline whitespace-nowrap"
            >
              {lang === 'en'
                ? 'View Verified Institutional Contact Directory →'
                : 'عرض دليل التواصل الرسمي والاعتماد المؤسسي للمعهد ←'}
            </a>
          </div>
        </div>

        {/* Main 12-Col Grid: Left 7 Cols (Dual Pre-Neural Abstention Gates + KPIs) | Right 5 Cols (Grant Request Ledger) */}
        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Left Column (7 cols): Dual Physical Abstention Gates + KPI Cards */}
          <div className="min-w-0 lg:col-span-7 flex flex-col justify-between">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-2xs">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-sm font-bold text-[#0F172A]">
                  {lang === 'en'
                    ? 'Dual Pre-Neural Physical Abstention Gates (Preventing Unsafe Hallucinated Triage)'
                    : 'بوابات الامتناع الفيزيائي المسبق قبل الشبكة العصبية (منع التنبؤات الطبية المضللة)'}
                </h3>
                <span
                  dir="ltr"
                  className="rounded border border-red-200 bg-red-50 px-2 py-0.5 font-mono text-[11px] font-bold text-[#DC2626]"
                >
                  SAFE ABSTENTION TRIGGERED
                </span>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {ABSTENTION_GATES_DATA.map((gate) => (
                  <div
                    key={gate.id}
                    data-testid={`abstention-${gate.id}`}
                    className="rounded-lg border border-slate-200 bg-[#F8FAFC] p-4"
                  >
                    <p
                      dir="ltr"
                      className="font-mono text-[11px] font-bold text-[#DC2626]"
                    >
                      {gate.thresholdRule}
                    </p>
                    <h4 className="mt-1.5 text-xs font-bold text-[#0F172A]">
                      {gate.title[lang]}
                    </h4>
                    <p
                      dir="ltr"
                      className="mt-1.5 rounded border border-slate-200 bg-white px-2 py-1 font-mono text-[11px] text-[#0284C7]"
                    >
                      {gate.mathematicalFormulation}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      {gate.clinicalRationale[lang]}
                    </p>
                    <p className="mt-2 border-t border-slate-200 pt-2 text-[11px] font-medium text-[#0F172A]">
                      {gate.patientActionTriggered[lang]}
                    </p>
                  </div>
                ))}
              </div>

              {/* 3 Monograph KPIs */}
              <div className="mt-5 grid gap-3 sm:grid-cols-3 border-t border-slate-200 pt-5">
                {HERO_COPY.kpis.map((kpi, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg border border-slate-200 bg-[#F8FAFC] p-3.5"
                  >
                    <p className="text-[11px] font-semibold text-slate-500">
                      {kpi.label[lang]}
                    </p>
                    <p className="mt-1 font-mono text-sm font-bold text-[#0284C7]">
                      {kpi.value[lang]}
                    </p>
                    <p className="mt-1 text-[11px] leading-snug text-slate-600">
                      {kpi.detail[lang]}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#simulators"
                className="inline-flex items-center justify-center rounded-md bg-[#0284C7] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0369A1] transition-colors"
              >
                {lang === 'en'
                  ? 'Launch Interactive Clinical Simulators'
                  : 'تشغيل المختبر الفيزيائي التفاعلي الحي'}
              </a>
              <a
                href="#public-goods"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-[#F8FAFC] px-5 py-2.5 text-sm font-semibold text-[#0F172A] hover:bg-slate-100 transition-colors"
              >
                {lang === 'en'
                  ? 'Inspect Open-Science Public Goods (Apache-2.0)'
                  : 'استعراض المنافع العلمية المفتوحة (Apache-2.0)'}
              </a>
              <a
                href="#codebase"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                {lang === 'en'
                  ? 'Inspect C++17 & Kotlin Source'
                  : 'فحص الأكواد التنفيذية الكاملة'}
              </a>
            </div>
          </div>

          {/* Right Column (5 cols): Executive Grant Request & Target Architecture Ledger */}
          <aside
            aria-label={
              lang === 'en'
                ? 'Executive Grant & Architecture Ledger'
                : 'ملخص طلب المنحة والمعمارية'
            }
            className="min-w-0 lg:col-span-5 rounded-xl border border-slate-200 bg-[#F8FAFC] p-6"
          >
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#D97757]">
                  {lang === 'en'
                    ? 'ANTHROPIC GRANT & COMPUTE LEDGER'
                    : 'بطاقة الاعتماد وطلب الحوسبة من Anthropic'}
                </p>
                <h2 className="mt-1 text-base font-bold text-[#0F172A]">
                  {lang === 'en'
                    ? 'AI for Science · External Researcher Access'
                    : 'برنامج AI for Science · إتاحة الباحثين الخارجيين'}
                </h2>
              </div>
              <span
                dir="ltr"
                className="calc-usd-figure font-mono text-xl font-bold text-[#059669] tabular-nums"
              >
                $6,340
              </span>
            </div>

            <dl className="mt-5 space-y-4 text-sm">
              <div className="border-b border-slate-200 pb-3.5">
                <dt className="text-xs font-semibold text-slate-500">
                  {lang === 'en'
                    ? 'Target Hardware Reference Testbed'
                    : 'منصة العتاد المرجعية المستهدفة'}
                </dt>
                <dd
                  dir="ltr"
                  className="mt-1 font-mono text-xs font-semibold text-[#0F172A]"
                >
                  Xiaomi 15T Pro · Dimensity 9400+ (3nm) · MediaTek NPU 890
                </dd>
              </div>

              <div className="border-b border-slate-200 pb-3.5">
                <dt className="text-xs font-semibold text-slate-500">
                  {lang === 'en'
                    ? 'Requested Anthropic Frontier Compute'
                    : 'نماذج Anthropic المطلوبة لتسريع البحث'}
                </dt>
                <dd
                  dir="ltr"
                  className="mt-1 font-mono text-xs font-semibold text-[#0284C7]"
                >
                  Claude Opus 5.5 · Sonnet 5.5 · Fable 5.2 · Claude Code
                </dd>
              </div>

              <div className="border-b border-slate-200 pb-3.5">
                <dt className="text-xs font-semibold text-slate-500">
                  {lang === 'en'
                    ? 'Zero-Phase Native C++17 & Safety Gates'
                    : 'نواة معالجة الإشارة وبوابات الامتناع الآمن'}
                </dt>
                <dd
                  dir="ltr"
                  className="mt-1 font-mono text-xs font-semibold text-[#0F172A]"
                >
                  filtfilt (0.0 rad) · SQI &lt; 0.65 &amp; Var(∇²I) &lt; 110.0 Gates
                </dd>
              </div>

              <div className="border-b border-slate-200 pb-3.5">
                <dt className="text-xs font-semibold text-slate-500">
                  {lang === 'en'
                    ? 'Open-Science Public Goods (4 Apache-2.0 Releases)'
                    : 'المنافع العلمية المفتوحة (4 حزم قياسية برخصة Apache-2.0)'}
                </dt>
                <dd
                  dir="ltr"
                  className="mt-1 font-mono text-xs font-semibold text-[#059669]"
                >
                  libbiophysics-neon-dsp · Camera2-ISP-Std · FA-HISTS-Bench · LiteRT-Pipeline
                </dd>
              </div>

              <div>
                <dt className="text-xs font-semibold text-slate-500">
                  {lang === 'en'
                    ? 'Biosecurity, Ethics & Data Sovereignty'
                    : 'الأخلاقيات الطبية وسيادة البيانات'}
                </dt>
                <dd className="mt-1 text-xs font-medium text-slate-700">
                  {lang === 'en'
                    ? '100% De-identified vital waveforms · Zero pathogen/wet-lab dual-use risk · Full Apache-2.0 release under FA-HISTS supervision.'
                    : 'بيانات فسيولوجية منزوعة الهوية 100% · خلو تام من أي مخاطر بيولوجية مزدوجة · نشر مفتوح المصدر بالكامل تحت إشراف معهد المستقبل العالي.'}
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
};
