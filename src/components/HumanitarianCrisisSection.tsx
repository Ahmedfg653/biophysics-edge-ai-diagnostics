import React, { useEffect, useState } from 'react';
import {
  Activity,
  AlertTriangle,
  Clock,
  HeartPulse,
  ShieldAlert,
  Users,
} from 'lucide-react';
import { HUMANITARIAN_MACRO_STATS, SILENT_KILLERS_DATA } from '../data/bilingualContent';
import { RESCUE_QUANTIFICATION_ROWS } from '../data/monographAdditiveExpansion';
import {
  computeEarlyDetectionRescueImpact,
  type Language,
} from '../utils/biophysicsMath';

interface HumanitarianCrisisSectionProps {
  lang: Language;
}

const formatAsciiInt = (val: number): string =>
  Math.round(val).toLocaleString('en-US');

export const HumanitarianCrisisSection: React.FC<HumanitarianCrisisSectionProps> = ({ lang }) => {
  const [selectedId, setSelectedId] = useState<string>(SILENT_KILLERS_DATA[0].id);
  const [coveragePercent, setCoveragePercent] = useState<number>(80);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(16);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const activeProfile =
    SILENT_KILLERS_DATA.find((item) => item.id === selectedId) ?? SILENT_KILLERS_DATA[0];

  const rescueImpact = computeEarlyDetectionRescueImpact(coveragePercent);

  // Live mortality counters based on WHO & IDF annual rates:
  // CVD: 19.8M / yr => 1 death every 1.592 seconds (~1.6s) => 54,246 / day
  // Diabetes: 3.4M / yr => 1 death every 9.27 seconds
  // Delayed/Missed Diagnosis: 3.0M / yr => 1 death every 10.51 seconds
  const liveCvdDeaths = Math.floor(elapsedSeconds / 1.6);
  const liveLmicCvdDeaths = Math.floor(liveCvdDeaths * 0.75);
  const liveDiabetesDeaths = Math.floor(elapsedSeconds / 9.27);
  const liveDiagnosticDelayDeaths = Math.floor(elapsedSeconds / 10.51);

  const comparisonBars = [
    {
      id: 'cvd-hypertension',
      label: lang === 'en' ? 'Hypertension Unaware' : 'ضغط الدم غير المُكتشف',
      pct: 44,
      count: '600M / 1.4B',
      colorClass: 'bg-[#DC2626]',
    },
    {
      id: 'undiagnosed-diabetes',
      label: lang === 'en' ? 'Diabetes Undiagnosed' : 'السكري غير المشخص',
      pct: 43,
      count: '252M / 589M',
      colorClass: 'bg-[#D97757]',
    },
    {
      id: 'sleep-apnea',
      label: lang === 'en' ? 'Sleep Apnea Undiagnosed' : 'انقطاع التنفس غير المشخص',
      pct: 88,
      count: '>800M / 936M',
      colorClass: 'bg-amber-600',
    },
    {
      id: 'anemia-jaundice',
      label: lang === 'en' ? 'Under-5 Childhood Anemia' : 'فقر دم الأطفال (< 5 سنوات)',
      pct: 40,
      count: '269M / 1.92B Total',
      colorClass: 'bg-[#0284C7]',
    },
  ];

  return (
    <section
      id="humanitarian"
      data-testid="humanitarian-section"
      className="border-b border-slate-200 bg-[#F8FAFC] py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl">
          <p className="font-mono text-xs font-bold tracking-wider text-[#DC2626] uppercase">
            {lang === 'en'
              ? 'SECTION 01 · GLOBAL HUMANITARIAN CRISIS, LIVE MORTALITY TICKER & >80% RESCUE HORIZON (WHO & THE LANCET)'
              : 'القسم 01 · المأساة الإنسانية العالمية، عداد الوفيات الحي، وأثر الإنقاذ المبكر لأكثر من 1.56 مليار إنسان (WHO & The Lancet)'}
          </p>
          <h2 className="mt-2 font-serif-editorial text-2xl font-bold text-[#0F172A] sm:text-3xl [text-wrap:balance]">
            {lang === 'en'
              ? '47% of Humanity Lacks Basic Diagnostics—Turning Smartphones Into a Zero-Cost Early-Warning Shield'
              : '47% من سكان العالم بلا تشخيص أساسي: كيف ينقذ الهاتف الذكي ملايين الأرواح مجاناً وبدون إنترنت؟'}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#1E293B] sm:text-base">
            {lang === 'en'
              ? 'Peer-reviewed epidemiology from The Lancet Commission, World Health Organization (WHO), IDF Diabetes Atlas, and Johns Hopkins demonstrates that delayed or absent primary screening—not lack of therapy alone—drives millions of preventable deaths every year.'
              : 'تؤكد الإحصائيات المرجعية لمنظمة الصحة العالمية (WHO) ومجلة The Lancet والاتحاد الدولي للسكري (IDF) وجامعة Johns Hopkins أن تأخر التشخيص أو غيابه في الرعاية الأولية يحصد أرواح الملايين سنوياً قبل وصولهم للمستشفيات.'}
          </p>
        </div>

        {/* MODULE 1A: Live Global Mortality Ticker (1 Death Every 1.6 Seconds) */}
        <div
          data-testid="live-mortality-ticker"
          className="mt-8 rounded-xl border border-red-200 bg-white p-5 sm:p-6 shadow-2xs"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3.5">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#DC2626] shrink-0" aria-hidden="true" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                {lang === 'en'
                  ? 'LIVE GLOBAL MORTALITY TICKER · 1 HUMAN LIFE LOST EVERY 1.6 SECONDS TO CARDIOVASCULAR DISEASE (WHO)'
                  : 'عداد الوفيات الزمني الحي · وفاة إنسان كل 1.6 ثانية على كوكب الأرض بسبب أمراض القلب والأوعية الدموية (WHO)'}
              </span>
            </div>
            <span
              dir="ltr"
              className="rounded border border-slate-200 bg-[#F8FAFC] px-2.5 py-1 font-mono text-xs font-bold text-[#0F172A] tabular-nums"
            >
              Elapsed Observation: {elapsedSeconds}s · 54,246 CVD Deaths/Day
            </span>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-red-100 bg-red-50/50 p-4">
              <p className="font-mono text-[11px] font-bold text-[#DC2626]">
                {lang === 'en' ? '1 DEATH EVERY 1.6 SECONDS' : 'وفاة واحدة كل 1.6 ثانية'}
              </p>
              <p
                dir="ltr"
                className="calc-usd-figure mt-1 font-mono text-2xl font-bold text-[#0F172A] tabular-nums"
              >
                19,800,000 / yr
              </p>
              <p className="mt-1 text-xs font-semibold text-[#1E293B]">
                {lang === 'en'
                  ? 'Global CVD Mortality (54,246 / day)'
                  : 'وفيات أمراض القلب والأوعية سنوياً (54,246 يومياً)'}
              </p>
              <p dir="ltr" className="mt-2 font-mono text-[11px] font-bold text-[#DC2626] tabular-nums">
                +{liveCvdDeaths} lives lost during session
              </p>
            </div>

            <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-4">
              <p className="font-mono text-[11px] font-bold text-[#D97757]">
                {lang === 'en' ? '>75% IN LMICs WITHOUT DIAGNOSTICS' : '>75% في الدول المحرومة من التشخيص'}
              </p>
              <p
                dir="ltr"
                className="calc-usd-figure mt-1 font-mono text-2xl font-bold text-[#0F172A] tabular-nums"
              >
                14,850,000 / yr
              </p>
              <p className="mt-1 text-xs font-semibold text-[#1E293B]">
                {lang === 'en'
                  ? 'LMIC Deaths Where Early Screening Is Absent'
                  : 'وفيات في الدول النامية والمتوسطة لغياب الكشف المبكر'}
              </p>
              <p dir="ltr" className="mt-2 font-mono text-[11px] font-bold text-[#D97757] tabular-nums">
                +{liveLmicCvdDeaths} LMIC deaths during session
              </p>
            </div>

            <div className="rounded-lg border border-slate-200 bg-[#F8FAFC] p-4">
              <p className="font-mono text-[11px] font-bold text-[#0284C7]">
                {lang === 'en' ? 'IDF DIABETES ATLAS (11TH ED.)' : 'الاتحاد الدولي للسكري (IDF Atlas)'}
              </p>
              <p
                dir="ltr"
                className="calc-usd-figure mt-1 font-mono text-2xl font-bold text-[#0F172A] tabular-nums"
              >
                3,400,000 / yr
              </p>
              <p className="mt-1 text-xs font-semibold text-[#1E293B]">
                {lang === 'en'
                  ? 'Annual Deaths from Diabetes Complications'
                  : 'وفيات سنوياً بسبب مضاعفات السكري الصامت'}
              </p>
              <p dir="ltr" className="mt-2 font-mono text-[11px] font-bold text-[#0284C7] tabular-nums">
                +{liveDiabetesDeaths} diabetes deaths during session
              </p>
            </div>

            <div className="rounded-lg border border-slate-200 bg-[#F8FAFC] p-4">
              <p className="font-mono text-[11px] font-bold text-[#059669]">
                {lang === 'en' ? 'WHO PATIENT SAFETY FACT SHEET' : 'منظمة الصحة العالمية (سلامة المرضى)'}
              </p>
              <p
                dir="ltr"
                className="calc-usd-figure mt-1 font-mono text-2xl font-bold text-[#0F172A] tabular-nums"
              >
                &gt;3,000,000 / yr
              </p>
              <p className="mt-1 text-xs font-semibold text-[#1E293B]">
                {lang === 'en'
                  ? 'Deaths from Delayed or Missed Diagnosis'
                  : 'وفيات سنوياً بسبب تأخر أو خطأ التشخيص الطبي'}
              </p>
              <p dir="ltr" className="mt-2 font-mono text-[11px] font-bold text-[#059669] tabular-nums">
                +{liveDiagnosticDelayDeaths} delayed-care deaths
              </p>
            </div>
          </div>
        </div>

        {/* 4 Macro Mortality & Diagnostic Gap KPI Cards */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {HUMANITARIAN_MACRO_STATS.map((stat) => (
            <article
              key={stat.id}
              className="min-w-0 flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-2xs"
            >
              <div>
                <p className="font-mono text-[11px] font-bold text-[#D97757]">
                  {stat.source}
                </p>
                <p
                  dir="ltr"
                  className="mt-3 font-mono text-2xl font-bold text-[#0F172A] tabular-nums sm:text-3xl"
                >
                  {stat.headlineMetric}
                </p>
                <h3 className="mt-1.5 text-sm font-bold text-[#0284C7]">
                  {stat.subMetric[lang]}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-600">
                  {stat.description[lang]}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Interactive 5 Silent Killers Diagnostic Gap Explorer + Visual Chart */}
        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          {/* Left selector buttons + Global Undiagnosed Rate Visual Chart */}
          <div className="min-w-0 lg:col-span-5 flex flex-col gap-5">
            <div
              role="tablist"
              aria-label={
                lang === 'en'
                  ? 'Five silent killers addressed offline'
                  : 'الأمراض الصامتة الخمسة التي يكشفها النظام'
              }
              className="flex flex-col gap-2"
            >
              {SILENT_KILLERS_DATA.map((item) => {
                const active = item.id === activeProfile.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    data-testid={`killer-tab-${item.id}`}
                    aria-selected={active}
                    onClick={() => setSelectedId(item.id)}
                    className={`rounded-xl border p-4 text-start transition-colors ${
                      active
                        ? 'border-[#0284C7] bg-white text-[#0F172A] shadow-2xs'
                        : 'border-slate-200 bg-white/70 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm font-bold">{item.shortLabel[lang]}</span>
                      <span
                        dir="ltr"
                        className="font-mono text-xs font-bold text-[#DC2626] tabular-nums shrink-0"
                      >
                        {item.globalAffected}
                      </span>
                    </div>
                    <p className="mt-1 font-mono text-[11px] text-slate-500">
                      {item.sourceCitation}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Visual Comparative Bar Chart: Global Undiagnosed / Unscreened Burden */}
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#0F172A]">
                <Activity className="h-4 w-4 text-[#0284C7] shrink-0" aria-hidden="true" />
                <span>
                  {lang === 'en'
                    ? 'GLOBAL UNDIAGNOSED / UNSCREENED GAP (%)'
                    : 'نسبة المصابين غير المشخصين عالمياً (%)'}
                </span>
              </div>

              <div className="mt-4 space-y-3.5">
                {comparisonBars.map((bar) => (
                  <div key={bar.id}>
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <span className="font-medium text-slate-700">{bar.label}</span>
                      <span dir="ltr" className="font-mono font-semibold text-[#0F172A] tabular-nums shrink-0">
                        {bar.pct}% · {bar.count}
                      </span>
                    </div>
                    <div className="mt-1.5 h-2 w-full overflow-hidden rounded-sm bg-slate-200">
                      <div
                        className={`h-full ${bar.colorClass} transition-all duration-300`}
                        style={{ width: `${bar.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Deep-Dive Humanitarian Impact & Biophysical Solution Panel */}
          <article className="min-w-0 lg:col-span-7 flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xs">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="font-mono text-xs font-bold text-[#DC2626]">
                  {activeProfile.sourceCitation}
                </span>
                <span dir="ltr" className="font-mono text-xs font-semibold text-slate-600 tabular-nums">
                  {activeProfile.globalAffected}
                </span>
              </div>

              <h3 className="mt-2 font-serif-editorial text-xl font-bold text-[#0F172A] sm:text-2xl">
                {activeProfile.title[lang]}
              </h3>

              <p className="mt-2 text-sm font-semibold text-[#D97757]">
                {activeProfile.annualMortalityOrBurden[lang]}
              </p>

              {/* Stacked Gap Indicator Bar */}
              <div className="mt-6 rounded-lg border border-slate-200 bg-[#F8FAFC] p-4">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="inline-flex items-center gap-1.5 font-bold text-[#DC2626]">
                    <AlertTriangle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    {activeProfile.undiagnosedHeadline[lang]}
                  </span>
                  <span dir="ltr" className="font-mono font-bold text-[#0F172A] tabular-nums">
                    {activeProfile.undiagnosedPct}%
                  </span>
                </div>
                <div
                  role="img"
                  aria-label={`${activeProfile.undiagnosedPct}% undiagnosed or high-risk gap`}
                  className="mt-2.5 flex h-3 w-full overflow-hidden rounded-sm bg-slate-200"
                >
                  <div
                    className="bg-[#DC2626] transition-all duration-300"
                    style={{ width: `${activeProfile.undiagnosedPct}%` }}
                  />
                  <div
                    className="bg-[#0284C7] transition-all duration-300"
                    style={{ width: `${activeProfile.diagnosedOrControlledPct}%` }}
                  />
                </div>
                <p className="mt-2 text-xs text-slate-600">
                  {activeProfile.diagnosedLabel[lang]}
                </p>
              </div>

              {/* Clinical Reality vs Biophysical Edge Intervention */}
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div className="rounded-lg border border-red-200 bg-red-50/60 p-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#DC2626]">
                    <ShieldAlert className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>
                      {lang === 'en' ? 'CLINICAL & MORTALITY REALITY' : 'الواقع الإكلينيكي وحجم المأساة'}
                    </span>
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#1E293B]">
                    {activeProfile.crisisDetail[lang]}
                  </p>
                </div>

                <div className="rounded-lg border border-sky-200 bg-sky-50/60 p-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0284C7]">
                    <HeartPulse className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>
                      {lang === 'en'
                        ? 'HOW OUR OFFLINE SYSTEM INTERVENES'
                        : 'كيف يتدخل مشروعنا إنسانياً؟'}
                    </span>
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#1E293B]">
                    {activeProfile.biophysicalIntervention[lang]}
                  </p>
                </div>
              </div>
            </div>

            {/* Active Biophysical Pipeline Tags */}
            <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-slate-200 pt-4">
              <span className="text-xs font-semibold text-slate-600">
                {lang === 'en' ? 'On-Device Screening Stack:' : 'أدوات الكشف المبكر بالهاتف:'}
              </span>
              {activeProfile.keyPipelineTags.map((tag) => (
                <span
                  key={tag}
                  dir="ltr"
                  className="rounded border border-slate-300 bg-[#F8FAFC] px-2.5 py-1 font-mono text-[11px] font-medium text-[#0F172A]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        </div>

        {/* MODULE 1B: The >80% Early-Detection Rescue Quantification Matrix (1,562,400,000 People) */}
        <div
          data-testid="rescue-quantification-matrix"
          className="mt-12 rounded-xl border border-emerald-200 bg-white p-6 sm:p-8 shadow-2xs"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between border-b border-slate-200 pb-5">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#059669]">
                <Users className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>
                  {lang === 'en'
                    ? 'THE SHOCKING REALITY VS. THE >80% EARLY-DETECTION RESCUE HORIZON'
                    : 'الواقع الكارثي مقابل أفق الإنقاذ المبكر (تغطية >80% من الحالات الصامتة غير المشخصة)'}
                </span>
              </div>
              <h3 className="mt-1.5 font-serif-editorial text-xl font-bold text-[#0F172A] sm:text-2xl">
                {lang === 'en'
                  ? `At ${coveragePercent}% Smartphone Screening Reach: ${formatAsciiInt(rescueImpact.totalRescuedPopulation)} People Transition From Silent Pathology to Early Prevention`
                  : `عند تغطية ${coveragePercent}% من الفجوة الصامتة بالهاتف: إنقاذ وتنبيه ${formatAsciiInt(rescueImpact.totalRescuedPopulation)} إنسان مبكراً ومجاناً بدون إنترنت`}
              </h3>
            </div>

            {/* Interactive Coverage Slider + Presets */}
            <div className="flex flex-col gap-2 rounded-lg border border-slate-200 bg-[#F8FAFC] p-4 min-w-[270px]">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                <label htmlFor="rescue-coverage-slider">
                  {lang === 'en' ? 'Target Screening Coverage:' : 'نسبة تغطية الكشف المبكر:'}
                </label>
                <span
                  dir="ltr"
                  data-testid="rescue-coverage-pct"
                  className="font-mono text-sm font-bold text-[#059669] tabular-nums"
                >
                  {coveragePercent}%
                </span>
              </div>
              <input
                id="rescue-coverage-slider"
                type="range"
                min={50}
                max={95}
                step={5}
                value={coveragePercent}
                onChange={(e) => setCoveragePercent(Number(e.target.value))}
                className="w-full accent-[#059669]"
              />
              <div className="flex items-center justify-between gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setCoveragePercent(80)}
                  className={`rounded px-2.5 py-1 font-mono text-[11px] font-semibold transition-colors ${
                    coveragePercent === 80
                      ? 'bg-[#059669] text-white'
                      : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  80% Baseline (1.56B)
                </button>
                <button
                  type="button"
                  onClick={() => setCoveragePercent(85)}
                  className={`rounded px-2.5 py-1 font-mono text-[11px] font-semibold transition-colors ${
                    coveragePercent === 85
                      ? 'bg-[#0284C7] text-white'
                      : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  85% Target (1.66B)
                </button>
              </div>
            </div>
          </div>

          {/* 4 Condition Rescue Cards */}
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {RESCUE_QUANTIFICATION_ROWS.map((row) => {
              const dynamicRescued = Math.round(
                row.silentUndiagnosedPool * (coveragePercent / 100)
              );
              return (
                <article
                  key={row.id}
                  data-testid={`rescue-row-${row.id}`}
                  className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-sm font-bold text-[#0F172A]">
                        {row.conditionName[lang]}
                      </h4>
                      <span className="font-mono text-[11px] font-semibold text-slate-500">
                        {row.epidemiologicalSource}
                      </span>
                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-3 rounded-lg border border-slate-200 bg-white p-3.5">
                      <div>
                        <span className="block text-[11px] font-semibold text-[#DC2626]">
                          {lang === 'en'
                            ? 'Silent Undiagnosed Pool'
                            : 'الحالات الصامتة غير المشخصة'}
                        </span>
                        <span
                          dir="ltr"
                          className="calc-usd-figure mt-0.5 block font-mono text-base font-bold text-[#0F172A] tabular-nums"
                        >
                          {formatAsciiInt(row.silentUndiagnosedPool)}
                        </span>
                      </div>

                      <div className="border-s border-slate-200 ps-3">
                        <span className="block text-[11px] font-bold text-[#059669]">
                          {lang === 'en'
                            ? `Rescued / Alerted @ ${coveragePercent}%`
                            : `حجم الإنقاذ المبكر عند ${coveragePercent}%`}
                        </span>
                        <span
                          dir="ltr"
                          data-testid={`rescued-count-${row.id}`}
                          className="calc-usd-figure mt-0.5 block font-mono text-base font-bold text-[#059669] tabular-nums"
                        >
                          {formatAsciiInt(dynamicRescued)}
                        </span>
                      </div>
                    </div>

                    <p className="mt-3 text-xs leading-relaxed text-[#1E293B]">
                      <span className="font-bold text-[#0284C7]">
                        {lang === 'en' ? 'Offline Detection Mechanism: ' : 'آلية الكشف المبكر بالهاتف: '}
                      </span>
                      {row.biophysicalMechanism[lang]}
                    </p>
                  </div>

                  <p className="mt-2.5 border-t border-slate-200 pt-2.5 text-xs leading-relaxed text-slate-600">
                    <span className="font-bold text-[#059669]">
                      {lang === 'en' ? 'Humanitarian Impact: ' : 'الأثر الإنقاذي: '}
                    </span>
                    {row.clinicalOutcomePrevented[lang]}
                  </p>
                </article>
              );
            })}
          </div>

          {/* Cumulative Rescue Banner */}
          <div className="mt-6 flex flex-col gap-3 rounded-xl border border-emerald-300 bg-emerald-50/70 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#059669]">
                {lang === 'en'
                  ? `CUMULATIVE GLOBAL EARLY-DETECTION HORIZON (@ ${coveragePercent}% COVERAGE)`
                  : `المجموع الكلي للأرواح والبشر المستهدف إنقاذهم وتنبيههم مبكراً (عند تغطية ${coveragePercent}%)`}
              </p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-[#0F172A]">
                {lang === 'en'
                  ? 'Transitioning over 1.56 billion human beings from silent, undiagnosed fatal disease to free, 100% offline early warning.'
                  : 'أكثر من 1.56 مليار إنسان حول العالم ينتقلون من دائرة «الموت المفاجئ والمرض الصامت المجهول» إلى دائرة «الكشف المبكر والوقاية المجانية بدون إنترنت»!'}
              </p>
            </div>
            <div className="text-start sm:text-end shrink-0">
              <span
                dir="ltr"
                data-testid="total-rescued-population"
                className="calc-usd-figure font-mono text-2xl sm:text-3xl font-bold text-[#059669] tabular-nums"
              >
                {formatAsciiInt(rescueImpact.totalRescuedPopulation)}
              </span>
              <span className="block font-mono text-[11px] font-bold text-[#0F172A]">
                {lang === 'en' ? 'PEOPLE SCREENED & PROTECTED' : 'إنسان مستفيد ومحصّن بالكشف المبكر'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
