export type EvidenceStatusBadge =
  | 'IMPLEMENTED'
  | 'SIMULATED'
  | 'PROPOSED'
  | 'BENCHMARKED'
  | 'CLINICALLY VALIDATED';

export interface FirstScreenReviewerQA {
  id: string;
  questionEn: string;
  questionAr: string;
  answerEn: string;
  answerAr: string;
  badge: EvidenceStatusBadge;
}

export interface SourceAuditMatrixRow {
  id: string;
  claimOrModuleEn: string;
  claimOrModuleAr: string;
  sourceFilePath: string;
  statusBadge: EvidenceStatusBadge;
  currentImplementationEn: string;
  currentImplementationAr: string;
  auditFindingEn: string;
  auditFindingAr: string;
  appliedRevisionEn: string;
  appliedRevisionAr: string;
  requiredToProveEn: string;
  requiredToProveAr: string;
}

export interface StandardComparisonRow {
  standardName: string;
  activeVersion: string;
  issuingBody: string;
  scopeEn: string;
  scopeAr: string;
  applicableDeviceTypeEn: string;
  applicableDeviceTypeAr: string;
  auditCorrectionEn: string;
  auditCorrectionAr: string;
  officialUrl: string;
}

export interface DatasetProvenanceRow {
  datasetName: string;
  versionAndModalityEn: string;
  versionAndModalityAr: string;
  subjectsAndCameraEn: string;
  subjectsAndCameraAr: string;
  containsFacialVideo: boolean;
  accessAndLicenseEn: string;
  accessAndLicenseAr: string;
  demographicLimitationsEn: string;
  demographicLimitationsAr: string;
  projectStatus: EvidenceStatusBadge;
  officialUrl: string;
}

export interface TripodAiProtocolItem {
  categoryEn: string;
  categoryAr: string;
  specificationEn: string;
  specificationAr: string;
  formulaOrRule: string;
}

export interface EpidemiologyProvenanceRow {
  conditionEn: string;
  conditionAr: string;
  headlineFigure: string;
  undiagnosedOrSubgroupFigure: string;
  originalSource: string;
  dataYear: string;
  publicationDate: string;
  ageGroupAndPopulationEn: string;
  ageGroupAndPopulationAr: string;
  methodologicalDefinitionEn: string;
  methodologicalDefinitionAr: string;
  caveatEn: string;
  caveatAr: string;
  officialUrl: string;
}

export interface AnthropicProgramComparison {
  programCode: 'PROGRAM_A' | 'PROGRAM_B';
  programNameEn: string;
  programNameAr: string;
  officialSupportOfferEn: string;
  officialSupportOfferAr: string;
  eligibilityRequirementsEn: string;
  eligibilityRequirementsAr: string;
  reviewCycleAndDurationEn: string;
  reviewCycleAndDurationAr: string;
  howUsedInProjectEn: string;
  howUsedInProjectAr: string;
  officialApplicationUrl: string;
}

export interface OfficialVerificationLink {
  num: number;
  titleEn: string;
  titleAr: string;
  category: 'Epidemiology' | 'Standards' | 'Datasets' | 'Hardware & Android' | 'Anthropic Official';
  url: string;
  verifiedDate: string;
}

export const FIRST_SCREEN_REVIEWER_QA: FirstScreenReviewerQA[] = [
  {
    id: 'Q1',
    questionEn: '1. What is the specific scientific problem?',
    questionAr: '1. ما المشكلة العلمية المحددة التي يعالجها المشروع؟',
    answerEn:
      'Smartphone camera remote photoplethysmography (rPPG) suffers severe signal degradation under realistic hand/head motion, optical defocus blur, and ambient illumination shifts—causing unconstrained regression models to output confident but physiologically corrupted heart-rate (HR) estimates.',
    answerAr:
      'يعاني تقدير النبض البصري عن بُعد (rPPG) عبر كاميرا الهاتف الذكي من تدهور حاد في الإشارة تحت ظروف الحركة الواقعية، وضبابية عدم التركيز البصري، وتقلبات الإضاءة المحيطة، مما يدفع النماذج التقليدية إلى إخراج تقديرات معدل نبض (HR) واثقة ظاهرياً لكنها فاسدة فيزيائياً.',
    badge: 'IMPLEMENTED',
  },
  {
    id: 'Q2',
    questionEn: '2. What is the core hypothesis & technical contribution?',
    questionAr: '2. ما الفرضية أو المساهمة العلمية والهندسية الأساسية؟',
    answerEn:
      'Enforcing a two-stage Uncertainty-Aware Selective Abstention Gate—combining Laplacian spatial focus variance Var(∇²I) and composite Signal Quality Index (SQI: harmonic spectral concentration + morphologykurtosis)—significantly reduces Selective Risk (HR MAE in BPM) at a quantifiable Coverage trade-off within a 16KB-aligned C++17/Kotlin on-device architecture.',
    answerAr:
      'إن تطبيق بوابة امتناع انتقائي واعية بعدم اليقين (Selective Abstention Gate) من مرحلتين—تجمع بين تباين لابلاسيان للبؤرة المكانية Var(∇²I) ومؤشر جودة الإشارة المركب (SQI: تركيز الطاقة التوافقية + التفرطح المورفولوجي)—يُخفض مخاطر الخطأ الانتقائي (HR MAE BPM) مقابل مقايضة قابلة للقياس في نسبة التغطية (Coverage) ضمن معمارية محلية متوافقة مع صفحات 16KB.',
    badge: 'PROPOSED',
  },
  {
    id: 'Q3',
    questionEn: '3. What has actually been implemented today?',
    questionAr: '3. ما الذي تم بناؤه وتنفيذه فعلياً حتى الآن؟',
    answerEn:
      'An interactive bilingual research prototype featuring: (a) deterministic synthetic signal generators and unit-tested mathematical models in TypeScript (src/utils/biophysicsMath.ts), (b) interactive Selective Prediction Risk–Coverage & signal-quality laboratories, and (c) complete reference C++17 NDK / Kotlin architectural blueprints (64-byte cache-aligned structs, reflection-padded filtfilt, local 4-timestamp clock offset estimator).',
    answerAr:
      'نموذج بحثي تفاعلي ثنائي اللغة يضم: (أ) مولدات إشارات اصطناعية حتمية ونماذج رياضية مختبرة برمجياً في TypeScript (src/utils/biophysicsMath.ts)، (ب) مختبرات تفاعلية لمنحنى المخاطرة مقابل التغطية (Risk–Coverage) وبوابات جودة الإشارة، و(ج) مخططات معمارية مرجعية بلغة C++17 NDK وKotlin (هياكل 64 بايت، مرشح filtfilt مع انعكاس حواف، ومقدر انحراف الساعة المحلي بـ 4 طوابع زمنية).',
    badge: 'SIMULATED',
  },
  {
    id: 'Q4',
    questionEn: '4. What empirical evidence is available right now?',
    questionAr: '4. ما الدليل التجريبي المتاح حالياً؟',
    answerEn:
      'Automated unit tests (node:test) verify the mathematical properties of the synthetic POS rPPG filter, SQI/Laplacian abstention logic, Risk–Coverage monotonicity, and Bradford D65 chromatic adaptation equations. Hardware latency figures (e.g., 0.68 ms NPU) are currently Estimated Design Targets awaiting physical Dimensity 9400+ trace logs.',
    answerAr:
      'اختبارات وحدات برمجية آلية (node:test) تتحقق من الخصائص الرياضية لمرشح POS rPPG الاصطناعي، ومنطق الامتناع (SQI/Laplacian)، ورتابة منحنى المخاطرة والتغطية، ومعادلات التكيف اللوني Bradford D65. أما أرقام زمن الاستجابة العتادي (مثل 0.68 ms NPU) فهي حالياً أهداف تصميمية مقدرة بانتظار سجلات القياس الفعلي على الجهاز.',
    badge: 'SIMULATED',
  },
  {
    id: 'Q5',
    questionEn: '5. What remains unproven & requires future validation?',
    questionAr: '5. ما الذي لم يثبت بعد ويتطلب تحققاً مستقبلياً؟',
    answerEn:
      'Clinical validation has not yet been conducted (0 clinically validated claims). Retrospective benchmarking on public facial video datasets (PURE, UBFC-rPPG) with frozen validation thresholds, physical smartphone NPU profiling, and IRB-approved prospective clinical studies for secondary exploratory hypotheses (cuffless BP, ocular colorimetry, acoustic breathing) remain future work.',
    answerAr:
      'لم يُجرَ أي تحقق سريري على البشر حتى الآن (0 ادعاءات مصادق عليها سريرياً). إن التقييم المرجعي على قواعد بيانات الفيديو العامة (PURE وUBFC-rPPG) بعتبات مجمدة مسبقاً، والقياس الفعلي على معالج الهاتف، والدراسات السريرية المستقبلية بموافقة لجنة الأخلاقيات (IRB) للفرضيات الاستكشافية الثانوية تظل أعمالاً مستقبلية مخططة.',
    badge: 'PROPOSED',
  },
];

