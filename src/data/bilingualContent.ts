import type { Language } from '../utils/biophysicsMath';

export interface BilingualText {
  en: string;
  ar: string;
}

export interface ClaudeAxisItem {
  id: string;
  modelBadge: string;
  title: BilingualText;
  technicalChallenge: BilingualText;
  whyClaude: BilingualText;
  deliverable: BilingualText;
}

export interface HardwareSubsystem {
  id: string;
  component: BilingualText;
  hardwareSpec: string;
  constraint: BilingualText;
  engineeringSolution: BilingualText;
  apiStack: string;
}

export interface ArchitectureLayer {
  layerNumber: string;
  title: BilingualText;
  runtime: string;
  description: BilingualText;
  modules: string[];
}

export interface MathFormulaCard {
  id: string;
  title: BilingualText;
  latex: string;
  explanation: BilingualText;
  variables: Array<{ symbol: string; meaning: BilingualText }>;
}

export interface VulnerabilityFix {
  id: number;
  category: 'memory' | 'camera' | 'dsp' | 'audio' | 'security';
  vulnerability: BilingualText;
  rootCause: BilingualText;
  implementedFix: BilingualText;
}

export interface ClinicalProtocolStep {
  step: string;
  title: BilingualText;
  sensorModal: string;
  duration: string;
  instructions: BilingualText;
  datasetReference: string;
  validationMetric: string;
}

export const HERO_COPY = {
  eyebrow: {
    en: 'Official Peer-Reviewed Interactive Research Monograph & Open-Source Clinical Engineering Companion · Anthropic AI for Science & External Researcher Access',
    ar: 'ورقة بحثية وهندسية تفاعلية محكّمة ومفتوحة المصدر · برنامج Anthropic AI for Science وExternal Researcher Access',
  },
  title: {
    en: 'When Should Smartphone Clinical AI Abstain? Uncertainty-Aware Offline Biophysical Diagnostics via Native C++17 Zero-Phase DSP, 20kHz Quadrature Ultrasonic Sonar, and Quantized Edge AI on Xiaomi 15T Pro',
    ar: 'متى يجب أن يمتنع الذكاء الاصطناعي الطبي على الهاتف عن التشخيص؟ منظومة التشخيص الفيزيائي الحيوي المحلي الواعي بعدم اليقين عبر معالجة الإشارات صفرية الطور بلغة C++17، رادار السونار الصوتي المتعامد 20kHz، والذكاء الاصطناعي المكمم على هاتف Xiaomi 15T Pro',
  },
  subtitle: {
    en: 'Executive Abstract — Uncalibrated smartphone health models hallucinate clinical vitals under motion tremor, optical defocus, or ambient color casts. We present a 100% offline, hardware-encrypted biophysical diagnostics monograph and production codebase on Xiaomi 15T Pro (MediaTek Dimensity 9400+ / Android 15) governed by two deterministic physical abstention gates (Radix-2 FFT Spectral & Morphological SQI >= 0.65 and 2D Laplacian Focus Variance Var(∇²I) >= 110.0) that strictly block neural inference before any unsafe cuffless blood pressure, HbA1c, anemia, jaundice, or 20kHz sleep-apnea estimate is emitted.',
    ar: 'الملخص التنفيذي — تعاني تطبيقات الصحة التقليدية من تخمين قراءات طبية مضللة عند اهتزاز اليد أو ضبابية العدسة أو تغير الإضاءة. نقدم هنا ورقة بحثية ومنظومة هندسية تعمل محلياً بنسبة 100% بدون إنترنت على هاتف Xiaomi 15T Pro (بنظام Android 15)، محكومة ببوابتين فيزيائيتين صارمتين للامتناع السريري الآمن (بوابة نقاء الطيف والمورفولوجيا SQI >= 0.65 وبوابة تباين لابلاس البؤري Var(∇²I) >= 110.0) تمنعان الشبكة العصبية قطعياً من إصدار أي تشخيص غير موثوق لضغط الدم أو السكر التراكمي أو فقر الدم أو اليرقان أو انقطاع التنفس الليلي.',
  },
  kpis: [
    {
      label: { en: 'Calibrated Epistemic Safety', ar: 'أمان سريري واعٍ بعدم اليقين' },
      value: { en: 'Zero Hallucination', ar: '0% تخمين عشوائي' },
      detail: {
        en: 'Dual physical pre-neural gates: Spectral/Morphological SQI < 0.65 & Laplacian Focus Var(∇²I) < 110.0 trigger automatic Safe Abstention',
        ar: 'بوابتا امتناع فيزيائيتان قبل الشبكة العصبية: حجب تلقائي فوري عند انخفاض SQI < 0.65 أو حدة بؤرة العين Var(∇²I) < 110.0',
      },
    },
    {
      label: { en: 'Hardware-Verified Target', ar: 'هندسة موثقة عتادياً' },
      value: { en: '3nm NPU 890', ar: '3nm NPU 890' },
      detail: {
        en: 'MediaTek Dimensity 9400+ · Android 15 (16KB ELF Alignment) · SQLCipher 4.6.1 AES-256 + Hardware Keystore',
        ar: 'معالج Dimensity 9400+ · أندرويد 15 (صفحات 16KB) · تشفير عتادي SQLCipher AES-256 بدون سحابة',
      },
    },
    {
      label: { en: 'Open-Science Public Goods', ar: 'منافع علمية عامة مفتوحة' },
      value: { en: '4 Public Goods', ar: '4 مخرجات مفتوحة' },
      detail: {
        en: 'Apache-2.0 C++17 NEON DSP library, Camera2 Clinical ISP standard, FA-HISTS benchmark dataset & LiteRT 2.x suite',
        ar: 'مكتبة C++17 NEON، معيار معايرة Camera2، قاعدة بيانات FA-HISTS المرجعية، وحزمة تكميم LiteRT 2.x بترخيص Apache-2.0',
      },
    },
  ],
};

export const CLAUDE_AXES: ClaudeAxisItem[] = [
  {
    id: 'neon-simd',
    modelBadge: 'Claude Opus 5.5 · Claude Code',
    title: {
      en: '01. ARMv9 NEON SIMD Intrinsics Optimization in C++17',
      ar: '01. توليد وتحسين تعليمات ARMv9 NEON SIMD في لغة C++17',
    },
    technicalChallenge: {
      en: 'Overnight 8-hour 20kHz ultrasonic sonar monitoring and 60fps POS rPPG require deterministic vectorization across Cortex-X925 cores on Dimensity 9400+ without draining battery or triggering thermal throttling under Android 15 16KB page boundaries.',
      ar: 'مراقبة النوم بالسونار الصوتي 20kHz لمدة 8 ساعات متواصلة ومعالجة الفيديو 60fps تتطلب تسريع خوارزميات filtfilt وRadix-2 FFT وNLMS باستخدام سجلات ARM NEON 128-bit (float32x4_t) لتقليل استهلاك الطاقة ومنع الاختناق الحراري.',
    },
    whyClaude: {
      en: 'Claude Opus 5.5 and Claude Code lead SWE-bench and Terminal-Bench on low-level C++17 memory safety, verifying zero pointer aliasing, strict 16KB ELF alignment (-Wl,-z,max-page-size=16384), and leak-free JNI buffer lifetimes.',
      ar: 'يتفوق Claude Opus 5.5 وClaude Code في هندسة الأكواد منخفضة المستوى الخالية من تسريبات الذاكرة وأخطاء المحاذاة على معمارية ARMv9 وبيئة Android NDK.',
    },
    deliverable: {
      en: 'Vectorized float32x4_t Radix-2 FFT, Zero-Phase Biquad filtfilt, and I/Q Sonar kernels with < 3.2% CPU utilization.',
      ar: 'نواة C++17 متسارعة بـ NEON لا تستهلك أكثر من 3.2% من المعالج أثناء المراقبة الليلية.',
    },
  },
  {
    id: 'mimic-pipeline',
    modelBadge: 'Claude Sonnet 5.5 · 1M Context',
    title: {
      en: '02. Clinical Dataset Cleaning & Feature Extraction (MIMIC-IV & PPG-BP)',
      ar: '02. هندسة خط تنظيف ومعايرة قواعد البيانات السريرية (MIMIC-IV وPPG-BP)',
    },
    technicalChallenge: {
      en: 'Training the quantized LiteRT (.tflite) hemodynamic model requires ingesting, aligning, and artifact-rejecting tens of thousands of noisy arterial waveforms from MIMIC-IV Waveform, PPG-BP, PhysioNet CinC, and ICBHI respiratory datasets.',
      ar: 'لتدريب نموذج LiteRT المحلي، نحتاج إلى معالجة آلاف التسجيلات المشوشة من قواعد بيانات MIMIC-IV Waveform وPPG-BP وICBHI واكتشاف تشوهات الحركة واستخراج الميزات الـ 12 بدقة سريرية.',
    },
    whyClaude: {
      en: 'The 1M-token context window in Claude Sonnet 5.5 / Opus 5.5 allows loading complete WFDB medical specifications, dataset schemas, and Python signal-cleaning pipelines simultaneously for unified verification.',
      ar: 'نافذة السياق الضخمة (1M Tokens) تتيح تحليل ملفات التوثيق الطبي وأكواد Python لاستخراج الميزات الـ 12 ومعايرتها دفعة واحدة دون فقدان السياق.',
    },
    deliverable: {
      en: 'Reproducible Python WFDB -> TensorFlow -> INT8/FP16 LiteRT 2.x training and validation pipeline.',
      ar: 'خط تدريب وتكميم Python متكامل وقابل لإعادة الإنتاج ينتج ملف .tflite جاهزاً للعمل على NPU 890.',
    },
  },
  {
    id: 'fairness-math',
    modelBadge: 'Claude Opus 5.5 · Formal Math',
    title: {
      en: '03. Biophysical Derivations & Fitzpatrick Skin-Tone Fairness Compensation',
      ar: '03. التحقق الرياضي وتعويض التنوع اللوني للبشرة (Fitzpatrick I–VI)',
    },
    technicalChallenge: {
      en: 'Optical PPG/rPPG and palpebral CIE L*a*b* models suffer from systematic melanin absorption bias across darker skin tones (Fitzpatrick IV–VI) and ambient lighting shifts (2700K–6500K).',
      ar: 'تواجه أنظمة القياس البصري تحيزاً منهجياً في القراءات عند أصحاب البشرة الداكنة (Fitzpatrick IV–VI) وتحت تغيرات إضاءة الغرفة، مما يهدد العدالة الخوارزمية في الذكاء الاصطناعي الطبي.',
    },
    whyClaude: {
      en: 'Claude verifies the analytical derivations of Moens-Korteweg, Bramwell-Hill, Beer-Lambert optical absorption, and Bradford D65 chromatic adaptation matrices to ensure equitable diagnostic calibration across all skin tones.',
      ar: 'يساعد Claude في مراجعة اشتقاقات Moens-Korteweg وBramwell-Hill ومصفوفات التحويل اللوني CIE XYZ / L*a*b* لضمان عدالة ودقة الفحص عبر جميع درجات لون البشرة.',
    },
    deliverable: {
      en: 'Mathematically audited CIE L*a*b* Bradford calibration + melanin-compensated 12-feature vector.',
      ar: 'نموذج معايرة لونية وهيموديناميكية خالٍ من التحيز العرقي وموثق رياضياً.',
    },
  },
  {
    id: 'automated-testing',
    modelBadge: 'Claude Code · Continuous Verification',
    title: {
      en: '04. Automated Adversarial & Edge-Case Testing for Android 15 / HyperOS 2',
      ar: '04. أتمتة الاختبارات واكتشاف حالات الفشل الحرجة في Android 15 / HyperOS 2',
    },
    technicalChallenge: {
      en: 'Consumer clinical apps fail silently during sudden illumination spikes, thermal torch throttling, smartwatch BLE drops, or HyperOS aggressive background process termination.',
      ar: 'تحتاج الأنظمة الطبية على الهواتف إلى اختبارات صارمة تحاكي تغير الإضاءة المفاجئ، ارتفاع حرارة الفلاش، انقطاع ساعة Wear OS، وقتل العمليات الخلفية في HyperOS 2.',
    },
    whyClaude: {
      en: 'Claude Code autonomously authors and executes GoogleTest C++ suites, JUnit instrumentation tests, and edge-case fuzzers across JNI boundaries.',
      ar: 'توليد وتشغيل اختبارات GoogleTest C++ وJUnit عبر Claude Code لضمان عدم إصدار أي قراءة طبية خاطئة في ظروف الاستخدام القاسية.',
    },
    deliverable: {
      en: '95%+ branch coverage across DSP C++ kernels and Camera2/Oboe state machines.',
      ar: 'تغطية اختبارية تتجاوز 95% لجميع نوى معالجة الإشارات وآلات الحالة.',
    },
  },
  {
    id: 'safety-guardrails',
    modelBadge: 'Anthropic Safety Alignment',
    title: {
      en: '05. Uncertainty-Aware Clinical Safety Guardrails (SQI Gatekeeping)',
      ar: '05. بناء بوابات الأمان وتقدير عدم اليقين السريري (SQI Guardrails)',
    },
    technicalChallenge: {
      en: 'A medical screening tool must never hallucinate or guess a blood pressure or HbA1c estimate when signal-to-noise ratio degrades.',
      ar: 'يجب أن يمتنع النظام الطبي عن إصدار أي تقدير عند تدهور جودة الإشارة (SQI < 0.65) بدلاً من تخمين أرقام قد تضلل المريض.',
    },
    whyClaude: {
      en: 'Aligned directly with Anthropic’s Constitutional AI reliability principles: building calibrated abstention gates (SQI < 0.65) and clear patient guidance via TTS.',
      ar: 'يتطابق هذا المحور مباشرة مع فلسفة Anthropic في الذكاء الاصطناعي الآمن والأمين: رفض التنبؤ غير الموثوق وتوجيه المريض لإعادة الفحص.',
    },
    deliverable: {
      en: 'Deterministic SQI spectral purity gate + automated motion/focus rejection feedback.',
      ar: 'بوابة رفض تلقائية عند انخفاض جودة الإشارة مع توجيه صوتي فوري للمستخدم.',
    },
  },
  {
    id: 'grant-roadmap',
    modelBadge: '6-Month Open-Science Plan',
    title: {
      en: '06. 6-Month Execution Timeline, Credit Allocation & Open-Source Publication',
      ar: '06. خطة استهلاك رصيد المنحة والجدول الزمني (6 أشهر) للنشر المفتوح',
    },
    technicalChallenge: {
      en: 'Bridging the final mile from working DSP/Camera2 prototype to multi-dataset clinical validation, IRB-ready protocol packaging, and open-source release.',
      ar: 'الانتقال من النموذج التنفيذي العامل إلى التحقق السريري الشامل عبر قواعد البيانات المفتوحة وإصدار الحزمة البحثية المفتوحة المصدر.',
    },
    whyClaude: {
      en: 'Dedicated Claude Opus 5.5, Sonnet 5.5, Fable 5.2, and Claude Code credits sustain 24 weeks of intensive DSP refactoring, dataset ingestion, and manuscript preparation with explicit Anthropic acknowledgment.',
      ar: 'تغطية 24 أسبوعاً من التطوير المكثف وتدقيق البيانات السريرية وصياغة الورقة البحثية مع الإشارة الرسمية لدعم برنامج Anthropic AI for Science.',
    },
    deliverable: {
      en: 'Open-source Apache-2.0 repository + reproducible clinical benchmark paper crediting Anthropic.',
      ar: 'مستودع مفتوح المصدر + ورقة بحثية موثقة باسم مشروع مدعوم من Anthropic.',
    },
  },
];

