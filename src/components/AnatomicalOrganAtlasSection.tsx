import React, { useState } from 'react';
import {
  Eye,
  HeartPulse,
  Wind,
  Activity,
  ScanFace,
  Info,
} from 'lucide-react';
import { Language } from '../utils/biophysicsMath';
import { ANATOMICAL_ORGANS_DATA } from '../data/monographAdditiveExpansion';

interface Props {
  lang: Language;
}

export const AnatomicalOrganAtlasSection: React.FC<Props> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [selectedId, setSelectedId] = useState<string>(ANATOMICAL_ORGANS_DATA[0]?.id ?? 'heart-aorta');

  const activeOrgan =
    ANATOMICAL_ORGANS_DATA.find((m) => m.id === selectedId) ?? ANATOMICAL_ORGANS_DATA[0];

  const getOrganAuditBadge = (id: string) => {
    if (id === 'vagus-autonomic') {
      return {
        badge: 'V1 CORE BIOPHYSICAL MODEL (SIMULATED / IMPLEMENTED rPPG IBI & RMSSD)',
        style: 'bg-emerald-50 text-emerald-900 border-emerald-300',
        caveatEn:
          'Primary V1 focus: Spatial RGB averaging across forehead/malar cheek ROIs with Laplacian focus (Var >= 110.0) and composite SQI (>= 0.65) candidate gates before computing inter-beat intervals (IBI) and RMSSD.',
        caveatAr:
          'التركيز الأساسي للإصدار الأول (V1): حساب المتوسط المكاني لمناطق الجبهة والوجنتين مع بوابة البؤرة المكانية (Laplacian >= 110.0) وبوابة جودة الإشارة (SQI >= 0.65) قبل حساب فترات النبض (IBI) ومؤشر RMSSD.',
      };
    }
    if (id === 'eye-conjunctiva') {
      return {
        badge: 'EXPLORATORY COLORIMETRY (PROPOSED — REQUIRES CLSI EP09 & COLOR CHART)',
        style: 'bg-amber-50 text-amber-900 border-amber-300',
        caveatEn:
          'Audit Correction (Sections 3.1 & 3.8): Quantitative validation against venous CBC hemoglobin and serum bilirubin requires CLSI EP09 (method comparison) and CLSI EP05/EP15 (precision)—NOT CLSI EP17-A2 (LoB/LoD/LoQ)—plus locked camera ISP white balance and a physical reference color card.',
        caveatAr:
          'تصحيح التدقيق (القسم 3.1 و3.8): يتطلب التحقق الكمي مقابل تحاليل الدم الوريدية معيار CLSI EP09 (مقارنة الطرق) ومعياري CLSI EP05/EP15 (الدقة)—وليس CLSI EP17-A2—مع قفل التوازن الأبيض للكاميرا وبطاقة ألوان مرجعية فيزيائية.',
      };
    }
    if (id === 'heart-aorta') {
      return {
        badge: 'EXPLORATORY HEMODYNAMICS (PROPOSED — IEEE 1708-2025 vs ISO 81060-2)',
        style: 'bg-sky-50 text-sky-900 border-sky-300',
        caveatEn:
          'Audit Correction (Sections 3.2 & 3.3): Distinguishes PTT (two arterial sites) from PAT (ECG R-wave including PEP). Wearable cuffless BP devices require validation under IEEE Std 1708-2025 and repeated calibration against an ISO 81060-2:2018 cuff sphygmomanometer.',
        caveatAr:
          'تصحيح التدقيق (القسم 3.2 و3.3): يفصل بين PTT (نقطتين شريانيتين) وPAT (شاملاً فترة PEP). يخضع تقييم الأجهزة بدون كفة لمعيار IEEE Std 1708-2025 ويتطلب معايرة دورية بجهاز كفة معتمد وفق ISO 81060-2:2018.',
      };
    }
    return {
      badge: 'EXPLORATORY ACOUSTIC PHASE MODEL (PROPOSED — AASM PSG/HSAT CAVEAT)',
      style: 'bg-purple-50 text-purple-900 border-purple-300',
      caveatEn:
        'Audit Correction (Sections 3.5 & 3.6): Single-channel 20 kHz smartphone acoustic phase tracking models chest-wall motion only. Clinical OSA diagnosis and AHI scoring require multi-channel Polysomnography (PSG) or validated HSAT measuring nasal airflow and SpO2 per AASM guidelines.',
      caveatAr:
        'تصحيح التدقيق (القسم 3.5 و3.6): يتتبع الطور الصوتي عند 20 kHz حركة جدار الصدر فقط. بينما يتطلب التشخيص السريري لـ OSA وحساب AHI تخطيط نوم متعدد القنوات (PSG أو HSAT) يقيس تدفق الهواء وتشبع الأكسجين SpO2 وفق إرشادات AASM.',
    };
  };

  const auditMeta = getOrganAuditBadge(activeOrgan.id);

  return (
    <section id="anatomical-atlas" className="py-12 border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-300 text-slate-800 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <ScanFace className="w-4 h-4 text-blue-800" />
            {isAr
              ? 'الأطلس التشريحي والفيزيائي الحيوي التوضيحي (مع تصنيف نطاق V1 مقابل الفرضيات الاستكشافية)'
              : 'ILLUSTRATIVE ANATOMICAL & BIOPHYSICAL ATLAS (V1 CORE VS. EXPLORATORY HYPOTHESES)'}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-serif">
            {isAr
              ? 'التمثيل التشريحي التفاعلي لمناطق الاهتمام (ROIs): التمييز بين نموذج rPPG الأساسي والفرضيات الثانوية'
              : 'Interactive Anatomical ROI Models: Distinguishing Primary V1 Facial rPPG from Secondary Exploratory Concepts'}
          </h2>
        </div>

        {/* Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {ANATOMICAL_ORGANS_DATA.map((model) => {
            const isSelected = model.id === activeOrgan.id;
            return (
              <button
                key={model.id}
                onClick={() => setSelectedId(model.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold border transition cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                    : 'bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100'
                }`}
              >
                {model.id === 'heart-aorta' && <HeartPulse className="w-4 h-4" />}
                {model.id === 'eye-conjunctiva' && <Eye className="w-4 h-4" />}
                {model.id === 'lungs-airway' && <Wind className="w-4 h-4" />}
                {model.id === 'vagus-autonomic' && <Activity className="w-4 h-4" />}
                <span>{model.title[lang]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Organ Card */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <span className={`px-3 py-1 rounded-md text-xs font-mono font-bold border ${auditMeta.style}`}>
              {auditMeta.badge}
            </span>
            <span className="text-xs font-mono text-slate-500">
              {activeOrgan.organCode} · {isAr ? 'رسوم توضيحية تعليمية — ليست صوراً تشخيصية' : 'Educational Biophysical Schematic — Not Diagnostic Imaging'}
            </span>
          </div>

          <div className="mb-4 text-xs font-mono text-slate-700 bg-white px-3 py-2 rounded-lg border border-slate-200">
            <strong>{isAr ? 'الهياكل التشريحية:' : 'Anatomical Structures:'}</strong> {activeOrgan.anatomicalStructures[lang]}
          </div>

          <div className="mb-5 p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 leading-relaxed flex items-start gap-2.5">
            <Info className="w-4 h-4 text-blue-800 shrink-0 mt-0.5" />
            <div>{isAr ? auditMeta.caveatAr : auditMeta.caveatEn}</div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-4 rounded-xl bg-white border border-slate-200">
              <div className="text-xs font-bold text-slate-900 mb-2">
                {activeOrgan.healthyStateTitle[lang]}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                {activeOrgan.healthyBiophysics[lang]}
              </p>
              <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 font-mono text-[11px] mb-2">
                {activeOrgan.healthyMetrics}
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 text-slate-100 font-mono text-[11px] overflow-x-auto">
                {activeOrgan.governingEquationLatex}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200">
              <div className="text-xs font-bold text-slate-900 mb-2">
                {activeOrgan.pathologicalStateTitle[lang]}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                {activeOrgan.pathologicalBiophysics[lang]}
              </p>
              <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-[11px] text-amber-950 font-mono">
                {activeOrgan.pathologicalMetrics}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
