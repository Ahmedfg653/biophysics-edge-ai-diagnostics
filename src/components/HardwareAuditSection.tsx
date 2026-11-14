import React, { useState } from 'react';
import { ARCHITECTURE_LAYERS, HARDWARE_AUDIT } from '../data/bilingualContent';
import type { Language } from '../utils/biophysicsMath';

interface HardwareAuditSectionProps {
  lang: Language;
}

export const HardwareAuditSection: React.FC<HardwareAuditSectionProps> = ({ lang }) => {
  const [selectedHardwareId, setSelectedHardwareId] = useState(HARDWARE_AUDIT[0].id);
  const [selectedLayerNum, setSelectedLayerNum] = useState(ARCHITECTURE_LAYERS[0].layerNumber);

  const activeHw = HARDWARE_AUDIT.find((h) => h.id === selectedHardwareId) ?? HARDWARE_AUDIT[0];
  const activeLayer =
    ARCHITECTURE_LAYERS.find((l) => l.layerNumber === selectedLayerNum) ?? ARCHITECTURE_LAYERS[0];

  return (
    <section id="hardware" className="border-b border-slate-200 bg-[#F8FAFC] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section 3: Xiaomi 15T Pro Hardware Audit */}
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-bold tracking-wider text-[#0284C7] uppercase">
            {lang === 'en'
              ? 'SECTION 03 · XIAOMI 15T PRO HARDWARE AUDIT & WORKAROUNDS'
              : 'القسم 03 · التدقيق الهندسي لعتاد Xiaomi 15T Pro والحلول الابتكارية'}
          </p>
          <h2 className="mt-2 font-serif-editorial text-2xl font-bold text-[#0F172A] sm:text-3xl [text-wrap:balance]">
            {lang === 'en'
              ? 'Engineered for Real Silicon Constraints—Zero Theoretical Hand-Waving'
              : 'تصميم مبني على فحص العتاد الحقيقي ومعالجة قيود أندرويد 15 وHyperOS 2'}
          </h2>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          {/* Left selector tabs */}
          <div className="min-w-0 lg:col-span-4 flex flex-col gap-2" role="tablist" aria-label="Hardware subsystems">
            {HARDWARE_AUDIT.map((hw) => {
              const active = hw.id === activeHw.id;
              return (
                <button
                  key={hw.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedHardwareId(hw.id)}
                  className={`rounded-xl border p-4 text-start transition-colors ${
                    active
                      ? 'border-[#0284C7] bg-white text-[#0F172A] shadow-2xs'
                      : 'border-slate-200 bg-white/70 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <p className="text-sm font-bold">{hw.component[lang]}</p>
                  <p className="mt-1 text-xs font-mono text-slate-500 truncate">{hw.apiStack}</p>
                </button>
              );
            })}
          </div>

          {/* Right detail panel */}
          <div className="min-w-0 lg:col-span-8 rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xs">
            <p className="text-xs font-mono font-bold text-[#0284C7]">{activeHw.hardwareSpec}</p>
            <h3 className="mt-2 text-xl font-bold text-[#0F172A]">{activeHw.component[lang]}</h3>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="rounded-lg border border-red-200 bg-red-50/60 p-4">
                <p className="text-xs font-bold text-[#DC2626]">
                  {lang === 'en' ? 'PHYSICAL / OS CONSTRAINT' : 'القيد الفيزيائي أو البرمجي'}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#1E293B]">
                  {activeHw.constraint[lang]}
                </p>
              </div>
              <div className="rounded-lg border border-emerald-200 bg-emerald-50/60 p-4">
                <p className="text-xs font-bold text-[#059669]">
                  {lang === 'en' ? 'IMPLEMENTED ENGINEERING SOLUTION' : 'الحل الهندسي المُنفّذ'}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#1E293B]">
                  {activeHw.engineeringSolution[lang]}
                </p>
              </div>
            </div>

            <div className="mt-6 border-t border-slate-200 pt-4 text-xs font-mono text-slate-500">
              {lang === 'en' ? 'Active Production Stack: ' : 'الحزمة البرمجية الفعالة: '}
              <span className="font-semibold text-[#0F172A]">{activeHw.apiStack}</span>
            </div>
          </div>
        </div>

        {/* Section 4: Interactive 5-Layer Isolated System Architecture */}
        <div className="mt-16 border-t border-slate-200 pt-14">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-bold tracking-wider text-[#D97757] uppercase">
              {lang === 'en'
                ? 'SECTION 04 · 5-LAYER ISOLATED ON-DEVICE ARCHITECTURE'
                : 'القسم 04 · المعمارية البرمجية المعزولة ذات الطبقات الخمس'}
            </p>
            <h3 className="mt-2 font-serif-editorial text-2xl font-bold text-[#0F172A]">
              {lang === 'en'
                ? 'Deterministic Data Flow from Raw Photons & 48kHz Audio to Encrypted Room Storage'
                : 'تدفق حتمي من المستشعرات الخام إلى قاعدة SQLCipher المشفرة محلياً'}
            </h3>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {ARCHITECTURE_LAYERS.map((layer) => {
              const active = layer.layerNumber === activeLayer.layerNumber;
              return (
                <button
                  key={layer.layerNumber}
                  type="button"
                  onClick={() => setSelectedLayerNum(layer.layerNumber)}
                  aria-pressed={active}
                  className={`rounded-xl border p-4 text-start transition-colors ${
                    active
                      ? 'border-[#D97757] bg-white text-[#0F172A] shadow-2xs'
                      : 'border-slate-200 bg-white/70 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <span className="font-mono text-xs font-bold text-[#D97757]">L{layer.layerNumber}</span>
                  <p className="mt-1 text-sm font-bold leading-snug">{layer.title[lang]}</p>
                  <p className="mt-2 font-mono text-[11px] text-slate-500">{layer.runtime}</p>
                </button>
              );
            })}
          </div>

          <div className="mt-5 rounded-xl border border-slate-200 bg-white p-6 shadow-2xs">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h4 className="text-lg font-bold text-[#0F172A]">
                L{activeLayer.layerNumber} · {activeLayer.title[lang]}
              </h4>
              <span className="font-mono text-xs font-semibold text-[#0284C7]">{activeLayer.runtime}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[#1E293B]">
              {activeLayer.description[lang]}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-slate-200 pt-3 text-xs font-mono text-slate-500">
              <span>{lang === 'en' ? 'Modules:' : 'الوحدات:'}</span>
              {activeLayer.modules.map((mod, idx) => (
                <span key={mod} className="font-semibold text-[#0F172A]">
                  {mod}
                  {idx < activeLayer.modules.length - 1 ? ' ·' : ''}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