export const HARDWARE_AUDIT: HardwareSubsystem[] = [
  {
    id: 'npu',
    component: { en: 'SoC & AI Accelerator', ar: 'المعالج ووحدة الذكاء الاصطناعي' },
    hardwareSpec: 'MediaTek Dimensity 9400+ (3nm MT6991) · NPU 890 · Immortalis-G925',
    constraint: {
      en: 'Qualcomm QNN/Hexagon libraries crash immediately on MediaTek silicon; legacy TFLite Interpreter & NNAPI are deprecated and fail 16KB memory alignment on Android 15.',
      ar: 'تفشل مكتبات كوالكوم (QNN/Hexagon) فوراً على معالجات ميدياتيك، كما أن واجهات TFLite Interpreter وNNAPI القديمة مهجورة وتفشل مع صفحات الذاكرة 16KB في أندرويد 15.',
    },
    engineeringSolution: {
      en: 'Migrated exclusively to Google AI Edge LiteRT 2.x CompiledModel API with MediaTek NeuroPilot NPU delegate, triple fallback (NPU -> GPU -> CPU), and -Wl,-z,max-page-size=16384.',
      ar: 'الاعتماد الكامل على حزمة Google AI Edge LiteRT 2.x CompiledModel API مع مسرع MediaTek NeuroPilot NPU ومسار رديف ثلاثي (NPU ثم GPU ثم CPU) ودعم 16KB Page Alignment.',
    },
    apiStack: 'LiteRT 2.x · NeuroPilot NPU · ELF 16KB',
  },
  {
    id: 'cameras',
    component: { en: 'Dual Camera Optical Split', ar: 'التوزيع الهندسي للكاميرات' },
    hardwareSpec: 'Rear 50MP Light Fusion 900 (1/1.31", f/1.62 OIS) vs Front 32MP Fixed Focus',
    constraint: {
      en: 'The front 32MP sensor has fixed focus (~30–45cm hyperfocal); holding it 5cm from the eye produces unusable optical blur. HyperOS 2 also injects beauty/smoothing filters that erase micro-pulsations.',
      ar: 'الكاميرا الأمامية ثابتة التركيز وتسبب ضبابية تامة عند تقريب العين لـ 5 سم، كما يطبق HyperOS 2 فلاتر تجميل تمحو التغيرات اللونية الدقيقة لتدفق الدم.',
    },
    engineeringSolution: {
      en: 'Split protocols: Front camera @ 35cm (60fps) for Facial rPPG & pupillary reflex; Rear 50MP OIS @ 15cm with Laplacian Variance Focus Gate + TTS guidance for eye sclera/conjunctiva; Rear + Torch with Thermal Guard for Contact PPG.',
      ar: 'تقسيم الفحص: الأمامية على 35 سم لـ rPPG والحدقة؛ الخلفية 50MP OIS على 15 سم مع بوابة Laplacian Focus Gate والتوجيه الصوتي لفحص العين؛ الخلفية + الفلاش مع حارس الحرارة لفحص الإصبع.',
    },
    apiStack: 'Camera2 API · YUV_420_888 · EDGE_MODE_OFF',
  },
  {
    id: 'ae-awb',
    component: { en: '2-Stage Exposure & Color Lock', ar: 'قفل التعرض وموازنة الأبيض ثنائي المرحلة' },
    hardwareSpec: 'Camera2 CaptureResult Metadata · 50Hz/60Hz Flicker Detection',
    constraint: {
      en: 'Locking AE/AWB on frame 1 freezes a dark or color-cast image; leaving Auto Exposure running destroys PPG amplitude modulation and CIE L*a*b* colorimetry.',
      ar: 'قفل التعرض وموازنة الأبيض من الإطار الأول يثبت صورة مشوهة أو مظلمة، بينما تركهما تلقائيين يدمر سعة موجة النبض ودقة ألوان العين.',
    },
    engineeringSolution: {
      en: 'Implemented a deterministic 2-Stage Convergence -> Lock State Machine: waits until CONTROL_AE_STATE_CONVERGED & CONTROL_AWB_STATE_CONVERGED, extracts COLOR_CORRECTION_GAINS/TRANSFORM & SCENE_FLICKER, then locks ISO, shutter, and gains.',
      ar: 'تطبيق آلة حالة ثنائية المراحل تنتظر استقرار AE وAWB ثم تسحب مصفوفات الألوان وتردد الوميض (50/60Hz) قبل القفل التام للتعرض وموازنة الأبيض.',
    },
    apiStack: 'AE/AWB State Machine · Bradford D65',
  },
  {
    id: 'sonar',
    component: { en: 'No LiDAR -> 20kHz Acoustic Sonar', ar: 'تعويض غياب LiDAR برادار سونار 20kHz' },
    hardwareSpec: 'Top/Bottom Stereo Speakers + Unprocessed Mic @ 48,000 Hz',
    constraint: {
      en: 'Xiaomi 15T Pro lacks a hardware dToF LiDAR sensor, preventing optical depth tracking of thoracic respiration in total darkness.',
      ar: 'يفتقر الهاتف إلى حساس الليزر dToF LiDAR لقياس حركة القفص الصدري في الظلام الدامس أثناء النوم.',
    },
    engineeringSolution: {
      en: 'Broadcasts an inaudible 20,000 Hz CW ultrasonic carrier via Oboe C++ and records via oboe::InputPreset::Unprocessed (48kHz), performing I/Q demodulation, direct-path clutter subtraction, and continuous phase unwrapping for <1mm chest resolution.',
      ar: 'بث موجة فوق صوتية غير مسموعة 20,000 Hz واستقبالها خاماً عبر Oboe C++ (48kHz) ثم فك التضمين المتعامد I/Q وعزل الصدى المباشر لرصد حركة الصدر بدقة أقل من 1 ملم.',
    },
    apiStack: 'Oboe C++ · 20kHz I/Q · Phase Unwrap',
  },
  {
    id: 'wearable',
    component: { en: 'TEE Fingerprint Bypass & Wear OS Sync', ar: 'تجاوز عزل البصمة ومزامنة الساعة الذكية' },
    hardwareSpec: '4-Timestamp NTP Clock Sync + Wear OS 100Hz Raw PPG + HyperOS Guard',
    constraint: {
      en: 'Android TEE isolates the optical fingerprint sensor from third-party apps, blocking single-hand PTT; HyperOS 2 also aggressively kills background sleep recording services.',
      ar: 'يعزل نظام TEE مستشعر البصمة عن التطبيقات، كما يقوم نظام HyperOS 2 بقتل الخدمات الخلفية التي تعمل طوال الليل.',
    },
    engineeringSolution: {
      en: 'Computes Pulse Transit Time (PTT) using 4-Timestamp NTP synchronization between Rear Camera PPG / Chest PCG S1 and Wear OS 100Hz wrist stream (with Health Connect fallback), protected by FOREGROUND_SERVICE_TYPE_MICROPHONE | HEALTH.',
      ar: 'حساب زمن انتقال النبض PTT بمزامنة رباعية الطوابع بين الكاميرا/تسمع القلب والساعة الذكية 100Hz مع حماية الخدمة الأمامية المخصصة للصحة والميكروفون.',
    },
    apiStack: 'NTP 4-TS · Wear OS DataLayer · ForegroundService',
  },
];

export const ARCHITECTURE_LAYERS: ArchitectureLayer[] = [
  {
    layerNumber: '01',
    title: { en: 'Raw Sensor Acquisition & Clock Synchronization', ar: 'طبقة الاستشعار الخام والمزامنة الزمنية' },
    runtime: 'Kotlin + Oboe C++ NDK',
    description: {
      en: 'Captures uncompressed YUV_420_888 camera planes (respecting pixelStride/rowStride), 48kHz unprocessed audio frames, 200Hz IMU accelerometer data, and 4-timestamp NTP synchronized Wear OS PPG packets.',
      ar: 'التقاط إطارات Camera2 YUV_420_888 الخام مع احترام تباعد البايتات، وصوت خام 48kHz، ومقياس تسارع 200Hz، وحزم الساعة الذكية المتزامنة زمنياً بالملي ثانية.',
    },
    modules: ['MedicalCameraController.kt', 'OboeSonarEngine', 'NtpClockSynchronizer.kt'],
  },
  {
    layerNumber: '02',
    title: { en: 'Computer Vision & Colorimetric Normalization', ar: 'طبقة الرؤية الحاسوبية والمعايرة اللونية' },
    runtime: 'MediaPipe 478 + Bradford Matrix',
    description: {
      en: 'Isolates anatomical ROI polygons (forehead, cheeks, palpebral conjunctiva, sclera), rejects specular glare pixels, applies sRGB inverse gamma linearization, and transforms to illuminant-invariant CIE L*a*b*.',
      ar: 'عزل مضلعات الوجه والعين عبر 478 نقطة ثلاثية الأبعاد، استبعاد الوهج اللامع، فك جاما العكسي، والتحويل إلى فضاء CIE L*a*b* المحايد للإضاءة.',
    },
    modules: ['AnatomicalRoiTracker.kt', 'LaplacianFocusGate', 'BradfordD65Adapter'],
  },
  {
    layerNumber: '03',
    title: { en: 'Native C++17 Real-Time Biophysical DSP', ar: 'طبقة معالجة الإشارات الرقمية C++17 NDK' },
    runtime: 'C++17 · ARMv9 NEON SIMD',
    description: {
      en: 'Uniform cubic spline resampling (60Hz), 50/60Hz notch filtering, Overlap-Add Hanning POS rPPG extraction, NLMS adaptive motion cancellation, Zero-Phase Butterworth filtfilt, FFT SQI, and 2nd-derivative SDPPG landmarking.',
      ar: 'إعادة التشكيل التكعيبي المنتظم، مرشح إزالة الوميض، خوارزمية POS المتداخلة، مرشح NLMS التكيفي لإلغاء الاهتزاز، ترشيح Butterworth الصفري الطور، واستخراج نقاط المشتقة الثانية.',
    },
    modules: ['native_biophysics_dsp.cpp', 'native_oboe_sonar_pcg.cpp', 'CMakeLists.txt (16KB ELF)'],
  },
  {
    layerNumber: '04',
    title: { en: 'Hybrid Edge AI & Hemodynamic Physics Engine', ar: 'طبقة الذكاء الاصطناعي المحلي والنمذجة الفيزيائية' },
    runtime: 'LiteRT 2.x CompiledModel (NPU 890)',
    description: {
      en: 'Fuses 12 biophysical + demographic features through quantized LiteRT neural inference and analytical Moens-Korteweg / Bramwell-Hill equations, gated by an Uncertainty-Aware SQI >= 0.65 safety check.',
      ar: 'دمج 12 ميزة فيزيائية وديموغرافية عبر شبكة LiteRT 2.x المكممة ومعادلات Moens-Korteweg وBramwell-Hill مع بوابة أمان تمنع التقدير عند انخفاض SQI.',
    },
    modules: ['OnDeviceMedicalAiEngine.kt', 'generate_and_train_litert_model.py', 'SQI Clinical Guard'],
  },
  {
    layerNumber: '05',
    title: { en: 'Hardware-Backed Encryption & Offline Persistence', ar: 'طبقة الخصوصية والتخزين المشفر محلياً' },
    runtime: 'SQLCipher 4.6.1 AES-256 + Keystore',
    description: {
      en: 'Generates a 256-bit database passphrase wrapped via Android Hardware-Backed Keystore (AES-256-GCM) and persists longitudinal screenings exclusively on-device in encrypted Room/SQLCipher storage.',
      ar: 'توليد مفتاح 256-bit مغلف داخل الشريحة الأمنية للجهاز AES-256-GCM وحفظ السجلات الطبية المشفرة في قاعدة Room + SQLCipher بدون أي خادم سحابي.',
    },
    modules: ['KeystorePassphraseManager.kt', 'SQLCipher 4.6.1', 'Encrypted Room DAO'],
  },
];

export const MATH_FORMULAS: MathFormulaCard[] = [
  {
    id: 'gamma-lab',
    title: { en: '01. sRGB Inverse Gamma & CIE XYZ -> L*a*b* Colorimetry', ar: '01. فك جاما العكسي والتحويل إلى فضاء CIE L*a*b*' },
    latex: String.raw`\begin{gathered} C_{\text{lin}} = \begin{cases} \frac{C_{\text{srgb}}}{12.92}, & C_{\text{srgb}} \le 0.04045 \\ \left(\frac{C_{\text{srgb}} + 0.055}{1.055}\right)^{2.4}, & C_{\text{srgb}} > 0.04045 \end{cases} \\[6pt] b^* = 200\left[f\!\left(\frac{Y}{Y_n}\right) - f\!\left(\frac{Z}{Z_n}\right)\right] \end{gathered}`,
    explanation: {
      en: 'Non-linear sRGB pixel intensities distort Beer-Lambert optical absorption. Linearizing channels and applying Bradford D65 chromatic adaptation isolates scleral bilirubin (+b* yellowness) and conjunctival hemoglobin (a*/L* erythema) independent of room lighting.',
      ar: 'تضغط جاما sRGB القيم اللونية وتشوه قانون الامتصاص الضوئي؛ لذلك نفك الجاما خطياً ونحول إلى CIE L*a*b* بعد التكيف اللوني لقياس اليرقان (b*) وفقر الدم (a*/L*) بدقة ثابتة تحت أي إضاءة.',
    },
    variables: [
      { symbol: 'C_lin', meaning: { en: 'Linearized optical reflectance channel', ar: 'قناة الانعكاس الضوئي الخطية' } },
      { symbol: 'b*', meaning: { en: 'Blue-yellow opponent axis (bilirubin index)', ar: 'محور الأصفر-الأزرق لقياس البيليروبين' } },
    ],
  },
  {
    id: 'pos-rppg',
    title: { en: '02. POS (Plane-Orthogonal-to-Skin) Matrix & Overlap-Add', ar: '02. مصفوفة الإسقاط المتعامد على الجلد POS' },
    latex: String.raw`\begin{gathered} \mathbf{S}(t) = \begin{bmatrix} 0 & 1 & -1 \\ -2 & 1 & 1 \end{bmatrix} \mathbf{C}_n(t) \\[6pt] P(t) = S_1(t) + \frac{\sigma(S_1)}{\sigma(S_2)} S_2(t) \end{gathered}`,
    explanation: {
      en: 'Projects temporally normalized RGB signals onto a plane orthogonal to the skin-tone specular vector, cancelling surface motion reflections while amplifying pulsatile hemoglobin absorption across overlapping Hanning windows.',
      ar: 'تسقط مصفوفة POS قنوات RGB المطبّعة زمنياً على مستوى متعامد مع متجه لمعان الجلد لإلغاء انعكاسات الحركة واستخلاص موجة النبض الدموي عبر نوافذ هانينج متداخلة.',
    },
    variables: [
      { symbol: 'C_n(t)', meaning: { en: 'Temporally normalized R, G, B ROI means', ar: 'متوسطات RGB المطبّعة زمنياً' } },
      { symbol: 'σ(S1)/σ(S2)', meaning: { en: 'Adaptive alpha tuning ratio per window', ar: 'معامل الموازنة التكيفي داخل النافذة' } },
    ],
  },
  {
    id: 'biquad-filtfilt',
    title: { en: '03. Biquad Transfer Function & Zero-Phase filtfilt', ar: '03. دالة التحويل لمرشح Biquad والترشيح الصفري الطور' },
    latex: String.raw`\begin{gathered} H(z) = \frac{b_0 + b_1 z^{-1} + b_2 z^{-2}}{1 + a_1 z^{-1} + a_2 z^{-2}} \\[6pt] Y(e^{j\omega}) = |H(e^{j\omega})|^2 X(e^{j\omega}) \end{gathered}`,
    explanation: {
      en: 'Running the 4th-order Butterworth bandpass (0.5–5.0 Hz) forward and then backward eliminates phase group delay completely, preserving exact millisecond timing of the Systolic Peak and Dicrotic Notch.',
      ar: 'تمرير الإشارة عبر مرشح Butterworth للأمام ثم للخلف يلغي إزاحة الطور تماماً (Zero-Phase)، مما يحافظ على التوقيت الدقيق لقمة الانقباض والثلمة الثنائية.',
    },
    variables: [
      { symbol: '|H(e^jω)|²', meaning: { en: 'Squared magnitude response with zero phase shift', ar: 'استجابة السعة التربيعية بدون إزاحة طور' } },
      { symbol: '0.5–5.0 Hz', meaning: { en: 'Physiological cardiac bandwidth (30–300 BPM)', ar: 'النطاق الترددي الفسيولوجي لنبض القلب' } },
    ],
  },
  {
    id: 'nlms',
    title: { en: '04. NLMS Adaptive Motion Cancellation', ar: '04. تحديث أوزان مرشح NLMS التكيفي لإلغاء الاهتزاز' },
    latex: String.raw`\begin{gathered} \mathbf{w}(n+1) = \mathbf{w}(n) + \frac{\mu}{\epsilon + \|\mathbf{x}_{\text{imu}}(n)\|^2} e(n)\,\mathbf{x}_{\text{imu}}(n) \\[6pt] e(n) = d(n) - \mathbf{w}^T(n)\mathbf{x}_{\text{imu}}(n) \end{gathered}`,
    explanation: {
      en: 'Uses the 200Hz smartphone IMU acceleration magnitude as a correlated noise reference to subtract hand-tremor artifacts from the optical PPG waveform in real time.',
      ar: 'يستخدم قراءات مقياس التسارع 200Hz كمرجع ضوضاء مترابط لطرح اهتزازات اليد لحظياً من موجة النبض البصرية.',
    },
    variables: [
      { symbol: 'x_imu(n)', meaning: { en: '3-axis accelerometer tap delay vector', ar: 'متجه قراءات التسارع ثلاثي المحاور' } },
      { symbol: 'e(n)', meaning: { en: 'Motion-cleaned PPG residual output', ar: 'إشارة النبض النقية بعد طرح الاهتزاز' } },
    ],
  },
  {
    id: 'sonar-iq',
    title: { en: '05. 20kHz Ultrasonic Sonar I/Q & Phase Unwrapping', ar: '05. فك التضمين المتعامد I/Q وإزاحة القفص الصدري' },
    latex: String.raw`\begin{gathered} I(n) = r(n)\cos(2\pi f_c t_n), \quad Q(n) = -r(n)\sin(2\pi f_c t_n) \\[6pt] \Delta d = \frac{\Delta \phi_{\text{unwrap}}}{4\pi}\cdot\frac{c}{f_c} \end{gathered}`,
    explanation: {
      en: 'Continuous-wave 20kHz acoustic demodulation converts sub-millimeter thoracic excursion into unwrapped phase angle shifts after subtracting static room clutter.',
      ar: 'تحويل الموجات فوق الصوتية 20kHz إلى مركبتي I وQ ثم فك التفاف الطور المستمر لحساب حركة الصدر بالمليمتر (<1 mm) بعد طرح الصدى الساكن للغرفة.',
    },
    variables: [
      { symbol: 'c / fc', meaning: { en: 'Acoustic wavelength ≈ 17.15 mm @ 20 kHz', ar: 'الطول الموجي الصوتي ≈ 17.15 ملم عند 20kHz' } },
      { symbol: 'Δd', meaning: { en: 'Chest wall displacement (mm)', ar: 'إزاحة جدار الصدر بالمليمتر' } },
    ],
  },
  {
    id: 'shannon-pcg',
    title: { en: '06. Shannon Energy Envelope for Heart Sounds (S1/S2)', ar: '06. غلاف طاقة شانون لأصوات القلب (S1/S2)' },
    latex: String.raw`E_S(n) = -\frac{1}{N}\sum_{k=0}^{N-1} x_{\text{norm}}^2(n-k)\,\log\!\left(x_{\text{norm}}^2(n-k) + \varepsilon\right)`,
    explanation: {
      en: 'Accentuates medium-intensity valve closures (S1 mitral/tricuspid & S2 aortic/pulmonary) while suppressing extreme transient spikes and low-amplitude murmurs for precise acoustic beat detection.',
      ar: 'يبرز غلاف طاقة شانون أصوات انغلاق صمامات القلب (S1 وS2) ويكبح النبضات الشاذة الحادة والضجيج المنخفض لتحديد توقيت النبضة الصوتية بدقة.',
    },
    variables: [
      { symbol: 'x_norm', meaning: { en: 'Bandpass-filtered (20–150 Hz) normalized PCG', ar: 'إشارة صوت القلب المطبّعة (20-150Hz)' } },
      { symbol: 'E_S(n)', meaning: { en: 'Smoothed acoustic valve envelope', ar: 'غلاف الطاقة الزمني لصمامات القلب' } },
    ],
  },
  {
    id: 'moens-korteweg',
    title: { en: '07. Moens-Korteweg & Bramwell-Hill Hemodynamics', ar: '07. معادلات Moens-Korteweg وBramwell-Hill لضغط الدم والسكري' },
    latex: String.raw`\begin{gathered} \text{PWV} = \frac{L}{\text{PTT}} = \sqrt{\frac{E_{\text{inc}}\, h}{2r\rho}} = \sqrt{\frac{V}{\rho}\frac{dP}{dV}} \\[6pt] \text{SBP} \approx P_0 + \beta \ln\!\left(\frac{\text{PTT}_0}{\text{PTT}}\right) \end{gathered}`,
    explanation: {
      en: 'Links arterial Pulse Wave Velocity (PWV) and Pulse Transit Time (PTT) directly to arterial wall elastic modulus E_inc, which stiffens progressively under hypertension and chronic hyperglycemia (AGE cross-linking reflected in HbA1c).',
      ar: 'تربط سرعة موجة النبض PWV وزمن انتقالها PTT بمرونة جدار الشريان؛ حيث تزداد الصلابة الشريانية طردياً مع ارتفاع ضغط الدم والارتباط السكري المزمن (HbA1c).',
    },
    variables: [
      { symbol: 'PTT', meaning: { en: 'Pulse Transit Time between heart & wrist/finger', ar: 'زمن انتقال النبضة من القلب إلى الطرف' } },
      { symbol: 'E_inc', meaning: { en: 'Incremental arterial elastic modulus', ar: 'معامل المرونة الشريانية' } },
    ],
  },
  {
    id: 'ntp-sync',
    title: { en: '08. 4-Timestamp NTP Sensor Clock Handshake', ar: '08. مزامنة التوقيت رباعي الطوابع NTP مع الساعة الذكية' },
    latex: String.raw`\delta = (t_4 - t_1) - (t_3 - t_2), \quad \theta = \frac{(t_2 - t_1) + (t_3 - t_4)}{2}`,
    explanation: {
      en: 'Eliminates asymmetric Bluetooth/DataLayer transport jitter when aligning Wear OS 100Hz wrist PPG timestamps with Xiaomi 15T Pro camera/PCG frames for millisecond-accurate PTT.',
      ar: 'يزيل تأرجح نقل البلوتوث عند مطابقة طوابع ساعة Wear OS مع إطارات كاميرا الهاتف لحساب زمن انتقال النبض PTT بدقة الملي ثانية.',
    },
    variables: [
      { symbol: 'δ', meaning: { en: 'Round-trip transport delay', ar: 'زمن رحلة الذهاب والإياب' } },
      { symbol: 'θ', meaning: { en: 'Clock offset between phone & watch', ar: 'فرق التوقيت الدقيق بين الهاتف والساعة' } },
    ],
  },
];