export const SOURCE_AUDIT_MATRIX: SourceAuditMatrixRow[] = [
  {
    id: 'AUD-01',
    claimOrModuleEn: 'Core V1 Scope: Quality-Gated Facial/Contact rPPG & Selective Abstention Gate',
    claimOrModuleAr: 'النطاق الأساسي (V1): استخلاص rPPG المحكوم بجودة الإشارة وبوابة الامتناع الانتقائي',
    sourceFilePath: 'src/utils/biophysicsMath.ts (simulatePosRppgWindow, computeSelectiveRiskCoverageCurve)',
    statusBadge: 'SIMULATED',
    currentImplementationEn:
      'Deterministic synthetic 180-sample (3.0s @ 60Hz) multi-harmonic arterial waveform generator + synthetic motion noise (4.2Hz, 0.28Hz, 7.8Hz) + forward-backward 3-tap smoothing + Risk-Coverage curve calculator.',
    currentImplementationAr:
      'مولد إشارة شريانية اصطناعي حتمي (180 عينة / 3 ثوانٍ عند 60Hz) مع ضوضاء حركة اصطناعية وتنعيم أمامي-خلفي وحاسبة منحنى المخاطرة والتغطية.',
    auditFindingEn:
      'Previously presented alongside multi-disease diagnostic claims without a prominent "SIMULATED DATA" badge above the canvas.',
    auditFindingAr:
      'كان يُعرض سابقاً بجانب ادعاءات تشخيصية متعددة الأمراض دون شارة "بيانات اصطناعية محاكاة" دائمة فوق لوحة الرسم.',
    appliedRevisionEn:
      'Elevated as the primary V1 research focus; added permanent "SIMULATED DATA — NOT A CLINICAL MEASUREMENT" badge, explicit synthetic equations, and an interactive Selective Prediction Risk–Coverage curve.',
    appliedRevisionAr:
      'تم تحديده كتركيز بحثي أساسي للإصدار الأول (V1) مع إضافة شارة "بيانات محاكاة" دائمة، وعرض المعادلات الاصطناعية، ومنحنى المخاطرة مقابل التغطية التفاعلي.',
    requiredToProveEn:
      'Subject-independent retrospective evaluation on PURE (10 subjects) and UBFC-rPPG (42 subjects) reporting HR MAE, RMSE, Pearson r, Bland-Altman 95% LoA, and Selective Risk-Coverage curves.',
    requiredToProveAr:
      'تقييم استرجاعي مستقل عن الأشخاص على قاعدتي PURE (10 أشخاص) وUBFC-rPPG (42 شخصاً) مع نشر HR MAE وRMSE وBland-Altman LoA ومنحنيات المخاطرة والتغطية.',
  },
  {
    id: 'AUD-02',
    claimOrModuleEn: 'Composite SQI Gate (0.70 Spectral + 0.30 Kurtosis >= 0.65) & Laplacian Focus Gate (>= 110.0)',
    claimOrModuleAr: 'بوابة جودة الإشارة المركبة (SQI >= 0.65) وبوابة تباين لابلاسيان للبؤرة (>= 110.0)',
    sourceFilePath: 'src/data/productionCodebase.ts & src/components/ClinicalProtocolSection.tsx',
    statusBadge: 'PROPOSED',
    currentImplementationEn:
      'Documented mathematically and implemented as a threshold check in TypeScript simulation and C++17 reference code.',
    currentImplementationAr:
      'موثقة رياضياً ومنفذة كشرط فحص عتبي في محاكاة TypeScript وكود C++17 المرجعي.',
    auditFindingEn:
      'Thresholds (0.70, 0.30, 0.65, 110.0) were previously described as fixed universal constants without specifying fundamental frequency bandwidth (Delta_f) or grayscale ROI image scaling.',
    auditFindingAr:
      'كانت العتبات (0.70، 0.30، 0.65، 110.0) توصف كثوابت عالمية مطلقة دون تحديد عرض النطاق الترددي (Delta_f) أو أبعاد وتدرج صورة منطقة الاهتمام (ROI).',
    appliedRevisionEn:
      'Explicitly defined Delta_f = ±0.15 Hz around f0 and 2f0 on a 3.0s Hanning window; defined Var(∇²I) on an 8-bit [0..255] grayscale 128x128 ROI patch; reclassified 0.65 and 110.0 as Empirical Heuristic Baseline Thresholds requiring validation-split tuning.',
    appliedRevisionAr:
      'تحديد عرض النطاق الترددي ±0.15 Hz حول f0 و2f0 على نافذة Hanning بطول 3.0 ثانية؛ وتحديد Var(∇²I) على رقعة ROI رمادية 8-bit [0..255] بأبعاد 128x128؛ وإعادة تصنيف 0.65 و110.0 كعتبات استكشافية أولية تتطلب المعايرة على مجموعة التحقق.',
    requiredToProveEn:
      'Threshold optimization on a held-out validation split and frozen evaluation on an external test split across diverse cameras and lighting.',
    requiredToProveAr:
      'معايرة العتبات على قسم التحقق (Validation Split) وتجميدها قبل الاختبار النهائي عبر كاميرات وإضاءات متنوعة.',
  },
  {
    id: 'AUD-03',
    claimOrModuleEn: 'Cuffless Blood Pressure (SBP/DBP) & HbA1c Parametric Explorer',
    claimOrModuleAr: 'مستكشف المعادلات البارامترية لضغط الدم بدون كفة (SBP/DBP) والسكر التراكمي (HbA1c)',
    sourceFilePath: 'src/utils/biophysicsMath.ts (computeHemodynamicEstimate) & src/components/LiveSimulatorsLab.tsx',
    statusBadge: 'SIMULATED',
    currentImplementationEn:
      'Parametric Bramwell-Hill / Moens-Korteweg equation explorer with baseline SBP anchor and heuristic autonomic/vascular proxy formula.',
    currentImplementationAr:
      'مستكشف معادلات بارامترية مستوحى من Bramwell-Hill / Moens-Korteweg مع معايرة أساسية وصيغة تقريبية استكشافية.',
    auditFindingEn:
      'Previously mixed IEEE 1708-2025 (cuffless wearables) with ISO 81060-2:2018 (cuff sphygmomanometers), conflated PTT with PAT (PEP), and presented HbA1c as an active smartphone diagnostic capability.',
    auditFindingAr:
      'كان يخلط بين معيار IEEE 1708-2025 ومعيار ISO 81060-2:2018 الخاص بأجهزة الكفة، ويدمج PTT مع PAT، ويعرض HbA1c كقدرة تشخيصية جاهزة عبر الهاتف.',
    appliedRevisionEn:
      'Removed HbA1c from V1 capabilities into Exploratory Future Hypotheses; separated IEEE 1708-2025 from ISO 81060-2:2018 in the Standards Table; distinguished PTT vs. PAT (including PEP) and documented baseline cuff calibration requirements.',
    appliedRevisionAr:
      'نقل HbA1c من قدرات الإصدار الأول إلى الفرضيات البحثية المستقبلية؛ وفصل معيار IEEE 1708-2025 عن ISO 81060-2:2018؛ وتوضيح الفرق بين PTT وPAT (شاملاً فترة ما قبل القذف PEP) وضرورة المعايرة بالكفة.',
    requiredToProveEn:
      'Synchronized dual-site arterial timing sensor validation under IEEE 1708-2025 protocol (static, posture change, treatment/recalibration decay); HbA1c requires venous HPLC laboratory blood testing.',
    requiredToProveAr:
      'تحقق متزامن بمستشعرين شريانيين وفق بروتوكول IEEE 1708-2025؛ بينما يتطلب HbA1c فحص دم وريدي مخبري (HPLC).',
  },
  {
    id: 'AUD-04',
    claimOrModuleEn: '20 kHz Near-Ultrasonic Acoustic Chest-Motion Phase Simulator',
    claimOrModuleAr: 'محاكي الطور الصوتي شبه فوق الصوتي (20 kHz) لحركة جدار الصدر',
    sourceFilePath: 'src/utils/biophysicsMath.ts (simulateUltrasonicSonar) & src/components/LiveSimulatorsLab.tsx',
    statusBadge: 'SIMULATED',
    currentImplementationEn:
      'Mathematical I/Q phase modulation model Delta_d = (Delta_phi / 4*pi) * (c / f_c) at 20 kHz (lambda = 17.15 mm) over synthetic breathing regimes.',
    currentImplementationAr:
      'نموذج رياضي لتضمين الطور المتعامد I/Q عند تردد 20 kHz (طول موجي 17.15 ملم) عبر أنماط تنفس اصطناعية.',
    auditFindingEn:
      'Previously labeled as clinical OSA / AHI diagnosis and used patient-implying labels ("Normal Patient", "Apnea Patient") without citing AASM Polysomnography (PSG) / HSAT requirements or smartphone speaker/mic roll-off constraints at 20 kHz.',
    auditFindingAr:
      'كان يُسمى سابقاً تشخيصاً سريرياً لانقطاع التنفس (OSA/AHI) ويستخدم تسميات توحي بمرضى حقيقيين دون ذكر متطلبات AASM لتخطيط النوم (PSG/HSAT) أو قيود استجابة سماعة وميكروفون الهاتف عند 20 kHz.',
    appliedRevisionEn:
      'Reframed as an Exploratory Near-Ultrasonic Acoustic Sensing Model (SIMULATED/PROPOSED); replaced mode buttons with "Synthetic Eupnea Waveform", "Synthetic Hypopnea Model", and "Synthetic Flatline Model"; documented AASM PSG/HSAT guidelines and the 7 hardware acoustic verification questions.',
    appliedRevisionAr:
      'إعادة تأطيره كنموذج استكشافي للاستشعار الصوتي شبه فوق الصوتي؛ واستبدال أزرار الأنماط بتسميات موجات اصطناعية صريحة؛ وتوثيق إرشادات AASM (PSG/HSAT) والأسئلة الهندسية السبعة للتحقق من عتاد الصوت.',
    requiredToProveEn:
      'Physical smartphone acoustic frequency-response characterization (18–22 kHz) and simultaneous multi-channel overnight PSG/HSAT comparison.',
    requiredToProveAr:
      'توصيف الاستجابة الترددية الفعلية لسماعة وميكروفون الهاتف (18–22 kHz) ومقارنة ليلية متزامنة مع تخطيط النوم المتعدد القنوات (PSG/HSAT).',
  },
  {
    id: 'AUD-05',
    claimOrModuleEn: 'Ocular CIE L*a*b* Bradford Chromatic Adaptation Simulator (Sclera & Conjunctiva)',
    claimOrModuleAr: 'محاكي التكيف اللوني Bradford CIE L*a*b* لصلبة العين والملتحمة',
    sourceFilePath: 'src/utils/biophysicsMath.ts (computeEyeLabCalibration) & src/components/LiveSimulatorsLab.tsx',
    statusBadge: 'SIMULATED',
    currentImplementationEn:
      'Synthetic illuminant shift model (2700K warm indoor light to 6500K D65 daylight) demonstrating b* and a*/L* stabilization.',
    currentImplementationAr:
      'نموذج اصطناعي لانحراف الإضاءة (من 2700K دافئة إلى 6500K نهارية D65) يوضح استقرار محوري b* وa*/L*.',
    auditFindingEn:
      'Previously paired CLSI EP17-A2 with Hb MAE <= 0.85 g/dL and Bilirubin AUC >= 0.92, and omitted the camera ISP white-balance lock and physical color reference card requirements.',
    auditFindingAr:
      'كان يربط خطأً بين معيار CLSI EP17-A2 وأهداف الدقة السريرية (Hb MAE <= 0.85 g/dL وBilirubin AUC >= 0.92)، ويغفل متطلبات قفل التوازن الأبيض (AWB) وبطاقة المعايرة اللونية الفيزيائية.',
    appliedRevisionEn:
      'Corrected CLSI standards mapping (EP17-A2 is exclusively for LoB/LoD/LoQ; quantitative method comparison requires CLSI EP09 and EP05/EP15); documented the full sRGB -> linear RGB -> CCM -> CIE XYZ -> Bradford D65 -> CIE L*a*b* pipeline and physical reference card requirement.',
    appliedRevisionAr:
      'تصحيح معايير CLSI (حيث يختص EP17-A2 بحدود الكشف LoB/LoD/LoQ فقط، بينما تتطلب مقارنة الطرق الكمية معياري CLSI EP09 وEP05/EP15)؛ وتوثيق سلسلة التحويل اللوني الكاملة وضرورة بطاقة المعايرة القياسية.',
    requiredToProveEn:
      'RAW/locked-ISP smartphone capture with an in-frame Macbeth/X-Rite color target validated against venous blood CBC hemoglobin and serum total bilirubin under CLSI EP09.',
    requiredToProveAr:
      'التقاط صور RAW أو مع قفل إعدادات ISP وبوجود بطاقة ألوان مرجعية داخل الإطار، ومقارنتها مع تحاليل الدم الوريدية (CBC والبيليروبين) وفق بروتوكول CLSI EP09.',
  },
  {
    id: 'AUD-06',
    claimOrModuleEn: 'PCG + Wear OS Multimodal Timing & Evaluation Metrics',
    claimOrModuleAr: 'تزامن تخطيط صوت القلب (PCG) وساعة Wear OS ومقاييس التقييم',
    sourceFilePath: 'src/data/bilingualContent.ts & src/components/ClinicalProtocolSection.tsx',
    statusBadge: 'PROPOSED',
    currentImplementationEn:
      'Architectural specification for pairing smartphone acoustic heart sounds (S1/S2) with wrist PPG timing.',
    currentImplementationAr:
      'توصيف معماري لمزامنة أصوات القلب الصوتية (S1/S2) عبر الهاتف مع توقيت نبض المعصم (PPG).',
    auditFindingEn:
      'Previously listed "Clarke Error Grid Zone A+B >= 96%" as the target metric for PCG + Wear OS timing, whereas Clarke Error Grid is exclusively a blood glucose clinical accuracy metric.',
    auditFindingAr:
      'كان يدرج خطأً "مخطط كلارك للخطأ (Clarke Error Grid Zone A+B >= 96%)" كمقياس لتقييم PCG + Wear OS، بينما مخطط كلارك مخصص حصرياً لقياس سكر الدم.',
    appliedRevisionEn:
      'Removed Clarke Error Grid completely from PCG/Wear OS evaluation; replaced with appropriate physiological timing metrics: S1-to-PPG interval MAE/RMSE (ms), Bland–Altman bias & 95% LoA, and F1/Sensitivity/Specificity for heart-sound event detection.',
    appliedRevisionAr:
      'إزالة مخطط كلارك للخطأ نهائياً من تقييم PCG/Wear OS؛ واستبداله بمقاييس التوقيت الفيزيولوجي الصحيحة: MAE/RMSE بالمللي ثانية، وتحليل Bland–Altman LoA، ومقاييس الحساسية والنوعية وF1 لكشف نبضات S1/S2.',
    requiredToProveEn:
      'Synchronized reference ECG + phonocardiogram + wrist PPG recordings evaluating beat-to-beat timing jitter and interval agreement.',
    requiredToProveAr:
      'تسجيلات مرجعية متزامنة لتخطيط القلب الكهربائي (ECG) وصوت القلب (PCG) ونبض المعصم (PPG) لتقييم دقة الفواصل الزمنية.',
  },
  {
    id: 'AUD-07',
    claimOrModuleEn: 'C++17 64-Byte Cache-Line Aligned BiophysicalFramePacket & 16KB ELF Page Alignment',
    claimOrModuleAr: 'هيكل البيانات الثنائي C++17 المحاذي لـ 64 بايت وتوافق صفحات الذاكرة 16KB في أندرويد 15+',
    sourceFilePath: 'src/data/productionCodebase.ts & src/components/BinaryMemoryArchitectureSection.tsx',
    statusBadge: 'IMPLEMENTED',
    currentImplementationEn:
      'C++17 reference struct with alignas(64), static_assert(sizeof == 64), static_assert(alignof == 64), offsetof checks, and CMake -Wl,-z,max-page-size=16384 flag.',
    currentImplementationAr:
      'هيكل مرجعي بلغة C++17 مع alignas(64) وفحوصات static_assert لحجم 64 بايت ومحاذاة 64 بايت وعلم ربط CMake لصفحات 16KB.',
    auditFindingEn:
      'Needed explicit clarification that double linearRgb[3] stores the spatial mean of the segmented ROI (R_lin, G_lin, B_lin)—not a full image frame—and that reflection-padded filtfilt operates on a non-causal 3.0s (180-sample) buffered window.',
    auditFindingAr:
      'كان يتطلب توضيحاً صريحاً بأن المصفوفة double linearRgb[3] تخزن المتوسط المكاني لمنطقة الاهتمام (ROI) وليس إطار الصورة الكامل، وأن مرشح filtfilt يعمل بشكل غير سببي (Non-causal) على نافذة مخزنة بطول 3.0 ثانية.',
    appliedRevisionEn:
      'Added static_assert(alignof(BiophysicalFramePacket) == 64) and offsetof verifications; clarified ROI spatial mean storage in linearRgb[3]; documented the non-causal 3.0s buffered window latency of forward-backward filtfilt vs. causal IIR filtering.',
    appliedRevisionAr:
      'إضافة فحوصات static_assert(alignof == 64) وoffsetof؛ وتوضيح تخزين المتوسط المكاني لـ ROI في linearRgb[3]؛ وتوثيق الطبيعة غير السببية لمرشح filtfilt على نافذة 3.0 ثانية مقارنة بالترشيح السببي.',
    requiredToProveEn:
      'Compile with Android NDK r28+ Clang and verify ELF p_align = 0x4000 via llvm-readelf -l.',
    requiredToProveAr:
      'الترجمة عبر Android NDK r28+ Clang والتحقق من محاذاة المقاطع التنفيذية p_align = 0x4000 بواسطة أداة llvm-readelf -l.',
  },
  {
    id: 'AUD-08',
    claimOrModuleEn: 'Hardware Profiling Targets on MediaTek Dimensity 9400+ (NPU 890) & Benchmarking Table',
    claimOrModuleAr: 'أهداف الأداء العتادي على شريحة MediaTek Dimensity 9400+ (NPU 890) وجدول المقارنات المرجعية',
    sourceFilePath: 'src/components/HardwareAuditSection.tsx & src/components/BenchmarkComparisonsSection.tsx',
    statusBadge: 'PROPOSED',
    currentImplementationEn:
      'Verified MediaTek Dimensity 9400+ hardware specifications (1x Cortex-X925 @ 3.73GHz, 3x Cortex-X4, 4x Cortex-A720, NPU 890, Immortalis-G925 MC12) alongside latency/accuracy design target tables.',
    currentImplementationAr:
      'مواصفات عتادية موثقة لشريحة Dimensity 9400+ مع جداول أهداف زمن الاستجابة والدقة التصميمية.',
    auditFindingEn:
      'Execution times (0.68 ms NPU, 1.15 ms DSP, 2.9% CPU, 0 allocs/sec) and retrospective dataset metrics were previously displayed without clearly labeling them as Estimated Design Targets pending physical device trace logs.',
    auditFindingAr:
      'كانت أزمنة التنفيذ (0.68 ms NPU و1.15 ms DSP) ومقاييس قواعد البيانات تُعرض دون وسمها بوضوح كأهداف تصميمية مقدرة بانتظار سجلات القياس الفعلي.',
    appliedRevisionEn:
      'Labeled all latency and accuracy targets as "ESTIMATED / SIMULATED DESIGN TARGETS (Pending Physical Device Profiling & Frozen-Split Evaluation)" and added the full Benchmark Reproducibility Protocol (device model, OS build, warm-up runs, 1,000 timed iterations, p50/p95/p99, battery/thermal logging).',
    appliedRevisionAr:
      'وسم جميع أرقام الكمون والدقة كـ "أهداف تصميمية مقدرة / محاكاة (بانتظار القياس الفعلي على الجهاز والتقييم المستقل)" مع إضافة بروتوكول إعادة إنتاج القياس المرجعي الكامل.',
    requiredToProveEn:
      'Export Perfetto / Android Studio Profiler trace logs and LiteRT benchmark tool JSON outputs from a physical Dimensity 9400+ handset.',
    requiredToProveAr:
      'تصدير سجلات Perfetto / Android Studio Profiler وملفات قياس LiteRT من هاتف فعلي يعمل بشريحة Dimensity 9400+.',
  },
  {
    id: 'AUD-09',
    claimOrModuleEn: 'Local 4-Timestamp Bluetooth Clock-Offset Estimator & On-Device SQLCipher Storage',
    claimOrModuleAr: 'مقدر انحراف الساعة المحلي بـ 4 طوابع زمنية عبر البلوتوث والتخزين المشفر عبر SQLCipher',
    sourceFilePath: 'src/data/productionCodebase.ts & src/components/ExecutionWorkflowSection.tsx',
    statusBadge: 'IMPLEMENTED',
    currentImplementationEn:
      'Kotlin reference implementation of the 4-timestamp round-trip offset equation theta = ((T2 - T1) + (T3 - T4)) / 2 and Room/SQLCipher SupportFactory setup.',
    currentImplementationAr:
      'كود مرجعي بلغة Kotlin لمعادلة الطوابع الزمنية الأربعة وإعداد قاعدة بيانات Room/SQLCipher.',
    auditFindingEn:
      'Class was previously named NtpClockSynchronizer (implying internet NTP servers while claiming 100% offline operation) and used absolute claims like "100% hardware-encrypted".',
    auditFindingAr:
      'كان الكلاس يحمل اسم NtpClockSynchronizer (مما يوحي بالاتصال بخوادم NTP عبر الإنترنت رغم ادعاء العمل دون إنترنت) مع استخدام عبارات مطلقة مثل "مشفر عتادياً بنسبة 100%".',
    appliedRevisionEn:
      'Renamed to LocalFourTimestampClockOffsetEstimator (operating purely over local Bluetooth GATT/L2CAP timestamps T1..T4 without internet NTP); replaced absolute slogans with accurate engineering descriptions of SQLCipher AES-256 at-rest database encryption and Android Keystore KeyInfo.isInsideSecurityHardware verification.',
    appliedRevisionAr:
      'إعادة التسمية إلى LocalFourTimestampClockOffsetEstimator (يعمل محلياً عبر طوابع البلوتوث T1..T4 دون خوادم NTP)؛ واستبدال الشعارات المطلقة بوصف هندسي دقيق لتشفير البيانات المخزنة عبر SQLCipher AES-256 وفحص دعم العتاد الأمني Keystore.',
    requiredToProveEn:
      'BLE loopback jitter characterization between Wear OS watch and Android host handset.',
    requiredToProveAr:
      'قياس تذبذب التوقيت (Jitter) الفعلي عبر البلوتوث بين ساعة Wear OS والهاتف المضيف.',
  },
  {
    id: 'AUD-10',
    claimOrModuleEn: 'Global Epidemiological Burden Context & Removal of "Lives Saved" Ticker',
    claimOrModuleAr: 'السياق الوبائي العالمي وإزالة عداد الوفيات الحي وعبارة "الأرواح المنقذة"',
    sourceFilePath: 'src/components/HumanitarianCrisisSection.tsx & src/utils/biophysicsMath.ts',
    statusBadge: 'IMPLEMENTED',
    currentImplementationEn:
      'Epidemiological context section summarizing WHO, IDF, and Lancet global prevalence and undiagnosed burden estimates.',
    currentImplementationAr:
      'قسم السياق الوبائي العالمي الذي يلخص تقديرات منظمة الصحة العالمية (WHO) والاتحاد الدولي للسكري (IDF) ومجلة Lancet.',
    auditFindingEn:
      'Previously included a dramatized "Live Global Mortality Ticker" and summed overlapping condition pools (600M + 800M + 252M + 301M = 1.95B; 80% = 1.56B) under the label "Lives Saved / Rescued".',
    auditFindingAr:
      'كان يتضمن "عداد وفيات عالمي حي" درامي ويجمع فئات مرضية متداخلة (1.95 مليار؛ 80% = 1.56 مليار) تحت مسمى "أرواح منقذة".',
    appliedRevisionEn:
      'Removed the live mortality ticker; replaced "Lives Saved" with "Theoretical Target Screening Population Reach (Non-Additive Across Comorbidities)"; added a complete Epidemiological Provenance Table documenting exact data years, age groups (e.g., 30–69 yrs for OSA), URLs, and why comorbidity overlap prevents simple addition.',
    appliedRevisionAr:
      'إزالة عداد الوفيات الحي؛ واستبدال "الأرواح المنقذة" بـ "الوصول النظري للفحص الأولي (غير قابل للجمع المباشر بسبب تداخل الأمراض المشتركة)"؛ وإضافة جدول توثيق المصادر الوبائية الكامل مع سنوات البيانات والفئات العمرية والروابط.',
    requiredToProveEn:
      'Direct citation of primary epidemiological publications (verified as of 14 November 2026).',
    requiredToProveAr:
      'توثيق مباشر للمنشورات الوبائية الأصلية (تم التحقق منها بتاريخ 14 نوفمبر 2026).',
  },
  {
    id: 'AUD-11',
    claimOrModuleEn: 'Anthropic Grant Programs Separation & Verified Public API Budget Calculator',
    claimOrModuleAr: 'الفصل بين برامج دعم Anthropic وحاسبة ميزانية نماذج API العامة الموثقة',
    sourceFilePath: 'src/components/AnthropicJustification.tsx & src/components/GrantApplicationPackage.tsx',
    statusBadge: 'IMPLEMENTED',
    currentImplementationEn:
      'Interactive API token budget calculator, 6-month workplan, and grant justification package.',
    currentImplementationAr:
      'حاسبة تفاعلية لميزانية التوكنز، وخطة عمل لمدة 6 أشهر، وحزمة مسوغات التقديم للمنحة.',
    auditFindingEn:
      'Previously merged "Claude Team Plan for Scientists" with "AI for Science API Credits", cited an unverified "Tier B ($15,000)" tier, and used unreleased/hypothetical model names (Opus 5.5, Sonnet 5.5, Fable 5.2) in the active budget calculator.',
    auditFindingAr:
      'كان يدمج بين برنامجي "Claude Team Plan for Scientists" و"AI for Science API Credits"، ويذكر فئة غير موثقة "Tier B ($15,000)"، ويستخدم أسماء نماذج غير معلنة رسمياً في حاسبة الميزانية.',
    appliedRevisionEn:
      'Strictly separated Program A (Claude Team Plan for Scientists: $0/mo Standard, $15/user/mo Premium, up to 25 seats for 12 months) from Program B (Anthropic AI for Science API Credits: up to $20,000 over 6 months, reviewed first Monday of each month); updated calculator to use documented public API models (Claude Opus 4.1/4, Claude Sonnet 4.5/4, Claude Haiku 3.5) with explicit Input/Output token pricing, Cache Hit discounts, and Low/Base/High scenarios.',
    appliedRevisionAr:
      'فصل تام بين البرنامج A (خطة الفريق للعلماء: 0$ للمقعد القياسي و15$ للمميز حتى 25 مقعداً لمدة 12 شهراً) والبرنامج B (أرصدة AI for Science API: حتى 20,000 دولار لمدة 6 أشهر)؛ وتحديث الحاسبة لتستخدم نماذج API العامة الموثقة مع أسعار الإدخال والإخراج والتخزين المؤقت وسيناريوهات منخفض/أساسي/مرتفع.',
    requiredToProveEn:
      'Direct verification against official Anthropic program pages and public API pricing documentation.',
    requiredToProveAr:
      'مطابقة مباشرة مع صفحات برامج Anthropic الرسمية ووثائق تسعير API العامة.',
  },
  {
    id: 'AUD-12',
    claimOrModuleEn: 'Academic Roles, Institutional Affiliations & Six Exploratory Horizon Conditions',
    claimOrModuleAr: 'الأدوار الأكاديمية، الانتماء المؤسسي، والفرضيات الاستكشافية الست للمؤشرات الحيوية',
    sourceFilePath: 'src/components/InstitutionalSupervisionSection.tsx & src/components/FutureBiomarkersHorizonSection.tsx',
    statusBadge: 'PROPOSED',
    currentImplementationEn:
      'Team governance cards (Ahmed Elshal, Dr. Hayam Abd El-Mardy, Dr. Osama Helmy at FA-HISTS) and 6 future disease research horizon cards (AFib, Parkinsonian tremor, CHF, CKD, mTBI pupillometry, Preeclampsia).',
    currentImplementationAr:
      'بطاقات الفريق البحثي في معهد المستقبل العالي (FA-HISTS) وبطاقات الآفاق البحثية المستقبلية الست.',
    auditFindingEn:
      'Used grant "Co-PI" titles without clarifying student vs. faculty advisor roles or written institutional endorsement status; listed Dell EMC / Huawei ICT Academy without clarifying they are institute curriculum memberships; needed stronger "Conceptual Literature Hypotheses Only" framing on the 6 future biomarkers.',
    auditFindingAr:
      'استخدم ألقاب "Co-PI" دون توضيح دور الباحث الطلابي مقابل الإشراف الأكاديمي أو حالة الخطاب الرسمي؛ وذكر أكاديميات Dell EMC وHuawei دون توضيح أنها عضويات تدريبية للمعهد؛ وكان يحتاج لتأكيد أن الأمراض الستة هي فرضيات أدبية مستقبلية فقط.',
    appliedRevisionEn:
      'Updated roles to "Lead Student Researcher & Prototype Developer (Ahmed Elshal)" and "Academic Advisors / Faculty Mentors (Dr. Hayam Abd El-Mardy & Dr. Osama Helmy — Formal written institutional endorsement to be completed prior to PI-led grant submission)"; added explicit Dell EMC / Huawei ICT disclaimer and IRB status disclosure; labeled all 6 future conditions as "CONCEPTUAL LITERATURE HYPOTHESES — NOT IMPLEMENTED OR VALIDATED".',
    appliedRevisionAr:
      'تحديث الأدوار إلى "الباحث الطلابي الرئيسي ومطور النموذج الأولي (أحمد الشال)" و"المشرفان الأكاديميان (د. هيام عبد المرضي ود. أسامة حلمي — الخطاب المؤسسي الرسمي قيد الاستكمال قبل التقديم للمنح المشترطة بـ PI)"؛ وإضافة إخلاء مسؤولية Dell EMC / Huawei وحالة IRB؛ ووسم الأمراض الستة كفرضيات أدبية مستقبلية غير منفذة.',
    requiredToProveEn:
      'Signed institutional endorsement letter on FA-HISTS letterhead and formal IRB protocol approval prior to human-subject data collection.',
    requiredToProveAr:
      'خطاب اعتماد مؤسسي موقع على ورق معهد المستقبل العالي (FA-HISTS) وموافقة لجنة أخلاقيات البحث العلمي (IRB) قبل جمع أي بيانات بشرية.',
  },
];

