/**
 * KrishiSetu - Main Application Logic & User Flows
 * State management, scheme catalog rendering, search & filtering,
 * compare tool, multi-step eligibility wizard, dashboard kanban,
 * text-to-speech, printable document checklists, and bilingual engine.
 */

// Helper for safe localStorage JSON parsing
function safeStorageGetJson(key, defaultValue) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw || raw === 'undefined' || raw === 'null') return defaultValue;
    return JSON.parse(raw);
  } catch (e) {
    return defaultValue;
  }
}

// Global Application State
const AppState = {
  currentLang: localStorage.getItem('krishi_lang') || 'en',
  activeCategory: 'all',
  searchQuery: '',
  authorityFilter: 'all',
  sortBy: 'relevant',
  savedSchemeIds: safeStorageGetJson('krishi_saved_schemes', ["pm-kisan", "pmfby", "kcc"]),
  compareSchemeIds: [],
  userProfile: safeStorageGetJson('krishi_user', {
    name: "Ramesh Patel",
    nameHi: "रमेश पटेल",
    category: "Small Farmer (2.5 Acres)",
    categoryHi: "लघु किसान (2.5 एकड़)",
    state: "Madhya Pradesh",
    district: "Ujjain",
    isLoggedIn: true
  }),
  // Application Kanban tracker states: 'not_started', 'docs_pending', 'applied', 'approved'
  applicationTracker: safeStorageGetJson('krishi_tracker', {
    "pm-kisan": "approved",
    "pmfby": "applied",
    "kcc": "docs_pending",
    "pmksy": "not_started"
  })
};

