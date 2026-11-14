import React, { useMemo, useState } from 'react';
import hljs from 'highlight.js/lib/core';
import cpp from 'highlight.js/lib/languages/cpp';
import kotlin from 'highlight.js/lib/languages/kotlin';
import python from 'highlight.js/lib/languages/python';
import cmake from 'highlight.js/lib/languages/cmake';
import xml from 'highlight.js/lib/languages/xml';
import { Check, Copy } from 'lucide-react';
import { PRODUCTION_CODEBASE } from '../data/productionCodebase';
import type { Language } from '../utils/biophysicsMath';

hljs.registerLanguage('cpp', cpp);
hljs.registerLanguage('kotlin', kotlin);
hljs.registerLanguage('python', python);
hljs.registerLanguage('cmake', cmake);
hljs.registerLanguage('xml', xml);

interface CodebaseExplorerProps {
  lang: Language;
}

export const CodebaseExplorer: React.FC<CodebaseExplorerProps> = ({ lang }) => {
  const [selectedFileId, setSelectedFileId] = useState<string>(PRODUCTION_CODEBASE[0].id);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const activeFile =
    PRODUCTION_CODEBASE.find((f) => f.id === selectedFileId) ?? PRODUCTION_CODEBASE[0];

  const highlightedHtml = useMemo(() => {
    try {
      return hljs.highlight(activeFile.code, { language: activeFile.language }).value;
    } catch {
      return activeFile.code;
    }
  }, [activeFile]);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(activeFile.code);
      setCopiedId(activeFile.id);
      window.setTimeout(() => setCopiedId(null), 2000);
    } catch {
      setCopiedId(null);
    }
  };

  return (
    <section id="codebase" className="border-b border-slate-200 bg-[#F8FAFC] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-bold tracking-wider text-[#D97757] uppercase">
            {lang === 'en'
              ? 'SECTION 08 · COMPLETE UNTRUNCATED PRODUCTION CODEBASE (C++17, KOTLIN & PYTHON)'
              : 'القسم 08 · المستودع البرمجي التنفيذي الكامل (بدون أي اختصار)'}
          </p>
          <h2 className="mt-2 font-serif-editorial text-2xl font-bold text-[#0F172A] sm:text-3xl [text-wrap:balance]">
            {lang === 'en'
              ? 'Production Source Files Ready for Android Studio NDK & 16KB Page Alignment'
              : 'الملفات البرمجية التنفيذية الكاملة: نواة C++17، رادار Oboe، كاميرا RAW، وتدريب LiteRT'}
          </h2>
        </div>

        {/* File selector bar */}
        <div
          role="tablist"
          aria-label="Production source files"
          className="mt-8 flex flex-wrap gap-2"
        >
          {PRODUCTION_CODEBASE.map((file) => {
            const active = file.id === activeFile.id;
            return (
              <button
                key={file.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSelectedFileId(file.id)}
                className={`rounded-lg border px-3.5 py-2 text-xs font-mono transition-colors ${
                  active
                    ? 'border-[#0284C7] bg-[#0F172A] text-white font-semibold'
                    : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:text-[#0F172A]'
                }`}
              >
                {file.filename}
              </button>
            );
          })}
        </div>

        {/* Code viewer container */}
        <div className="mt-4 overflow-hidden rounded-xl border border-slate-300 bg-white shadow-2xs">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 bg-[#F8FAFC] px-4 py-3 sm:px-6">
            <div>
              <p dir="ltr" className="font-mono text-xs font-bold text-[#0284C7]">
                {activeFile.filename}
              </p>
              <p className="mt-0.5 text-xs text-slate-600">{activeFile.subtitle[lang]}</p>
            </div>
            <button
              type="button"
              onClick={handleCopyCode}
              className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-mono font-semibold text-[#0F172A] hover:border-[#0284C7] hover:text-[#0284C7] transition-colors"
            >
              {copiedId === activeFile.id ? (
                <>
                  <Check className="h-3.5 w-3.5 text-[#059669]" />
                  <span>{lang === 'en' ? 'Copied' : 'تم النسخ'}</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>{lang === 'en' ? 'Copy Full File' : 'نسخ الكود الكامل'}</span>
                </>
              )}
            </button>
          </div>

          <pre
            dir="ltr"
            className="max-h-[540px] overflow-auto bg-white p-4 sm:p-6 text-xs font-mono leading-relaxed text-[#0F172A]"
          >
            <code
              className={`hljs language-${activeFile.language}`}
              dangerouslySetInnerHTML={{ __html: highlightedHtml }}
            />
          </pre>
        </div>
      </div>
    </section>
  );
};