export const CORRECTED_STANDARDS_TABLE: StandardComparisonRow[] = [
  {
    standardName: 'IEEE Std 1708-2025',
    activeVersion: '2025 (Supersedes 1708-2014 & 1708a-2019)',
    issuingBody: 'IEEE Standards Association (EMBS)',
    scopeEn:
      'Standard for Wearable, Cuffless Blood Pressure Measuring Devices. Evaluates static accuracy, accuracy under induced BP changes (posture/exercise), and long-term calibration stability/drift.',
    scopeAr:
      'المعيار القياسي لأجهزة قياس ضغط الدم القابلة للارتداء بدون كفة هوائية (Cuffless). يقيّم الدقة الثابتة، والدقة تحت تغيرات الضغط المستحثة، واستقرار المعايرة بمرور الوقت.',
    applicableDeviceTypeEn:
      'Wearable cuffless BP estimators (e.g., dual-site PPG/ECG/PCG pulse transit time systems requiring initial cuff calibration or population calibration).',
    applicableDeviceTypeAr:
      'مقدرات ضغط الدم بدون كفة (مثل أنظمة زمن عبور النبضة PTT التي تتطلب معايرة أولية ودورية).',
    auditCorrectionEn:
      'Strictly separated from ISO 81060-2:2018. In our project, cuffless BP is classified as an Exploratory Secondary Hypothesis (PROPOSED/SIMULATED) that would require future evaluation under IEEE 1708-2025.',
    auditCorrectionAr:
      'تم فصله تماماً عن معيار ISO 81060-2:2018. في مشروعنا يُصنف ضغط الدم بدون كفة كفرضية استكشافية ثانوية (PROPOSED/SIMULATED) تتطلب مستقبلاً التقييم وفق IEEE 1708-2025.',
    officialUrl: 'https://standards.ieee.org/ieee/1708/11065/',
  },
  {
    standardName: 'ISO 81060-2:2018 (Amd 1:2020 / Amd 2:2024)',
    activeVersion: 'Third Edition (2018) + Amendments',
    issuingBody: 'International Organization for Standardization (ISO)',
    scopeEn:
      'Non-invasive sphygmomanometers — Part 2: Clinical investigation of intermittent automated measurement type (minimum n >= 85 subjects, >= 255 paired readings, mean error <= ±5 mmHg, SD <= 8 mmHg).',
    scopeAr:
      'أجهزة قياس ضغط الدم غير الباضعة — الجزء 2: التحقيق السريري للأجهزة الآلية المتقطعة ذات الكفة الهوائية (الحد الأدنى 85 شخصاً، 255 قراءة مزدوجة، متوسط الخطأ <= ±5 mmHg، الانحراف المعياري <= 8 mmHg).',
    applicableDeviceTypeEn:
      'Intermittent automated cuff-based sphygmomanometers (oscillometric/auscultatory inflatable cuffs). Does NOT directly validate continuous optical cuffless PPG estimators.',
    applicableDeviceTypeAr:
      'أجهزة قياس ضغط الدم الآلية المتقطعة المعتمدة على الكفة الهوائية القابلة للنفخ فقط، ولا ينطبق مباشرة كمعيار مصادقة للأجهزة البصرية بدون كفة.',
    auditCorrectionEn:
      'Clarified that ISO 81060-2:2018 governs the reference cuff sphygmomanometers used during calibration/comparison, NOT optical cuffless smartphone PPG.',
    auditCorrectionAr:
      'توضيح أن معيار ISO 81060-2:2018 يحكم أجهزة الكفة المرجعية المستخدمة في المعايرة والمقارنة، وليس قياس PPG البصري بدون كفة.',
    officialUrl: 'https://www.iso.org/standard/73339.html',
  },
  {
    standardName: 'CLSI EP17-A2',
    activeVersion: '2nd Edition (2012)',
    issuingBody: 'Clinical and Laboratory Standards Institute (CLSI)',
    scopeEn:
      'Evaluation of Detection Capability for Clinical Laboratory Measurement Procedures: defines Limit of Blank (LoB), Limit of Detection (LoD), and Limit of Quantitation (LoQ).',
    scopeAr:
      'تقييم قدرة الكشف لإجراءات القياس في المختبرات السريرية: يحدد حد الفراغ (LoB) وحد الكشف (LoD) وحد التقدير الكمي (LoQ) عند التراكيز المنخفضة جداً.',
    applicableDeviceTypeEn:
      'In-vitro clinical laboratory assays near the lower analytical detection threshold.',
    applicableDeviceTypeAr:
      'الفحوصات المخبرية السريرية عند حدود التركيز الدنيا فقط.',
    auditCorrectionEn:
      'Removed the incorrect pairing of CLSI EP17-A2 with Hb MAE <= 0.85 g/dL and Bilirubin AUC >= 0.92. Quantitative method comparison and bias estimation against venous laboratory reference require CLSI EP09, while precision/reproducibility require CLSI EP05 / EP15.',
    auditCorrectionAr:
      'إزالة الربط الخاطئ بين CLSI EP17-A2 وأهداف الدقة السريرية (Hb MAE <= 0.85 g/dL وBilirubin AUC >= 0.92)؛ وتوضيح أن مقارنة الطرق الكمية وتقدير الانحياز يتطلبان معيار CLSI EP09، بينما تتطلب الدقة والتكرارية معياري CLSI EP05 وEP15.',
    officialUrl: 'https://clsi.org/standards/products/method-evaluation/documents/ep17/',
  },
  {
    standardName: 'AASM Manual for the Scoring of Sleep and Associated Events & Clinical Practice Guideline',
    activeVersion: 'Version 3 (2023/2024) & Diagnostic Testing Guideline (2017)',
    issuingBody: 'American Academy of Sleep Medicine (AASM)',
    scopeEn:
      'Defines clinical diagnosis of Obstructive Sleep Apnea (OSA) and Apnea-Hypopnea Index (AHI) scoring criteria: Apnea requires >= 90% drop in respiratory airflow sensor signal for >= 10s; Hypopnea requires >= 30% airflow drop for >= 10s with >= 3% SpO2 desaturation or cortical arousal.',
    scopeAr:
      'يحدد المعايير السريرية لتشخيص انقطاع التنفس الانسدادي أثناء النوم (OSA) وحساب مؤشر AHI: يتطلب انقطاع التنفس انخفاضاً >= 90% في تدفق الهواء لمدة >= 10 ثوانٍ؛ ويتطلب ضعف التنفس انخفاضاً >= 30% مع هبوط تشبع الأكسجين SpO2 بنسبة >= 3% أو استيقاظ قشري.',
    applicableDeviceTypeEn:
      'Attended in-laboratory Polysomnography (PSG) or validated multi-channel Home Sleep Apnea Testing (HSAT).',
    applicableDeviceTypeAr:
      'تخطيط النوم المتعدد القنوات في المختبر (PSG) أو أجهزة فحص النوم المنزلي متعددة القنوات المعتمدة (HSAT).',
    auditCorrectionEn:
      'Explicitly documented that single-channel smartphone 20 kHz acoustic chest-motion sensing CANNOT clinically diagnose OSA or score clinical AHI because it measures neither nasal/oral airflow nor arterial blood oxygen saturation (SpO2) or EEG arousal.',
    auditCorrectionAr:
      'توثيق صريح بأن الاستشعار الصوتي لحركة جدار الصدر عبر الهاتف عند 20 kHz لا يمكنه تشخيص OSA سريرياً أو حساب مؤشر AHI السريري لأنه لا يقيس تدفق الهواء الأنفي/الفموي ولا تشبع الأكسجين (SpO2) ولا نشاط الدماغ (EEG).',
    officialUrl: 'https://jcsm.aasm.org/doi/10.5664/jcsm.6506',
  },
  {
    standardName: 'TRIPOD+AI Statement (BMJ 2024)',
    activeVersion: '2024 Consensus Reporting Guideline',
    issuingBody: 'EQUATOR Network / BMJ (Collins et al., 2024)',
    scopeEn:
      'Updated reporting guidance for clinical prediction models that use regression or machine learning methods: mandates clear definition of target population, predictors, outcome, sample size calculation, subject-level data splitting, calibration, and subgroup fairness.',
    scopeAr:
      'الدليل الإرشادي المحدث للإبلاغ عن نماذج التنبؤ السريري التي تستخدم الانحدار أو تعلم الآلة: يلزم بتحديد الفئة المستهدفة، المتغيرات، المخرجات، حساب حجم العينة، الفصل على مستوى الأفراد لمنع تسرب البيانات، المعايرة، والعدالة عبر الفئات الفرعية.',
    applicableDeviceTypeEn:
      'Biomedical signal-processing and machine-learning prediction pipelines.',
    applicableDeviceTypeAr:
      'خطوط أنابيب معالجة الإشارات الطبية الحيوية ونماذج التنبؤ بتعلم الآلة.',
    auditCorrectionEn:
      'Added a dedicated TRIPOD+AI Statistical & Validation Protocol Appendix specifying unit of analysis (3.0s window), subject-independent splits, frozen validation thresholds, and selective prediction Risk–Coverage reporting.',
    auditCorrectionAr:
      'إضافة ملحق بروتوكول التحقق الإحصائي المتوافق مع TRIPOD+AI الذي يحدد وحدة التحليل (نافذة 3.0 ثانية)، والفصل المستقل للأفراد، وتجميد العتبات، وتقارير المخاطرة مقابل التغطية.',
    officialUrl: 'https://www.bmj.com/content/385/bmj-2023-078378',
  },
];

