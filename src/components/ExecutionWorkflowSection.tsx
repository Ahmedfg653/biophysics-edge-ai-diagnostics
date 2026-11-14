import React, { useState } from 'react';
import { Cpu, GitBranch, Presentation } from 'lucide-react';
import { DEMO_SCRIPT_10MIN, EXECUTION_WORKFLOW_STEPS } from '../data/bilingualContent';
import type { Language } from '../utils/biophysicsMath';

interface ExecutionWorkflowSectionProps {
  lang: Language;
}

type WorkflowView = 'steps' | 'claude-map' | 'demo-script';

export const ExecutionWorkflowSection: React.FC<ExecutionWorkflowSectionProps> = ({ lang }) => {
  const [activeView, setActiveView] = useState<WorkflowView>('steps');

  const tabs: Array<{ id: WorkflowView; icon: React.ReactNode; label: { en: string; ar: string } }> = [
    {
      id: 'steps',
      icon: <GitBranch className="h-4 w-4 shrink-0" aria-hidden="true" />,
      label: {
        en: '01. 5-Stage Engineering Pipeline',
        ar: '01. خطوات التنفيذ الهندسي (5 مراحل)',
      },
    },
    {
      id: 'claude-map',
      icon: <Cpu className="h-4 w-4 shrink-0" aria-hidden="true" />,
      label: {
        en: '02. How Anthropic Claude Accelerates Each Stage',
        ar: '02. دور نماذج Anthropic Claude في كل مرحلة',
      },
    },
    {
      id: 'demo-script',
      icon: <Presentation className="h-4 w-4 shrink-0" aria-hidden="true" />,
      label: {
        en: '03. 10-Minute Live Presentation Script',
        ar: '03. دليل العرض والتقديم في 10 دقائق',
      },
    },
  ];

  return (
    <section id="workflow" className="border-b border-slate-200 bg-[#F8FAFC] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-bold tracking-wider text-[#0284C7] uppercase">
            {lang === 'en'
              ? 'EXECUTION WORKFLOW & PRESENTATION GUIDE'
              : 'دليل التنفيذ الهندسي وخطة العرض الأكاديمي (10 دقائق)'}
          </p>
          <h2 className="mt-2 font-serif-editorial text-2xl font-bold text-[#0F172A] sm:text-3xl [text-wrap:balance]">
            {lang === 'en'
              ? 'Step-by-Step Engineering Roadmap, Claude Integration & 10-Minute Committee Pitch'
              : 'خارطة التنفيذ خطوة بخطوة، تكامل نماذج Claude، وسيناريو العرض للجنة العلمية'}
          </h2>
        </div>

        {/* Interactive Tab Switcher */}
        <div
          role="tablist"
          aria-label={lang === 'en' ? 'Execution workflow views' : 'تبويبات خطة التنفيذ والعرض'}
          className="mt-8 flex flex-wrap gap-3"
        >
          {tabs.map((tab) => {
            const active = activeView === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                data-testid={`workflow-tab-${tab.id}`}
                aria-selected={active}
                onClick={() => setActiveView(tab.id)}
                className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-xs font-semibold transition-colors ${
                  active
                    ? 'border-[#0F172A] bg-[#0F172A] text-white'
                    : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:text-[#0F172A]'
                }`}
              >
                {tab.icon}
                <span>{tab.label[lang]}</span>
              </button>
            );
          })}
        </div>

        {/* View 1: 5 Engineering Execution Steps */}
        {activeView === 'steps' && (
          <div className="mt-8 grid gap-5 lg:grid-cols-5">
            {EXECUTION_WORKFLOW_STEPS.map((item) => (
              <article
                key={item.stepNumber}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs font-mono">
                    <span className="font-bold text-[#0284C7]">STAGE {item.stepNumber}</span>
                    <span className="text-slate-500 font-semibold tabular-nums">{item.duration}</span>
                  </div>
                  <h3 className="mt-3 text-sm font-bold leading-snug text-[#0F172A]">
                    {item.phase[lang]}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-[#1E293B]">
                    {item.engineeringFocus[lang]}
                  </p>
                </div>

                <div className="mt-5 border-t border-slate-200 pt-3">
                  <p className="text-[11px] font-semibold text-slate-500">
                    {lang === 'en' ? 'Primary Deliverable' : 'المخرج التنفيذي'}
                  </p>
                  <p dir="ltr" className="mt-1 font-mono text-[11px] font-bold text-[#059669] break-words">
                    {item.deliverableArtifact}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* View 2: Claude Acceleration Matrix across the 5 Steps */}
        {activeView === 'claude-map' && (
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {EXECUTION_WORKFLOW_STEPS.map((item) => (
              <article
                key={item.stepNumber}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-2xs"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs font-bold text-[#D97757]">
                    STAGE {item.stepNumber}
                  </span>
                  <span dir="ltr" className="font-mono text-xs font-semibold text-[#0284C7]">
                    {item.claudeModelsUsed}
                  </span>
                </div>
                <h3 className="mt-2 text-base font-bold text-[#0F172A]">{item.phase[lang]}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#1E293B]">
                  {item.claudeContribution[lang]}
                </p>
                <p dir="ltr" className="mt-4 border-t border-slate-200 pt-3 font-mono text-xs font-semibold text-slate-600">
                  {item.deliverableArtifact}
                </p>
              </article>
            ))}
          </div>
        )}

        {/* View 3: 10-Minute Live Academic & Grant Committee Presentation Script */}
        {activeView === 'demo-script' && (
          <div className="mt-8 space-y-4">
            {DEMO_SCRIPT_10MIN.map((cue) => (
              <article
                key={cue.timeRange}
                className="grid gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-2xs lg:grid-cols-12 lg:items-start"
              >
                <div className="lg:col-span-3">
                  <p dir="ltr" className="font-mono text-sm font-bold text-[#D97757] tabular-nums">
                    {cue.timeRange}
                  </p>
                  <h3 className="mt-1.5 text-sm font-bold text-[#0F172A]">
                    {cue.stageTitle[lang]}
                  </h3>
                </div>

                <div className="lg:col-span-4 rounded-lg border border-slate-200 bg-[#F8FAFC] p-4">
                  <p className="text-[11px] font-bold tracking-wider text-[#0284C7]">
                    {lang === 'en' ? 'LIVE ACTION ON SCREEN' : 'ما يتم تشغيله على الشاشة'}
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#1E293B]">
                    {cue.onScreenAction[lang]}
                  </p>
                </div>

                <div className="lg:col-span-5">
                  <p className="text-[11px] font-bold tracking-wider text-slate-500">
                    {lang === 'en'
                      ? 'TALKING POINTS (FUTURE ACADEMY + ANTHROPIC)'
                      : 'النقاط العلمية للعرض أمام معهد المستقبل ولجنة Anthropic'}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#1E293B]">
                    {cue.speakerScript[lang]}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
