import React, { useState } from 'react';
import { VULNERABILITIES_18 } from '../data/bilingualContent';
import type { Language } from '../utils/biophysicsMath';

interface VulnerabilitiesMatrixProps {
  lang: Language;
}

export const VulnerabilitiesMatrix: React.FC<VulnerabilitiesMatrixProps> = ({ lang }) => {
  const [selectedId, setSelectedId] = useState<number>(VULNERABILITIES_18[0].id);

  const activeVuln =
    VULNERABILITIES_18.find((v) => v.id === selectedId) ?? VULNERABILITIES_18[0];

  return (
    <section id="vulnerabilities" className="border-b border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-bold tracking-wider text-[#0284C7] uppercase">
            {lang === 'en'
              ? 'SECTION 07 · 18 CRITICAL ENGINEERING VULNERABILITIES & PRODUCTION FIXES'
              : 'القسم 07 · مصفوفة الثغرات الهندسية الـ 18 والحلول الجذرية'}
          </p>
          <h2 className="mt-2 font-serif-editorial text-2xl font-bold text-[#0F172A] sm:text-3xl [text-wrap:balance]">
            {lang === 'en'
              ? 'How We Eliminated the 18 Failure Modes That Break Naive Mobile Health Apps'
              : 'كيف عالجنا نقاط الفشل الـ 18 التي تُسقط تطبيقات الصحة المحمولة التقليدية'}
          </h2>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          {/* Left selector list */}
          <div className="min-w-0 lg:col-span-5 grid gap-2 sm:grid-cols-2 max-h-[520px] overflow-y-auto pr-1">
            {VULNERABILITIES_18.map((item) => {
              const active = item.id === activeVuln.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedId(item.id)}
                  aria-pressed={active}
                  className={`rounded-xl border px-3.5 py-3 text-start transition-colors ${
                    active
                      ? 'border-[#0284C7] bg-[#F8FAFC] text-[#0F172A] shadow-2xs'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-bold text-[#D97757]">
                      #{item.id.toString().padStart(2, '0')}
                    </span>
                    <span className="font-mono text-[10px] font-bold uppercase text-slate-500">
                      {item.category}
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-bold leading-snug">{item.vulnerability[lang]}</p>
                </button>
              );
            })}
          </div>

          {/* Right comparison detail card */}
          <div className="min-w-0 lg:col-span-7 rounded-xl border border-slate-200 bg-[#F8FAFC] p-6 sm:p-8 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs font-bold uppercase text-[#0284C7]">
                  VULNERABILITY #{activeVuln.id.toString().padStart(2, '0')} · {activeVuln.category}
                </span>
              </div>
              <h3 className="mt-2 text-xl font-bold text-[#0F172A]">
                {activeVuln.vulnerability[lang]}
              </h3>

              <div className="mt-6 space-y-5">
                <div className="rounded-lg border border-red-200 bg-red-50/70 p-5">
                  <p className="text-xs font-bold text-[#DC2626]">
                    {lang === 'en'
                      ? 'FATAL ROOT CAUSE IN NAIVE IMPLEMENTATIONS'
                      : 'السبب الجذري للفشل في التطبيقات التقليدية الساذجة'}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#1E293B]">
                    {activeVuln.rootCause[lang]}
                  </p>
                </div>

                <div className="rounded-lg border border-emerald-200 bg-emerald-50/70 p-5">
                  <p className="text-xs font-bold text-[#059669]">
                    {lang === 'en'
                      ? 'OUR RADICAL PRODUCTION FIX (XIAOMI 15T PRO)'
                      : 'الحل الهندسي الجذري المُعتمد في نظامنا'}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#1E293B]">
                    {activeVuln.implementedFix[lang]}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-slate-200 pt-4 flex items-center justify-between text-xs font-mono text-slate-600">
              <span>
                {lang === 'en' ? 'Verification Status:' : 'حالة التحقق الهندسي:'}
              </span>
              <span className="font-bold text-[#059669]">
                {lang === 'en'
                  ? 'Implemented in Production Codebase Below'
                  : 'مُنفّذ بالكامل في الأكواد المصدرية أدناه'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