export const VULNERABILITIES_18: VulnerabilityFix[] = [
  {
    id: 1,
    category: 'memory',
    vulnerability: { en: 'Android 15 16KB ELF Page Size Crash', ar: 'انهيار المكتبات الأصلية مع صفحات 16KB في أندرويد 15' },
    rootCause: { en: 'Legacy 4KB-aligned native .so libraries fail dlopen() on Xiaomi 15T Pro Android 15 kernel.', ar: 'فشل تحميل ملفات .so المبنية بمحاذاة 4KB على نواة أندرويد 15.' },
    implementedFix: { en: 'Added -Wl,-z,max-page-size=16384 in CMakeLists.txt & upgraded NDK r27+ / Oboe 1.9+.', ar: 'تفعيل راية الربط -Wl,-z,max-page-size=16384 في CMakeLists وترقية NDK وOboe.' },
  },
  {
    id: 2,
    category: 'memory',
    vulnerability: { en: 'Deprecated TFLite Interpreter / NNAPI Removal', ar: 'إلغاء واجهات TFLite Interpreter وNNAPI القديمة' },
    rootCause: { en: 'NNAPI is deprecated in Android 15 and Qualcomm QNN crashes on MediaTek Dimensity 9400+.', ar: 'توقف دعم NNAPI في أندرويد 15 وانهيار مكتبات كوالكوم على معالج ميدياتيك.' },
    implementedFix: { en: 'Adopted Google AI Edge LiteRT 2.x CompiledModel API with NeuroPilot NPU + GPU/CPU fallback.', ar: 'الانتقال إلى LiteRT 2.x CompiledModel API مع مسرع NeuroPilot NPU.' },
  },
  {
    id: 3,
    category: 'camera',
    vulnerability: { en: 'Front 32MP Fixed-Focus Macro Blur at 5cm', ar: 'ضبابية الكاميرا الأمامية ثابتة التركيز عند 5 سم' },
    rootCause: { en: 'Front sensor hyperfocal design cannot focus on eyelids/sclera at close macro distance.', ar: 'عدسة السيلفي مصممة للتركيز البعيد وتفشل في تصوير العين عن قرب.' },
    implementedFix: { en: 'Routed eye sclera/conjunctiva exam to Rear 50MP OIS @ 15cm with Laplacian focus gate + TTS.', ar: 'توجيه فحص العين للكاميرا الخلفية 50MP OIS على بعد 15 سم مع بوابة تركيز وتوجيه صوتي.' },
  },
  {
    id: 4,
    category: 'camera',
    vulnerability: { en: 'Premature AE/AWB Lock on Dark First Frame', ar: 'قفل التعرض وموازنة الأبيض على إطار أول مظلم' },
    rootCause: { en: 'Setting CONTROL_AE_LOCK immediately freezes uncalibrated sensor exposure & gain.', ar: 'قفل الإعدادات قبل استقرار المستشعر يثبت صورة مشوهة الألوان.' },
    implementedFix: { en: 'Built 2-Stage Convergence -> Lock state machine awaiting AE_CONVERGED & AWB_CONVERGED.', ar: 'بناء آلة حالة تنتظر استقرار AE وAWB قبل القفل النهائي.' },
  },
  {
    id: 5,
    category: 'camera',
    vulnerability: { en: 'HyperOS 2 Beauty / Edge Enhancement Artifacts', ar: 'تشويه فلاتر التجميل والحدة في HyperOS 2 لإشارة النبض' },
    rootCause: { en: 'Vendor ISP smoothing erases subtle 0.2% skin hemoglobin micro-pulsations.', ar: 'تنعيم البشرة البرمجي يمحو التغيرات المجهرية في تدفق الدم.' },
    implementedFix: { en: 'Disabled NOISE_REDUCTION_MODE_OFF, EDGE_MODE_OFF, and FACE_DETECT_MODE_OFF on CaptureRequest.', ar: 'تعطيل تقليل الضوضاء وتحسين الحواف وكشف الوجوه في طلب الالتقاط.' },
  },
  {
    id: 6,
    category: 'camera',
    vulnerability: { en: 'YUV_420_888 Stride & Padding Corruption', ar: 'تلف قراءة مصفوفة YUV_420_888 بسبب الحشو العرضي' },
    rootCause: { en: 'Assuming contiguous tightly-packed pixels corrupts rows when rowStride > width.', ar: 'افتراض تلاصق البايتات يفسد الصورة عندما يتجاوز rowStride عرض الإطار.' },
    implementedFix: { en: 'Explicit rowStride and pixelStride indexing inside zero-alloc direct ByteBuffer reader.', ar: 'القراءة الصريحة وفق rowStride وpixelStride في ذاكرة مباشرة.' },
  },
  {
    id: 7,
    category: 'camera',
    vulnerability: { en: 'Contact PPG Flash LED Thermal Burn Risk', ar: 'خطر ارتفاع حرارة الفلاش عند ملامسة الإصبع' },
    rootCause: { en: 'Sustained FLASH_MODE_TORCH heats skin and causes vasoconstriction bias or discomfort.', ar: 'إبقاء الفلاش مضاءً لفترة طويلة يرفع حرارة الإصبع ويغير تدفق الدم.' },
    implementedFix: { en: 'Added Thermal Guard monitoring PowerManager thermal status + 45s auto-cutoff & duty cycle.', ar: 'إضافة حارس حرارة يراقب حالة الطاقة ويغلق الفلاش تلقائياً عند التجاوز.' },
  },
  {
    id: 8,
    category: 'dsp',
    vulnerability: { en: 'Non-Uniform Camera Frame Jitter Corrupting FFT', ar: 'تأرجح معدل إطارات الكاميرا يفسد تحليل التردد FFT' },
    rootCause: { en: 'Android Camera2 timestamps fluctuate (±4ms), invalidating uniform-grid DSP assumptions.', ar: 'تفاوت زمن وصول الإطارات يسبب تشتتاً طيفياً في تحويل فورييه.' },
    implementedFix: { en: 'Uniform 60.0 Hz Natural Cubic Spline Resampling on nanosecond SENSOR_TIMESTAMP.', ar: 'إعادة التشكيل بالمنحنيات التكعيبية على طابع SENSOR_TIMESTAMP بالنانوثانية.' },
  },
  {
    id: 9,
    category: 'dsp',
    vulnerability: { en: 'IIR Phase Distortion Shifting Dicrotic Notch', ar: 'إزاحة الطور في المرشحات التقليدية تغير موقع الثلمة الثنائية' },
    rootCause: { en: 'Causal IIR filters introduce frequency-dependent group delay distorting SDPPG peaks.', ar: 'المرشحات أحادية الاتجاه تزحزح القمم الزمنية لموجة النبض.' },
    implementedFix: { en: 'Zero-Phase Forward-Backward Butterworth filtfilt + reflective edge padding.', ar: 'تطبيق ترشيح أمامي-خلفي صفري الطور مع تمديد انعكاسي للحواف.' },
  },
  {
    id: 10,
    category: 'dsp',
    vulnerability: { en: '50Hz/60Hz Indoor LED Mains Flicker Aliasing', ar: 'تداخل وميض الإضاءة المنزلية 50/60Hz مع تردد القلب' },
    rootCause: { en: 'Artificial AC lighting aliases into cardiac bands at 30/60fps camera sampling.', ar: 'تردد مصابيح التيار المتردد ينطوي طيفياً داخل نطاق النبض البصري.' },
    implementedFix: { en: 'Reads STATISTICS_SCENE_FLICKER and applies adaptive IIR Notch filter before POS.', ar: 'قراءة تردد الوميض من الكاميرا وتطبيق مرشح Notch تكيفي.' },
  },
  {
    id: 11,
    category: 'dsp',
    vulnerability: { en: 'Uncompensated Melanin Optical Attenuation Bias', ar: 'تحيز قراءات الأكسجين والأنيميا مع اختلاف لون البشرة' },
    rootCause: { en: 'Higher epidermal melanin alters green/red absorption ratio in uncalibrated models.', ar: 'زيادة الميلانين تغير نسبة امتصاص الضوء الأخضر والأحمر.' },
    implementedFix: { en: 'Integrated Fitzpatrick I–VI calibration feature & ratio-of-ratios normalization.', ar: 'دمج معامل تصحيح فيتزباتريك I-VI وتطبيع النسب الضوئية.' },
  },
  {
    id: 12,
    category: 'dsp',
    vulnerability: { en: 'Hallucinated Estimates Under Low Signal Quality', ar: 'إصدار تقديرات طبية خاطئة عند رداءة الإشارة' },
    rootCause: { en: 'Models output confident numbers even when subject moves or finger slips.', ar: 'الشبكات العصبية تعطي أرقاماً حتى لو كانت الإشارة مجرد ضوضاء.' },
    implementedFix: { en: 'Enforced spectral purity SQI >= 0.65 gate blocking inference & prompting rescan.', ar: 'فرض بوابة أمان SQI >= 0.65 تمنع عرض التقدير وتطلب إعادة الفحص.' },
  },
  {
    id: 13,
    category: 'audio',
    vulnerability: { en: 'Android AudioRecord AGC/NS Destroying 20kHz Sonar', ar: 'تدمير معالجة الصوت التلقائية لإشارة السونار 20kHz' },
    rootCause: { en: 'Standard voice presets apply 8kHz low-pass filtering & aggressive noise suppression.', ar: 'أوضاع الصوت العادية تقص الترددات فوق 8kHz وتلغي الموجة الحاملة.' },
    implementedFix: { en: 'Opened Oboe C++ stream with oboe::InputPreset::Unprocessed & PerformanceMode::LowLatency.', ar: 'استخدام مسار Oboe الخام Unprocessed بمعدل 48kHz بدون أي معالجة نظامية.' },
  },
  {
    id: 14,
    category: 'audio',
    vulnerability: { en: 'Sonar Phase Jumps on Buffer Underrun', ar: 'قفزات الطور في السونار عند انقطاع أو تغير حجم المخزن' },
    rootCause: { en: 'Resetting phase accumulator per audio callback breaks continuous chest tracking.', ar: 'إعادة ضبط طور الموجة في كل دورة نداء يسبب انكساراً في الإزاحة.' },
    implementedFix: { en: 'Maintained monotonic 64-bit cumulative sample counter + atan2 continuous phase unwrapping.', ar: 'استخدام عداد عينات تراكمي 64-bit وفك التفاف طور مستمر.' },
  },
  {
    id: 15,
    category: 'audio',
    vulnerability: { en: 'Direct-Path Speaker-to-Mic Clutter Saturation', ar: 'طغيان الصدى المباشر بين السماعة والميكروفون على حركة الصدر' },
    rootCause: { en: 'Direct acoustic coupling across phone chassis is 100x stronger than chest reflection.', ar: 'الموجة المباشرة عبر جسم الهاتف أقوى بمئة ضعف من ارتداد الصدر.' },
    implementedFix: { en: 'Exponential moving-average I/Q DC clutter subtraction isolating dynamic chest phasor.', ar: 'طرح متوسط الصدى الثابت لحظياً في مركبتي I وQ لعزل الحركة الديناميكية.' },
  },
  {
    id: 16,
    category: 'security',
    vulnerability: { en: 'TEE Fingerprint Isolation Blocking 1-Hand PTT', ar: 'عزل مستشعر البصمة داخل TEE يمنع قياس PTT بيد واحدة' },
    rootCause: { en: 'Hardware security enclave prohibits reading raw optical fingerprint timing.', ar: 'النظام الأمني يمنع الوصول الزمني الخام لحساس البصمة.' },
    implementedFix: { en: 'Replaced with 4-Timestamp NTP-synced Wear OS 100Hz PPG + acoustic PCG S1 reference.', ar: 'استبداله بمزامنة NTP رباعية الطوابع مع الساعة الذكية وتسمع القلب PCG.' },
  },
  {
    id: 17,
    category: 'security',
    vulnerability: { en: 'HyperOS 2 Aggressive Background Service Termination', ar: 'قتل خدمة مراقبة النوم الخلفية في HyperOS 2' },
    rootCause: { en: 'MIUI/HyperOS power killer suspends overnight audio/sonar threads after screen lock.', ar: 'نظام توفير الطاقة يوقف التسجيل الليلي بمجرد إغلاق الشاشة.' },
    implementedFix: { en: 'Bound ForegroundService (MICROPHONE|HEALTH), PARTIAL_WAKE_LOCK, and battery exemption flow.', ar: 'استخدام ForegroundService مخصصة مع قفل يقظة المعالج وتوجيه إعدادات البطارية.' },
  },
  {
    id: 18,
    category: 'security',
    vulnerability: { en: 'Plaintext SQLite / Hardcoded Key Exposure', ar: 'انكشاف البيانات الطبية أو مفاتيح التشفير في الذاكرة' },
    rootCause: { en: 'Unencrypted Room databases expose sensitive clinical trends on rooted or backed-up devices.', ar: 'قواعد البيانات غير المشفرة تعرض السجلات الطبية للخطر.' },
    implementedFix: { en: 'SQLCipher 4.6.1 AES-256 database with 32-byte key wrapped by AndroidKeyStore AES-GCM.', ar: 'تشفير SQLCipher AES-256 بمفتاح عشوائي مغلف داخل الشريحة الأمنية للجهاز.' },
  },
];

