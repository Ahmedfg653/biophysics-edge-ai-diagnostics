import React from 'react';
import katex from 'katex';
import { Sparkles } from 'lucide-react';
import { FUTURE_PREDICTIVE_BIOMARKERS_6 } from '../data/monographAdditiveExpansion';
import type { Language } from '../utils/biophysicsMath';

interface FutureBiomarkersHorizonSectionProps {
  lang: Language;
}

const KatexSignature: React.FC<{ tex: string }> = ({ tex }) => {
  const html = katex.renderToString(tex, {
    displayMode: true,
    throwOnError: false,
    strict: false,
  });
  return (
    <div
      dir="ltr"
      className="my-3 overflow-x-auto rounded-lg border border-slate-200 bg-[#F8FAFC] px-3.5 py-2.5 text-left text-[#0F172A]"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export const FutureBiomarkersHorizonSection: React.FC<FutureBiomarkersHorizonSectionProps> = ({
  lang,
}) => {
  return (
    <section
      id="future-biomarkers"
      data-testid="future-biomarkers-section"
      className="border-b border-slate-200 bg-[#F8FAFC] py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-wider text-[#D97757] uppercase">
            <Sparkles className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>
              {lang === 'en'
                ? 'SECTION 02-B · BEYOND THE INITIAL 5 CONDITIONS: HOW ANTHROPIC CLAUDE FRONTIER MODELS ENABLE DISCOVERY OF 6 NEW NON-INVASIVE PREDICTIVE BIOMARKERS'
                : 'القسم 02-B · الأفق المستقبلي — 6 أمراض ومؤشرات حيوية جديدة سيساعدنا نموذج Anthropic Claude في اكتشافها والتنبؤ بها مبكراً'}
            </span>
          </div>
          <h2 className="mt-2 font-serif-editorial text-2xl font-bold text-[#0F172A] sm:text-3xl [text-wrap:balance]">
            {lang === 'en'
              ? 'Unlocking Latent Cross-Modal Biophysical Signatures Across Optical, Acoustic, and Inertial Streams via Claude Opus 5.5, Sonnet 5.5 & Claude Code'
              : 'استكشاف الأنماط الفيزيائية الحيوية الخفية متعددة الوسائط عبر قدرات الاستدلال العلمي العميق ونافذة المليون توكن في نماذج Claude'}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#1E293B] sm:text-base">
            {lang === 'en'
              ? 'With Anthropic AI for Science API credits, our faculty-supervised research team extends the existing C++17 DSP and LiteRT 2.x infrastructure to discover and validate six high-impact predictive biomarkers—identifying neurological, cardiorenal, and maternal emergencies months or years before overt clinical decompensation.'
              : 'من خلال منحة الحوسبة من برنامج Anthropic AI for Science، يوسع فريقنا البحثي بإشراف د. هيام عبد المرضي ود. أسامة حلمي بنية النظام الحالية لاكتشاف والتحقق من 6 مؤشرات حيوية تنبؤية غير جراحية تكشف الأمراض العصبية والقلبية والكلوية وتسمم الحمل قبل ظهور الأعراض السريرية المتأخرة.'}
          </p>
        </div>

        {/* 6 Future Biomarker Cards */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {FUTURE_PREDICTIVE_BIOMARKERS_6.map((item) => (
            <article
              key={item.id}
              data-testid={`future-biomarker-${item.id}`}
              className="min-w-0 flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-2xs"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-xs font-bold text-[#0284C7]">
                    HORIZON BIOMARKER #{item.number}
                  </span>
                  <span className="rounded border border-amber-200 bg-amber-50 px-2.5 py-0.5 font-mono text-[11px] font-bold text-[#D97757]">
                    {item.clinicalUrgencyBadge[lang]}
                  </span>
                </div>

                <h3 className="mt-2 font-serif-editorial text-lg font-bold text-[#0F172A]">
                  {item.diseaseTitle[lang]}
                </h3>

                <p dir="ltr" className="mt-1 font-mono text-[11px] font-semibold text-slate-500">
                  Sensors: {item.sensorsFused}
                </p>

                <KatexSignature tex={item.mathematicalSignatureLatex} />

                <p className="text-xs sm:text-sm leading-relaxed text-[#1E293B]">
                  <span className="font-bold text-[#0F172A]">
                    {lang === 'en' ? 'Biophysical Mechanism: ' : 'آلية الاكتشاف الفيزيائي الحيوي: '}
                  </span>
                  {item.biophysicalDiscoveryMechanism[lang]}
                </p>
              </div>

              <div className="mt-4 rounded-lg border border-sky-200 bg-sky-50/60 p-3.5">
                <p dir="ltr" className="font-mono text-[11px] font-bold text-[#0284C7]">
                  {item.claudeModelRole}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[#1E293B]">
                  {item.claudeComputationalContribution[lang]}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
