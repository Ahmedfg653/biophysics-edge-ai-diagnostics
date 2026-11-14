import React, { useState } from 'react';
import {
  Building2,
  Check,
  Clock,
  Copy,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  UserCheck,
} from 'lucide-react';
import { FACULTY_SUPERVISORS_DATA, INSTITUTIONAL_DIRECTORY } from '../data/bilingualContent';
import type { Language } from '../utils/biophysicsMath';

interface InstitutionalSupervisionSectionProps {
  lang: Language;
}

export const InstitutionalSupervisionSection: React.FC<InstitutionalSupervisionSectionProps> = ({
  lang,
}) => {
  const [copiedCard, setCopiedCard] = useState(false);

  const handleCopyCard = async () => {
    try {
      await navigator.clipboard.writeText(INSTITUTIONAL_DIRECTORY.copyCardText[lang]);
      setCopiedCard(true);
      window.setTimeout(() => setCopiedCard(false), 2600);
    } catch {
      setCopiedCard(false);
    }
  };

  return (
    <section
      id="supervision"
      className="border-b border-slate-200 bg-white py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header + Copy Institutional Verification Card CTA */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-bold tracking-wider text-[#D97757] uppercase">
              {lang === 'en'
                ? 'INSTITUTIONAL GOVERNANCE · OFFICIAL FACULTY SUPERVISION & VERIFIED DIRECTORY'
                : 'الهوية المؤسسية · هيئة الإشراف الأكاديمي الرسمي وطرق التواصل المعتمدة مع المعهد'}
            </p>
            <h2 className="mt-2 font-serif-editorial text-2xl font-bold text-[#0F172A] sm:text-3xl [text-wrap:balance]">
              {INSTITUTIONAL_DIRECTORY.name[lang]}
            </h2>
            <p className="mt-2 text-sm font-semibold text-[#0284C7]">
              {INSTITUTIONAL_DIRECTORY.researcher[lang]}
            </p>
          </div>

          <button
            type="button"
            data-testid="copy-institutional-card"
            onClick={handleCopyCard}
            className="inline-flex items-center justify-center gap-2 self-start rounded-md bg-[#0F172A] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#1E293B] whitespace-nowrap shrink-0"
          >
            {copiedCard ? (
              <>
                <Check className="h-4 w-4" aria-hidden="true" />
                {lang === 'en'
                  ? 'Institutional Verification Card Copied'
                  : 'تم نسخ بطاقة الاعتماد والتواصل المؤسسي'}
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" aria-hidden="true" />
                {lang === 'en'
                  ? 'Copy Institutional Verification Card'
                  : 'نسخ بطاقة الاعتماد والتواصل المؤسسي للمعهد'}
              </>
            )}
          </button>
        </div>

        {/* Principal Investigator & Faculty Co-PIs Supervision Roster */}
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {FACULTY_SUPERVISORS_DATA.map((member) => (
            <article
              key={member.id}
              data-testid={`supervisor-card-${member.id}`}
              className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-6"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-[#0284C7]">
                <UserCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{member.roleBadge[lang]}</span>
              </div>
              <h3 className="mt-2 font-serif-editorial text-lg font-bold text-[#0F172A]">
                {member.name[lang]}
              </h3>
              <p className="mt-1 text-xs font-semibold text-slate-700">
                {member.academicTitle[lang]}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                {member.department[lang]}
              </p>
              <p className="mt-3 border-t border-slate-200 pt-3 text-xs leading-relaxed text-[#1E293B]">
                {member.supervisionScope[lang]}
              </p>
            </article>
          ))}
        </div>

        {/* 2-Column Institutional Accreditation & Verified Contact Directory */}
        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          {/* Card 1: Legal Accreditation, Academic System & Global Tech Alliances */}
          <article className="lg:col-span-6 rounded-xl border border-slate-200 bg-[#F8FAFC] p-6">
            <div className="flex items-center gap-2.5 text-xs font-bold tracking-wider text-[#0284C7]">
              <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>
                {lang === 'en'
                  ? 'MINISTRY ACCREDITATION & ACADEMIC STRUCTURE'
                  : 'الاعتماد الوزاري والنظام الأكاديمي والشراكات التقنية'}
              </span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[#1E293B]">
              {INSTITUTIONAL_DIRECTORY.accreditation[lang]}
            </p>

            <dl className="mt-6 space-y-4 border-t border-slate-200 pt-5 text-sm">
              <div>
                <dt className="flex items-center gap-2 text-xs font-bold text-slate-600">
                  <GraduationCap className="h-4 w-4 text-[#D97757] shrink-0" aria-hidden="true" />
                  <span>{lang === 'en' ? 'Academic Degree System' : 'النظام الدراسي والدرجات'}</span>
                </dt>
                <dd className="mt-1 text-[#0F172A]">
                  {INSTITUTIONAL_DIRECTORY.academicSystem[lang]}
                </dd>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-200 bg-white p-3.5">
                  <dt className="text-xs font-semibold text-slate-500">
                    {lang === 'en' ? 'Egyptian Coordination Code' : 'رقم طابع التنسيق الرسمي'}
                  </dt>
                  <dd dir="ltr" className="mt-1 font-mono text-lg font-bold text-[#0F172A] tabular-nums">
                    {INSTITUTIONAL_DIRECTORY.coordinationCode}
                  </dd>
                </div>

                <div className="rounded-lg border border-slate-200 bg-white p-3.5">
                  <dt className="text-xs font-semibold text-slate-500">
                    {lang === 'en' ? 'Global Industry Academies' : 'الشراكات التكنولوجية الدولية'}
                  </dt>
                  <dd dir="ltr" className="mt-1 font-mono text-xs font-bold text-[#059669]">
                    {INSTITUTIONAL_DIRECTORY.partnerships.join(' · ')}
                  </dd>
                </div>
              </div>

              <div>
                <dt className="flex items-center gap-2 text-xs font-bold text-slate-600">
                  <MapPin className="h-4 w-4 text-[#0284C7] shrink-0" aria-hidden="true" />
                  <span>{lang === 'en' ? 'Official Campus Address' : 'العنوان الرسمي للمعهد'}</span>
                </dt>
                <dd className="mt-1 text-[#0F172A]">{INSTITUTIONAL_DIRECTORY.address[lang]}</dd>
              </div>

              <div>
                <dt className="flex items-center gap-2 text-xs font-bold text-slate-600">
                  <Clock className="h-4 w-4 text-slate-500 shrink-0" aria-hidden="true" />
                  <span>{lang === 'en' ? 'Official Working Hours' : 'مواعيد العمل الرسمية'}</span>
                </dt>
                <dd className="mt-1 text-slate-700">{INSTITUTIONAL_DIRECTORY.workingHours[lang]}</dd>
              </div>
            </dl>
          </article>

          {/* Card 2: Clickable Verified Communication & Portals */}
          <article className="lg:col-span-6 rounded-xl border border-slate-200 bg-[#F8FAFC] p-6">
            <div className="flex items-center gap-2.5 text-xs font-bold tracking-wider text-[#D97757]">
              <Building2 className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>
                {lang === 'en'
                  ? 'VERIFIED CONTACT CHANNELS & PORTALS (FOR REVIEWERS)'
                  : 'قنوات التواصل الرسمية والبوابات الرقمية (للمراجعة والتحقق)'}
              </span>
            </div>

            <div className="mt-5 space-y-4 text-sm">
              {/* Official Email */}
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="text-xs font-semibold text-slate-500">
                  {lang === 'en' ? 'Official Institutional Email' : 'البريد الإلكتروني الرسمي للمعهد'}
                </p>
                <a
                  dir="ltr"
                  href={`mailto:${INSTITUTIONAL_DIRECTORY.email}`}
                  className="mt-1.5 inline-flex items-center gap-2 font-mono text-sm font-bold text-[#0284C7] hover:underline"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{INSTITUTIONAL_DIRECTORY.email}</span>
                </a>
              </div>

              {/* Official Websites & SIS Portal */}
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="text-xs font-semibold text-slate-500">
                  {lang === 'en'
                    ? 'Official Website, Contact Portals & Student Information System (SIS)'
                    : 'الموقع الإلكتروني الرسمي، صفحات التواصل، وبوابة نظام معلومات الطلاب (SIS)'}
                </p>
                <div className="mt-2.5 grid gap-2 sm:grid-cols-2">
                  <a
                    dir="ltr"
                    href={INSTITUTIONAL_DIRECTORY.websiteMain}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between gap-2 rounded-md border border-slate-200 bg-[#F8FAFC] px-3 py-2 font-mono text-xs font-semibold text-[#0F172A] transition-colors hover:border-[#0284C7] hover:text-[#0284C7]"
                  >
                    <span className="truncate">futureacademyegypt.com</span>
                    <ExternalLink className="h-3.5 w-3.5 text-[#0284C7] shrink-0" aria-hidden="true" />
                  </a>
                  <a
                    dir="ltr"
                    href={INSTITUTIONAL_DIRECTORY.sisPortal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between gap-2 rounded-md border border-slate-200 bg-[#F8FAFC] px-3 py-2 font-mono text-xs font-semibold text-[#0F172A] transition-colors hover:border-[#0284C7] hover:text-[#0284C7]"
                  >
                    <span className="truncate">sis.fa-hists.edu.eg</span>
                    <ExternalLink className="h-3.5 w-3.5 text-[#0284C7] shrink-0" aria-hidden="true" />
                  </a>
                  <a
                    dir="ltr"
                    href={INSTITUTIONAL_DIRECTORY.websiteContactEn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between gap-2 rounded-md border border-slate-200 bg-[#F8FAFC] px-3 py-2 font-mono text-xs font-semibold text-slate-700 transition-colors hover:border-[#D97757] hover:text-[#0F172A]"
                  >
                    <span className="truncate">/en/contact-us</span>
                    <ExternalLink className="h-3.5 w-3.5 text-[#D97757] shrink-0" aria-hidden="true" />
                  </a>
                  <a
                    dir="ltr"
                    href={INSTITUTIONAL_DIRECTORY.websiteContactAr}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between gap-2 rounded-md border border-slate-200 bg-[#F8FAFC] px-3 py-2 font-mono text-xs font-semibold text-slate-700 transition-colors hover:border-[#D97757] hover:text-[#0F172A]"
                  >
                    <span className="truncate">/ar/contact-us</span>
                    <ExternalLink className="h-3.5 w-3.5 text-[#D97757] shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Phones, WhatsApp/Viber & Landlines */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-xs font-semibold text-slate-500">
                    {lang === 'en' ? 'Mobile & WhatsApp / Viber' : 'أرقام المحمول وواتساب / فايبر'}
                  </p>
                  <ul className="mt-2 space-y-1.5 font-mono text-xs tabular-nums">
                    {INSTITUTIONAL_DIRECTORY.mobiles.map((num) => (
                      <li key={num}>
                        <a
                          dir="ltr"
                          href={`tel:${num.replace(/[^+\d]/g, '')}`}
                          className="inline-flex items-center gap-2 font-semibold text-[#0F172A] hover:text-[#0284C7]"
                        >
                          <Phone className="h-3.5 w-3.5 text-[#0284C7] shrink-0" aria-hidden="true" />
                          <span>{num}</span>
                        </a>
                      </li>
                    ))}
                    <li className="pt-1 font-semibold text-[#059669]">
                      <span className="text-slate-500 mr-1.5">WA/Viber:</span>
                      <a
                        dir="ltr"
                        href={`tel:${INSTITUTIONAL_DIRECTORY.whatsappViber.replace(/[^+\d]/g, '')}`}
                        className="hover:underline"
                      >
                        {INSTITUTIONAL_DIRECTORY.whatsappViber}
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-xs font-semibold text-slate-500">
                    {lang === 'en' ? 'Campus Landlines & Fax' : 'الهواتف الأرضية والفاكس'}
                  </p>
                  <ul className="mt-2 space-y-1.5 font-mono text-xs tabular-nums">
                    {INSTITUTIONAL_DIRECTORY.landlinesAndFax.map((num) => (
                      <li key={num}>
                        <a
                          dir="ltr"
                          href={`tel:${num.replace(/[^+\d]/g, '')}`}
                          className="inline-flex items-center gap-2 font-semibold text-[#0F172A] hover:text-[#D97757]"
                        >
                          <Phone className="h-3.5 w-3.5 text-[#D97757] shrink-0" aria-hidden="true" />
                          <span>{num}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
