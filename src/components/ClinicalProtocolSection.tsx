import React from 'react';
import {
  CLINICAL_PROTOCOL,
  REGULATORY_VALIDATION_METRICS,
} from '../data/bilingualContent';
import type { Language } from '../utils/biophysicsMath';

interface ClinicalProtocolSectionProps {
  lang: Language;
}

export const ClinicalProtocolSection: React.FC<ClinicalProtocolSectionProps> = ({ lang }) => {
  return (
    <section id="protocol" className="border-b border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Part 1: Standardized Examination Protocol */}
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-bold tracking-wider text-[#0284C7] uppercase">
            {lang === 'en'
              ? 'SECTION 09 · STANDARDIZED CLINICAL PROTOCOL & REGULATORY VALIDATION TARGETS'
              : 'القسم 09 · البروتوكول السريري الموحد وجدول معايير التحقق القياسية (IEEE / ISO / AASM)'}
          </p>
          <h2 className="mt-2 font-serif-editorial text-2xl font-bold text-[#0F172A] sm:text-3xl [text-wrap:balance]">
            {lang === 'en'
              ? 'Standardized Physical Posture, Pre-Neural Abstention Safeguards, and International Validation Benchmarks'
              : 'الوضعيات الفيزيائية القياسية، بوابات الامتناع الآمن، ومعايير المطابقة السريرية الدولية'}
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {CLINICAL_PROTOCOL.map((item) => (
            <article
              key={item.step}
              className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-5 flex flex-col justify-between shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs font-bold text-[#D97757]">
                    {item.step}
                  </span>
                  <span
                    dir="ltr"
                    className="font-mono text-xs text-[#0284C7] font-semibold tabular-nums"
                  >
                    {item.duration}
                  </span>
                </div>
                <h3 className="mt-2 text-sm font-bold text-[#0F172A]">{item.title[lang]}</h3>
                <p dir="ltr" className="mt-1 font-mono text-[11px] text-slate-500">
                  {item.sensorModal}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-[#1E293B]">
                  {item.instructions[lang]}
                </p>
              </div>
              <div className="mt-4 border-t border-slate-200 pt-3">
                <p dir="ltr" className="font-mono text-[11px] font-semibold text-[#059669]">
                  {item.validationMetric}
                </p>
                <p dir="ltr" className="mt-0.5 font-mono text-[10px] text-slate-500">
                  {item.datasetReference}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Part 2: Target Regulatory & Clinical Validation Metrics Table (IEEE 1708 / ISO 81060-2 / Clarke / AASM / CLSI) */}
        <div
          data-testid="regulatory-validation-table"
          className="mt-14 border-t border-slate-200 pt-12"
        >
          <div className="max-w-4xl">
            <p className="font-mono text-xs font-bold tracking-wider text-[#059669] uppercase">
              {lang === 'en'
                ? 'TARGET REGULATORY & CLINICAL VALIDATION METRICS (IRB COHORT & OPEN BENCHMARKS)'
                : 'جدول معايير التحقق السريري والتنظيمي المستهدفة (وفق بروتوكولات IEEE وISO وAASM وCLSI)'}
            </p>
            <h3 className="mt-2 font-serif-editorial text-xl font-bold text-[#0F172A] sm:text-2xl">
              {lang === 'en'
                ? 'Quantitative Acceptance Thresholds & Pre-Neural Abstention Safeguards Across All Four Modalities'
                : 'حدود القبول الإحصائية ومعايير الامتناع الآمن عبر مسارات الفحص الأربعة'}
            </h3>
          </div>

          <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-2xs">
            <table className="w-full border-collapse text-start text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-[#F8FAFC] text-[#0F172A]">
                  <th className="px-4 py-3.5 font-bold text-start">
                    {lang === 'en' ? 'Diagnostic Modality' : 'المسار التشخيصي'}
                  </th>
                  <th className="px-4 py-3.5 font-bold text-start">
                    {lang === 'en' ? 'International Standard' : 'المعيار الدولي المرجعي'}
                  </th>
                  <th className="px-4 py-3.5 font-bold text-start">
                    {lang === 'en' ? 'Target Clinical Accuracy' : 'الهدف الإحصائي للقبول'}
                  </th>
                  <th className="px-4 py-3.5 font-bold text-start">
                    {lang === 'en' ? 'Pre-Neural Abstention Gate' : 'بوابة الامتناع الفيزيائي الآمن'}
                  </th>
                  <th className="px-4 py-3.5 font-bold text-start">
                    {lang === 'en' ? 'Reference Benchmark Cohort' : 'قاعدة البيانات المرجعية'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {REGULATORY_VALIDATION_METRICS.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50/80">
                    <td className="px-4 py-4 font-bold text-[#0F172A] align-top">
                      {row.clinicalModality[lang]}
                    </td>
                    <td
                      dir="ltr"
                      className="px-4 py-4 font-mono text-xs font-bold text-[#0284C7] align-top"
                    >
                      {row.internationalStandard}
                    </td>
                    <td
                      dir="ltr"
                      className="px-4 py-4 font-mono text-xs font-semibold text-[#059669] align-top"
                    >
                      {row.targetThreshold}
                    </td>
                    <td
                      dir="ltr"
                      className="px-4 py-4 font-mono text-xs font-semibold text-[#DC2626] align-top"
                    >
                      {row.abstentionRule}
                    </td>
                    <td
                      dir="ltr"
                      className="px-4 py-4 font-mono text-xs text-slate-600 align-top"
                    >
                      {row.referenceCohort}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
