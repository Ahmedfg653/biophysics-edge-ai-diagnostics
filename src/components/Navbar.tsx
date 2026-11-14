import React from 'react';
import { Globe, ShieldAlert } from 'lucide-react';
import type { Language } from '../utils/biophysicsMath';

interface NavbarProps {
  lang: Language;
  onToggleLanguage: (nextLang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLanguage }) => {
  const isAr = lang === 'ar';

  const navItems = [
    {
      href: '#evidence-audit',
      label: isAr ? 'مصفوفة التدقيق (12)' : 'Audit Matrix (12)',
    },
    {
      href: '#simulators',
      label: isAr ? 'المختبرات الاصطناعية' : 'Synthetic Labs',
    },
    {
      href: '#anthropic',
      label: isAr ? 'برامج Anthropic والميزانية' : 'Anthropic & Budget',
    },
    {
      href: '#supervision',
      label: isAr ? 'الفريق وإشراف FA-HISTS' : 'Team & FA-HISTS',
    },
    {
      href: '#codebase',
      label: isAr ? 'معمارية C++17 / Kotlin' : 'C++17 & Kotlin',
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 lg:px-8">
        {/* Brand Identity + Audited Academic Roles */}
        <a href="#top" className="flex flex-col text-start group min-w-0">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-100 text-amber-950 border border-amber-300 font-mono text-[10px] font-bold uppercase shrink-0">
              <ShieldAlert className="w-3 h-3 text-amber-800" />
              {isAr ? 'نموذج بحثي فقط' : 'RESEARCH PROTOTYPE'}
            </span>
            <span className="text-xs font-bold tracking-tight text-[#0F172A] group-hover:text-[#0284C7] transition-colors truncate">
              {isAr
                ? 'أحمد الشال · إشراف: د. هيام عبد المرضي و د. أسامة حلمي'
                : 'Ahmed Elshal · Advisors: Dr. Hayam Abd El-Mardy & Dr. Osama Helmy'}
            </span>
          </div>
          <span className="text-[10.5px] font-medium text-slate-600 mt-0.5 truncate">
            {isAr
              ? 'شعبة علوم الحاسب — معهد المستقبل العالي للدراسات التكنولوجية المتخصصة (FA-HISTS)'
              : 'Computer Science Dept. — Higher Future Institute for Specialized Technological Studies (FA-HISTS)'}
          </span>
        </a>

        {/* Primary Navigation Links */}
        <nav
          aria-label={isAr ? 'التنقل الرئيسي' : 'Primary navigation'}
          className="hidden xl:flex items-center gap-3.5 shrink-0"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-semibold text-slate-700 hover:text-[#0284C7] transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Language Toggle & Grant Dossier CTA */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            id="lang-toggle-btn"
            onClick={() => onToggleLanguage(isAr ? 'en' : 'ar')}
            aria-label={isAr ? 'Switch to English' : 'التبديل إلى العربية'}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-slate-50 hover:bg-slate-100 px-2.5 py-1.5 text-xs font-mono font-bold text-slate-900 transition cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5 text-blue-800" />
            <span>{isAr ? 'EN' : 'AR / العربية'}</span>
          </button>

          <a
            href="#grant-package"
            className="inline-flex items-center justify-center rounded-lg bg-[#0F172A] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#1E293B] transition-colors whitespace-nowrap"
          >
            {isAr ? 'ملف المنحة' : 'Grant Dossier'}
          </a>
        </div>
      </div>
    </header>
  );
};
