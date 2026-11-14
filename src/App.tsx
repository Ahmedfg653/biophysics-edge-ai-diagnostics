/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroGrantPitch } from './components/HeroGrantPitch';
import { EvidenceAuditSection } from './components/EvidenceAuditSection';
import { AnthropicJustification } from './components/AnthropicJustification';
import { HardwareAuditSection } from './components/HardwareAuditSection';
import { LiveSimulatorsLab } from './components/LiveSimulatorsLab';
import { MathEncyclopedia } from './components/MathEncyclopedia';
import { VulnerabilitiesMatrix } from './components/VulnerabilitiesMatrix';
import { CodebaseExplorer } from './components/CodebaseExplorer';
import { ClinicalProtocolSection } from './components/ClinicalProtocolSection';
import { GrantApplicationPackage } from './components/GrantApplicationPackage';
import { InstitutionalSupervisionSection } from './components/InstitutionalSupervisionSection';
import { ExecutionWorkflowSection } from './components/ExecutionWorkflowSection';
import { HumanitarianCrisisSection } from './components/HumanitarianCrisisSection';
import { OpenSciencePublicGoodsSection } from './components/OpenSciencePublicGoodsSection';
import { AnatomicalOrganAtlasSection } from './components/AnatomicalOrganAtlasSection';
import { FutureBiomarkersHorizonSection } from './components/FutureBiomarkersHorizonSection';
import { BinaryMemoryArchitectureSection } from './components/BinaryMemoryArchitectureSection';
import { BenchmarkComparisonsSection } from './components/BenchmarkComparisonsSection';
import type { Language } from './utils/biophysicsMath';

export default function App() {
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="top" className="min-h-screen overflow-x-clip bg-white text-[#0F172A]" data-lang={lang}>
      <Navbar lang={lang} onToggleLanguage={setLang} />
      <main>
        <HeroGrantPitch
          lang={lang}
          onJumpToSimulators={() => scrollToSection('simulators')}
          onJumpToGrantPackage={() => scrollToSection('anthropic')}
        />
        <EvidenceAuditSection lang={lang} />
        <LiveSimulatorsLab lang={lang} />
        <ClinicalProtocolSection lang={lang} />
        <BinaryMemoryArchitectureSection lang={lang} />
        <HardwareAuditSection lang={lang} />
        <BenchmarkComparisonsSection lang={lang} />
        <AnthropicJustification lang={lang} />
        <InstitutionalSupervisionSection lang={lang} />
        <OpenSciencePublicGoodsSection lang={lang} />
        <HumanitarianCrisisSection lang={lang} />
        <AnatomicalOrganAtlasSection lang={lang} />
        <FutureBiomarkersHorizonSection lang={lang} />
        <MathEncyclopedia lang={lang} />
        <VulnerabilitiesMatrix lang={lang} />
        <CodebaseExplorer lang={lang} />
        <ExecutionWorkflowSection lang={lang} />
        <GrantApplicationPackage lang={lang} />
      </main>
      <footer className="border-t border-slate-200 bg-[#F8FAFC] py-8 text-xs text-slate-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-1.5">
            <p className="text-amber-900 font-mono font-bold uppercase">
              {lang === 'en'
                ? 'RESEARCH PROTOTYPE ONLY — NOT FOR MEDICAL DIAGNOSIS OR TREATMENT DECISIONS · Clinical validation has not yet been conducted (0 clinically validated claims).'
                : 'نموذج بحثي أولي فقط — غير مخصص للتشخيص الطبي أو اتخاذ القرارات العلاجية · لم يُجرَ أي تحقق سريري على البشر حتى الآن.'}
            </p>
            <p className="text-[#0F172A] font-bold">
              {lang === 'en'
                ? 'Lead Student Researcher & Prototype Developer: Ahmed Elshal (ORCID: 0009-0009-2697-1139) · Academic Advisors / Faculty Mentors: Dr. Hayam Abd El-Mardy & Dr. Osama Helmy'
                : 'الباحث الطلابي الرئيسي ومطور النموذج: أحمد الشال (ORCID: 0009-0009-2697-1139) · الإشراف الأكاديمي والتوجيه العلمي: د. هيام عبد المرضي و د. أسامة حلمي'}
            </p>
            <p>
              {lang === 'en'
                ? 'Computer Science Dept., Higher Future Institute for Specialized Technological Studies (Future Academy / FA-HISTS, Cairo, Egypt) · Dell EMC & Huawei ICT Academy are institutional curriculum memberships, not project sponsors.'
                : 'قسم علوم الحاسب، معهد المستقبل العالي للدراسات التكنولوجية المتخصصة (أكاديمية المستقبل FA-HISTS، القاهرة) · عضوية Dell EMC وHuawei ICT هي شراكات مناهج تدريبية للمعهد وليست جهات راعية للمشروع.'}
            </p>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-1 shrink-0">
            <p dir="ltr" className="font-mono font-semibold text-blue-900">
              Apache-2.0 Open-Science Reference Code · On-Device Processing in Tested Workflows
            </p>
            <div className="flex items-center gap-3 font-mono text-[11px]">
              <a href="/research-brief-2026-11-14.html" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                Printable Research Brief (HTML/PDF)
              </a>
              <span>·</span>
              <a href="/source-audit-matrix-2026-11-14.json" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                Source Audit Matrix (JSON)
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