// UI Translations Dictionary for English <-> Hindi
const TRANSLATIONS = {
  en: {
    appTitle: "KrishiSetu",
    topBarTitle: "National Agricultural Welfare Information & Application Guidance Platform",
    topBarVerified: "🛡️ Verified Data · Updated September 2026",
    sideNavHeader: "Navigation",
    navHome: "Home",
    navCatalog: "Explore Schemes",
    navEligibility: "Eligibility Checker",
    navDashboard: "My Dashboard",
    navCompare: "Compare Schemes",
    navLocator: "KVK / CSC Locator",
    navSaved: "❤️ Saved",
    navCheckEligibility: "Check Eligibility",
    navLogin: "👤 Login",
    navLogout: "🚪 Logout",
    navMyDashboard: "📊 My Dashboard",
    
    // AI Assistant
    aiAssistantTitle: "Krishi Mitra AI",
    aiAssistantSubtitle: "24/7 Scheme Assistant",
    aiGroundedBadge: "● 100% Grounded in Scheme DB",
    aiPlaceholder: "Ask about any scheme, documents, steps...",
    aiChipPmkisan: "PM-KISAN Documents?",
    aiChipKcc: "KCC 4% Interest?",
    aiChipSolar: "Solar Pump Subsidy?",
    aiChipSaved: "My Saved Schemes",

    // Hero Section
    heroBadge: "Single-Window Farmer Welfare Access",
    heroTitle: "Find & Apply For Every Agricultural Scheme In One Place.",
    heroSubtitle: "Stop searching across dozens of broken portals. Discover verified central, state, and NGO welfare subsidies with step-by-step application guidance.",
    searchPlaceholder: "Search by scheme name, crop, subsidy, or keyword (e.g. PM-KISAN, drip, KCC, drone)...",
    heroExploreBtn: "Explore 36+ Schemes",
    statSchemes: "Verified Schemes",
    statSubsidies: "Subsidy Support",
    statStates: "States Covered",
    quickCheckTitle: "Instant Scheme Matcher",
    quickCheckBadge: "2-Minute Check",
    labelState: "Your State / राज्य",
    labelLand: "Cultivable Land Holding / भूमि आकार",
    labelFocus: "Primary Focus / मुख्य फसल या उद्देश्य",
    optMarginal: "Marginal Farmer (< 2.5 Acres / < 1 Ha)",
    optSmall: "Small Farmer (2.5 to 5 Acres / 1-2 Ha)",
    optMedium: "Medium Farmer (5 to 25 Acres / 2-10 Ha)",
    optLarge: "Large Farmer (> 25 Acres / > 10 Ha)",
    optIncome: "Direct Income Support & Pension",
    optInsurance: "Crop Insurance & Weather Protection",
    optIrrigation: "Drip / Sprinkler & Solar Pump",
    optMechanization: "Tractor & Farm Machinery Subsidy",
    optCredit: "Low-Interest Credit / KCC Loan",
    findEligibleBtn: "Find My Eligible Schemes →",
    trustStrip: "🏛️ Direct hand-off to official government portals · No middlemen fees",

    // How It Works
    howItWorksEyebrow: "A Guided Experience",
    howItWorksTitle: "How KrishiSetu Solves the Welfare Gap",
    howItWorksDesc: "Government portals provide raw notifications; we provide complete, step-by-step application guidance from document readiness to sanction.",
    step1Title: "Centralized Discovery",
    step1Desc: "Browse 36+ verified central, state, and NGO welfare programs categorized by benefit type, subsidy %, and deadline.",
    step2Title: "Instant Eligibility",
    step2Desc: "Answer a short 4-step wizard to see which schemes you legally qualify for with transparent match criteria.",
    step3Title: "Step-by-Step Guidance",
    step3Desc: "Get printable document checklists, detailed procedure timelines, and local office contact points before applying.",
    step4Title: "Official Hand-Off & Track",
    step4Desc: "Apply directly on the authentic government portal and monitor your self-reported milestone progress on your Dashboard.",

    // Featured Schemes
    featuredEyebrow: "Welfare Scheme Catalog",
    featuredTitle: "Featured Agricultural Schemes",
    featuredDesc: "Explore verified Central, State, and CSR welfare initiatives for small and marginal farmers.",
    exploreAllBtn: "Explore All 36+ Schemes →",
    viewAllCategoriesBtn: "View All Categories & Filter Options →",

    // Capabilities
    capabilitiesEyebrow: "Platform Capabilities",
    capabilitiesTitle: "Everything a Farmer Needs to Secure Benefits",
    capabilitiesDesc: "From checking your legal qualification to side-by-side comparison, tracking milestone status, and finding district help centers.",
    cap1Title: "Eligibility Checker",
    cap1Desc: "Answer 4 quick questions regarding your state, land holding, crops, and social category to find your 100% matching schemes.",
    cap1Btn: "Launch Assessment →",
    cap2Title: "Scheme Comparison",
    cap2Desc: "Compare up to 3 schemes side-by-side across subsidies, land limits, paperwork requirements, and timelines.",
    cap2Btn: "Open Comparison Matrix →",
    cap3Title: "Application Pipeline",
    cap3Desc: "Track your bookmarked schemes across 4 Kanban milestones: Not Started, Docs Pending, Applied, and Sanctioned.",
    cap3Btn: "View My Dashboard →",
    cap4Title: "KVK & CSC Directory",
    cap4Desc: "Find verified district Krishi Vigyan Kendras and Digital Seva CSC centers with instant Google Search and Maps directions.",
    cap4Btn: "Find Nearest Center →",

    // Catalog Page
    breadcrumbHome: "Home",
    breadcrumbCatalog: "Explore Schemes",
    catalogPageTitle: "Verified Agricultural Schemes Catalog",
    catalogPageDesc: "Filter across 15+ agricultural domains or search by specific equipment, subsidy, or crop. Every scheme includes step-by-step guidance, required documents checklist, and official portal links.",
    catalogSearchPlaceholder: "Filter by scheme name, keyword, or crop...",
    filterAllAuth: "All Authorities",
    filterCentral: "Central Govt",
    filterNgo: "NGO & CSR Programs",
    sortRelevant: "Most Relevant",
    sortSubsidy: "Highest Subsidy",
    sortClosing: "Closing Soon",

    // Scheme Card & Modal
    cardSubsidyLabel: "Key Subsidy Benefit",
    cardViewBtn: "View Steps & Guide",
    cardApplyBtn: "Apply Now ↗",
    cardCompare: "Compare",
    cardOffline: "Offline (CSC)",
    modalSubsidyLabel: "Key Subsidy / Financial Benefit",
    modalBenefitsTitle: "✨ Key Benefits",
    modalEligTitle: "🎯 Who is Eligible?",
    modalTargetGroup: "Target Group:",
    modalDocsTitle: "📋 Required Documents Checklist",
    modalPrintBtn: "🖨️ Print / Download Checklist",
    modalProcedureTitle: "🚀 Step-by-Step Application Procedure (How to Apply)",
    modalOfficialDocsTitle: "📄 Official Documents & Proof Guidelines",
    modalProofDocBtn: "Proof Guidelines ↗",
    cardProofBtn: "Guidelines ↗",
    readAloud: "Read Scheme Aloud",
    stopReading: "Stop Audio",
    modalSaveBtn: "🤍 Save Scheme",
    modalAskAiBtn: "🤖 Ask AI Assistant",
    applyOfficial: "Apply on Official Portal ↗",

    // Eligibility Page
    breadcrumbEligibility: "Eligibility Checker",
    eligibilityPageTitle: "Multi-Factor Agricultural Eligibility Checker",
    eligibilityPageDesc: "Complete this simple 4-step assessment to receive ranked scheme recommendations with transparent \"Why you match\" explanations based on your state, land holding, crops, and social category.",
    stepNode1: "Location & Land",
    stepNode2: "Crops & Farming",
    stepNode3: "Farmer Category",
    stepNode4: "Results",
    wizStep1Heading: "Step 1: Location & Landholding Size",
    wizStateLabel: "State / Union Territory",
    wizLandLabel: "Total Cultivable Land (in Hectares)",
    wizLandNote: "Note: 1 Hectare ≈ 2.47 Acres",
    wizStep1Next: "Next: Farming Type →",
    wizStep2Heading: "Step 2: Crops & Agriculture Practice",
    wizCropLabel: "Primary Crop Category",
    wizIrrigationLabel: "Existing Water / Irrigation Source",
    wizPrevBtn: "← Previous",
    wizStep2Next: "Next: Category & Income →",
    wizStep3Heading: "Step 3: Social Category & Income Band",
    wizScaleLabel: "Farmer Scale / Land Classification",
    wizIncomeLabel: "Annual Household Income",
    wizSpecialLabel: "Special Eligibility Group",
    wizEnrollmentLabel: "Existing Central Enrollments",
    wizCalcBtn: "Calculate Matches Now →",
    wizRerunBtn: "↻ Re-run Eligibility Check",
    wizViewDashboardBtn: "View in My Dashboard →",

    // Compare Page
    breadcrumbCompare: "Compare Schemes",
    comparePageTitle: "Side-by-Side Scheme Comparison Matrix",
    comparePageDesc: "Compare up to 3 welfare schemes side-by-side. Select any scheme from the dropdown slots below to evaluate subsidies, eligible land limits, required documentation, and direct application links.",
    compareSelectTitle: "Select Schemes to Compare (Max 3)",
    compareSelectDesc: "Select any scheme to inspect subsidies, land limits, and procedures side-by-side.",
    paramHeader: "Parameter",
    paramAuthority: "Issuing Authority",
    paramSubsidy: "Subsidy / Benefit",
    paramLand: "Eligible Landholding",
    paramTarget: "Target Beneficiaries",
    paramDocs: "Required Documents",
    paramSteps: "Procedure Steps",
    paramActions: "Actions",
    compareBarLabel: "Compare Schemes",
    compareBarBtn: "Compare Side-by-Side →",
    compareMaxAlert: "You can compare up to 3 schemes at a time.",
    compareMinAlert: "Please select at least 2 schemes to compare.",

    // Dashboard Page
    breadcrumbDashboard: "My Dashboard",
    dashboardPageTitle: "Farmer Dashboard & Application Pipeline",
    dashboardPageDesc: "Monitor your self-reported milestone progress on your saved schemes. Move cards across milestones as you gather paperwork, submit online, and receive subsidies.",
    pipelineEyebrow: "Interactive Workflow Tracker",
    pipelineTitle: "Application Milestone Pipeline",
    pipelineDesc: "Keep full control of your benefits. You can adjust each scheme's status directly from the dropdown inside each card.",
    colNotStarted: "Not Started",
    colDocsPending: "Documents Pending",
    colApplied: "Applied on Portal",
    colApproved: "Approved / Active",

    // Locator Page
    breadcrumbLocator: "KVK / CSC Locator",
    locatorPageTitle: "Nearest KVK & Digital Seva Centres Locator",
    locatorPageDesc: "Find your nearest certified Krishi Vigyan Kendra (ICAR) or Common Service Centre (CSC) for hands-on Aadhaar e-KYC, soil testing, and biometric authentication. Click any card to search for reviews and business hours on Google, or click the address pin to navigate via Google Maps.",
    locatorSearchPlaceholder: "Search by district, center name, city, state, or service...",
    filterAllCenters: "All Centers",
    filterKvk: "🌱 Krishi Vigyan Kendras (KVK)",
    filterCsc: "💻 Digital Seva CSCs",

    // Footer
    footerBrandDesc: "A centralized digital bridge helping Indian farmers navigate agricultural welfare schemes with clarity, step-by-step guidance, and grounded AI assistance.",
    footerProject: "Academic PBL Engineering Project · Designed & Developed for Indian Farmers.",
    footerPortals: "Key Portals",
    footerPages: "Platform Pages",
    footerSources: "Official Sources",
    footerCopyright: "© 2026 KrishiSetu Platform. All scheme data verified against official PIB and Ministry of Agriculture releases.",
    footerTagline: "Direct Hand-Off to Official Portals · Zero Middlemen · Accessible in English & हिन्दी"
  },
  hi: {
    appTitle: "कृषि सेतु",
    topBarTitle: "राष्ट्रीय कृषि कल्याण सूचना एवं आवेदन मार्गदर्शन मंच",
    topBarVerified: "🛡️ सत्यापित डेटा · अपडेटेड सितंबर 2026",
    sideNavHeader: "मंच नेविगेशन",
    navHome: "होम",
    navCatalog: "योजनाएं खोजें",
    navEligibility: "पात्रता जांचें",
    navDashboard: "मेरा डैशबोर्ड",
    navCompare: "योजना तुलना",
    navLocator: "केवीके / सीएससी केंद्र",
    navSaved: "❤️ सहेजे गए",
    navCheckEligibility: "पात्रता जांचें",
    navLogin: "👤 लॉगिन",
    navLogout: "🚪 लॉगआउट",
    navMyDashboard: "📊 मेरा डैशबोर्ड",

    // AI Assistant
    aiAssistantTitle: "कृषि मित्र AI",
    aiAssistantSubtitle: "24/7 कृषि योजना सहायक",
    aiGroundedBadge: "● 100% सत्यापित योजना डेटा",
    aiPlaceholder: "किसी भी योजना, दस्तावेज़, आवेदन प्रक्रिया के बारे में पूछें...",
    aiChipPmkisan: "पीएम-किसान दस्तावेज़?",
    aiChipKcc: "केसीसी 4% ब्याज ऋण?",
    aiChipSolar: "सोलर पंप सब्सिडी?",
    aiChipSaved: "मेरी सहेजी गई योजनाएं",

    // Hero Section
    heroBadge: "एकल खिड़की किसान कल्याण पहुंच",
    heroTitle: "सभी सरकारी व एनजीओ कृषि योजनाएं <span class=\"accent\">अब एक ही स्थान पर।</span>",
    heroSubtitle: "दर्जनों अलग-अलग पोर्टलों पर भटकना बंद करें। चरण-दर-चरण आवेदन मार्गदर्शन के साथ सत्यापित केंद्रीय, राज्य और एनजीओ अनुदान खोजें।",
    searchPlaceholder: "योजना का नाम, फसल, सब्सिडी या कीवर्ड से खोजें (जैसे पीएम-किसान, ड्रिप, केसीसी, ड्रोन)...",
    heroExploreBtn: "36+ योजनाएं देखें",
    statSchemes: "सत्यापित योजनाएं",
    statSubsidies: "सब्सिडी सहायता",
    statStates: "सभी राज्य शामिल",
    quickCheckTitle: "त्वरित योजना मिलान",
    quickCheckBadge: "2-मिनट में जांचें",
    labelState: "आपका राज्य",
    labelLand: "कृषि योग्य भूमि का आकार",
    labelFocus: "मुख्य उद्देश्य / प्राथमिकता",
    optMarginal: "सीमांत किसान (< 2.5 एकड़ / < 1 हे.)",
    optSmall: "लघु किसान (2.5 से 5 एकड़ / 1-2 हे.)",
    optMedium: "मध्यम किसान (5 से 25 एकड़ / 2-10 हे.)",
    optLarge: "बड़े किसान (> 25 एकड़ / > 10 हे.)",
    optIncome: "प्रत्यक्ष आय सहायता एवं पेंशन",
    optInsurance: "फसल बीमा एवं मौसम सुरक्षा",
    optIrrigation: "ड्रिप / स्प्रिंकलर एवं सोलर पंप",
    optMechanization: "ट्रैक्टर एवं कृषि यंत्र सब्सिडी",
    optCredit: "कम ब्याज ऋण / केसीसी लोन",
    findEligibleBtn: "मेरी पात्र योजनाएं खोजें →",
    trustStrip: "🏛️ आधिकारिक सरकारी पोर्टलों पर सीधा मार्गदर्शन · शून्य बिचौलिया शुल्क",

    // How It Works
    howItWorksEyebrow: "एक मार्गदर्शित अनुभव",
    howItWorksTitle: "कृषि सेतु किसान कल्याण की दूरी कैसे मिटाता है",
    howItWorksDesc: "सरकारी पोर्टल केवल जटिल सूचनाएं देते हैं; हम दस्तावेज़ तैयारी से लेकर स्वीकृति तक संपूर्ण, चरण-दर-चरण आवेदन मार्गदर्शन प्रदान करते हैं।",
    step1Title: "केंद्रीकृत खोज",
    step1Desc: "लाभ प्रकार, सब्सिडी प्रतिशत और समय-सीमा के अनुसार वर्गीकृत 36+ सत्यापित योजनाओं को आसानी से देखें।",
    step2Title: "त्वरित पात्रता जांच",
    step2Desc: "पारदर्शी मिलान मानदंडों के साथ देखें कि आप किन योजनाओं के लिए पात्र हैं, केवल 4 आसान सवालों में।",
    step3Title: "चरण-दर-चरण मार्गदर्शन",
    step3Desc: "आवेदन करने से पहले प्रिंट करने योग्य दस्तावेज़ चेकलिस्ट, विस्तृत प्रक्रिया समयरेखा और स्थानीय कार्यालय संपर्क प्राप्त करें।",
    step4Title: "आधिकारिक पोर्टल व ट्रैकिंग",
    step4Desc: "सत्यापित सरकारी पोर्टल पर सीधे आवेदन करें और अपने डैशबोर्ड पर अपनी आवेदन प्रगति को ट्रैक करें।",

    // Featured Schemes
    featuredEyebrow: "कल्याणकारी योजना सूची",
    featuredTitle: "प्रमुख कृषि योजनाएं",
    featuredDesc: "लघु एवं सीमांत किसानों के लिए सत्यापित केंद्रीय, राज्य और सीएसआर कल्याणकारी पहलों का अन्वेषण करें।",
    exploreAllBtn: "सभी 36+ योजनाएं देखें →",
    viewAllCategoriesBtn: "सभी श्रेणियां एवं फ़िल्टर विकल्प देखें →",

    // Capabilities
    capabilitiesEyebrow: "मंच की क्षमताएं",
    capabilitiesTitle: "किसानों को लाभ प्राप्त करने के लिए सब कुछ एक जगह",
    capabilitiesDesc: "अपनी पात्रता जांचने से लेकर तुलना करने, आवेदन स्थिति ट्रैक करने और जिला सहायता केंद्र खोजने तक।",
    cap1Title: "पात्रता जांचकर्ता",
    cap1Desc: "अपने राज्य, भूमि, फसल और श्रेणी के 4 त्वरित प्रश्नों के उत्तर दें और 100% उपयुक्त योजनाएं पाएं।",
    cap1Btn: "पात्रता जांच शुरू करें →",
    cap2Title: "योजना तुलना",
    cap2Desc: "सब्सिडी, भूमि सीमा, आवश्यक कागजात और समय-सीमा के आधार पर एक साथ 3 योजनाओं की तुलना करें।",
    cap2Btn: "तुलना मैट्रिक्स खोलें →",
    cap3Title: "आवेदन प्रगति पाइपलाइन",
    cap3Desc: "अपनी सहेजी गई योजनाओं को 4 चरणों में ट्रैक करें: शुरू नहीं हुआ, दस्तावेज़ लंबित, आवेदन किया, और स्वीकृत।",
    cap3Btn: "मेरा डैशबोर्ड देखें →",
    cap4Title: "केवीके एवं सीएससी निर्देशिका",
    cap4Desc: "गूगल मैप्स और त्वरित खोज के साथ अपने जिले के कृषि विज्ञान केंद्र और डिजिटल सेवा सीएससी केंद्र खोजें।",
    cap4Btn: "निकटतम केंद्र खोजें →",

    // Catalog Page
    breadcrumbHome: "होम",
    breadcrumbCatalog: "योजनाएं खोजें",
    catalogPageTitle: "सत्यापित कृषि योजना सूची",
    catalogPageDesc: "15+ कृषि श्रेणियों में फ़िल्टर करें या विशिष्ट उपकरण, सब्सिडी या फसल के आधार पर खोजें। प्रत्येक योजना में चरण-दर-चरण मार्गदर्शन, आवश्यक दस्तावेज़ चेकलिस्ट और आधिकारिक पोर्टल लिंक शामिल हैं।",
    catalogSearchPlaceholder: "योजना का नाम, कीवर्ड या फसल लिखकर खोजें...",
    filterAllAuth: "सभी संस्थाएं",
    filterCentral: "केंद्र सरकार",
    filterNgo: "एनजीओ एवं सीएसआर कार्यक्रम",
    sortRelevant: "सबसे प्रासंगिक",
    sortSubsidy: "अधिकतम सब्सिडी",
    sortClosing: "समाप्ति शीघ्र",

    // Scheme Card & Modal
    cardSubsidyLabel: "मुख्य लाभ / अनुदान",
    cardViewBtn: "विवरण व प्रक्रिया",
    cardApplyBtn: "आवेदन करें ↗",
    cardCompare: "तुलना",
    cardOffline: "ऑफलाइन (CSC)",
    modalSubsidyLabel: "मुख्य सब्सिडी / वित्तीय लाभ",
    modalBenefitsTitle: "✨ मुख्य लाभ",
    modalEligTitle: "🎯 कौन पात्र है?",
    modalTargetGroup: "लक्षित समूह:",
    modalDocsTitle: "📋 आवश्यक दस्तावेज़ चेकलिस्ट",
    modalPrintBtn: "🖨️ चेकलिस्ट प्रिंट / डाउनलोड करें",
    modalProcedureTitle: "🚀 चरण-दर-चरण आवेदन प्रक्रिया (आवेदन कैसे करें)",
    modalOfficialDocsTitle: "📄 आधिकारिक दस्तावेज़ एवं दिशानिर्देश",
    modalProofDocBtn: "प्रमाण दिशानिर्देश ↗",
    cardProofBtn: "दिशानिर्देश ↗",
    readAloud: "योजना विवरण सुनें",
    stopReading: "ऑडियो रोकें",
    modalSaveBtn: "🤍 योजना सहेजें",
    modalAskAiBtn: "🤖 AI सहायक से पूछें",
    applyOfficial: "आधिकारिक पोर्टल पर आवेदन करें ↗",

    // Eligibility Page
    breadcrumbEligibility: "पात्रता जांचकर्ता",
    eligibilityPageTitle: "बहु-कारक कृषि पात्रता जांचकर्ता",
    eligibilityPageDesc: "अपने राज्य, भूमि, फसल और सामाजिक श्रेणी के आधार पर पारदर्शी \"आप क्यों पात्र हैं\" विवरण के साथ सर्वोत्तम योजनाएं प्राप्त करने के लिए यह आसान 4-चरणीय मूल्यांकन पूरा करें।",
    stepNode1: "स्थान एवं भूमि",
    stepNode2: "फसल एवं खेती",
    stepNode3: "किसान श्रेणी",
    stepNode4: "परिणाम",
    wizStep1Heading: "चरण 1: स्थान एवं भूमि का आकार",
    wizStateLabel: "राज्य / केंद्र शासित प्रदेश",
    wizLandLabel: "कुल कृषि योग्य भूमि (हेक्टेयर में)",
    wizLandNote: "नोट: 1 हेक्टेयर ≈ 2.47 एकड़",
    wizStep1Next: "अगला: खेती का प्रकार →",
    wizStep2Heading: "चरण 2: फसलें एवं कृषि पद्धति",
    wizCropLabel: "प्राथमिक फसल श्रेणी",
    wizIrrigationLabel: "मौजूदा जल / सिंचाई स्रोत",
    wizPrevBtn: "← पिछला",
    wizStep2Next: "अगला: श्रेणी एवं आय →",
    wizStep3Heading: "चरण 3: सामाजिक श्रेणी एवं आय वर्ग",
    wizScaleLabel: "किसान वर्ग / भूमि वर्गीकरण",
    wizIncomeLabel: "वार्षिक पारिवारिक आय",
    wizSpecialLabel: "विशेष पात्रता समूह",
    wizEnrollmentLabel: "मौजूदा केंद्रीय योजना नामांकन",
    wizCalcBtn: "पात्र योजनाएं खोजें →",
    wizRerunBtn: "↻ पुनः पात्रता जांचें",
    wizViewDashboardBtn: "मेरे डैशबोर्ड में देखें →",

    // Compare Page
    breadcrumbCompare: "योजना तुलना",
    comparePageTitle: "योजना तुलना मैट्रिक्स",
    comparePageDesc: "एक साथ 3 कल्याणकारी योजनाओं की तुलना करें। सब्सिडी, पात्र भूमि सीमा, आवश्यक कागजात और प्रत्यक्ष आवेदन लिंक का मूल्यांकन करने के लिए नीचे दिए गए स्लॉट से किसी भी योजना का चयन करें।",
    compareSelectTitle: "तुलना के लिए योजनाएं चुनें (अधिकतम 3)",
    compareSelectDesc: "विभिन्न मापदंडों पर सीधे तुलना करने के लिए ड्रॉपडाउन से योजना चुनें।",
    paramHeader: "मापदंड",
    paramAuthority: "जारीकर्ता संस्था",
    paramSubsidy: "सब्सिडी / मुख्य लाभ",
    paramLand: "पात्र भूमि आकार",
    paramTarget: "लक्षित लाभार्थी",
    paramDocs: "आवश्यक दस्तावेज़",
    paramSteps: "आवेदन प्रक्रिया के चरण",
    paramActions: "कार्रवाई",
    compareBarLabel: "योजनाओं की तुलना करें",
    compareBarBtn: "आमने-सामने तुलना करें →",
    compareMaxAlert: "आप एक समय में अधिकतम 3 योजनाओं की तुलना कर सकते हैं।",
    compareMinAlert: "कृपया तुलना के लिए कम से कम 2 योजनाएं चुनें।",

    // Dashboard Page
    breadcrumbDashboard: "मेरा डैशबोर्ड",
    dashboardPageTitle: "किसान डैशबोर्ड एवं आवेदन पाइपलाइन",
    dashboardPageDesc: "अपनी सहेजी गई योजनाओं पर अपनी प्रगति की निगरानी करें। कागजात एकत्र करने, ऑनलाइन जमा करने और सब्सिडी प्राप्त करने के साथ कार्ड को चरणों में आगे बढ़ाएं।",
    pipelineEyebrow: "कार्यप्रवाह ट्रैकर",
    pipelineTitle: "आवेदन चरण पाइपलाइन",
    pipelineDesc: "अपने लाभों पर पूर्ण नियंत्रण रखें। आप प्रत्येक कार्ड के अंदर ड्रॉपडाउन से सीधे योजना की स्थिति बदल सकते हैं।",
    colNotStarted: "शुरू नहीं हुआ",
    colDocsPending: "दस्तावेज़ लंबित",
    colApplied: "पोर्टल पर आवेदन किया",
    colApproved: "स्वीकृत / सक्रिय",

    // Locator Page
    breadcrumbLocator: "केवीके / सीएससी केंद्र",
    locatorPageTitle: "निकटतम केवीके एवं डिजिटल सेवा सीएससी केंद्र खोजें",
    locatorPageDesc: "आधार ई-केवाईसी, मृदा परीक्षण और बायोमेट्रिक सत्यापन के लिए अपने निकटतम प्रमाणित कृषि विज्ञान केंद्र (आईसीएआर) या सामान्य सेवा केंद्र (सीएससी) खोजें। गूगल मैप्स और त्वरित खोज के साथ विवरण देखें।",
    locatorSearchPlaceholder: "जिला, केंद्र का नाम, शहर, राज्य या सेवा द्वारा खोजें...",
    filterAllCenters: "सभी केंद्र",
    filterKvk: "🌱 कृषि विज्ञान केंद्र (KVK)",
    filterCsc: "💻 डिजिटल सेवा केंद्र (CSC)",

    // Footer
    footerBrandDesc: "भारतीय किसानों को स्पष्टता, चरण-दर-चरण मार्गदर्शन और प्रामाणिक AI सहायता के साथ कृषि कल्याण योजनाओं का लाभ उठाने में मदद करने वाला डिजिटल सेतु।",
    footerProject: "शैक्षणिक पीबीएल इंजीनियरिंग प्रोजेक्ट · भारतीय किसानों के लिए समर्पित।",
    footerPortals: "प्रमुख सरकारी पोर्टल",
    footerPages: "मंच के पृष्ठ",
    footerSources: "आधिकारिक स्रोत",
    footerCopyright: "© 2026 कृषि सेतु मंच। समस्त योजना डेटा आधिकारिक पीआईबी एवं कृषि मंत्रालय द्वारा सत्यापित।",
    footerTagline: "आधिकारिक पोर्टलों पर सीधा मार्गदर्शन · शून्य बिचौलिया · अंग्रेजी एवं हिन्दी में उपलब्ध"
  }
};

