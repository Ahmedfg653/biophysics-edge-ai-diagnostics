/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroGrantPitch } from './components/HeroGrantPitch';
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

  return (
    <div className="min-h-screen overflow-x-clip bg-white text-[#0F172A]" data-lang={lang}>
      <Navbar lang={lang} />
      <main>
        <HeroGrantPitch lang={lang} onToggleLanguage={setLang} />
        <HumanitarianCrisisSection lang={lang} />
        <AnatomicalOrganAtlasSection lang={lang} />
        <InstitutionalSupervisionSection lang={lang} />
        <OpenSciencePublicGoodsSection lang={lang} />
        <AnthropicJustification lang={lang} />
        <FutureBiomarkersHorizonSection lang={lang} />
        <HardwareAuditSection lang={lang} />
        <BinaryMemoryArchitectureSection lang={lang} />
        <LiveSimulatorsLab lang={lang} />
        <MathEncyclopedia lang={lang} />
        <VulnerabilitiesMatrix lang={lang} />
        <BenchmarkComparisonsSection lang={lang} />
        <CodebaseExplorer lang={lang} />
        <ClinicalProtocolSection lang={lang} />
        <ExecutionWorkflowSection lang={lang} />
        <GrantApplicationPackage lang={lang} />
      </main>
      <footer className="border-t border-slate-200 bg-[#F8FAFC] py-8 text-xs text-slate-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-1">
            <p className="text-[#0F172A] font-bold">
              {lang === 'en'
                ? 'Principal Investigator: Ahmed Elshal · Faculty Supervisors (Co-PIs): Dr. Hayam Abd El-Mardy & Dr. Osama Helmy'
                : 'الباحث الرئيسي: أحمد الشال · الإشراف الأكاديمي والعلمي: د. هيام عبد المرضي و د. أسامة حلمي'}
            </p>
            <p>
              {lang === 'en'
                ? 'Computer Science Dept., Higher Future Institute for Specialized Technological Studies (Future Academy / FA-HISTS, Cairo) · MOHE License No. 1471 · Supreme Council Decree No. 359'
                : 'قسم علوم الحاسب، معهد المستقبل العالي للدراسات التكنولوجية المتخصصة (أكاديمية المستقبل FA-HISTS) · ترخيص وزارة التعليم العالي رقم 1471 · قرار المجلس الأعلى للجامعات رقم 359'}
            </p>
          </div>
          <p dir="ltr" className="font-mono font-semibold text-[#059669] shrink-0">
            Apache-2.0 Open-Science Public Goods · 100% On-Device Zero-Cloud Architecture
          </p>
        </div>
      </footer>
    </div>
  );
}
