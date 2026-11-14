import React from 'react';
import {
  BarChart3,
  AlertTriangle,
  Scale,
  CheckCircle2,
  ShieldAlert,
} from 'lucide-react';
import { Language } from '../utils/biophysicsMath';

interface Props {
  lang: Language;
}

export const BenchmarkComparisonsSection: React.FC<Props> = ({ lang }) => {
  const isAr = lang === 'ar';

  const targetComparisonRows = [
    {
      methodNameEn: 'Standard Ungated POS rPPG (Wang et al., 2017 Baseline — 100% Coverage)',
      methodNameAr: 'خوارزمية POS rPPG القياسية بدون بوابة امتناع (تغطية 100% لجميع النوافذ)',
      statusBadge: 'LITERATURE BASELINE',
      coverageTarget: '100.0% (0% Abstained)',
      motionHrMaeTarget: '4.80 – 6.85 BPM (High Motion Corruption)',
      fairComparisonRuleEn:
        'Evaluated on all windows including severe head/hand motion bursts and defocus blur.',
      fairComparisonRuleAr:
        'يُقيّم على جميع النوافذ بما فيها لحظات الحركة العنيفة وضبابية الكاميرا.',
    },
    {
      methodNameEn: 'Standard Ungated CHROM rPPG (de Haan & Jeanne, 2013 Baseline — 100% Coverage)',
      methodNameAr: 'خوارزمية CHROM rPPG القياسية بدون بوابة امتناع (تغطية 100%)',
      statusBadge: 'LITERATURE BASELINE',
      coverageTarget: '100.0% (0% Abstained)',
      motionHrMaeTarget: '5.20 – 7.40 BPM (Illumination + Motion Drift)',
      fairComparisonRuleEn:
        'Sensitive to simultaneous specular reflection and non-orthogonal skin-tone shifts.',
      fairComparisonRuleAr:
        'حساس لتداخل الانعكاس المرآوي وتغيرات الإضاءة المحيطة.',
    },
    {
      methodNameEn: 'Proposed Quality-Gated POS + Zero-Phase filtfilt + Selective Abstention (τ_SQI = 0.65, τ_focus = 110.0)',
      methodNameAr: 'النظام المقترح: POS المحكوم ببوابة الامتناع الانتقائي (τ_SQI = 0.65 و τ_focus = 110.0)',
      statusBadge: 'SIMULATED / PROPOSED TARGET',
      coverageTarget: '~78.6% Accepted (21.4% Abstained in Simulation)',
      motionHrMaeTarget: 'Target <= 2.15 BPM on Accepted Windows (Simulated: 1.98 BPM)',
      fairComparisonRuleEn:
        'MUST report both: (1) MAE on the accepted subset vs. POS/CHROM on that exact same subset, and (2) the full Risk–Coverage curve across τ in [0, 1].',
      fairComparisonRuleAr:
        'يلزم الإبلاغ عن: (1) خطأ MAE على النوافذ المقبولة مقارنة بـ POS/CHROM على نفس النوافذ بالضبط، و(2) منحنى المخاطرة مقابل التغطية الكامل.',
    },
  ];

  return (
    <section id="benchmarks" className="py-12 border-b border-slate-200 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100 border border-amber-400 text-amber-950 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <BarChart3 className="w-4 h-4 text-amber-800" />
            {isAr
              ? 'مصفوفة المقارنة المرجعية المشروطة بالتغطية (أهداف محاكاة مقترحة — بانتظار التقييم الاسترجاعي)'
              : 'COVERAGE-CONDITIONED BENCHMARK TARGETS (SIMULATED / PROPOSED — PENDING FROZEN-SPLIT RUNS)'}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-serif">
            {isAr
              ? 'قواعد المقارنة العادلة للتنبؤ الانتقائي: لماذا لا يجوز مقارنة تغطية 78.6% بتغطية 100% دون منحنى المخاطرة؟'
              : 'Fair Selective Prediction Benchmarking: Why Partial Coverage Cannot Be Compared to 100% Coverage Without Risk–Coverage Curves'}
          </h2>

          <p className="mt-2 text-sm text-slate-600 max-w-4xl leading-relaxed">
            {isAr
              ? 'يوضح هذا القسم القاعدة المنهجية الحاسمة لتقييم خوارزميات الامتناع الانتقائي (Selective Prediction): عندما يمتنع النظام عن التنبؤ في 21.4% من النوافذ شديدة التشوه (التغطية = 78.6%)، فمن الطبيعي أن ينخفض متوسط الخطأ (MAE). لذلك يشترط بروتوكولنا مقارنة جميع الخوارزميات المرجعية (POS وCHROM) عند نفس نقاط التغطية بالضبط على منحنى المخاطرة والتغطية (Risk–Coverage Curve).'
              : 'This section documents a critical methodological rule for selective prediction evaluation: when a quality gate abstains on the 21.4% most corrupted windows (78.6% coverage), MAE naturally drops. Therefore, a scientifically valid benchmark must compare baseline methods (POS, CHROM) on the exact same accepted window subsets across the entire Risk–Coverage curve.'}
          </p>
        </div>

        {/* Warning Box */}
        <div className="mb-6 p-4 rounded-xl bg-amber-50 border border-amber-300 text-amber-950 text-xs leading-relaxed flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong className="block font-bold mb-1">
              {isAr
                ? 'تصنيف الأرقام المرجعية (SIMULATED / PROPOSED DESIGN TARGETS):'
                : 'Classification of Benchmark Numbers (SIMULATED / PROPOSED DESIGN TARGETS):'}
            </strong>
            {isAr
              ? 'الأرقام المعروضة في الجدول أدناه تمثل مخرجات نموذج المحاكاة الرياضي في المستودع والأهداف التصميمية المستهدفة قبل تشغيل التقييم النهائي ذي العتبات المجمدة (Frozen-Threshold Evaluation) على قاعدتي PURE (n=10) وUBFC-rPPG (n=42).'
              : 'The figures in the table below represent outputs from our synthetic mathematical model and target performance criteria prior to executing frozen-threshold retrospective evaluation on PURE (n=10) and UBFC-rPPG (n=42).'}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-2xs">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-semibold">
                <th className="p-3.5">{isAr ? 'الخوارزمية / المنهجية' : 'Algorithm / Pipeline'}</th>
                <th className="p-3.5 w-44">{isAr ? 'تصنيف الدليل' : 'Evidence Status'}</th>
                <th className="p-3.5 w-48">{isAr ? 'نسبة التغطية (Coverage %)' : 'Window Coverage (%)'}</th>
                <th className="p-3.5 w-56">{isAr ? 'الخطأ الانتقائي المستهدف / المحاكي' : 'Simulated / Target HR MAE'}</th>
                <th className="p-3.5">{isAr ? 'شرط المقارنة الإحصائية العادلة' : 'Fair Statistical Comparison Rule'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {targetComparisonRows.map((row) => (
                <tr key={row.methodNameEn} className="hover:bg-slate-50 align-top">
                  <td className="p-3.5 font-bold text-slate-900">
                    {isAr ? row.methodNameAr : row.methodNameEn}
                  </td>
                  <td className="p-3.5">
                    <span
                      className={`inline-block px-2 py-0.5 rounded font-mono text-[10px] font-bold border ${
                        row.statusBadge.includes('SIMULATED')
                          ? 'bg-amber-50 text-amber-900 border-amber-300'
                          : 'bg-slate-100 text-slate-700 border-slate-300'
                      }`}
                    >
                      {row.statusBadge}
                    </span>
                  </td>
                  <td className="p-3.5 font-mono font-semibold text-slate-800">{row.coverageTarget}</td>
                  <td className="p-3.5 font-mono font-bold text-blue-900">{row.motionHrMaeTarget}</td>
                  <td className="p-3.5 text-slate-700 leading-relaxed">
                    {isAr ? row.fairComparisonRuleAr : row.fairComparisonRuleEn}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