// Hindi Mappings for Documents & Services
const DOCS_HI_MAP = {
  "Aadhaar": "आधार कार्ड",
  "Bank account details": "बैंक खाता विवरण",
  "Bank Account": "बैंक खाता विवरण",
  "Bank Passbook": "बैंक पासबुक",
  "Land Record": "भूमि अभिलेख (खसरा/खतौनी)",
  "Detailed Project Report (DPR)": "विस्तृत परियोजना रिपोर्ट (DPR)",
  "Project Report (DPR)": "परियोजना रिपोर्ट (DPR)",
  "Job Card": "मनरेगा जॉब कार्ड",
  "Aadhaar Card": "आधार कार्ड",
  "Aadhaar Card (linked to active mobile)": "आधार कार्ड (सक्रिय मोबाइल नंबर से लिंक)",
  "Aadhaar Card and PAN Card / Voter ID": "आधार कार्ड और पैन कार्ड / मतदाता पहचान पत्र",
  "Aadhaar Card and Land Record (7/12, Khatauni)": "आधार कार्ड और भूमि अभिलेख (7/12, खतौनी)",
  "Aadhaar & PAN Card": "आधार कार्ड एवं पैन कार्ड",
  "Land Record Documents (Khasra/Khatauni / Ror / 7/12 extract)": "भूमि रिकॉर्ड दस्तावेज़ (खसरा/खतौनी / 7/12 नकल)",
  "Aadhaar-seeded Bank Passbook / Account statement with IFSC": "आधार-लिंक बैंक पासबुक / खाता विवरण IFSC सहित",
  "Active Mobile number linked to Aadhaar (for e-KYC OTP)": "आधार से लिंक सक्रिय मोबाइल नंबर (ई-केवाईसी ओटीपी हेतु)",
  "Passport size photograph": "पासपोर्ट साइज फोटो",
  "Passport size photographs & Mobile number": "पासपोर्ट साइज फोटो एवं मोबाइल नंबर",
  "Savings Bank Account Passbook with IFSC": "आईएफएससी सहित बचत बैंक पासबुक",
  "Bank Savings Account Passbook with IFSC": "आईएफएससी सहित बचत बैंक खाता पासबुक",
  "Cancelled Cheque / Bank Passbook": "रद्द चेक / बैंक पासबुक",
  "Bank Account Details": "बैंक खाता विवरण",
  "Bank Account details": "बैंक खाता विवरण",
  "Bank details": "बैंक विवरण",
  "Bank Details": "बैंक विवरण",
  "Active Bank Account Passbook": "सक्रिय बैंक खाता पासबुक",
  "Bank Account details with IFSC": "आईएफएससी सहित बैंक खाता विवरण",
  "Bank Account details with cancelled cheque": "रद्द चेक सहित बैंक खाता विवरण",
  "Bank Account details & 6 months statement": "बैंक खाता विवरण व 6 महीने का स्टेटमेंट",
  "Copy of Land Record (Khasra/Khatauni)": "भूमि अभिलेख की प्रति (खसरा/खतौनी)",
  "Land Records (7/12 / Patta)": "भूमि अभिलेख (7/12 / पट्टा)",
  "Land Records": "भूमि अभिलेख",
  "Land papers": "भूमि के कागजात",
  "Land Record (Jamabandi / 7/12)": "भूमि अभिलेख (जमाबंदी / 7/12)",
  "Land Ownership Documents (Jamabandi / ROR)": "भूमि स्वामित्व दस्तावेज (जमाबंदी / आरओआर)",
  "Land Ownership Record (Khatauni / Patta)": "भूमि स्वामित्व अभिलेख (खतौनी / पट्टा)",
  "Land Ownership Documents (Khatauni / 7/12)": "भूमि स्वामित्व दस्तावेज (खतौनी / 7/12)",
  "Land Ownership Document (RoR / 7/12) or Tenant/Sharecropper Agreement Declaration": "भूमि स्वामित्व दस्तावेज (खतौनी / 7/12) या काश्तकार/बटाईदार अनुबंध",
  "Land Ownership Record / Certified Copy of Patta / Tenancy deed": "भूमि स्वामित्व अभिलेख / पट्टे की प्रमाणित प्रति / बटाईदार अनुबंध",
  "Land Document / Long term lease deed (minimum 10 years)": "भूमि दस्तावेज / दीर्घकालिक पट्टा विलेख (न्यूनतम 10 वर्ष)",
  "Land title deed": "भूमि स्वामित्व विलेख",
  "Land title / House site document": "भूमि पट्टा / घर का भूखंड दस्तावेज",
  "Land Title Deed / Forest Rights Title": "भूमि स्वामित्व विलेख / वन अधिकार पट्टा",
  "Land/Shed ownership or lease": "भूमि या शेड का स्वामित्व/पट्टा",
  "Land or Shed verification": "भूमि या शेड का सत्यापन प्रमाण",
  "Survey / Khasra number of land parcel": "भूमि का खसरा / खाता संख्या",
  "Sowing Certificate / Crop declaration issued by Patwari / Village Revenue Officer": "पटवारी / ग्राम राजस्व अधिकारी द्वारा जारी बुवाई प्रमाण पत्र / फसल घोषणा",
  "Sowing Certificate / Land possession certificate from Patwari": "पटवारी द्वारा जारी बुवाई प्रमाण पत्र / भूमि स्वामित्व प्रमाण पत्र",
  "Crop Sowing Declaration / Girdawari": "फसल बुवाई घोषणा / गिरदावरी",
  "Land Records (Girdawari / Sowing verification)": "भूमि अभिलेख (गिरदावरी / बुवाई सत्यापन)",
  "Nominee details and relationship proof": "नामांकित व्यक्ति (नॉमिनी) का विवरण एवं संबंध प्रमाण",
  "Completed 1-page KCC application form": "पूर्ण भरा हुआ 1-पेज केसीसी आवेदन फॉर्म",
  "Declaration of existing crop loans and village revenue officer verification": "मौजूदा फसल ऋणों की घोषणा एवं ग्राम राजस्व अधिकारी सत्यापन",
  "KCC Account details": "केसीसी खाता विवरण",
  "Repayment receipt": "ऋण पुनर्भुगतान रसीद",
  "Water source proof & electricity connection bill/solar pump certificate": "जल स्रोत प्रमाण एवं बिजली बिल / सोलर पंप प्रमाण पत्र",
  "Quotation / Design layout from registered micro-irrigation supplier": "पंजीकृत सूक्ष्म सिंचाई आपूर्तिकर्ता से कोटेशन / डिजाइन लेआउट",
  "Soil & water test report (optional/desirable)": "मृदा एवं जल परीक्षण रिपोर्ट (वैकल्पिक)",
  "Soil Health Card or Land Record Extract": "मृदा स्वास्थ्य कार्ड या भूमि अभिलेख उद्धरण",
  "Water quality test report": "जल गुणवत्ता परीक्षण रिपोर्ट",
  "Cluster formation agreement": "क्लस्टर गठन अनुबंध",
  "Fruit Orchard / Crop Plantation proof": "फलोद्यान / फसल वृक्षारोपण प्रमाण",
  "Mobile number for SMS auction notifications": "एसएमएस नीलामी सूचनाओं हेतु मोबाइल नंबर",
  "Mobile number": "मोबाइल नंबर",
  "Mobile Number": "मोबाइल नंबर",
  "Caste Certificate (for SC/ST benefit) and Quotation from authorized machinery dealer": "जाति प्रमाण पत्र (अजा/अजजा लाभ हेतु) एवं अधिकृत मशीनरी डीलर से कोटेशन",
  "SHG Registration Certificate": "एसएचजी पंजीकरण प्रमाण पत्र",
  "10th Marksheet of pilot": "नामित पायलट सदस्य की 10वीं की अंकतालिका",
  "Training Completion Certificate": "प्रशिक्षण पूर्णता प्रमाण पत्र",
  "Training Certificate in Dairy Management": "डेयरी प्रबंधन में प्रशिक्षण प्रमाण पत्र",
  "Bank in-principle loan sanction letter": "बैंक सैद्धांतिक ऋण स्वीकृति पत्र",
  "Veterinary fitness certificate of animals": "पशुओं का पशु चिकित्सा स्वास्थ्य प्रमाण पत्र",
  "Electricity bill of processing premises / Rent agreement": "खाद्य प्रसंस्करण परिसर का बिजली बिल / किराया अनुबंध",
  "Detailed Project Report (DPR) generated on portal": "पोर्टल द्वारा तैयार विस्तृत परियोजना रिपोर्ट (DPR)",
  "Pitch Deck / DPR": "पिच डेक / विस्तृत परियोजना रिपोर्ट (DPR)",
  "Educational qualification proof": "शैक्षणिक योग्यता प्रमाण",
  "Gram Panchayat recommendation resolution": "ग्राम पंचायत अनुशंसा प्रस्ताव",
  "Gram Panchayat / Gram Sabha recommendation resolution": "ग्राम पंचायत / ग्राम सभा का अनुशंसा प्रस्ताव",
  "Gram Panchayat / Block Agriculture Officer Endorsement": "ग्राम पंचायत / प्रखंड कृषि अधिकारी का अनुमोदन",
  "Panchayat resolution": "ग्राम पंचायत का प्रस्ताव",
  "Farmer Interest Group (FIG) membership (optional)": "किसान मित्र / आत्मा किसान समूह सदस्यता (वैकल्पिक)",
  "SHG Passbook": "एसएचजी बैंक पासबुक",
  "SHG Membership passbook with minimum 6 months regular savings": "न्यूनतम 6 महीने की नियमित बचत वाली एसएचजी पासबुक",
  "Ration Card": "राशन कार्ड",
  "MGNREGA Job Card": "मनरेगा जॉब कार्ड",
  "SECC-2011 Deprivation verification slip / PMAY ID": "एसईसीसी-2011 पात्रता पर्ची / पीएमएवाई आईडी",
  "FSSAI Food Business Registration / Application": "एफएसएसएआई खाद्य व्यवसाय पंजीकरण / आवेदन",
  "Udyam Aadhar Registration (MSME)": "उद्यम आधार पंजीकरण (एमएसएमई)",
  "Quotation of food processing machinery": "खाद्य प्रसंस्करण मशीनरी का कोटेशन",
  "Fisheries Department NOC / Feasibility Report": "मत्स्य विभाग से एनओसी / व्यवहार्यता रिपोर्ट"
};

const SERVICES_HI_MAP = {
  "Soil & Water Testing": "मृदा एवं जल परीक्षण",
  "Certified Seed Distribution": "प्रमाणित बीज वितरण",
  "Demonstration Farms": "प्रदर्शन प्रक्षेत्र",
  "Farmer Helpdesk": "किसान सहायता केंद्र",
  "Micro-irrigation Advisory": "सूक्ष्म सिंचाई सलाह",
  "Tissue Culture Plants": "टिशू कल्चर पौधे",
  "Bio-fertilizers": "जैव उर्वरक",
  "Agri-Drone Demos": "कृषि ड्रोन प्रदर्शन",
  "PM-KISAN e-KYC": "पीएम-किसान ई-केवाईसी",
  "Biometric Fingerprint Scan": "बायोमेट्रिक फिंगरप्रिंट स्कैन",
  "PMFBY Crop Insurance Filing": "पीएमएफबीवाई फसल बीमा",
  "Aadhaar-Bank Seeding Status": "आधार-बैंक सीडिंग स्थिति",
  "KCC Application Assistance": "केसीसी ऋण आवेदन सहायता",
  "Solar Pump Subsidies (KUSUM)": "सोलर पंप सब्सिडी (कुसुम)",
  "Agri Machinery Subsidy (SMAM)": "कृषि यंत्र सब्सिडी (एसएमएएम)",
  "e-NAM Trader & Farmer Reg": "ई-नाम किसान पंजीकरण",
  "Crop Loss Survey Assistance": "फसल क्षति सर्वेक्षण सहायता",
  "Panchayat Seva & Utility Bills": "पंचायत सेवाएं व बिल भुगतान",
  "Digital Land Records (Bhulekh)": "डिजिटल भूमि अभिलेख (भूलेख)",
  "Direct DBT Linking Verification": "प्रत्यक्ष डीबीटी लिंकिंग सत्यापन",
  "Aadhaar e-KYC": "आधार ई-केवाईसी",
  "Soil Health Testing": "मृदा स्वास्थ्य परीक्षण",
  "Seed Distribution": "बीज वितरण",
  "Scheme Enrollment": "योजना पंजीकरण",
  "KCC Support": "केसीसी ऋण सहायता",
  "Biometric Authentication": "बायोमेट्रिक प्रमाणीकरण",
  "Crop Insurance Claim": "फसल बीमा दावा",
  "Farmer Registration": "किसान पंजीकरण",
  "Direct Benefit Transfer (DBT)": "प्रत्यक्ष लाभ अंतरण (DBT)",
  "Agri Advisory": "कृषि सलाह",
  "PM-KISAN Registration": "पीएम-किसान पंजीकरण"
};

function translateSubsidy(text) {
  if (!text) return "";
  return text
    .replace(/\/ year/gi, " / वर्ष")
    .replace(/\/ hectare/gi, " / हेक्टेयर")
    .replace(/\(Direct DBT\)/gi, "(प्रत्यक्ष डीबीटी)")
    .replace(/Up to (\d+)% Subsidy/gi, "$1% तक सब्सिडी")
    .replace(/100% centrally funded/gi, "100% केंद्र पोषित")
    .replace(/4% Concessional Interest Rate/gi, "4% रियायती ब्याज दर")
    .replace(/3% Prompt Repayment Incentive/gi, "3% शीघ्र पुनर्भुगतान प्रोत्साहन")
    .replace(/60% Capital Subsidy/gi, "60% पूंजी अनुदान")
    .replace(/₹3,000 \/ month pension/gi, "₹3,000 / माह पेंशन")
    .replace(/₹1.5 Lakh to ₹50 Lakh/gi, "₹1.5 लाख से ₹50 लाख")
    .replace(/₹10,000 \/ acre/gi, "₹10,000 / एकड़")
    .replace(/₹1,20,000 Grant/gi, "₹1,20,000 अनुदान")
    .replace(/100 Days Guaranteed Wage Employment/gi, "100 दिन गारंटीकृत मजदूरी")
    .replace(/Free Soil Testing & Advisory/gi, "निःशुल्क मृदा परीक्षण एवं सलाह")
    .replace(/₹15,000 \/ year incentive/gi, "₹15,000 / वर्ष प्रोत्साहन")
    .replace(/0% Middleman Commission/gi, "0% बिचौलिया कमीशन")
    .replace(/Up to ₹10 Lakh Collateral-Free/gi, "₹10 लाख तक संपार्श्विक-मुक्त")
    .replace(/80% Drone Cost Subsidy/gi, "80% ड्रोन लागत सब्सिडी")
    .replace(/₹2 Lakh Death & Disability Cover/gi, "₹2 लाख मृत्यु एवं विकलांगता बीमा");
}