export const CLINICAL_PROTOCOL: ClinicalProtocolStep[] = [
  {
    step: 'Step 01',
    title: { en: 'Seated Facial rPPG & Autonomic Baseline', ar: 'الخطوة 1: مسح الوجه البصري وخط الأساس الذاتي' },
    sensorModal: 'Front 32MP (35cm, 60fps)',
    duration: '30 sec',
    instructions: {
      en: 'Patient faces natural or indoor light at 35 cm. System waits for AE/AWB convergence, extracts POS rPPG + HRV RMSSD, and verifies SQI >= 0.65.',
      ar: 'يجلس المريض أمام الكاميرا الأمامية على مسافة 35 سم لمدة 30 ثانية لاستخراج نبض الوجه ومعدل تقلب القلب والتحقق من جودة الإشارة.',
    },
    datasetReference: 'PURE / UBFC-rPPG / MIMIC-IV',
    validationMetric: 'HR MAE <= 1.8 BPM · RMSSD r >= 0.91',
  },
  {
    step: 'Step 02',
    title: { en: 'Contact Fingertip PPG & Arterial Stiffness', ar: 'الخطوة 2: بصمة النبض التلامسية وتصلب الشرايين' },
    sensorModal: 'Rear 50MP OIS + Thermal-Guarded Torch',
    duration: '25 sec',
    instructions: {
      en: 'Index finger rests lightly over Rear 50MP lens + flash. C++17 filtfilt extracts SDPPG (a,b,c,d,e), Dicrotic Notch Ratio, and Stiffness Index.',
      ar: 'وضع السبابة برفق على الكاميرا الخلفية والفلاش لاستخراج المشتقة الثانية لموجة النبض ونسبة الثلمة ومؤشر التصلب.',
    },
    datasetReference: 'PPG-BP Database (Guilin People’s Hospital)',
    validationMetric: 'SBP/DBP Bland-Altman LoA · AAMI Grade A',
  },
  {
    step: 'Step 03',
    title: { en: 'Eye Sclera & Palpebral Conjunctiva Scan', ar: 'الخطوة 3: فحص صلبة العين وملتحمة الجفن' },
    sensorModal: 'Rear 50MP OIS (15cm) + TTS + Laplacian Gate',
    duration: '15 sec',
    instructions: {
      en: 'Voice guidance directs patient to gaze upward and gently lower eyelid at 15 cm. Bradford D65 CIE L*a*b* scores scleral b* (bilirubin) and a*/L* (hemoglobin).',
      ar: 'توجيه صوتي لفحص العين بالكاميرا الخلفية على 15 سم لحساب مؤشر اليرقان (b*) وفقر الدم (a*/L*) بعد معايرة الإضاءة.',
    },
    datasetReference: 'Eyes-defy-anemia & Neonatal Jaundice CIE Benchmarks',
    validationMetric: 'Hb MAE <= 0.85 g/dL · Bilirubin AUC >= 0.92',
  },
  {
    step: 'Step 04',
    title: { en: 'Acoustic PCG & Wear OS 100Hz PTT Fusion', ar: 'الخطوة 4: تسمع صمامات القلب ومزامنة PTT' },
    sensorModal: 'Unprocessed Mic (20–150Hz) + Wear OS BLE',
    duration: '20 sec',
    instructions: {
      en: 'Bottom mic placed at 4th left intercostal space captures S1/S2 Shannon Energy peaks, paired via 4-Timestamp NTP with wrist PPG for Pulse Wave Velocity & HbA1c inference.',
      ar: 'وضع ميكروفون الهاتف على الصدر لالتقاط صوتي القلب S1/S2 ومزامنتهما مع الساعة لحساب سرعة موجة النبض وتقدير HbA1c.',
    },
    datasetReference: 'PhysioNet CinC Heart Sound & MIMIC-III/IV',
    validationMetric: 'Clarke Error Grid Zone A+B >= 96%',
  },
  {
    step: 'Step 05',
    title: { en: 'Overnight 20kHz Ultrasonic Apnea Sonar', ar: 'الخطوة 5: مراقبة انقطاع التنفس الليلي بالسونار 20kHz' },
    sensorModal: 'Oboe 48kHz Acoustic Radar (Nightstand 40cm)',
    duration: '6–8 hrs',
    instructions: {
      en: 'Phone rests 40 cm from chest on charger. Inaudible 20kHz I/Q demodulation logs sub-mm thoracic displacement, hypopneas, and >=10s obstructive apneas offline.',
      ar: 'وضع الهاتف على الطاولة بجانب السرير لبث موجات 20kHz غير مسموعة ورصد توقف التنفس >= 10 ثوانٍ وحساب مؤشر AHI محلياً.',
    },
    datasetReference: 'ICBHI Respiratory & Polysomnography PSG Reference',
    validationMetric: 'AHI Sensitivity 93.4% · Specificity 91.8%',
  },
];

export const GRANT_PACKAGE_SECTIONS = [
  {
    id: 'abstract',
    title: '1. Monograph Title, Faculty Supervision & Uncertainty-Aware Abstract (250 Words)',
    body: `Monograph & Project Title: When Should Smartphone Clinical AI Abstain? Uncertainty-Aware Offline Biophysical Diagnostics via Native C++17 Zero-Phase DSP, 20kHz Quadrature Ultrasonic Sonar, and Quantized Edge AI on Xiaomi 15T Pro
Lead Researcher & Principal Biomedical Systems Architect: Ahmed Elshal (Computer Science Division, FA-HISTS)
Academic & Scientific Faculty Supervisors (Co-PIs):
• Dr. Hayam Abd El-Mardy — Lecturer of Computer Science Fundamentals, Dept. of Computer Science, Higher Future Institute for Specialized Technological Studies (FA-HISTS) [Supervising On-Device AI, Information Theory & Statistical Uncertainty Quantification]
• Dr. Osama Helmy — Lecturer of Structured Programming & Systems Architecture, Dept. of Computer Science, Higher Future Institute for Specialized Technological Studies (FA-HISTS) [Supervising Embedded Systems Architecture, Native C++17 NDK / ARMv9 NEON SIMD & 16KB Page Memory Safety]
Supervising Institution: Higher Future Institute for Specialized Technological Studies (Future Academy / FA-HISTS, Cairo, Egypt) | Founded 1993 | Ministry of Higher Education License No. (1471) dated 13/11/1993 | Supreme Council of Universities Decree No. (359) | Coordination Code: (488) | Official Verification: futureacademy@fa-hists.edu.eg | https://www.futureacademyegypt.com | SIS: https://sis.fa-hists.edu.eg

Abstract:
According to The Lancet Commission on Diagnostics, 47% of the global population (~3.8 billion people) lacks access to primary-care diagnostics, while closing this gap prevents 1.1 million premature deaths annually across six conditions alone. WHO Patient Safety reports >3 million annual deaths from unsafe care and missed/delayed diagnosis, alongside 795,000–909,000 annual US deaths or permanent disabilities (Johns Hopkins / BMJ Quality & Safety). Five silent conditions dominate this crisis: cardiovascular disease (19.8M deaths/yr; 600M of 1.4B hypertensive adults unaware), diabetes (589M adults; 252M / 43% undiagnosed), obstructive sleep apnea (936M adults; 85–90% undiagnosed), and anemia/jaundice (1.92B people; 37% of pregnant women & 40% of under-5 children).

Conducted at Future Academy (FA-HISTS) by Lead Researcher Ahmed Elshal under the supervision of Dr. Hayam Abd El-Mardy and Dr. Osama Helmy, this project investigates when smartphone clinical AI must abstain rather than hallucinate. Validated on Xiaomi 15T Pro (MediaTek Dimensity 9400+ / Android 15), our 100% offline platform enforces two deterministic pre-neural gates: (1) a Radix-2 FFT Spectral & Morphological Signal Quality Index Gate (SQI < 0.65 Abstention) and (2) a 2D Laplacian Variance Focus Gate (Var(∇²I) < 110.0 Abstention) on the Rear 50MP OIS camera, paired with Fitzpatrick I–VI fairness calibration and SQLCipher AES-256 hardware-backed encryption.`,
  },
  {
    id: 'methodology',
    title: '2. Computational Acceleration Methodology via Anthropic Claude Models',
    body: `Addressing Anthropic AI for Science's core evaluation criterion ("value of our model as applied to your use case, and AI's ability to meaningfully accelerate the research"), our faculty-supervised team utilizes Claude Opus 5.5, Claude Sonnet 5.5, and Claude Code across four computational bottlenecks:

1) Formal Verification of ARMv9 NEON SIMD C++17 DSP & Abstention Gates (Claude Opus 5.5 + Claude Code):
Real-time 60fps POS rPPG overlap-add, 4th-order Zero-Phase Butterworth filtfilt, NLMS adaptive IMU cancellation, Radix-2 FFT SQI abstention gating, and 8-hour 48kHz 20kHz I/Q sonar phase unwrapping must execute under <3.2% CPU load with strict Android 15 16KB ELF page alignment (-Wl,-z,max-page-size=16384). Under Dr. Osama Helmy's systems supervision, Claude Opus 5.5 and Claude Code synthesize and formally verify float32x4_t NEON intrinsics and leak-free JNI boundaries.

2) Multi-Database Clinical Ingestion & Statistical Validation via 1M Context Window (Claude Sonnet 5.5):
To train our 12-feature LiteRT 2.x (.tflite) model and calibrate SQI < 0.65 abstention thresholds against IEEE 1708 / ISO 81060-2, Clarke Error Grid (Zone A+B >= 95%), and AASM 2023 criteria, we harmonize tens of thousands of records from MIMIC-IV Waveform, PPG-BP, PhysioNet CinC, and ICBHI. Claude Sonnet 5.5's 1,000,000-token context window processes full WFDB schemas and outlier-rejection pipelines in a single reasoning pass.

3) Fitzpatrick I–VI Fairness & Uncertainty Quantification (Claude Opus 5.5):
Under Dr. Hayam Abd El-Mardy's supervision, Claude Opus 5.5 audits our Bradford D65 chromatic adaptation matrices and melanin compensation equations to guarantee equitable sensitivity across Fitzpatrick skin types I–VI.`,
  },
  {
    id: 'safety',
    title: '3. Open-Science Public Goods & Epistemic Safety Alignment',
    body: `Directly fulfilling Anthropic AI for Science's mandate to fund "public goods that benefit the wider scientific community: open datasets, open-source software, open standards, and shared libraries", all project outputs are released under Apache-2.0:
• Public Good 01 — libbiophysics-neon-dsp: Shared C++17 ARMv9 NEON SIMD library (16KB page-aligned for Android 15) containing Overlap-Add POS, adaptive NLMS, Zero-Phase 4th-Order Butterworth filtfilt, and 20kHz Oboe I/Q Sonar demodulation.
• Public Good 02 — Open-Camera2-Clinical-ISP-Standard: Open hardware calibration standard disabling OEM beauty filters, enforcing 2-Stage AE/AWB Convergence-to-Lock, sRGB linearization, and Bradford D65 CIE L*a*b* with Fitzpatrick I–VI compensation.
• Public Good 03 — FA-HISTS Multimodal De-Identified Benchmark Dataset: Open reference dataset pairing 60fps YUV rPPG/PPG, 20kHz sonar displacement, and ground-truth SQI labels for Uncertainty-Aware Clinical Abstention benchmarking.
• Public Good 04 — LiteRT-2.x-NeuroPilot-Medical-Pipeline: Open Python training and INT8/FP16 quantization suite targeting MediaTek NeuroPilot NPU & GPU delegates.`,
  },
  {
    id: 'compute',
    title: '4. Compute & API Credit Allocation Breakdown (6-Month Plan)',
    body: `Requested Grant Package: Anthropic AI for Science / External Researcher Access & Claude Team Plan for Scientists (6 Months)
Lead Researcher: Ahmed Elshal | Faculty Co-PIs: Dr. Hayam Abd El-Mardy & Dr. Osama Helmy | Institution: Higher Future Institute for Specialized Technological Studies (Future Academy / FA-HISTS, Cairo)
• Claude Opus 5.5 (~120M tokens): Formal mathematical verification, ARMv9 NEON SIMD vectorization, SQI abstention proofs, and Fitzpatrick fairness modeling ($2,640 USD).
• Claude Sonnet 5.5 (~350M tokens, 1M Context): High-throughput WFDB clinical dataset cleaning (MIMIC-IV / PPG-BP / ICBHI), Bland-Altman & Clarke Error Grid scripts ($2,100 USD).
• Claude Fable 5.2 (~100M tokens): Bilingual (EN/AR) patient TTS abstention guidance, clinical protocol documentation, and open-science manuscript drafting ($400 USD).
• Claude Code / Research Seats (6 months): Automated GoogleTest C++17 / JUnit fault-injection suites and Android 15 16KB ELF build verification ($1,200 USD).
Total Requested Compute & API Allocation: $6,340 USD (Tier B: $6,340 – $15,000 Clinical Validation Grant).`,
  },
];

export const SUPERVISION_BANNER = {
  researcherLabel: {
    en: 'Lead Researcher & Principal Biomedical Systems Architect',
    ar: 'الباحث الرئيسي ومهندس الأنظمة الطبية المدمجة',
  },
  researcherName: {
    en: 'Ahmed Elshal (Computer Science Division, FA-HISTS)',
    ar: 'أحمد الشال (Ahmed Elshal — شعبة علوم الحاسب، معهد المستقبل العالي)',
  },
  facultySupervisorsLine: {
    en: 'Faculty Supervisors (Co-PIs): Dr. Hayam Abd El-Mardy (Lecturer of Computer Science Fundamentals) & Dr. Osama Helmy (Lecturer of Structured Programming & Systems Architecture)',
    ar: 'هيئة الإشراف الأكاديمي والعلمي: أ.م.د / د. هيام عبد المرضي (أستاذ ومحاضر أساسيات علوم الحاسب) · د. أسامة حلمي (أستاذ ومحاضر البرمجة الهيكلية وهندسة البرمجيات)',
  },
  supervisionStatement: {
    en: 'Under the Academic & Scientific Supervision of: Higher Future Institute for Specialized Technological Studies (Future Academy / FA-HISTS, Cairo) | Ministry of Higher Education License No. 1471 & Supreme Council of Universities Decree No. 359',
    ar: 'تحت الإشراف الأكاديمي والعلمي: معهد المستقبل العالي للدراسات التكنولوجية المتخصصة (أكاديمية المستقبل - القاهرة) | ترخيص وزارة التعليم العالي رقم 1471 وقرار المجلس الأعلى للجامعات رقم 359',
  },
};

export interface FacultyMemberProfile {
  id: string;
  roleBadge: BilingualText;
  name: BilingualText;
  academicTitle: BilingualText;
  department: BilingualText;
  supervisionScope: BilingualText;
}

export const FACULTY_SUPERVISORS_DATA: FacultyMemberProfile[] = [
  {
    id: 'ahmed-elshal',
    roleBadge: {
      en: 'LEAD RESEARCHER & PRINCIPAL ARCHITECT',
      ar: 'الباحث الرئيسي ومهندس الأنظمة المدمجة',
    },
    name: {
      en: 'Ahmed Elshal',
      ar: 'أحمد الشال (Ahmed Elshal)',
    },
    academicTitle: {
      en: 'Lead Researcher & Principal Biomedical Embedded Systems Architect',
      ar: 'الباحث الرئيسي ومصمم معمارية الأنظمة الطبية المدمجة والذكاء الاصطناعي المحلي',
    },
    department: {
      en: 'Computer Science Division, Higher Future Institute for Specialized Technological Studies (FA-HISTS)',
      ar: 'شعبة علوم الحاسب، معهد المستقبل العالي للدراسات التكنولوجية المتخصصة (أكاديمية المستقبل)',
    },
    supervisionScope: {
      en: 'End-to-end architecture of the C++17 zero-phase DSP kernel, Oboe 20kHz quadrature ultrasonic sonar, Camera2 2-stage AE/AWB state machine, LiteRT 2.x NPU pipeline, and interactive biophysical simulators.',
      ar: 'التصميم والتنفيذ الكامل لنواة معالجة الإشارات C++17، ورادار السونار الصوتي 20kHz، وآلة حالة الكاميرا Camera2، وتكامل مسرع الذكاء الاصطناعي LiteRT 2.x، والمحاكيات الفيزيائية التفاعلية.',
    },
  },
  {
    id: 'dr-hayam-abd-el-mardy',
    roleBadge: {
      en: 'FACULTY SUPERVISOR & CO-PI (AI & UNCERTAINTY)',
      ar: 'المشرف الأكاديمي والعلمي (الذكاء الاصطناعي وعدم اليقين)',
    },
    name: {
      en: 'Dr. Hayam Abd El-Mardy',
      ar: 'أ.م.د / د. هيام عبد المرضي (Dr. Hayam Abd El-Mardy)',
    },
    academicTitle: {
      en: 'Lecturer of Computer Science Fundamentals',
      ar: 'أستاذ ومحاضر أساسيات علوم الحاسب (Lecturer of Computer Science Fundamentals)',
    },
    department: {
      en: 'Department of Computer Science, Higher Future Institute for Specialized Technological Studies (FA-HISTS)',
      ar: 'قسم علوم الحاسب، معهد المستقبل العالي للدراسات التكنولوجية المتخصصة (FA-HISTS)',
    },
    supervisionScope: {
      en: 'Scientific supervision of on-device AI algorithms, information theory, and statistical uncertainty quantification gates (Uncertainty-Aware Clinical Abstention via SQI >= 0.65 & Laplacian Focus gating).',
      ar: 'الإشراف العلمي على خوارزميات الذكاء الاصطناعي المحلي، نظرية المعلومات، وبوابات عدم اليقين الإحصائي والامتناع السريري الآمن (Uncertainty Quantification & Clinical Abstention).',
    },
  },
  {
    id: 'dr-osama-helmy',
    roleBadge: {
      en: 'FACULTY SUPERVISOR & CO-PI (SYSTEMS & NDK)',
      ar: 'المشرف الأكاديمي والهندسي (معمارية الأنظمة وC++17)',
    },
    name: {
      en: 'Dr. Osama Helmy',
      ar: 'د. أسامة حلمي (Dr. Osama Helmy)',
    },
    academicTitle: {
      en: 'Lecturer of Structured Programming & Systems Architecture',
      ar: 'أستاذ ومحاضر البرمجة الهيكلية وهندسة البرمجيات (Lecturer of Structured Programming & Systems Architecture)',
    },
    department: {
      en: 'Department of Computer Science, Higher Future Institute for Specialized Technological Studies (FA-HISTS)',
      ar: 'قسم علوم الحاسب، معهد المستقبل العالي للدراسات التكنولوجية المتخصصة (FA-HISTS)',
    },
    supervisionScope: {
      en: 'Engineering supervision of embedded systems architecture, native layer C++17 NDK / ARMv9 NEON SIMD vectorization, deterministic real-time threading, and Android 15 safe memory management (16KB ELF Page Alignment).',
      ar: 'الإشراف الهندسي على معمارية الأنظمة المدمجة، وكود الطبقة الأصلية C++17 NDK / ARMv9 NEON SIMD، وإدارة الذاكرة الآمنة المتوافقة مع معيار صفحات 16KB في Android 15.',
    },
  },
];

export interface InstitutionalDirectoryData {
  name: BilingualText;
  researcher: BilingualText;
  accreditation: BilingualText;
  academicSystem: BilingualText;
  coordinationCode: string;
  partnerships: string[];
  address: BilingualText;
  email: string;
  websiteMain: string;
  websiteContactAr: string;
  websiteContactEn: string;
  sisPortal: string;
  mobiles: string[];
  whatsappViber: string;
  landlinesAndFax: string[];
  workingHours: BilingualText;
  copyCardText: BilingualText;
}

