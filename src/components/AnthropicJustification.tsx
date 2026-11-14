import React, { useState } from 'react';
import {
  Sparkles,
  Calculator,
  CheckCircle2,
  ExternalLink,
  Cpu,
  Terminal,
  FileCode2,
  FlaskConical,
  ShieldCheck,
} from 'lucide-react';
import { Language, computeVerifiedAnthropicApiBudget } from '../utils/biophysicsMath';
import { ANTHROPIC_PROGRAMS_COMPARISON } from '../data/scientificAuditData';

interface Props {
  lang: Language;
}

export const AnthropicJustification: React.FC<Props> = ({ lang }) => {
  const isAr = lang === 'ar';

  // Verified Public API Budget State (Section 7.4 & 7.5)
  const [opusInM, setOpusInM] = useState<number>(120);
  const [opusOutM, setOpusOutM] = useState<number>(35);
  const [sonnetInM, setSonnetInM] = useState<number>(450);
  const [sonnetOutM, setSonnetOutM] = useState<number>(120);
  const [haikuInM, setHaikuInM] = useState<number>(600);
  const [haikuOutM, setHaikuOutM] = useState<number>(150);
  const [cacheHitRatio, setCacheHitRatio] = useState<number>(0.5);
  const [teamPremiumSeats, setTeamPremiumSeats] = useState<number>(3);

  const budgetOut = computeVerifiedAnthropicApiBudget({
    durationMonths: 6,
    opusInputMillions: opusInM,
    opusOutputMillions: opusOutM,
    sonnetInputMillions: sonnetInM,
    sonnetOutputMillions: sonnetOutM,
    haikuInputMillions: haikuInM,
    haikuOutputMillions: haikuOutM,
    promptCacheHitRatio: cacheHitRatio,
    teamStandardSeats: 5,
    teamPremiumSeats,
  });

  const applyScenarioPreset = (preset: 'low' | 'base' | 'high') => {
    if (preset === 'low') {
      setOpusInM(45);
      setOpusOutM(12);
      setSonnetInM(180);
      setSonnetOutM(45);
      setHaikuInM(250);
      setHaikuOutM(60);
      setCacheHitRatio(0.55);
    } else if (preset === 'base') {
      setOpusInM(120);
      setOpusOutM(35);
      setSonnetInM(450);
      setSonnetOutM(120);
      setHaikuInM(600);
      setHaikuOutM(150);
      setCacheHitRatio(0.5);
    } else {
      setOpusInM(240);
      setOpusOutM(85);
      setSonnetInM(900);
      setSonnetOutM(260);
      setHaikuInM(1200);
      setHaikuOutM(300);
      setCacheHitRatio(0.45);
    }
  };

  const whyClaudeNecessaryItems = [
    {
      titleEn: '1. Automated Multi-Harmonic Artifact & Failure-Mode Synthesis (Batch API)',
      titleAr: '1. التوليد الآلي لاختبارات الضوضاء المتعددة التوافقيات وحالات الفشل الحدية (Batch API)',
      modelEn: 'Claude Sonnet 4.5 / Sonnet 4 (Standard Public API)',
      descEn:
        'Generates thousands of parameterized synthetic rPPG corruption test vectors (motion bursts, sensor clipping, rolling-shutter jitter, spectral aliasing) and automated C++17/TypeScript property-based unit tests to stress-test the SQI and Laplacian abstention gates before human dataset evaluation.',
      descAr:
        'توليد آلاف متجهات الاختبار الاصطناعية لتشوه إشارة rPPG (اهتزاز مفاجئ، تشبع المستشعر، تذبذب الإطارات) واختبارات الوحدات البرمجية الآلية بلغة C++17 وTypeScript لاختبار صمود بوابات الامتناع (SQI وLaplacian) قبل التقييم على قواعد البيانات البشرية.',
    },
    {
      titleEn: '2. Symbolic & Mathematical Verification of Non-Causal DSP & Colorimetric Chains',
      titleAr: '2. التحقق الرمزي والرياضي من سلاسل معالجة الإشارة غير السببية والتحويلات اللونية',
      modelEn: 'Claude Opus 4.1 / Opus 4 (Extended Thinking)',
      descEn:
        'Verifies numerical stability of Direct-Form II Transposed 4th-order Butterworth SOS cascades, boundary reflection padding indices (3*N_order = 12 samples), and Bradford D65 chromatic adaptation matrix inversions across extreme low-SNR and low-kelvin regimes.',
      descAr:
        'التحقق من الاستقرار العددي لمرشحات Butterworth من الدرجة الرابعة، وحسابات انعكاس الحواف (12 عينة)، ومصفوفات التكيف اللوني Bradford D65 تحت ظروف انخفاض نسبة الإشارة إلى الضوضاء (SNR) الشديد.',
    },
    {
      titleEn: '3. Retrospective Dataset Evaluation & TRIPOD+AI Statistical Pipeline Automation',
      titleAr: '3. أتمتة أنابيب التقييم الإحصائي الاسترجاعي المتوافقة مع معيار TRIPOD+AI',
      modelEn: 'Claude Sonnet 4.5 + Claude Haiku 3.5',
      descEn:
        'Writes and audits reproducible Python/R/TypeScript evaluation scripts for PURE and UBFC-rPPG that enforce strict subject-level partitioning, clustered bootstrap 95% confidence intervals, Bland–Altman Limits of Agreement, and Selective Prediction Risk–Coverage curves.',
      descAr:
        'كتابة وتدقيق نصوص التقييم الإحصائي القابلة لإعادة الإنتاج لقاعدتي PURE وUBFC-rPPG مع ضمان الفصل الصارم على مستوى الأفراد، وحساب فترات ثقة Bootstrap العنقودية، وحدود توافق Bland–Altman، ومنحنيات المخاطرة مقابل التغطية.',
    },
    {
      titleEn: '4. 16KB ELF Alignment, JNI Zero-Allocation & Android NDK r28+ Refactoring',
      titleAr: '4. هندسة التوافق مع صفحات 16KB والذاكرة الصفرية عبر Android NDK r28+',
      modelEn: 'Claude Code (via Claude Team Plan for Scientists Premium Seat)',
      descEn:
        'Assists in refactoring C++17 NEON SIMD intrinsics, verifying 64-byte cache-line struct offsets via static_assert, and auditing CMake linker flags (-Wl,-z,max-page-size=16384) and llvm-readelf ELF segment alignment.',
      descAr:
        'المساعدة في تطوير تعليمات C++17 NEON SIMD، والتحقق من إزاحات هياكل البيانات المحاذية لـ 64 بايت عبر static_assert، وتدقيق أعلام ربط CMake ومحاذاة مقاطع ELF لصفحات 16KB.',
    },
    {
      titleEn: '5. Bilingual Scientific Documentation, IRB Protocol Drafting & Standards Auditing',
      titleAr: '5. التوثيق العلمي ثنائي اللغة، وصياغة بروتوكولات الأخلاقيات (IRB)، وتدقيق المعايير',
      modelEn: 'Claude Opus 4.1 + Claude Sonnet 4.5',
      descEn:
        'Maintains strict bilingual (English/Arabic) parity across technical specifications, drafts future IRB consent and de-identified ROI data schemas for FA-HISTS, and cross-checks compliance against IEEE 1708-2025, ISO 81060-2:2018, CLSI EP09, and AASM guidelines.',
      descAr:
        'الحفاظ على التطابق العلمي الدقيق بين اللغتين الإنجليزية والعربية، وصياغة مسودات موافقات لجنة الأخلاقيات (IRB) ومخططات البيانات منزوعة الهوية لمعهد المستقبل العالي (FA-HISTS)، ومطابقة المعايير القياسية الدولية.',
    },
  ];

  return (
    <section id="anthropic" className="py-12 border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-900 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-700" />
            {isAr
              ? 'الفصل الرسمي بين برامج دعم Anthropic وحاسبة التوكنز الموثقة (القسم 7 من التدقيق)'
              : 'SEPARATED ANTHROPIC RESEARCH PROGRAMS & VERIFIED PUBLIC API BUDGET (AUDIT SECTION 7)'}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-serif">
            {isAr
              ? 'لماذا نحتاج نماذج Claude علمياً؟ الفصل الدقيق بين خطة الفريق للعلماء ومنحة AI for Science API'
              : 'Why Claude Is Scientifically Necessary: Strict Separation of Claude Team Plan for Scientists vs. AI for Science API Grant'}
          </h2>

          <p className="mt-2 text-sm text-slate-600 max-w-4xl leading-relaxed">
            {isAr
              ? 'عملاً بالقسم 7 من التدقيق العلمي، يفصل هذا القسم بشكل قاطع بين برنامجي دعم البحث العلمي المستقلين لدى شركة Anthropic (مع شروط الأهلية والروابط الرسمية لكل منهما)، ويستبدل أسماء النماذج الافتراضية غير المعلنة بنماذج Anthropic API العامة الموثقة حالياً مع حساب شفاف لتكلفة توكنز الإدخال والإخراج والتخزين المؤقت (Prompt Caching).'
              : 'In compliance with Audit Section 7, this section strictly separates Anthropic’s two distinct academic support tracks—documenting their exact eligibility rules, ceilings, and review cycles—and calculates API token budgets using current documented public Anthropic API models with explicit Input/Output pricing, Prompt Caching discounts, and Low/Base/High scenarios.'}
          </p>
        </div>

        {/* PROGRAM A vs PROGRAM B COMPARISON CARDS (Section 7.1, 7.2, 7.3) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {ANTHROPIC_PROGRAMS_COMPARISON.map((prog) => (
            <div
              key={prog.programCode}
              className={`p-5 rounded-2xl border-2 flex flex-col justify-between ${
                prog.programCode === 'PROGRAM_B'
                  ? 'border-blue-600 bg-blue-50/20'
                  : 'border-slate-300 bg-slate-50/60'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded bg-slate-900 text-white">
                    {prog.programCode === 'PROGRAM_A'
                      ? isAr
                        ? 'المسار الأول: اشتراك مساحة العمل التعاونية'
                        : 'TRACK A: COLLABORATIVE WORKSPACE PLAN'
                      : isAr
                        ? 'المسار الثاني: منحة أرصدة API البحثية (حتى 20,000$)'
                        : 'TRACK B: FREE API CREDITS GRANT (UP TO $20,000)'}
                  </span>
                  <a
                    href={prog.officialApplicationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono font-bold text-blue-700 hover:underline"
                  >
                    {isAr ? 'الصفحة الرسمية' : 'Official Program Page'}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {isAr ? prog.programNameAr : prog.programNameEn}
                </h3>

                <div className="space-y-2.5 text-xs text-slate-700">
                  <div className="p-3 rounded-lg bg-white border border-slate-200">
                    <strong className="block text-slate-900 mb-0.5">
                      {isAr ? 'تفاصيل الدعم الرسمي والتسعير:' : 'Official Support Offer & Pricing:'}
                    </strong>
                    {isAr ? prog.officialSupportOfferAr : prog.officialSupportOfferEn}
                  </div>

                  <div className="p-3 rounded-lg bg-white border border-slate-200">
                    <strong className="block text-slate-900 mb-0.5">
                      {isAr ? 'شروط الأهلية والقيادة البحثية (PI):' : 'Eligibility & PI Leadership Requirements:'}
                    </strong>
                    {isAr ? prog.eligibilityRequirementsAr : prog.eligibilityRequirementsEn}
                  </div>

                  <div className="p-3 rounded-lg bg-white border border-slate-200">
                    <strong className="block text-slate-900 mb-0.5">
                      {isAr ? 'دورة المراجعة ومدة الصلاحية:' : 'Review Cycle & Validity Window:'}
                    </strong>
                    {isAr ? prog.reviewCycleAndDurationAr : prog.reviewCycleAndDurationEn}
                  </div>

                  <div className="p-3 rounded-lg bg-emerald-50/70 border border-emerald-200 text-emerald-950">
                    <strong className="block text-emerald-900 mb-0.5">
                      {isAr ? 'كيف نستخدم هذا المسار في مشروعنا:' : 'Specific Role in Our Research Workflow:'}
                    </strong>
                    {isAr ? prog.howUsedInProjectAr : prog.howUsedInProjectEn}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* WHY CLAUDE IS SCIENTIFICALLY NECESSARY (Section 7.6) */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <FlaskConical className="w-5 h-5 text-blue-800" />
              {isAr
                ? 'لماذا تُعد نماذج Claude ضرورة علمية ومنهجية لإنجاز هذا البحث؟ (5 مهام بحثية محددة)'
                : 'Why Claude Is Scientifically Necessary: Five Concrete R&D Acceleration Workflows'}
            </h3>
            <span className="text-xs font-mono text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
              {isAr
                ? 'شريك حاسوبي في المختبر فقط — لا يعمل داخل حلقة الهاتف الفورية'
                : 'Offline R&D Compute Partner Only — Zero LLM Calls Inside On-Device Runtime'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {whyClaudeNecessaryItems.map((item) => (
              <div
                key={item.titleEn}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10.5px] font-mono font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 mb-2 inline-block">
                    {item.modelEn}
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 mb-1.5 leading-snug">
                    {isAr ? item.titleAr : item.titleEn}
                  </h4>
                  <p className="text-[11.5px] text-slate-600 leading-relaxed">
                    {isAr ? item.descAr : item.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* VERIFIED PUBLIC API TOKEN BUDGET CALCULATOR (Section 7.4 & 7.5) */}
        <div className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-300 uppercase mb-1">
                <Calculator className="w-4 h-4" />
                {isAr
                  ? 'حاسبة ميزانية أرصدة Anthropic AI for Science API الموثقة (سقف 20,000$ / 6 أشهر)'
                  : 'Verified Public Anthropic API Token Budget Calculator ($20,000 / 6-Month AI for Science Ceiling)'}
              </div>
              <h3 className="text-lg font-bold text-white">
                {isAr
                  ? 'حساب تفصيلي لتوكنز الإدخال والإخراج والتخزين المؤقت (Low / Base / High Scenarios)'
                  : 'Transparent Input / Output Token Pricing & Prompt Caching Calculator (Public API Models Only)'}
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                {isAr
                  ? 'تستخدم هذه الحاسبة الأسعار الرسمية المنشورة لنماذج Anthropic API العامة القياسية (Claude Opus 4.1/4: 15$ إدخال / 75$ إخراج لكل مليون توكن؛ Claude Sonnet 4.5/4: 3$ إدخال / 15$ إخراج؛ Claude Haiku 3.5: 0.80$ إدخال / 4.00$ إخراج)، مع فصل تكلفة مقاعد Claude Team Plan for Scientists في بند مستقل.'
                  : 'Uses documented public API pricing (Claude Opus 4.1/4: $15/1M input, $75/1M output; Claude Sonnet 4.5/4: $3/1M input, $15/1M output; Claude Haiku 3.5: $0.80/1M input, $4/1M output) with Prompt Caching read discount and strictly separates Claude Team Plan seat costs.'}
              </p>
            </div>

            {/* Scenario Preset Buttons */}
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <span className="text-xs font-mono text-slate-400">
                {isAr ? 'اختر السيناريو:' : 'Select Scenario:'}
              </span>
              <button
                onClick={() => applyScenarioPreset('low')}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono font-semibold text-emerald-300 border border-slate-700 cursor-pointer"
              >
                {isAr ? 'منخفض (Low ~$2.9k)' : 'Low Pilot (~$2.9k)'}
              </button>
              <button
                onClick={() => applyScenarioPreset('base')}
                className="px-3 py-1.5 rounded-lg bg-blue-800 hover:bg-blue-700 text-xs font-mono font-semibold text-white border border-blue-500 cursor-pointer"
              >
                {isAr ? 'أساسي (Base ~$7.2k)' : 'Base Research (~$7.2k)'}
              </button>
              <button
                onClick={() => applyScenarioPreset('high')}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono font-semibold text-amber-300 border border-slate-700 cursor-pointer"
              >
                {isAr ? 'مرتفع (High ~$15.9k)' : 'High Scale (~$15.9k)'}
              </button>
            </div>
          </div>

          {/* Sliders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-5 text-xs">
            {/* Opus 4.1 / 4 */}
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2.5">
              <div className="font-mono font-bold text-amber-300">
                Claude Opus 4.1 / Opus 4 ($15 In / $75 Out)
              </div>
              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span>{isAr ? 'توكنز الإدخال (Input):' : 'Input Tokens:'}</span>
                  <span className="font-mono font-bold">{opusInM}M</span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={300}
                  step={10}
                  value={opusInM}
                  onChange={(e) => setOpusInM(Number(e.target.value))}
                  aria-label="Claude Opus Input Millions Tokens"
                  className="w-full accent-amber-400 cursor-pointer"
                />
              </div>
              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span>{isAr ? 'توكنز الإخراج (Output):' : 'Output Tokens:'}</span>
                  <span className="font-mono font-bold">{opusOutM}M</span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={120}
                  step={5}
                  value={opusOutM}
                  onChange={(e) => setOpusOutM(Number(e.target.value))}
                  aria-label="Claude Opus Output Millions Tokens"
                  className="w-full accent-amber-400 cursor-pointer"
                />
              </div>
              <div className="pt-1 border-t border-slate-700 font-mono text-right text-amber-300 font-bold">
                Opus API Subtotal: ${budgetOut.opusApiUsd.toLocaleString()}
              </div>
            </div>

            {/* Sonnet 4.5 / 4 */}
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2.5">
              <div className="font-mono font-bold text-sky-300">
                Claude Sonnet 4.5 / 4 ($3 In / $15 Out)
              </div>
              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span>{isAr ? 'توكنز الإدخال (Input):' : 'Input Tokens:'}</span>
                  <span className="font-mono font-bold">{sonnetInM}M</span>
                </div>
                <input
                  type="range"
                  min={50}
                  max={1200}
                  step={50}
                  value={sonnetInM}
                  onChange={(e) => setSonnetInM(Number(e.target.value))}
                  aria-label="Claude Sonnet Input Millions Tokens"
                  className="w-full accent-sky-400 cursor-pointer"
                />
              </div>
              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span>{isAr ? 'توكنز الإخراج (Output):' : 'Output Tokens:'}</span>
                  <span className="font-mono font-bold">{sonnetOutM}M</span>
                </div>
                <input
                  type="range"
                  min={20}
                  max={400}
                  step={10}
                  value={sonnetOutM}
                  onChange={(e) => setSonnetOutM(Number(e.target.value))}
                  aria-label="Claude Sonnet Output Millions Tokens"
                  className="w-full accent-sky-400 cursor-pointer"
                />
              </div>
              <div className="pt-1 border-t border-slate-700 font-mono text-right text-sky-300 font-bold">
                Sonnet API Subtotal: ${budgetOut.sonnetApiUsd.toLocaleString()}
              </div>
            </div>

            {/* Haiku 3.5 */}
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2.5">
              <div className="font-mono font-bold text-emerald-300">
                Claude Haiku 3.5 ($0.80 In / $4.00 Out)
              </div>
              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span>{isAr ? 'توكنز الإدخال (Input):' : 'Input Tokens:'}</span>
                  <span className="font-mono font-bold">{haikuInM}M</span>
                </div>
                <input
                  type="range"
                  min={100}
                  max={2000}
                  step={100}
                  value={haikuInM}
                  onChange={(e) => setHaikuInM(Number(e.target.value))}
                  aria-label="Claude Haiku Input Millions Tokens"
                  className="w-full accent-emerald-400 cursor-pointer"
                />
              </div>
              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span>{isAr ? 'توكنز الإخراج (Output):' : 'Output Tokens:'}</span>
                  <span className="font-mono font-bold">{haikuOutM}M</span>
                </div>
                <input
                  type="range"
                  min={25}
                  max={500}
                  step={25}
                  value={haikuOutM}
                  onChange={(e) => setHaikuOutM(Number(e.target.value))}
                  aria-label="Claude Haiku Output Millions Tokens"
                  className="w-full accent-emerald-400 cursor-pointer"
                />
              </div>
              <div className="pt-1 border-t border-slate-700 font-mono text-right text-emerald-300 font-bold">
                Haiku API Subtotal: ${budgetOut.haikuApiUsd.toLocaleString()}
              </div>
            </div>

            {/* Prompt Cache Hit Ratio & Separate Team Plan Seats */}
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2.5">
              <div className="font-mono font-bold text-purple-300">
                {isAr ? 'التخزين المؤقت + خطة الفريق المنفصلة' : 'Prompt Cache + Separate Team Plan'}
              </div>
              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span>{isAr ? 'نسبة إصابة Cache (خصم 90%):' : 'Prompt Cache Hit Ratio:'}</span>
                  <span className="font-mono font-bold">{Math.round(cacheHitRatio * 100)}%</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={0.8}
                  step={0.05}
                  value={cacheHitRatio}
                  onChange={(e) => setCacheHitRatio(Number(e.target.value))}
                  aria-label="Prompt Cache Hit Ratio"
                  className="w-full accent-purple-400 cursor-pointer"
                />
              </div>
              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span>{isAr ? 'مقاعد Team Premium ($15/شهر):' : 'Team Premium Seats ($15/mo):'}</span>
                  <span className="font-mono font-bold">{teamPremiumSeats} seats</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={10}
                  step={1}
                  value={teamPremiumSeats}
                  onChange={(e) => setTeamPremiumSeats(Number(e.target.value))}
                  aria-label="Claude Team Plan Premium Seats"
                  className="w-full accent-purple-400 cursor-pointer"
                />
              </div>
              <div className="pt-1 border-t border-slate-700 font-mono text-right text-purple-300 text-[11px]">
                Separate Team Plan (6m): ${budgetOut.teamPlanSeparateSubscriptionUsd} (5 Std Seats = $0)
              </div>
            </div>
          </div>

          {/* Summary Bar */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono text-slate-400">
                {isAr
                  ? 'إجمالي أرصدة Program B (Anthropic AI for Science API Credits — نافذة 6 أشهر):'
                  : 'Total Program B Request (Anthropic AI for Science API Credits — 6-Month Window):'}
              </div>
              <div className="text-2xl font-bold font-mono text-white mt-0.5">
                ${budgetOut.totalApiCreditsUsd.toLocaleString()} USD{' '}
                <span className="text-xs font-normal text-slate-400">/ $20,000 Max Program Ceiling</span>
              </div>
              <div className="text-xs font-mono text-emerald-400 mt-1">
                {isAr ? budgetOut.scenarioLabelAr : budgetOut.scenarioLabelEn}
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold mb-1">
                <ShieldCheck className="w-4 h-4" />
                {isAr ? 'التحقق من السقف الرسمي:' : 'Official Ceiling Check:'}
              </div>
              <div>
                {budgetOut.withinAiForScience20kCeiling
                  ? isAr
                    ? 'متوافق تماماً مع سقف 20,000 دولار لبرنامج AI for Science (6 أشهر).'
                    : 'Compliant with the $20,000 / 6-month Anthropic AI for Science API ceiling.'
                  : isAr
                    ? 'تنبيه: يتجاوز سقف 20,000 دولار — يرجى تقليل حجم التوكنز.'
                    : 'Warning: Exceeds $20,000 ceiling — reduce token volume or increase cache hit rate.'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
