import React from 'react';
import {
  GraduationCap,
  ShieldCheck,
  Building2,
  Mail,
  ExternalLink,
  AlertCircle,
  UserCheck,
  FileCheck2,
} from 'lucide-react';
import { Language } from '../utils/biophysicsMath';

interface Props {
  lang: Language;
}

export const InstitutionalSupervisionSection: React.FC<Props> = ({ lang }) => {
  const isAr = lang === 'ar';

  return (
    <section id="supervision" className="py-12 border-b border-slate-200 bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-900 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-4 h-4 text-blue-800" />
            {isAr
              ? 'الهيكل الأكاديمي والحوكمة البحثية وأخلاقيات البحث العلمي (القسم 6 من التدقيق)'
              : 'ACADEMIC GOVERNANCE, TEAM ROLES & IRB ETHICS DISCLOSURE (AUDIT SECTION 6)'}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-serif">
            {isAr
              ? 'الفريق البحثي والإشراف الأكاديمي بمعهد المستقبل العالي للدراسات التكنولوجية المتخصصة (FA-HISTS)'
              : 'Research Team Roles & Academic Mentorship at Higher Future Institute for Specialized Technological Studies (FA-HISTS)'}
          </h2>

          <p className="mt-2 text-sm text-slate-600 max-w-4xl leading-relaxed">
            {isAr
              ? 'عملاً بالقسم 6 من وثيقة التدقيق العلمي، يحدد هذا القسم بدقة وشفافية كاملة الأدوار الأكاديمية لكل عضو في الفريق، وحالة خطاب الاعتماد المؤسسي الرسمي للمنح التي تشترط باحثاً رئيسياً (PI)، وحالة موافقة لجنة أخلاقيات البحث العلمي (IRB)، وطبيعة الشراكات التدريبية للمعهد.'
              : 'In accordance with Audit Section 6, this section transparently defines the academic roles of the student researcher and faculty mentors, the status of formal institutional endorsement for PI-led grant tracks, the current IRB ethics status, and the exact scope of institutional training memberships.'}
          </p>
        </div>

        {/* Team Role Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Card 1: Lead Student Researcher */}
          <div className="p-5 rounded-2xl bg-white border-2 border-blue-900/20 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-1 rounded bg-blue-900 text-white font-mono text-[11px] font-bold">
                  {isAr ? 'الباحث الطلابي الرئيسي ومطور النموذج' : 'LEAD STUDENT RESEARCHER & DEVELOPER'}
                </span>
                <span className="font-mono text-[11px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  VERIFIED ORCID
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                {isAr ? 'أحمد الشال (Ahmed Elshal)' : 'Ahmed Elshal'}
              </h3>
              <p className="text-xs font-semibold text-blue-900 mt-1">
                {isAr
                  ? 'شعبة علوم الحاسب — معهد المستقبل العالي للدراسات التكنولوجية المتخصصة (FA-HISTS)'
                  : 'Computer Science Department — Higher Future Institute for Specialized Technological Studies (FA-HISTS)'}
              </p>

              <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                {isAr
                  ? 'مسؤول عن تصميم وتنفيذ النموذج البحثي التفاعلي، وكتابة دوال المحاكاة الرياضية واختبارات الوحدات (src/utils/biophysicsMath.ts)، ومخططات معمارية C++17 NDK / Kotlin لمعالجة إشارات rPPG وبوابات الامتناع الانتقائي.'
                  : 'Responsible for designing and implementing the interactive research prototype, mathematical signal generators and unit tests (src/utils/biophysicsMath.ts), and the C++17 NDK / Kotlin architectural blueprints for quality-gated rPPG.'}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-700">
                <Mail className="w-3.5 h-3.5 text-blue-800 shrink-0" />
                <a href="mailto:Ahmed.elshal224@gmail.com" className="hover:underline">
                  Ahmed.elshal224@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <ExternalLink className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <a
                  href="https://orcid.org/0009-0009-2697-1139"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-800 hover:underline"
                >
                  https://orcid.org/0009-0009-2697-1139
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Academic Advisor 1 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-1 rounded bg-slate-800 text-white font-mono text-[11px] font-bold">
                  {isAr ? 'إشراف أكاديمي وتوجيه علمي' : 'ACADEMIC ADVISOR / FACULTY MENTOR'}
                </span>
                <UserCheck className="w-4 h-4 text-slate-600" />
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                {isAr ? 'د. هيام عبد المرضي (Dr. Hayam Abd El-Mardy)' : 'Dr. Hayam Abd El-Mardy'}
              </h3>
              <p className="text-xs font-semibold text-slate-700 mt-1">
                {isAr
                  ? 'عضو هيئة التدريس بقسم علوم الحاسب — معهد المستقبل العالي للدراسات التكنولوجية المتخصصة (Future Academy / FA-HISTS)'
                  : 'Faculty Member, Computer Science Department — Higher Future Institute for Specialized Technological Studies (FA-HISTS)'}
              </p>

              <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                {isAr
                  ? 'التوجيه الأكاديمي والمنهجي لمشروع التخرج البحثي، ومراجعة منهجية التنبؤ الانتقائي (Selective Prediction) وبروتوكول التقييم الإحصائي المتوافق مع إرشادات TRIPOD+AI.'
                  : 'Academic mentorship and methodological guidance for the research project, reviewing the Selective Prediction framework and the TRIPOD+AI statistical validation protocol.'}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-amber-900 bg-amber-50/70 p-2.5 rounded-lg border border-amber-200">
              {isAr
                ? 'حالة الاعتماد الرسمي للمنح الخارجية: إشراف أكاديمي على المشروع؛ ويجري استكمال خطاب الترشيح المؤسسي الرسمي المكتوب قبل التقديم لأي مسار يشترط باحثاً رئيسياً (PI-led track).'
                : 'External Grant Endorsement Status: Academic faculty mentor; formal written institutional endorsement letter to be completed prior to any PI-led external grant submission.'}
            </div>
          </div>

          {/* Card 3: Academic Advisor 2 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-1 rounded bg-slate-800 text-white font-mono text-[11px] font-bold">
                  {isAr ? 'إشراف أكاديمي وتوجيه هندسي' : 'ACADEMIC ADVISOR / FACULTY MENTOR'}
                </span>
                <UserCheck className="w-4 h-4 text-slate-600" />
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                {isAr ? 'د. أسامة حلمي (Dr. Osama Helmy)' : 'Dr. Osama Helmy'}
              </h3>
              <p className="text-xs font-semibold text-slate-700 mt-1">
                {isAr
                  ? 'عضو هيئة التدريس بقسم علوم الحاسب — معهد المستقبل العالي للدراسات التكنولوجية المتخصصة (Future Academy / FA-HISTS)'
                  : 'Faculty Member, Computer Science Department — Higher Future Institute for Specialized Technological Studies (FA-HISTS)'}
              </p>

              <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                {isAr
                  ? 'الإشراف الأكاديمي على معمارية الأنظمة المدمجة، وتصميم أنابيب معالجة الإشارة الرقمية بلغة C++17، وتوافق الذاكرة مع متطلبات أندرويد 15+ (صفحات 16KB).'
                  : 'Academic mentorship on embedded systems architecture, C++17 digital signal processing pipeline design, and Android 15+ 16KB page-size memory compliance.'}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-amber-900 bg-amber-50/70 p-2.5 rounded-lg border border-amber-200">
              {isAr
                ? 'حالة الاعتماد الرسمي للمنح الخارجية: إشراف أكاديمي على المشروع؛ ويجري استكمال خطاب الترشيح المؤسسي الرسمي المكتوب قبل التقديم لأي مسار يشترط باحثاً رئيسياً (PI-led track).'
                : 'External Grant Endorsement Status: Academic faculty mentor; formal written institutional endorsement letter to be completed prior to any PI-led external grant submission.'}
            </div>
          </div>
        </div>

        {/* Institutional Governance, IRB Status, and Third-Party Brand Disclaimer (Section 6.2 & 6.3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
            <FileCheck2 className="w-5 h-5 text-blue-800 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-700 leading-relaxed">
              <strong className="block text-slate-900 font-bold mb-1">
                {isAr
                  ? 'الإفصاح الرسمي عن حالة لجنة أخلاقيات البحث العلمي (IRB / Ethics Status):'
                  : 'Official IRB / Human-Subjects Ethics Disclosure (Audit Section 6.2):'}
              </strong>
              {isAr
                ? 'لم يتم جمع أي بيانات سريرية مستقبلية من مرضى أو متطوعين، ولم تُجرَ أي تجربة سريرية بشرية حتى تاريخه. يقتصر العمل الحالي على المحاكاة الرياضية والتصميم المعماري. أي مرحلة مستقبلية لجمع بيانات فيديو أو إشارات فسيولوجية من متطوعين ستتطلب الحصول المسبق على موافقة رسمية مكتوبة من لجنة أخلاقيات البحث العلمي (IRB) وموافقة مستنيرة مكتوبة من كل مشارك.'
                : 'No prospective human-subject data collection or clinical trial has been conducted to date. Current repository work consists strictly of synthetic mathematical modeling and systems architecture. Any future human data collection will require prior formal Institutional Review Board (IRB) approval and written informed consent.'}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
            <Building2 className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-700 leading-relaxed">
              <strong className="block text-slate-900 font-bold mb-1">
                {isAr
                  ? 'بيان عدم الرعاية وإخلاء المسؤولية عن العلامات التجارية (Dell EMC / Huawei ICT):'
                  : 'Institutional Affiliation & Non-Endorsement Disclaimer (Audit Section 6.2):'}
              </strong>
              {isAr
                ? 'معهد المستقبل العالي للدراسات التكنولوجية المتخصصة (FA-HISTS — الكيلو 30 طريق مصر الإسماعيلية الصحراوي، القاهرة) هو المؤسسة الأكاديمية التي ينتمي إليها الفريق. إن الإشارة إلى Dell EMC Academic Alliance وHuawei ICT Academy تعبر فقط عن عضويات التدريب والمناهج الأكاديمية العامة للمعهد، ولا تعني بأي حال أن هاتين الشركتين ترعيان أو تمولان أو تصادقان على هذا النموذج البحثي.'
                : 'Higher Future Institute for Specialized Technological Studies (FA-HISTS, Km 30 Cairo–Ismailia Desert Road, Cairo, Egypt) is the academic home of the research team. Mentions of Dell EMC Academic Alliance and Huawei ICT Academy reflect general institutional curriculum memberships of Future Academy and do NOT imply sponsorship, funding, or endorsement of this research prototype by Dell, Huawei, or Anthropic.'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
