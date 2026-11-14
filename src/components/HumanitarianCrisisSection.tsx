import React, { useState } from 'react';
import {
  Globe2,
  AlertTriangle,
  ExternalLink,
  BookOpen,
  Sliders,
  Info,
} from 'lucide-react';
import { Language, computeEarlyDetectionRescueImpact } from '../utils/biophysicsMath';
import { EPIDEMIOLOGY_PROVENANCE_TABLE } from '../data/scientificAuditData';

interface Props {
  lang: Language;
}

export const HumanitarianCrisisSection: React.FC<Props> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [reachPct, setReachPct] = useState<number>(80);
  const reachBreakdown = computeEarlyDetectionRescueImpact(reachPct);

  return (
    <section id="epidemiology-context" className="py-12 border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-300 text-slate-800 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Globe2 className="w-3.5 h-3.5 text-blue-800" />
            {isAr
              ? 'السياق الوبائي العالمي الموثق (تمت إزالة عداد الوفيات الحي وعبارة الأرواح المنقذة)'
              : 'DOCUMENTED GLOBAL EPIDEMIOLOGICAL CONTEXT (NON-ADDITIVE BURDEN & PROVENANCE TABLE)'}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-serif">
            {isAr
              ? 'العبء الوبائي العالمي للفجوة التشخيصية: توثيق المصادر الأصلية والفئات العمرية وعدم قابلية الجمع المباشر'
              : 'Global Undiagnosed Disease Burden: Primary Epidemiological Provenance, Age Cohorts & Non-Additive Overlap'}
          </h2>

          <p className="mt-2 text-sm text-slate-600 max-w-4xl leading-relaxed">
            {isAr
              ? 'يوثق هذا القسم الدافع العلمي والبحثي لتطوير أدوات فحص أولي منخفضة التكلفة ومعتمدة على جودة الإشارة في البيئات محدودة الموارد (LMICs). وعملاً بالقسم 3.12 من التدقيق العلمي، يُعرض كل رقم وبائي مع مصدره الأصلي وسنة البيانات والفئة العمرية الدقيقة، مع التنبيه الصريح إلى أن هذه الفئات المرضية تتداخل بشدة لدى نفس الأفراد (Comorbidity Overlap) ولا يجوز جمعها كأفراد مستقلين أو وصفها بأنها "أرواح منقذة".'
              : 'This section documents the epidemiological motivation for researching low-cost, quality-gated physiological screening methods. In accordance with Audit Section 3.12, every figure is presented alongside its primary source, data year, exact age cohort, and methodological definition—with the explicit epidemiological caveat that condition pools overlap substantially across comorbidities and cannot be summed as unique individuals or equated to "lives saved."'}
          </p>
        </div>

        {/* Critical Epidemiological Caveat Box (Section 3.12) */}
        <div className="mb-6 p-4 rounded-xl bg-amber-50 border border-amber-300 text-amber-950 text-xs leading-relaxed flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong className="block font-bold mb-1">
              {isAr
                ? 'قاعدة منهجية صارمة (القسم 3.12): الوصول النظري للفحص الأولي ≠ التشخيص السريري ≠ إنقاذ الأرواح، والفئات المرضية غير قابلة للجمع المباشر'
                : 'Methodological Rule (Audit Section 3.12): Theoretical Screening Reach ≠ Clinical Diagnosis ≠ Lives Saved (Non-Additive Comorbidity Pools)'}
            </strong>
            {isAr
              ? 'إن ارتفاع ضغط الدم (600 مليون غير مدركين)، وانقطاع التنفس الانسدادي أثناء النوم (نحو 800 مليون غير مشخصين من أصل 936 مليون بالغ بعمر 30–69 عاماً)، والسكري غير المشخص (252 مليون)، وفقر الدم لدى الأطفال والحوامل (301 مليون) تترافق بكثافة لدى نفس المرضى (على سبيل المثال: يتواجد ارتفاع الضغط وانقطاع التنفس والسكري معاً لدى نسبة كبيرة من نفس الأشخاص). لذلك فإن مجموع الحالات (1.953 مليار حالة مرضية؛ أو 1.562 مليار عند تغطية افتراضية 80%) يمثل "إجمالي حالات الأمراض المستهدفة نظرياً (Condition-Instances)" وليس عدد أشخاص فريدين ولا عدد أرواح تم إنقاذها.'
              : 'Hypertension (~600M unaware), Obstructive Sleep Apnea (~800M undiagnosed out of 936M adults aged 30–69), Undiagnosed Diabetes (252M), and Maternal/Pediatric Anemia (301M) co-occur extensively within the same individuals (metabolic-cardiorespiratory comorbidity overlap). Summing these condition pools (1.953B condition-instances; or 1.562B at a hypothetical 80% screening reach) represents non-unique condition-instances, NOT unique individuals and NOT lives saved.'}
          </div>
        </div>

        {/* Complete Epidemiological Provenance Table (Section 3.12) */}
        <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-2xs mb-8">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-semibold">
                <th className="p-3 w-48">{isAr ? 'الحالة المرضية والفئة العمرية' : 'Condition & Exact Age Cohort'}</th>
                <th className="p-3 w-44">{isAr ? 'الانتشار العالمي الكلي' : 'Headline Global Prevalence'}</th>
                <th className="p-3 w-44">{isAr ? 'الفئة غير المشخصة / الفرعية' : 'Undiagnosed / Target Subgroup'}</th>
                <th className="p-3">{isAr ? 'المصدر الأصلي وسنة البيانات وتاريخ النشر' : 'Primary Source, Data Year & Publication Date'}</th>
                <th className="p-3">{isAr ? 'التعريف المنهجي والقيود السريرية' : 'Methodological Definition & Clinical Caveat'}</th>
                <th className="p-3 w-24">{isAr ? 'الرابط الرسمي' : 'Direct URL'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {EPIDEMIOLOGY_PROVENANCE_TABLE.map((row) => (
                <tr key={row.conditionEn} className="hover:bg-slate-50 align-top">
                  <td className="p-3">
                    <div className="font-bold text-slate-900">
                      {isAr ? row.conditionAr : row.conditionEn}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">
                      {isAr ? row.ageGroupAndPopulationAr : row.ageGroupAndPopulationEn}
                    </div>
                  </td>
                  <td className="p-3 font-mono font-semibold text-slate-900">{row.headlineFigure}</td>
                  <td className="p-3 font-mono font-semibold text-blue-900 bg-blue-50/40">
                    {row.undiagnosedOrSubgroupFigure}
                  </td>
                  <td className="p-3 text-slate-700 leading-relaxed">
                    <div className="font-semibold text-slate-900">{row.originalSource}</div>
                    <div className="font-mono text-[11px] text-slate-500 mt-1">
                      Data Year: {row.dataYear} | Published: {row.publicationDate}
                    </div>
                  </td>
                  <td className="p-3 text-slate-700 leading-relaxed">
                    <div>{isAr ? row.methodologicalDefinitionAr : row.methodologicalDefinitionEn}</div>
                    <div className="mt-1.5 p-2 rounded bg-amber-50/70 border border-amber-200 text-[11px] text-amber-950 font-medium">
                      {isAr ? row.caveatAr : row.caveatEn}
                    </div>
                  </td>
                  <td className="p-3">
                    <a
                      href={row.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-700 hover:underline font-mono text-[11px]"
                    >
                      <BookOpen className="w-3 h-3" />
                      {isAr ? 'المصدر' : 'Source'}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Non-Additive Theoretical Target Screening Reach Sensitivity Explorer */}
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-700 uppercase">
                <Sliders className="w-3.5 h-3.5 text-blue-800" />
                {isAr
                  ? 'نموذج حساسية الوصول النظري للفحص الأولي (حالات مرضية غير قابلة للجمع كأفراد فريدين)'
                  : 'Theoretical Target Screening Population Reach Explorer (Non-Additive Condition-Instances)'}
              </div>
              <p className="text-xs text-slate-600 mt-1">
                {isAr
                  ? 'يوضح هذا المؤشر الحجم النظري لكل فئة مرضية غير مشخصة بشكل منفصل عند افتراض نسبة وصول جغرافي معينة للهواتف الذكية (دون ادعاء أن الفحص الأولي يعادل تشخيصاً سريرياً أو إنقاذاً مباشراً للأرواح).'
                  : 'Illustrates the theoretical scale of each individual undiagnosed condition pool at a hypothetical smartphone outreach percentage (explicitly noting comorbidity overlap and that screening reach != clinical diagnosis).'}
              </p>
            </div>

            <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-200 shrink-0">
              <span className="text-xs font-semibold text-slate-700">
                {isAr ? 'نسبة الوصول الافتراضية:' : 'Hypothetical Outreach %:'}
              </span>
              <input
                type="range"
                min={10}
                max={100}
                step={5}
                value={reachPct}
                onChange={(e) => setReachPct(Number(e.target.value))}
                aria-label="Hypothetical Screening Outreach Percentage"
                className="w-32 accent-blue-900 cursor-pointer"
              />
              <span className="font-mono text-sm font-bold text-blue-900 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                {reachBreakdown.coveragePercent}%
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-white border border-slate-200">
              <div className="text-[11px] font-mono text-slate-500">
                {isAr ? 'ارتفاع ضغط الدم غير المدرك (30–79 سنة)' : 'Unaware Hypertension Pool (30–79y)'}
              </div>
              <div className="text-lg font-bold font-mono text-slate-900 mt-1">
                {(reachBreakdown.hypertensionRescued / 1_000_000).toFixed(1)}M{' '}
                <span className="text-xs font-normal text-slate-500">/ 600M</span>
              </div>
              <div className="text-[10.5px] text-slate-500 mt-1">
                {isAr ? 'المصدر: منظمة الصحة العالمية (WHO 2025)' : 'Source: WHO Fact Sheet (Sep 2025)'}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200">
              <div className="text-[11px] font-mono text-slate-500">
                {isAr ? 'انقطاع التنفس غير المشخص (30–69 سنة)' : 'Undiagnosed OSA Pool (30–69y)'}
              </div>
              <div className="text-lg font-bold font-mono text-slate-900 mt-1">
                {(reachBreakdown.sleepApneaRescued / 1_000_000).toFixed(1)}M{' '}
                <span className="text-xs font-normal text-slate-500">/ 800M</span>
              </div>
              <div className="text-[10.5px] text-slate-500 mt-1">
                {isAr ? 'المصدر: Benjafield et al. (Lancet Respir Med 2019)' : 'Source: Benjafield et al. (Lancet 2019)'}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200">
              <div className="text-[11px] font-mono text-slate-500">
                {isAr ? 'السكري غير المشخص (20–79 سنة)' : 'Undiagnosed Diabetes Pool (20–79y)'}
              </div>
              <div className="text-lg font-bold font-mono text-slate-900 mt-1">
                {(reachBreakdown.diabetesRescued / 1_000_000).toFixed(1)}M{' '}
                <span className="text-xs font-normal text-slate-500">/ 252M</span>
              </div>
              <div className="text-[10.5px] text-slate-500 mt-1">
                {isAr ? 'المصدر: أطلس السكري IDF الإصدار 11 (2025)' : 'Source: IDF Diabetes Atlas 11th Ed (2025)'}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200">
              <div className="text-[11px] font-mono text-slate-500">
                {isAr ? 'فقر الدم (أطفال 6–59ش وحوامل)' : 'Anemia Pool (Children 6–59m & Pregnant)'}
              </div>
              <div className="text-lg font-bold font-mono text-slate-900 mt-1">
                {(reachBreakdown.maternalPediatricRescued / 1_000_000).toFixed(1)}M{' '}
                <span className="text-xs font-normal text-slate-500">/ 301M</span>
              </div>
              <div className="text-[10.5px] text-slate-500 mt-1">
                {isAr ? 'المصدر: تقديرات منظمة الصحة العالمية (WHO)' : 'Source: WHO Global Anaemia Estimates'}
              </div>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-600 font-mono">
            <Info className="w-4 h-4 text-blue-800 shrink-0" />
            <span>
              {isAr
                ? `إجمالي الحالات المرضية المنفصلة عند تغطية ${reachBreakdown.coveragePercent}% = ${(reachBreakdown.totalRescuedPopulation / 1_000_000_000).toFixed(3)} مليار حالة مرضية (Non-Unique Condition-Instances — لا تمثل أشخاصاً مستقلين بسبب التداخل المرضي).`
                : `Sum of separate condition-instances at ${reachBreakdown.coveragePercent}% outreach = ${(reachBreakdown.totalRescuedPopulation / 1_000_000_000).toFixed(3)} Billion condition-instances (Non-Unique due to comorbidity overlap; NOT unique individuals or lives saved).`}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
