import React, { useState } from 'react';
import { CLAUDE_AXES } from '../data/bilingualContent';
import { computeAnthropicGrantBudget, type Language } from '../utils/biophysicsMath';

interface AnthropicJustificationProps {
  lang: Language;
}

const formatUsdAscii = (val: number): string =>
  '$' + Math.round(val).toLocaleString('en-US');

export const AnthropicJustification: React.FC<AnthropicJustificationProps> = ({ lang }) => {
  const [selectedAxisId, setSelectedAxisId] = useState<string>(CLAUDE_AXES[0].id);
  const [durationMonths, setDurationMonths] = useState<number>(6);
  const [opusMillionsTokens, setOpusMillionsTokens] = useState<number>(120);
  const [sonnetMillionsTokens, setSonnetMillionsTokens] = useState<number>(350);
  const [fableMillionsTokens, setFableMillionsTokens] = useState<number>(100);

  const activeAxis = CLAUDE_AXES.find((a) => a.id === selectedAxisId) ?? CLAUDE_AXES[0];

  // Deterministic compute breakdown: default 120M Opus ($2,640), 350M Sonnet ($2,100), 100M Fable ($400), 6mo Claude Code ($1,200) => $6,340
  const budget = computeAnthropicGrantBudget({
    durationMonths,
    opusMillionsTokens,
    sonnetMillionsTokens,
    fableMillionsTokens,
  });

  const resetOfficialBaseline = () => {
    setDurationMonths(6);
    setOpusMillionsTokens(120);
    setSonnetMillionsTokens(350);
    setFableMillionsTokens(100);
  };

  return (
    <section
      id="anthropic"
      className="border-b border-slate-200 bg-white py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-4xl">
          <p className="font-mono text-xs font-bold tracking-wider text-[#D97757] uppercase">
            {lang === 'en'
              ? 'SECTION 02 · COMPUTATIONAL ACCELERATION METHODOLOGY VIA ANTHROPIC CLAUDE FRONTIER MODELS (OPUS 5.5, SONNET 5.5 & CLAUDE CODE)'
              : 'القسم 02 · منهجية التسريع الحاسوبي للبحث عبر نماذج Anthropic Claude الرائدة (Opus 5.5, Sonnet 5.5 & Claude Code)'}
          </p>
          <h2 className="mt-2 font-serif-editorial text-2xl font-bold text-[#0F172A] sm:text-3xl [text-wrap:balance]">
            {lang === 'en'
              ? 'Why On-Device Biophysical Diagnostics Require Anthropic Frontier Reasoning as a Computational Partner'
              : 'لماذا يتطلب بناء منظومة التشخيص الفيزيائي الحيوي بدون إنترنت قدرات الاستدلال الفائقة لنماذج Anthropic؟'}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#1E293B] sm:text-base">
            {lang === 'en'
              ? 'Rather than calling cloud LLMs at patient bedside—which fails in rural clinics and violates medical privacy—our methodology uses Anthropic frontier models during the R&D compilation phase to formally verify zero-phase C++17 DSP kernels, synthesize 10,000+ physical edge-case test vectors, and calibrate uncertainty-aware abstention bounds.'
              : 'بدلاً من استدعاء النماذج السحابية أثناء فحص المريض (وهو ما يفشل بدون إنترنت وينتهك الخصوصية الطبية)، توظف منهجيتنا البحثية نماذج Anthropic كشريك حاسوبي أثناء مرحلة التطوير لاشتقاق البراهين الرياضية لمرشحات C++17 صفرية الطور، وتوليد آلاف اختبارات الحالات الحرجة، ومعايرة حدود الامتناع السريري الآمن.'}
          </p>
        </div>

        {/* 6 Technical Axes Explorer */}
        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          {/* Left selector tabs (5 cols) */}
          <div
            className="min-w-0 lg:col-span-5 flex flex-col gap-2"
            role="tablist"
            aria-label="Anthropic Research Acceleration Axes"
          >
            {CLAUDE_AXES.map((axis) => {
              const active = axis.id === activeAxis.id;
              return (
                <button
                  key={axis.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedAxisId(axis.id)}
                  className={`rounded-xl border p-4 text-start transition-colors ${
                    active
                      ? 'border-[#0284C7] bg-[#F8FAFC] text-[#0F172A] shadow-2xs'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <p dir="ltr" className="font-mono text-[11px] font-bold text-[#D97757]">
                    {axis.modelBadge}
                  </p>
                  <p className="mt-1 text-sm font-bold leading-snug">{axis.title[lang]}</p>
                </button>
              );
            })}
          </div>

          {/* Right Axis Deep-Dive Panel (7 cols) */}
          <article className="min-w-0 lg:col-span-7 flex flex-col justify-between rounded-xl border border-slate-200 bg-[#F8FAFC] p-6 sm:p-8 shadow-2xs">
            <div>
              <span
                dir="ltr"
                className="inline-block rounded border border-sky-200 bg-sky-50 px-2.5 py-1 font-mono text-xs font-bold text-[#0284C7]"
              >
                {activeAxis.modelBadge}
              </span>
              <h3 className="mt-3 font-serif-editorial text-xl font-bold text-[#0F172A] sm:text-2xl">
                {activeAxis.title[lang]}
              </h3>

              <div className="mt-5 space-y-4">
                <div className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {lang === 'en'
                      ? 'SCIENTIFIC & SYSTEMS BOTTLENECK'
                      : 'التحدي العلمي والهندسي'}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#1E293B]">
                    {activeAxis.technicalChallenge[lang]}
                  </p>
                </div>

                <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#D97757]">
                    {lang === 'en'
                      ? 'WHY ANTHROPIC CLAUDE FRONTIER MODELS ARE ESSENTIAL'
                      : 'لماذا نحتاج قدرات نماذج Anthropic Claude تحديداً؟'}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#1E293B]">
                    {activeAxis.whyClaude[lang]}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-slate-200 pt-4">
              <p className="text-xs font-bold text-[#059669]">
                {lang === 'en' ? 'Verified Research Output: ' : 'المخرج البحثي الموثق: '}
                <span className="font-normal text-[#0F172A]">
                  {activeAxis.deliverable[lang]}
                </span>
              </p>
            </div>
          </article>
        </div>

        {/* Interactive API Token & Compute Allocation Calculator */}
        <div className="mt-12 rounded-xl border border-slate-200 bg-[#F8FAFC] p-6 sm:p-8 shadow-2xs">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#0284C7]">
                {lang === 'en'
                  ? 'INTERACTIVE ANTHROPIC AI FOR SCIENCE COMPUTE & API CREDIT CALCULATOR'
                  : 'حاسبة استهلاك التوكنز وميزانية الحوسبة لبرنامج Anthropic AI for Science'}
              </p>
              <h3 className="mt-1 text-lg font-bold text-[#0F172A]">
                {lang === 'en'
                  ? '6-Month Frontier Model Token Budget & Grant Tier Estimator'
                  : 'توزيع التوكنز والميزانية التقديرية على مدار 6 أشهر'}
              </h3>
            </div>
            <button
              type="button"
              onClick={resetOfficialBaseline}
              className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-[#0284C7] hover:bg-slate-50"
            >
              {lang === 'en' ? 'Reset to $6,340 Baseline' : 'إعادة الضبط ($6,340)'}
            </button>
          </div>

          <div className="mt-6 grid gap-8 lg:grid-cols-12">
            {/* Sliders (6 cols) */}
            <div className="min-w-0 lg:col-span-6 space-y-4 text-xs">
              <div>
                <div className="flex justify-between font-semibold text-slate-700">
                  <label htmlFor="opus-slider">
                    Claude Opus 5.5 (Formal Math &amp; NEON SIMD)
                  </label>
                  <span
                    dir="ltr"
                    className="calc-usd-figure font-mono font-bold text-[#0F172A] tabular-nums"
                  >
                    {opusMillionsTokens}M tokens · {formatUsdAscii(budget.opusCostUsd)}
                  </span>
                </div>
                <input
                  id="opus-slider"
                  type="range"
                  min={40}
                  max={250}
                  step={10}
                  value={opusMillionsTokens}
                  onChange={(e) => setOpusMillionsTokens(Number(e.target.value))}
                  className="mt-1.5 w-full accent-[#D97757]"
                />
              </div>

              <div>
                <div className="flex justify-between font-semibold text-slate-700">
                  <label htmlFor="sonnet-slider">
                    Claude Sonnet 5.5 (1M Context MIMIC-IV / PPG-BP Ingestion)
                  </label>
                  <span
                    dir="ltr"
                    className="calc-usd-figure font-mono font-bold text-[#0F172A] tabular-nums"
                  >
                    {sonnetMillionsTokens}M tokens · {formatUsdAscii(budget.sonnetCostUsd)}
                  </span>
                </div>
                <input
                  id="sonnet-slider"
                  type="range"
                  min={100}
                  max={600}
                  step={25}
                  value={sonnetMillionsTokens}
                  onChange={(e) => setSonnetMillionsTokens(Number(e.target.value))}
                  className="mt-1.5 w-full accent-[#0284C7]"
                />
              </div>

              <div>
                <div className="flex justify-between font-semibold text-slate-700">
                  <label htmlFor="fable-slider">
                    Claude Fable 5.2 (Bilingual TTS &amp; Open-Science Documentation)
                  </label>
                  <span
                    dir="ltr"
                    className="calc-usd-figure font-mono font-bold text-[#0F172A] tabular-nums"
                  >
                    {fableMillionsTokens}M tokens · {formatUsdAscii(budget.fableCostUsd)}
                  </span>
                </div>
                <input
                  id="fable-slider"
                  type="range"
                  min={25}
                  max={250}
                  step={25}
                  value={fableMillionsTokens}
                  onChange={(e) => setFableMillionsTokens(Number(e.target.value))}
                  className="mt-1.5 w-full accent-[#D97757]"
                />
              </div>

              <div>
                <div className="flex justify-between font-semibold text-slate-700">
                  <label htmlFor="months-slider">
                    Claude Code / Team Research Seats (Months)
                  </label>
                  <span
                    dir="ltr"
                    className="calc-usd-figure font-mono font-bold text-[#0F172A] tabular-nums"
                  >
                    {durationMonths} mo · {formatUsdAscii(budget.claudeCodeProUsd)}
                  </span>
                </div>
                <input
                  id="months-slider"
                  type="range"
                  min={3}
                  max={12}
                  step={1}
                  value={durationMonths}
                  onChange={(e) => setDurationMonths(Number(e.target.value))}
                  className="mt-1.5 w-full accent-[#059669]"
                />
              </div>
            </div>

            {/* 5 Crisp ASCII Dollar Boxes (6 cols) */}
            <div className="min-w-0 lg:col-span-6 flex flex-col justify-between">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="rounded-lg border border-slate-200 bg-white p-3.5 text-center shadow-2xs">
                  <span className="block text-[11px] font-semibold text-slate-500">
                    Opus 5.5
                  </span>
                  <span
                    dir="ltr"
                    data-testid="calc-opus-usd"
                    className="calc-usd-figure mt-1 block font-mono text-base font-bold text-[#0F172A] tabular-nums"
                  >
                    {formatUsdAscii(budget.opusCostUsd)}
                  </span>
                </div>

                <div className="rounded-lg border border-slate-200 bg-white p-3.5 text-center shadow-2xs">
                  <span className="block text-[11px] font-semibold text-slate-500">
                    Sonnet 5.5
                  </span>
                  <span
                    dir="ltr"
                    data-testid="calc-sonnet-usd"
                    className="calc-usd-figure mt-1 block font-mono text-base font-bold text-[#0F172A] tabular-nums"
                  >
                    {formatUsdAscii(budget.sonnetCostUsd)}
                  </span>
                </div>

                <div className="rounded-lg border border-slate-200 bg-white p-3.5 text-center shadow-2xs">
                  <span className="block text-[11px] font-semibold text-slate-500">
                    Fable 5.2
                  </span>
                  <span
                    dir="ltr"
                    data-testid="calc-fable-usd"
                    className="calc-usd-figure mt-1 block font-mono text-base font-bold text-[#0F172A] tabular-nums"
                  >
                    {formatUsdAscii(budget.fableCostUsd)}
                  </span>
                </div>

                <div className="rounded-lg border border-slate-200 bg-white p-3.5 text-center shadow-2xs">
                  <span className="block text-[11px] font-semibold text-slate-500">
                    Claude Code
                  </span>
                  <span
                    dir="ltr"
                    data-testid="calc-claudecode-usd"
                    className="calc-usd-figure mt-1 block font-mono text-base font-bold text-[#0F172A] tabular-nums"
                  >
                    {formatUsdAscii(budget.claudeCodeProUsd)}
                  </span>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-emerald-200 bg-white p-5 shadow-2xs">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                      {lang === 'en'
                        ? 'TOTAL REQUESTED ANTHROPIC GRANT ALLOCATION'
                        : 'إجمالي قيمة المنحة والحوسبة المطلوبة'}
                    </span>
                    <span dir="ltr" className="font-mono text-xs font-semibold text-[#0284C7]">
                      {budget.recommendedTier}
                    </span>
                  </div>
                  <span
                    dir="ltr"
                    data-testid="calc-total-usd"
                    className="calc-usd-figure font-mono text-2xl font-bold text-[#059669] tabular-nums sm:text-3xl"
                  >
                    {formatUsdAscii(budget.totalEstimatedUsd)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