function translateTarget(text) {
  if (!text) return "";
  const map = {
    "All landholding farmer families": "सभी भूमिधारक किसान परिवार",
    "Small and marginal farmers (18-40 years)": "लघु एवं सीमांत किसान (18-40 वर्ष)",
    "Small and marginal farmers (18-40 years old)": "लघु एवं सीमांत किसान (18-40 वर्ष)",
    "All farmers growing notified crops in notified areas": "अधिसूचित क्षेत्रों में अधिसूचित फसल उगाने वाले सभी किसान",
    "All farmers, tenant farmers, sharecroppers, SHGs, JLGs": "सभी किसान, काश्तकार, बटाईदार, एसएचजी, जेएलजी",
    "All short-term crop loan borrowers under KCC": "केसीसी के तहत सभी अल्पावधि फसल ऋण धारक",
    "Farmers, Panchayats, Cooperatives, FPOs": "किसान, पंचायतें, सहकारी समितियां, एफपीओ",
    "All farmers across India": "अखिल भारतीय स्तर पर सभी किसान",
    "Individual farmers, SHGs, FPOs, Cooperatives": "व्यक्तिगत किसान, स्वयं सहायता समूह, एफपीओ, सहकारी समितियां",
    "All farmers practicing or transitioning to natural farming": "प्राकृतिक खेती अपनाने वाले या करने वाले सभी किसान",
    "All farmers with APMC tradeable produce": "मंडी व्यापार योग्य उपज वाले सभी किसान",
    "Farmers growing MSP-notified oilseeds, pulses, and copra": "एमएसपी अधिसूचित तिलहन, दलहन व खोपरा उत्पादक किसान",
    "Small & marginal farmers, SC/ST, women, FPOs, Custom Hiring Centers": "लघु व सीमांत किसान, अजा/अजजा, महिलाएं, एफपीओ, कस्टम हायरिंग सेंटर",
    "Women SHGs, Rural Women": "महिला स्वयं सहायता समूह, ग्रामीण महिलाएं",
    "All farmers registered on AgriStack": "एग्रीस्टैक पर पंजीकृत सभी किसान",
    "Horticulture farmers, FPOs, entrepreneurs": "बागवानी किसान, एफपीओ, कृषि उद्यमी",
    "Beekeepers, farmers, SHGs, FPOs": "मधुमक्खी पालक, किसान, एसएचजी, एफपीओ",
    "Dairy farmers, cattle rearers, breed organizations": "डेयरी किसान, पशुपालक, नस्ल संगठन",
    "Individual farmers, SHGs, FPOs, private entrepreneurs": "व्यक्तिगत किसान, एसएचजी, एफपीओ, निजी उद्यमी",
    "Fishers, Fish Farmers, Self Help Groups, Cooperatives": "मछुआरे, मत्स्य पालक, स्वयं सहायता समूह, सहकारी समितियां",
    "Small and marginal farmers, individual entrepreneurs, cooperatives": "लघु व सीमांत किसान, व्यक्तिगत उद्यमी, सहकारी समितियां",
    "Micro food processing enterprises, SHGs, FPOs, individual farmers": "सूक्ष्म खाद्य प्रसंस्करण उद्यम, एसएचजी, एफपीओ, व्यक्तिगत किसान",
    "Farmers, agripreneurs, startups": "किसान, कृषि उद्यमी, स्टार्टअप्स",
    "Farmers in identified clusters": "पहचाने गए क्लस्टर के किसान",
    "Rural job seekers with MGNREGA Job Card": "मनरेगा जॉब कार्ड धारक ग्रामीण नागरिक",
    "Homeless or kutcha house rural households": "बेघर या कच्चे घर वाले ग्रामीण परिवार",
    "Farmers, extension workers, farmer groups": "किसान, विस्तार कार्यकर्ता, किसान समूह",
    "All farmers in district": "जिले के समस्त किसान",
    "Rural women SHG members": "ग्रामीण महिला एसएचजी सदस्य"
  };
  return map[text] || text;
}


let currentSpeechUtterance = null;

// DOM Initialization

// Deeplink handler for ?scheme=id or ?id=scheme-id
function handleSchemeUrlParam() {
  const urlParams = new URLSearchParams(window.location.search);
  const schemeId = urlParams.get('scheme') || urlParams.get('id');
  if (schemeId) {
    setTimeout(() => {
      openSchemeDetail(schemeId);
    }, 250);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  handleLegacyDeepLinks();
  highlightActiveSideNav();
  initHamburgerMenu();
  initAuthNav();
  await syncUserDataIfLoggedIn();
  initLanguage();
  renderCategoryChips();
  renderSchemesCatalog();
  renderHeroStats();
  renderCSCLocations();
  initCompareStickyBar();
  initComparePage();
  initEventListeners();
  updateSavedBadgeCount();
  renderDashboardKanban();
  handleSchemeUrlParam();
});

// Hamburger Drawer Navigation Controller
function initHamburgerMenu() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const sideNav = document.getElementById('sideNavPanel');
  const overlay = document.getElementById('navOverlay');
  if (!hamburgerBtn || !sideNav) return;

  function openMenu() {
    sideNav.classList.add('open');
    if (overlay) overlay.classList.add('active');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    const firstLink = sideNav.querySelector('.side-nav-item a');
    if (firstLink) firstLink.focus();
  }

  function closeMenu() {
    sideNav.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function toggleMenu() {
    const isOpen = sideNav.classList.contains('open');
    if (isOpen) closeMenu();
    else openMenu();
  }

  hamburgerBtn.addEventListener('click', toggleMenu);

  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sideNav.classList.contains('open')) {
      closeMenu();
      hamburgerBtn.focus();
    }
  });

  sideNav.querySelectorAll('.side-nav-item a').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });
}

// Auth State & Nav Controller
function initAuthNav() {
  const loginBtn = document.getElementById('navLoginBtn');
  const profileChip = document.getElementById('navProfileChip');
  const profileDropdown = document.getElementById('profileDropdown');
  const logoutBtn = document.getElementById('logoutBtn');
  
  if (typeof KrishiApi !== 'undefined' && KrishiApi.isLoggedIn()) {
    const user = KrishiApi.getCurrentUser();
    if (loginBtn) loginBtn.style.display = 'none';
    if (profileChip) {
      profileChip.style.display = 'flex';
      const avatar = document.getElementById('profileAvatar');
      const name = document.getElementById('profileName');
      const displayName = user.name || user.fullName || 'Farmer';
      if (avatar) avatar.textContent = displayName.charAt(0).toUpperCase();
      if (name) name.textContent = displayName;
    }
  } else {
    if (loginBtn) loginBtn.style.display = 'inline-flex';
    if (profileChip) profileChip.style.display = 'none';
  }
  
  const chipBtn = document.getElementById('profileChipBtn');
  if (chipBtn && profileDropdown) {
    chipBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      profileDropdown.classList.toggle('active');
    });
    document.addEventListener('click', () => {
      profileDropdown.classList.remove('active');
    });
  }
  
  if (logoutBtn) {
    logoutBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      if (typeof KrishiApi !== 'undefined') {
        await KrishiApi.logout();
      }
      window.location.href = 'index.html';
    });
  }
}

// Synchronize Saved Schemes & Progress when logged in
async function syncUserDataIfLoggedIn() {
  if (typeof KrishiApi === 'undefined' || !KrishiApi.isLoggedIn()) return;
  try {
    const savedIds = await KrishiApi.getSavedSchemes();
    if (Array.isArray(savedIds) && savedIds.length > 0) {
      AppState.savedSchemeIds = savedIds;
      localStorage.setItem('krishi_saved_schemes', JSON.stringify(savedIds));
    }
    const progressList = await KrishiApi.getProgress();
    if (Array.isArray(progressList)) {
      progressList.forEach(item => {
        if (item.schemeId && item.status) {
          AppState.applicationTracker[item.schemeId] = item.status;
        }
      });
      localStorage.setItem('krishi_tracker', JSON.stringify(AppState.applicationTracker));
    }
  } catch (err) {
    console.warn('Could not sync user data with backend:', err);
  }
}

// Initialize Language
function initLanguage() {
  const lang = AppState.currentLang;
  document.documentElement.lang = lang;
  document.body.classList.toggle("lang-hi", lang === 'hi');
  const langToggleBtn = document.getElementById("langToggleBtn");
  if (langToggleBtn) {
    langToggleBtn.innerHTML = lang === 'en' 
      ? `<span>🌐 English</span> <span class="lang-active-tag">EN</span>`
      : `<span>🌐 हिन्दी</span> <span class="lang-active-tag">HI</span>`;
  }
  applyTranslations();
}

function toggleLanguage() {
  AppState.currentLang = AppState.currentLang === 'en' ? 'hi' : 'en';
  localStorage.setItem('krishi_lang', AppState.currentLang);
  initLanguage();
  renderCategoryChips();
  renderSchemesCatalog();
  renderDashboardKanban();
  renderCSCLocations();
  renderCompareMatrixPage();
  updateCompareStickyBar();
  if (typeof initAuthNav === 'function') initAuthNav();

  // If scheme modal is open, re-render it in new language
  const modal = document.getElementById("schemeDetailModal");
  if (modal && modal.classList.contains("active")) {
    const codeEl = document.getElementById("modalSchemeCode");
    if (codeEl && codeEl.textContent) {
      const currentScheme = SCHEMES_DATA.find(x => x.code === codeEl.textContent.trim());
      if (currentScheme) openSchemeDetail(currentScheme.id);
    }
  }
}

function applyTranslations() {
  const lang = AppState.currentLang;
  const isHi = lang === 'hi';
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  // 1. All elements with [data-i18n]
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.setAttribute('placeholder', t[key]);
      } else if (t[key].includes('<') && t[key].includes('>')) {
        el.innerHTML = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });

  // 2. Placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
  });

  // 3. Titles
  document.querySelectorAll("[data-i18n-title]").forEach(el => {
    const key = el.getAttribute("data-i18n-title");
    if (t[key] !== undefined) el.setAttribute('title', t[key]);
  });

  // 4. Known Inputs & Placeholders
  const heroSearchInput = document.getElementById("heroSearchInput");
  if (heroSearchInput) heroSearchInput.placeholder = t.searchPlaceholder;
  const subSearchInput = document.getElementById("subSearchInput");
  if (subSearchInput) subSearchInput.placeholder = t.catalogSearchPlaceholder;
  const locatorSearchInput = document.getElementById("locatorSearchInput");
  if (locatorSearchInput) locatorSearchInput.placeholder = t.locatorSearchPlaceholder;
  const aiInputField = document.getElementById("aiInputField");
  if (aiInputField) aiInputField.placeholder = t.aiPlaceholder;

  // 5. Filter Dropdown Options
  const authFilter = document.getElementById("authorityFilter");
  if (authFilter && authFilter.options && authFilter.options.length >= 3) {
    authFilter.options[0].textContent = t.filterAllAuth;
    authFilter.options[1].textContent = t.filterCentral;
    authFilter.options[2].textContent = t.filterNgo;
  }
  const sortFilter = document.getElementById("sortByFilter");
  if (sortFilter && sortFilter.options && sortFilter.options.length >= 3) {
    sortFilter.options[0].textContent = t.sortRelevant;
    sortFilter.options[1].textContent = t.sortSubsidy;
    sortFilter.options[2].textContent = t.sortClosing;
  }

  // 6. Hero Mini Wizard Options
  const heroLandSelect = document.getElementById("heroLandSelect");
  if (heroLandSelect && heroLandSelect.options && heroLandSelect.options.length >= 4) {
    heroLandSelect.options[0].textContent = t.optMarginal;
    heroLandSelect.options[1].textContent = t.optSmall;
    heroLandSelect.options[2].textContent = t.optMedium;
    heroLandSelect.options[3].textContent = t.optLarge;
  }
  const heroFocusSelect = document.getElementById("heroFocusSelect");
  if (heroFocusSelect && heroFocusSelect.options && heroFocusSelect.options.length >= 5) {
    heroFocusSelect.options[0].textContent = t.optIncome;
    heroFocusSelect.options[1].textContent = t.optInsurance;
    heroFocusSelect.options[2].textContent = t.optIrrigation;
    heroFocusSelect.options[3].textContent = t.optMechanization;
    heroFocusSelect.options[4].textContent = t.optCredit;
  }

  // 7. AI Assistant Quick Chips & Subtitle
  const aiSubtitle = document.querySelector(".ai-header-text span");
  if (aiSubtitle) aiSubtitle.textContent = t.aiGroundedBadge;
  const aiChips = document.querySelectorAll(".ai-quick-chips .ai-chip");
  if (aiChips && aiChips.length >= 4) {
    aiChips[0].textContent = t.aiChipPmkisan;
    aiChips[1].textContent = t.aiChipKcc;
    aiChips[2].textContent = t.aiChipSolar;
    aiChips[3].textContent = t.aiChipSaved;
  }
}

// Render Category Filter Chips
function renderCategoryChips() {
  const container = document.getElementById("categoryChipsList");
  if (!container) return;

  const isHi = AppState.currentLang === 'hi';
  container.innerHTML = SCHEME_CATEGORIES.map(cat => `
    <li>
      <button class="chip-btn ${AppState.activeCategory === cat.id ? 'active' : ''}" 
              onclick="setCategory('${cat.id}')">
        <span class="chip-icon">${cat.icon}</span>
        <span>${isHi ? cat.nameHi : cat.name}</span>
      </button>
    </li>
  `).join('');
}

function setCategory(catId) {
  AppState.activeCategory = catId;
  renderCategoryChips();
  renderSchemesCatalog();
}

