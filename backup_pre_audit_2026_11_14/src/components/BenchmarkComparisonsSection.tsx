import React from 'react';
import { Scale } from 'lucide-react';
import {
  HOSPITAL_EQUIPMENT_COMPARISON,
  NAIVE_APPS_COMPARISON_8,
  SILICON_PERFORMANCE_BENCHMARK,
} from '../data/monographAdditiveExpansion';
import type { Language } from '../utils/biophysicsMath';

interface BenchmarkComparisonsSectionProps {
  lang: Language;
}

export const BenchmarkComparisonsSection: React.FC<BenchmarkComparisonsSectionProps> = ({
  lang,
}) => {
  return (
    <section
      id="benchmarks"
      data-testid="benchmarks-section"
      className="border-b border-slate-200 bg-[#F8FAFC] py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-wider text-[#059669] uppercase">
            <Scale className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>
              {lang === 'en'
                ? 'COMPREHENSIVE MULTI-DIMENSIONAL CLINICAL & SYSTEMS BENCHMARK COMPARISONS'
                : 'مصفوفات المقارنات الهندسية والسريرية الشاملة (الأجهزة الطبية والتطبيقات السطحية وأداء المعالج)'}
            </span>
          </div>
          <h2 className="mt-2 font-serif-editorial text-2xl font-bold text-[#0F172A] sm:text-3xl [text-wrap:balance]">
            {lang === 'en'
              ? 'Benchmarking Our Xiaomi 15T Pro Biophysical Monograph Against Hospital Equipment and Naive Consumer Apps'
              : 'مقارنة منظومتنا على Xiaomi 15T Pro بمعدات المستشفيات التقليدية وتطبيقات الكاميرا التجارية السطحية'}
          </h2>
        </div>

        {/* Comparison Table 1: Our System vs. Hospital Clinical Equipment */}
        <div className="mt-10">
          <h3 className="text-base font-bold text-[#0F172A] sm:text-lg">
            {lang === 'en'
              ? '01. Our Offline Smartphone System vs. Traditional Hospital Clinical Equipment'
              : '01. المقارنة الأولى: منظومتنا على Xiaomi 15T Pro مقابل الأجهزة الطبية التقليدية في المستشفيات'}
          </h3>
          <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-2xs">
            <table className="w-full border-collapse text-start text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-[#F8FAFC] text-[#0F172A]">
                  <th className="px-4 py-3.5 font-bold text-start">
                    {lang === 'en' ? 'Diagnostic Modality' : 'المجال التشخيصي'}
                  </th>
                  <th className="px-4 py-3.5 font-bold text-start">
                    {lang === 'en' ? 'Hospital Gold-Standard Equipment' : 'الجهاز الطبي بالمستشفى'}
                  </th>
                  <th className="px-4 py-3.5 font-bold text-start text-[#DC2626]">
                    {lang === 'en' ? 'Hospital Cost & Access Barriers' : 'التكلفة وعوائق الوصول بالمستشفى'}
                  </th>
                  <th className="px-4 py-3.5 font-bold text-start text-[#0284C7]">
                    {lang === 'en' ? 'Our Xiaomi 15T Pro Modality' : 'البديل الفيزيائي في منظومتنا'}
                  </th>
                  <th className="px-4 py-3.5 font-bold text-start text-[#059669]">
                    {lang === 'en' ? 'Our Cost & Humanitarian Reach' : 'التكلفة وسهولة الوصول في مشروعنا'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {HOSPITAL_EQUIPMENT_COMPARISON.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50/80">
                    <td className="px-4 py-4 font-bold text-[#0F172A] align-top">
                      {row.diagnosticDomain[lang]}
                    </td>
                    <td className="px-4 py-4 text-slate-700 align-top">
                      {row.hospitalGoldStandardDevice[lang]}
                    </td>
                    <td className="px-4 py-4 font-medium text-[#DC2626] align-top">
                      {row.hospitalCostAndBarriers[lang]}
                    </td>
                    <td className="px-4 py-4 font-medium text-[#0284C7] align-top">
                      {row.ourSmartphoneModality[lang]}
                    </td>
                    <td className="px-4 py-4 font-bold text-[#059669] align-top">
                      {row.ourCostAndAccessibility[lang]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Comparison Table 2: Our C++17 Zero-Phase POS + LiteRT 2.x Engine vs. Naive Consumer rPPG Apps (8 Criteria) */}
        <div className="mt-12">
          <h3 className="text-base font-bold text-[#0F172A] sm:text-lg">
            {lang === 'en'
              ? '02. Our C++17 Zero-Phase POS + LiteRT 2.x Engine vs. Naive Consumer rPPG Apps (8 Engineering Criteria)'
              : '02. المقارنة الثانية: محركنا الفيزيائي الأصلي (C++17 Zero-Phase + LiteRT 2.x) مقابل تطبيقات الكاميرا التجارية السطحية (8 معايير)'}
          </h3>
          <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-2xs">
            <table className="w-full border-collapse text-start text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-[#F8FAFC] text-[#0F172A]">
                  <th className="px-4 py-3.5 font-bold text-start">#</th>
                  <th className="px-4 py-3.5 font-bold text-start">
                    {lang === 'en' ? 'Engineering Dimension' : 'المعيار التقني والفيزيائي'}
                  </th>
                  <th className="px-4 py-3.5 font-bold text-start text-[#DC2626]">
                    {lang === 'en' ? 'Naive Consumer rPPG Apps' : 'التطبيقات التجارية السطحية الساذجة'}
                  </th>
                  <th className="px-4 py-3.5 font-bold text-start text-[#059669]">
                    {lang === 'en'
                      ? 'Our Production Biophysical Engine (Xiaomi 15T Pro)'
                      : 'محركنا الفيزيائي المعتمد (C++17 + LiteRT 2.x)'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {NAIVE_APPS_COMPARISON_8.map((row) => (
                  <tr key={row.criterionNumber} className="hover:bg-slate-50/80">
                    <td dir="ltr" className="px-4 py-3.5 font-mono font-bold text-[#D97757] align-top">
                      {row.criterionNumber}
                    </td>
                    <td className="px-4 py-3.5 font-bold text-[#0F172A] align-top">
                      {row.technicalDimension[lang]}
                    </td>
                    <td className="px-4 py-3.5 text-[#DC2626] align-top">
                      {row.naiveConsumerAppFailure[lang]}
                    </td>
                    <td className="px-4 py-3.5 font-medium text-[#059669] align-top">
                      {row.ourProductionEngineAdvantage[lang]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Comparison Table 3: Silicon Latency, CPU Load & Heap Allocation Benchmark on Dimensity 9400+ */}
        <div className="mt-12">
          <h3 className="text-base font-bold text-[#0F172A] sm:text-lg">
            {lang === 'en'
              ? '03. Silicon Execution Latency, CPU Load & Zero-Allocation Benchmark (MediaTek Dimensity 9400+)'
              : '03. المقارنة الثالثة: الأداء السيليكوني وزمن الاستجابة واستهلاك المعالج على شريحة Dimensity 9400+'}
          </h3>
          <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-2xs">
            <table className="w-full border-collapse text-start text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-[#F8FAFC] text-[#0F172A]">
                  <th className="px-4 py-3.5 font-bold text-start">
                    {lang === 'en' ? 'Runtime Benchmark Metric' : 'مؤشر الأداء السيليكوني'}
                  </th>
                  <th className="px-4 py-3.5 font-bold text-start text-[#DC2626]">
                    Naive JVM / Kotlin Loops
                  </th>
                  <th className="px-4 py-3.5 font-bold text-start text-slate-600">
                    Unvectorized Scalar C++
                  </th>
                  <th className="px-4 py-3.5 font-bold text-start text-[#059669]">
                    Our ARMv9 NEON + Lock-Free SPSC + NPU 890
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {SILICON_PERFORMANCE_BENCHMARK.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80">
                    <td className="px-4 py-3.5 font-bold text-[#0F172A]">
                      {row.metricName[lang]}
                    </td>
                    <td dir="ltr" className="px-4 py-3.5 font-mono text-xs text-[#DC2626]">
                      {row.naiveJvmImplementation}
                    </td>
                    <td dir="ltr" className="px-4 py-3.5 font-mono text-xs text-slate-600">
                      {row.scalarCppImplementation}
                    </td>
                    <td dir="ltr" className="px-4 py-3.5 font-mono text-xs font-bold text-[#059669]">
                      {row.ourNeonSpscNpuEngine}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
