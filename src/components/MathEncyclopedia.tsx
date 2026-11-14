import React from 'react';
import katex from 'katex';
import { MATH_FORMULAS, PURE_BIOPHYSICS_PILLARS } from '../data/bilingualContent';
import type { Language } from '../utils/biophysicsMath';

interface MathEncyclopediaProps {
  lang: Language;
}

const KatexBlock: React.FC<{ tex: string }> = ({ tex }) => {
  const html = katex.renderToString(tex, {
    displayMode: true,
    throwOnError: false,
    strict: false,
  });
  return (
    <div
      dir="ltr"
      className="my-3 overflow-x-auto rounded-lg border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-left text-[#0F172A]"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export const MathEncyclopedia: React.FC<MathEncyclopediaProps> = ({ lang }) => {
  return (
    <section id="math" className="border-b border-slate-200 bg-[#F8FAFC] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-bold tracking-wider text-[#D97757] uppercase">
            {lang === 'en'
              ? 'SECTION 06 · MATHEMATICAL & BIOPHYSICAL DERIVATIONS'
              : 'القسم 06 · الموسوعة الرياضية والفيزيائية الكاملة'}
          </p>
          <h2 className="mt-2 font-serif-editorial text-2xl font-bold text-[#0F172A] sm:text-3xl [text-wrap:balance]">
            {lang === 'en'
              ? 'Analytical Foundations Governing Every DSP Kernel and Clinical Estimate'
              : 'المعادلات الفيزيائية والهيموديناميكية الدقيقة المشغلة لنواة النظام'}
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {MATH_FORMULAS.map((item) => (
            <article
              key={item.id}
              className="min-w-0 rounded-xl border border-slate-200 bg-white p-6 shadow-2xs"
            >
              <h3 className="text-base font-bold text-[#0F172A]">{item.title[lang]}</h3>
              <KatexBlock tex={item.latex} />
              <p className="text-sm leading-relaxed text-[#1E293B]">{item.explanation[lang]}</p>
              <dl className="mt-4 space-y-1.5 border-t border-slate-200 pt-3 text-xs">
                {item.variables.map((v) => (
                  <div key={v.symbol} className="flex items-baseline gap-2">
                    <dt className="font-mono font-bold text-[#0284C7] shrink-0">{v.symbol}:</dt>
                    <dd className="text-slate-600">{v.meaning[lang]}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        {/* Pure Scientific & Physical Deep-Dive Pillars */}
        <div className="mt-14 border-t border-slate-200 pt-12">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-bold tracking-wider text-[#0284C7] uppercase">
              {lang === 'en'
                ? 'PURE BIOPHYSICAL PROOFS · OPTICAL, HEMODYNAMIC, ACOUSTIC & OCULAR MECHANISMS'
                : 'الشرح العلمي والفيزيائي البحت · البراهين الكاملة للامتصاص الضوئي والمرونة والرادار وفحص العين'}
            </p>
            <h3 className="mt-2 font-serif-editorial text-xl font-bold text-[#0F172A] sm:text-2xl [text-wrap:balance]">
              {lang === 'en'
                ? 'First-Principles Physical Proofs Linking Raw Smartphone Sensors to Clinical Pathology'
                : 'البراهين الفيزيائية والفسيولوجية من المبادئ الأولى حتى المؤشرات الإكلينيكية'}
            </h3>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {PURE_BIOPHYSICS_PILLARS.map((pillar) => (
              <article
                key={pillar.id}
                className="min-w-0 rounded-xl border border-slate-200 bg-white p-6 shadow-2xs"
              >
                <p className="font-mono text-[11px] font-bold tracking-wider text-[#D97757]">
                  {pillar.tag}
                </p>
                <h4 className="mt-2 text-base font-bold text-[#0F172A]">
                  {pillar.title[lang]}
                </h4>
                <KatexBlock tex={pillar.latex} />
                <p className="text-sm leading-relaxed text-[#1E293B]">
                  {pillar.scientificExplanation[lang]}
                </p>
                <ul className="mt-4 space-y-2 border-t border-slate-200 pt-3 text-xs text-slate-700">
                  {pillar.keyInsights.map((insight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="font-mono font-bold text-[#0284C7] shrink-0">0{idx + 1}.</span>
                      <span>{insight[lang]}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
