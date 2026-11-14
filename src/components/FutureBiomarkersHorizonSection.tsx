import React from 'react';
import {
  Compass,
  AlertTriangle,
  FlaskConical,
} from 'lucide-react';
import { Language } from '../utils/biophysicsMath';
import { FUTURE_PREDICTIVE_BIOMARKERS_6 } from '../data/monographAdditiveExpansion';

interface Props {
  lang: Language;
}

export const FutureBiomarkersHorizonSection: React.FC<Props> = ({ lang }) => {
  const isAr = lang === 'ar';

  return (
    <section id="future-horizon" className="py-12 border-b border-slate-200 bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-100 border border-sky-300 text-sky-950 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Compass className="w-4 h-4 text-sky-800" />
            {isAr
              ? 'فرضيات أدبية مستقبلية غير منفذة (CONCEPTUAL LITERATURE HYPOTHESES — NOT IN V1 SCOPE)'
              : 'CONCEPTUAL LITERATURE HYPOTHESES ONLY — NOT IMPLEMENTED OR VALIDATED (AUDIT SECTION 1.3)'}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-serif">
            {isAr
              ? 'آفاق البحث المستقبلي طويلة المدى (خارج نطاق الإصدار الأول V1): فرضيات نظرية تتطلب دراسات سريرية مستقلة'
              : 'Long-Term Exploratory Research Hypotheses (Outside V1 Scope): Conceptual Ideas Requiring Dedicated Clinical Trials'}
          </h2>

          <p className="mt-2 text-sm text-slate-600 max-w-4xl leading-relaxed">
            {isAr
              ? 'عملاً بالقسم 1.3 و1.4 من التدقيق العلمي، تم فصل هذه المؤشرات الحيوية الستة (إلى جانب السكر التراكمي HbA1c) فصلاً تاماً عن قدرات النموذج الأولي الحالي (V1). هذه البطاقات تمثل أفكاراً وفرضيات أدبية مستقبلية (PROPOSED LITERATURE CONCEPTS) لم يتم تنفيذها برمجياً ولم يتم التحقق منها سريرياً، ويتطلب كل منها بروتوكول لجنة أخلاقيات (IRB) وأجهزة مرجعية طبية مستقلة.'
              : 'In strict compliance with Audit Sections 1.3 and 1.4, these six multi-modal concepts (along with HbA1c) are isolated from our V1 rPPG prototype capabilities. They represent unvalidated conceptual literature hypotheses (PROPOSED) that are neither implemented in the active pipeline nor clinically tested, and each would require dedicated reference instrumentation and separate IRB-approved clinical trials.'}
          </p>
        </div>

        {/* Warning Box */}
        <div className="mb-6 p-4 rounded-xl bg-amber-50 border border-amber-300 text-amber-950 text-xs leading-relaxed flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong className="block font-bold mb-1">
              {isAr
                ? 'تنبيه نطاق المشروع (Scope Boundary Notice):'
                : 'Strict Scope Boundary Notice (Zero Clinical Validation):'}
            </strong>
            {isAr
              ? 'لا يدعي هذا المشروع القدرة على تشخيص الرجفان الأذيني (AFib) أو باركنسون أو فشل القلب (CHF) أو الفشل الكلوي (CKD) أو إصابات الدماغ (mTBI) أو تسمم الحمل (Preeclampsia) أو السكر التراكمي (HbA1c). تُعرض هذه الأمثلة حصرياً لتوضيح الأسئلة البحثية النظرية التي يمكن استكشافها مستقبلاً بعد إتمام التحقق الأساسي من جودة إشارة rPPG.'
              : 'This project does NOT claim capability to diagnose AFib, Parkinson’s disease, CHF, CKD, mTBI, Preeclampsia, or HbA1c. These cards are preserved solely as conceptual future research questions that could be investigated only after establishing baseline rPPG signal reliability.'}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FUTURE_PREDICTIVE_BIOMARKERS_6.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-sky-50 text-sky-900 border border-sky-300">
                    PROPOSED HYPOTHESIS #{item.number} (UNVALIDATED)
                  </span>
                  <FlaskConical className="w-4 h-4 text-slate-400" />
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1.5">
                  {item.diseaseTitle[lang]}
                </h3>

                <div className="text-[11px] font-mono text-blue-900 bg-blue-50/70 px-2.5 py-1 rounded border border-blue-200 mb-3">
                  {item.sensorsFused}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  {item.biophysicalDiscoveryMechanism[lang]}
                </p>

                <div className="p-2.5 rounded-lg bg-slate-900 text-slate-100 font-mono text-[10.5px] overflow-x-auto mb-3">
                  {item.mathematicalSignatureLatex}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-amber-900 bg-amber-50/50 p-2.5 rounded-lg border border-amber-200">
                <strong>{isAr ? 'ما يلزم لإثبات الفرضية:' : 'Required for Future Validation:'}</strong>{' '}
                {isAr
                  ? 'يتطلب دراسة سريرية مستقبلية مستقلة بموافقة IRB ومقارنة مباشرة مع المعيار الذهبي الطبي (مثل ECG ذي 12 اتجاهاً أو تحاليل المختبر).'
                  : 'Requires a dedicated prospective IRB-approved clinical study against hospital gold-standard reference instrumentation (e.g., 12-lead ECG, venous blood labs).'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
