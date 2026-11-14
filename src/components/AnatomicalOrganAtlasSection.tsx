import React, { useState } from 'react';
import katex from 'katex';
import { ANATOMICAL_ORGANS_DATA, type AnatomicalOrganSpec } from '../data/monographAdditiveExpansion';
import type { Language } from '../utils/biophysicsMath';

interface AnatomicalOrganAtlasSectionProps {
  lang: Language;
}

const KatexInlineBox: React.FC<{ tex: string }> = ({ tex }) => {
  const html = katex.renderToString(tex, {
    displayMode: true,
    throwOnError: false,
    strict: false,
  });
  return (
    <div
      dir="ltr"
      className="mt-3 overflow-x-auto rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-left text-[#0F172A]"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export const AnatomicalOrganAtlasSection: React.FC<AnatomicalOrganAtlasSectionProps> = ({
  lang,
}) => {
  const [organModes, setOrganModes] = useState<
    Record<AnatomicalOrganSpec['id'], 'healthy' | 'pathological'>
  >({
    'heart-aorta': 'pathological',
    'eye-conjunctiva': 'pathological',
    'lungs-airway': 'pathological',
    'vagus-autonomic': 'pathological',
  });

  const setAllModes = (mode: 'healthy' | 'pathological') => {
    setOrganModes({
      'heart-aorta': mode,
      'eye-conjunctiva': mode,
      'lungs-airway': mode,
      'vagus-autonomic': mode,
    });
  };

  const renderOrganSvg = (
    organId: AnatomicalOrganSpec['id'],
    isPathological: boolean
  ) => {
    if (organId === 'heart-aorta') {
      const arteryStroke = isPathological ? '#DC2626' : '#0284C7';
      const wallFill = isPathological ? '#FEE2E2' : '#E0F2FE';
      return (
        <svg
          viewBox="0 0 520 230"
          className="w-full h-auto rounded-lg border border-slate-200 bg-[#F8FAFC]"
          role="img"
          aria-label="Heart, Aortic Arch and Radial/Digital Arterial Tree Diagram"
        >
          {/* Clinical Grid lines */}
          <g stroke="#E2E8F0" strokeWidth="1">
            <line x1="0" y1="45" x2="520" y2="45" />
            <line x1="0" y1="115" x2="520" y2="115" />
            <line x1="0" y1="185" x2="520" y2="185" />
            <line x1="175" y1="0" x2="175" y2="230" />
            <line x1="345" y1="0" x2="345" y2="230" />
          </g>

          {/* Left Ventricle & Heart Chamber */}
          <path
            d="M 55 125 C 32 95, 48 58, 78 68 C 96 52, 125 72, 115 105 C 106 138, 78 162, 68 172 C 58 160, 42 142, 55 125 Z"
            fill={wallFill}
            stroke={arteryStroke}
            strokeWidth="3"
          />
          <circle cx="84" cy="95" r="7" fill={arteryStroke} />
          <text x="24" y="196" fill="#0F172A" fontSize="10" fontFamily="JetBrains Mono" fontWeight="700">
            Left Ventricle &amp; Aortic Valve
          </text>

          {/* Aortic Arch & Radial/Digital Arterial Tree */}
          <path
            d="M 86 88 C 92 34, 156 32, 174 82 L 195 142 L 295 142"
            fill="none"
            stroke={arteryStroke}
            strokeWidth={isPathological ? '9' : '6'}
            strokeLinecap="round"
          />
          {/* AGEs Collagen Cross-linking Crosshatches when Pathological */}
          {isPathological && (
            <g stroke="#991B1B" strokeWidth="1.6">
              <line x1="120" y1="42" x2="130" y2="56" />
              <line x1="145" y1="44" x2="155" y2="58" />
              <line x1="210" y1="134" x2="220" y2="150" />
              <line x1="240" y1="134" x2="250" y2="150" />
              <line x1="270" y1="134" x2="280" y2="150" />
            </g>
          )}
          {/* Digital Microvasculature Branches */}
          <path
            d="M 295 142 L 330 122 M 295 142 L 335 142 M 295 142 L 330 162"
            stroke={arteryStroke}
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Right Side: Arterial Pulse Waveform & Dicrotic Notch Comparison */}
          <rect x="352" y="24" width="154" height="175" rx="6" fill="#FFFFFF" stroke="#CBD5E1" />
          <text x="362" y="42" fill="#0F172A" fontSize="10" fontFamily="JetBrains Mono" fontWeight="700">
            {isPathological ? 'Stiff Wave (AGEs / HTN)' : 'Compliant Wave (Normal)'}
          </text>
          {isPathological ? (
            <path
              d="M 362 155 L 385 52 L 412 46 L 448 115 L 494 155"
              fill="none"
              stroke="#DC2626"
              strokeWidth="2.8"
            />
          ) : (
            <path
              d="M 362 155 L 390 62 L 418 118 L 434 96 L 494 155"
              fill="none"
              stroke="#059669"
              strokeWidth="2.8"
            />
          )}
          <text
            x="362"
            y="182"
            fill={isPathological ? '#DC2626' : '#059669'}
            fontSize="9.5"
            fontFamily="JetBrains Mono"
            fontWeight="700"
          >
            {isPathological ? 'No Dicrotic Notch · PWV 10.8m/s' : 'Clear Notch · PWV 5.4m/s'}
          </text>
          <text x="112" y="24" fill="#0F172A" fontSize="10" fontFamily="JetBrains Mono" fontWeight="700">
            {isPathological
              ? 'Collagen AGEs Cross-Linking (High E)'
              : 'Elastic Elastin Aortic Arch (Normal E)'}
          </text>
        </svg>
      );
    }

    if (organId === 'eye-conjunctiva') {
      const scleraFill = isPathological ? '#FEF08A' : '#FFFFFF';
      const conjunctivaFill = isPathological ? '#FBCFE8' : '#E11D48';
      return (
        <svg
          viewBox="0 0 520 230"
          className="w-full h-auto rounded-lg border border-slate-200 bg-[#F8FAFC]"
          role="img"
          aria-label="Anatomical Human Eye Sclera, Palpebral Conjunctiva and MediaPipe 478 Landmarks"
        >
          {/* Sclera Envelope */}
          <path
            d="M 45 110 Q 175 28 305 110 Q 175 182 45 110 Z"
            fill={scleraFill}
            stroke="#0F172A"
            strokeWidth="2.5"
          />
          {/* Lower Everted Palpebral Conjunctiva Vascular Bed */}
          <path
            d="M 65 128 Q 175 196 285 128 Q 175 218 65 128 Z"
            fill={conjunctivaFill}
            stroke="#9F1239"
            strokeWidth="2"
          />
          {/* Iris & Pupil */}
          <circle cx="175" cy="105" r="38" fill="#0284C7" stroke="#0F172A" strokeWidth="2" />
          <circle cx="175" cy="105" r="16" fill="#0F172A" />
          <circle cx="166" cy="96" r="5" fill="#FFFFFF" />

          {/* MediaPipe 478 3D Landmark Mesh Overlay */}
          <g fill="#059669" stroke="#059669" strokeWidth="0.9">
            <circle cx="45" cy="110" r="3" />
            <circle cx="110" cy="72" r="3" />
            <circle cx="175" cy="60" r="3" />
            <circle cx="240" cy="72" r="3" />
            <circle cx="305" cy="110" r="3" />
            <circle cx="120" cy="155" r="3" />
            <circle cx="175" cy="172" r="3" />
            <circle cx="230" cy="155" r="3" />
            <line x1="110" y1="72" x2="175" y2="60" strokeDasharray="3 2" />
            <line x1="175" y1="60" x2="240" y2="72" strokeDasharray="3 2" />
            <line x1="120" y1="155" x2="175" y2="172" strokeDasharray="3 2" />
            <line x1="175" y1="172" x2="230" y2="155" strokeDasharray="3 2" />
          </g>

          {/* Right Side Chromatic CIE L*a*b* Readout Box */}
          <rect x="336" y="22" width="168" height="184" rx="6" fill="#FFFFFF" stroke="#CBD5E1" />
          <text x="348" y="44" fill="#0F172A" fontSize="10" fontFamily="JetBrains Mono" fontWeight="700">
            Bradford D65 CIE L*a*b*
          </text>
          <text
            x="348"
            y="72"
            fill={isPathological ? '#B45309' : '#059669'}
            fontSize="10"
            fontFamily="JetBrains Mono"
            fontWeight="700"
          >
            {isPathological ? 'Sclera b* = +16.5 (Jaundice)' : 'Sclera b* = +4.4 (Normal)'}
          </text>
          <text
            x="348"
            y="98"
            fill={isPathological ? '#DC2626' : '#059669'}
            fontSize="10"
            fontFamily="JetBrains Mono"
            fontWeight="700"
          >
            {isPathological ? 'Conj. a*/L* = 0.21 (Anemia)' : 'Conj. a*/L* = 0.39 (Normal)'}
          </text>
          <text x="348" y="126" fill="#0284C7" fontSize="9.5" fontFamily="JetBrains Mono" fontWeight="600">
            Rear 50MP OIS @ 15 cm
          </text>
          <text x="348" y="148" fill="#0F172A" fontSize="9.5" fontFamily="JetBrains Mono" fontWeight="600">
            Var(∇²I) = 185.0 &gt;= 110 PASS
          </text>
          <text x="348" y="176" fill="#475569" fontSize="9.5" fontFamily="JetBrains Mono">
            MediaPipe 478 ROI Polygon
          </text>
        </svg>
      );
    }

    if (organId === 'lungs-airway') {
      const lungColor = isPathological ? '#FEE2E2' : '#E0F2FE';
      const strokeColor = isPathological ? '#DC2626' : '#0284C7';
      return (
        <svg
          viewBox="0 0 520 230"
          className="w-full h-auto rounded-lg border border-slate-200 bg-[#F8FAFC]"
          role="img"
          aria-label="Upper Airway, Lungs and 20kHz Ultrasonic Thoracic Sonar Diagram"
        >
          {/* Upper Airway & Trachea */}
          <path
            d="M 145 18 L 145 78 M 165 18 L 165 78"
            stroke={strokeColor}
            strokeWidth="3"
          />
          {/* Pharyngeal Collapse Occlusion Marker in OSA */}
          {isPathological && (
            <g>
              <line x1="138" y1="36" x2="172" y2="54" stroke="#DC2626" strokeWidth="3.5" />
              <line x1="172" y1="36" x2="138" y2="54" stroke="#DC2626" strokeWidth="3.5" />
              <text x="178" y="48" fill="#DC2626" fontSize="10" fontFamily="JetBrains Mono" fontWeight="700">
                OSA Airway Collapse (&gt;=10s)
              </text>
            </g>
          )}

          {/* Left & Right Lungs */}
          <path
            d="M 142 78 C 92 82, 72 135, 82 178 C 98 188, 134 182, 144 165 Z"
            fill={lungColor}
            stroke={strokeColor}
            strokeWidth="2.5"
          />
          <path
            d="M 168 78 C 218 82, 238 135, 228 178 C 212 188, 176 182, 166 165 Z"
            fill={lungColor}
            stroke={strokeColor}
            strokeWidth="2.5"
          />
          {/* Diaphragm */}
          <path
            d="M 75 190 Q 155 168 235 190"
            fill="none"
            stroke="#D97757"
            strokeWidth="3.5"
          />

          {/* 20kHz Ultrasonic Sonar Acoustic Arcs from Smartphone */}
          <g stroke="#059669" strokeWidth="1.8" fill="none" strokeDasharray="4 3">
            <path d="M 340 95 Q 290 125 340 155" />
            <path d="M 315 82 Q 260 125 315 168" />
            <path d="M 290 70 Q 230 125 290 180" />
          </g>

          {/* Xiaomi 15T Pro Nightstand Radar Node */}
          <rect x="355" y="68" width="145" height="122" rx="8" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
          <text x="368" y="92" fill="#0F172A" fontSize="10" fontFamily="JetBrains Mono" fontWeight="700">
            Xiaomi 15T Pro Sonar
          </text>
          <text x="368" y="112" fill="#0284C7" fontSize="9.5" fontFamily="JetBrains Mono" fontWeight="700">
            f_c = 20,000 Hz (λ=17.15mm)
          </text>
          <text x="368" y="132" fill="#059669" fontSize="9.5" fontFamily="JetBrains Mono" fontWeight="600">
            Oboe 48kHz Unprocessed
          </text>
          <text
            x="368"
            y="156"
            fill={isPathological ? '#DC2626' : '#059669'}
            fontSize="9.5"
            fontFamily="JetBrains Mono"
            fontWeight="700"
          >
            {isPathological ? 'Δd(t) <= 0.25mm FLATLINE' : 'Δd(t) = ±4.5mm EUPNEA'}
          </text>
        </svg>
      );
    }

    // Organ 4: Vagus Nerve (CN X), Brainstem & Sinoatrial Node
    const nerveColor = isPathological ? '#DC2626' : '#059669';
    return (
      <svg
        viewBox="0 0 520 230"
        className="w-full h-auto rounded-lg border border-slate-200 bg-[#F8FAFC]"
        role="img"
        aria-label="Vagus Nerve CN X, Brainstem, Sinoatrial Node and HRV Tachogram"
      >
        {/* Brainstem / Medulla Oblongata */}
        <ellipse
          cx="95"
          cy="52"
          rx="46"
          ry="26"
          fill="#E0F2FE"
          stroke="#0284C7"
          strokeWidth="2.5"
        />
        <text x="58" y="55" fill="#0F172A" fontSize="9.5" fontFamily="JetBrains Mono" fontWeight="700">
          Brainstem (CN X)
        </text>

        {/* Myelinated Vagus Nerve Pathway to Sinoatrial Node */}
        <path
          d="M 95 78 C 95 122, 145 128, 165 162"
          fill="none"
          stroke={nerveColor}
          strokeWidth="3.5"
          strokeDasharray={isPathological ? '6 5' : 'none'}
        />
        {/* Sinoatrial (SA) Node on Right Atrium */}
        <circle
          cx="175"
          cy="172"
          r="24"
          fill={isPathological ? '#FEE2E2' : '#DCFCE7'}
          stroke={nerveColor}
          strokeWidth="2.5"
        />
        <text x="155" y="176" fill="#0F172A" fontSize="10" fontFamily="JetBrains Mono" fontWeight="700">
          SA Node
        </text>

        {/* Right Side: R-R Interval Tachogram (HRV RMSSD) */}
        <rect x="255" y="26" width="245" height="176" rx="6" fill="#FFFFFF" stroke="#CBD5E1" />
        <text x="268" y="48" fill="#0F172A" fontSize="10" fontFamily="JetBrains Mono" fontWeight="700">
          {isPathological
            ? 'Diabetic Neuropathy RR Tachogram'
            : 'Healthy Vagal Respiratory Sinus Arrhythmia'}
        </text>
        {isPathological ? (
          <path
            d="M 270 118 L 315 116 L 360 119 L 405 117 L 450 118 L 485 117"
            fill="none"
            stroke="#DC2626"
            strokeWidth="2.8"
          />
        ) : (
          <path
            d="M 270 135 L 305 78 L 340 142 L 375 74 L 410 138 L 445 80 L 485 132"
            fill="none"
            stroke="#059669"
            strokeWidth="2.8"
          />
        )}
        <text
          x="268"
          y="182"
          fill={isPathological ? '#DC2626' : '#059669'}
          fontSize="10"
          fontFamily="JetBrains Mono"
          fontWeight="700"
        >
          {isPathological
            ? 'RMSSD = 13.8 ms (Vagal Denervation)'
            : 'RMSSD = 48.5 ms (Healthy Autonomic Tone)'}
        </text>
      </svg>
    );
  };

  return (
    <section
      id="anatomical-atlas"
      data-testid="anatomical-atlas-section"
      className="border-b border-slate-200 bg-white py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header + Global Healthy/Pathological Toggle */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <p className="font-mono text-xs font-bold tracking-wider text-[#0284C7] uppercase">
              {lang === 'en'
                ? 'INTERACTIVE ANATOMICAL ORGAN ATLAS & PATHOPHYSIOLOGICAL SVG DIAGRAMS'
                : 'الأطلس التشريحي التفاعلي للأعضاء البشرية والفيزياء المرضية (4 رسوم تشريحية حية)'}
            </p>
            <h2 className="mt-2 font-serif-editorial text-2xl font-bold text-[#0F172A] sm:text-3xl [text-wrap:balance]">
              {lang === 'en'
                ? 'How Smartphone Optical, Acoustic & Inertial Sensors Probe Internal Human Organ Pathology'
                : 'كيف ترصد مستشعرات الكاميرا والسونار والحركة التغيرات التشريحية والمرضية داخل أعضاء الجسم؟'}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#1E293B]">
              {lang === 'en'
                ? 'Toggle any organ below between its Healthy Physiological State and its Pathological State Detected by Sensor to inspect the exact physical mechanism and governing equation.'
                : 'بدّل حالة أي عضو أدناه بين «العضو السليم (Healthy State)» و«العضو المصاب المرصود بالمستشعر (Pathological State)» لمعاينة التغير التشريحي والفيزيائي والمعادلة الحاكمة.'}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              data-testid="atlas-all-healthy"
              onClick={() => setAllModes('healthy')}
              className="rounded-md border border-emerald-300 bg-emerald-50 px-3.5 py-2 text-xs font-bold text-[#059669] hover:bg-emerald-100 transition-colors"
            >
              {lang === 'en' ? 'Set All: Healthy State' : 'عرض الكل: العضو السليم'}
            </button>
            <button
              type="button"
              data-testid="atlas-all-pathological"
              onClick={() => setAllModes('pathological')}
              className="rounded-md border border-red-300 bg-red-50 px-3.5 py-2 text-xs font-bold text-[#DC2626] hover:bg-red-100 transition-colors"
            >
              {lang === 'en' ? 'Set All: Pathological State' : 'عرض الكل: العضو المصاب'}
            </button>
          </div>
        </div>

        {/* 4 Interactive Organ Cards */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {ANATOMICAL_ORGANS_DATA.map((organ) => {
            const currentMode = organModes[organ.id];
            const isPathological = currentMode === 'pathological';

            return (
              <article
                key={organ.id}
                data-testid={`organ-card-${organ.id}`}
                className="min-w-0 flex flex-col justify-between rounded-xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-2xs"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-[11px] font-bold text-[#0284C7]">
                      {organ.organCode}
                    </span>

                    <div
                      role="group"
                      aria-label={organ.title[lang]}
                      className="inline-flex rounded-md border border-slate-300 bg-white p-0.5"
                    >
                      <button
                        type="button"
                        data-testid={`organ-toggle-healthy-${organ.id}`}
                        onClick={() =>
                          setOrganModes((prev) => ({ ...prev, [organ.id]: 'healthy' }))
                        }
                        aria-pressed={!isPathological}
                        className={`rounded px-2.5 py-1 text-[11px] font-bold transition-colors ${
                          !isPathological
                            ? 'bg-[#059669] text-white'
                            : 'text-slate-600 hover:text-[#0F172A]'
                        }`}
                      >
                        {lang === 'en' ? 'Healthy Organ' : 'العضو السليم'}
                      </button>
                      <button
                        type="button"
                        data-testid={`organ-toggle-pathological-${organ.id}`}
                        onClick={() =>
                          setOrganModes((prev) => ({ ...prev, [organ.id]: 'pathological' }))
                        }
                        aria-pressed={isPathological}
                        className={`rounded px-2.5 py-1 text-[11px] font-bold transition-colors ${
                          isPathological
                            ? 'bg-[#DC2626] text-white'
                            : 'text-slate-600 hover:text-[#0F172A]'
                        }`}
                      >
                        {lang === 'en' ? 'Pathological State' : 'العضو المصاب'}
                      </button>
                    </div>
                  </div>

                  <h3 className="mt-2 font-serif-editorial text-lg font-bold text-[#0F172A]">
                    {organ.title[lang]}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-slate-600">
                    {organ.anatomicalStructures[lang]}
                  </p>

                  {/* Interactive Vector SVG Diagram */}
                  <div className="mt-4">
                    {renderOrganSvg(organ.id, isPathological)}
                  </div>

                  {/* Active State Explanation Box */}
                  <div
                    className={`mt-4 rounded-lg border p-4 ${
                      isPathological
                        ? 'border-red-200 bg-red-50/60'
                        : 'border-emerald-200 bg-emerald-50/60'
                    }`}
                  >
                    <p
                      className={`text-xs font-bold ${
                        isPathological ? 'text-[#DC2626]' : 'text-[#059669]'
                      }`}
                    >
                      {isPathological
                        ? organ.pathologicalStateTitle[lang]
                        : organ.healthyStateTitle[lang]}
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#1E293B]">
                      {isPathological
                        ? organ.pathologicalBiophysics[lang]
                        : organ.healthyBiophysics[lang]}
                    </p>
                    <p
                      dir="ltr"
                      className="mt-2 border-t border-slate-200/80 pt-2 font-mono text-[11px] font-bold text-[#0F172A]"
                    >
                      {isPathological ? organ.pathologicalMetrics : organ.healthyMetrics}
                    </p>
                  </div>
                </div>

                <KatexInlineBox tex={organ.governingEquationLatex} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