export const DATASET_PROVENANCE_TABLE: DatasetProvenanceRow[] = [
  {
    datasetName: 'PURE (Pulse Rate Detection Dataset)',
    versionAndModalityEn: 'Uncompressed RGB Facial Video (640x480 @ 30 fps) + Synchronized Finger Pulse Oximeter (CMS50E @ 60 Hz)',
    versionAndModalityAr: 'فيديو وجه RGB غير مضغوط (640x480 عند 30 إطار/ثانية) + مقياس نبض وأكسجة إصبع متزامن (CMS50E عند 60 Hz)',
    subjectsAndCameraEn: '10 subjects (8 male, 2 female) across 6 controlled head-motion tasks (steady, talking, slow/fast translation, small/medium rotation); ~60 one-minute sequences.',
    subjectsAndCameraAr: '10 أشخاص (8 ذكور، 2 إناث) عبر 6 مهام حركة رأس مضبوطة (ثبات، تحدث، انتقال بطيء/سريع، دوران صغير/متوسط)؛ حوالي 60 تسلسلاً مدة كل منها دقيقة.',
    containsFacialVideo: true,
    accessAndLicenseEn: 'Academic Research Request (Stricker et al., IEEE FG 2014, TU Ilmenau). Non-commercial research license.',
    accessAndLicenseAr: 'متاح بطلب أكاديمي بحثي (Stricker et al., IEEE FG 2014, TU Ilmenau) بترخيص بحثي غير تجاري.',
    demographicLimitationsEn: 'Very small cohort (n=10) predominantly light skin tones (Fitzpatrick I–III); cannot establish generalization across darker skin tones (Fitzpatrick IV–VI).',
    demographicLimitationsAr: 'عينة صغيرة جداً (n=10) تغلب عليها البشرة الفاتحة (Fitzpatrick I–III)؛ لا تكفي لإثبات التعميم عبر ألوان البشرة الداكنة (IV–VI).',
    projectStatus: 'PROPOSED',
    officialUrl: 'https://www.tu-ilmenau.de/universitaet/fakultaeten/fakultaet-informatik-und-automatisierung/profil/institute-und-fachgebiete/institut-fuer-technische-informatik-und-ingenieurinformatik/fachgebiet-neuroinformatik-und-kognitive-robotik/data-sets-code/pulse-rate-detection-dataset-pure',
  },
  {
    datasetName: 'UBFC-rPPG Dataset',
    versionAndModalityEn: 'Uncompressed 8-bit RGB Facial Video (640x480 @ 30 fps, Logitech C920 HD Pro) + CMS50E PPG Ground Truth',
    versionAndModalityAr: 'فيديو وجه RGB غير مضغوط 8-bit (640x480 عند 30 إطار/ثانية بكاميرا Logitech C920) + إشارة PPG مرجعية (CMS50E)',
    subjectsAndCameraEn: '42 subjects seated indoors (~1m from camera) under ambient daylight + artificial illumination (Bobbia et al., Pattern Recognition Letters 2019).',
    subjectsAndCameraAr: '42 شخصاً جالسين داخلياً (على بُعد 1 متر من الكاميرا) تحت إضاءة نهارية وصناعية (Bobbia et al., 2019).',
    containsFacialVideo: true,
    accessAndLicenseEn: 'Academic Research Request (Université Bourgogne Franche-Comté). Non-commercial research use.',
    accessAndLicenseAr: 'متاح بطلب أكاديمي بحثي (جامعة Bourgogne Franche-Comté) للاستخدام البحثي غير التجاري.',
    demographicLimitationsEn: 'Limited representation of Fitzpatrick V–VI skin types and severe outdoor motion/illumination regimes (see Nature Digital Medicine 2025 scoping review of 62 rPPG datasets).',
    demographicLimitationsAr: 'تمثيل محدود لأصحاب البشرة الداكنة (Fitzpatrick V–VI) وظروف الحركة الخارجية الشديدة (وفق مراجعة Nature Digital Medicine 2025 لـ 62 قاعدة بيانات rPPG).',
    projectStatus: 'PROPOSED',
    officialUrl: 'https://sites.google.com/view/ybenezeth/ubfcrppg',
  },
  {
    datasetName: 'MIMIC-IV Clinical Database (v3.1) vs. MIMIC-IV Waveform Database (v0.1.0)',
    versionAndModalityEn:
      'TWO DISTINCT DATABASES: (1) MIMIC-IV v3.1 contains de-identified ICU/ED electronic health records (tabular labs, vitals, ICD diagnoses); (2) MIMIC-IV Waveform v0.1.0 contains bedside physiological waveforms (ECG, contact finger PPG, invasive arterial blood pressure ABP).',
    versionAndModalityAr:
      'قاعدتا بيانات منفصلتان تماماً: (1) MIMIC-IV v3.1 تضم سجلات صحية إلكترونية جدولية للعناية المركزة والطوارئ؛ (2) MIMIC-IV Waveform v0.1.0 تضم موجات فسيولوجية سريرية (تخطيط قلب ECG، نبض إصبعي تلامسي PPG، وضغط شرياني باضع ABP).',
    subjectsAndCameraEn: 'ICU/hospital patients at Beth Israel Deaconess Medical Center. NEITHER database contains camera or facial video recordings.',
    subjectsAndCameraAr: 'مرضى العناية المركزة في مركز Beth Israel Deaconess الطبي. لا تحتوي أي من القاعدتين على أي تسجيلات كاميرا أو فيديو للوجه.',
    containsFacialVideo: false,
    accessAndLicenseEn: 'PhysioNet Credentialed Health Data License (requires CITI human-subjects training + signed Data Use Agreement) / ODC-By for demo subsets.',
    accessAndLicenseAr: 'ترخيص PhysioNet للبيانات الصحية المقيدة (يتطلب شهادة تدريب CITI وتوقيع اتفاقية استخدام البيانات DUA).',
    demographicLimitationsEn: 'Inpatient ICU contact finger PPG waveforms do not model smartphone camera optical path, CMOS rolling shutter, or ambient illumination shifts.',
    demographicLimitationsAr: 'موجات PPG التلامسية في العناية المركزة لا تمثل المسار البصري لكاميرا الهاتف أو غالق CMOS المتدحرج أو تقلبات الإضاءة المحيطة.',
    projectStatus: 'PROPOSED',
    officialUrl: 'https://physionet.org/content/mimiciv/3.1/',
  },
  {
    datasetName: 'PPG-BP Database (Liang et al., Scientific Data 2018)',
    versionAndModalityEn: 'Short Contact Finger PPG Segments (2.1s windows @ 1 kHz) + Reference Cuff Blood Pressure & Demographics',
    versionAndModalityAr: 'مقاطع قصيرة من إشارة PPG التلامسية للإصبع (نوافذ 2.1 ثانية بتردد 1 kHz) + قراءات ضغط دم مرجعية بالكفة وبيانات ديموغرافية',
    subjectsAndCameraEn: '219 subjects (657 short 2.1-second PPG segments recorded at Guilin People’s Hospital, China).',
    subjectsAndCameraAr: '219 شخصاً (657 مقطعاً قصيراً بطول 2.1 ثانية مسجلة في مستشفى قويلين الشعبي، الصين).',
    containsFacialVideo: false,
    accessAndLicenseEn: 'Open Scientific Data (Figshare / Nature Scientific Data, CC BY 4.0).',
    accessAndLicenseAr: 'بيانات علمية مفتوحة (Figshare / Nature Scientific Data بترخيص CC BY 4.0).',
    demographicLimitationsEn: 'Single-site cohort (n=219) with ultra-short 2.1s contact PPG windows; suitable only for exploratory SDPPG morphology study, NOT multi-site cuffless BP clinical validation.',
    demographicLimitationsAr: 'عينة من مركز واحد (n=219) بنوافذ تلامسية قصيرة جداً (2.1 ثانية)؛ صالحة فقط للدراسة الاستكشافية لشكل الموجة (SDPPG) وليست مصادقة سريرية لضغط الدم بدون كفة.',
    projectStatus: 'PROPOSED',
    officialUrl: 'https://doi.org/10.6084/m9.figshare.5459299',
  },
  {
    datasetName: 'FA-HISTS-Multimodal-Abstention-Dataset (Planned Future Protocol)',
    versionAndModalityEn: 'PLANNED / NOT YET COLLECTED: Proposed protocol for synchronized smartphone ROI signal traces + reference pulse oximeter under graded motion and illumination.',
    versionAndModalityAr: 'بروتوكول مستقبلي مخطط (لم يُجمع أو يُنشر بعد): مقترح لجمع إشارات منطقة الاهتمام (ROI) عبر الهاتف بالتزامن مع مقياس نبض مرجعي تحت درجات حركة وإضاءة متدرجة.',
    subjectsAndCameraEn: '0 subjects collected to date. Target protocol designed to ensure balanced Fitzpatrick I–VI representation.',
    subjectsAndCameraAr: '0 أشخاص تم جمع بياناتهم حتى الآن. البروتوكول المستهدف مصمم لضمان تمثيل متوازن لألوان البشرة Fitzpatrick I–VI.',
    containsFacialVideo: false,
    accessAndLicenseEn:
      'PRIVACY & IRB REQUIREMENT: Raw facial video is biometric personally identifiable data (NOT inherently de-identified). Any future collection requires formal IRB approval, explicit written informed consent, and immediate extraction of spatially averaged ROI RGB traces so raw identifiable faces are never publicly distributed.',
    accessAndLicenseAr:
      'متطلبات الخصوصية ولجنة الأخلاقيات (IRB): فيديو الوجه الخام هو بيانات بيومترية مُعرّفة للهوية الشخصية (وليس منزوع الهوية بطبيعته). أي جمع مستقبلي يتطلب موافقة رسمية من لجنة الأخلاقيات (IRB)، وموافقة مستنيرة مكتوبة، واستخلاص المتوسطات اللونية لمنطقة الاهتمام بحيث لا يُنشر فيديو الوجه الخام علناً.',
    demographicLimitationsEn: 'Dataset does not yet exist; all references in this repository represent the proposed collection schema.',
    demographicLimitationsAr: 'قاعدة البيانات غير موجودة بعد؛ جميع الإشارات إليها في الموقع تمثل مخطط البروتوكول المقترح مستقبلاً.',
    projectStatus: 'PROPOSED',
    officialUrl: 'https://www.bmj.com/content/385/bmj-2023-078378',
  },
];