export const INSTITUTIONAL_DIRECTORY: InstitutionalDirectoryData = {
  name: {
    en: 'Higher Future Institute for Specialized Technological Studies (Future Academy — FA-HISTS)',
    ar: 'معهد المستقبل العالي للدراسات التكنولوجية المتخصصة (أكاديمية المستقبل - Future Academy)',
  },
  researcher: {
    en: 'Lead Researcher: Ahmed Elshal · Supervised by Dr. Hayam Abd El-Mardy & Dr. Osama Helmy (Dept. of Computer Science, FA-HISTS)',
    ar: 'الباحث الرئيسي: أحمد الشال · بإشراف أ.م.د / د. هيام عبد المرضي ود. أسامة حلمي (قسم علوم الحاسب - معهد المستقبل العالي)',
  },
  accreditation: {
    en: 'Founded in 1993 under Ministry of Higher Education License No. (1471) dated 13/11/1993, with Supreme Council of Universities Decree No. (359) renewing equivalence of Bachelor’s degrees (Computer Science, Management Information Systems / MIS, and Business Administration) pursuant to Egyptian Universities Organization Law No. 49 of 1972.',
    ar: 'تأسس عام 1993 بموجب ترخيص وزارة التعليم العالي المصرية رقم (1471) بتاريخ 13/11/1993، وبقرار المجلس الأعلى للجامعات رقم (359) بتجديد معادلة درجات البكالوريوس (علوم الحاسب، نظم المعلومات الإدارية MIS، وإدارة الأعمال) وفقاً لقانون تنظيم الجامعات المصرية رقم 49 لسنة 1972.',
  },
  academicSystem: {
    en: 'Credit Hour System · 4 Academic Years · 132 Credit Hours + Professional Postgraduate Diplomas & Programs',
    ar: 'نظام الساعات المعتمدة (Credit Hour System) · 4 سنوات دراسية · 132 ساعة معتمدة + برامج ودبلومات الدراسات العليا المهنية',
  },
  coordinationCode: '488',
  partnerships: ['Dell EMC Academic Alliance', 'Huawei ICT Academy'],
  address: {
    en: 'Km 32 Cairo–Ismailia Desert Road, El Obour City, Cairo, Egypt',
    ar: 'الكيلو 32 طريق مصر – الإسماعيلية الصحراوي، مدينة العبور، محافظة القاهرة، جمهورية مصر العربية',
  },
  email: 'futureacademy@fa-hists.edu.eg',
  websiteMain: 'https://www.futureacademyegypt.com',
  websiteContactAr: 'https://www.futureacademyegypt.com/ar/contact-us',
  websiteContactEn: 'https://www.futureacademyegypt.com/en/contact-us',
  sisPortal: 'https://sis.fa-hists.edu.eg',
  mobiles: ['(+20) 01221732299', '(+20) 01221732300'],
  whatsappViber: '(+20) 01274066668',
  landlinesAndFax: ['(+202) 24772248', '(+202) 24772249', '(+202) 24772104'],
  workingHours: {
    en: 'Sunday – Thursday · 8:30 AM – 4:30 PM (Cairo Local Time)',
    ar: 'الأحد – الخميس · 8:30 صباحاً – 4:30 مساءً (بتوقيت القاهرة)',
  },
  copyCardText: {
    en: `INSTITUTIONAL VERIFICATION & FACULTY SUPERVISION CARD
Monograph Title: When Should Smartphone Clinical AI Abstain? Uncertainty-Aware Offline Biophysical Diagnostics on Xiaomi 15T Pro
Lead Researcher & Principal Architect: Ahmed Elshal (Computer Science Division, FA-HISTS)
Faculty Supervisors (Co-Principal Investigators):
1. Dr. Hayam Abd El-Mardy — Lecturer of Computer Science Fundamentals, Dept. of Computer Science, FA-HISTS (Supervising On-Device AI, Information Theory & Statistical Uncertainty Quantification)
2. Dr. Osama Helmy — Lecturer of Structured Programming & Systems Architecture, Dept. of Computer Science, FA-HISTS (Supervising Embedded Systems Architecture, Native C++17 NDK / ARMv9 NEON SIMD & 16KB Page Alignment)
Supervising Institution: Higher Future Institute for Specialized Technological Studies (Future Academy — FA-HISTS, Cairo, Egypt)
Accreditation: Founded 1993 | Ministry of Higher Education License No. (1471) dated 13/11/1993 | Supreme Council of Universities Decree No. (359) under Egyptian Universities Law No. 49 of 1972
Academic System: Credit Hour System (4 academic years, 132 credit hours + postgraduate professional programs) | Coordination Code: 488
Technology Alliances: Dell EMC Academic Alliance | Huawei ICT Academy
Campus Address: Km 32 Cairo–Ismailia Desert Road, El Obour City, Cairo, Egypt
Official Email: futureacademy@fa-hists.edu.eg
Official Website: https://www.futureacademyegypt.com (EN Contact: https://www.futureacademyegypt.com/en/contact-us | AR Contact: https://www.futureacademyegypt.com/ar/contact-us)
SIS Portal: https://sis.fa-hists.edu.eg
Mobile: (+20) 01221732299 | (+20) 01221732300
WhatsApp / Viber: (+20) 01274066668
Landlines & Fax: (+202) 24772248 | (+202) 24772249 | (+202) 24772104
Working Hours: Sunday–Thursday, 8:30 AM – 4:30 PM`,
    ar: `بطاقة الاعتماد الأكاديمي وهيئة الإشراف والتواصل المؤسسي الرسمي
عنوان الورقة البحثية: متى يجب أن يمتنع الذكاء الاصطناعي الطبي على الهاتف عن التشخيص؟ منظومة التشخيص الفيزيائي الحيوي المحلي الواعي بعدم اليقين على Xiaomi 15T Pro
الباحث الرئيسي ومهندس الأنظمة المدمجة: أحمد الشال (Ahmed Elshal — شعبة علوم الحاسب، معهد المستقبل العالي)
هيئة الإشراف الأكاديمي والعلمي (Co-Principal Investigators):
1. أ.م.د / د. هيام عبد المرضي (Dr. Hayam Abd El-Mardy) — أستاذ ومحاضر أساسيات علوم الحاسب، قسم علوم الحاسب، معهد المستقبل العالي (الإشراف العلمي على خوارزميات الذكاء الاصطناعي المحلي، نظرية المعلومات، وبوابات عدم اليقين الإحصائي Uncertainty Quantification)
2. د. أسامة حلمي (Dr. Osama Helmy) — أستاذ ومحاضر البرمجة الهيكلية وهندسة البرمجيات، قسم علوم الحاسب، معهد المستقبل العالي (الإشراف الهندسي على معمارية الأنظمة المدمجة، كود الطبقة الأصلية C++17 NDK / ARMv9 NEON SIMD، وإدارة الذاكرة الآمنة 16KB Page Alignment)
جهة الإشراف الأكاديمي والعلمي: معهد المستقبل العالي للدراسات التكنولوجية المتخصصة (أكاديمية المستقبل - Future Academy / FA-HISTS)
الاعتماد والترخيص: تأسس عام 1993 | ترخيص وزارة التعليم العالي رقم (1471) بتاريخ 13/11/1993 | قرار المجلس الأعلى للجامعات رقم (359) لمعادلة البكالوريوس وفق قانون تنظيم الجامعات رقم 49 لسنة 1972
النظام الأكاديمي: نظام الساعات المعتمدة (4 سنوات، 132 ساعة معتمدة + برامج الدراسات العليا المهنية) | رقم طابع التنسيق: 488
الشراكات التكنولوجية: Dell EMC Academic Alliance | Huawei ICT Academy
العنوان الرسمي: الكيلو 32 طريق مصر – الإسماعيلية الصحراوي، مدينة العبور، محافظة القاهرة، جمهورية مصر العربية
البريد الإلكتروني الرسمي: futureacademy@fa-hists.edu.eg
الموقع الرسمي: https://www.futureacademyegypt.com (تواصل بالعربية: https://www.futureacademyegypt.com/ar/contact-us | بالإنجليزية: https://www.futureacademyegypt.com/en/contact-us)
بوابة نظام معلومات الطلاب (SIS): https://sis.fa-hists.edu.eg
الهواتف المحمولة: (+20) 01221732299 | (+20) 01221732300
واتساب / فايبر: (+20) 01274066668
الأرضي والفاكس: (+202) 24772248 | (+202) 24772249 | (+202) 24772104
مواعيد العمل الرسمية: الأحد – الخميس، 8:30 صباحاً – 4:30 مساءً`,
  },
};

export interface PureBiophysicsPillar {
  id: string;
  tag: string;
  title: BilingualText;
  latex: string;
  scientificExplanation: BilingualText;
  keyInsights: BilingualText[];
}

export const PURE_BIOPHYSICS_PILLARS: PureBiophysicsPillar[] = [
  {
    id: 'beer-lambert-pos-filtfilt',
    tag: 'PILLAR 01 · OPTICAL ABSORPTION & ZERO-PHASE DSP',
    title: {
      en: 'Modified Beer-Lambert Law, Mandatory sRGB Linearization & Zero-Phase filtfilt Proof',
      ar: 'قانون بير-لامبرت المعدل للأنسجة الحية، إجبارية فك جاما العكسي، وبرهان Zero-Phase filtfilt',
    },
    latex: String.raw`\begin{gathered} I(\lambda, t) = I_0(\lambda) \exp\!\Big(-\big[\epsilon_{\text{HbO}_2}(\lambda) C_{\text{HbO}_2} + \epsilon_{\text{Hb}}(\lambda) C_{\text{Hb}}\big]\, d(t) - \mu_s(\lambda)\Big) \\[6pt] a_{\text{mag}}(t) = \sqrt{a_x^2 + a_y^2 + a_z^2} \\[6pt] H_{\text{eff}}(e^{j\omega}) = H(e^{j\omega}) H(e^{-j\omega}) = |H(e^{j\omega})|^2 \implies \angle H_{\text{eff}}(\omega) = 0^\circ \end{gathered}`,
    scientificExplanation: {
      en: 'In living skin tissue, arterial blood volume changes d(t) modulate green-channel (525–560 nm) oxy/deoxy-hemoglobin absorption while scattering μ_s(λ) remains quasi-static. Because camera sRGB encoding applies a non-linear power law (γ ≈ 2.4), failing to apply inverse sRGB companding before POS matrix projection algebraically mixes static skin brightness (DC) with pulsatile blood volume (AC), distorting pulse amplitude and skin-tone orthogonality. Following Overlap-Add Hanning POS and NLMS adaptive noise cancellation driven by the 200Hz IMU vector magnitude a_mag(t), forward-backward IIR filtering (filtfilt) multiplies H(e^{jω}) by its complex conjugate H(e^{-jω}), cancelling group delay identically to 0° so that the Dicrotic Notch and second-derivative SDPPG landmarks (a, b, c, d, e) retain exact millisecond fiducial timing.',
      ar: 'في الأنسجة الحية، يغيّر النبض الشرياني السُمك الفعال للدم d(t) فيغيّر الامتصاص وفق معاملات الهيموجلوبين المؤكسد والمختزل، بينما يظل التشتت النسيجي μ_s(λ) شبه ثابت. تطبيق فك جاما العكسي (γ ≈ 2.4) إجباري قبل مصفوفة POS لأن ضغط sRGB غير الخطي يخلط شدة الإضاءة الساكنة (DC) مع السعة النبضية المتغيرة (AC) ويفسد تعامد متجه الجلد. وبعد دمج نوافذ هانينج المتداخلة وإلغاء الاهتزاز بمرشح NLMS المرجعي لقيمة التسارع a_mag(t)، يضرب الترشيح ذهاباً وإياباً (filtfilt) استجابة المرشح في مرافقتها المركبة فتُمحى إزاحة الطور تماماً (∠H_eff = 0°)، ما يحمي موقع الثلمة الثنائية (Dicrotic Notch) ونقاط المشتقة الثانية SDPPG (a, b, c, d, e) دون أي انزياح زمني.',
    },
    keyInsights: [
      {
        en: 'sRGB γ ≈ 2.4 linearization decouples DC ambient illumination from AC hemoglobin Beer-Lambert modulation.',
        ar: 'فك جاما γ ≈ 2.4 يفصل الإضاءة الساكنة DC عن الامتصاص النبضي للهيموجلوبين AC.',
      },
      {
        en: 'Zero-phase |H(e^jω)|² guarantees 0 ms group-delay distortion across 0.5–5.0 Hz cardiac harmonics.',
        ar: 'الترشيح الصفري الطور |H(e^jω)|² يضمن انعدام التأخير الزمني عند استخراج قمم SDPPG.',
      },
    ],
  },
  {
    id: 'moens-hughes-hba1c',
    tag: 'PILLAR 02 · HEMODYNAMICS & GLYCEMIC ARTERIAL STIFFNESS',
    title: {
      en: 'Moens-Korteweg + Hughes Exponential Elasticity & Glycemic Arterial Stiffness (HbA1c)',
      ar: 'معادلتا Moens-Korteweg وHughes المرنة والرابط الفسيولوجي بتصلب الشرايين والـ HbA1c',
    },
    latex: String.raw`\begin{gathered} \text{PWV} = \sqrt{\frac{E_{\text{inc}}\, h}{2 r \rho}}, \qquad E(P) = E_0 e^{\alpha P} \\[6pt] \text{SBP} = a \ln\!\left(\frac{1}{\text{PTT}}\right) + b, \qquad \text{SI} = \frac{\text{Height}}{\Delta T_{\text{sys-dia}}} \\[6pt] \text{AGEs Cross-Linking} \uparrow E_0 \;\land\; \text{Neuropathy} \downarrow \text{HRV RMSSD} \end{gathered}`,
    scientificExplanation: {
      en: 'Combining the Moens-Korteweg wave-speed equation with Hughes’ exponential arterial wall elasticity E(P) = E_0 e^{αP} yields the logarithmic inverse relationship between Pulse Transit Time (PTT) and systolic/diastolic blood pressure. Beyond acute pressure, chronic hyperglycemia drives non-enzymatic glycation (Advanced Glycation End-products — AGEs) that permanently cross-link vascular collagen and elastin fibers. This raises baseline wall modulus E_0, accelerates reflected wave return (raising Stiffness Index SI = Height / ΔT_sys-dia and altering SDPPG b/a, d/a ratios), and simultaneously depresses parasympathetic nocturnal HRV RMSSD via diabetic autonomic neuropathy—forming the biophysical basis for multi-feature non-invasive HbA1c risk stratification.',
      ar: 'بدمج معادلة Moens-Korteweg لسرعة موجة النبض مع قانون Hughes الأسي لمرونة جدار الشريان E(P)=E_0 e^{αP} نشتق العلاقة اللوغاريتمية الدقيقة لتقدير ضغط الدم الانقباضي والانبساطي من زمن انتقال النبض PTT. وفي المسار الأيضي المزمن، يؤدي ارتفاع السكر التراكمي (HbA1c) إلى تراكم نواتج التسكر المتقدمة (AGEs) التي تكوّن روابط متشابكة بين ألياف الكولاجين والإيلاستين في الشرايين، مما يرفع معامل الصلابة E_0 ويزيد مؤشر التصلب SI ويُعدّل نسب المشتقة الثانية (b/a وd/a)، بالتوازي مع انخفاض تقلب ضربات القلب الليلي (HRV RMSSD) نتيجة الاعتلال العصبي الذاتي السكري.',
    },
    keyInsights: [
      {
        en: 'Hughes exponential E(P) converts linear PWV shifts into calibrated logarithmic mmHg estimates.',
        ar: 'نموذج Hughes الأسي يحوّل سرعة موجة النبض إلى تقدير معاير لضغط الدم بالمليمتر الزئبقي.',
      },
      {
        en: 'AGEs collagen cross-linking + depressed HRV RMSSD provide orthogonal optical-autonomic HbA1c signatures.',
        ar: 'تصلب الكولاجين عبر AGEs وانخفاض RMSSD يشكلان بصمة مزدوجة لتقييم خطر ارتفاع HbA1c.',
      },
    ],
  },
  {
    id: 'ultrasonic-iq-sonar',
    tag: 'PILLAR 03 · 20KHZ CW/FMCW ULTRASONIC ACOUSTIC RADAR',
    title: {
      en: '20kHz Quadrature I/Q Demodulation, 0.08 Hz Clutter Subtraction & Phase Unwrapping',
      ar: 'رادار السونار الصوتي 20kHz: عزل الصدى المباشر (0.08 Hz HPF) وفك التفاف الطور',
    },
    latex: String.raw`\begin{gathered} f_c = 20{,}000\text{ Hz},\quad \lambda = \frac{c}{f_c} \approx 17.15\text{ mm},\quad f_s = 48{,}000\text{ Hz} \\[6pt] I_{\text{dyn}}(t) = I_{\text{LP}}(t) - \overline{I}_{0.08\text{Hz}}(t) \\[6pt] \Delta d(t) = \frac{\Delta\phi_{\text{unwrap}}(t)}{4\pi}\,\lambda \quad (\texttt{InputPreset::Unprocessed}) \end{gathered}`,
    scientificExplanation: {
      en: 'Operating at f_c = 20 kHz (wavelength λ ≈ 17.15 mm, safely below the 24 kHz Nyquist limit of 48 kHz Oboe Unprocessed capture), the direct acoustic wave traveling across the smartphone chassis from speaker to bottom microphone is ~100× stronger than the thoracic echo. Applying a slow 0.08 Hz exponential high-pass clutter filter removes the static direct-path and bedroom-wall phasor, isolating the micro-Doppler chest phasor (I_dyn, Q_dyn). Unwrapping atan2(Q_dyn, I_dyn) across 2π discontinuities yields sub-millimeter thoracic excursion Δd(t), clearly separating rhythmic breathing cycles from hypopnea amplitude drops (>30%) and obstructive apneas (≥10 s flatline).',
      ar: 'عند تردد حامل 20,000 Hz (طول موجي 17.15 ملم) ومعدل التقاط خام 48,000 Hz عبر مسار Oboe::InputPreset::Unprocessed، تكون الموجة المباشرة بين سماعة الهاتف والميكروفون أقوى بمئة ضعف من ارتداد القفص الصدري. لذلك نعزل الصدى الثابت للغرفة وهيكل الهاتف بمرشح إزالة مكونات التردد المنخفض جداً عند 0.08 Hz، ثم نفك التفاف الطور المستمر لزاوية (I_dyn, Q_dyn) لتحويل إزاحة الصدر تحت المليمترية إلى سجل تنفسي دقيق يميز بين التنفس الطبيعي وضعف التنفس وانقطاع التنفس الانسدادي (≥10 ثوانٍ).',
    },
    keyInsights: [
      {
        en: '0.08 Hz clutter tracking adapts smoothly to bed movement without erasing 0.15–0.5 Hz respiratory cycles.',
        ar: 'متتبع الصدى عند 0.08 Hz يزيل انعكاسات الغرفة الثابتة مع الحفاظ الكامل على تردد التنفس (0.15–0.5 Hz).',
      },
      {
        en: 'Full 2π unwrapped phase translates 1 radian of phase change to 1.36 mm of chest wall motion.',
        ar: 'كل راديان واحد من فك التفاف الطور يعادل حركة صدرية بمقدار 1.36 ملم بدقة عالية في الظلام التام.',
      },
    ],
  },
  {
    id: 'eye-optics-cie-lab',
    tag: 'PILLAR 04 · OCULAR OPTICAL PHYSICS & CIE L*A*B*',
    title: {
      en: 'Rear 50MP OIS @ 15 cm, 2D Laplacian Variance Gate & Illuminant-Invariant CIE L*a*b* (D65)',
      ar: 'فيزياء فحص العين: الكاميرا الخلفية 50MP OIS على 15 سم، بوابة Laplacian، وفضاء CIE L*a*b* (D65)',
    },
    latex: String.raw`\begin{gathered} \text{FocusScore} = \operatorname{Var}\!\left(\nabla^2 I\right) = \operatorname{Var}\!\left(\frac{\partial^2 I}{\partial x^2} + \frac{\partial^2 I}{\partial y^2}\right) > \tau_{\text{sharp}} \\[6pt] \mathbf{XYZ}_{D65} = \mathbf{M}_{\text{Bradford}}\!\left(\text{CCT}_{\text{scene}}\right)\,\mathbf{M}_{\text{CCM}}\,\mathbf{C}_{\text{lin}} \;\longrightarrow\; \big(L^*,\; a^*,\; b^*\big)_{\text{CIE 1976}} \end{gathered}`,
    scientificExplanation: {
      en: 'Fixed-focus front selfie sensors (hyperfocal distance ~35 cm) suffer severe optical defocus blur at macro distances (<15 cm), destroying microvascular conjunctival texture. Switching ocular acquisition to the Rear 50MP Light Fusion 900 OIS sensor at 15 cm with real-time Voice Guidance (TTS) and a 2D Laplacian Variance focus gate ensures razor-sharp sclera and palpebral conjunctiva ROIs. Extracting Camera2 COLOR_CORRECTION_TRANSFORM paired with Bradford D65 chromatic adaptation converts linearized RGB into perceptual CIE 1976 L*a*b*, quantifying scleral +b* (bilirubin/jaundice) and conjunctival a*/L* (hemoglobin/anemia) invariant to 2700K–6500K indoor lighting.',
      ar: 'تعاني الكاميرا الأمامية ثابتة التركيز من غباش بصري حاد على المسافات القريبة (<15 سم) يطمس شعيرات الملتحمة الدقيقة؛ لذا يتم نقل فحص العين إلى الكاميرا الخلفية 50MP Light Fusion 900 المزودة بمثبت بصري OIS على مسافة 15 سم مع توجيه صوتي (TTS) وبوابة حدة الصورة عبر تباين لابلاس ثنائي الأبعاد Var(∇²I). وبسحب مصفوفة تصحيح الألوان من Camera2 وتطبيق مصفوفة التكيف اللوني Bradford D65 للوصول إلى فضاء CIE 1976 L*a*b*، نقيس بدقة اصفرار الصلبة (b* للبيليروبين) واحمرار الملتحمة (a*/L* للهيموجلوبين) باستقلالية تامة عن لون إضاءة الغرفة.',
    },
    keyInsights: [
      {
        en: 'Rear 50MP OIS + Laplacian gate rejects motion-blurred frames before chromatic scoring runs.',
        ar: 'تمنع بوابة تباين لابلاس مع المثبت البصري OIS قبول أي صورة عين مهزوزة أو خارج التركيز.',
      },
      {
        en: 'Bradford D65 adaptation stabilizes b* and a*/L* across warm tungsten (2700K) and daylight (6500K).',
        ar: 'يحافظ التكيف اللوني Bradford D65 على ثبات قياسات b* وa*/L* تحت الإضاءة الدافئة والنهارية.',
      },
    ],
  },
];

