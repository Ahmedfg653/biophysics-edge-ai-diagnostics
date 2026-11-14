import React, { useState } from 'react';
import { Check, Copy, Cpu, Layers } from 'lucide-react';
import {
  BINARY_MEMORY_LAYOUT_FIELDS,
  CPP_64BYTE_STRUCT_AND_RINGBUFFER_SNIPPET,
} from '../data/monographAdditiveExpansion';
import type { Language } from '../utils/biophysicsMath';

interface BinaryMemoryArchitectureSectionProps {
  lang: Language;
}

export const BinaryMemoryArchitectureSection: React.FC<BinaryMemoryArchitectureSectionProps> = ({
  lang,
}) => {
  const [selectedByteRange, setSelectedByteRange] = useState<string>(
    BINARY_MEMORY_LAYOUT_FIELDS[0].byteRange
  );
  const [copiedStruct, setCopiedStruct] = useState<boolean>(false);

  const activeField =
    BINARY_MEMORY_LAYOUT_FIELDS.find((f) => f.byteRange === selectedByteRange) ??
    BINARY_MEMORY_LAYOUT_FIELDS[0];

  const handleCopySnippet = async () => {
    try {
      await navigator.clipboard.writeText(CPP_64BYTE_STRUCT_AND_RINGBUFFER_SNIPPET);
      setCopiedStruct(true);
      window.setTimeout(() => setCopiedStruct(false), 2000);
    } catch {
      setCopiedStruct(false);
    }
  };

  return (
    <section
      id="binary-memory"
      data-testid="binary-memory-section"
      className="border-b border-slate-200 bg-white py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-wider text-[#0284C7] uppercase">
            <Cpu className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>
              {lang === 'en'
                ? 'LOW-LEVEL BINARY DATA STRUCTURES, 64-BYTE CACHE-LINE LAYOUT & LOCK-FREE SPSC RING BUFFER'
                : 'مخططات هياكل البيانات الثنائية ومعمارية الذاكرة (64-Byte Cache-Line Structs & Lock-Free SPSC Ring Buffer)'}
            </span>
          </div>
          <h2 className="mt-2 font-serif-editorial text-2xl font-bold text-[#0F172A] sm:text-3xl [text-wrap:balance]">
            {lang === 'en'
              ? 'Deterministic O(1) Zero-Allocation Memory Engineering Supervised by Dr. Osama Helmy & Dr. Hayam Abd El-Mardy'
              : 'هندسة الذاكرة الحتمية O(1) الخالية من الأقفال بإشراف د. أسامة حلمي ود. هيام عبد المرضي'}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#1E293B] sm:text-base">
            {lang === 'en'
              ? 'To guarantee zero audio/camera frame drops on MediaTek Dimensity 9400+ (Cortex-X925), every synchronized multimodal frame is packed into a 64-byte L1 cache-line aligned C++17 struct (BiophysicalFramePacket) and transferred across threads via a Lock-Free Single-Producer Single-Consumer (SPSC) ring buffer without a single mutex or heap allocation.'
              : 'لضمان عدم ضياع أي عينة صوتية أو إطار كاميرا على معالج Dimensity 9400+ (نواة Cortex-X925)، صممنا هيكل الإطار الفيزيائي المتزامن (BiophysicalFramePacket) بحجم 64 بايت ليطابق سطر المخبأ (L1 Cache Line) تماماً، مع نقله عبر حلقة تخزين دائرية خالية من الأقفال (Lock-Free SPSC Ring Buffer) في زمن ثابت O(1) وبدون أي استدعاء لـ Mutex أو malloc.'}
          </p>
        </div>

        {/* Part 1: Visual 64-Byte L1 Cache Line Byte-Offset Diagram */}
        <div className="mt-10 rounded-xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-2xs">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Layers className="h-4 w-4 text-[#D97757] shrink-0" aria-hidden="true" />
              <h3 dir="ltr" className="font-mono text-sm font-bold text-[#0F172A]">
                alignas(64) struct BiophysicalFramePacket — 64-Byte L1 Cache Line Map [Bytes 00..63]
              </h3>
            </div>
            <span
              dir="ltr"
              className="rounded border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 font-mono text-xs font-bold text-[#059669]"
            >
              sizeof == 64 Bytes · alignof == 64 Bytes
            </span>
          </div>

          {/* Interactive Proportional 64-Byte Visual Strip */}
          <div
            role="tablist"
            aria-label="64-Byte Struct Memory Layout"
            className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-7"
          >
            {BINARY_MEMORY_LAYOUT_FIELDS.map((field) => {
              const active = field.byteRange === activeField.byteRange;
              return (
                <button
                  key={field.byteRange}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedByteRange(field.byteRange)}
                  className={`rounded-lg border p-3 text-left transition-colors ${
                    active
                      ? 'border-[#0284C7] bg-[#0F172A] text-white shadow-2xs'
                      : 'border-slate-300 bg-white text-[#0F172A] hover:border-[#0284C7]'
                  }`}
                >
                  <span
                    dir="ltr"
                    className={`block font-mono text-[10px] font-bold ${
                      active ? 'text-sky-300' : 'text-[#0284C7]'
                    }`}
                  >
                    {field.byteRange} ({field.byteSize}B)
                  </span>
                  <span
                    dir="ltr"
                    className="mt-1 block font-mono text-xs font-bold truncate"
                  >
                    {field.fieldName}
                  </span>
                  <span
                    dir="ltr"
                    className={`mt-0.5 block font-mono text-[10px] ${
                      active ? 'text-slate-300' : 'text-slate-500'
                    }`}
                  >
                    {field.cppType}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Selected Field Detail Banner */}
          <div className="mt-4 rounded-lg border border-slate-200 bg-white p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span dir="ltr" className="font-mono text-xs font-bold text-[#0284C7]">
                {activeField.byteRange} · {activeField.cppType} {activeField.fieldName}
              </span>
              <span dir="ltr" className="font-mono text-xs font-semibold text-[#D97757]">
                {activeField.alignmentNote}
              </span>
            </div>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#1E293B]">
              {activeField.description[lang]}
            </p>
          </div>

          {/* Complete 64-Byte Offset Table */}
          <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200 bg-white">
            <table className="w-full border-collapse text-start text-xs">
              <thead>
                <tr className="border-b border-slate-200 bg-[#F8FAFC] text-[#0F172A]">
                  <th className="px-3.5 py-2.5 font-bold text-start">Byte Offset</th>
                  <th className="px-3.5 py-2.5 font-bold text-start">Size</th>
                  <th className="px-3.5 py-2.5 font-bold text-start">C++17 Type</th>
                  <th className="px-3.5 py-2.5 font-bold text-start">Field Identifier</th>
                  <th className="px-3.5 py-2.5 font-bold text-start">
                    {lang === 'en' ? 'Biophysical Role & Alignment' : 'الوظيفة الفيزيائية والمحاذاة'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {BINARY_MEMORY_LAYOUT_FIELDS.map((f) => (
                  <tr key={f.byteRange} className="hover:bg-slate-50">
                    <td dir="ltr" className="px-3.5 py-2.5 font-mono font-bold text-[#0284C7]">
                      {f.byteRange}
                    </td>
                    <td dir="ltr" className="px-3.5 py-2.5 font-mono font-semibold text-[#0F172A]">
                      {f.byteSize} Bytes
                    </td>
                    <td dir="ltr" className="px-3.5 py-2.5 font-mono text-[#D97757]">
                      {f.cppType}
                    </td>
                    <td dir="ltr" className="px-3.5 py-2.5 font-mono font-bold text-[#0F172A]">
                      {f.fieldName}
                    </td>
                    <td className="px-3.5 py-2.5 text-slate-700">
                      {f.description[lang]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Part 2: Lock-Free SPSC Ring Buffer Diagram + C++17 Implementation */}
        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          {/* Left 5 cols: Lock-Free SPSC Ring Buffer Architectural SVG Diagram */}
          <div className="min-w-0 lg:col-span-5 rounded-xl border border-slate-200 bg-[#F8FAFC] p-6 flex flex-col justify-between shadow-2xs">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#059669]">
                {lang === 'en'
                  ? 'WAIT-FREE O(1) INTER-THREAD PIPELINE'
                  : 'حلقة التخزين الدائرية الخالية من الأقفال O(1)'}
              </span>
              <h3 className="mt-1.5 text-lg font-bold text-[#0F172A]">
                {lang === 'en'
                  ? 'Lock-Free Single-Producer Single-Consumer (SPSC) Ring Buffer'
                  : 'مخطط حلقة Lock-Free SPSC Ring Buffer بين الخيوط الحية'}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#1E293B]">
                {lang === 'en'
                  ? 'Isolates atomic head_ and tail_ indices on separate 64-byte cache lines (alignas(64)) to eliminate CPU L1 cache invalidation ping-pong (False Sharing) between the real-time Oboe/Camera2 producer and the ARMv9 NEON consumer.'
                  : 'يفصل مؤشري القراءة والكتابة الذريين (head_ وtail_) في سطري مخبأ منفصلين (alignas(64)) لمنع ظاهرة False Sharing بين خيط الالتقاط الحي وخيط معالجة الإشارات ARMv9 NEON.'}
              </p>

              <svg
                viewBox="0 0 420 250"
                className="mt-4 w-full h-auto rounded-lg border border-slate-200 bg-white"
                role="img"
                aria-label="Lock-Free SPSC Ring Buffer Architecture Diagram"
              >
                {/* Producer Box */}
                <rect x="16" y="22" width="128" height="58" rx="6" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2" />
                <text x="26" y="44" fill="#0F172A" fontSize="9.5" fontFamily="JetBrains Mono" fontWeight="700">
                  RT Producer Thread
                </text>
                <text x="26" y="62" fill="#0284C7" fontSize="8.5" fontFamily="JetBrains Mono">
                  Oboe 48kHz / Cam 60fps
                </text>

                {/* Consumer Box */}
                <rect x="276" y="22" width="128" height="58" rx="6" fill="#DCFCE7" stroke="#059669" strokeWidth="2" />
                <text x="286" y="44" fill="#0F172A" fontSize="9.5" fontFamily="JetBrains Mono" fontWeight="700">
                  NEON DSP Consumer
                </text>
                <text x="286" y="62" fill="#059669" fontSize="8.5" fontFamily="JetBrains Mono">
                  filtfilt / FFT / LiteRT
                </text>

                {/* Ring Buffer Circle */}
                <circle cx="210" cy="145" r="64" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2.5" />
                <circle cx="210" cy="145" r="34" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1.5" />
                <text x="176" y="142" fill="#0F172A" fontSize="9" fontFamily="JetBrains Mono" fontWeight="700">
                  SPSC Ring
                </text>
                <text x="172" y="156" fill="#D97757" fontSize="8.5" fontFamily="JetBrains Mono" fontWeight="700">
                  O(1) No Mutex
                </text>

                {/* Tail & Head Pointers */}
                <path d="M 80 80 L 154 118" stroke="#0284C7" strokeWidth="2.2" />
                <circle cx="154" cy="118" r="5" fill="#0284C7" />
                <text x="18" y="128" fill="#0284C7" fontSize="9" fontFamily="JetBrains Mono" fontWeight="700">
                  tail_ (release)
                </text>

                <path d="M 266 118 L 340 80" stroke="#059669" strokeWidth="2.2" />
                <circle cx="266" cy="118" r="5" fill="#059669" />
                <text x="292" y="128" fill="#059669" fontSize="9" fontFamily="JetBrains Mono" fontWeight="700">
                  head_ (acquire)
                </text>

                <text x="38" y="232" fill="#0F172A" fontSize="9" fontFamily="JetBrains Mono" fontWeight="700">
                  Zero std::mutex · Zero malloc() · Zero Priority Inversion
                </text>
              </svg>
            </div>

            <div className="mt-4 border-t border-slate-200 pt-3 text-xs font-mono text-slate-600">
              <span>alignas(64) std::atomic&lt;size_t&gt; head_, tail_</span>
            </div>
          </div>

          {/* Right 7 cols: C++17 64-Byte Struct & Lock-Free SPSC Source Code */}
          <div className="min-w-0 lg:col-span-7 overflow-hidden rounded-xl border border-slate-300 bg-white shadow-2xs flex flex-col justify-between">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 bg-[#F8FAFC] px-4 py-3">
              <span dir="ltr" className="font-mono text-xs font-bold text-[#0284C7]">
                include/biophysics_packet_ringbuffer.hpp (C++17 Header)
              </span>
              <button
                type="button"
                onClick={handleCopySnippet}
                className="inline-flex items-center gap-1.5 rounded border border-slate-300 bg-white px-2.5 py-1 text-xs font-mono font-semibold text-[#0F172A] hover:border-[#0284C7] hover:text-[#0284C7]"
              >
                {copiedStruct ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-[#059669]" />
                    <span>Copied Header</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy C++17 Struct &amp; SPSC</span>
                  </>
                )}
              </button>
            </div>

            <pre
              dir="ltr"
              className="overflow-x-auto bg-white p-4 sm:p-5 text-xs font-mono leading-relaxed text-[#0F172A]"
            >
              <code>{CPP_64BYTE_STRUCT_AND_RINGBUFFER_SNIPPET}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};