export const TRIPOD_AI_PROTOCOL_ITEMS: TripodAiProtocolItem[] = [
  {
    categoryEn: '1. Unit of Analysis & Sliding Window Specification',
    categoryAr: '1. وحدة التحليل الإحصائي ومواصفات النافذة الزمنية المنزلقة',
    specificationEn:
      'Each evaluation unit is a 3.0-second (180-sample @ 60 Hz) buffered ROI signal window with a 1.0-second stride. Window-level errors are aggregated per subject first, and across subjects using hierarchical/clustered bootstrap confidence intervals to account for within-subject correlation.',
    specificationAr:
      'كل وحدة تحليل هي نافذة إشارة مخزنة بطول 3.0 ثانية (180 عينة عند 60 Hz) بإزاحة 1.0 ثانية. تُجمع الأخطاء على مستوى كل فرد أولاً، ثم عبر الأفراد باستخدام فترات ثقة Bootstrap عنقودية لمراعاة الارتباط الداخلي لنفس الشخص.',
    formulaOrRule: 'Window = 3.0s (N = 180 @ 60Hz), Stride = 1.0s; Clustered 95% CI by Subject ID',
  },
  {
    categoryEn: '2. Subject-Independent Data Splitting (Zero Subject Leakage)',
    categoryAr: '2. فصل البيانات المستقل على مستوى الأفراد (منع تسرب بيانات الأشخاص)',
    specificationEn:
      'All windows from a given human subject are assigned strictly to ONE partition (Training 60% / Validation 20% / Held-Out Test 20%, or Leave-One-Subject-Out cross-validation on small cohorts like PURE n=10). Frame-level or random window splitting across the same individual is strictly prohibited.',
    specificationAr:
      'تُخصص جميع النوافذ الزمنية الخاصة بأي شخص لقسم واحد حصرياً (تدريب 60% / تحقق 20% / اختبار نهائي 20%، أو Leave-One-Subject-Out في القواعد الصغيرة مثل PURE n=10). يُحظر تماماً التقسيم العشوائي للنوافذ من نفس الشخص.',
    formulaOrRule: 'Subject_Set(Train) ∩ Subject_Set(Val) ∩ Subject_Set(Test) = ∅',
  },
  {
    categoryEn: '3. Threshold Tuning & Freezing Rule (Pre-Test Lock)',
    categoryAr: '3. قاعدة معايرة وتجميد العتبات قبل الاختبار النهائي',
    specificationEn:
      'Candidate gate parameters—such as spectral/kurtosis weights (w1=0.70, w2=0.30), composite SQI threshold (tau_SQI = 0.65), and Laplacian focus threshold (tau_focus = 110.0)—are tuned exclusively on the Validation split to achieve a target Selective Risk (e.g., HR MAE <= 2.5 BPM) and are FROZEN prior to running a single pass on the external Test split.',
    specificationAr:
      'تُعاير معلمات البوابة المرشحة—مثل أوزان الطيف والتفرطح (0.70 و0.30)، وعتبة SQI (0.65)، وعتبة البؤرة المكانية (110.0)—حصرياً على قسم التحقق (Validation Split) ثم تُجمّد نهائياً قبل تشغيل تمريرة واحدة فقط على قسم الاختبار الخارجي.',
    formulaOrRule: 'tau_SQI*, tau_focus* = argmin_{Val} Risk(tau) s.t. Coverage(tau) >= C_min',
  },
  {
    categoryEn: '4. Continuous Heart Rate (HR) Agreement Metrics',
    categoryAr: '4. مقاييس التوافق المستمرة لمعدل نبض القلب (HR)',
    specificationEn:
      'Report Mean Absolute Error (MAE in BPM), Root Mean Squared Error (RMSE in BPM), Pearson correlation coefficient (r with 95% CI), and Bland–Altman Bias (mean difference) with 95% Limits of Agreement (Bias ± 1.96 * SD of differences) against reference ECG/PPG.',
    specificationAr:
      'الإبلاغ عن متوسط الخطأ المطلق (MAE BPM)، والجذر التربيعي لمتوسط مربع الخطأ (RMSE BPM)، ومعامل ارتباط بيرسون (r مع فترة ثقة 95%)، وانحياز Bland–Altman مع حدود التوافق 95% (Bias ± 1.96 * SD) مقارنة بـ ECG/PPG المرجعي.',
    formulaOrRule: 'MAE = (1/M) Σ |HR_est - HR_ref|; LoA_95% = Bias ± 1.96 * SD(HR_est - HR_ref)',
  },
  {
    categoryEn: '5. Selective Prediction Risk–Coverage Metrics',
    categoryAr: '5. مقاييس التنبؤ الانتقائي ومنحنى المخاطرة مقابل التغطية (Risk–Coverage)',
    specificationEn:
      'For every threshold tau in [0, 1], report: (a) Coverage(tau) = fraction of windows accepted, (b) Abstention Rate = 1 - Coverage(tau), (c) Selective Risk R(tau) = HR MAE on accepted windows only, and (d) Area Under the Risk–Coverage Curve (AURC), comparing Gated vs. Ungated (100% coverage) performance.',
    specificationAr:
      'لكل عتبة tau في [0, 1]، يتم الإبلاغ عن: (أ) نسبة التغطية Coverage(tau)، (ب) معدل الامتناع Abstention Rate = 1 - Coverage، (ج) المخاطرة الانتقائية R(tau) وهي خطأ HR MAE على النوافذ المقبولة فقط، و(د) المساحة تحت منحنى المخاطرة والتغطية (AURC).',
    formulaOrRule: 'Coverage(τ) = (1/N) Σ 1[SQI >= τ ∧ Focus >= τ_f]; Selective_Risk(τ) = Σ l(y_i, ŷ_i)·1[...] / Σ 1[...]',
  },
  {
    categoryEn: '6. Deterministic Edge-Case & Missing-Data Handling Rules',
    categoryAr: '6. قواعد معالجة الحالات الحدية وفقدان الإشارة',
    specificationEn:
      'Explicitly handle four failure regimes by forcing immediate abstention (SQI = 0.0, state = ABSTAINED) and logging the rejection reason code: (1) No estimable fundamental peak f0 in [0.7, 3.5] Hz, (2) CMOS channel saturation/clipping (>5% pixels at 0 or 255), (3) Sudden face/ROI bounding-box displacement (>15% inter-frame shift), and (4) Camera frame drop (>33 ms inter-frame gap).',
    specificationAr:
      'معالجة أربع حالات فشل حدية بفرض الامتناع الفوري (SQI = 0.0) وتسجيل رمز السبب: (1) غياب ذروة تردد أساسي f0 قابلة للتقدير في النطاق [0.7, 3.5] Hz، (2) تشبع مستشعر الكاميرا (أكثر من 5% من البكسلات عند 0 أو 255)، (3) إزاحة مفاجئة لمنطقة الوجه (>15% بين إطارين)، و(4) سقوط إطارات الكاميرا (فجوة زمنية > 33 ms).',
    formulaOrRule: 'if (!hasValidF0 || clippedRatio > 0.05 || roiShift > 0.15 || dtFrameMs > 33.0) -> ABSTAIN',
  },
];