export interface ExecutionWorkflowStep {
  stepNumber: string;
  phase: BilingualText;
  duration: string;
  engineeringFocus: BilingualText;
  claudeModelsUsed: string;
  claudeContribution: BilingualText;
  deliverableArtifact: string;
}

export const EXECUTION_WORKFLOW_STEPS: ExecutionWorkflowStep[] = [
  {
    stepNumber: '01',
    phase: {
      en: 'Hardware Calibration & 16KB-Aligned Native NDK Foundation',
      ar: 'المرحلة 01: معايرة العتاد وبناء نواة C++17 المتوافقة مع صفحات 16KB',
    },
    duration: 'Weeks 1–3',
    engineeringFocus: {
      en: 'Configure Android 15 16KB ELF alignment, Camera2 raw YUV_420_888 2-stage AE/AWB state machine, Oboe Unprocessed 48kHz audio I/O, and 4-timestamp NTP clock sync with Wear OS.',
      ar: 'تضبيط التوافق الصارم مع صفحات 16KB في Android 15، وآلة حالة Camera2 ثنائية المراحل لقفل AE/AWB، ومسار Oboe الصوتي الخام 48kHz، ومزامنة الساعة الذكية NTP رباعية الطوابع.',
    },
    claudeModelsUsed: 'Claude Opus 5.5 + Claude Code',
    claudeContribution: {
      en: 'Audits CMakeLists.txt linker flags, verifies zero JNI buffer leaks across 60fps YUV planes, and writes GoogleTest unit verification for NTP drift bounds.',
      ar: 'مراجعة أعلام التجميع، والتحقق من خلو حدود JNI من تسريبات الذاكرة عند 60fps، وتوليد اختبارات GoogleTest لضبط انحراف الساعة.',
    },
    deliverableArtifact: 'CMakeLists.txt · MedicalCameraController.kt · NtpClockSynchronizer.kt',
  },
  {
    stepNumber: '02',
    phase: {
      en: 'Vectorized C++17 Biophysical DSP & 12-Feature Extraction',
      ar: 'المرحلة 02: تسريع معالجة الإشارات الرقمية بـ ARM NEON واستخراج الـ 12 ميزة',
    },
    duration: 'Weeks 4–8',
    engineeringFocus: {
      en: 'Implement ARMv9 NEON float32x4_t Overlap-Add POS rPPG, NLMS IMU motion cancellation, Zero-Phase Butterworth filtfilt, SDPPG landmarking, 20kHz I/Q Sonar phase unwrapping, and FFT SQI gating.',
      ar: 'بناء خوارزميات POS المتداخلة، ومرشح NLMS لإلغاء الاهتزاز، والترشيح الصفري الطور filtfilt، واستخلاص نقاط SDPPG، وفك التفاف طور سونار 20kHz، وحارس الجودة SQI.',
    },
    claudeModelsUsed: 'Claude Opus 5.5 + Claude Code',
    claudeContribution: {
      en: 'Transforms scalar C++ loops into deterministic ARMv9 NEON SIMD intrinsics, verifies zero-phase mathematical invariance, and benchmarks <3.2% CPU load over 8-hour overnight runs.',
      ar: 'تحويل الحلقات البرمجية إلى تعليمات ARMv9 NEON المتوازية، والتحقق الرياضي من انعدام تشوه الطور، وضبط استهلاك المعالج تحت 3.2%.',
    },
    deliverableArtifact: 'native_biophysics_dsp.cpp · native_oboe_sonar_pcg.cpp',
  },
  {
    stepNumber: '03',
    phase: {
      en: 'Multi-Database Ingestion & LiteRT 2.x NPU Quantization',
      ar: 'المرحلة 03: تنظيف قواعد البيانات الطبية وتكميم نموذج LiteRT 2.x على الـ NPU',
    },
    duration: 'Weeks 9–14',
    engineeringFocus: {
      en: 'Ingest and harmonize MIMIC-IV, PPG-BP, Eyes-defy-anemia, and ICBHI datasets; train 12-feature hemodynamic & glycemic model with Fitzpatrick fairness weighting; quantize to INT8/FP16 LiteRT (.tflite).',
      ar: 'توحيد وتنظيف قواعد بيانات MIMIC-IV وPPG-BP وICBHI، وتدريب شبكة التقدير الهيموديناميكي ذات الـ 12 ميزة مع معادلة عدالة درجات البشرة Fitzpatrick وتكميمها لـ LiteRT 2.x.',
    },
    claudeModelsUsed: 'Claude Sonnet 5.5 (1M Context) + Claude Opus 5.5',
    claudeContribution: {
      en: 'Sonnet 5.5 processes full WFDB schemas and outlier-cleaning scripts across 1M context tokens; Opus 5.5 audits Fitzpatrick bias bounds and quantization accuracy loss.',
      ar: 'استغلال نافذة المليون رمز في Sonnet 5.5 لتنظيف سجلات WFDB الضخمة، ومراجعة Opus 5.5 لحدود العدالة اللونية وفقدان الدقة بعد التكميم.',
    },
    deliverableArtifact: 'generate_and_train_litert_model.py · OnDeviceMedicalAiEngine.kt',
  },
  {
    stepNumber: '04',
    phase: {
      en: 'Clinical Statistical Validation (Bland-Altman & Clarke Error Grid)',
      ar: 'المرحلة 04: التحقق الإحصائي السريري (Bland-Altman وClarke Error Grid)',
    },
    duration: 'Weeks 15–20',
    engineeringFocus: {
      en: 'Evaluate cuffless SBP/DBP against AAMI/ISO 81060-2 limits, HbA1c risk stratification via Clarke Error Grid Zones A+B, conjunctival Hb MAE, and overnight sonar AHI sensitivity/specificity.',
      ar: 'قياس حدود التوافق Bland-Altman لضغط الدم وفق معيار AAMI، ومناطق A+B في شبكة Clarke لمؤشر HbA1c، ودقة الهيموجلوبين واليرقان ومؤشر انقطاع التنفس AHI.',
    },
    claudeModelsUsed: 'Claude Opus 5.5 + Claude Fable 5.2',
    claudeContribution: {
      en: 'Opus 5.5 verifies statistical confidence intervals and abstention calibration (SQI >= 0.65); Fable 5.2 drafts multilingual EN/AR clinical manuscripts and accessible TTS guidance.',
      ar: 'تدقيق فترات الثقة الإحصائية ومعايرة الامتناع الآمن في Opus 5.5، وصياغة المخطوطات البحثية والتوجيه الصوتي ثنائي اللغة عبر Fable 5.2.',
    },
    deliverableArtifact: 'Clinical Validation Report · Open-Science Preprint',
  },
  {
    stepNumber: '05',
    phase: {
      en: 'Hardware-Encrypted Offline Deployment & Academic Release',
      ar: 'المرحلة 05: الإطلاق المشفر 100% محلياً والنشر العلمي المفتوح',
    },
    duration: 'Weeks 21–24',
    engineeringFocus: {
      en: 'Seal SQLCipher 4.6.1 AES-256 storage behind AndroidKeyStore AES-GCM, validate HyperOS 2 ForegroundService overnight resilience, and publish Apache-2.0 benchmarks under FA-HISTS academic supervision.',
      ar: 'تغليف قاعدة البيانات المشفرة SQLCipher 4.6.1 بمفاتيح العتاد، واختبار ثبات الخدمة الليلية تحت HyperOS 2، ونشر الحزمة العلمية المفتوحة تحت إشراف أكاديمية المستقبل.',
    },
    claudeModelsUsed: 'Claude Code + Claude Opus 5.5',
    claudeContribution: {
      en: 'Runs automated fault-injection regression suites (thermal throttling, low illumination, background killing) and generates reproducible Apache-2.0 release documentation.',
      ar: 'تشغيل اختبارات حقن الأعطال التلقائية وتجهيز التوثيق المرجعي الكامل للجنة المراجعة العلمية.',
    },
    deliverableArtifact: 'KeystorePassphraseManager.kt · Apache-2.0 Release v1.0',
  },
];

export interface DemoScriptCue {
  timeRange: string;
  stageTitle: BilingualText;
  onScreenAction: BilingualText;
  speakerScript: BilingualText;
}

export const DEMO_SCRIPT_10MIN: DemoScriptCue[] = [
  {
    timeRange: '00:00 – 01:30',
    stageTitle: {
      en: '1. Problem Statement, Academic Supervision & Zero-Cloud Vision',
      ar: '1. المشكلة العالمية، الهوية الأكاديمية، ورؤية الخصوصية المطلقة',
    },
    onScreenAction: {
      en: 'Show Hero & Section 01 (FA-HISTS Official Supervision Card) and toggle EN ↔ AR live.',
      ar: 'استعراض الواجهة الافتتاحية وبطاقة الإشراف الأكاديمي لمعهد المستقبل العالي وتبديل اللغة فورياً.',
    },
    speakerScript: {
      en: 'Present the 3.5B screening gap, introduce Principal Researcher Ahmed Elshal and academic supervision by Future Academy (FA-HISTS, License 1471 / Decree 359), and emphasize why 100% offline processing on consumer smartphones (Xiaomi 15T Pro) beats cloud health apps on privacy and rural reach.',
      ar: 'عرض فجوة الفحص الطبي لـ 3.5 مليار إنسان، وتقديم الباحث الرئيسي أحمد الشال والإشراف العلمي لمعهد المستقبل العالي (ترخيص 1471 وقرار 359)، وتوضيح تفوق المعالجة المحلية 100% على السحابة من حيث الخصوصية والتكلفة الصفرية.',
    },
  },
  {
    timeRange: '01:30 – 04:00',
    stageTitle: {
      en: '2. Live Physical Simulators: rPPG Motion Cancellation & 20kHz Sonar',
      ar: '2. العرض الحي للمحاكيات الفيزيائية: POS rPPG ورادار السونار 20kHz',
    },
    onScreenAction: {
      en: 'Open Simulators 1 & 2: Inject hand tremor motion noise, then toggle 20kHz Sonar to Obstructive Apnea.',
      ar: 'تشغيل المحاكي 1 و2: رفع ضوضاء اهتزاز اليد لإثبات تعافي NLMS + filtfilt، ثم تفعيل حالة توقف التنفس في السونار.',
    },
    speakerScript: {
      en: 'Demonstrate live how sRGB linearization + Overlap-Add POS + NLMS + Zero-Phase filtfilt recovers the Dicrotic Notch and SDPPG peaks under motion, then show sub-millimeter 20kHz I/Q phase unwrapping flagging >=10s apneas without LiDAR.',
      ar: 'إثبات عملي لكيفية استعادة الثلمة الثنائية ونقاط SDPPG تحت الاهتزاز بفضل الترشيح الصفري الطور، ثم عرض رصد السونار 20kHz لحركة الصدر بالمليمتر وتنبيه انقطاع التنفس بدون حساس LiDAR.',
    },
  },
  {
    timeRange: '04:00 – 06:30',
    stageTitle: {
      en: '3. Hemodynamic Physics, Glycemic Stiffness & Eye CIE L*a*b* Lab',
      ar: '3. النمذجة الهيموديناميكية (Moens-Korteweg) وفحص العين اللوني CIE L*a*b*',
    },
    onScreenAction: {
      en: 'Run Simulators 3 & 4: Drop SQI below 0.65 to trigger Safety Abstention; sweep room CCT 2700K–6500K.',
      ar: 'تجربة المحاكي 3 و4: خفض SQI تحت 0.65 لإظهار بوابة الأمان، وتغيير حرارة إضاءة الغرفة لإثبات ثبات CIE L*a*b*.',
    },
    speakerScript: {
      en: 'Walk through the SQI >= 0.65 safety gate preventing diagnostic hallucinations, explain AGEs cross-linking & HRV RMSSD for HbA1c risk, and prove Bradford D65 stability on the Rear 50MP OIS eye scan.',
      ar: 'شرح بوابة الامتناع الآمن (SQI >= 0.65) التي تمنع الذكاء الاصطناعي من التخمين العشوائي، وتوضيح رابط تصلب الشرايين بالـ HbA1c، وثبات قياسات اليرقان وفقر الدم تحت تغير الإضاءة.',
    },
  },
  {
    timeRange: '06:30 – 08:30',
    stageTitle: {
      en: '4. Mathematical Proofs, 18 Engineering Vulnerabilities & Production Code',
      ar: '4. البراهين الرياضية، حل الثغرات الـ 18، ومستودع الأكواد التنفيذية',
    },
    onScreenAction: {
      en: 'Scroll Mathematics (KaTeX) -> Filter Vulnerabilities -> Switch Codebase tabs (C++17 NEON / Kotlin / Python).',
      ar: 'استعراض المعادلات الرياضية -> مصفوفة الثغرات العتادية الـ 18 -> تبويبات الكود التنفيذي الكامل.',
    },
    speakerScript: {
      en: 'Highlight concrete hardware engineering rigor: 16KB ELF alignment, Camera2 2-stage AE/AWB convergence lock, YUV pixelStride handling, and SQLCipher + AndroidKeyStore wrapping.',
      ar: 'إبراز الجاهزية الهندسية الحقيقية: محاذاة 16KB لـ Android 15، وقفل التعرض ثنائي المراحل في Camera2، والتشفير العتادي داخل الشريحة الأمنية.',
    },
  },
  {
    timeRange: '08:30 – 10:00',
    stageTitle: {
      en: '5. Why Anthropic Claude Credits Unlock Clinical Validation',
      ar: '5. دور منحة Anthropic Claude في إتمام التحقق السريري والنشر المفتوح',
    },
    onScreenAction: {
      en: 'Present Workflow Roadmap + Grant Package copy button & Anthropic Token Estimator.',
      ar: 'عرض خارطة التنفيذ + حاسبة التوكنز + زر نسخ ملف التقديم الرسمي لبرنامج Anthropic.',
    },
    speakerScript: {
      en: 'Conclude with the exact 6-month compute breakdown (~$6.3k–$15k credit tier across Claude Opus 5.5, Sonnet 5.5, Fable 5.2, and Claude Code) and invite both Future Academy’s committee and Anthropic’s AI for Science reviewers to verify institutional credentials directly.',
      ar: 'الختام بخطة الأشهر الستة وتوزيع الرصيد المطلوب بين نماذج Claude، وتوجيه لجنة معهد المستقبل ولجنة Anthropic للتحقق المباشر عبر بطاقة الاعتماد المؤسسي المدمجة.',
    },
  },
];

