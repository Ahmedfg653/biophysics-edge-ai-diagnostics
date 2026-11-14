import React from 'react';
import { SUPERVISION_BANNER } from '../data/bilingualContent';
import type { Language } from '../utils/biophysicsMath';

interface NavbarProps {
  lang: Language;
}

export const Navbar: React.FC<NavbarProps> = ({ lang }) => {
  const navItems = [
    {
      href: '#humanitarian',
      label: lang === 'en' ? 'Global Crisis' : 'الأزمة العالمية',
    },
    {
      href: '#supervision',
      label: lang === 'en' ? 'Faculty & FA-HISTS' : 'هيئة الإشراف والمعهد',
    },
    {
      href: '#public-goods',
      label: lang === 'en' ? 'Public Goods' : 'المنافع العلمية المفتوحة',
    },
    {
      href: '#simulators',
      label: lang === 'en' ? 'Live Simulators' : 'المحاكيات الحية',
    },
    {
      href: '#codebase',
      label: lang === 'en' ? 'C++17 & Kotlin' : 'الأكواد التنفيذية',
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand Identity + Official Faculty Supervision Line */}
        <a href="#top" className="flex flex-col text-start group min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold tracking-tight text-[#0F172A] group-hover:text-[#0284C7] transition-colors truncate">
              {lang === 'en'
                ? 'Ahmed Elshal · Dr. Hayam Abd El-Mardy · Dr. Osama Helmy'
                : 'أحمد الشال · د. هيام عبد المرضي · د. أسامة حلمي'}
            </span>
          </div>
          <span className="text-[11px] font-medium text-[#0284C7] truncate">
            {SUPERVISION_BANNER.supervisionStatement[lang]}
          </span>
        </a>

        {/* Single Top Bar Navigation (5 links max, single-line labels) */}
        <nav
          aria-label={lang === 'en' ? 'Primary navigation' : 'التنقل الرئيسي'}
          className="hidden lg:flex items-center gap-6"
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

        {/* Single Primary CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#grant-package"
            className="inline-flex items-center justify-center rounded-md bg-[#0F172A] px-3.5 py-2 text-xs font-semibold text-white hover:bg-[#1E293B] transition-colors whitespace-nowrap"
          >
            {lang === 'en' ? 'Anthropic Grant Package' : 'ملف التقديم لمنحة Anthropic'}
          </a>
        </div>
      </div>
    </header>
  );
};