export const EPIDEMIOLOGY_PROVENANCE_TABLE: EpidemiologyProvenanceRow[] = [
  {
    conditionEn: 'Hypertension (Adults Aged 30–79 Years)',
    conditionAr: 'ارتفاع ضغط الدم (البالغون بعمر 30–79 عاماً)',
    headlineFigure: '1.4 Billion living with hypertension (~8.5M–10.8M annual attributable deaths)',
    undiagnosedOrSubgroupFigure: '~600 Million (~44% unaware of their condition)',
    originalSource: 'World Health Organization (WHO) Hypertension Fact Sheet & Global Report on Hypertension',
    dataYear: '2024 global estimates',
    publicationDate: '25 September 2025 (Fact Sheet Update)',
    ageGroupAndPopulationEn: 'Global adults aged 30–79 years (SBP >= 140 mmHg and/or DBP >= 90 mmHg or taking antihypertensive medication).',
    ageGroupAndPopulationAr: 'البالغون عالمياً بعمر 30–79 عاماً (ضغط انقباضي >= 140 أو انبساطي >= 90 ملم زئبق أو يتناولون أدوية خافضة للضغط).',
    methodologicalDefinitionEn: 'Population-representative survey pooling and Bayesian hierarchical modeling by WHO / NCD-RisC.',
    methodologicalDefinitionAr: 'تجميع مسوحات سكانية تمثيلية ونمذجة هرمية بايزية عبر منظمة الصحة العالمية (WHO / NCD-RisC).',
    caveatEn:
      'Smartphone optical rPPG does NOT replace a validated cuff sphygmomanometer (ISO 81060-2:2018); cuffless BP remains an unvalidated exploratory hypothesis.',
    caveatAr:
      'نبض الكاميرا البصري (rPPG) لا يغني عن جهاز قياس الضغط ذي الكفة المعتمد (ISO 81060-2:2018)؛ ويظل تقدير الضغط بدون كفة فرضية بحثية غير مصادق عليها سريرياً.',
    officialUrl: 'https://www.who.int/news-room/fact-sheets/detail/hypertension',
  },
  {
    conditionEn: 'Obstructive Sleep Apnea — OSA (Adults Aged 30–69 Years)',
    conditionAr: 'انقطاع التنفس الانسدادي أثناء النوم — OSA (البالغون بعمر 30–69 عاماً)',
    headlineFigure: '936 Million (AHI >= 5 events/hour); 425 Million moderate-to-severe (AHI >= 15)',
    undiagnosedOrSubgroupFigure: '~800 Million (estimated >80–85% undiagnosed in community cohorts)',
    originalSource: 'Benjafield et al., The Lancet Respiratory Medicine (2019), Vol. 7, Issue 8, pp. 687–698',
    dataYear: '2019 global modeling study',
    publicationDate: 'August 2019 (DOI: 10.1016/S2213-2600(19)30198-5)',
    ageGroupAndPopulationEn: 'Global adults aged 30–69 years using AASM 2012 scoring criteria extrapolated across 193 countries.',
    ageGroupAndPopulationAr: 'البالغون عالمياً بعمر 30–69 عاماً وفق معايير AASM 2012 المستقرأة عبر 193 دولة.',
    methodologicalDefinitionEn: 'Literature-based extrapolation from 17 population-based polysomnography studies.',
    methodologicalDefinitionAr: 'استقراء علمي مبني على 17 دراسة سكانية لتخطيط النوم المتعدد القنوات (PSG).',
    caveatEn:
      'Clinical OSA diagnosis requires multi-channel PSG or HSAT measuring airflow and SpO2 (AASM guidelines), not single-channel smartphone acoustic motion.',
    caveatAr:
      'يتطلب التشخيص السريري لـ OSA تخطيط نوم متعدد القنوات (PSG أو HSAT) يقيس تدفق الهواء وتشبع الأكسجين SpO2 وفق AASM، وليس مجرد حركة الصدر الصوتية.',
    officialUrl: 'https://doi.org/10.1016/S2213-2600(19)30198-5',
  },
  {
    conditionEn: 'Diabetes Mellitus (Adults Aged 20–79 Years)',
    conditionAr: 'مرض السكري (البالغون بعمر 20–79 عاماً)',
    headlineFigure: '589 Million adults living with diabetes (~3.4M annual deaths in 2024)',
    undiagnosedOrSubgroupFigure: '252 Million (42.8% living with undiagnosed diabetes)',
    originalSource: 'International Diabetes Federation (IDF) Diabetes Atlas, 11th Edition',
    dataYear: '2024 global estimates',
    publicationDate: '2025 (11th Edition Release)',
    ageGroupAndPopulationEn: 'Global adults aged 20–79 years across 215 countries and territories.',
    ageGroupAndPopulationAr: 'البالغون عالمياً بعمر 20–79 عاماً عبر 215 دولة وإقليماً.',
    methodologicalDefinitionEn: 'IDF analytic hierarchy selection of national/regional oral glucose tolerance test (OGTT), HbA1c, and fasting plasma glucose surveys.',
    methodologicalDefinitionAr: 'تحليل هرمي للمسوحات الوطنية والإقليمية لاختبار تحمل الجلوكوز الفموي (OGTT) والسكر التراكمي (HbA1c) وسكر الصيام.',
    caveatEn:
      'Clinical diabetes diagnosis requires venous fasting plasma glucose, OGTT, or laboratory HbA1c assay—optical pulse wave morphology cannot diagnose diabetes.',
    caveatAr:
      'يتطلب التشخيص السريري للسكري فحص دم وريدي للجلوكوز أو السكر التراكمي المخبري (HbA1c)—ولا يمكن لشكل موجة النبض البصري تشخيص السكري.',
    officialUrl: 'https://diabetesatlas.org/',
  },
  {
    conditionEn: 'Anemia in Children (6–59 Months) & Pregnant Women',
    conditionAr: 'فقر الدم (الأنيميا) لدى الأطفال (6–59 شهراً) والنساء الحوامل',
    headlineFigure: '607M Women (15–49 yrs) + 269M Children (6–59 mos) + 32M Pregnant Women',
    undiagnosedOrSubgroupFigure: '301 Million combined children (6–59 mos: 269M) & pregnant women (32M)',
    originalSource: 'World Health Organization (WHO) Global Anaemia Estimates & Fact Sheet',
    dataYear: '2019 / 2023 WHO Global Health Observatory series',
    publicationDate: 'February 2025 Fact Sheet',
    ageGroupAndPopulationEn: 'Children aged 6–59 months (Hb < 110 g/L) and pregnant women aged 15–49 years (Hb < 110 g/L).',
    ageGroupAndPopulationAr: 'الأطفال بعمر 6–59 شهراً (هيموجلوبين < 110 جم/لتر) والنساء الحوامل بعمر 15–49 عاماً (هيموجلوبين < 110 جم/لتر).',
    methodologicalDefinitionEn: 'WHO Global Anaemia Estimates modeling population hemoglobin distributions.',
    methodologicalDefinitionAr: 'تقديرات منظمة الصحة العالمية لتوزيعات الهيموجلوبين السكانية.',
    caveatEn:
      'Conjunctival CIE L*a*b* colorimetry is an exploratory research concept requiring physical color-card calibration and CLSI EP09 venous CBC comparison.',
    caveatAr:
      'قياس لون الملتحمة (CIE L*a*b*) هو مفهوم بحثي استكشافي يتطلب بطاقة معايرة لونية فيزيائية ومقارنة مع تعداد الدم الوريدي (CBC) وفق CLSI EP09.',
    officialUrl: 'https://www.who.int/news-room/fact-sheets/detail/anaemia',
  },
  {
    conditionEn: 'Cardiovascular Diseases (CVD Total Global Mortality Context)',
    conditionAr: 'أمراض القلب والأوعية الدموية (سياق الوفيات العالمي الكلي)',
    headlineFigure: '19.8 Million deaths in 2022 (~32% of all global deaths; >75% in LMICs)',
    undiagnosedOrSubgroupFigure: '85% of CVD deaths due to heart attack and stroke',
    originalSource: 'World Health Organization (WHO) Cardiovascular Diseases Fact Sheet',
    dataYear: '2022 mortality estimates',
    publicationDate: '2024 / 2025 Update',
    ageGroupAndPopulationEn: 'All-age global cardiovascular mortality reported by WHO Member States.',
    ageGroupAndPopulationAr: 'وفيات أمراض القلب والأوعية الدموية لجميع الأعمار المبلغة من الدول الأعضاء في WHO.',
    methodologicalDefinitionEn: 'WHO Global Health Estimates cause-of-death vital registration and epidemiological modeling.',
    methodologicalDefinitionAr: 'التقديرات الصحية العالمية لأسباب الوفاة وسجلات الأحوال المدنية.',
    caveatEn:
      'Epidemiological burden motivates affordable screening research; however, condition prevalence pools overlap heavily and cannot be summed as unique individuals or claimed as "lives saved".',
    caveatAr:
      'العبء الوبائي يحفز أبحاث الفحص المنخفض التكلفة؛ ولكن الفئات المرضية تتداخل بشدة لدى نفس الأفراد ولا يجوز جمعها كأشخاص مستقلين أو ادعاؤها كـ "أرواح منقذة".',
    officialUrl: 'https://www.who.int/news-room/fact-sheets/detail/cardiovascular-diseases-(cvds)',
  },
];