export interface HumanitarianMacroStat {
  id: string;
  headlineMetric: string;
  subMetric: BilingualText;
  source: string;
  description: BilingualText;
}

export const HUMANITARIAN_MACRO_STATS: HumanitarianMacroStat[] = [
  {
    id: 'lancet-gap',
    headlineMetric: '47% · 3.8B',
    subMetric: {
      en: 'Lack Primary-Care Diagnostics',
      ar: 'محرومون من الفحوصات الأساسية',
    },
    source: 'The Lancet Commission on Diagnostics',
    description: {
      en: '47% of the world’s population (~3.8 billion people) has little or no access to essential diagnostics in primary healthcare.',
      ar: '47% من سكان العالم (نحو 3.8 مليار إنسان) لا يملكون القدرة على الوصول إلى الفحوصات التشخيصية الأساسية في الرعاية الأولية.',
    },
  },
  {
    id: 'lancet-preventable',
    headlineMetric: '1.1M / yr',
    subMetric: {
      en: 'Preventable Premature Deaths',
      ar: 'وفيات مبكرة يمكن منعها سنوياً',
    },
    source: 'The Lancet Commission (6 Conditions)',
    description: {
      en: 'Closing diagnostic gaps in low- and middle-income countries prevents 1.1 million premature deaths annually across just six major conditions.',
      ar: 'سد الفجوة التشخيصية في الدول النامية والمتوسطة يمنع 1.1 مليون وفاة مبكرة سنوياً في 6 حالات مرضية فقط.',
    },
  },
  {
    id: 'who-unsafe-care',
    headlineMetric: '> 3.0M / yr',
    subMetric: {
      en: 'Deaths From Delayed / Missed Care',
      ar: 'وفيات من تأخر وخطأ التشخيص',
    },
    source: 'WHO Patient Safety Fact Sheet',
    description: {
      en: 'Over 3 million global deaths occur yearly due to unsafe care and missed/delayed diagnosis, with 1 in 10 patients directly harmed.',
      ar: 'أكثر من 3 ملايين وفاة سنوياً عالمياً بسبب الرعاية غير الآمنة وتأخر أو خطأ التشخيص، مع تضرر 1 من كل 10 مرضى.',
    },
  },
  {
    id: 'jh-diagnostic-error',
    headlineMetric: '795k–909k',
    subMetric: {
      en: 'US Annual Death / Disability',
      ar: 'وفاة أو إعاقة سنوياً بأمريكا وحدها',
    },
    source: 'Johns Hopkins / BMJ Quality & Safety',
    description: {
      en: 'Even in high-income health systems, diagnostic errors cause 795,000 to 909,000 deaths or permanent disabilities every year in the US alone.',
      ar: 'حتى في أمريكا وحدها، يعاني ما بين 795,000 إلى 909,000 شخص سنوياً من الوفاة أو الإعاقة الدائمة بسبب الأخطاء التشخيصية.',
    },
  },
];

export interface SilentKillerProfile {
  id: string;
  shortLabel: BilingualText;
  title: BilingualText;
  sourceCitation: string;
  globalAffected: string;
  annualMortalityOrBurden: BilingualText;
  undiagnosedPct: number;
  undiagnosedHeadline: BilingualText;
  diagnosedOrControlledPct: number;
  diagnosedLabel: BilingualText;
  crisisDetail: BilingualText;
  biophysicalIntervention: BilingualText;
  keyPipelineTags: string[];
}

export const SILENT_KILLERS_DATA: SilentKillerProfile[] = [
  {
    id: 'cvd-hypertension',
    shortLabel: {
      en: '01. CVD & Silent Hypertension',
      ar: '01. القلب وضغط الدم الصامت',
    },
    title: {
      en: 'Cardiovascular Disease & Silent Hypertension',
      ar: 'أمراض القلب والأوعية الدموية وارتفاع ضغط الدم الصامت',
    },
    sourceCitation: 'WHO CVD & Hypertension Reports',
    globalAffected: '1.4B Adults',
    annualMortalityOrBurden: {
      en: '19.8M deaths / year (32% of all global deaths · >75% in LMICs)',
      ar: '19.8 مليون وفاة سنوياً (32% من وفيات العالم · أكثر من 75% بالدول منخفضة ومتوسطة الدخل)',
    },
    undiagnosedPct: 44,
    undiagnosedHeadline: {
      en: '44% (600M people) completely unaware of their hypertension',
      ar: '44% (600 مليون إنسان) لا يعلمون أصلاً بإصابتهم حتى تفاجئهم جلطة قاتلة',
    },
    diagnosedOrControlledPct: 23,
    diagnosedLabel: {
      en: 'Only 23% (320M) have therapeutic blood pressure control',
      ar: '23% فقط (320 مليوناً) يملكون سيطرة علاجية على ضغطهم',
    },
    crisisDetail: {
      en: 'Cardiovascular diseases kill 19.8 million people annually. Of 1.4 billion adults living with hypertension, 600 million (44%) walk through daily life unscreened until struck by fatal stroke or myocardial infarction, and only 23% (320M) achieve control.',
      ar: 'تحصد أمراض القلب أرواح 19.8 مليون إنسان سنوياً. ويعاني 1.4 مليار بالغ من ارتفاع ضغط الدم، والكارثة أن 44% منهم (600 مليون إنسان) يسيرون في حياتهم اليومية دون علمهم حتى تفاجئهم جلطة دماغية أو أزمة قلبية، بينما 23% فقط لديهم سيطرة علاجية.',
    },
    biophysicalIntervention: {
      en: 'Computes Pulse Wave Velocity (PWV), Pulse Transit Time (PTT), and Dicrotic Notch ratio directly from the smartphone camera & acoustic PCG in 30 seconds—giving 600M unscreened adults a free, zero-internet early warning before stroke occurs.',
      ar: 'عبر حساب سرعة موجة النبض (PWV) وزمن انتقال النبض (PTT) ونسبة الثلمة الثنائية (Dicrotic Notch) من كاميرا الهاتف في 30 ثانية، نمنح هؤلاء الـ 600 مليون إنسان جرس إنذار مبكر ومجاني بدون إنترنت قبل السكتة الدماغية.',
    },
    keyPipelineTags: ['PWV / PTT', 'Dicrotic Notch', 'Zero-Phase filtfilt', '30s Offline Scan'],
  },
  {
    id: 'undiagnosed-diabetes',
    shortLabel: {
      en: '02. Undiagnosed Diabetes (HbA1c)',
      ar: '02. السكري غير المشخص (HbA1c)',
    },
    title: {
      en: 'Undiagnosed Diabetes & Progressive Vascular Damage',
      ar: 'مرض السكري غير المشخص وتلف الأوعية الدموية',
    },
    sourceCitation: 'IDF Diabetes Atlas 11th Edition & WHO',
    globalAffected: '589M -> 853M',
    annualMortalityOrBurden: {
      en: '> 3.4M deaths / year · 589M adults today (projected 853M)',
      ar: 'أكثر من 3.4 مليون وفاة سنوياً · 589 مليون بالغ حالياً (سيرتفع إلى 853 مليوناً)',
    },
    undiagnosedPct: 43,
    undiagnosedHeadline: {
      en: '43% (252M people) living with diabetes undiagnosed',
      ar: '43% (252 مليون إنسان) يعيشون بالسكري دون تشخيص',
    },
    diagnosedOrControlledPct: 57,
    diagnosedLabel: {
      en: '57% diagnosed—often after kidney, retinal, or limb complications',
      ar: '57% مشخصون—وغالباً بعد حدوث مضاعفات الكلى أو البصر',
    },
    crisisDetail: {
      en: '589 million adults live with diabetes worldwide (forecast to reach 853 million), causing over 3.4 million deaths annually. Tragically, 252 million (43%) remain undiagnosed until irreversible renal failure, diabetic retinopathy blindness, or limb amputation strikes.',
      ar: 'يعاني 589 مليون بالغ حول العالم من السكري (وسيرتفع العدد إلى 853 مليوناً)، ويسبب وفاة أكثر من 3.4 مليون إنسان سنوياً، بينما يعيش 252 مليوناً (43%) دون تشخيص حتى يصابوا بالفشل الكلوي أو العمى أو بتر الأطراف.',
    },
    biophysicalIntervention: {
      en: 'Measures Glycemic Vascular Stiffness Index (AGEs collagen cross-linking), depressed Nocturnal HRV RMSSD (autonomic neuropathy), and SDPPG morphology via LiteRT 2.x to flag Estimated HbA1c risk without needles or costly chemical test strips.',
      ar: 'عبر قياس مؤشر التصلب الوعائي السكري (Glycemic Vascular Stiffness) وتثبيط تقلب ضربات القلب الليلي (Nocturnal HRV RMSSD) ونموذج LiteRT 2.x، نرصد بصمة مقاومة الإنسولين وارتفاع السكر التراكمي بدون وخز إبر أو شرائط تحليل مكلفة.',
    },
    keyPipelineTags: ['Glycemic Stiffness', 'Nocturnal HRV RMSSD', 'LiteRT 2.x NPU', 'Needle-Free HbA1c'],
  },
  {
    id: 'sleep-apnea',
    shortLabel: {
      en: '03. Silent Nocturnal Sleep Apnea',
      ar: '03. الاختناق الليلي الصامت (OSA)',
    },
    title: {
      en: 'Silent Nocturnal Suffocation & Obstructive Sleep Apnea (OSA)',
      ar: 'الاختناق الليلي الصامت وانقطاع التنفس أثناء النوم (OSA)',
    },
    sourceCitation: 'Lancet Respiratory Medicine · Benjafield et al.',
    globalAffected: '936M Adults (425M Mod–Severe)',
    annualMortalityOrBurden: {
      en: '425M moderate-to-severe cases driving sudden nocturnal cardiac death & crashes',
      ar: '425 مليون حالة متوسطة إلى حرجة تضاعف الموت القلبي المفاجئ وحوادث الطرق',
    },
    undiagnosedPct: 88,
    undiagnosedHeadline: {
      en: '85%–90% (> 800M people) completely undiagnosed worldwide',
      ar: '85% إلى 90% (أكثر من 800 مليون إنسان) غير مشخصين عالمياً',
    },
    diagnosedOrControlledPct: 12,
    diagnosedLabel: {
      en: 'Only ~10%–15% reach costly hospital Polysomnography (PSG)',
      ar: '10%–15% فقط يصلون لفحص المستشفيات المكلف (PSG)',
    },
    crisisDetail: {
      en: 'Obstructive Sleep Apnea affects 936 million adults (425M moderate-to-severe needing urgent care). Yet 85%–90% (>800M people) go undiagnosed because in-lab Polysomnography costs hundreds of dollars with months-long waitlists—leaving patients suffocating dozens of times per night.',
      ar: 'يصيب انقطاع التنفس الانسدادي 936 مليون بالغ (منهم 425 مليوناً في حالة حرجة). وأكثر من 85% إلى 90% (أكثر من 800 مليون إنسان) غير مشخصين لأن فحص النوم التقليدي يكلف مئات الدولارات ويتطلب قوائم انتظار طويلة.',
    },
    biophysicalIntervention: {
      en: 'Transforms the Xiaomi 15T Pro speaker and unprocessed microphone via Oboe C++ into an inaudible 20kHz Ultrasonic Sonar radar on the nightstand—tracking chest excursion at 0.5 mm precision to detect >=10s apneas (AHI) free at home.',
      ar: 'تحويل سماعة وميكروفون Xiaomi 15T Pro عبر Oboe C++ إلى رادار سونار غير مسموع (20kHz Ultrasonic Sonar) بجانب السرير يرصد حركة القفص الصدري بدقة 0.5 ملم ويكتشف نوبات الاختناق الليلي (AHI) مجاناً في المنزل.',
    },
    keyPipelineTags: ['20kHz Ultrasonic Sonar', 'Oboe C++ Unprocessed', '0.5mm Phase Unwrap', 'Home AHI'],
  },
  {
    id: 'anemia-jaundice',
    shortLabel: {
      en: '04. Anemia & Neonatal Jaundice',
      ar: '04. فقر الدم واليرقان للأم والطفل',
    },
    title: {
      en: 'Maternal/Pediatric Anemia & Hyperbilirubinemia Jaundice',
      ar: 'فقر الدم واليرقان لدى الأمهات والأطفال حديثي الولادة',
    },
    sourceCitation: 'WHO Global Anaemia Estimates & GBD Study',
    globalAffected: '1.92B People',
    annualMortalityOrBurden: {
      en: '50M Years Lived with Disability (YLDs) · 37% pregnant women · 40% children < 5',
      ar: '50 مليون سنة مع الإعاقة (YLDs) · 37% من الحوامل · 40% من الأطفال دون الخامسة',
    },
    undiagnosedPct: 40,
    undiagnosedHeadline: {
      en: '40% children <5 (269M) & 37% pregnant women (32M mothers) affected',
      ar: '40% من الأطفال دون الخامسة (269 مليوناً) و37% من الحوامل (32 مليون أم)',
    },
    diagnosedOrControlledPct: 60,
    diagnosedLabel: {
      en: '60% without active severe-stage overlap, yet rural screening remains scarce',
      ar: 'نقص حاد في الفحص المبكر بالقرى النائية قبل تدهور الحالة أو تلف الدماغ باليرقان',
    },
    crisisDetail: {
      en: 'Anemia affects 1.92 billion people globally—including 37% of pregnant women (32M) and 40% of under-5 children (269M)—costing 50 million Years Lived with Disability (YLDs) and elevating maternal hemorrhage mortality and pediatric neurodevelopmental delay, compounded by neonatal/hepatic jaundice brain injury.',
      ar: 'يصيب فقر الدم 1.92 مليار إنسان، منهم 37% من النساء الحوامل (32 مليون أم) و40% من الأطفال دون الخامسة (269 مليون طفل)، مسبباً فقدان 50 مليون سنة من الحياة الصحية (YLDs) وارتفاع وفيات الولادة، إلى جانب مخاطر اليرقان وتلف الدماغ لدى حديثي الولادة ومرضى الكبد.',
    },
    biophysicalIntervention: {
      en: 'Rear 50MP OIS camera (15 cm) + Laplacian focus gate + illuminant-invariant CIE L*a*b* (Bradford D65) enables any mother or rural nurse—100% offline—to screen palpebral conjunctiva pallor (Hb) and scleral yellowing (bilirubin) in seconds.',
      ar: 'فحص ملتحمة الجفن وصلبة العين بالكاميرا الخلفية (50MP OIS) مع المعايرة اللونية المستقلة عن الإضاءة (CIE L*a*b*) يمكّن أي أم أو ممرضة في قرية نائية بدون إنترنت من فحص شحوب الجفن واصفرار العين في ثوانٍ.',
    },
    keyPipelineTags: ['Rear 50MP OIS @ 15cm', 'CIE L*a*b* D65', 'Laplacian Gate', 'Zero-Internet Screening'],
  },
];

export interface AbstentionGateSpec {
  id: string;
  gateCode: string;
  thresholdRule: string;
  title: BilingualText;
  mathematicalFormulation: string;
  clinicalRationale: BilingualText;
  patientActionTriggered: BilingualText;
}

