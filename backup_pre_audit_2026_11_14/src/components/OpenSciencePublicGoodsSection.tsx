import React from 'react';
import { Code2, Database, FileCode2, Layers } from 'lucide-react';
import { OPEN_SCIENCE_PUBLIC_GOODS } from '../data/bilingualContent';
import type { Language } from '../utils/biophysicsMath';

interface OpenSciencePublicGoodsSectionProps {
  lang: Language;
}

export const OpenSciencePublicGoodsSection: React.FC<OpenSciencePublicGoodsSectionProps> = ({
  lang,
}) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'libbiophysics-neon-dsp':
        return <Code2 className="h-4 w-4 text-[#0284C7] shrink-0" aria-hidden="true" />;
      case 'open-camera2-clinical-isp':
        return <FileCode2 className="h-4 w-4 text-[#059669] shrink-0" aria-hidden="true" />;
      case 'fa-hists-benchmark-dataset':
        return <Database className="h-4 w-4 text-[#D97757] shrink-0" aria-hidden="true" />;
      default:
        return <Layers className="h-4 w-4 text-[#0284C7] shrink-0" aria-hidden="true" />;
    }
  };

  return (
    <section
      id="public-goods"
      data-testid="public-goods-section"
      className="border-b border-slate-200 bg-[#F8FAFC] py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header + Anthropic AI for Science Public Goods Criterion Quote */}
        <div className="max-w-4xl">
          <p className="font-mono text-xs font-bold tracking-wider text-[#059669] uppercase">
            {lang === 'en'
              ? 'OPEN-SCIENCE PUBLIC GOODS & COMMUNITY DELIVERABLES (APACHE-2.0 LICENSE)'
              : 'المنافع العلمية العامة والمخرجات مفتوحة المصدر للمجتمع العلمي (رخصة Apache-2.0)'}
          </p>
          <h2 className="mt-2 font-serif-editorial text-2xl font-bold text-[#0F172A] sm:text-3xl [text-wrap:balance]">
            {lang === 'en'
              ? 'Four Reusable Open-Science Artifacts Built for the Global Mobile-Health Research Community'
              : 'أربعة مخرجات علمية وهندسية مفتوحة المصدر لخدمة مجتمع الذكاء الاصطناعي الطبي عالمياً'}
          </h2>
          <blockquote className="mt-4 rounded-lg border-l-4 border-[#0284C7] bg-white p-4 text-xs sm:text-sm leading-relaxed text-[#1E293B] shadow-2xs">
            <span className="font-semibold text-[#0F172A]">
              {lang === 'en'
                ? 'Anthropic AI for Science Selection Criterion Alignment: '
                : 'التوافق المباشر مع معيار القبول في منحة Anthropic AI for Science: '}
            </span>
            {lang === 'en'
              ? '“We prioritize proposals that generate public goods that benefit the wider scientific community: open datasets, open-source software, open standards, and shared libraries.” Every deliverable below is released under a permissive Apache-2.0 license with zero proprietary lock-in.'
              : '«نمنح الأولوية للأبحاث التي تنتج منافع علمية عامة (Public Goods) تفيد المجتمع العلمي الأوسع: مجموعات البيانات المفتوحة، البرمجيات مفتوحة المصدر، المعايير المفتوحة، والمكتبات المشتركة». جميع الحزم الأربع أدناه تُنشر برخصة Apache-2.0 المفتوحة.'}
          </blockquote>
        </div>

        {/* 4 Public Goods Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {OPEN_SCIENCE_PUBLIC_GOODS.map((item) => (
            <article
              key={item.id}
              data-testid={`public-good-${item.id}`}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-2xs"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {getIcon(item.id)}
                    <span className="font-mono text-xs font-bold text-[#0284C7]">
                      #{item.number} · {item.categoryBadge[lang]}
                    </span>
                  </div>
                  <span
                    dir="ltr"
                    className="rounded border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 font-mono text-[11px] font-bold text-[#059669]"
                  >
                    {item.license}
                  </span>
                </div>

                <p dir="ltr" className="mt-3 font-mono text-xs font-bold text-[#D97757]">
                  {item.repoSlug}
                </p>

                <h3 className="mt-1 text-lg font-bold text-[#0F172A]">
                  {item.title[lang]}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-[#1E293B]">
                  {item.description[lang]}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-slate-200 pt-4">
                {item.technicalComponents.map((comp) => (
                  <span
                    key={comp}
                    dir="ltr"
                    className="rounded border border-slate-200 bg-[#F8FAFC] px-2.5 py-1 font-mono text-[11px] font-semibold text-[#0F172A]"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