export const ANTHROPIC_PROGRAMS_COMPARISON: AnthropicProgramComparison[] = [
  {
    programCode: 'PROGRAM_A',
    programNameEn: 'Program A: Claude Team Plan for Scientists (Workspace & Collaborative Seats)',
    programNameAr: 'البرنامج الأول (A): خطة Claude Team للعلماء (مقاعد العمل التعاوني للفرق البحثية)',
    officialSupportOfferEn:
      'Standard seat at $0/month and Premium seat (including Claude Code) at $15/user/month for up to 25 users for 12 months (subject to program terms and verification).',
    officialSupportOfferAr:
      'مقعد قياسي (Standard) بتكلفة 0$/شهرياً ومقعد مميز (Premium شاملاً Claude Code) بتكلفة 15$/مستخدم/شهرياً لما يصل إلى 25 مستخدماً لمدة 12 شهراً (وفق شروط البرنامج والتحقق المؤسسي).',
    eligibilityRequirementsEn:
      'Designed for verified academic or non-profit research groups led by an eligible Principal Investigator (PI) or equivalent faculty leader using institutional email domains.',
    eligibilityRequirementsAr:
      'مخصص للمجموعات البحثية الأكاديمية أو غير الربحية المعتمدة التي يقودها باحث رئيسي مؤهل (PI أو عضو هيئة تدريس مكافئ) باستخدام البريد الإلكتروني المؤسسي.',
    reviewCycleAndDurationEn: '12-month subscription term upon institutional verification.',
    reviewCycleAndDurationAr: 'مدة اشتراك 12 شهراً بعد التحقق من الأهلية المؤسسية.',
    howUsedInProjectEn:
      'Supports interactive collaborative literature synthesis, C++17/Kotlin refactoring via Claude Code, and TRIPOD+AI manuscript preparation under faculty advisor leadership (Dr. Hayam Abd El-Mardy & Dr. Osama Helmy at FA-HISTS).',
    howUsedInProjectAr:
      'يدعم العمل التعاوني التفاعلي لمراجعة الأدبيات، وتطوير واختبار كود C++17/Kotlin عبر Claude Code، وإعداد الورقة البحثية المتوافقة مع TRIPOD+AI تحت قيادة المشرفين الأكاديميين في معهد المستقبل العالي (FA-HISTS).',
    officialApplicationUrl: 'https://support.claude.com/en/articles/11895862-claude-team-plan-for-scientists',
  },
  {
    programCode: 'PROGRAM_B',
    programNameEn: 'Program B: Anthropic AI for Science Program (Free API Credits Grant)',
    programNameAr: 'البرنامج الثاني (B): برنامج Anthropic AI for Science (منحة أرصدة API المجانية)',
    officialSupportOfferEn:
      'Free Anthropic API credits up to $20,000 USD for a 6-month research period using standard publicly available Anthropic API models.',
    officialSupportOfferAr:
      'أرصدة مجانية لواجهة برمجة التطبيقات (Anthropic API Credits) تصل إلى 20,000 دولار أمريكي لمدة 6 أشهر باستخدام نماذج Anthropic API العامة القياسية.',
    eligibilityRequirementsEn:
      'Researchers attached to a research institution working on high-impact scientific problems (biology, life sciences, medicine/health sciences) evaluated on scientific merit, biosecurity screening, and potential impact.',
    eligibilityRequirementsAr:
      'الباحثون المرتبطون بمؤسسة بحثية والعاملون على مشكلات علمية عالية الأثر، ويتم التقييم بناءً على الجدارة العلمية، وفحص السلامة الحيوية، والأثر العلمي المتوقع.',
    reviewCycleAndDurationEn: 'Applications reviewed on the first Monday of each month; 6-month credit validity.',
    reviewCycleAndDurationAr: 'تُراجع الطلبات في أول يوم اثنين من كل شهر؛ وصلاحية الأرصدة 6 أشهر.',
    howUsedInProjectEn:
      'Powers automated batch synthesis of multi-harmonic noise-injection test harnesses, systematic symbolic verification of SQI/Laplacian abstention edge cases, and automated statistical evaluation scripts across PURE and UBFC-rPPG.',
    howUsedInProjectAr:
      'يُشغّل التوليد الدفعي الآلي لاختبارات حقن الضوضاء المتعددة التوافقيات، والتحقق الرمزي المنهجي من الحالات الحدية لبوابة الامتناع (SQI/Laplacian)، ونصوص التقييم الإحصائي الآلي على قواعد بيانات PURE وUBFC-rPPG.',
    officialApplicationUrl: 'https://www.anthropic.com/ai-for-science',
  },
];