export const ABSTENTION_GATES_DATA: AbstentionGateSpec[] = [
  {
    id: 'sqi-spectral-morph-gate',
    gateCode: 'GATE 01 · PRE-NEURAL HEMODYNAMIC GUARD',
    thresholdRule: 'SQI < 0.65 -> SAFE ABSTENTION TRIGGERED',
    title: {
      en: 'Spectral & Morphological Signal Quality Index Gate (SQI < 0.65 Abstention)',
      ar: 'بوابة جودة الإشارة الطيفية والمورفولوجية (SQI < 0.65 Abstention)',
    },
    mathematicalFormulation: 'SQI = 0.70 · (E_{f0 + 2f0} / E_{0.5-5.0Hz}) + 0.30 · clamp(Skewness / 1.2, 0, 1) >= 0.65',
    clinicalRationale: {
      en: 'Before invoking the LiteRT 2.x neural network or Moens-Korteweg equations, C++17 Radix-2 FFT computes the ratio of cardiac fundamental + first harmonic energy to total in-band energy alongside third-moment systolic skewness. If hand tremor, poor finger pressure, or low perfusion drops SQI below 0.65, the engine deterministically abstains from outputting blood pressure or HbA1c.',
      ar: 'قبل استدعاء شبكة LiteRT 2.x أو معادلات Moens-Korteweg، يحسب تحويل فورييه السريع (Radix-2 FFT) نسبة طاقة التردد الأساسي للنبض وتوافقياته الأولى إلى الضوضاء المحيطة مع معامل الالتواء المورفولوجي (Skewness). إذا انخفض المؤشر عن 0.65، يمتنع النظام آلياً عن إصدار أي قراءة لضغط الدم أو السكر التراكمي منعاً للتخمين الطبي الخاطئ.',
    },
    patientActionTriggered: {
      en: 'Displays "SAFE ABSTENTION TRIGGERED" and issues bilingual TTS voice guidance instructing the patient to rest their forearm and stabilize finger/face posture.',
      ar: 'يُظهر حالة "SAFE ABSTENTION TRIGGERED" ويوجه المريض صوتياً (TTS) لتثبيت يده أو جلسته وإعادة القياس بأمان.',
    },
  },
  {
    id: 'laplacian-focus-gate',
    gateCode: 'GATE 02 · PRE-COLORIMETRIC OCULAR GUARD',
    thresholdRule: 'Var(∇²I) < 110.0 -> SAFE ABSTENTION TRIGGERED',
    title: {
      en: '2D Laplacian Variance Optical Focus Gate (Var(∇²I) < 110.0 Abstention)',
      ar: 'بوابة التركيز البؤري للعين بتباين لابلاس (Var(∇²I) < 110.0 Abstention)',
    },
    mathematicalFormulation: 'Var(∇²I) = Var(∂²I/∂x² + ∂²I/∂y²) >= 110.0  (@ 15 cm Rear 50MP OIS)',
    clinicalRationale: {
      en: 'Macro ocular imaging at 15 cm on the Rear 50MP Light Fusion 900 OIS sensor requires crisp microvascular resolution across the palpebral conjunctiva and sclera. If motion blur or optical defocus drops the 2D Laplacian variance below 110.0, spatial averaging mixes skin/eyelash pixels into the ROI and corrupts CIE L*a*b* chromophores—so the pipeline abstains immediately.',
      ar: 'يتطلب تصوير العين على مسافة 15 سم بالكاميرا الخلفية (50MP OIS) حدة بؤرية عالية لعزل الشعيرات الدموية في الملتحمة والصلبة. إذا انخفض تباين مؤشر لابلاس ثنائي الأبعاد عن 110.0 بسبب اهتزاز اليد أو عدم اكتمال التركيز البؤري، يمنع النظام تحليل البيليروبين والهيموجلوبين فوراً.',
    },
    patientActionTriggered: {
      en: 'Rejects defocused YUV frames in real time and prompts the user via acoustic distance/focus cues until optical lock (Var(∇²I) >= 110.0) is achieved.',
      ar: 'يرفض الإطارات غير الحادة لحظياً ويوجه المريض صوتياً لضبط مسافة 15 سم حتى يتحقق القفل البؤري الحاد.',
    },
  },
];

export interface OpenSciencePublicGood {
  id: string;
  number: string;
  repoSlug: string;
  license: string;
  categoryBadge: BilingualText;
  title: BilingualText;
  description: BilingualText;
  technicalComponents: string[];
}

export const OPEN_SCIENCE_PUBLIC_GOODS: OpenSciencePublicGood[] = [
  {
    id: 'libbiophysics-neon-dsp',
    number: '01',
    repoSlug: 'libbiophysics-neon-dsp',
    license: 'Apache-2.0',
    categoryBadge: {
      en: 'Shared C++17 ARMv9 NEON Library',
      ar: 'مكتبة C++17 ARMv9 NEON مشتركة',
    },
    title: {
      en: 'libbiophysics-neon-dsp (16KB-Aligned Native Biophysical DSP Kernel)',
      ar: 'مكتبة libbiophysics-neon-dsp (نواة معالجة الإشارات الحيوية بلغة C++17)',
    },
    description: {
      en: 'Open-source C++17 signal processing library compliant with Android 15 16KB ELF page alignment, providing zero-allocation Overlap-Add Hanning POS rPPG, adaptive NLMS motion cancellation, Zero-Phase 4th-Order Butterworth filtfilt, Radix-2 FFT SQI abstention gating, and 20kHz Oboe I/Q Sonar demodulation.',
      ar: 'مكتبة C++17 مفتوحة المصدر متوافقة مع معيار صفحات الذاكرة 16KB في Android 15، تضم خوارزميات POS Overlap-Add، ومرشح NLMS التكيفي، والترشيح الأمامي-الخلفي صفري الطور Zero-Phase Butterworth filtfilt، وبوابة الامتناع SQI، ومفكك تضمين السونار الصوتي 20kHz Oboe I/Q.',
    },
    technicalComponents: ['float32x4_t ARMv9 NEON', 'Zero-Phase filtfilt', '20kHz Oboe I/Q Sonar', '-Wl,-z,max-page-size=16384'],
  },
  {
    id: 'open-camera2-clinical-isp',
    number: '02',
    repoSlug: 'Open-Camera2-Clinical-ISP-Standard',
    license: 'Apache-2.0',
    categoryBadge: {
      en: 'Open Hardware Calibration Standard',
      ar: 'معيار برمجي مفتوح لمعايرة الكاميرا الطبية',
    },
    title: {
      en: 'Open-Camera2-Clinical-ISP-Standard (Deterministic Medical Camera2 Protocol)',
      ar: 'معيار Open-Camera2-Clinical-ISP-Standard (ضبط الكاميرا والألوان السريرية)',
    },
    description: {
      en: 'Standardized Kotlin/Camera2 state machine that disables OEM beauty/smoothing filters, enforces 2-Stage AE/AWB Convergence-to-Lock, performs sRGB inverse gamma linearization (γ ≈ 2.4), and applies Bradford D65 CIE 1976 L*a*b* chromatic adaptation with Fitzpatrick I–VI melanin compensation.',
      ar: 'معيار برمجي مفتوح لإلغاء فلاتر التجميل والتنعيم في هواتف أندرويد، وتنفيذ آلة حالة التقارب ثم القفل (2-Stage AE/AWB Convergence-to-Lock)، وفك منحنى الجاما (sRGB Linearization)، والتحويل اللوني القياسي Bradford D65 CIE L*a*b* مع تعويض الميلانين عبر مقياس Fitzpatrick I–VI.',
    },
    technicalComponents: ['2-Stage AE/AWB Lock', 'EDGE_MODE_OFF', 'Bradford D65 CIE L*a*b*', 'Fitzpatrick I–VI Fairness'],
  },
  {
    id: 'fa-hists-benchmark-dataset',
    number: '03',
    repoSlug: 'FA-HISTS-Multimodal-Abstention-Dataset',
    license: 'CC-BY-4.0 / Apache-2.0',
    categoryBadge: {
      en: 'Open De-Identified Reference Dataset',
      ar: 'مجموعة بيانات مرجعية مفتوحة ومجهولة الهوية',
    },
    title: {
      en: 'FA-HISTS Multimodal De-Identified Benchmark Dataset (Abstention Evaluation)',
      ar: 'قاعدة بيانات FA-HISTS المرجعية متعددة الوسائط لاختبار الامتناع الآمن',
    },
    description: {
      en: 'Curated under the academic supervision of Future Academy (FA-HISTS), this de-identified dataset links synchronized 60fps YUV rPPG/PPG waveforms, 200Hz IMU tremor traces, 20kHz ultrasonic sonar thoracic displacement, and annotated SQI / Laplacian blur regimes to benchmark Uncertainty-Aware Clinical Abstention.',
      ar: 'مجموعة بيانات معيارية مفتوحة ومجهولة الهوية تحت إشراف معهد المستقبل العالي (FA-HISTS)، تربط بين موجات 60fps YUV rPPG/PPG، وقراءات التسارع IMU، وإزاحة السونار الصوتي 20kHz، ومؤشرات جودة الإشارة SQI لتدريب واختبار خوارزميات الامتناع السريري الآمن.',
    },
    technicalComponents: ['60fps YUV rPPG/PPG', '20kHz Sonar Traces', 'SQI & Blur Ground Truth', 'Fitzpatrick Stratified'],
  },
  {
    id: 'litert-neuropilot-pipeline',
    number: '04',
    repoSlug: 'LiteRT-2.x-NeuroPilot-Medical-Pipeline',
    license: 'Apache-2.0',
    categoryBadge: {
      en: 'Open Training & Quantization Suite',
      ar: 'حزمة مفتوحة لتدريب وتكميم النماذج الطبية',
    },
    title: {
      en: 'LiteRT-2.x-NeuroPilot-Medical-Pipeline (INT8/FP16 Edge NPU Suite)',
      ar: 'حزمة LiteRT-2.x-NeuroPilot-Medical-Pipeline (تكميم نماذج الـ NPU)',
    },
    description: {
      en: 'Reproducible Python training, WFDB harmonization, and post-training quantization suite converting multi-feature physiological models from MIMIC-IV, PPG-BP, and PhysioNet into 16KB-aligned LiteRT 2.x (.tflite) models accelerated on MediaTek NeuroPilot NPU and GPU delegates.',
      ar: 'حزمة سكربتات Python مفتوحة المصدر لتحويل وتكميم (INT8 / FP16 Quantization) نماذج الموجات الفسيولوجية من قواعد بيانات MIMIC-IV وPPG-BP وPhysioNet لتعمل مباشرة على مسرعات MediaTek NeuroPilot NPU وGPU.',
    },
    technicalComponents: ['MIMIC-IV / PPG-BP WFDB', 'INT8 / FP16 LiteRT 2.x', 'Bland-Altman & Clarke QA', 'NeuroPilot NPU 890'],
  },
];

export interface RegulatoryMetricRow {
  id: string;
  clinicalModality: BilingualText;
  internationalStandard: string;
  targetThreshold: string;
  abstentionRule: string;
  referenceCohort: string;
}

export const REGULATORY_VALIDATION_METRICS: RegulatoryMetricRow[] = [
  {
    id: 'bp-iso-ieee',
    clinicalModality: {
      en: 'Cuffless Systolic & Diastolic Blood Pressure (SBP / DBP)',
      ar: 'ضغط الدم الانقباضي والانبساطي بدون كفة (SBP / DBP)',
    },
    internationalStandard: 'IEEE 1708-2019 & ISO 81060-2 (AAMI Grade A)',
    targetThreshold: 'MAE <= 5.0 mmHg · SD <= 8.0 mmHg · Bland-Altman Bias ± 1.96 SD',
    abstentionRule: 'Abstain if FFT Spectral/Morphological SQI < 0.65 or NTP Drift > 5 ms',
    referenceCohort: 'MIMIC-IV Waveform & Guilin PPG-BP (n = 657)',
  },
  {
    id: 'hba1c-clarke',
    clinicalModality: {
      en: 'Non-Invasive Glycated Hemoglobin Risk Stratification (Est. HbA1c %)',
      ar: 'تقدير خطر السكر التراكمي غير الجراحي (Estimated HbA1c %)',
    },
    internationalStandard: 'Clarke Error Grid Analysis & Bland-Altman LoA',
    targetThreshold: 'Clarke Zone A + B >= 95.0% · 95% LoA within ±0.55% HbA1c',
    abstentionRule: 'Abstain if SQI < 0.65 or Thermal Guard T_skin >= 41.0°C',
    referenceCohort: 'PPG-BP Glycemic Subset & MIMIC-IV',
  },
  {
    id: 'osa-aasm',
    clinicalModality: {
      en: 'Contactless Overnight Obstructive Sleep Apnea (AHI events/hr)',
      ar: 'رصد انقطاع التنفس الانسدادي الليلي بالسونار (مؤشر AHI)',
    },
    internationalStandard: 'AASM 2023 Scoring Manual vs. Lab Polysomnography (PSG)',
    targetThreshold: 'AHI Pearson r >= 0.88 · Sensitivity >= 93.0% · Specificity >= 91.5%',
    abstentionRule: 'Abstain if 20kHz Carrier SNR < 14 dB or Distance > 85 cm',
    referenceCohort: 'ICBHI Respiratory & PSG Reference Benchmark',
  },
  {
    id: 'ocular-clsi',
    clinicalModality: {
      en: 'Palpebral Conjunctiva Anemia (Hb) & Scleral Jaundice (Bilirubin)',
      ar: 'فقر الدم من ملتحمة الجفن (Hb) واليرقان من صلبة العين (Bilirubin)',
    },
    internationalStandard: 'CLSI EP17-A2 & CIE 1976 (L*a*b* D65 Chromatic Standard)',
    targetThreshold: 'Hb MAE <= 0.85 g/dL · Scleral Bilirubin ROC-AUC >= 0.92',
    abstentionRule: 'Abstain if 2D Laplacian Variance Var(∇²I) < 110.0 or Glare > 12%',
    referenceCohort: 'Eyes-defy-anemia & Neonatal Jaundice CIE Cohorts',
  },
];

export interface PeerReviewedReference {
  num: number;
  authors: string;
  year: string;
  title: string;
  journal: string;
  doi: string;
}

export const PEER_REVIEWED_REFERENCES_12: PeerReviewedReference[] = [
  {
    num: 1,
    authors: 'Fleming, K. A. et al. (The Lancet Commission on Diagnostics)',
    year: '2021',
    title: 'The Lancet Commission on diagnostics: transforming access to diagnostics',
    journal: 'The Lancet, 398(10315), 1997–2050',
    doi: '10.1016/S0140-6736(21)00673-5',
  },
  {
    num: 2,
    authors: 'Newman-Toker, D. E. et al.',
    year: '2024',
    title: 'Burden of serious harms from diagnostic error in the USA',
    journal: 'BMJ Quality & Safety, 33(2), 109–120',
    doi: '10.1136/bmjqs-2021-014130',
  },
  {
    num: 3,
    authors: 'Wang, W., den Brinker, A. C., Stuijk, S., & de Haan, G.',
    year: '2017',
    title: 'Algorithmic Principles of Remote PPG (Plane-Orthogonal-to-Skin POS)',
    journal: 'IEEE Transactions on Biomedical Engineering, 64(7), 1479–1491',
    doi: '10.1109/TBME.2016.2609282',
  },
  {
    num: 4,
    authors: 'Benjafield, A. V. et al.',
    year: '2019',
    title: 'Estimation of the global prevalence and burden of obstructive sleep apnoea: a literature-based analysis',
    journal: 'The Lancet Respiratory Medicine, 7(8), 687–698',
    doi: '10.1016/S2213-2600(19)30198-5',
  },
  {
    num: 5,
    authors: 'Nandakumar, R., Gollakota, S., & Watson, N.',
    year: '2015',
    title: 'Contactless Sleep Apnea Detection on Smartphones via Continuous-Wave Ultrasonic Sonar',
    journal: 'Proceedings of ACM MobiSys, 45–57',
    doi: '10.1145/2742647.2742674',
  },
  {
    num: 6,
    authors: 'Liang, Y., Chen, Z., Ward, R., & Elgendi, M.',
    year: '2018',
    title: 'A new, short-recorded photoplethysmogram dataset for blood pressure monitoring in China (PPG-BP)',
    journal: 'Scientific Data (Nature Portfolio), 5, 180020',
    doi: '10.1038/sdata.2018.20',
  },
  {
    num: 7,
    authors: 'Johnson, A. E. W. et al.',
    year: '2023',
    title: 'MIMIC-IV, a freely accessible electronic health record dataset',
    journal: 'Scientific Data (Nature Portfolio), 10, 1',
    doi: '10.1038/s41597-022-01899-x',
  },
  {
    num: 8,
    authors: 'Takazawa, K. et al.',
    year: '1998',
    title: 'Assessment of vasoactive agents and vascular aging by the second derivative of photoplethysmogram waveform (SDPPG)',
    journal: 'Hypertension, 32(2), 365–370',
    doi: '10.1161/01.HYP.32.2.365',
  },
  {
    num: 9,
    authors: 'Hughes, D. J., Babbs, C. F., Geddes, L. A., & Bourland, J. D.',
    year: '1979',
    title: 'Measurements of Young’s modulus of elasticity of the canine aorta in vivo with ultrasound',
    journal: 'Ultrasonic Imaging, 1(4), 356–367',
    doi: '10.1177/016173467900100406',
  },
  {
    num: 10,
    authors: 'Mannino, R. G. et al.',
    year: '2018',
    title: 'Smartphone app for non-invasive detection of anemia using only patient-sourced photos',
    journal: 'Nature Communications, 9, 4924',
    doi: '10.1038/s41467-018-07262-2',
  },
  {
    num: 11,
    authors: 'Leung, T. S. et al.',
    year: '2015',
    title: 'Screening neonatal jaundice based on the sclera color of the eye using digital photography',
    journal: 'Biomedical Optics Express, 6(11), 4529–4538',
    doi: '10.1364/BOE.6.004529',
  },
  {
    num: 12,
    authors: 'GBD 2021 Anaemia Collaborators',
    year: '2023',
    title: 'Prevalence, years lived with disability, and trends in anaemia burden by severity and cause, 1990–2021',
    journal: 'The Lancet Haematology, 10(9), e713–e734',
    doi: '10.1016/S2352-3026(23)00160-6',
  },
];

export const CITATION_EXPORTS = {
  ieee: `A. Elshal, H. Abd El-Mardy, and O. Helmy, "When Should Smartphone Clinical AI Abstain? Uncertainty-Aware Offline Biophysical Diagnostics via Native C++17 Zero-Phase DSP, 20kHz Quadrature Ultrasonic Sonar, and Quantized Edge AI on Xiaomi 15T Pro," Higher Future Institute for Specialized Technological Studies (Future Academy — FA-HISTS), Cairo, Egypt, Interactive Research Monograph & Open-Source Clinical Engineering Companion, Nov. 2026.`,
  bibtex: `@techreport{elshal2026abstain,
  title       = {When Should Smartphone Clinical AI Abstain? Uncertainty-Aware Offline Biophysical Diagnostics via Native C++17 Zero-Phase DSP, 20kHz Quadrature Ultrasonic Sonar, and Quantized Edge AI on Xiaomi 15T Pro},
  author      = {Elshal, Ahmed and Abd El-Mardy, Hayam and Helmy, Osama},
  institution = {Higher Future Institute for Specialized Technological Studies (Future Academy - FA-HISTS)},
  address     = {El Obour City, Cairo, Egypt},
  year        = {2026},
  month       = nov,
  note        = {Ministry of Higher Education License No. 1471, Supreme Council of Universities Decree No. 359; Anthropic AI for Science Research Monograph},
  license     = {Apache-2.0}
}`,
};



