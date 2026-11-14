import React, { useState } from 'react';
import { BookOpen, Check, Copy, ExternalLink, Quote } from 'lucide-react';
import {
  CITATION_EXPORTS,
  GRANT_PACKAGE_SECTIONS,
  PEER_REVIEWED_REFERENCES_12,
} from '../data/bilingualContent';
import type { Language } from '../utils/biophysicsMath';

interface GrantApplicationPackageProps {
  lang: Language;
}

export const GrantApplicationPackage: React.FC<GrantApplicationPackageProps> = ({ lang }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyText = async (key: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      window.setTimeout(() => setCopiedKey(null), 2200);
    } catch {
      setCopiedKey(null);
    }
  };

  const fullGrantText = GRANT_PACKAGE_SECTIONS.map(
    (s) => `=== ${s.title} ===\n${s.body}`
  ).join('\n\n');

  return (
    <section id="grant-package" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Part 1: Copy-Ready Anthropic Grant Application Package */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-bold tracking-wider text-[#D97757] uppercase">
              {lang === 'en'
                ? 'SECTION 10 · READY-TO-SUBMIT ANTHROPIC GRANT APPLICATION DOSSIER'
                : 'القسم 10 · ملف التقديم الرسمي الجاهز للنسخ لمنحة Anthropic AI for Science'}
            </p>
            <h2 className="mt-2 font-serif-editorial text-2xl font-bold text-[#0F172A] sm:text-3xl [text-wrap:balance]">
              {lang === 'en'
                ? 'Copy-Ready Application Answers for Anthropic External Researcher Access & AI for Science'
                : 'نصوص التقديم الرسمية الجاهزة للنسخ المباشر في استمارة منحة Anthropic'}
            </h2>
          </div>

          <button
            type="button"
            onClick={() => copyText('all', fullGrantText)}
            className="inline-flex items-center gap-2 rounded-md bg-[#0F172A] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[#1E293B] transition-colors"
          >
            {copiedKey === 'all' ? (
              <>
                <Check className="h-4 w-4 text-emerald-400" />
                <span>
                  {lang === 'en'
                    ? 'Full Application Package Copied'
                    : 'تم نسخ ملف المنحة بالكامل'}
                </span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                <span>
                  {lang === 'en'
                    ? 'Copy Complete Grant Package'
                    : 'نسخ ملف التقديم الكامل لمنحة Anthropic'}
                </span>
              </>
            )}
          </button>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {GRANT_PACKAGE_SECTIONS.map((sec) => (
            <article
              key={sec.id}
              className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-6 flex flex-col justify-between shadow-2xs"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <h3 dir="ltr" className="text-base font-bold text-[#0F172A]">
                    {sec.title}
                  </h3>
                  <button
                    type="button"
                    onClick={() => copyText(sec.id, sec.body)}
                    className="inline-flex items-center gap-1 rounded border border-slate-300 bg-white px-2.5 py-1 text-xs font-mono font-semibold text-slate-700 hover:border-[#0284C7] hover:text-[#0284C7] transition-colors shrink-0"
                  >
                    {copiedKey === sec.id ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-[#059669]" />
                        <span>{lang === 'en' ? 'Copied' : 'نُسخ'}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>{lang === 'en' ? 'Copy' : 'نسخ'}</span>
                      </>
                    )}
                  </button>
                </div>
                <p
                  dir="ltr"
                  className="mt-4 whitespace-pre-line text-left text-xs sm:text-sm leading-relaxed text-[#1E293B]"
                >
                  {sec.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Part 2: Academic Citation Export (BibTeX & IEEE Format) */}
        <div
          data-testid="citation-export-section"
          className="mt-16 border-t border-slate-200 pt-12"
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-wider text-[#0284C7] uppercase">
              <Quote className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>
                {lang === 'en'
                  ? 'OFFICIAL MONOGRAPH CITATION EXPORT (IEEE & BIBTEX)'
                  : 'تصدير الاقتباس الأكاديمي الرسمي للورقة البحثية (IEEE & BibTeX)'}
              </span>
            </div>
            <h3 className="mt-2 font-serif-editorial text-xl font-bold text-[#0F172A] sm:text-2xl">
              {lang === 'en'
                ? 'Cite This Research Monograph & Open-Source Clinical Engineering Companion'
                : 'اقتبس هذه الورقة البحثية والمنظومة الهندسية الطبية مفتوحة المصدر'}
            </h3>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {/* IEEE Citation Card */}
            <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-5">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs font-bold text-[#0F172A]">
                  IEEE Transactions Citation Format
                </span>
                <button
                  type="button"
                  data-testid="copy-ieee-citation"
                  onClick={() => copyText('ieee', CITATION_EXPORTS.ieee)}
                  className="inline-flex items-center gap-1.5 rounded border border-slate-300 bg-white px-2.5 py-1 text-xs font-mono font-semibold text-[#0F172A] hover:border-[#0284C7] hover:text-[#0284C7]"
                >
                  {copiedKey === 'ieee' ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#059669]" />
                      <span>Copied IEEE</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy IEEE</span>
                    </>
                  )}
                </button>
              </div>
              <pre
                dir="ltr"
                className="mt-3 whitespace-pre-wrap rounded-lg border border-slate-200 bg-white p-3.5 font-mono text-xs leading-relaxed text-[#1E293B]"
              >
                {CITATION_EXPORTS.ieee}
              </pre>
            </div>

            {/* BibTeX Citation Card */}
            <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-5">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs font-bold text-[#0F172A]">
                  BibTeX Archival Entry
                </span>
                <button
                  type="button"
                  data-testid="copy-bibtex-citation"
                  onClick={() => copyText('bibtex', CITATION_EXPORTS.bibtex)}
                  className="inline-flex items-center gap-1.5 rounded border border-slate-300 bg-white px-2.5 py-1 text-xs font-mono font-semibold text-[#0F172A] hover:border-[#0284C7] hover:text-[#0284C7]"
                >
                  {copiedKey === 'bibtex' ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#059669]" />
                      <span>Copied BibTeX</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy BibTeX</span>
                    </>
                  )}
                </button>
              </div>
              <pre
                dir="ltr"
                className="mt-3 overflow-x-auto rounded-lg border border-slate-200 bg-white p-3.5 font-mono text-xs leading-relaxed text-[#1E293B]"
              >
                {CITATION_EXPORTS.bibtex}
              </pre>
            </div>
          </div>
        </div>

        {/* Part 3: 12 Peer-Reviewed Scientific References with DOI Links */}
        <div
          id="references"
          data-testid="peer-reviewed-references"
          className="mt-16 border-t border-slate-200 pt-12"
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-wider text-[#059669] uppercase">
              <BookOpen className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>
                {lang === 'en'
                  ? 'PEER-REVIEWED SCIENTIFIC BIBLIOGRAPHY (12 DOI-VERIFIED REFERENCES)'
                  : 'قائمة المراجع العلمية المحكمة الموثقة بروابط DOI (12 مرجعاً قياسياً)'}
              </span>
            </div>
            <h3 className="mt-2 font-serif-editorial text-xl font-bold text-[#0F172A] sm:text-2xl">
              {lang === 'en'
                ? 'Foundational Literature in Epidemiology, Optical rPPG, Ultrasonic Sonar, and Clinical Validation'
                : 'المراجع العلمية التأسيسية في الوبائيات، الفيزياء الحيوية الضوئية، السونار الصوتي، والمعايير التنظيمية'}
            </h3>
          </div>

          <ol className="mt-6 grid gap-3 sm:grid-cols-2">
            {PEER_REVIEWED_REFERENCES_12.map((refItem) => (
              <li
                key={refItem.num}
                dir="ltr"
                className="flex flex-col justify-between rounded-lg border border-slate-200 bg-[#F8FAFC] p-4 text-left text-xs leading-relaxed text-[#1E293B]"
              >
                <div>
                  <span className="font-mono font-bold text-[#0284C7]">
                    [{refItem.num.toString().padStart(2, '0')}]
                  </span>{' '}
                  <span className="font-semibold text-[#0F172A]">{refItem.authors}</span> (
                  {refItem.year}). “{refItem.title}.”{' '}
                  <em className="font-serif-editorial text-slate-700">{refItem.journal}</em>.
                </div>
                <div className="mt-2 border-t border-slate-200 pt-2">
                  <a
                    href={`https://doi.org/${refItem.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold text-[#0284C7] hover:underline"
                  >
                    <span>DOI: {refItem.doi}</span>
                    <ExternalLink className="h-3 w-3 shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