// Render Schemes Catalog Grid
function renderSchemesCatalog() {
  const grid = document.getElementById("schemesGrid");
  const countEl = document.getElementById("resultsCount");
  if (!grid) return;

  const isHi = AppState.currentLang === 'hi';
  const query = AppState.searchQuery.toLowerCase().trim();

  // Filter schemes
  let filtered = SCHEMES_DATA.filter(scheme => {
    // Category match
    const matchCat = (AppState.activeCategory === 'all' || scheme.category === AppState.activeCategory);
    
    // Authority match
    let matchAuth = true;
    if (AppState.authorityFilter === 'central') matchAuth = scheme.issuingBody.includes("Central");
    else if (AppState.authorityFilter === 'ngo') matchAuth = scheme.category.includes("NGO") || scheme.issuingBody.includes("CSR") || scheme.issuingBody.includes("Trusts");
    
    // Search match
    let matchQuery = true;
    if (query) {
      matchQuery = scheme.name.toLowerCase().includes(query) ||
                   scheme.nameHi.toLowerCase().includes(query) ||
                   scheme.tagline.toLowerCase().includes(query) ||
                   scheme.category.toLowerCase().includes(query) ||
                   scheme.benefits.some(b => b.toLowerCase().includes(query));
    }

    return matchCat && matchAuth && matchQuery;
  });

  // Sort
  if (AppState.sortBy === 'subsidy') {
    filtered.sort((a, b) => b.subsidyHighlight.length - a.subsidyHighlight.length);
  } else if (AppState.sortBy === 'closing') {
    filtered.sort((a, b) => (b.badge.includes("Closing") ? 1 : -1));
  }

  if (countEl) {
    countEl.innerHTML = isHi 
      ? `<strong>${filtered.length}</strong> सत्यापित योजनाएं प्रदर्शित`
      : `Showing <strong>${filtered.length}</strong> verified schemes`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px; background: #FAF8F2; border-radius: 12px; border: 1px dashed var(--color-surface-border);">
        <p style="font-size: 1.2rem; font-weight: 600; color: var(--color-primary); margin-bottom: 8px;">
          ${isHi ? "कोई योजना नहीं मिली।" : "No matching schemes found."}
        </p>
        <p style="color: var(--color-ink-muted);">
          ${isHi ? "कृपया अन्य खोज शब्द या श्रेणी चुनें।" : "Try clearing your search term or selecting 'All Categories'."}
        </p>
        <button class="btn-primary" style="margin-top: 16px;" onclick="resetFilters()">
          ${isHi ? "सभी फ़िल्टर साफ़ करें" : "Reset All Filters"}
        </button>
      </div>
    `;
    return;
  }

  const badgeHiMap = {
    "Direct Benefit Transfer": "प्रत्यक्ष लाभ (DBT)",
    "Up to 80% Subsidy": "80% तक अनुदान",
    "4% Concessional Interest": "4% रियायती ब्याज",
    "100% Centrally Funded": "100% केंद्र पोषित",
    "Interest Subvention": "ब्याज अनुदान",
    "60% Capital Subsidy": "60% पूंजी अनुदान",
    "Priority Approval": "प्राथमिकता स्वीकृति",
    "Closing Soon": "समाप्ति शीघ्र",
    "PBL Prototype": "सत्यापित योजना"
  };

  grid.innerHTML = filtered.map(scheme => {
    const isSaved = AppState.savedSchemeIds.includes(scheme.id);
    const isCompared = AppState.compareSchemeIds.includes(scheme.id);
    const badgeText = isHi ? (badgeHiMap[scheme.badge] || scheme.badge) : scheme.badge;
    const targetUrl = scheme.officialUrl || scheme.applyUrl || "https://agriwelfare.gov.in";
    const primaryDoc = (scheme.officialDocuments && scheme.officialDocuments.length > 0)
      ? scheme.officialDocuments[0]
      : { url: scheme.sourceUrl || targetUrl, title: scheme.name + " Proof Guidelines" };

    return `
      <div class="scheme-card" id="scheme-card-${scheme.id}">
        <div class="card-meta-top">
          <span class="scheme-code-badge">${scheme.code}</span>
          <div style="display: flex; align-items: center; gap: 8px;">
            <span class="badge-pill ${scheme.badge.includes('Closing') ? 'priority' : (scheme.badge.includes('DBT') ? 'dbt' : 'general')}">
              ${badgeText}
            </span>
            <button class="bookmark-btn ${isSaved ? 'saved' : ''}" 
                    title="${isSaved ? (isHi ? 'सहेजी गई सूची से हटाएं' : 'Remove from saved') : (isHi ? 'योजना सहेजें' : 'Save scheme')}"
                    onclick="toggleSaveScheme('${scheme.id}', event)">
              ${isSaved ? '❤️' : '🤍'}
            </button>
          </div>
        </div>

        <h3 class="scheme-title" onclick="openSchemeDetail('${scheme.id}')">
          ${isHi ? scheme.nameHi : scheme.name}
        </h3>

        <div class="scheme-ministry">
          🏛️ ${isHi ? scheme.issuingBodyHi : scheme.issuingBody}
        </div>

        <p class="scheme-tagline">
          ${isHi ? scheme.taglineHi : scheme.tagline}
        </p>

        <div class="subsidy-box">
          <div class="subsidy-label">${isHi ? "मुख्य लाभ / अनुदान" : "Key Subsidy Benefit"}</div>
          <div class="subsidy-value">${isHi ? translateSubsidy(scheme.subsidyHighlight) : scheme.subsidyHighlight}</div>
        </div>

        <div class="card-footer">
          <button class="card-view-btn" onclick="openSchemeDetail('${scheme.id}')">
            <span>${isHi ? "विवरण व प्रक्रिया" : "View Steps"}</span> →
          </button>
          <a href="${primaryDoc.url}" target="_blank" rel="noopener noreferrer" class="card-proof-btn" onclick="event.stopPropagation()" title="${isHi ? 'आधिकारिक प्रमाण दिशानिर्देश देखें: ' + primaryDoc.title : 'View Official Proof Guidelines: ' + primaryDoc.title}">
            <span>📄 ${isHi ? 'दिशानिर्देश ↗' : 'Guidelines ↗'}</span>
          </a>
          <a href="${targetUrl}" target="_blank" rel="noopener noreferrer" class="card-apply-btn" onclick="event.stopPropagation()" title="${isHi ? 'आधिकारिक पोर्टल पर सीधे आवेदन करें' : 'Apply Directly on Official Portal'}">
            <span>${isHi ? 'आवेदन ↗' : 'Apply ↗'}</span>
          </a>
          <label class="card-compare-chk" title="${isHi ? 'आमने-सामने तुलना करें' : 'Compare side by side'}">
            <input type="checkbox" ${isCompared ? 'checked' : ''} 
                   onchange="toggleCompareScheme('${scheme.id}', this.checked)">
            <span>${isHi ? "तुलना" : "Compare"}</span>
          </label>
        </div>
      </div>
    `;
  }).join('');
}

function resetFilters() {
  AppState.activeCategory = 'all';
  AppState.searchQuery = '';
  AppState.authorityFilter = 'all';
  AppState.sortBy = 'relevant';
  const sInput = document.getElementById("subSearchInput");
  if (sInput) sInput.value = '';
  renderCategoryChips();
  renderSchemesCatalog();
}

// Bookmark / Save Scheme Toggle (with Auth gating - Section 3.3)
async function toggleSaveScheme(schemeId, event) {
  if (event) event.stopPropagation();

  // Save gating: if logged out, prompt to sign in and redirect
  if (typeof KrishiApi !== 'undefined' && !KrishiApi.isLoggedIn()) {
    const isHi = AppState.currentLang === 'hi';
    const proceed = confirm(isHi 
      ? "योजनाओं को सहेजने और अपने डैशबोर्ड पर आवेदन ट्रैक करने के लिए कृपया लॉगिन करें। क्या आप लॉगिन पृष्ठ पर जाना चाहते हैं?" 
      : "Please sign in to save schemes and manage application milestones in your Dashboard. Would you like to log in now?");
    if (proceed) {
      const pageBase = window.location.pathname.split("/").pop() || "index.html";
      const nextUrl = encodeURIComponent(`${pageBase}?scheme=${schemeId}`);
      window.location.href = `login.html?next=${nextUrl}&action=save&scheme=${schemeId}`;
      return;
    }
  }

  const idx = AppState.savedSchemeIds.indexOf(schemeId);
  const isHi = AppState.currentLang === 'hi';

  if (idx === -1) {
    AppState.savedSchemeIds.push(schemeId);
    if (!AppState.applicationTracker[schemeId]) {
      AppState.applicationTracker[schemeId] = "not_started";
    }
    if (typeof KrishiApi !== 'undefined') {
      await KrishiApi.saveScheme(schemeId).catch(() => null);
    }
    showToast(isHi ? "योजना आपके डैशबोर्ड में सहेज ली गई!" : "Scheme saved to your Dashboard!");
  } else {
    AppState.savedSchemeIds.splice(idx, 1);
    if (typeof KrishiApi !== 'undefined') {
      await KrishiApi.removeSavedScheme(schemeId).catch(() => null);
    }
    showToast(isHi ? "योजना बुकमार्क से हटा दी गई।" : "Scheme removed from bookmarks.");
  }

  localStorage.setItem('krishi_saved_schemes', JSON.stringify(AppState.savedSchemeIds));
  localStorage.setItem('krishi_tracker', JSON.stringify(AppState.applicationTracker));

  updateSavedBadgeCount();
  renderSchemesCatalog();
  renderDashboardKanban();
}

function updateSavedBadgeCount() {
  const badge = document.getElementById("savedCountBadge");
  if (badge) {
    badge.textContent = AppState.savedSchemeIds.length;
  }
}

// Compare Schemes Drawer Logic
function toggleCompareScheme(schemeId, isChecked) {
  const isHi = AppState.currentLang === 'hi';
  if (isChecked) {
    if (AppState.compareSchemeIds.length >= 3) {
      alert(isHi ? "आप एक समय में अधिकतम 3 योजनाओं की तुलना कर सकते हैं।" : "You can compare up to 3 schemes at a time.");
      renderSchemesCatalog();
      return;
    }
    if (!AppState.compareSchemeIds.includes(schemeId)) {
      AppState.compareSchemeIds.push(schemeId);
    }
  } else {
    AppState.compareSchemeIds = AppState.compareSchemeIds.filter(id => id !== schemeId);
  }
  updateCompareStickyBar();
}

function initCompareStickyBar() {
  updateCompareStickyBar();
}

function updateCompareStickyBar() {
  const bar = document.getElementById("compareStickyBar");
  if (!bar) return;

  if (AppState.compareSchemeIds.length > 0) {
    bar.classList.add("visible");
    const container = document.getElementById("comparePillsContainer");
    if (container) {
      container.innerHTML = AppState.compareSchemeIds.map(id => {
        const s = SCHEMES_DATA.find(x => x.id === id);
        return `
          <span class="compare-pill-tag">
            ${s.code}
            <span class="remove-compare-btn" onclick="toggleCompareScheme('${id}', false)">✕</span>
          </span>
        `;
      }).join('');
    }
  } else {
    bar.classList.remove("visible");
  }
}

function openCompareModal() {
  if (AppState.compareSchemeIds.length < 2) {
    alert(AppState.currentLang === 'hi' ? "तुलना के लिए कम से कम 2 योजनाएं चुनें।" : "Please select at least 2 schemes to compare.");
    return;
  }

  const modal = document.getElementById("compareModal");
  const tableContainer = document.getElementById("compareTableContent");
  if (!modal || !tableContainer) return;

  const isHi = AppState.currentLang === 'hi';
  const schemes = AppState.compareSchemeIds.map(id => SCHEMES_DATA.find(x => x.id === id));

  tableContainer.innerHTML = `
    <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.875rem;">
      <thead>
        <tr style="background: #F4F1EA; border-bottom: 2px solid var(--color-surface-border);">
          <th style="padding: 12px; width: 22%;">Parameter</th>
          ${schemes.map(s => `
            <th style="padding: 12px; font-family: var(--font-serif); font-size: 1.05rem; color: var(--color-primary);">
              ${isHi ? s.nameHi : s.name}
            </th>
          `).join('')}
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid var(--color-surface-border);">
          <td style="padding: 12px; font-weight: 600;">Authority</td>
          ${schemes.map(s => `<td style="padding: 12px;">${isHi ? s.issuingBodyHi : s.issuingBody}</td>`).join('')}
        </tr>
        <tr style="border-bottom: 1px solid var(--color-surface-border); background: #FAF8F2;">
          <td style="padding: 12px; font-weight: 600;">Subsidy / Benefit</td>
          ${schemes.map(s => `<td style="padding: 12px; font-family: var(--font-mono); font-weight: 700; color: var(--color-primary);">${isHi ? translateSubsidy(s.subsidyHighlight) : s.subsidyHighlight}</td>`).join('')}
        </tr>
        <tr style="border-bottom: 1px solid var(--color-surface-border);">
          <td style="padding: 12px; font-weight: 600;">Eligible Land Holding</td>
          ${schemes.map(s => `<td style="padding: 12px;">${s.minLand} - ${s.maxLand >= 999 ? 'No upper limit' : s.maxLand + ' Hectares'}</td>`).join('')}
        </tr>
        <tr style="border-bottom: 1px solid var(--color-surface-border); background: #FAF8F2;">
          <td style="padding: 12px; font-weight: 600;">Target Farmers</td>
          ${schemes.map(s => `<td style="padding: 12px;">${isHi ? translateTarget(s.targetBeneficiary) : s.targetBeneficiary}</td>`).join('')}
        </tr>
        <tr style="border-bottom: 1px solid var(--color-surface-border);">
          <td style="padding: 12px; font-weight: 600;">Required Documents</td>
          ${schemes.map(s => `<td style="padding: 12px;"><ul style="padding-left: 16px;">${s.documents.map(d => `<li>${d}</li>`).join('')}</ul></td>`).join('')}
        </tr>
        <tr style="border-bottom: 1px solid var(--color-surface-border); background: #FAF8F2;">
          <td style="padding: 12px; font-weight: 600;">${isHi ? 'प्रमाण दिशानिर्देश' : 'Proof Guidelines'}</td>
          ${schemes.map(s => {
            const doc = (s.officialDocuments && s.officialDocuments.length > 0) ? s.officialDocuments[0] : null;
            return doc ? `
              <td style="padding: 12px;">
                <a href="${doc.url}" target="_blank" rel="noopener noreferrer" class="card-proof-btn" style="text-decoration: none;">
                  📄 ${isHi ? 'दिशानिर्देश ↗' : 'Guidelines ↗'}
                </a>
              </td>
            ` : `<td style="padding: 12px;">-</td>`;
          }).join('')}
        </tr>
        <tr>
          <td style="padding: 12px; font-weight: 600;">${isHi ? 'आवेदन लिंक' : 'Apply Link'}</td>
          ${schemes.map(s => `
            <td style="padding: 12px;">
              <a href="${s.officialUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="font-size: 0.75rem; padding: 6px 12px;">
                ${isHi ? 'पोर्टल ↗' : 'Official Portal ↗'}
              </a>
            </td>
          `).join('')}
        </tr>
      </tbody>
    </table>
  `;

  modal.classList.add("active");
}

function closeCompareModal() {
  const modal = document.getElementById("compareModal");
  if (modal) modal.classList.remove("active");
}

// Scheme Detail Modal & Step-by-Step Guidance
function openSchemeDetail(schemeId) {
  const scheme = SCHEMES_DATA.find(x => x.id === schemeId);
  if (!scheme) return;

  const modal = document.getElementById("schemeDetailModal");
  if (!modal) return;
  const isHi = AppState.currentLang === 'hi';
  const isSaved = AppState.savedSchemeIds.includes(scheme.id);
  const targetUrl = scheme.officialUrl || scheme.applyUrl || "https://agriwelfare.gov.in";

  // Translate modal static titles
  const modalSubLabel = modal.querySelector(".subsidy-label");
  if (modalSubLabel) modalSubLabel.textContent = isHi ? "मुख्य सब्सिडी / वित्तीय लाभ" : "Key Subsidy / Financial Benefit";
  
  const sectionTitles = modal.querySelectorAll(".detail-section-title");
  if (sectionTitles.length >= 4) {
    sectionTitles[0].textContent = isHi ? "✨ मुख्य लाभ" : "✨ Key Benefits";
    sectionTitles[1].textContent = isHi ? "🎯 कौन पात्र है? (पात्रता आवश्यकताएं)" : "🎯 Who is Eligible? (Requirements)";
    sectionTitles[2].textContent = isHi ? "📋 आवश्यक दस्तावेज़ चेकलिस्ट" : "📋 Required Documents Checklist";
    sectionTitles[3].textContent = isHi ? "🚀 चरण-दर-चरण आवेदन प्रक्रिया (आवेदन कैसे करें)" : "🚀 Step-by-Step Application Procedure (How to Apply)";
    if (sectionTitles[4]) sectionTitles[4].textContent = isHi ? "📄 आधिकारिक दस्तावेज़ एवं दिशानिर्देश" : "📄 Official Documents & Proof Guidelines";
  }

  // Populate header
  document.getElementById("modalSchemeCode").textContent = scheme.code;
  document.getElementById("modalSchemeTitle").textContent = isHi ? scheme.nameHi : scheme.name;
  document.getElementById("modalSchemeAuthority").textContent = isHi ? scheme.issuingBodyHi : scheme.issuingBody;

  // Overview
  document.getElementById("modalSchemeTagline").textContent = isHi ? scheme.taglineHi : scheme.tagline;
  document.getElementById("modalSubsidyHighlight").textContent = isHi ? (scheme.subsidyHighlightHi || translateSubsidy(scheme.subsidyHighlight)) : scheme.subsidyHighlight;
  document.getElementById("modalTargetBeneficiary").textContent = isHi ? (scheme.targetBeneficiaryHi || translateTarget(scheme.targetBeneficiary)) : scheme.targetBeneficiary;

  // Benefits
  const benefitsList = document.getElementById("modalBenefitsList");
  if (benefitsList) {
    const benItems = (isHi && scheme.benefitsHi && scheme.benefitsHi.length) ? scheme.benefitsHi : scheme.benefits;
    benefitsList.innerHTML = benItems.map(b => `
      <li style="margin-bottom: 8px; color: var(--color-ink-muted); line-height: 1.6;">
        <strong style="color: var(--color-primary);">✓</strong> ${b}
      </li>
    `).join('');
  }

  // Eligibility / Requirements
  const eligList = document.getElementById("modalEligibilityList");
  if (eligList) {
    const eligItems = (isHi && scheme.eligibilityHi && scheme.eligibilityHi.length) ? scheme.eligibilityHi : scheme.eligibility;
    eligList.innerHTML = eligItems.map(e => `
      <li style="margin-bottom: 8px; color: var(--color-ink-muted); line-height: 1.6;">
        <strong style="color: var(--color-primary);">•</strong> ${e}
      </li>
    `).join('');
  }

  // Required Documents (Interactive checklist with Hindi mapping)
  const docsList = document.getElementById("modalDocumentsList");
  if (docsList) {
    const docItems = (isHi && scheme.documentsHi && scheme.documentsHi.length)
      ? scheme.documentsHi
      : scheme.documents.map((doc) => isHi ? (DOCS_HI_MAP[doc] || doc) : doc);
    docsList.innerHTML = docItems.map((docText, idx) => `
      <label class="doc-check-item">
        <input type="checkbox" id="doc_check_${idx}">
        <span>${docText}</span>
      </label>
    `).join('');
  }

  // Step-by-Step Procedure Timeline
  const procTimeline = document.getElementById("modalProcedureTimeline");
  if (procTimeline) {
    const procSteps = (isHi && scheme.procedureHi && scheme.procedureHi.length) ? scheme.procedureHi : scheme.procedure;
    procTimeline.innerHTML = procSteps.map(p => `
      <div class="procedure-step-item">
        <div class="procedure-step-badge">${isHi ? 'चरण ' + p.step : 'Step ' + p.step}</div>
        <div class="procedure-step-content">
          <h5>${p.title}</h5>
          <p style="line-height: 1.55;">${p.desc}</p>
        </div>
      </div>
    `).join('');
  }

  // Trust Verification Line
  const lastVerEl = document.getElementById("modalLastVerified");
  if (lastVerEl) lastVerEl.textContent = `${isHi ? 'सत्यापित:' : 'Verified:'} ${scheme.lastVerified}`;

  // Apply on Official Portal Link (Always redirects to working official scheme portal)
  const officialLink = document.getElementById("modalOfficialLink");
  if (officialLink) {
    officialLink.href = targetUrl;
    officialLink.target = "_blank";
    officialLink.rel = "noopener noreferrer";
    officialLink.innerHTML = isHi ? '<span>आधिकारिक पोर्टल पर आवेदन करें ↗</span>' : '<span>Apply on Official Portal ↗</span>';
  }

  // Primary Proof Guidelines Document
  const primaryDoc = (scheme.officialDocuments && scheme.officialDocuments.length > 0)
    ? scheme.officialDocuments[0]
    : { url: scheme.sourceUrl || targetUrl, title: scheme.name + " Proof Guidelines", source: scheme.issuingBody, year: "2026" };

  // Setup direct Proof Guidelines button in modal action bar
  const proofDocLink = document.getElementById('modalProofDocLink');
  if (proofDocLink) {
    proofDocLink.href = primaryDoc.url;
    proofDocLink.target = "_blank";
    proofDocLink.rel = "noopener noreferrer";
    proofDocLink.style.display = "inline-flex";
    proofDocLink.innerHTML = `📄 <span>${isHi ? 'प्रमाण दिशानिर्देश ↗' : 'Proof Guidelines ↗'}</span>`;
    proofDocLink.title = isHi ? `आधिकारिक प्रमाण दिशानिर्देश देखें: ${primaryDoc.title}` : `View Official Proof Guidelines: ${primaryDoc.title}`;
  }

  // Apply / Register Directly container (if present in markup)
  const applyContainer = document.getElementById('modalApplyBtnContainer');
  if (applyContainer) {
    applyContainer.innerHTML = `
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <a href="${targetUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary btn-accent" style="font-size: 0.875rem; padding: 9px 16px; display: inline-flex; align-items: center; gap: 6px;">
          ${isHi ? '📝 आधिकारिक पोर्टल पर आवेदन करें ↗' : '📝 Apply on Official Portal ↗'}
        </a>
        <a href="${primaryDoc.url}" target="_blank" rel="noopener noreferrer" class="btn-outline" style="font-size: 0.875rem; padding: 9px 16px; display: inline-flex; align-items: center; gap: 6px; border-color: var(--color-primary); color: var(--color-primary); font-weight: 600;">
          ${isHi ? '📄 दिशानिर्देश PDF देखें ↗' : '📄 Guidelines PDF ↗'}
        </a>
      </div>`;
  }

  // Official Documents / Proof Guidelines
  const docsSection = document.getElementById('modalOfficialDocsSection');
  const officialDocsList = document.getElementById('modalOfficialDocsList');
  if (docsSection && officialDocsList) {
    const docs = (scheme.officialDocuments && scheme.officialDocuments.length > 0)
      ? scheme.officialDocuments
      : [primaryDoc];
    docsSection.style.display = 'block';
    officialDocsList.innerHTML = docs.map(doc => `
      <a href="${doc.url}" target="_blank" rel="noopener noreferrer" class="official-doc-card">
        <div class="doc-icon">📄</div>
        <div class="doc-info">
          <div class="doc-title">${doc.title}</div>
          <div class="doc-meta">${doc.source} · ${doc.year} · <strong style="color: var(--color-primary);">${isHi ? 'आधिकारिक दिशानिर्देश खोलें ↗' : 'View Official Guidelines ↗'}</strong></div>
        </div>
        <span class="doc-open-icon">↗</span>
      </a>
    `).join('');
  }

  // Bookmark Button in Modal
  const modalSaveBtn = document.getElementById("modalSaveBtn");
  if (modalSaveBtn) {
    modalSaveBtn.innerHTML = isSaved ? `❤️ ${isHi ? "सहेजा गया" : "Saved"}` : `🤍 ${isHi ? "सहेजें" : "Save Scheme"}`;
    modalSaveBtn.onclick = () => {
      toggleSaveScheme(scheme.id);
      openSchemeDetail(scheme.id);
    };
  }

  // Setup TTS Button
  const ttsBtn = document.getElementById("modalTtsBtn");
  if (ttsBtn) {
    ttsBtn.classList.remove("speaking");
    ttsBtn.innerHTML = `🔊 <span>${isHi ? "योजना विवरण सुनें" : "Read Scheme Aloud"}</span>`;
    ttsBtn.onclick = () => toggleTextToSpeech(scheme);
  }

  // Setup Print Checklist Button
  const printBtn = document.getElementById("modalPrintChecklistBtn");
  if (printBtn) {
    printBtn.innerHTML = `🖨️ <span>${isHi ? "चेकलिस्ट प्रिंट करें" : "Print Checklist"}</span>`;
    printBtn.onclick = () => printSchemeChecklist(scheme);
  }

  // Setup "Ask AI about this scheme" shortcut
  const askAiBtn = document.getElementById("modalAskAiBtn");
  if (askAiBtn) {
    askAiBtn.innerHTML = `🤖 <span>${isHi ? "AI सहायक से पूछें" : "Ask AI Assistant"}</span>`;
    askAiBtn.onclick = () => {
      closeSchemeModal();
      if (window.KrishiAI) {
        window.KrishiAI.openWithContext(scheme);
      }
    };
  }

  modal.classList.add("active");
}

function closeSchemeModal() {
  const modal = document.getElementById("schemeDetailModal");
  if (modal) modal.classList.remove("active");
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
}

// Text-to-Speech Accessibility Engine
function toggleTextToSpeech(scheme) {
  if (!('speechSynthesis' in window)) {
    alert("Speech Synthesis is not supported in this browser.");
    return;
  }

  const ttsBtn = document.getElementById("modalTtsBtn");
  const isHi = AppState.currentLang === 'hi';

  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
    if (ttsBtn) {
      ttsBtn.classList.remove("speaking");
      ttsBtn.innerHTML = `🔊 <span>${isHi ? "योजना विवरण सुनें" : "Read Scheme Aloud"}</span>`;
    }
    return;
  }

  const docList = (isHi && scheme.documentsHi) ? scheme.documentsHi : scheme.documents.map(d => isHi ? (DOCS_HI_MAP[d] || d) : d);
  const procList = (isHi && scheme.procedureHi) ? scheme.procedureHi : scheme.procedure;
  const subsidyText = isHi ? (scheme.subsidyHighlightHi || translateSubsidy(scheme.subsidyHighlight)) : scheme.subsidyHighlight;

  const textToRead = isHi
    ? `${scheme.nameHi}। ${scheme.taglineHi}। मुख्य लाभ: ${subsidyText}। आवश्यक दस्तावेज़: ${docList.slice(0, 4).join(", ")}। आवेदन के चरण: ${procList.map(p => p.title).join("। ")}।`
    : `${scheme.name}. ${scheme.tagline}. Key benefit: ${scheme.subsidyHighlight}. Required documents: ${scheme.documents.slice(0, 4).join(", ")}. Step by step application procedure: ${scheme.procedure.map(p => p.title).join(". ")}.`;

  const utterance = new SpeechSynthesisUtterance(textToRead);
  utterance.lang = isHi ? 'hi-IN' : 'en-IN';
  utterance.rate = 0.95;

  utterance.onstart = () => {
    if (ttsBtn) {
      ttsBtn.classList.add("speaking");
      ttsBtn.innerHTML = `⏹️ <span>${isHi ? "ऑडियो रोकें" : "Stop Audio"}</span>`;
    }
  };

  utterance.onend = utterance.onerror = () => {
    if (ttsBtn) {
      ttsBtn.classList.remove("speaking");
      ttsBtn.innerHTML = `🔊 <span>${isHi ? "योजना विवरण सुनें" : "Read Scheme Aloud"}</span>`;
    }
  };

  window.speechSynthesis.speak(utterance);
}

// Printable Document Checklist
function printSchemeChecklist(scheme) {
  const printWindow = window.open('', '_blank');
  const isHi = AppState.currentLang === 'hi';
  const docItems = (isHi && scheme.documentsHi) ? scheme.documentsHi : scheme.documents.map(d => isHi ? (DOCS_HI_MAP[d] || d) : d);
  const schemeTitle = isHi ? scheme.nameHi : scheme.name;
  const portalUrl = scheme.officialUrl || scheme.applyUrl || "";

  printWindow.document.write(`
    <!DOCTYPE html>
    <html lang="${isHi ? 'hi' : 'en'}">
    <head>
      <meta charset="UTF-8">
      <title>${isHi ? 'दस्तावेज़ चेकलिस्ट' : 'Document Checklist'} - ${schemeTitle}</title>
      <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; padding: 40px; color: #1A1A17; }
        h1 { color: #1F3B2C; margin-bottom: 4px; font-size: 22px; }
        .sub { color: #7A5C3E; font-size: 13px; margin-bottom: 24px; }
        .checklist-item { display: flex; align-items: center; margin-bottom: 12px; font-size: 15px; }
        .box { width: 20px; height: 20px; border: 2px solid #1F3B2C; border-radius: 4px; margin-right: 12px; flex-shrink: 0; }
        .footer { margin-top: 36px; font-size: 12px; color: #666; border-top: 1px solid #ddd; padding-top: 12px; }
      </style>
    </head>
    <body>
      <h1>${schemeTitle}</h1>
      <div class="sub">${isHi ? "आधिकारिक दस्तावेज़ सत्यापन चेकलिस्ट · कृषि सेतु द्वारा जनरेटेड" : "Official Documents Verification Checklist · Generated via KrishiSetu"}</div>
      <h3 style="margin-bottom: 16px;">${isHi ? "आवेदन हेतु आवश्यक दस्तावेज़ चेकलिस्ट:" : "Official Documents Verification Checklist:"}</h3>
      <div style="margin-top: 16px;">
        ${docItems.map(d => `
          <div class="checklist-item">
            <div class="box"></div>
            <span>${d}</span>
          </div>
        `).join('')}
      </div>
      <div class="footer">
        ${isHi ? "आधिकारिक आवेदन पोर्टल:" : "Official Application Portal:"} <strong>${portalUrl}</strong> | ${isHi ? "सत्यापित:" : "Last verified:"} ${scheme.lastVerified}
      </div>
      <script>
        window.onload = function() { window.print(); }
      </script>
    </body>
    </html>
  `);
  printWindow.document.close();
}

// Multi-Step Eligibility Checker Logic
let wizardCurrentStep = 1;
const wizardAnswers = {
  state: "Madhya Pradesh",
  landSize: 2.0,
  cropType: "grains",
  category: "small",
  income: "below_2lakh",
  specialCategory: "none"
};

function setWizardStep(step) {
  wizardCurrentStep = step;
  for (let i = 1; i <= 4; i++) {
    const content = document.getElementById(`wizardStep${i}`);
    const node = document.getElementById(`nodeStep${i}`);
    if (content) content.classList.toggle("active", i === step);
    if (node) {
      node.classList.toggle("active", i === step);
      node.classList.toggle("completed", i < step);
    }
  }

  const fill = document.getElementById("wizardProgressFill");
  if (fill) {
    fill.style.width = `${(step / 4) * 100}%`;
  }
}

function nextWizardStep() {
  if (wizardCurrentStep === 1) {
    const st = document.getElementById("wizState");
    const land = document.getElementById("wizLand");
    if (st) wizardAnswers.state = st.value;
    if (land) wizardAnswers.landSize = parseFloat(land.value) || 1.0;
  } else if (wizardCurrentStep === 2) {
    const crop = document.getElementById("wizCrop");
    if (crop) wizardAnswers.cropType = crop.value;
  } else if (wizardCurrentStep === 3) {
    const cat = document.getElementById("wizCategory");
    const inc = document.getElementById("wizIncome");
    if (cat) wizardAnswers.category = cat.value;
    if (inc) wizardAnswers.income = inc.value;
  }

  if (wizardCurrentStep < 4) {
    setWizardStep(wizardCurrentStep + 1);
    if (wizardCurrentStep === 4) {
      calculateEligibilityResults();
    }
  }
}

function prevWizardStep() {
  if (wizardCurrentStep > 1) {
    setWizardStep(wizardCurrentStep - 1);
  }
}

function calculateEligibilityResults() {
  const container = document.getElementById("eligibilityResultsList");
  if (!container) return;

  const isHi = AppState.currentLang === 'hi';
  const land = wizardAnswers.landSize;

  // Rank schemes based on criteria
  const scoredSchemes = SCHEMES_DATA.map(s => {
    let score = 50;
    let matchReasons = [];

    // Land holding criteria check
    if (land >= s.minLand && land <= s.maxLand) {
      score += 30;
      matchReasons.push(isHi ? `आपकी भूमि (${land} हे.) इस योजना के अनुकूल है` : `Your land (${land} ha) satisfies scheme size criteria`);
    }

    // Small / Marginal match
    if ((wizardAnswers.category === 'marginal' || wizardAnswers.category === 'small') && s.farmerTypes.includes(wizardAnswers.category)) {
      score += 15;
      matchReasons.push(isHi ? "लघु व सीमांत किसान प्राथमिकता" : "Prioritized for small & marginal farmers");
    }

    // Crop match
    if (wizardAnswers.cropType === 'horticulture' && s.category === 'Horticulture') {
      score += 10;
      matchReasons.push(isHi ? "आपकी फल/सब्जी फसल के अनुकूल है" : "Matches your fruit/vegetable crop type");
    } else if (s.category === 'Income Support & Pension') {
      score += 10;
    }

    score = Math.min(score, 98);

    return {
      scheme: s,
      score,
      reasons: matchReasons
    };
  });

  scoredSchemes.sort((a, b) => b.score - a.score);
  const topMatches = scoredSchemes.slice(0, 6);

  container.innerHTML = `
    <div class="match-summary-badge">
      <div>
        <h4 style="color: var(--color-primary); font-size: 1.1rem; margin-bottom: 4px;">
          ${isHi ? "पात्रता विश्लेषण पूर्ण!" : "Eligibility Analysis Complete!"}
        </h4>
        <p style="font-size: 0.875rem; color: var(--color-ink-muted);">
          ${isHi ? `आपके विवरण के आधार पर ${topMatches.length} शीर्ष योजनाएं उपयुक्त पाई गईं।` : `Based on your profile, you qualify with high probability for ${topMatches.length} schemes.`}
        </p>
      </div>
      <button class="btn-primary btn-accent" onclick="saveAllMatchedSchemes()">
        ${isHi ? "सभी मिलान सहेजें" : "Save All Matches"}
      </button>
    </div>

    ${topMatches.map(m => `
      <div class="match-scheme-row">
        <div>
          <span class="scheme-code-badge" style="margin-bottom: 4px; display: inline-block;">${m.scheme.code}</span>
          <h4 style="color: var(--color-primary); font-size: 1.05rem;">
            ${isHi ? m.scheme.nameHi : m.scheme.name}
          </h4>
          <p style="font-size: 0.8125rem; color: var(--color-ink-muted); margin-top: 4px;">
            <strong>${isHi ? "पात्रता कारण: " : "Why you match: "}</strong> ${m.reasons.join(", ")}
          </p>
        </div>
        <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
          <div class="match-pct-badge">${m.score}% Match</div>
          ${(m.scheme.officialDocuments && m.scheme.officialDocuments.length > 0) ? `
            <a href="${m.scheme.officialDocuments[0].url}" target="_blank" rel="noopener noreferrer" class="card-proof-btn" style="text-decoration: none;" title="${m.scheme.officialDocuments[0].title}">
              📄 ${isHi ? 'दिशानिर्देश ↗' : 'Guidelines ↗'}
            </a>
          ` : ''}
          <button class="card-view-btn" onclick="openSchemeDetail('${m.scheme.id}')">
            ${isHi ? "देखें" : "View"}
          </button>
        </div>
      </div>
    `).join('')}
  `;
}

function saveAllMatchedSchemes() {
  SCHEMES_DATA.slice(0, 6).forEach(s => {
    if (!AppState.savedSchemeIds.includes(s.id)) {
      AppState.savedSchemeIds.push(s.id);
      AppState.applicationTracker[s.id] = "not_started";
    }
  });
  localStorage.setItem('krishi_saved_schemes', JSON.stringify(AppState.savedSchemeIds));
  localStorage.setItem('krishi_tracker', JSON.stringify(AppState.applicationTracker));
  updateSavedBadgeCount();
  renderDashboardKanban();
  showToast(AppState.currentLang === 'hi' ? "सभी योजनाएं डैशबोर्ड में सहेज ली गईं!" : "All matched schemes saved to your Dashboard!");
}

// Farmer Dashboard & Kanban Tracker Logic
function renderDashboardKanban() {
  const cols = {
    not_started: document.getElementById("kanbanColNotStarted"),
    docs_pending: document.getElementById("kanbanColDocsPending"),
    applied: document.getElementById("kanbanColApplied"),
    approved: document.getElementById("kanbanColApproved")
  };

  if (!cols.not_started) return;

  const isHi = AppState.currentLang === 'hi';
  const savedSchemes = AppState.savedSchemeIds.map(id => SCHEMES_DATA.find(x => x.id === id)).filter(Boolean);

  // Clear columns
  Object.keys(cols).forEach(k => {
    if (cols[k]) cols[k].innerHTML = '';
  });

  const counts = { not_started: 0, docs_pending: 0, applied: 0, approved: 0 };

  savedSchemes.forEach(scheme => {
    const status = AppState.applicationTracker[scheme.id] || "not_started";
    counts[status] = (counts[status] || 0) + 1;

    const card = document.createElement("div");
    card.className = "kanban-item-card";
    card.innerHTML = `
      <span class="scheme-code-badge">${scheme.code}</span>
      <div class="kanban-item-title" onclick="openSchemeDetail('${scheme.id}')" style="cursor: pointer;">
        ${isHi ? scheme.nameHi : scheme.name}
      </div>
      <div style="font-family: var(--font-mono); font-size: 0.775rem; color: var(--color-primary); font-weight: 600;">
        ${scheme.subsidyHighlight}
      </div>
      <div style="margin: 4px 0 6px;">
        ${(scheme.officialDocuments && scheme.officialDocuments.length > 0) ? `
          <a href="${scheme.officialDocuments[0].url}" target="_blank" rel="noopener noreferrer" style="font-size: 0.72rem; color: var(--color-primary); text-decoration: underline; font-weight: 600; display: inline-flex; align-items: center; gap: 3px;" title="${scheme.officialDocuments[0].title}">
            📄 ${isHi ? 'प्रमाण दिशानिर्देश ↗' : 'Proof Guidelines ↗'}
          </a>
        ` : ''}
      </div>
      <div class="kanban-item-actions">
        <select onchange="updateSchemeKanbanStatus('${scheme.id}', this.value)" style="font-size: 0.72rem; padding: 2px 4px; border-radius: 4px; border: 1px solid var(--color-surface-border);">
          <option value="not_started" ${status === 'not_started' ? 'selected' : ''}>Not Started</option>
          <option value="docs_pending" ${status === 'docs_pending' ? 'selected' : ''}>Docs Pending</option>
          <option value="applied" ${status === 'applied' ? 'selected' : ''}>Applied on Portal</option>
          <option value="approved" ${status === 'approved' ? 'selected' : ''}>Approved / Active</option>
        </select>
        <button onclick="toggleSaveScheme('${scheme.id}')" title="Remove" style="color: #E63946; font-size: 0.8rem;">✕</button>
      </div>
    `;

    if (cols[status]) {
      cols[status].appendChild(card);
    }
  });

  // Update count indicators
  document.getElementById("countNotStarted").textContent = counts.not_started;
  document.getElementById("countDocsPending").textContent = counts.docs_pending;
  document.getElementById("countApplied").textContent = counts.applied;
  document.getElementById("countApproved").textContent = counts.approved;
}

function updateSchemeKanbanStatus(schemeId, newStatus) {
  AppState.applicationTracker[schemeId] = newStatus;
  localStorage.setItem('krishi_tracker', JSON.stringify(AppState.applicationTracker));
  if (typeof KrishiApi !== 'undefined' && KrishiApi.isLoggedIn()) {
    KrishiApi.updateProgress(schemeId, newStatus).catch(() => null);
  }
  renderDashboardKanban();
  showToast(`Status updated to: ${newStatus.replace('_', ' ')}`);
}

// CSC / KVK Locator (Requirement 3.4)
function renderCSCLocations(filterType = "all", searchQuery = "") {
  const container = document.getElementById("locatorCardsGrid");
  if (!container) return;

  const isHi = AppState.currentLang === 'hi';
  const query = (searchQuery || "").toLowerCase().trim();

  let filtered = CSC_KVK_LOCATIONS.filter(loc => {
    const matchType = filterType === "all" || loc.type === filterType;
    let matchQuery = true;
    if (query) {
      matchQuery = loc.name.toLowerCase().includes(query) ||
                   (loc.nameHi && loc.nameHi.toLowerCase().includes(query)) ||
                   loc.district.toLowerCase().includes(query) ||
                   loc.state.toLowerCase().includes(query) ||
                   loc.address.toLowerCase().includes(query) ||
                   loc.services.some(s => s.toLowerCase().includes(query));
    }
    return matchType && matchQuery;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px; background: #FAF8F2; border-radius: 12px; border: 1px dashed var(--color-surface-border);">
        <p style="font-size: 1.1rem; font-weight: 600; color: var(--color-primary); margin-bottom: 8px;">
          ${isHi ? "कोई केंद्र नहीं मिला।" : "No centers found matching your search."}
        </p>
        <p style="color: var(--color-ink-muted); font-size: 0.875rem;">
          ${isHi ? "कृपया अन्य जिला या राज्य लिखकर खोजें।" : "Try typing another district or state name."}
        </p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(loc => {
    const centerTitle = isHi ? loc.nameHi : loc.name;
    const googleSearchQuery = encodeURIComponent(`${loc.name} ${loc.district} ${loc.state}`);
    const googleSearchUrl = `https://www.google.com/search?q=${googleSearchQuery}`;
    const mapsQuery = encodeURIComponent(`${loc.name}, ${loc.address}`);
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

    return `
      <div class="locator-card clickable-locator-card" 
           onclick="window.open('${googleSearchUrl}', '_blank', 'noopener,noreferrer')" 
           tabindex="0" 
           role="button"
           aria-label="${isHi ? 'Google पर खोजें: ' : 'Search on Google: '}${loc.name}"
           title="${isHi ? 'Google पर खोजें (नया टैब)' : 'Search on Google (opens in new tab)'}"
           onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();window.open('${googleSearchUrl}', '_blank', 'noopener,noreferrer')}">
        <div class="locator-card-header">
          <div class="locator-type-tag ${loc.type === 'KVK' ? 'kvk' : 'csc'}">
            ${loc.type === 'KVK' ? (isHi ? 'कृषि विज्ञान केंद्र (ICAR)' : 'Krishi Vigyan Kendra (ICAR)') : (isHi ? 'डिजिटल सेवा केंद्र (CSC)' : 'Digital Seva Centre (CSC)')}
          </div>
          <span class="locator-search-pill" title="${isHi ? 'Google पर खोजें' : 'Search on Google'}">
            🔍 Google ↗
          </span>
        </div>
        <h4 class="locator-name">
          ${centerTitle}
        </h4>
        <div class="locator-address-wrapper">
          <a href="${mapsUrl}" 
             target="_blank" 
             rel="noopener noreferrer" 
             class="locator-address-link"
             title="${isHi ? 'गूगल मैप्स में स्थान देखें' : 'Open in Google Maps'}"
             aria-label="${isHi ? 'गूगल मैप्स में स्थान देखें: ' : 'Open in Google Maps: '}${loc.address}"
             onclick="event.stopPropagation()">
            <span class="pin-icon">📍</span>
            <span class="address-text">${loc.address}, ${loc.state}</span>
            <span class="maps-hint">🗺️ Maps ↗</span>
          </a>
        </div>
        <div class="locator-phone">
          📞 <a href="tel:${loc.contact.replace(/\s+/g, '')}" onclick="event.stopPropagation()" title="${isHi ? 'कॉल करें' : 'Call center'}">${loc.contact}</a>
        </div>
        <div class="locator-services-list">
          ${loc.services.map(s => `<span class="service-pill">${isHi ? (SERVICES_HI_MAP[s] || s) : s}</span>`).join('')}
        </div>
      </div>
    `;
  }).join('');
}

// Side Nav Active Item Highlighter
function highlightActiveSideNav() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".side-nav-item").forEach(item => {
    const link = item.querySelector("a");
    if (!link) return;
    const href = link.getAttribute("href");
    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

// Deep Links Handler for Legacy Anchors (Requirement 3.3)
function handleLegacyDeepLinks() {
  const hash = window.location.hash;
  const path = window.location.pathname.toLowerCase();
  const isIndex = path.endsWith("index.html") || path.endsWith("/") || !path.includes(".html");

  if (isIndex && hash) {
    if (hash === "#catalogSection" || hash === "#schemesSection") {
      window.location.replace("schemes.html");
    } else if (hash === "#eligibilitySection") {
      window.location.replace("eligibility.html");
    } else if (hash === "#dashboardSection") {
      window.location.replace("dashboard.html");
    } else if (hash === "#locatorSection") {
      window.location.replace("locator.html");
    } else if (hash === "#compareSection") {
      window.location.replace("compare.html");
    }
  }
}

// Dedicated Compare Page Matrix
function initComparePage() {
  const container = document.getElementById("comparePageMatrix");
  if (!container) return;

  if (AppState.compareSchemeIds.length < 2) {
    AppState.compareSchemeIds = ["pm-kisan", "pmfby", "kcc"];
  }

  renderCompareMatrixPage();
}

function renderCompareMatrixPage() {
  const container = document.getElementById("comparePageMatrix");
  if (!container) return;

  const isHi = AppState.currentLang === 'hi';
  const selectedSchemes = AppState.compareSchemeIds.map(id => SCHEMES_DATA.find(x => x.id === id)).filter(Boolean);

  container.innerHTML = `
    <div style="margin-bottom: 24px; display: flex; flex-wrap: wrap; gap: 16px; align-items: center; justify-content: space-between; background: var(--color-surface); padding: 18px 22px; border-radius: var(--radius-md); border: 1px solid var(--color-surface-border);">
      <div>
        <h3 style="font-family: var(--font-serif); color: var(--color-primary); margin-bottom: 4px;">
          ${isHi ? "तुलना के लिए योजनाएं चुनें (अधिकतम 3)" : "Select Schemes to Compare (Max 3)"}
        </h3>
        <p style="font-size: 0.8125rem; color: var(--color-ink-muted);">
          ${isHi ? "विभिन्न मापदंडों पर सीधे तुलना करने के लिए ड्रॉपडाउन से चुनें।" : "Select any scheme to inspect subsidies, land limits, and procedures side-by-side."}
        </p>
      </div>
      <div style="display: flex; flex-wrap: gap; gap: 10px;">
        ${[0, 1, 2].map(idx => `
          <select onchange="updateCompareSlot(${idx}, this.value)" style="padding: 8px 12px; border-radius: var(--radius-sm); border: 1px solid var(--color-surface-border); background: var(--color-bg); font-size: 0.8125rem; font-family: inherit; font-weight: 500; color: var(--color-ink);">
            <option value="">${isHi ? "-- योजना " + (idx + 1) + " चुनें --" : "-- Select Scheme " + (idx + 1) + " --"}</option>
            ${SCHEMES_DATA.map(s => `
              <option value="${s.id}" ${selectedSchemes[idx] && selectedSchemes[idx].id === s.id ? 'selected' : ''}>
                ${s.code} - ${isHi ? s.nameHi : s.name}
              </option>
            `).join('')}
          </select>
        `).join('')}
      </div>
    </div>

    <div style="background: var(--color-surface); border-radius: var(--radius-lg); border: 1px solid var(--color-surface-border); overflow-x: auto; box-shadow: var(--shadow-sm);">
      <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.875rem;">
        <thead>
          <tr style="background: #F4F1EA; border-bottom: 2px solid var(--color-surface-border);">
            <th style="padding: 16px; width: 20%; color: var(--color-primary); font-size: 0.9375rem;">${isHi ? "मापदंड" : "Parameter"}</th>
            ${selectedSchemes.map(s => `
              <th style="padding: 16px; font-family: var(--font-serif); font-size: 1.15rem; color: var(--color-primary);">
                <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px;">
                  <span>${isHi ? s.nameHi : s.name}</span>
                  <span class="scheme-code-badge">${s.code}</span>
                </div>
              </th>
            `).join('')}
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid var(--color-surface-border);">
            <td style="padding: 14px 16px; font-weight: 600; color: var(--color-ink);">${isHi ? "जारीकर्ता संस्था" : "Issuing Authority"}</td>
            ${selectedSchemes.map(s => `<td style="padding: 14px 16px; color: var(--color-secondary); font-weight: 500;">🏛️ ${isHi ? s.issuingBodyHi : s.issuingBody}</td>`).join('')}
          </tr>
          <tr style="border-bottom: 1px solid var(--color-surface-border); background: #FAF8F2;">
            <td style="padding: 14px 16px; font-weight: 600; color: var(--color-ink);">${isHi ? "सब्सिडी / मुख्य लाभ" : "Subsidy / Benefit"}</td>
            ${selectedSchemes.map(s => `<td style="padding: 14px 16px; font-family: var(--font-mono); font-weight: 700; color: var(--color-primary); font-size: 0.95rem;">${isHi ? (s.subsidyHighlightHi || translateSubsidy(s.subsidyHighlight)) : s.subsidyHighlight}</td>`).join('')}
          </tr>
          <tr style="border-bottom: 1px solid var(--color-surface-border);">
            <td style="padding: 14px 16px; font-weight: 600; color: var(--color-ink);">${isHi ? "पात्र भूमि आकार" : "Eligible Landholding"}</td>
            ${selectedSchemes.map(s => `<td style="padding: 14px 16px;">${s.minLand} - ${s.maxLand >= 999 ? (isHi ? 'कोई ऊपरी सीमा नहीं' : 'No upper limit') : s.maxLand + (isHi ? ' हेक्टेयर' : ' Hectares')}</td>`).join('')}
          </tr>
          <tr style="border-bottom: 1px solid var(--color-surface-border); background: #FAF8F2;">
            <td style="padding: 14px 16px; font-weight: 600; color: var(--color-ink);">${isHi ? "लक्षित लाभार्थी" : "Target Beneficiaries"}</td>
            ${selectedSchemes.map(s => `<td style="padding: 14px 16px; color: var(--color-ink-muted);">${isHi ? (s.targetBeneficiaryHi || translateTarget(s.targetBeneficiary)) : s.targetBeneficiary}</td>`).join('')}
          </tr>
          <tr style="border-bottom: 1px solid var(--color-surface-border);">
            <td style="padding: 14px 16px; font-weight: 600; color: var(--color-ink);">${isHi ? "आवश्यक दस्तावेज़" : "Required Documents"}</td>
            ${selectedSchemes.map(s => {
              const docs = (isHi && s.documentsHi) ? s.documentsHi : s.documents.map(d => isHi ? (DOCS_HI_MAP[d] || d) : d);
              return `<td style="padding: 14px 16px;"><ul style="padding-left: 18px; margin: 0; color: var(--color-ink-muted);">${docs.map(d => `<li style="margin-bottom: 4px;">${d}</li>`).join('')}</ul></td>`;
            }).join('')}
          </tr>
          <tr style="border-bottom: 1px solid var(--color-surface-border); background: #FAF8F2;">
            <td style="padding: 14px 16px; font-weight: 600; color: var(--color-ink);">${isHi ? "आवेदन के मुख्य चरण" : "Procedure Steps"}</td>
            ${selectedSchemes.map(s => {
              const proc = (isHi && s.procedureHi) ? s.procedureHi : s.procedure;
              return `<td style="padding: 14px 16px;"><ol style="padding-left: 18px; margin: 0; color: var(--color-ink-muted);">${proc.slice(0, 3).map(p => `<li style="margin-bottom: 4px;"><strong>${p.title}:</strong> ${p.desc}</li>`).join('')}</ol></td>`;
            }).join('')}
          </tr>
          <tr style="border-bottom: 1px solid var(--color-surface-border);">
            <td style="padding: 14px 16px; font-weight: 600; color: var(--color-ink);">${isHi ? "प्रमाण दिशानिर्देश" : "Proof Guidelines"}</td>
            ${selectedSchemes.map(s => {
              const doc = (s.officialDocuments && s.officialDocuments.length > 0) ? s.officialDocuments[0] : null;
              if (doc) {
                return `<td style="padding: 14px 16px;">
                  <a href="${doc.url}" target="_blank" rel="noopener noreferrer" class="card-proof-btn" style="text-decoration: none; padding: 7px 12px;" title="${doc.title}">
                    📄 ${isHi ? 'दिशानिर्देश PDF ↗' : 'Guidelines PDF ↗'}
                  </a>
                </td>`;
              }
              return `<td style="padding: 14px 16px; color: var(--color-ink-muted);">-</td>`;
            }).join('')}
          </tr>
          <tr style="background: #FAF8F2;">
            <td style="padding: 14px 16px; font-weight: 600; color: var(--color-ink);">${isHi ? "कार्रवाई" : "Actions"}</td>
            ${selectedSchemes.map(s => {
              const doc = (s.officialDocuments && s.officialDocuments.length > 0) ? s.officialDocuments[0] : null;
              return `
              <td style="padding: 14px 16px;">
                <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                  <button class="card-view-btn" onclick="openSchemeDetail('${s.id}')" style="font-size: 0.8125rem;">
                    ${isHi ? "विवरण देखें" : "View Details"}
                  </button>
                  ${doc ? `
                    <a href="${doc.url}" target="_blank" rel="noopener noreferrer" class="btn-outline" style="font-size: 0.8125rem; padding: 6px 10px; text-decoration: none; border-color: var(--color-primary); color: var(--color-primary); font-weight: 600;">
                      📄 ${isHi ? "दिशानिर्देश ↗" : "Guidelines ↗"}
                    </a>
                  ` : ''}
                  <a href="${s.officialUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="font-size: 0.8125rem; padding: 7px 12px;">
                    ${isHi ? "पोर्टल ↗" : "Official Portal ↗"}
                  </a>
                </div>
              </td>
            `;}).join('')}
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

function updateCompareSlot(slotIdx, schemeId) {
  if (!schemeId) {
    if (AppState.compareSchemeIds.length > slotIdx) {
      AppState.compareSchemeIds.splice(slotIdx, 1);
    }
  } else {
    AppState.compareSchemeIds[slotIdx] = schemeId;
  }
  renderCompareMatrixPage();
  updateCompareStickyBar();
}

// Hero Live Stats Counter
function renderHeroStats() {
  const elSchemes = document.getElementById("heroStatSchemes");
  if (elSchemes) elSchemes.textContent = SCHEMES_DATA.length + "+";
  const elSubsidies = document.getElementById("heroStatSubsidies");
  if (elSubsidies) elSubsidies.textContent = "Up to 80%";
  const elStates = document.getElementById("heroStatStates");
  if (elStates) elStates.textContent = "All 28 States";
}

// Toast Notifications
function showToast(message) {
  let toast = document.getElementById("appToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "appToast";
    toast.style.cssText = `
      position: fixed;
      top: 24px;
      right: 24px;
      background: var(--color-primary-dark);
      color: var(--color-white);
      padding: 12px 20px;
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-xl);
      z-index: 1100;
      font-size: 0.875rem;
      font-weight: 500;
      transition: opacity 0.3s ease, transform 0.3s ease;
      opacity: 0;
      transform: translateY(-10px);
      border-left: 4px solid var(--color-accent);
    `;
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.style.opacity = "1";
  toast.style.transform = "translateY(0)";

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(-10px)";
  }, 2800);
}

// Search and UI Event Listeners
function initEventListeners() {
  // Main Hero Search Input
  const heroSearchInput = document.getElementById("heroSearchInput");
  const heroAutoSuggest = document.getElementById("heroAutoSuggest");

  if (heroSearchInput && heroAutoSuggest) {
    heroSearchInput.addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (!q) {
        heroAutoSuggest.classList.remove("active");
        return;
      }

      const matches = SCHEMES_DATA.filter(s => 
        s.name.toLowerCase().includes(q) || 
        s.tagline.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q)
      ).slice(0, 5);

      if (matches.length > 0) {
        heroAutoSuggest.innerHTML = matches.map(m => `
          <div class="suggest-item" onclick="openSchemeDetail('${m.id}')">
            <span class="suggest-title">${m.name}</span>
            <span class="suggest-cat">${m.category}</span>
          </div>
        `).join('');
        heroAutoSuggest.classList.add("active");
      } else {
        heroAutoSuggest.classList.remove("active");
      }
    });

    document.addEventListener("click", (e) => {
      if (!heroSearchInput.contains(e.target)) {
        heroAutoSuggest.classList.remove("active");
      }
    });
  }

  // Catalog Sub-Search Input
  const subSearchInput = document.getElementById("subSearchInput");
  if (subSearchInput) {
    subSearchInput.addEventListener("input", (e) => {
      AppState.searchQuery = e.target.value;
      renderSchemesCatalog();
    });
  }

  // Authority filter
  const authFilter = document.getElementById("authorityFilter");
  if (authFilter) {
    authFilter.addEventListener("change", (e) => {
      AppState.authorityFilter = e.target.value;
      renderSchemesCatalog();
    });
  }

  // Sort by
  const sortFilter = document.getElementById("sortByFilter");
  if (sortFilter) {
    sortFilter.addEventListener("change", (e) => {
      AppState.sortBy = e.target.value;
      renderSchemesCatalog();
    });
  }
}

// Expose functions to global scope
window.setCategory = setCategory;
window.toggleSaveScheme = toggleSaveScheme;
window.toggleCompareScheme = toggleCompareScheme;
window.openCompareModal = openCompareModal;
window.closeCompareModal = closeCompareModal;
window.openSchemeDetail = openSchemeDetail;
window.closeSchemeModal = closeSchemeModal;
window.toggleLanguage = toggleLanguage;
window.nextWizardStep = nextWizardStep;
window.prevWizardStep = prevWizardStep;
window.setWizardStep = setWizardStep;
window.saveAllMatchedSchemes = saveAllMatchedSchemes;
window.updateSchemeKanbanStatus = updateSchemeKanbanStatus;
window.resetFilters = resetFilters;
window.updateCompareSlot = updateCompareSlot;
window.renderCSCLocations = renderCSCLocations;
window.highlightActiveSideNav = highlightActiveSideNav;
window.initHamburgerMenu = initHamburgerMenu;
window.initAuthNav = initAuthNav;
window.TRANSLATIONS = TRANSLATIONS;
window.applyTranslations = applyTranslations;