export const OFFICIAL_20_VERIFICATION_LINKS: OfficialVerificationLink[] = [
  {
    num: 1,
    titleEn: 'WHO — Cardiovascular Diseases (CVDs) Fact Sheet (19.8M deaths in 2022)',
    titleAr: 'منظمة الصحة العالمية (WHO) — صحيفة وقائع أمراض القلب والأوعية الدموية (19.8 مليون وفاة في 2022)',
    category: 'Epidemiology',
    url: 'https://www.who.int/news-room/fact-sheets/detail/cardiovascular-diseases-(cvds)',
    verifiedDate: '2026-11-14',
  },
  {
    num: 2,
    titleEn: 'WHO — Hypertension Fact Sheet (1.4B adults aged 30–79; ~600M unaware, Sep 2025)',
    titleAr: 'منظمة الصحة العالمية (WHO) — صحيفة وقائع ارتفاع ضغط الدم (1.4 مليار بالغ؛ ~600 مليون غير مدركين، سبتمبر 2025)',
    category: 'Epidemiology',
    url: 'https://www.who.int/news-room/fact-sheets/detail/hypertension',
    verifiedDate: '2026-11-14',
  },
  {
    num: 3,
    titleEn: 'WHO — Anaemia Fact Sheet (269M children 6–59m; 32M pregnant women; 607M women 15–49y)',
    titleAr: 'منظمة الصحة العالمية (WHO) — صحيفة وقائع فقر الدم (269 مليون طفل؛ 32 مليون حامل؛ 607 مليون امرأة)',
    category: 'Epidemiology',
    url: 'https://www.who.int/news-room/fact-sheets/detail/anaemia',
    verifiedDate: '2026-11-14',
  },
  {
    num: 4,
    titleEn: 'IDF Diabetes Atlas 11th Edition (589M adults aged 20–79; 252M undiagnosed)',
    titleAr: 'أطلس الاتحاد الدولي للسكري (IDF) الإصدار 11 (589 مليون بالغ؛ 252 مليون غير مشخصين)',
    category: 'Epidemiology',
    url: 'https://diabetesatlas.org/',
    verifiedDate: '2026-11-14',
  },
  {
    num: 5,
    titleEn: 'Benjafield et al. (2019) — Global Prevalence of Obstructive Sleep Apnea (936M adults aged 30–69, Lancet Respir Med)',
    titleAr: 'دراسة Benjafield et al. (2019) — الانتشار العالمي لانقطاع التنفس الانسدادي (936 مليون بالغ بعمر 30–69، Lancet Respir Med)',
    category: 'Epidemiology',
    url: 'https://doi.org/10.1016/S2213-2600(19)30198-5',
    verifiedDate: '2026-11-14',
  },
  {
    num: 6,
    titleEn: 'CLSI EP17-A2 — Evaluation of Detection Capability (LoB, LoD, LoQ)',
    titleAr: 'معيار CLSI EP17-A2 — تقييم قدرة الكشف (حد الفراغ LoB، حد الكشف LoD، حد التقدير الكمي LoQ)',
    category: 'Standards',
    url: 'https://clsi.org/standards/products/method-evaluation/documents/ep17/',
    verifiedDate: '2026-11-14',
  },
  {
    num: 7,
    titleEn: 'IEEE Std 1708-2025 — Wearable, Cuffless Blood Pressure Measuring Devices',
    titleAr: 'معيار IEEE Std 1708-2025 — أجهزة قياس ضغط الدم القابلة للارتداء بدون كفة هوائية',
    category: 'Standards',
    url: 'https://standards.ieee.org/ieee/1708/11065/',
    verifiedDate: '2026-11-14',
  },
  {
    num: 8,
    titleEn: 'ISO 81060-2:2018 — Non-Invasive Sphygmomanometers Part 2: Intermittent Automated Cuff Type',
    titleAr: 'معيار ISO 81060-2:2018 — أجهزة قياس ضغط الدم غير الباضعة الجزء 2: الأجهزة الآلية المتقطعة ذات الكفة',
    category: 'Standards',
    url: 'https://www.iso.org/standard/73339.html',
    verifiedDate: '2026-11-14',
  },
  {
    num: 9,
    titleEn: 'AASM Clinical Practice Guideline for Diagnostic Testing for Adult Obstructive Sleep Apnea (PSG / HSAT)',
    titleAr: 'الدليل الإرشادي للأكاديمية الأمريكية لطب النوم (AASM) لاختبارات تشخيص انقطاع التنفس لدى البالغين (PSG / HSAT)',
    category: 'Standards',
    url: 'https://jcsm.aasm.org/doi/10.5664/jcsm.6506',
    verifiedDate: '2026-11-14',
  },
  {
    num: 10,
    titleEn: 'TRIPOD+AI Reporting Guideline for Prediction Models (BMJ 2024)',
    titleAr: 'دليل TRIPOD+AI للإبلاغ عن نماذج التنبؤ السريري وتعلم الآلة (BMJ 2024)',
    category: 'Standards',
    url: 'https://www.bmj.com/content/385/bmj-2023-078378',
    verifiedDate: '2026-11-14',
  },
  {
    num: 11,
    titleEn: 'PURE Dataset — Pulse Rate Detection Dataset (TU Ilmenau, Stricker et al. 2014)',
    titleAr: 'قاعدة بيانات PURE لكشف معدل النبض بالفيديو (جامعة إلميناو التقنية، Stricker et al. 2014)',
    category: 'Datasets',
    url: 'https://www.tu-ilmenau.de/universitaet/fakultaeten/fakultaet-informatik-und-automatisierung/profil/institute-und-fachgebiete/institut-fuer-technische-informatik-und-ingenieurinformatik/fachgebiet-neuroinformatik-und-kognitive-robotik/data-sets-code/pulse-rate-detection-dataset-pure',
    verifiedDate: '2026-11-14',
  },
  {
    num: 12,
    titleEn: 'UBFC-rPPG Facial Video Dataset (Bobbia et al. 2019)',
    titleAr: 'قاعدة بيانات فيديو الوجه UBFC-rPPG (Bobbia et al. 2019)',
    category: 'Datasets',
    url: 'https://sites.google.com/view/ybenezeth/ubfcrppg',
    verifiedDate: '2026-11-14',
  },
  {
    num: 13,
    titleEn: 'Nature Digital Medicine (2025) — Scoping Review of 62 Open rPPG Datasets & Demographic Bias',
    titleAr: 'مراجعة Nature Digital Medicine (2025) — تقييم 62 قاعدة بيانات مفتوحة لـ rPPG وتحيز تمثيل البشرة الداكنة',
    category: 'Datasets',
    url: 'https://www.nature.com/articles/s41746-025-01724-6',
    verifiedDate: '2026-11-14',
  },
  {
    num: 14,
    titleEn: 'PhysioNet — MIMIC-IV v3.1 Clinical Electronic Health Record Database',
    titleAr: 'منصة PhysioNet — قاعدة البيانات السريرية الإلكترونية MIMIC-IV v3.1',
    category: 'Datasets',
    url: 'https://physionet.org/content/mimiciv/3.1/',
    verifiedDate: '2026-11-14',
  },
  {
    num: 15,
    titleEn: 'PhysioNet — MIMIC-IV Waveform Database v0.1.0 (Bedside ECG/PPG/ABP Waveforms)',
    titleAr: 'منصة PhysioNet — قاعدة بيانات الموجات الفسيولوجية MIMIC-IV Waveform v0.1.0',
    category: 'Datasets',
    url: 'https://physionet.org/content/mimic4wdb/0.1.0/',
    verifiedDate: '2026-11-14',
  },
  {
    num: 16,
    titleEn: 'Android Developers — Support 16 KB Page Sizes (Android 15+ & Google Play Requirement)',
    titleAr: 'مطورو أندرويد — دعم أحجام صفحات الذاكرة 16 KB (متطلبات أندرويد 15+ ومتجر Google Play)',
    category: 'Hardware & Android',
    url: 'https://developer.android.com/guide/practices/page-sizes',
    verifiedDate: '2026-11-14',
  },
  {
    num: 17,
    titleEn: 'Google AI Edge LiteRT — MediaTek NeuroPilot NPU Delegate Acceleration',
    titleAr: 'وثائق Google AI Edge LiteRT — تسريع مفوض وحدة المعالجة العصبية MediaTek NeuroPilot NPU',
    category: 'Hardware & Android',
    url: 'https://ai.google.dev/edge/litert/next/mediatek',
    verifiedDate: '2026-11-14',
  },
  {
    num: 18,
    titleEn: 'MediaTek Dimensity 9400+ Official Product Specifications (Cortex-X925 @ 3.73GHz, NPU 890)',
    titleAr: 'المواصفات الرسمية لشريحة MediaTek Dimensity 9400+ (نواة Cortex-X925 بتردد 3.73GHz ووحدة NPU 890)',
    category: 'Hardware & Android',
    url: 'https://www.mediatek.com/products/smartphones/mediatek-dimensity-9400-plus',
    verifiedDate: '2026-11-14',
  },
  {
    num: 19,
    titleEn: 'Anthropic Help Center — Claude Team Plan for Scientists ($0 Standard / $15 Premium up to 25 seats)',
    titleAr: 'مركز مساعدة Anthropic — خطة Claude Team للعلماء (0$ للمقعد القياسي و15$ للمميز حتى 25 مقعداً)',
    category: 'Anthropic Official',
    url: 'https://support.claude.com/en/articles/11895862-claude-team-plan-for-scientists',
    verifiedDate: '2026-11-14',
  },
  {
    num: 20,
    titleEn: 'Anthropic — Introducing the AI for Science Program (Up to $20,000 API Credits for 6 Months)',
    titleAr: 'شركة Anthropic — إطلاق برنامج AI for Science (منحة أرصدة API تصل إلى 20,000 دولار لمدة 6 أشهر)',
    category: 'Anthropic Official',
    url: 'https://www.anthropic.com/ai-for-science',
    verifiedDate: '2026-11-14',
  },
];
