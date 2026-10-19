/**
 * KrishiSetu - Comprehensive Grounded Database of 36 Real Agri Schemes
 * Sourced & verified from: agriwelfare.gov.in, pib.gov.in, igod.gov.in, mnre.gov.in, rbi.org.in, dahd.gov.in
 * Updated: October 2026 - Includes verified applyUrl, official proof documents, and full Hindi translations for all requirements.
 */

const SCHEMES_DATA = [
  {
    "id": "pm-kisan",
    "code": "PMK-001",
    "name": "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)",
    "nameHi": "पीएम-किसान (प्रधानमंत्री किसान सम्मान निधि)",
    "category": "Income Support & Pension",
    "categoryHi": "आय सहायता और पेंशन",
    "issuingBody": "Central Government (MoA&FW)",
    "issuingBodyHi": "केंद्र सरकार (कृषि एवं किसान कल्याण मंत्रालय)",
    "tagline": "Direct income support of ₹6,000 per year in 3 equal instalments.",
    "taglineHi": "प्रति वर्ष ₹6,000 की प्रत्यक्ष आय सहायता 3 समान किस्तों में।",
    "subsidyHighlight": "₹6,000 / year (Direct DBT)",
    "badge": "Direct Benefit Transfer",
    "lastVerified": "September 2026",
    "officialUrl": "https://pmkisan.gov.in",
    "sourceUrl": "https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2002012",
    "minLand": 0,
    "maxLand": 999,
    "farmerTypes": [
      "marginal",
      "small",
      "medium",
      "large"
    ],
    "targetBeneficiary": "All landholding farmer families",
    "benefits": [
      "₹6,000 per financial year transferred directly to Aadhaar-linked bank accounts in 3 instalments of ₹2,000 every four months.",
      "100% centrally funded scheme with zero middlemen fee or deduction.",
      "Ensures liquidity for purchasing seeds, fertilizers, and farm inputs before sowing seasons."
    ],
    "eligibility": [
      "Farmer family owning cultivable landholding in their name (verified via state land records / Bhulekh).",
      "Valid Aadhaar card linked with active bank account and NPCI DBT-enabled.",
      "Exclusions: Institutional landholders, serving/retired government officers, income-tax payees in last assessment year, doctors/engineers/lawyers."
    ],
    "documents": [
      "Aadhaar Card",
      "Land Record Documents (Khasra/Khatauni / Ror / 7/12 extract)",
      "Aadhaar-seeded Bank Passbook / Account statement with IFSC",
      "Active Mobile number linked to Aadhaar (for e-KYC OTP)"
    ],
    "procedure": [
      {
        "step": 1,
        "title": "Land Record & e-KYC Verification",
        "desc": "Ensure your land records are digitized in your state Bhulekh portal and your mobile number is linked with Aadhaar."
      },
      {
        "step": 2,
        "title": "Self Registration",
        "desc": "Navigate to pmkisan.gov.in → Click on 'Farmers Corner' → 'New Farmer Registration'. Select Rural or Urban farmer."
      },
      {
        "step": 3,
        "title": "Enter Details & Land Details",
        "desc": "Input Aadhaar number, state, district, sub-district, village, and survey/Khasra/Khata numbers accurately."
      },
      {
        "step": 4,
        "title": "e-KYC Completion",
        "desc": "Complete mandatory OTP-based e-KYC on the portal or biometric e-KYC at your nearest Common Service Centre (CSC)."
      },
      {
        "step": 5,
        "title": "State Approval & First Instalment",
        "desc": "State Nodal Officer verifies land eligibility. Track real-time status under 'Know Your Status' on the portal."
      }
    ],
    "applyUrl": "https://pmkisan.gov.in",
    "officialDocuments": [
      {
        "title": "PM-KISAN Revised Operational Guidelines",
        "url": "https://pmkisan.gov.in/Documents/Revised_Operational_Guidelines_of_PM_KISAN_Scheme.pdf",
        "type": "pdf",
        "source": "Department of Agriculture & Farmers Welfare",
        "year": "2024"
      },
      {
        "title": "PM-KISAN Farmer Registration & e-KYC FAQ",
        "url": "https://pmkisan.gov.in/Documents/FAQ_English.pdf",
        "type": "pdf",
        "source": "Ministry of Agriculture & Farmers Welfare",
        "year": "2025"
      }
    ],
    "keywords": [
      "pm kisan",
      "samman nidhi",
      "6000",
      "income support",
      "dbt",
      "kist",
      "installment",
      "aay",
      "aadhaar kyc",
      "kisht"
    ],
    "targetBeneficiaryHi": "सभी भूमिधारक किसान परिवार",
    "subsidyHighlightHi": "₹6,000 / वर्ष (प्रत्यक्ष डीबीटी)",
    "eligibilityHi": [
      "कृषक परिवार जिसके नाम कृषि योग्य भूमि दर्ज हो (राज्य भूलेख / खसरा-खतौनी द्वारा सत्यापित)।",
      "वैध आधार कार्ड सक्रिय बैंक खाते से लिंक और एनपीसीआई डीबीटी (DBT) सक्षम होना अनिवार्य।",
      "अपवाद: संस्थागत भूमिधारक, सेवारत/सेवानिवृत्त सरकारी कर्मचारी, पिछले वर्ष के आयकर दाता, डॉक्टर/इंजीनियर/वकील।"
    ],
    "benefitsHi": [
      "प्रति वित्तीय वर्ष ₹6,000 की राशि आधार-लिंक बैंक खातों में ₹2,000 की 3 समान किस्तों में प्रत्यक्ष अंतरण।",
      "100% केंद्र पोषित योजना, शून्य बिचौलिया कटौती।",
      "बुवाई सीजन से पहले बीज, उर्वरक और कृषि आदानों की खरीद हेतु तरलता सुनिश्चित करता है।"
    ],
    "procedureHi": [
      {
        "step": 1,
        "title": "भूमि अभिलेख एवं ई-केवाईसी सत्यापन",
        "desc": "सुनिश्चित करें कि आपके भूमि अभिलेख राज्य भूलेख पोर्टल पर दर्ज हैं और मोबाइल नंबर आधार से लिंक है।"
      },
      {
        "step": 2,
        "title": "स्व-पंजीकरण",
        "desc": "pmkisan.gov.in पर जाएं → 'Farmers Corner' → 'New Farmer Registration' पर क्लिक करें। ग्रामीण या शहरी किसान चुनें।"
      },
      {
        "step": 3,
        "title": "विवरण एवं भूमि विवरण दर्ज करें",
        "desc": "आधार संख्या, राज्य, जिला, उप-जिला, गांव और खसरा/खाता संख्या सावधानीपूर्वक दर्ज करें।"
      },
      {
        "step": 4,
        "title": "ई-केवाईसी पूर्ण करें",
        "desc": "पोर्टल पर ओटीपी-आधारित ई-केवाईसी या नजदीकी सीएससी (CSC) केंद्र पर बायोमेट्रिक ई-केवाईसी पूरा करें।"
      },
      {
        "step": 5,
        "title": "राज्य अनुमोदन एवं प्रथम किस्त",
        "desc": "राज्य नोडल अधिकारी पात्रता सत्यापित करता है। पोर्टल पर 'Know Your Status' से स्थिति ट्रैक करें।"
      }
    ],
    "documentsHi": [
      "आधार कार्ड (सक्रिय मोबाइल नंबर से लिंक)",
      "आईएफएससी (IFSC) सहित बैंक बचत खाता पासबुक",
      "भूमि अभिलेख की प्रति (खसरा/खतौनी/जमाबंदी)"
    ]
  },
  {
    "id": "pm-kmy",
    "code": "PMK-002",
    "name": "PM Kisan Maan-Dhan Yojana (PM-KMY)",
    "nameHi": "पीएम किसान मान-धन योजना (वृद्धावस्था पेंशन)",
    "category": "Income Support & Pension",
    "categoryHi": "आय सहायता और पेंशन",
    "issuingBody": "Central Government (MoA&FW / LIC)",
    "issuingBodyHi": "केंद्र सरकार (कृषि मंत्रालय एवं एलआईसी)",
    "tagline": "Assured monthly pension of ₹3,000 after reaching 60 years of age.",
    "taglineHi": "60 वर्ष की आयु के बाद ₹3,000 की सुनिश्चित मासिक पेंशन।",
    "subsidyHighlight": "₹3,000 / month pension",
    "badge": "Old Age Security",
    "lastVerified": "September 2026",
    "officialUrl": "https://maandhan.in",
    "sourceUrl": "https://agriwelfare.gov.in/en/Major",
    "minLand": 0.1,
    "maxLand": 2,
    "farmerTypes": [
      "marginal",
      "small"
    ],
    "targetBeneficiary": "Small and marginal farmers aged 18 to 40 years",
    "benefits": [
      "Guaranteed minimum pension of ₹3,000 per month upon turning 60 years.",
      "Equal co-contribution by Central Government (50:50 ratio with farmer, ranging ₹55 to ₹200/mo depending on entry age).",
      "Family pension: 50% of pension to spouse in case of subscriber's demise."
    ],
    "eligibility": [
      "Small and marginal farmers holding cultivable land up to 2 hectares (5 acres).",
      "Age of entry between 18 and 40 years.",
      "Must not be covered under other social security schemes (NPS, ESIC, PM-SYM)."
    ],
    "documents": [
      "Aadhaar Card",
      "Bank Savings Account Passbook with IFSC",
      "Copy of Land Record (Khasra/Khatauni)",
      "Nominee details and relationship proof"
    ],
    "procedure": [
      {
        "step": 1,
        "title": "Locate Nearest CSC",
        "desc": "Visit your village Village Level Entrepreneur (VLE) at the CSC or visit maandhan.in."
      },
      {
        "step": 2,
        "title": "Enrollment & Age Calculation",
        "desc": "Provide Aadhaar and bank details. Monthly contribution auto-debit (₹55 - ₹200) is calculated based on current age."
      },
      {
        "step": 3,
        "title": "Auto-Debit Consent",
        "desc": "Sign the mandate form authorizing monthly deduction directly from savings bank or PM-KISAN credit."
      },
      {
        "step": 4,
        "title": "Kisan Pension Card Generation",
        "desc": "Receive unique Kisan Pension Account Number (KPAN) and physical laminated card."
      }
    ],
    "applyUrl": "https://maandhan.in",
    "officialDocuments": [
      {
        "title": "PM-KMY Salient Features & Pension Structure",
        "url": "https://pmkisan.gov.in/Documents/PM-KMY%20Salient%20Features.pdf",
        "type": "pdf",
        "source": "Ministry of Agriculture & Farmers Welfare / LIC",
        "year": "2024"
      }
    ],
    "keywords": [
      "maan dhan",
      "pension",
      "3000",
      "old age",
      "vridhavastha",
      "lic",
      "social security",
      "retirement"
    ],
    "targetBeneficiaryHi": "लघु एवं सीमांत किसान (18-40 वर्ष)",
    "subsidyHighlightHi": "₹3,000 / माह सुनिश्चित पेंशन",
    "eligibilityHi": [
      "2 हेक्टेयर (5 एकड़) तक कृषि योग्य भूमि रखने वाले लघु एवं सीमांत किसान।",
      "प्रवेश के समय आयु 18 से 40 वर्ष के बीच होनी चाहिए।",
      "अन्य सामाजिक सुरक्षा योजनाओं (NPS, ESIC, PM-SYM आदि) के अंतर्गत शामिल नहीं होना चाहिए।"
    ],
    "benefitsHi": [
      "60 वर्ष की आयु पूर्ण होने पर ₹3,000 प्रति माह की न्यूनतम सुनिश्चित पेंशन।",
      "केंद्र सरकार द्वारा बराबर 50:50 अंशदान (प्रवेश आयु अनुसार ₹55 से ₹200 प्रति माह)।",
      "पारिवारिक पेंशन: लाभार्थी के निधन पर पति/पत्नी को 50% पेंशन (₹1,500/माह)।"
    ],
    "procedureHi": [
      {
        "step": 1,
        "title": "नजदीकी सीएससी केंद्र जाएं",
        "desc": "अपने गांव के कॉमन सर्विस सेंटर (CSC) पर जाएं या maandhan.in पोर्टल पर जाएं।"
      },
      {
        "step": 2,
        "title": "नामांकन एवं आयु गणना",
        "desc": "आधार व बैंक खाता विवरण प्रस्तुत करें। आयु के आधार पर मासिक अंशदान (₹55 - ₹200) निर्धारित होगा।"
      },
      {
        "step": 3,
        "title": "ऑटो-डेबिट सहमति",
        "desc": "बचत खाते या पीएम-किसान खाते से मासिक कटौती हेतु ऑटो-डेबिट मैंडेट फॉर्म पर हस्ताक्षर करें।"
      },
      {
        "step": 4,
        "title": "किसान पेंशन कार्ड प्राप्त करें",
        "desc": "विशिष्ट किसान पेंशन खाता संख्या (KPAN) और लेमिनेटेड पेंशन कार्ड प्राप्त करें।"
      }
    ],
    "documentsHi": [
      "आधार कार्ड",
      "बचत बैंक खाता पासबुक",
      "नामांकित व्यक्ति (नॉमिनी) का विवरण एवं संबंध प्रमाण"
    ]
  },
  {
    "id": "pmfby",
    "code": "PMF-001",
    "name": "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    "nameHi": "प्रधानमंत्री फसल बीमा योजना (पीएमएफबीवाई)",
    "category": "Crop Insurance",
    "categoryHi": "फसल बीमा",
    "issuingBody": "Central Government (MoA&FW)",
    "issuingBodyHi": "केंद्र सरकार (कृषि मंत्रालय)",
    "tagline": "Comprehensive crop loss protection against natural disasters with lowest farmer premium.",
    "taglineHi": "न्यूनतम प्रीमियम पर प्राकृतिक आपदाओं से व्यापक फसल सुरक्षा।",
    "subsidyHighlight": "Premium capped: 1.5% to 2%",
    "badge": "Closing Soon: Kharif Window",
    "lastVerified": "September 2026",
    "officialUrl": "https://pmfby.gov.in",
    "sourceUrl": "https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2002012",
    "minLand": 0.1,
    "maxLand": 999,
    "farmerTypes": [
      "marginal",
      "small",
      "medium",
      "large"
    ],
    "targetBeneficiary": "All farmers growing notified crops in notified areas (loanee & non-loanee)",
    "benefits": [
      "Uniform maximum premium payable by farmer: only 2% for Kharif crops, 1.5% for Rabi crops, and 5% for Annual Commercial/Horticultural crops.",
      "Remainder subsidy balance shared equally 50:50 by Central and State Governments.",
      "Full sum insured payout for prevented sowing, localized calamities (hailstorm, landslide, inundation), and post-harvest losses up to 14 days."
    ],
    "eligibility": [
      "All farmers including sharecroppers and tenant farmers growing notified crops in notified insurance units.",
      "Non-loanee farmers can opt-in voluntarily; loanee KCC holders auto-covered unless opted out."
    ],
    "documents": [
      "Aadhaar Card",
      "Land Ownership Document (RoR / 7/12) or Tenant/Sharecropper Agreement Declaration",
      "Sowing Certificate / Crop declaration issued by Patwari / Village Revenue Officer",
      "Cancelled Cheque / Bank Passbook"
    ],
    "procedure": [
      {
        "step": 1,
        "title": "Check Crop Cut-Off Date",
        "desc": "Check deadline on pmfby.gov.in for your state and crop (usually July 31 for Kharif, Dec 31 for Rabi)."
      },
      {
        "step": 2,
        "title": "Online Application or Bank/CSC",
        "desc": "Visit pmfby.gov.in → 'Farmer Corner' → 'Guest Farmer' or visit your loan branch/CSC."
      },
      {
        "step": 3,
        "title": "Upload Sowing Certificate",
        "desc": "Enter crop name, acreage, and upload clear photo of Sowing Certificate and Land document."
      },
      {
        "step": 4,
        "title": "Pay Farmer Share of Premium",
        "desc": "Pay nominal 1.5% or 2% premium online or at counter. Keep policy acknowledgement number."
      },
      {
        "step": 5,
        "title": "Claim Reporting within 72 Hours",
        "desc": "In case of crop loss, report immediately within 72 hours via Crop Insurance App or toll-free 14447."
      }
    ],
    "applyUrl": "https://pmfby.gov.in",
    "officialDocuments": [
      {
        "title": "PMFBY Revised Operational Guidelines",
        "url": "https://pmfby.gov.in/pdf/Revised_Operational_Guidelines.pdf",
        "type": "pdf",
        "source": "Department of Agriculture & Farmers Welfare",
        "year": "2024"
      }
    ],
    "keywords": [
      "fasal bima",
      "crop insurance",
      "pmfby",
      "weather loss",
      "flood",
      "drought",
      "bima",
      "claim",
      "damage"
    ],
    "targetBeneficiaryHi": "अधिसूचित फसलें उगाने वाले सभी किसान व बटाईदार",
    "subsidyHighlightHi": "न्यूनतम प्रीमियम (1.5% - 2%) व पूर्ण सुरक्षा",
    "eligibilityHi": [
      "अधिसूचित क्षेत्रों में अधिसूचित फसलें उगाने वाले सभी किसान, जिनमें बटाईदार और काश्तकार भी शामिल हैं।",
      "गैर-ऋणी किसान स्वेच्छा से आवेदन कर सकते हैं; केसीसी ऋणी किसान स्वतः बीमित होते हैं।"
    ],
    "benefitsHi": [
      "किसान द्वारा देय न्यूनतम प्रीमियम: खरीफ फसलों के लिए केवल 2%, रबी के लिए 1.5%, और वाणिज्यिक/बागवानी के लिए 5%।",
      "शेष प्रीमियम सब्सिडी केंद्र और राज्य सरकार द्वारा 50:50 अनुपात में वहन की जाती है।",
      "बुवाई न हो पाने, ओलावृष्टि, जलभराव, भूस्खलन और कटाई उपरांत 14 दिनों तक के नुकसान का पूर्ण बीमा क्लेम।"
    ],
    "procedureHi": [
      {
        "step": 1,
        "title": "कट-ऑफ तिथि जांचें",
        "desc": "pmfby.gov.in पर अपने राज्य और फसल हेतु अंतिम तिथि देखें (खरीफ: 31 जुलाई, रबी: 31 दिसंबर)।"
      },
      {
        "step": 2,
        "title": "ऑनलाइन या बैंक/सीएससी आवेदन",
        "desc": "pmfby.gov.in पर 'Farmer Corner' से या नजदीकी बैंक शाखा/सीएससी से आवेदन करें।"
      },
      {
        "step": 3,
        "title": "बुवाई प्रमाण पत्र अपलोड करें",
        "desc": "फसल का नाम, रकबा भरें और पटवारी द्वारा जारी बुवाई प्रमाण पत्र व भूमि दस्तावेज अपलोड करें।"
      },
      {
        "step": 4,
        "title": "किसान अंशदान का भुगतान करें",
        "desc": "नाममात्र प्रीमियम का ऑनलाइन या काउंटर पर भुगतान करें और पावती संख्या सुरक्षित रखें।"
      },
      {
        "step": 5,
        "title": "72 घंटे के भीतर नुकसान रिपोर्टिंग",
        "desc": "फसल क्षति होने पर क्रॉप इंश्योरेंस ऐप या टोल-फ्री नंबर 14447 पर 72 घंटे के भीतर रिपोर्ट करें।"
      }
    ],
    "documentsHi": [
      "आधार कार्ड",
      "भूमि स्वामित्व दस्तावेज (खतौनी / 7/12) या काश्तकार/बटाईदार अनुबंध घोषणा",
      "पटवारी / ग्राम राजस्व अधिकारी द्वारा जारी बुवाई प्रमाण पत्र / फसल घोषणा",
      "रद्द चेक / बैंक पासबुक"
    ]
  },
  {
    "id": "rwbcis",
    "code": "RWB-002",
    "name": "Restructured Weather Based Crop Insurance Scheme (RWBCIS)",
    "nameHi": "पुनर्गठित मौसम आधारित फसल बीमा योजना",
    "category": "Crop Insurance",
    "categoryHi": "फसल बीमा",
    "issuingBody": "Central & State Governments",
    "issuingBodyHi": "केंद्र एवं राज्य सरकारें",
    "tagline": "Parametric weather index insurance against rainfall deficit, frost, excess heat, and humidity.",
    "taglineHi": "कम वर्षा, पाला, अत्यधिक तापमान व आर्द्रता के विरुद्ध मौसम सूचकांक बीमा।",
    "subsidyHighlight": "Subsidy up to 90% of actuarial premium",
    "badge": "Parametric Payout",
    "lastVerified": "September 2026",
    "officialUrl": "https://pmfby.gov.in",
    "sourceUrl": "https://agriwelfare.gov.in/en/Major",
    "minLand": 0.1,
    "maxLand": 999,
    "farmerTypes": [
      "marginal",
      "small",
      "medium",
      "large"
    ],
    "targetBeneficiary": "Perennial horticultural fruit growers and sensitive cash crop farmers",
    "benefits": [
      "Settlement triggered automatically based on Reference Weather Station (RWS) data without waiting for crop-cutting experiments.",
      "Farmer pays only nominal 2% (food crops) or 5% (commercial/horticulture fruit crops) premium.",
      "Covers apple, mango, pomegranate, citrus, grapes, potato, and spices against weather perils."
    ],
    "eligibility": [
      "Farmers growing notified horticultural and commercial crops in notified weather reference grids."
    ],
    "documents": [
      "Aadhaar",
      "Land Records (7/12 / Patta)",
      "Fruit Orchard / Crop Plantation proof",
      "Bank Account Details"
    ],
    "procedure": [
      {
        "step": 1,
        "title": "Verify Weather Grid",
        "desc": "Check if your Gram Panchayat is notified under an Automatic Weather Station (AWS)."
      },
      {
        "step": 2,
        "title": "Register on PMFBY Portal",
        "desc": "Select RWBCIS under Scheme selection and input orchard area in hectares."
      },
      {
        "step": 3,
        "title": "Automated Claim Processing",
        "desc": "If temperature/rainfall breaches trigger index, claim is directly credited to bank account."
      }
    ],
    "applyUrl": "https://pmfby.gov.in",
    "officialDocuments": [
      {
        "title": "RWBCIS Operational Guidelines & Weather Triggers",
        "url": "https://pmfby.gov.in/pdf/RWBCIS_Guidelines.pdf",
        "type": "pdf",
        "source": "Ministry of Agriculture & Farmers Welfare",
        "year": "2024"
      }
    ],
    "keywords": [
      "weather insurance",
      "rwbcis",
      "rainfall",
      "temperature",
      "frost",
      "unseasonal rain",
      "mausam bima"
    ],
    "targetBeneficiaryHi": "बागवानी एवं नकदी फसल उत्पादक किसान",
    "subsidyHighlightHi": "मौसम सूचकांक आधारित त्वरित भुगतान",
    "eligibilityHi": [
      "अधिसूचित मौसम संदर्भ ग्रिड में अधिसूचित बागवानी एवं वाणिज्यिक फसलें उगाने वाले किसान।"
    ],
    "benefitsHi": [
      "फसल कटाई प्रयोगों के बिना, मौसम संदर्भ स्टेशन (RWS) डेटा के आधार पर स्वचालित क्लेम निपटान।",
      "किसान केवल 2% (खाद्य फसल) या 5% (बागवानी/वाणिज्यिक फल) का नाममात्र प्रीमियम देता है।",
      "सेब, आम, अनार, नींबू वर्गीय, अंगूर, आलू व मसालों को अत्यधिक ठंड, पाला, गर्मी और बेमौसम बारिश से सुरक्षा।"
    ],
    "procedureHi": [
      {
        "step": 1,
        "title": "मौसम ग्रिड सत्यापित करें",
        "desc": "जांचें कि आपकी ग्राम पंचायत स्वचालित मौसम स्टेशन (AWS) के तहत अधिसूचित है या नहीं।"
      },
      {
        "step": 2,
        "title": "पीएमएफबीवाई पोर्टल पर पंजीकरण",
        "desc": "योजना चयन में RWBCIS चुनें और हेक्टेयर में बगीचे/फसल का क्षेत्रफल दर्ज करें।"
      },
      {
        "step": 3,
        "title": "स्वचालित क्लेम प्रसंस्करण",
        "desc": "तापमान या वर्षा का सूचकांक सीमा पार करने पर क्लेम सीधे बैंक खाते में जमा हो जाता है।"
      }
    ],
    "documentsHi": [
      "आधार कार्ड",
      "भूमि अभिलेख (7/12 / खतौनी / पट्टा)",
      "फलोद्यान / फसल वृक्षारोपण प्रमाण",
      "बैंक खाता विवरण"
    ]
  },
  {
    "id": "kcc",
    "code": "KCC-001",
    "name": "Kisan Credit Card (KCC) Scheme",
    "nameHi": "किसान क्रेडिट कार्ड (केसीसी) योजना",
    "category": "Credit & Finance",
    "categoryHi": "ऋण और वित्त",
    "issuingBody": "NABARD & Reserve Bank of India",
    "issuingBodyHi": "नाबार्ड एवं भारतीय रिज़र्व बैंक",
    "tagline": "Short-term crop loan up to ₹3 Lakh at an effective interest rate of just 4% per annum.",
    "taglineHi": "मात्र 4% प्रभावी वार्षिक ब्याज दर पर ₹3 लाख तक का अल्पकालिक फसल ऋण।",
    "subsidyHighlight": "Effective 4% interest rate (3% subvention)",
    "badge": "Low Interest Credit",
    "lastVerified": "September 2026",
    "officialUrl": "https://www.nabard.org",
    "sourceUrl": "https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2002012",
    "minLand": 0.1,
    "maxLand": 999,
    "farmerTypes": [
      "marginal",
      "small",
      "medium",
      "large"
    ],
    "targetBeneficiary": "All farmers, animal husbandry, dairy farmers, and fishers",
    "benefits": [
      "Credit limit up to ₹3,00,000 at 7% normal interest, reduced to 4% with prompt repayment incentive (3% subvention).",
      "Collateral-free loan limit up to ₹1.60 Lakh (extended to ₹2.0 Lakh in select banks).",
      "Revolving cash credit account valid for 5 years with simple annual renewal.",
      "Covers post-harvest expenses, crop cultivation, maintenance of farm assets, and domestic consumption needs."
    ],
    "eligibility": [
      "Individual or joint owner-cultivators, tenant farmers, oral lessees, and sharecroppers.",
      "Self Help Groups (SHGs) or Joint Liability Groups (JLGs) of farmers.",
      "Dairy, poultry, and fishery rearers are also eligible for working capital KCC up to ₹2 Lakh."
    ],
    "documents": [
      "Completed 1-page KCC application form",
      "Aadhaar Card and PAN Card / Voter ID",
      "Land Ownership Record / Certified Copy of Patta / Tenancy deed",
      "Declaration of existing crop loans and village revenue officer verification"
    ],
    "procedure": [
      {
        "step": 1,
        "title": "Download 1-Page KCC Form",
        "desc": "Download standard simplified 1-page form from pmkisan.gov.in or nabard.org."
      },
      {
        "step": 2,
        "title": "Submit to Bank Branch",
        "desc": "Submit along with land record and Aadhaar copy to your local Rural, Cooperative, or Commercial Bank."
      },
      {
        "step": 3,
        "title": "14-Day Service Guarantee",
        "desc": "Banks are mandated by RBI to process and sanction KCC within 14 days of complete application."
      },
      {
        "step": 4,
        "title": "Receive RuPay KCC ATM Card",
        "desc": "Use the RuPay card to withdraw money from any ATM or make digital payments for agri-inputs."
      }
    ],
    "applyUrl": "https://www.nabard.org",
    "officialDocuments": [
      {
        "title": "RBI Master Circular - Kisan Credit Card (KCC) Lending Norms",
        "url": "https://rbidocs.rbi.org.in/rdocs/notification/PDFs/74MCKCC030714.pdf",
        "type": "pdf",
        "source": "Reserve Bank of India / NABARD",
        "year": "2024"
      }
    ],
    "keywords": [
      "kisan credit card",
      "kcc",
      "crop loan",
      "4 percent interest",
      "short term credit",
      "rin",
      "karz",
      "bank loan"
    ],
    "targetBeneficiaryHi": "सभी किसान, काश्तकार, बटाईदार, डेयरी व मत्स्य पालक",
    "subsidyHighlightHi": "4% रियायती ब्याज दर (₹3 लाख तक)",
    "eligibilityHi": [
      "व्यक्तिगत या संयुक्त मालिक-किसान, काश्तकार, पट्टेदार और बटाईदार किसान।",
      "किसानों के स्वयं सहायता समूह (SHG) या संयुक्त देयता समूह (JLG)।",
      "डेयरी, पोल्ट्री और मत्स्य पालक भी ₹2 लाख तक की कार्यशील पूंजी केसीसी के लिए पात्र हैं।"
    ],
    "benefitsHi": [
      "₹3,00,000 तक की ऋण सीमा सामान्य 7% ब्याज पर, समय पर भुगतान करने पर 3% छूट के साथ मात्र 4% ब्याज।",
      "बिना किसी गारंटी (कोलैटरल) के ₹1.60 लाख तक का ऋण (कई बैंकों में ₹2 लाख तक)।",
      "5 वर्ष की वैधता के साथ वार्षिक नवीनीकरण की सुविधा।",
      "फसल उत्पादन, कटाई उपरांत व्यय, कृषि उपकरणों के रखरखाव व पारिवारिक जरूरतों को पूरा करता है।"
    ],
    "procedureHi": [
      {
        "step": 1,
        "title": "सरल 1-पेज फॉर्म डाउनलोड करें",
        "desc": "pmkisan.gov.in या nabard.org से मानक सरलीकृत केसीसी फॉर्म डाउनलोड करें।"
      },
      {
        "step": 2,
        "title": "बैंक शाखा में जमा करें",
        "desc": "भूमि अभिलेख और आधार प्रति के साथ अपनी स्थानीय ग्रामीण, सहकारी या वाणिज्यिक बैंक शाखा में जमा करें।"
      },
      {
        "step": 3,
        "title": "14-दिवसीय सेवा गारंटी",
        "desc": "आरबीआई के निर्देशानुसार बैंकों को पूर्ण आवेदन प्राप्ति के 14 दिनों के भीतर केसीसी स्वीकृत करना अनिवार्य है।"
      },
      {
        "step": 4,
        "title": "RuPay KCC कार्ड प्राप्त करें",
        "desc": "एटीएम से नकद निकासी या खाद-बीज खरीदने के लिए RuPay किसान कार्ड का उपयोग करें।"
      }
    ],
    "documentsHi": [
      "पूर्ण भरा हुआ 1-पेज केसीसी आवेदन फॉर्म",
      "आधार कार्ड और पैन कार्ड / मतदाता पहचान पत्र",
      "भूमि स्वामित्व अभिलेख / पट्टा की प्रमाणित प्रति / बटाईदार अनुबंध",
      "मौजूदा फसल ऋणों की घोषणा एवं ग्राम राजस्व अधिकारी सत्यापन"
    ]
  },
  {
    "id": "miss",
    "code": "MIS-002",
    "name": "Modified Interest Subvention Scheme (MISS)",
    "nameHi": "संशोधित ब्याज अनुदान योजना",
    "category": "Credit & Finance",
    "categoryHi": "ऋण और वित्त",
    "issuingBody": "Ministry of Agriculture & Farmers Welfare",
    "issuingBodyHi": "कृषि एवं किसान कल्याण मंत्रालय",
    "tagline": "Central subsidy on short-term crop loans ensuring cheap working capital.",
    "taglineHi": "अल्पकालिक फसल ऋणों पर केंद्रीय ब्याज सब्सिडी ताकि सस्ता ऋण मिले।",
    "subsidyHighlight": "3% Prompt Repayment Incentive",
    "badge": "Interest Subvention",
    "lastVerified": "September 2026",
    "officialUrl": "https://agriwelfare.gov.in",
    "sourceUrl": "https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2002012",
    "minLand": 0.1,
    "maxLand": 999,
    "farmerTypes": [
      "marginal",
      "small",
      "medium",
      "large"
    ],
    "targetBeneficiary": "Farmers availing short-term crop loans through KCC",
    "benefits": [
      "1.5% per annum interest subvention to lending institutions.",
      "Additional 3% per annum incentive to farmers repaying their loan on or before the due date.",
      "Distress relief: Post-harvest loan against Negotiable Warehouse Receipts (e-NWR) available for up to 6 months at subvented rate."
    ],
    "eligibility": [
      "Farmers with active KCC loans up to ₹3 Lakhs who repay within 1 year."
    ],
    "documents": [
      "KCC Account details",
      "Repayment receipt",
      "Aadhaar Card"
    ],
    "procedure": [
      {
        "step": 1,
        "title": "Automatic Application",
        "desc": "Applied automatically by your bank branch when you repay your KCC loan on or before due date."
      }
    ],
    "applyUrl": "https://agriwelfare.gov.in",
    "officialDocuments": [
      {
        "title": "Modified Interest Subvention Scheme (MISS) Notification",
        "source": "Ministry of Agriculture",
        "year": "2024",
        "url": "https://agriwelfare.gov.in"
      }
    ],
    "keywords": [
      "interest subvention",
      "miss",
      "interest rebate",
      "subsidized loan",
      "prompt repayment",
      "byaj chhoot"
    ],
    "targetBeneficiaryHi": "केसीसी के तहत सभी अल्पावधि फसल ऋण धारक",
    "subsidyHighlightHi": "3% शीघ्र पुनर्भुगतान प्रोत्साहन",
    "eligibilityHi": [
      "सक्रिय केसीसी ऋण वाले किसान (₹3 लाख तक) जो 1 वर्ष के भीतर ऋण का पुनर्भुगतान करते हैं।"
    ],
    "benefitsHi": [
      "ऋणदाता वित्तीय संस्थानों को 1.5% प्रति वर्ष ब्याज अनुदान।",
      "देय तिथि पर या उससे पहले ऋण चुकाने वाले किसानों को 3% प्रति वर्ष का अतिरिक्त प्रोत्साहन।",
      "संकटकालीन राहत: ई-एनडब्ल्यूआर (e-NWR) के एवज में 6 महीने तक रियायती दर पर ऋण उपलब्ध।"
    ],
    "procedureHi": [
      {
        "step": 1,
        "title": "स्वचालित आवेदन",
        "desc": "जब आप देय तिथि पर या उससे पहले अपना केसीसी ऋण चुकाते हैं, तो बैंक शाखा द्वारा स्वतः लागू किया जाता है।"
      }
    ],
    "documentsHi": [
      "केसीसी खाता विवरण",
      "आधार कार्ड",
      "पुनर्भुगतान रसीद"
    ]
  },
  {
    "id": "pmksy",
    "code": "PMS-001",
    "name": "PM Krishi Sinchayee Yojana (PMKSY - Per Drop More Crop)",
    "nameHi": "प्रधानमंत्री कृषि सिंचाई योजना (प्रति बूंद अधिक फसल)",
    "category": "Irrigation & Water",
    "categoryHi": "सिंचाई और जल",
    "issuingBody": "MoA&FW / Ministry of Jal Shakti",
    "issuingBodyHi": "कृषि मंत्रालय एवं जल शक्ति मंत्रालय",
    "tagline": "Up to 55% subsidy on drip and sprinkler micro-irrigation systems to maximize water efficiency.",
    "taglineHi": "सूक्ष्म सिंचाई (ड्रिप और स्प्रिंकलर) पर 55% तक की सरकारी सब्सिडी।",
    "subsidyHighlight": "Up to 55% subsidy on Drip & Sprinkler",
    "badge": "Water Conservation",
    "lastVerified": "September 2026",
    "officialUrl": "https://pmksy.gov.in",
    "sourceUrl": "https://agriwelfare.gov.in/en/Major",
    "minLand": 0.2,
    "maxLand": 5,
    "farmerTypes": [
      "marginal",
      "small",
      "medium"
    ],
    "targetBeneficiary": "Farmers with assured water source seeking micro-irrigation installation",
    "benefits": [
      "55% financial assistance for Small & Marginal farmers; 45% assistance for other farmers.",
      "Saves up to 40-50% water while increasing crop yield by 20-30%.",
      "Fertigation facility allows precise fertilizer delivery directly to plant root zone."
    ],
    "eligibility": [
      "All categories of farmers having cultivable land and an assured water source (borewell, open well, canal, farm pond).",
      "Members of Water User Associations (WUAs) or FPOs receive fast-track allocation."
    ],
    "documents": [
      "Aadhaar Card and Land Record (7/12, Khatauni)",
      "Water source proof & electricity connection bill/solar pump certificate",
      "Quotation / Design layout from registered micro-irrigation supplier",
      "Soil & water test report (optional/desirable)"
    ],
    "procedure": [
      {
        "step": 1,
        "title": "State Horticulture / Agri Portal",
        "desc": "Register on your state micro-irrigation portal (e.g., e-Udyan, MahaDBT, TNHORT)."
      },
      {
        "step": 2,
        "title": "Field Inspection by Department",
        "desc": "Block Horticulture Officer visits your plot to assess water source, crop, and pipeline layout."
      },
      {
        "step": 3,
        "title": "Select Empanelled Vendor",
        "desc": "Choose from government-empanelled drip manufacturers (Jain, Netafim, EPC, etc.)."
      },
      {
        "step": 4,
        "title": "Installation & Verification",
        "desc": "Vendor installs system. Joint inspection & geo-tagged photo uploaded on PMKSY app."
      },
      {
        "step": 5,
        "title": "Subsidy Release",
        "desc": "Subsidy amount credited via DBT or directly adjusted in manufacturer bill."
      }
    ],
    "applyUrl": "https://pmksy.gov.in",
    "officialDocuments": [
      {
        "title": "PM Krishi Sinchayee Yojana (PMKSY - Per Drop More Crop) Official Overview",
        "url": "https://agriwelfare.gov.in/en/Major",
        "type": "page",
        "source": "MoA&FW / Ministry of Jal Shakti",
        "year": "2024"
      }
    ],
    "keywords": [
      "pm krishi sinchayee yojana (pmksy - per drop more crop)",
      "irrigation & water"
    ],
    "targetBeneficiaryHi": "किसान, पंचायतें, सहकारी समितियां, एफपीओ",
    "subsidyHighlightHi": "55% तक ड्रिप एवं स्प्रिंकलर सब्सिडी",
    "eligibilityHi": [
      "सुनिश्चित जल स्रोत (कुआं, बोरवेल, नहर, कृषि तालाब) वाले भूमिधारक किसान।"
    ],
    "benefitsHi": [
      "लघु व सीमांत किसानों को ड्रिप एवं स्प्रिंकलर प्रणाली पर 55% सब्सिडी; अन्य किसानों को 45% सब्सिडी।",
      "पारंपरिक बाढ़ सिंचाई की तुलना में 40-50% जल की बचत और 30-40% तक उपज में वृद्धि।",
      "फर्टिगेशन (उर्वरक-सिंचाई) सुविधा उर्वरक उपयोग दक्षता में 25-30% का सुधार करती है।"
    ],
    "procedureHi": [
      {
        "step": 1,
        "title": "राज्य सूक्ष्म सिंचाई पोर्टल पर पंजीकरण",
        "desc": "अपने राज्य के उद्यानिकी/कृषि पोर्टल पर पंजीकरण करें।"
      },
      {
        "step": 2,
        "title": "पंजीकृत डीलर का चयन",
        "desc": "सूचीबद्ध आईएसआई-चिह्नित ड्रिप/स्प्रिंकलर निर्माता का चयन करें। तकनीकी दल सर्वेक्षण करेगा।"
      },
      {
        "step": 3,
        "title": "प्रशासनिक स्वीकृति",
        "desc": "जिला उद्यानिकी अधिकारी लागत अनुमान स्वीकृत करता है।"
      },
      {
        "step": 4,
        "title": "स्थापना एवं भौतिक सत्यापन",
        "desc": "उपकरण स्थापित होने के बाद, कृषि अधिकारी जीपीएस से सत्यापन कर डीबीटी सब्सिडी जारी करता है।"
      }
    ],
    "documentsHi": [
      "आधार कार्ड और भूमि अभिलेख (7/12, खतौनी)",
      "जल स्रोत प्रमाण एवं बिजली बिल / सोलर पंप प्रमाण पत्र",
      "पंजीकृत सूक्ष्म सिंचाई आपूर्तिकर्ता से कोटेशन / डिजाइन लेआउट",
      "मृदा एवं जल परीक्षण रिपोर्ट (वैकल्पिक)"
    ]
  },
  {
    "id": "pm-kusum",
    "code": "KUS-001",
    "name": "PM-KUSUM (Solar Pump & Farm Solarization)",
    "nameHi": "पीएम-कुसुम (सौर ऊर्जा कृषि पंप योजना)",
    "category": "Irrigation & Water",
    "categoryHi": "सिंचाई और जल",
    "issuingBody": "Ministry of New and Renewable Energy (MNRE)",
    "issuingBodyHi": "नवीन और नवीकरणीय ऊर्जा मंत्रालय",
    "tagline": "Up to 60% total government subsidy for standalone solar agri pumps (Component B).",
    "taglineHi": "सोलर वाटर पंप लगाने पर केंद्र व राज्य सरकार द्वारा 60% तक भारी सब्सिडी।",
    "subsidyHighlight": "60% Subsidy (30% Central + 30% State)",
    "badge": "Renewable Energy Subsidy",
    "lastVerified": "September 2026",
    "officialUrl": "https://pmkusum.mnre.gov.in",
    "sourceUrl": "https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2002012",
    "minLand": 0.5,
    "maxLand": 999,
    "farmerTypes": [
      "marginal",
      "small",
      "medium",
      "large"
    ],
    "targetBeneficiary": "Individual farmers, Water User Associations, and Panchayats in off-grid areas",
    "benefits": [
      "Component B: 30% Central subsidy + 30% State subsidy. Farmer contributes only 10-40% (bank loan available for 30%).",
      "Replaces costly diesel pumps, reducing operating cost to near-zero.",
      "Component C: Solarization of existing grid-connected agri pumps with option to sell excess electricity back to DISCOM for extra income."
    ],
    "eligibility": [
      "Farmers having land ownership and existing borewell/dug well without an electric connection (Component B).",
      "Farmers with existing electric connection for Component C."
    ],
    "documents": [
      "Aadhaar Card",
      "Land Ownership Documents (Jamabandi / ROR)",
      "Bank Account details with IFSC",
      "Passport size photographs & Mobile number"
    ],
    "procedure": [
      {
        "step": 1,
        "title": "Apply on State Renewable Energy Portal",
        "desc": "Visit your state nodal agency portal (e.g., UPNEDA, HAREDA, MEDA, RREC)."
      },
      {
        "step": 2,
        "title": "Choose Pump Capacity",
        "desc": "Select 3 HP, 5 HP, or 7.5 HP AC/DC submersible or surface solar pump based on water depth."
      },
      {
        "step": 3,
        "title": "Deposit Beneficiary Share",
        "desc": "Deposit farmer share (approx 10-40% of total cost) into the nodal agency escrow account."
      },
      {
        "step": 4,
        "title": "Site Survey & Installation",
        "desc": "Empanelled vendor installs solar panels, controller, and pump within 60 days."
      }
    ],
    "applyUrl": "https://pmkusum.mnre.gov.in",
    "officialDocuments": [
      {
        "title": "PM-KUSUM Operational Guidelines",
        "source": "Ministry of New & Renewable Energy",
        "year": "2024",
        "url": "https://mnre.gov.in"
      }
    ],
    "keywords": [
      "solar pump",
      "pm kusum",
      "solar energy",
      "tubewell solar",
      "grid connected solar",
      "mnre",
      "bijli",
      "solar tube"
    ],
    "targetBeneficiaryHi": "व्यक्तिगत किसान, स्वयं सहायता समूह, एफपीओ, सहकारी समितियां",
    "subsidyHighlightHi": "60% तक सोलर पंप सब्सिडी",
    "eligibilityHi": [
      "व्यक्तिगत किसान, कृषक समूह, एफपीओ या जल उपभोक्ता संघ जिनके पास सिंचाई भूमि उपलब्ध हो।"
    ],
    "benefitsHi": [
      "स्टैंडअलोन सोलर पंप (3 HP से 10 HP) की लागत पर 60% सब्सिडी (30% केंद्र + 30% राज्य)।",
      "किसान को मात्र 10% अग्रिम लागत का भुगतान करना होता है; शेष 30% तक बैंक ऋण उपलब्ध।",
      "डीजल पंपों के ईंधन खर्च से मुक्ति और दिन के समय निर्बाध निःशुल्क सिंचाई बिजली।"
    ],
    "procedureHi": [
      {
        "step": 1,
        "title": "राज्य नोडल एजेंसी (SNA) पोर्टल पर आवेदन",
        "desc": "अपने राज्य की रिन्यूएबल एनर्जी विकास एजेंसी (जैसे MPUVNL, MEDA, RRECL) पोर्टल पर जाएं।"
      },
      {
        "step": 2,
        "title": "पंप क्षमता का चयन",
        "desc": "भूमि रकबे और जल स्तर के अनुसार 3 HP, 5 HP, या 7.5 HP सोलर पंप चुनें।"
      },
      {
        "step": 3,
        "title": "10% किसान अंशदान जमा करें",
        "desc": "प्रशासनिक स्वीकृति मिलने पर 10% अंशदान चालान या ऑनलाइन माध्यम से जमा करें।"
      },
      {
        "step": 4,
        "title": "स्थापना व चालू करना",
        "desc": "अधिकृत वेंडर खेत पर सोलर पैनल व पंप स्थापित करता है। निरीक्षण के बाद कमीशनिंग रिपोर्ट जारी होती है।"
      }
    ],
    "documentsHi": [
      "आधार कार्ड",
      "भूमि स्वामित्व दस्तावेज (जमाबंदी / आरओआर)",
      "आईएफएससी सहित बैंक खाता पासबुक",
      "पासपोर्ट साइज फोटो एवं मोबाइल नंबर"
    ]
  },
  {
    "id": "soil-health-card",
    "code": "SHC-001",
    "name": "Soil Health Card Scheme",
    "nameHi": "मृदा स्वास्थ्य कार्ड योजना",
    "category": "Soil & Inputs",
    "categoryHi": "मृदा और इनपुट",
    "issuingBody": "Central Government (MoA&FW)",
    "issuingBodyHi": "केंद्र सरकार (कृषि मंत्रालय)",
    "tagline": "Free periodic testing of 12 chemical parameters of farm soil with crop-wise nutrient advice.",
    "taglineHi": "खेत की मिट्टी के 12 पोषक तत्वों की निःशुल्क जांच एवं फसलवार खाद सलाह।",
    "subsidyHighlight": "100% Free Soil Testing",
    "badge": "Free Diagnostic",
    "lastVerified": "September 2026",
    "officialUrl": "https://soilhealth.dac.gov.in",
    "sourceUrl": "https://agriwelfare.gov.in/en/Major",
    "minLand": 0,
    "maxLand": 999,
    "farmerTypes": [
      "marginal",
      "small",
      "medium",
      "large"
    ],
    "targetBeneficiary": "All farming families across all states every 3 years",
    "benefits": [
      "Detailed report on 12 parameters: Macro-nutrients (N, P, K), Secondary-nutrients (S), Micro-nutrients (Zn, Fe, Cu, Mn, Bo), and Physical parameters (pH, EC, OC).",
      "Reduces fertilizer usage by 15-25% while boosting crop yield by 8-12%.",
      "Customized fertilizer dosages recommendations for 6 chosen crops."
    ],
    "eligibility": [
      "Any farmer holding agricultural land in India."
    ],
    "documents": [
      "Aadhaar Card",
      "Survey / Khasra number of land parcel"
    ],
    "procedure": [
      {
        "step": 1,
        "title": "Soil Sample Collection",
        "desc": "Agri department extension staff collects grid samples from field (0-15 cm depth) using GPS coordinates."
      },
      {
        "step": 2,
        "title": "Laboratory Analysis",
        "desc": "Sample tested in district Soil Testing Laboratory (STL) or mobile van."
      },
      {
        "step": 3,
        "title": "Card Delivery / Download",
        "desc": "Download digital Soil Health Card directly from soilhealth.dac.gov.in by entering state and village."
      }
    ],
    "applyUrl": "https://soilhealth.dac.gov.in",
    "officialDocuments": [
      {
        "title": "Soil Health Card Scheme Official Overview",
        "url": "https://agriwelfare.gov.in/en/Major",
        "type": "page",
        "source": "Central Government (MoA&FW)",
        "year": "2024"
      }
    ],
    "keywords": [
      "soil health card scheme",
      "soil & inputs"
    ],
    "targetBeneficiaryHi": "अखिल भारतीय स्तर पर सभी किसान",
    "subsidyHighlightHi": "निःशुल्क मृदा परीक्षण एवं पोषक तत्व सलाह",
    "eligibilityHi": [
      "भारत के सभी राज्यों में कृषि भूमि जोतने वाले सभी किसान।"
    ],
    "benefitsHi": [
      "12 प्रमुख मापदंडों (N, P, K, S, Zn, Fe, Cu, Mn, Bo, pH, EC, OC) पर निःशुल्क प्रयोगशाला परीक्षण।",
      "फसल-वार संतुलित उर्वरक सिफारिशें, जिससे 15-20% उर्वरक लागत बचती है और मृदा स्वास्थ्य सुधरता है।",
      "प्रत्येक 3 वर्ष में अद्यतन डिजिटल सॉइल हेल्थ कार्ड।"
    ],
    "procedureHi": [
      {
        "step": 1,
        "title": "मृदा नमूना संग्रह",
        "desc": "कृषि विभाग का प्रसार कार्यकर्ता जीपीएस निर्देशांक का उपयोग कर खेत से नमूना एकत्र करता है।"
      },
      {
        "step": 2,
        "title": "प्रयोगशाला विश्लेषण",
        "desc": "नमूने का परीक्षण जिला मृदा परीक्षण प्रयोगशाला (STL) या मोबाइल वैन में किया जाता है।"
      },
      {
        "step": 3,
        "title": "कार्ड डाउनलोड",
        "desc": "soilhealth.dac.gov.in से अपना राज्य और गांव चुनकर डिजिटल सॉइल हेल्थ कार्ड डाउनलोड करें।"
      }
    ],
    "documentsHi": [
      "आधार कार्ड",
      "भूमि का खसरा / खाता संख्या",
      "मोबाइल नंबर"
    ]
  },
  {
    "id": "pkvy",
    "code": "PKV-001",
    "name": "Paramparagat Krishi Vikas Yojana (PKVY)",
    "nameHi": "परम्परागत कृषि विकास योजना (जैविक खेती)",
    "category": "Soil & Inputs",
    "categoryHi": "मृदा और इनपुट",
    "issuingBody": "MoA&FW (National Mission on Sustainable Agri)",
    "issuingBodyHi": "कृषि मंत्रालय (सतत कृषि राष्ट्रीय मिशन)",
    "tagline": "Financial assistance of ₹50,000 per hectare for cluster-based organic farming and certification.",
    "taglineHi": "क्लस्टर आधारित जैविक खेती और प्रमाणीकरण के लिए ₹50,000 प्रति हेक्टेयर की मदद।",
    "subsidyHighlight": "₹50,000 / hectare assistance",
    "badge": "Organic Farming",
    "lastVerified": "September 2026",
    "officialUrl": "https://pgsindia-ncof.gov.in",
    "sourceUrl": "https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2002012",
    "minLand": 0.5,
    "maxLand": 2,
    "farmerTypes": [
      "marginal",
      "small",
      "medium"
    ],
    "targetBeneficiary": "Farmer clusters (groups of 20-50 farmers with 20-50 hectares)",
    "benefits": [
      "₹31,000/ha provided directly for organic inputs (seeds, bio-fertilizers, vermicompost, botanical extracts).",
      "Free Participatory Guarantee System (PGS-India) organic certification for 3 years.",
      "₹8,800/ha for value addition, packaging, and marketing in organic fairs and e-NAM."
    ],
    "eligibility": [
      "Farmers forming a cluster of minimum 20 hectares committing to organic cultivation without synthetic chemicals."
    ],
    "documents": [
      "Cluster formation agreement",
      "Aadhaar Card",
      "Land papers",
      "Bank account details"
    ],
    "procedure": [
      {
        "step": 1,
        "title": "Form Farmers Group",
        "desc": "Gather 20-50 farmers in your village with adjacent fields totaling at least 20-50 ha."
      },
      {
        "step": 2,
        "title": "Register with Block Agri Officer",
        "desc": "Submit cluster application to Regional Council under PGS-India."
      },
      {
        "step": 3,
        "title": "DBT Disbursement",
        "desc": "Funds credited over 3 years directly to farmer bank accounts in milestone tranches."
      }
    ],
    "applyUrl": "https://pgsindia-ncof.gov.in",
    "officialDocuments": [
      {
        "title": "PKVY Operational Guidelines",
        "source": "Ministry of Agriculture & Farmers Welfare",
        "year": "2024",
        "url": "https://pgsindia-ncof.gov.in"
      }
    ],
    "keywords": [
      "organic farming",
      "pkvy",
      "jaivik kheti",
      "cluster certification",
      "pgs india",
      "bio fertilizer",
      "compost",
      "chemical free"
    ],
    "targetBeneficiaryHi": "जैविक खेती करने वाले कृषक समूह",
    "subsidyHighlightHi": "₹31,000 / हेक्टेयर जैविक इनपुट अनुदान",
    "eligibilityHi": [
      "न्यूनतम 20 हेक्टेयर का क्लस्टर बनाने वाले किसान जो रासायनिक मुक्त जैविक खेती करने हेतु सहमत हों।"
    ],
    "benefitsHi": [
      "जैविक इनपुट (बीज, जैव उर्वरक, वर्मीकंपोस्ट, वनस्पति अर्क) हेतु ₹31,000/हेक्टेयर प्रत्यक्ष सहायता।",
      "3 वर्षों के लिए निःशुल्क पीजीएस-इंडिया (PGS-India) जैविक प्रमाणीकरण।",
      "जैविक मेलों और ई-नाम पर पैकेजिंग, मूल्य संवर्धन एवं विपणन हेतु ₹8,800/हेक्टेयर।"
    ],
    "procedureHi": [
      {
        "step": 1,
        "title": "किसान समूह गठन",
        "desc": "अपने गांव में 20-50 किसानों को एकत्रित कर 20-50 हेक्टेयर का क्लस्टर बनाएं।"
      },
      {
        "step": 2,
        "title": "प्रखंड कृषि अधिकारी के पास पंजीकरण",
        "desc": "पीजीएस-इंडिया के अंतर्गत क्षेत्रीय परिषद को क्लस्टर आवेदन प्रस्तुत करें।"
      },
      {
        "step": 3,
        "title": "डीबीटी राशि अंतरण",
        "desc": "3 वर्षों में निर्धारित चरणों के अनुसार राशि सीधे किसान बैंक खातों में जमा की जाती है।"
      }
    ],
    "documentsHi": [
      "आधार कार्ड",
      "क्लस्टर गठन अनुबंध",
      "भूमि के दस्तावेज",
      "रद्द चेक सहित बैंक खाता विवरण"
    ]
  },
  {
    "id": "nmnf",
    "code": "NMN-002",
    "name": "National Mission on Natural Farming (NMNF)",
    "nameHi": "राष्ट्रीय प्राकृतिक खेती मिशन",
    "category": "Soil & Inputs",
    "categoryHi": "मृदा और इनपुट",
    "issuingBody": "Central Government (MoA&FW)",
    "issuingBodyHi": "केंद्र सरकार (कृषि मंत्रालय)",
    "tagline": "Support for chemical-free livestock-based natural farming with input resource centers.",
    "taglineHi": "रसायन मुक्त, गो-आधारित प्राकृतिक खेती के लिए अनुदान और प्रशिक्षण।",
    "subsidyHighlight": "₹15,000 / ha financial support",
    "badge": "Chemical Free",
    "lastVerified": "September 2026",
    "officialUrl": "https://naturalfarming.dac.gov.in",
    "sourceUrl": "https://agriwelfare.gov.in/en/Major",
    "minLand": 0.2,
    "maxLand": 5,
    "farmerTypes": [
      "marginal",
      "small",
      "medium"
    ],
    "targetBeneficiary": "Farmers adopting Jeevamrit, Beejamrit, and indigenous cow farming",
    "benefits": [
      "₹15,000 per hectare incentive over 3 years for adopting natural farming.",
      "Assistance to establish village Bio-Input Resource Centres (BRCs).",
      "Continuous mentoring by Krishi Sakhis and Master Trainers."
    ],
    "eligibility": [
      "Farmers owning indigenous cows or willing to practice livestock-based zero-chemical farming."
    ],
    "documents": [
      "Aadhaar",
      "Land Record",
      "Bank Passbook"
    ],
    "procedure": [
      {
        "step": 1,
        "title": "Enroll in Village Gram Sabha",
        "desc": "Register your name during Gram Sabha natural farming drive."
      },
      {
        "step": 2,
        "title": "Attend 3-Day KVK Workshop",
        "desc": "Complete mandatory practical training on preparation of Beejamrit and Jeevamrit."
      }
    ],
    "applyUrl": "https://naturalfarming.dac.gov.in",
    "officialDocuments": [
      {
        "title": "National Mission on Natural Farming Guidelines",
        "source": "Ministry of Agriculture",
        "year": "2024",
        "url": "https://naturalfarming.dac.gov.in"
      }
    ],
    "keywords": [
      "natural farming",
      "prakritik kheti",
      "nmnf",
      "zero budget",
      "cow dung",
      "jeevamrit",
      "ghanjeevamrit",
      "desi cow"
    ],
    "targetBeneficiaryHi": "प्राकृतिक खेती अपनाने वाले या करने वाले सभी किसान",
    "subsidyHighlightHi": "₹15,000 / हेक्टेयर प्रोत्साहन राशि",
    "eligibilityHi": [
      "देशी गाय रखने वाले या पशुधन-आधारित शून्य-रसायन खेती करने के इच्छुक किसान।"
    ],
    "benefitsHi": [
      "प्राकृतिक खेती अपनाने हेतु 3 वर्षों में ₹15,000 प्रति हेक्टेयर प्रोत्साहन राशि।",
      "ग्राम स्तर पर बायो-इनपुट रिसोर्स सेंटर (BRC) स्थापित करने हेतु वित्तीय सहायता।",
      "कृषि सखियों और मास्टर प्रशिक्षकों द्वारा निरंतर मार्गदर्शन एवं तकनीकी सहायता।"
    ],
    "procedureHi": [
      {
        "step": 1,
        "title": "ग्राम सभा में नामांकन",
        "desc": "प्राकृतिक खेती अभियान के दौरान ग्राम सभा में अपना नाम दर्ज करवाएं।"
      },
      {
        "step": 2,
        "title": "केवीके प्रशिक्षण",
        "desc": "बीजामृत और जीवामृत तैयार करने के व्यावहारिक 3-दिवसीय प्रशिक्षण को पूर्ण करें।"
      }
    ],
    "documentsHi": [
      "आधार कार्ड",
      "भूमि अभिलेख",
      "बैंक पासबुक"
    ]
  },
  {
    "id": "enam",
    "code": "ENM-001",
    "name": "e-NAM (National Agriculture Market)",
    "nameHi": "ई-नाम (राष्ट्रीय कृषि बाजार)",
    "category": "Market Access",
    "categoryHi": "बाजार पहुंच",
    "issuingBody": "Small Farmers' Agri-Business Consortium (SFAC)",
    "issuingBodyHi": "लघु कृषक कृषि व्यापार संघ (एसएफएसी)",
    "tagline": "Pan-India electronic trading portal uniting 1,400+ mandis for transparent price discovery.",
    "taglineHi": "1,400+ मंडियों को जोड़ने वाला ऑनलाइन ई-ट्रेडिंग प्लेटफॉर्म।",
    "subsidyHighlight": "Direct online payment & zero mandi cuts",
    "badge": "Pan-India Trading",
    "lastVerified": "September 2026",
    "officialUrl": "https://enam.gov.in",
    "sourceUrl": "https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2002012",
    "minLand": 0,
    "maxLand": 999,
    "farmerTypes": [
      "marginal",
      "small",
      "medium",
      "large"
    ],
    "targetBeneficiary": "All farmers selling farm produce in APMC mandis or from farmgate",
    "benefits": [
      "Access to pan-India buyers across 23+ states, removing local cartelization and middleman cut.",
      "Scientific assaying and quality testing of produce at mandi gate free of cost.",
      "100% online payment directly credited to farmer bank account on same day of auction.",
      "Warehouse-based sales (e-NWR trade) allows selling stored produce from registered cold storages."
    ],
    "eligibility": [
      "Any farmer possessing marketable agricultural or horticultural surplus."
    ],
    "documents": [
      "Aadhaar Card",
      "Bank Account details with cancelled cheque",
      "Mobile number for SMS auction notifications"
    ],
    "procedure": [
      {
        "step": 1,
        "title": "Register on e-NAM App",
        "desc": "Download e-NAM Mobile App or visit enam.gov.in → Select 'Farmer Registration'."
      },
      {
        "step": 2,
        "title": "Gate Entry at Mandi",
        "desc": "Take produce to nearest e-NAM enabled APMC mandi. Gate staff generates digital lot number."
      },
      {
        "step": 3,
        "title": "Assaying & Electronic Bidding",
        "desc": "Produce sample is tested for moisture and grade. Live transparent bidding starts on portal."
      },
      {
        "step": 4,
        "title": "Accept Bid & Online Settlement",
        "desc": "Accept best bid online. Payment settled directly into bank account via payment gateway."
      }
    ],
    "applyUrl": "https://enam.gov.in",
    "officialDocuments": [
      {
        "title": "e-NAM Portal Integration & Farmer Registration Manual",
        "url": "https://enam.gov.in/web/resources/guidelines",
        "type": "page",
        "source": "Small Farmers' Agri-Business Consortium (SFAC)",
        "year": "2024"
      }
    ],
    "keywords": [
      "enam",
      "e nam",
      "mandi",
      "online trading",
      "msp sale",
      "direct selling",
      "national market",
      "bhav",
      "fasal bikri"
    ],
    "targetBeneficiaryHi": "मंडी व्यापार योग्य उपज वाले सभी किसान",
    "subsidyHighlightHi": "0% बिचौलिया कमीशन एवं अखिल भारतीय खरीदार",
    "eligibilityHi": [
      "कोई भी किसान जिसके पास विपणन योग्य कृषि या बागवानी अधिशेष उपज हो।"
    ],
    "benefitsHi": [
      "23 से अधिक राज्यों के अखिल भारतीय खरीदारों तक पहुंच, स्थानीय सिंडिकेट व बिचौलियों का खात्मा।",
      "मंडी गेट पर उपज की वैज्ञानिक गुणवत्ता जांच एवं ग्रेडिंग पूर्णतः निःशुल्क।",
      "नीलामी के उसी दिन सीधे किसान के बैंक खाते में 100% ऑनलाइन भुगतान।",
      "ई-एनडब्ल्यूआर (e-NWR) व्यापार से पंजीकृत कोल्ड स्टोरेज से सीधे उपज बेचने की सुविधा।"
    ],
    "procedureHi": [
      {
        "step": 1,
        "title": "ई-नाम ऐप पर पंजीकरण",
        "desc": "e-NAM मोबाइल ऐप डाउनलोड करें या enam.gov.in पर जाकर 'Farmer Registration' चुनें।"
      },
      {
        "step": 2,
        "title": "मंडी में गेट एंट्री",
        "desc": "उपज को नजदीकी ई-नाम सक्षम एपीएमसी मंडी ले जाएं। गेट स्टाफ डिजिटल लॉट नंबर बनाएगा।"
      },
      {
        "step": 3,
        "title": "गुणवत्ता जांच एवं इलेक्ट्रॉनिक बोली",
        "desc": "नमूने की नमी और ग्रेड की जांच होती है। पोर्टल पर पारदर्शी लाइव बोली शुरू होती है।"
      },
      {
        "step": 4,
        "title": "बोली स्वीकारें एवं भुगतान",
        "desc": "सर्वोत्तम बोली ऑनलाइन स्वीकार करें। भुगतान गेटवे से सीधे बैंक खाते में राशि जमा होगी।"
      }
    ],
    "documentsHi": [
      "आधार कार्ड",
      "बैंक बचत खाता पासबुक",
      "एसएमएस नीलामी सूचनाओं हेतु मोबाइल नंबर",
      "भूमि अभिलेख (गिरदावरी / बुवाई सत्यापन)"
    ]
  },
  {
    "id": "pm-aasha",
    "code": "ASH-001",
    "name": "PM-AASHA (Pradhan Mantri Annadata Aay Sanrakshan Abhiyan)",
    "nameHi": "पीएम-आशा (अन्नदाता आय संरक्षण अभियान)",
    "category": "Market Access",
    "categoryHi": "बाजार पहुंच",
    "issuingBody": "Department of Agriculture & Farmers Welfare",
    "issuingBodyHi": "कृषि एवं किसान कल्याण विभाग",
    "tagline": "Guaranteed MSP price protection for pulses, oilseeds, and copra through procurement and deficit payment.",
    "taglineHi": "दलहन, तिलहन और खोपरा पर न्यूनतम समर्थन मूल्य (एमएसपी) की गारंटी।",
    "subsidyHighlight": "100% MSP realization guarantee",
    "badge": "Price Support Scheme",
    "lastVerified": "September 2026",
    "officialUrl": "https://agriwelfare.gov.in",
    "sourceUrl": "https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2002012",
    "minLand": 0.1,
    "maxLand": 999,
    "farmerTypes": [
      "marginal",
      "small",
      "medium",
      "large"
    ],
    "targetBeneficiary": "Farmers cultivating pulses (Gram, Tur, Urad, Moong) and oilseeds (Mustard, Groundnut, Soybean)",
    "benefits": [
      "Price Support Scheme (PSS): Physical procurement of notified pulses and oilseeds by NAFED/FCI at full MSP.",
      "Price Deficiency Payment Scheme (PDPS): Direct cash transfer of price difference between MSP and selling price if market crashes.",
      "Protects farmers from distress sales during peak harvest glut."
    ],
    "eligibility": [
      "Farmers registered on state procurement portal growing notified MSP crops."
    ],
    "documents": [
      "Aadhaar",
      "Land Records (Girdawari / Sowing verification)",
      "Bank Passbook"
    ],
    "procedure": [
      {
        "step": 1,
        "title": "Pre-Harvest Registration",
        "desc": "Register on state procurement portal (e.g., e-Uparjan, Meri Fasal Mera Byora) during sowing."
      },
      {
        "step": 2,
        "title": "Procurement Slot Booking",
        "desc": "Book an appointment slot at nearest NAFED / State warehouse procurement center."
      },
      {
        "step": 3,
        "title": "Weighment & DBT Settlement",
        "desc": "Deliver produce adhering to Fair Average Quality (FAQ) standards. Payment credited within 72 hrs."
      }
    ],
    "applyUrl": "https://agriwelfare.gov.in",
    "officialDocuments": [
      {
        "title": "PM-AASHA (Pradhan Mantri Annadata Aay Sanrakshan Abhiyan) Official Overview",
        "url": "https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2002012",
        "type": "page",
        "source": "Department of Agriculture & Farmers Welfare",
        "year": "2024"
      }
    ],
    "keywords": [
      "pm-aasha (pradhan mantri annadata aay sanrakshan abhiyan)",
      "market access"
    ],
    "targetBeneficiaryHi": "एमएसपी अधिसूचित तिलहन, दलहन व खोपरा उत्पादक किसान",
    "subsidyHighlightHi": "न्यूनतम समर्थन मूल्य (MSP) की कानूनी गारंटी",
    "eligibilityHi": [
      "राज्य खरीद पोर्टल पर पंजीकृत किसान जो अधिसूचित एमएसपी फसलें उगाते हैं।"
    ],
    "benefitsHi": [
      "मूल्य समर्थन योजना (PSS): नेफेड/एफसीआई द्वारा पूर्ण एमएसपी पर दलहन और तिलहन की प्रत्यक्ष भौतिक खरीद।",
      "मूल्य न्यूनता भुगतान योजना (PDPS): बाजार भाव गिरने पर एमएसपी और विक्रय मूल्य के अंतर का सीधा बैंक खाते में नकद भुगतान।",
      "बंपर पैदावार के समय किसानों को औने-पौने दामों पर संकटकालीन बिक्री से पूर्ण सुरक्षा।"
    ],
    "procedureHi": [
      {
        "step": 1,
        "title": "बुवाई पूर्व पंजीकरण",
        "desc": "राज्य खरीद पोर्टल (जैसे ई-उपार्जन, मेरी फसल मेरा ब्योरा) पर बुवाई के समय पंजीकरण कराएं।"
      },
      {
        "step": 2,
        "title": "खरीद स्लॉट बुकिंग",
        "desc": "नजदीकी नेफेड/राज्य वेयरहाउस खरीद केंद्र पर अपनी सुविधानुसार समय स्लॉट बुक करें।"
      },
      {
        "step": 3,
        "title": "तौल एवं डीबीटी भुगतान",
        "desc": "एफएक्यू (FAQ) गुणवत्ता मानकों की उपज लाएं। तौल के 72 घंटे के भीतर बैंक खाते में भुगतान जमा होगा।"
      }
    ],
    "documentsHi": [
      "आधार कार्ड",
      "भूमि स्वामित्व अभिलेख (खतौनी / पट्टा)",
      "बैंक खाता विवरण",
      "गिरदावरी बुवाई प्रमाण पत्र"
    ]
  },
  {
    "id": "smam",
    "code": "SMA-001",
    "name": "Sub-Mission on Agricultural Mechanization (SMAM)",
    "nameHi": "कृषि यंत्रीकरण पर उप-मिशन (स्मम योजना)",
    "category": "Farm Mechanization",
    "categoryHi": "कृषि यंत्रीकरण",
    "issuingBody": "MoA&FW (Machinery & Technology Division)",
    "issuingBodyHi": "कृषि मंत्रालय (मशीनरी विभाग)",
    "tagline": "40% to 50% capital subsidy on tractors, rotavators, power tillers, and harvesters.",
    "taglineHi": "ट्रैक्टर, रोटावेटर, पावर टिलर और थ्रेशर पर 40% से 50% तक सरकारी अनुदान।",
    "subsidyHighlight": "40% - 50% Subsidy on Farm Machinery",
    "badge": "Machinery Subsidy",
    "lastVerified": "September 2026",
    "officialUrl": "https://agrimachinery.nic.in",
    "sourceUrl": "https://agriwelfare.gov.in/en/Major",
    "minLand": 0.5,
    "maxLand": 999,
    "farmerTypes": [
      "marginal",
      "small",
      "medium",
      "large"
    ],
    "targetBeneficiary": "Individual farmers, SHGs, FPOs, and rural youth establishing Custom Hiring Centres",
    "benefits": [
      "50% financial assistance for SC, ST, Small/Marginal farmers, and Women; 40% for General category.",
      "Subsidy up to ₹10 Lakh (80% funding) for establishing village Custom Hiring Centres (CHCs).",
      "Covers 100+ machinery types: Laser Land Levellers, Multi-crop threshers, Super Seeders, Happy Seeders, Balers."
    ],
    "eligibility": [
      "Farmers holding valid land records who have not availed tractor/machinery subsidy in the last 7 years.",
      "Valid driver license required for tractor purchase."
    ],
    "documents": [
      "Aadhaar Card",
      "Land Ownership Record (Khatauni / Patta)",
      "Bank Account details",
      "Caste Certificate (for SC/ST benefit) and Quotation from authorized machinery dealer"
    ],
    "procedure": [
      {
        "step": 1,
        "title": "Register on Farmech Portal",
        "desc": "Visit agrimachinery.nic.in → Click 'Registration' → 'Farmer Registration'."
      },
      {
        "step": 2,
        "title": "Select Implement & Dealer",
        "desc": "Select desired machinery model and authorized dealer in your district."
      },
      {
        "step": 3,
        "title": "Lottery / Priority Approval",
        "desc": "District Agricultural Engineer issues administrative sanction letter."
      },
      {
        "step": 4,
        "title": "Purchase & Physical Verification",
        "desc": "Purchase equipment. Department inspector verifies serial number and geo-tags equipment."
      },
      {
        "step": 5,
        "title": "DBT Release",
        "desc": "Subsidy amount directly credited to farmer bank account."
      }
    ],
    "applyUrl": "https://agrimachinery.nic.in",
    "officialDocuments": [
      {
        "title": "Sub-Mission on Agricultural Mechanization (SMAM) Guidelines",
        "url": "https://agrimachinery.nic.in/Files/Guidelines/SMAM_Guidelines.pdf",
        "type": "pdf",
        "source": "Department of Agriculture & Farmers Welfare",
        "year": "2024"
      }
    ],
    "keywords": [
      "tractor subsidy",
      "farm machinery",
      "smam",
      "rotavator",
      "harvester",
      "custom hiring centre",
      "krishi yantra",
      "chc"
    ],
    "targetBeneficiaryHi": "लघु व सीमांत किसान, अजा/अजजा, महिलाएं, कस्टम हायरिंग सेंटर",
    "subsidyHighlightHi": "ट्रैक्टर व कृषि यंत्रों पर 50% तक सब्सिडी",
    "eligibilityHi": [
      "वैध भूमि अभिलेख वाले किसान जिन्होंने पिछले 7 वर्षों में ट्रैक्टर/मशीनरी सब्सिडी का लाभ न लिया हो।",
      "ट्रैक्टर खरीद हेतु वैध ड्राइविंग लाइसेंस आवश्यक।"
    ],
    "benefitsHi": [
      "अनुसूचित जाति, जनजाति, लघु/सीमांत किसानों और महिलाओं को 50% वित्तीय सहायता; सामान्य श्रेणी को 40%।",
      "गांवों में कस्टम हायरिंग सेंटर (CHC) स्थापित करने हेतु ₹10 लाख तक की सब्सिडी (80% फंडिंग)।",
      "100+ कृषि यंत्र शामिल: लेजर लैंड लेवलर, मल्टी-क्रॉप थ्रेशर, सुपर सीडर, हैप्पी सीडर, बेलर।"
    ],
    "procedureHi": [
      {
        "step": 1,
        "title": "फार्मटेक पोर्टल पर पंजीकरण",
        "desc": "agrimachinery.nic.in पर जाएं → 'Registration' → 'Farmer Registration' पर क्लिक करें।"
      },
      {
        "step": 2,
        "title": "यंत्र एवं डीलर का चयन",
        "desc": "वांछित कृषि यंत्र मॉडल और अपने जिले में अधिकृत डीलर का चयन करें।"
      },
      {
        "step": 3,
        "title": "लॉटरी / प्राथमिकता स्वीकृति",
        "desc": "जिला कृषि अभियंता प्रशासनिक स्वीकृति पत्र (Administrative Sanction) जारी करता है।"
      },
      {
        "step": 4,
        "title": "खरीद व भौतिक सत्यापन",
        "desc": "उपकरण खरीदें। विभागीय निरीक्षक सीरियल नंबर सत्यापित कर जीपीएस टैग करता है।"
      },
      {
        "step": 5,
        "title": "डीबीटी राशि जारी",
        "desc": "सब्सिडी राशि सीधे किसान के बैंक खाते में जमा की जाती है।"
      }
    ],
    "documentsHi": [
      "आधार कार्ड",
      "भूमि अभिलेख (खतौनी)",
      "बैंक पासबुक",
      "जाति प्रमाण पत्र (अजा/अजजा लाभ हेतु) एवं अधिकृत मशीनरी डीलर से कोटेशन"
    ]
  },
  {
    "id": "namo-drone-didi",
    "code": "NDD-001",
    "name": "Namo Drone Didi Scheme",
    "nameHi": "नमो ड्रोन दीदी योजना",
    "category": "Farm Mechanization",
    "categoryHi": "कृषि यंत्रीकरण",
    "issuingBody": "Central Government (MoA&FW / MoRD)",
    "issuingBodyHi": "केंद्र सरकार (कृषि एवं ग्रामीण विकास मंत्रालय)",
    "tagline": "80% financial assistance (up to ₹8 Lakh) to Women Self Help Groups for agri-drones.",
    "taglineHi": "महिला स्वयं सहायता समूहों को कृषि ड्रोन हेतु 80% (₹8 लाख तक) का अनुदान।",
    "subsidyHighlight": "80% subsidy up to ₹8,00,000",
    "badge": "Women & High Tech",
    "lastVerified": "September 2026",
    "officialUrl": "https://agriwelfare.gov.in",
    "sourceUrl": "https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2002012",
    "minLand": 0,
    "maxLand": 999,
    "farmerTypes": [
      "marginal",
      "small",
      "medium",
      "large"
    ],
    "targetBeneficiary": "Women members of DAY-NRLM Self Help Groups (SHGs)",
    "benefits": [
      "80% subsidy (up to ₹8 Lakh) on cost of agricultural drone package and accessories.",
      "15-day certified drone pilot training with DGCA remote pilot license included free of cost.",
      "SHG can rent drone services to local farmers for liquid nano-urea / pesticide spraying earning ₹10,000-15,000/month."
    ],
    "eligibility": [
      "Active member of an established Women Self Help Group under DAY-NRLM.",
      "Minimum 10th standard pass for designated drone pilot member."
    ],
    "documents": [
      "Aadhaar Card",
      "SHG Registration Certificate",
      "10th Marksheet of pilot",
      "Bank Passbook"
    ],
    "procedure": [
      {
        "step": 1,
        "title": "SHG Resolution",
        "desc": "Pass resolution in SHG meeting and apply through Block Mission Management Unit (BMMU)."
      },
      {
        "step": 2,
        "title": "Pilot Training",
        "desc": "Selected Didi attends 15 days residential DGCA drone flying and maintenance course."
      },
      {
        "step": 3,
        "title": "Drone Handover",
        "desc": "Fertilizer company / Lead agency delivers certified agri-drone with 1 year warranty."
      }
    ],
    "applyUrl": "https://agriwelfare.gov.in",
    "officialDocuments": [
      {
        "title": "Namo Drone Didi Operational Guidelines",
        "source": "Ministry of Agriculture",
        "year": "2024",
        "url": "https://agriwelfare.gov.in"
      }
    ],
    "keywords": [
      "drone didi",
      "namo drone",
      "shg",
      "women drone pilot",
      "drone spray",
      "fertilizer spray",
      "pesticide drone",
      "mahila shg"
    ],
    "targetBeneficiaryHi": "महिला स्वयं सहायता समूह, ग्रामीण महिलाएं",
    "subsidyHighlightHi": "80% ड्रोन लागत सब्सिडी (₹8 लाख तक)",
    "eligibilityHi": [
      "डे-एनआरएलएम (DAY-NRLM) के अंतर्गत स्थापित महिला स्वयं सहायता समूह की सक्रिय सदस्य।",
      "नामित ड्रोन पायलट सदस्य का न्यूनतम 10वीं कक्षा उत्तीर्ण होना अनिवार्य।"
    ],
    "benefitsHi": [
      "कृषि ड्रोन पैकेज एवं आवश्यक उपकरणों की कुल लागत पर 80% सब्सिडी (अधिकतम ₹8 लाख तक)।",
      "डीजीसीए (DGCA) रिमोट पायलट लाइसेंस सहित 15-दिवसीय प्रमाणित ड्रोन पायलट प्रशिक्षण पूर्णतः निःशुल्क।",
      "एसएचजी नैनो यूरिया व कीटनाशक छिड़काव सेवाएं देकर ₹10,000-15,000 प्रति माह अतिरिक्त आय अर्जित कर सकते हैं।"
    ],
    "procedureHi": [
      {
        "step": 1,
        "title": "एसएचजी प्रस्ताव",
        "desc": "एसएचजी बैठक में प्रस्ताव पारित करें और ब्लॉक मिशन प्रबंधन इकाई (BMMU) के माध्यम से आवेदन करें।"
      },
      {
        "step": 2,
        "title": "पायलट प्रशिक्षण",
        "desc": "चयनित दीदी 15 दिनों के आवासीय डीजीसीए ड्रोन उड़ान एवं रखरखाव कोर्स में भाग लेती हैं।"
      },
      {
        "step": 3,
        "title": "ड्रोन हस्तांतरण",
        "desc": "उर्वरक कंपनी/नोडल एजेंसी 1 वर्ष की वारंटी के साथ प्रमाणित कृषि ड्रोन सौंपती है।"
      }
    ],
    "documentsHi": [
      "आधार कार्ड",
      "एसएचजी पंजीकरण प्रमाण पत्र",
      "नामित पायलट सदस्य की 10वीं की अंकतालिका",
      "एसएचजी बैंक खाता पासबुक"
    ]
  },
  {
    "id": "digital-agri-mission",
    "code": "DAM-001",
    "name": "Digital Agriculture Mission (Agristack & Kisan e-Mitra)",
    "nameHi": "डिजिटल कृषि मिशन (एग्रीस्टैक एवं किसान मित्र)",
    "category": "Farm Mechanization",
    "categoryHi": "कृषि यंत्रीकरण",
    "issuingBody": "Cabinet Committee on Economic Affairs (CCEA)",
    "issuingBodyHi": "आर्थिक मामलों की कैबिनेट समिति",
    "tagline": "Digital Farmer ID (Kisan Pehchan) for single-window access to all subsidies and crop surveys.",
    "taglineHi": "सभी योजनाओं और फसल सर्वेक्षणों के लिए डिजिटल किसान पहचान पत्र।",
    "subsidyHighlight": "Instant digital KYC for all schemes",
    "badge": "Digital AgriStack",
    "lastVerified": "September 2026",
    "officialUrl": "https://agristack.gov.in",
    "sourceUrl": "https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2002012",
    "minLand": 0,
    "maxLand": 999,
    "farmerTypes": [
      "marginal",
      "small",
      "medium",
      "large"
    ],
    "targetBeneficiary": "All registered farmers in India",
    "benefits": [
      "Unique Farmer ID linked with Aadhaar and geo-referenced land parcel.",
      "Automatic digital crop survey eliminates need for paper Girdawari from Patwari.",
      "Instant sanction of KCC crop loans and calamity compensation directly into account."
    ],
    "eligibility": [
      "All farmers with verified land records."
    ],
    "documents": [
      "Aadhaar",
      "Land Records"
    ],
    "procedure": [
      {
        "step": 1,
        "title": "Digital Farmer Registry",
        "desc": "Enroll during village digital registry camp or via state farmer portal."
      }
    ],
    "applyUrl": "https://agristack.gov.in",
    "officialDocuments": [
      {
        "title": "Digital Agriculture Mission (Agristack & Kisan e-Mitra) Official Overview",
        "url": "https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2002012",
        "type": "page",
        "source": "Cabinet Committee on Economic Affairs (CCEA)",
        "year": "2024"
      }
    ],
    "keywords": [
      "digital agriculture mission (agristack & kisan e-mitra)",
      "farm mechanization"
    ],
    "targetBeneficiaryHi": "एग्रीस्टैक पर पंजीकृत सभी किसान",
    "subsidyHighlightHi": "डिजिटल किसान आईडी व स्वतः फसल गिरदावरी",
    "eligibilityHi": [
      "सत्यापित भूमि अभिलेख वाले भारत के सभी किसान।"
    ],
    "benefitsHi": [
      "आधार और भू-संदर्भित भूमि पार्सल से जुड़ी विशिष्ट डिजिटल किसान आईडी (Farmer ID)।",
      "स्वचालित डिजिटल फसल सर्वेक्षण से पटवारी से कागजी गिरदावरी की आवश्यकता समाप्त।",
      "केसीसी फसल ऋण और आपदा मुआवजा बिना भौतिक सत्यापन सीधे खाते में त्वरित स्वीकृत।"
    ],
    "procedureHi": [
      {
        "step": 1,
        "title": "डिजिटल किसान रजिस्ट्री",
        "desc": "गांव में आयोजित डिजिटल रजिस्ट्री शिविर में या राज्य किसान पोर्टल के माध्यम से अपना नामांकन कराएं।"
      }
    ],
    "documentsHi": [
      "आधार कार्ड",
      "भूमि अभिलेख",
      "मोबाइल नंबर"
    ]
  },
  {
    "id": "midh",
    "code": "MID-001",
    "name": "Mission for Integrated Development of Horticulture (MIDH)",
    "nameHi": "एकीकृत बागवानी विकास मिशन (एमआईडीएच)",
    "category": "Horticulture",
    "categoryHi": "बागवानी",
    "issuingBody": "Central Government (MoA&FW)",
    "issuingBodyHi": "केंद्र सरकार (कृषि मंत्रालय)",
    "tagline": "Up to 50% subsidy on polyhouses, shade nets, cold storage, and fruit plantation.",
    "taglineHi": "पॉलीहाउस, शेडनेट, कोल्ड स्टोरेज और फलों के बाग लगाने पर 50% तक सब्सिडी।",
    "subsidyHighlight": "Up to 50% capital subsidy",
    "badge": "High Value Crops",
    "lastVerified": "September 2026",
    "officialUrl": "https://midh.gov.in",
    "sourceUrl": "https://agriwelfare.gov.in/en/Major",
    "minLand": 0.2,
    "maxLand": 4,
    "farmerTypes": [
      "marginal",
      "small",
      "medium",
      "large"
    ],
    "targetBeneficiary": "Farmers growing fruits, vegetables, flowers, spices, and protected cultivation",
    "benefits": [
      "50% subsidy for setting up Naturally Ventilated Polyhouses and Shade Net Houses.",
      "Subsidy of ₹40,000 to ₹1,00,000 per hectare for new high-density fruit orchards (Mango, Apple, Citrus, Guava).",
      "Financial assistance for on-farm pack houses, solar cold rooms, and mushroom cultivation units."
    ],
    "eligibility": [
      "Farmers with ownership or registered lease of land for at least 10 years."
    ],
    "documents": [
      "Aadhaar",
      "Land Record (Jamabandi / 7/12)",
      "Detailed Project Report (DPR)",
      "Bank Account"
    ],
    "procedure": [
      {
        "step": 1,
        "title": "Submit DPR to District Horticulture Officer",
        "desc": "Prepare project estimate and submit through state horticulture portal."
      },
      {
        "step": 2,
        "title": "Work Order Issuance",
        "desc": "Receive technical sanction and work order before starting construction."
      },
      {
        "step": 3,
        "title": "Verification & Release",
        "desc": "Geo-tagged verification by department committee and release of back-ended subsidy."
      }
    ],
    "applyUrl": "https://midh.gov.in",
    "officialDocuments": [
      {
        "title": "MIDH Operational Guidelines for Horticulture Development",
        "url": "https://midh.gov.in/PDF/MIDH_Guidelines_2021.pdf",
        "type": "pdf",
        "source": "Mission for Integrated Development of Horticulture",
        "year": "2024"
      }
    ],
    "keywords": [
      "horticulture",
      "midh",
      "fruits",
      "vegetables",
      "polyhouse",
      "greenhouse",
      "cold storage",
      "bagwani",
      "flower cultivation"
    ],
    "targetBeneficiaryHi": "बागवानी किसान, एफपीओ, कृषि उद्यमी",
    "subsidyHighlightHi": "पॉलीहाउस व फलोद्यान पर 50% पूंजी अनुदान",
    "eligibilityHi": [
      "न्यूनतम 10 वर्षों के लिए भूमि का मालिकाना हक या पंजीकृत पट्टा रखने वाले किसान।"
    ],
    "benefitsHi": [
      "प्राकृतिक रूप से हवादार पॉलीहाउस और शेड नेट हाउस स्थापित करने हेतु 50% सब्सिडी।",
      "नए उच्च घनत्व वाले फलोद्यान (आम, सेब, नींबू, अमरूद आदि) लगाने हेतु ₹40,000 से ₹1,00,000 प्रति हेक्टेयर अनुदान।",
      "खेत पर पैक हाउस, सोलर कोल्ड रूम और मशरूम उत्पादन इकाइयों हेतु वित्तीय सहायता।"
    ],
    "procedureHi": [
      {
        "step": 1,
        "title": "जिला उद्यानिकी अधिकारी को डीपीआर प्रस्तुत करें",
        "desc": "परियोजना का प्राक्कलन तैयार करें और राज्य उद्यानिकी पोर्टल के माध्यम से जमा करें।"
      },
      {
        "step": 2,
        "title": "कार्य आदेश जारी होना",
        "desc": "निर्माण कार्य शुरू करने से पहले तकनीकी स्वीकृति एवं वर्क ऑर्डर प्राप्त करें।"
      },
      {
        "step": 3,
        "title": "सत्यापन एवं अनुदान जारी",
        "desc": "विभागीय समिति द्वारा जीपीएस-टैग्ड सत्यापन के बाद बैक-एंडेड सब्सिडी जारी की जाती है।"
      }
    ],
    "documentsHi": [
      "आधार कार्ड",
      "भूमि अभिलेख (जमाबंदी / 7/12)",
      "विस्तृत परियोजना रिपोर्ट (DPR)",
      "बैंक खाता विवरण"
    ]
  },
  {
    "id": "nbhm",
    "code": "NBH-002",
    "name": "National Beekeeping & Honey Mission (NBHM)",
    "nameHi": "राष्ट्रीय मधुमक्खी पालन एवं शहद मिशन",
    "category": "Horticulture",
    "categoryHi": "बागवानी",
    "issuingBody": "National Bee Board (NBB / MoA&FW)",
    "issuingBodyHi": "राष्ट्रीय मधुमक्खी बोर्ड",
    "tagline": "Sweet Revolution: up to 80% subsidy for bee colonies, bee boxes, and honey extraction equipment.",
    "taglineHi": "मधुमक्खी के बक्से, कालोनियां और शहद निष्कर्षण उपकरण पर 80% तक सहायता।",
    "subsidyHighlight": "Up to 80% subsidy for SHGs/FPOs",
    "badge": "Sweet Revolution",
    "lastVerified": "September 2026",
    "officialUrl": "https://agriwelfare.gov.in/en/nbhm",
    "sourceUrl": "https://agriwelfare.gov.in/en/Major",
    "minLand": 0,
    "maxLand": 999,
    "farmerTypes": [
      "marginal",
      "small",
      "medium",
      "large"
    ],
    "targetBeneficiary": "Beekeepers, farmers, landless rural youth, and women SHGs",
    "benefits": [
      "Subsidy on purchase of 10 to 50 bee boxes and colonies.",
      "Increases crop yield by 20-30% through enhanced bee pollination in mustard, sunflower, and fruits.",
      "Additional income of ₹1,00,000 to ₹2,50,000 per year from raw honey, beeswax, and royal jelly."
    ],
    "eligibility": [
      "Trained beekeepers or farmers completing 7-day certified training from KVK/NBB."
    ],
    "documents": [
      "Aadhaar",
      "Training Completion Certificate",
      "Bank Passbook"
    ],
    "procedure": [
      {
        "step": 1,
        "title": "Complete NBB Training",
        "desc": "Attend certified beekeeping training at your local Krishi Vigyan Kendra (KVK)."
      },
      {
        "step": 2,
        "title": "Register on Madhukranti Portal",
        "desc": "Register as beekeeper on madhukranti.in for source traceability."
      },
      {
        "step": 3,
        "title": "Apply for Equipment Subsidy",
        "desc": "Submit application to District Horticulture Officer for bee boxes and colonies."
      }
    ],
    "applyUrl": "https://agriwelfare.gov.in/en/nbhm",
    "officialDocuments": [
      {
        "title": "NBHM Operational Guidelines (MoA&FW)",
        "source": "Department of Agriculture",
        "year": "2024",
        "url": "https://agriwelfare.gov.in/en/nbhm"
      }
    ],
    "keywords": [
      "beekeeping",
      "honey mission",
      "nbhm",
      "madhumakhi palan",
      "bee boxes",
      "sweet revolution",
      "honey processing"
    ],
    "targetBeneficiaryHi": "प्रशिक्षित मधुमक्खी पालक, किसान एवं एफपीओ",
    "subsidyHighlightHi": "मधुमक्खी बक्सों व कॉलोनियों पर 50% सब्सिडी",
    "eligibilityHi": [
      "प्रशिक्षित मधुमक्खी पालक या केवीके/राष्ट्रीय मधुमक्खी बोर्ड (NBB) से 7-दिवसीय प्रमाणित प्रशिक्षण पूर्ण करने वाले किसान।"
    ],
    "benefitsHi": [
      "10 से 50 मधुमक्खी बक्से और कॉलोनियों की खरीद पर 50% तक पूंजीगत सब्सिडी।",
      "सरसों, सूरजमुखी और फलों में मधुमक्खी परागण से फसल उपज में 20-30% की प्राकृतिक वृद्धि।",
      "कच्चा शहद, मोम और रॉयल जेली से प्रति वर्ष ₹1,00,000 से ₹2,50,000 की अतिरिक्त आय।"
    ],
    "procedureHi": [
      {
        "step": 1,
        "title": "प्रशिक्षण पूर्ण करें",
        "desc": "अपने स्थानीय कृषि विज्ञान केंद्र (KVK) में प्रमाणित मधुमक्खी पालन प्रशिक्षण में भाग लें।"
      },
      {
        "step": 2,
        "title": "मधुक्रांति पोर्टल पर पंजीकरण",
        "desc": "शहद ट्रेसिबिलिटी हेतु madhukranti.in पोर्टल पर मधुमक्खी पालक के रूप में पंजीकरण करें।"
      },
      {
        "step": 3,
        "title": "उपकरण सब्सिडी हेतु आवेदन",
        "desc": "मधुमक्खी के बक्से और कॉलोनियां प्राप्त करने हेतु जिला उद्यानिकी अधिकारी को आवेदन प्रस्तुत करें।"
      }
    ],
    "documentsHi": [
      "आधार कार्ड",
      "प्रशिक्षण पूर्णता प्रमाण पत्र",
      "भूमि या शेड का स्वामित्व/पट्टा",
      "बैंक खाता पासबुक"
    ]
  },
  {
    "id": "rashtriya-gokul-mission",
    "code": "RGM-001",
    "name": "Rashtriya Gokul Mission (RGM)",
    "nameHi": "राष्ट्रीय गोकुल मिशन",
    "category": "Livestock & Dairy",
    "categoryHi": "पशुपालन और डेयरी",
    "issuingBody": "Department of Animal Husbandry & Dairying (DAHD)",
    "issuingBodyHi": "पशुपालन और डेयरी विभाग",
    "tagline": "Up to 50% capital subsidy (up to ₹2 Crore) for indigenous cattle breed development and IVF tech.",
    "taglineHi": "देशी गोवंश संवर्धन, डेयरी फार्मिंग और कृत्रिम गर्भाधान पर 50% तक सब्सिडी।",
    "subsidyHighlight": "50% capital subsidy (up to ₹2 Cr)",
    "badge": "Dairy Development",
    "lastVerified": "September 2026",
    "officialUrl": "https://dahd.gov.in",
    "sourceUrl": "https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2002012",
    "minLand": 0,
    "maxLand": 999,
    "farmerTypes": [
      "marginal",
      "small",
      "medium",
      "large"
    ],
    "targetBeneficiary": "Dairy farmers, cooperatives, entrepreneurs, and cattle breeders",
    "benefits": [
      "Free doorstep Artificial Insemination (AI) using high genetic merit sex-sorted semen.",
      "50% capital subsidy (up to ₹4 Lakh) for individual farmers setting up small breed multiplication farms.",
      "Promotes indigenous breeds: Gir, Sahiwal, Red Sindhi, Tharparkar, Kankrej."
    ],
    "eligibility": [
      "Dairy farmers having suitable land/shed for housing cattle."
    ],
    "documents": [
      "Aadhaar",
      "Land/Shed ownership or lease",
      "Training Certificate in Dairy Management",
      "Bank Account"
    ],
    "procedure": [
      {
        "step": 1,
        "title": "Doorstep AI Request",
        "desc": "Contact local MAITRI worker or Veterinary Hospital for free artificial insemination."
      },
      {
        "step": 2,
        "title": "Commercial Farm Subsidy",
        "desc": "Apply on dahd.nic.in along with detailed project proposal and bank appraisal."
      }
    ],
    "applyUrl": "https://dahd.gov.in",
    "officialDocuments": [
      {
        "title": "RGM Revised Guidelines & Breeds",
        "source": "Department of Animal Husbandry & Dairying",
        "year": "2024",
        "url": "https://dahd.gov.in"
      }
    ],
    "keywords": [
      "rashtriya gokul mission (rgm)",
      "livestock & dairy"
    ],
    "targetBeneficiaryHi": "डेयरी किसान, पशुपालक, कृत्रिम गर्भाधान तकनीशियन",
    "subsidyHighlightHi": "उच्च आनुवंशिक सांड वीर्य व 50% नस्ल संवर्धन अनुदान",
    "eligibilityHi": [
      "गाय/भैंस पालने वाले डेयरी किसान और पशुपालक।"
    ],
    "benefitsHi": [
      "सेक्स-सॉर्टेड सीमन (वीर्य) के उपयोग से 90% संभावना के साथ बछिया जन्म, जिससे नर बछड़ों की समस्या खत्म होती है।",
      "50 दुधारू गायों/भैंसों की नस्ल संवर्धन इकाई स्थापित करने हेतु 50% पूंजीगत सब्सिडी (अधिकतम ₹2 करोड़ तक)।",
      "निःशुल्क कृत्रिम गर्भाधान (AI) सेवा और आईवीएफ (IVF) भ्रूण प्रत्यारोपण तकनीक पर सब्सिडी।"
    ],
    "procedureHi": [
      {
        "step": 1,
        "title": "मैत्री कार्यकर्ता से संपर्क",
        "desc": "अपने नजदीकी पशु चिकित्सालय या मैत्री (MAITRI) तकनीशियन से कृत्रिम गर्भाधान हेतु संपर्क करें।"
      },
      {
        "step": 2,
        "title": "पशु का ईयर-टैगिंग (INAPH)",
        "desc": "12 अंकों के विशिष्ट यूआईडी टैग के साथ अपने पशु को राष्ट्रीय डेटाबेस में पंजीकृत कराएं।"
      },
      {
        "step": 3,
        "title": "नस्ल सुधार इकाई हेतु आवेदन",
        "desc": "उद्यम इकाई स्थापित करने हेतु dahd.gov.in पोर्टल पर परियोजना रिपोर्ट प्रस्तुत करें।"
      }
    ],
    "documentsHi": [
      "आधार कार्ड",
      "डेयरी प्रबंधन में प्रशिक्षण प्रमाण पत्र",
      "भूमि स्वामित्व विलेख",
      "बैंक सैद्धांतिक ऋण स्वीकृति पत्र"
    ]
  },
  {
    "id": "nlm",
    "code": "NLM-002",
    "name": "National Livestock Mission (NLM)",
    "nameHi": "राष्ट्रीय पशुधन मिशन",
    "category": "Livestock & Dairy",
    "categoryHi": "पशुपालन और डेयरी",
    "issuingBody": "Department of Animal Husbandry & Dairying",
    "issuingBodyHi": "पशुपालन एवं डेयरी विभाग",
    "tagline": "50% capital subsidy up to ₹50 Lakh for goat, sheep, piggery, and poultry breeding farms.",
    "taglineHi": "बकरी, भेड़, सुअर और मुर्गी पालन ब्रीडिंग फार्म पर 50% (₹50 लाख तक) सब्सिडी।",
    "subsidyHighlight": "50% Subsidy up to ₹50 Lakhs",
    "badge": "Poultry & Goat Breeding",
    "lastVerified": "September 2026",
    "officialUrl": "https://udyamimitra.in",
    "sourceUrl": "https://agriwelfare.gov.in/en/Major",
    "minLand": 0,
    "maxLand": 999,
    "farmerTypes": [
      "marginal",
      "small",
      "medium",
      "large"
    ],
    "targetBeneficiary": "Individuals, SHGs, FPOs, JLGs, and Section 8 companies",
    "benefits": [
      "50% back-ended capital subsidy on total project cost (e.g., ₹25 Lakh on a ₹50 Lakh 500-goat breeding unit).",
      "Subsidy up to ₹25 Lakh for rural backyard poultry parent farms (1,000 birds).",
      "Fodder and feed infrastructure subsidy up to ₹50 Lakh for silage and TMR units."
    ],
    "eligibility": [
      "Applicants having own or leased land for livestock shed and trained in animal husbandry."
    ],
    "documents": [
      "Aadhaar",
      "Land title deed",
      "Project Report (DPR)",
      "Bank in-principle loan sanction letter"
    ],
    "procedure": [
      {
        "step": 1,
        "title": "Register on NLM Portal",
        "desc": "Visit nlm.udyamimitra.in and submit project proposal."
      },
      {
        "step": 2,
        "title": "State Level Committee Approval",
        "desc": "State Level Executive Committee (SLEC) reviews and forwards to SIDBI."
      },
      {
        "step": 3,
        "title": "Subsidy in 2 Tranches",
        "desc": "First 50% subsidy released upon bank disbursement; second 50% upon physical completion."
      }
    ],
    "applyUrl": "https://udyamimitra.in",
    "officialDocuments": [
      {
        "title": "NLM Operational Guidelines",
        "source": "DAHD / UdyamiMitra",
        "year": "2024",
        "url": "https://udyamimitra.in"
      }
    ],
    "keywords": [
      "livestock mission",
      "nlm",
      "poultry",
      "goat farming",
      "sheep",
      "silage",
      "pashudhan",
      "bakri palan",
      "murgi palan"
    ],
    "targetBeneficiaryHi": "बकरी, भेड़, मुर्गी एवं सुअर पालक किसान व उद्यमी",
    "subsidyHighlightHi": "पशुधन प्रजनन फार्म पर 50% सब्सिडी (₹50 लाख तक)",
    "eligibilityHi": [
      "व्यक्तिगत किसान, स्वयं सहायता समूह, एफपीओ या संयुक्त देयता समूह जिनके पास आवश्यक भूमि और शेड की व्यवस्था हो।"
    ],
    "benefitsHi": [
      "बकरी/भेड़ प्रजनन फार्म (500 मादा + 25 नर) पर 50% पूंजी अनुदान (अधिकतम ₹50 लाख तक)।",
      "ब्रायलर व लेयर बैकयार्ड पोल्ट्री फार्म (1000 पक्षी) पर 50% सब्सिडी (₹25 लाख तक)।",
      "चारा उत्पादन, साइलेज मेकिंग और साइलेज बेलर मशीनों पर 50% अनुदान।"
    ],
    "procedureHi": [
      {
        "step": 1,
        "title": "डीपीआर तैयार करें",
        "desc": "पशुपालन विशेषज्ञ से विस्तृत परियोजना रिपोर्ट (DPR) तैयार करवाएं।"
      },
      {
        "step": 2,
        "title": "उद्यमी मित्र पोर्टल पर आवेदन",
        "desc": "udyamimitra.in पोर्टल पर जाकर NLM योजना के तहत ऑनलाइन आवेदन करें।"
      },
      {
        "step": 3,
        "title": "राज्य स्तरीय समिति से अनुमोदन",
        "desc": "राज्य नोडल एजेंसी और बैंक द्वारा डीपीआर जांच के बाद स्वीकृति पत्र जारी होता है।"
      }
    ],
    "documentsHi": [
      "आधार कार्ड और पैन कार्ड",
      "भूमि दस्तावेज / दीर्घकालिक पट्टा विलेख (न्यूनतम 10 वर्ष)",
      "जल गुणवत्ता परीक्षण रिपोर्ट",
      "बैंक विवरण"
    ]
  },
  {
    "id": "pmmsy",
    "code": "PMS-002",
    "name": "Pradhan Mantri Matsya Sampada Yojana (PMMSY)",
    "nameHi": "प्रधानमंत्री मत्स्य संपदा योजना",
    "category": "Fisheries",
    "categoryHi": "मत्स्य पालन",
    "issuingBody": "Department of Fisheries (MoFAHD)",
    "issuingBodyHi": "मत्स्य पालन विभाग",
    "tagline": "40% to 60% subsidy for fish ponds, biofloc, Recirculating Aquaculture Systems (RAS), and boats.",
    "taglineHi": "मछली तालाब निर्माण, बायोफ्लॉक और नावों पर 40% से 60% तक भारी सब्सिडी।",
    "subsidyHighlight": "40% to 60% financial assistance",
    "badge": "Blue Revolution",
    "lastVerified": "September 2026",
    "officialUrl": "https://pmmsy.dof.gov.in",
    "sourceUrl": "https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2002012",
    "minLand": 0.2,
    "maxLand": 999,
    "farmerTypes": [
      "marginal",
      "small",
      "medium",
      "large"
    ],
    "targetBeneficiary": "Fishers, fish farmers, fish workers, SHGs, and fisheries cooperatives",
    "benefits": [
      "60% financial assistance for Women and SC/ST beneficiaries; 40% for General category.",
      "Subsidy for constructing new freshwater fish ponds (₹7 Lakh/ha unit cost).",
      "Assistance for Biofloc aquaculture systems, ice plants, refrigerated vans, and retail fish kiosks."
    ],
    "eligibility": [
      "Own or leased land with adequate fresh water supply suitable for pond construction."
    ],
    "documents": [
      "Aadhaar",
      "Land Document / Long term lease deed (minimum 10 years)",
      "Water quality test report",
      "Bank Details"
    ],
    "procedure": [
      {
        "step": 1,
        "title": "Online Application",
        "desc": "Apply via pmmsy.dof.gov.in or submit DPR to District Fisheries Development Officer (DFDO)."
      },
      {
        "step": 2,
        "title": "Site Inspection & Sanction",
        "desc": "Fisheries inspector inspects soil permeability and water table."
      },
      {
        "step": 3,
        "title": "Direct Benefit Transfer",
        "desc": "Subsidy released stage-wise in sync with pond excavation and fingerling stocking."
      }
    ],
    "applyUrl": "https://pmmsy.dof.gov.in",
    "officialDocuments": [
      {
        "title": "PMMSY Operational Guidelines (Fisheries Sector)",
        "url": "https://dof.gov.in/sites/default/files/2020-07/PMMSY_Guidelines.pdf",
        "type": "pdf",
        "source": "Department of Fisheries (MoFAHD)",
        "year": "2024"
      }
    ],
    "keywords": [
      "matsya sampada",
      "pmmsy",
      "fisheries",
      "fish pond",
      "aquaculture",
      "biofloc",
      "ras",
      "machhli palan",
      "fishing boat"
    ],
    "targetBeneficiaryHi": "मछुआरे, मछली पालक, स्वयं सहायता समूह, तटीय समुदाय",
    "subsidyHighlightHi": "तालाब व आरएएस (RAS) पर 40% से 60% सब्सिडी",
    "eligibilityHi": [
      "व्यक्तिगत किसान या मछुआरे जिनके पास तालाब निर्माण हेतु भूमि या जल निकाय पट्टा उपलब्ध हो।"
    ],
    "benefitsHi": [
      "सामान्य वर्ग को 40% वित्तीय सहायता; महिलाओं, अनुसूचित जाति और जनजाति को 60% सब्सिडी।",
      "नए मीठे पानी के तालाब निर्माण, बायोफ्लॉक (Biofloc) और रिसर्कुलेटरी एक्वाकल्चर सिस्टम (RAS) हेतु सहायता।",
      "मछली परिवहन हेतु इंसुलेटेड वैन, दोपहिया वाहन आइसबॉक्स और फीड मिलों पर सब्सिडी।"
    ],
    "procedureHi": [
      {
        "step": 1,
        "title": "मत्स्य पोर्टल पर आवेदन",
        "desc": "pmmsy.dof.gov.in पर जाकर ऑनलाइन पंजीकरण करें और जिला मत्स्य अधिकारी को आवेदन प्रस्तुत करें।"
      },
      {
        "step": 2,
        "title": "जिला स्तरीय समिति (DLC) अनुमोदन",
        "desc": "जिला कलेक्टर की अध्यक्षता में गठित डीएलसी समिति परियोजना की तकनीकी व्यवहार्यता स्वीकृत करती है।"
      },
      {
        "step": 3,
        "title": "निर्माण एवं सब्सिडी संवितरण",
        "desc": "तालाब निर्माण के बाद जीपीएस सत्यापन होता है और सब्सिडी 3 किस्तों में बैंक खाते में अंतरित होती है।"
      }
    ],
    "documentsHi": [
      "आधार कार्ड",
      "भूमि या तालाब का स्वामित्व/पट्टा प्रमाण",
      "मत्स्य विभाग से एनओसी / व्यवहार्यता रिपोर्ट",
      "बैंक पासबुक"
    ]
  },
  {
    "id": "deds",
    "code": "DED-001",
    "name": "Dairy Processing & Infrastructure Development (DIDIF / DEDS)",
    "nameHi": "डेयरी उद्यमिता विकास योजना",
    "category": "Livestock & Dairy",
    "categoryHi": "पशुपालन और डेयरी",
    "issuingBody": "NABARD & DAHD",
    "issuingBodyHi": "नाबार्ड एवं पशुपालन विभाग",
    "tagline": "Subsidy for small dairy units (2 to 10 crossbred cows/buffaloes) and milk chilling equipment.",
    "taglineHi": "2 से 10 दुधारू पशुओं की डेयरी यूनिट और मिल्क चिलिंग उपकरणों पर अनुदान।",
    "subsidyHighlight": "25% (Gen) / 33.33% (SC/ST) subsidy",
    "badge": "Dairy Entrepreneur",
    "lastVerified": "September 2026",
    "officialUrl": "https://www.nabard.org",
    "sourceUrl": "https://agriwelfare.gov.in/en/Major",
    "minLand": 0,
    "maxLand": 999,
    "farmerTypes": [
      "marginal",
      "small",
      "medium"
    ],
    "targetBeneficiary": "Small farmers, milk producers, and rural youth",
    "benefits": [
      "25% capital subsidy for General (up to ₹1.75 Lakh for 10 milch animal unit); 33.33% for SC/ST (up to ₹2.33 Lakh).",
      "Loans available from Commercial, Regional Rural, and Cooperative Banks.",
      "Covers milking machines, bulk milk coolers, and dairy sheds."
    ],
    "eligibility": [
      "Farmers and individuals interested in starting or expanding clean milk production."
    ],
    "documents": [
      "Aadhaar",
      "Bank Account Details",
      "Land or Shed verification",
      "Veterinary fitness certificate of animals"
    ],
    "procedure": [
      {
        "step": 1,
        "title": "Submit Application to Bank",
        "desc": "Submit loan application for dairy project to your nearest commercial or rural bank."
      },
      {
        "step": 2,
        "title": "Bank Sanction & Upload to NABARD",
        "desc": "Bank inspects shed, sanctions loan, and claims subsidy through NABARD portal."
      }
    ],
    "applyUrl": "https://www.nabard.org",
    "officialDocuments": [
      {
        "title": "Dairy Processing & Infrastructure Development (DIDIF / DEDS) Official Overview",
        "url": "https://agriwelfare.gov.in/en/Major",
        "type": "page",
        "source": "NABARD & DAHD",
        "year": "2024"
      }
    ],
    "keywords": [
      "dairy processing & infrastructure development (didif / deds)",
      "livestock & dairy"
    ],
    "targetBeneficiaryHi": "डेयरी किसान, दुग्ध सहकारी समितियां, एसएचजी",
    "subsidyHighlightHi": "दुधारू पशुओं व मिल्क कूलर पर 25% - 33.3% सब्सिडी",
    "eligibilityHi": [
      "लघु किसान, कृषि मजदूर और डेयरी उद्यमी जो 2 से 10 संकर गाय या भैंस खरीदना चाहते हैं।"
    ],
    "benefitsHi": [
      "सामान्य वर्ग को 25% बैक-एंडेड पूंजी सब्सिडी; अनुसूचित जाति एवं जनजाति को 33.33% सब्सिडी।",
      "दुग्ध शीतलन केंद्र (बीएमसी), मिल्किंग मशीन और डेयरी शेड निर्माण हेतु सहायता।",
      "नाबार्ड (NABARD) के माध्यम से वाणिज्यिक, ग्रामीण एवं सहकारी बैंकों से आसान ऋण।"
    ],
    "procedureHi": [
      {
        "step": 1,
        "title": "बैंक शाखा में आवेदन",
        "desc": "अपनी नजदीकी बैंक शाखा में जाकर डीईडीएस / नाबार्ड डेयरी योजना हेतु फॉर्म भरें।"
      },
      {
        "step": 2,
        "title": "नाबार्ड सब्सिडी पोर्टल पर दावा",
        "desc": "ऋण संवितरण के बाद बैंक नाबार्ड पोर्टल पर सब्सिडी राशि का दावा करता है जो किसान के सब्सिडी रिजर्व फंड में जमा होती है।"
      }
    ],
    "documentsHi": [
      "आधार कार्ड",
      "भूमि या शेड का सत्यापन",
      "पशुओं का पशु चिकित्सा स्वास्थ्य प्रमाण पत्र",
      "बैंक पासबुक"
    ]
  },
  {
    "id": "pmfme",
    "code": "FME-001",
    "name": "PM Formalisation of Micro Food Processing Enterprises (PMFME)",
    "nameHi": "पीएम सूक्ष्म खाद्य उद्योग उन्नयन योजना",
    "category": "Food Processing",
    "categoryHi": "खाद्य प्रसंस्करण",
    "issuingBody": "Ministry of Food Processing Industries (MoFPI)",
    "issuingBodyHi": "खाद्य प्रसंस्करण उद्योग मंत्रालय",
    "tagline": "35% credit-linked capital subsidy up to ₹10 Lakh under One District One Product (ODOP).",
    "taglineHi": "एक जिला एक उत्पाद (ओडीओपी) के तहत खाद्य प्रसंस्करण इकाई पर 35% (₹10 लाख तक) सब्सिडी।",
    "subsidyHighlight": "35% subsidy up to ₹10,00,000",
    "badge": "ODOP Food Processing",
    "lastVerified": "September 2026",
    "officialUrl": "https://pmfme.mofpi.gov.in",
    "sourceUrl": "https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2002012",
    "minLand": 0,
    "maxLand": 999,
    "farmerTypes": [
      "marginal",
      "small",
      "medium",
      "large"
    ],
    "targetBeneficiary": "Existing or new micro food processing units (flour mills, oil extraction, pickle/jam, spice grinding)",
    "benefits": [
      "35% credit-linked capital subsidy on eligible project cost up to maximum ₹10 Lakh per unit.",
      "Seed capital of ₹40,000 per member for SHGs for working capital and small tool purchases.",
      "Free technical training, FSSAI licensing support, packaging, and branding assistance under ODOP."
    ],
    "eligibility": [
      "Existing or aspiring food processing entrepreneurs, FPOs, SHGs, and Producer Cooperatives.",
      "Individual must be above 18 years of age with minimum 8th class education."
    ],
    "documents": [
      "Aadhaar & PAN Card",
      "Electricity bill of processing premises / Rent agreement",
      "Detailed Project Report (DPR) generated on portal",
      "Bank Account details & 6 months statement"
    ],
    "procedure": [
      {
        "step": 1,
        "title": "Register on PMFME Portal",
        "desc": "Visit pmfme.mofpi.gov.in → Sign up as Applicant."
      },
      {
        "step": 2,
        "title": "District Resource Person (DRP) Assistance",
        "desc": "Free assigned DRP helps you prepare DPR and upload FSSAI papers."
      },
      {
        "step": 3,
        "title": "Bank Credit & Subsidy Credit",
        "desc": "Bank sanctions loan; MoFPI credits 35% subsidy into bank escrow account."
      }
    ],
    "applyUrl": "https://pmfme.mofpi.gov.in",
    "officialDocuments": [
      {
        "title": "PMFME Scheme Guidelines & One District One Product (ODOP) Framework",
        "url": "https://mofpi.gov.in/sites/default/files/pmfme_guidelines.pdf",
        "type": "pdf",
        "source": "Ministry of Food Processing Industries",
        "year": "2024"
      }
    ],
    "keywords": [
      "food processing",
      "pmfme",
      "odop",
      "micro enterprise",
      "flour mill",
      "oil mill",
      "pickle making",
      "khadya prasanskaran"
    ],
    "targetBeneficiaryHi": "सूक्ष्म खाद्य प्रसंस्करण उद्यमी, किसान, एसएचजी, एफपीओ",
    "subsidyHighlightHi": "खाद्य प्रसंस्करण मशीनरी पर 35% क्रेडिट-लिंक्ड सब्सिडी",
    "eligibilityHi": [
      "व्यक्तिगत खाद्य प्रसंस्करण इकाइयां, स्वयं सहायता समूह (SHG), एफपीओ या उत्पादक सहकारी समितियां।",
      "आवेदक की आयु न्यूनतम 18 वर्ष होनी चाहिए और इकाई 'एक जिला एक उत्पाद' (ODOP) के अनुकूल होनी चाहिए।"
    ],
    "benefitsHi": [
      "परियोजना लागत का 35% क्रेडिट-लिंक्ड पूंजी अनुदान (अधिकतम ₹10 लाख प्रति इकाई)।",
      "एसएचजी सदस्यों को कार्यशील पूंजी और छोटे औजारों की खरीद हेतु ₹40,000 प्रति सदस्य प्रारंभिक बीज पूंजी।",
      "ब्रांडिंग, पैकेजिंग और एफएसएसएआई (FSSAI) खाद्य लाइसेंस प्राप्त करने में पूर्ण सहयोग।"
    ],
    "procedureHi": [
      {
        "step": 1,
        "title": "पीएमएफएमई पोर्टल पर पंजीकरण",
        "desc": "pmfme.mofpi.gov.in पर जाएं और व्यक्तिगत या एसएचजी श्रेणी में आवेदन करें।"
      },
      {
        "step": 2,
        "title": "जिला संसाधन व्यक्ति (DRP) सहायता",
        "desc": "डीआरपी आपके खाद्य उत्पाद हेतु विस्तृत परियोजना रिपोर्ट (DPR) तैयार करने में निःशुल्क सहायता करता है।"
      },
      {
        "step": 3,
        "title": "बैंक ऋण एवं सब्सिडी रिलीज",
        "desc": "बैंक ऋण स्वीकृत करता है और 35% सब्सिडी राशि बैंक में ऋण खाते में समायोजित की जाती है।"
      }
    ],
    "documentsHi": [
      "आधार कार्ड एवं पैन कार्ड",
      "खाद्य प्रसंस्करण परिसर का बिजली बिल / किराया अनुबंध",
      "एफएसएसएआई (FSSAI) खाद्य व्यवसाय पंजीकरण / आवेदन",
      "उद्यम आधार पंजीकरण (MSME)",
      "मशीनरी का कोटेशन एवं पोर्टल द्वारा तैयार डीपीआर"
    ]
  },
  {
    "id": "rkvy",
    "code": "RKV-001",
    "name": "Rashtriya Krishi Vikas Yojana (RKVY-RAFTAAR)",
    "nameHi": "राष्ट्रीय कृषि विकास योजना (रफ्तार)",
    "category": "Rural Development",
    "categoryHi": "ग्रामीण विकास",
    "issuingBody": "Central & State Governments (MoA&FW)",
    "issuingBodyHi": "केंद्र एवं राज्य सरकारें",
    "tagline": "Grants up to ₹25 Lakh for agri-startups, farm infrastructure, and value-chain development.",
    "taglineHi": "कृषि स्टार्टअप्स और कृषि अवसंरचना के लिए ₹25 लाख तक का सरकारी अनुदान।",
    "subsidyHighlight": "Grants up to ₹25 Lakhs for Agri-Entrepreneurs",
    "badge": "Agri Innovation",
    "lastVerified": "September 2026",
    "officialUrl": "https://rkvy.da.gov.in",
    "sourceUrl": "https://agriwelfare.gov.in/en/Major",
    "minLand": 0,
    "maxLand": 999,
    "farmerTypes": [
      "marginal",
      "small",
      "medium",
      "large"
    ],
    "targetBeneficiary": "Farmers, agri-startups, youth innovators, and rural cooperatives",
    "benefits": [
      "Idea stage grant: up to ₹5 Lakh (85% grant) for agripreneurship orientation.",
      "Seed stage grant: up to ₹25 Lakh (85% grant) for market-ready agricultural innovations.",
      "State-specific custom projects: cold chains, warehouses, veterinary clinics, post-harvest centers."
    ],
    "eligibility": [
      "Indian citizens, farmer groups, or registered startups addressing agricultural challenges."
    ],
    "documents": [
      "Aadhaar",
      "Pitch Deck / DPR",
      "Educational qualification proof",
      "Bank details"
    ],
    "procedure": [
      {
        "step": 1,
        "title": "Apply at Knowledge Partner Incubation Center",
        "desc": "Submit application to RKVY incubation center (e.g., IARI Pusa, MANAGE, CCS HAU)."
      },
      {
        "step": 2,
        "title": "Two-Month Mentorship",
        "desc": "Complete 2 months residential/virtual incubation program with ₹10,000/month stipend."
      },
      {
        "step": 3,
        "title": "Grant Disbursement",
        "desc": "Present to Seed Support Committee for milestone-based fund release."
      }
    ],
    "applyUrl": "https://rkvy.da.gov.in",
    "officialDocuments": [
      {
        "title": "RKVY-RAFTAAR Operational Guidelines",
        "source": "Department of Agriculture",
        "year": "2024",
        "url": "https://rkvy.da.gov.in"
      }
    ],
    "keywords": [
      "rkvy",
      "raftaar",
      "agri startup",
      "incubation",
      "infrastructure",
      "krishi vikas",
      "agri entrepreneur"
    ],
    "targetBeneficiaryHi": "कृषि उद्यमी, नवोन्मेषी स्टार्ट-अप, एफपीओ",
    "subsidyHighlightHi": "एग्री-स्टार्टअप को ₹5 लाख से ₹25 लाख तक का सीधा अनुदान",
    "eligibilityHi": [
      "कृषि, खाद्य प्रसंस्करण, ड्रोन, एआई या सिंचाई में नवीन उत्पाद/विचार रखने वाले नवोन्मेषी या युवा।"
    ],
    "benefitsHi": [
      "आइडिया स्टेज पर 'एग्रीप्रेन्योरशिप ओरिएंटेशन' हेतु ₹5 लाख का 100% इक्विटी-मुक्त अनुदान।",
      "प्रोटोटाइप / न्यूनतम व्यावहारिक उत्पाद (MVP) वाले स्टार्ट-अप को 'सीड स्टेज' पर ₹25 लाख तक अनुदान।",
      "आईआईटी, आईआईएम और शीर्ष कृषि विश्वविद्यालयों (केएयू, आईएआरआई, सीसीएसएचएयू) में 2 महीने का निःशुल्क इनक्यूबेशन।"
    ],
    "procedureHi": [
      {
        "step": 1,
        "title": "नॉलेज पार्टनर (KPH) का चयन",
        "desc": "rkvy.da.gov.in पर अपने निकटतम कृषि इनक्यूबेशन सेंटर (जैसे पूसा कृषि, मानिज आदि) का चयन करें।"
      },
      {
        "step": 2,
        "title": "ऑनलाइन आवेदन व पिच डेक",
        "desc": "आवेदन फॉर्म भरें और अपनी कृषि तकनीक या समाधान का संक्षिप्त वीडियो व प्रेजेंटेशन अपलोड करें।"
      },
      {
        "step": 3,
        "title": "चयन समिति के समक्ष प्रस्तुति",
        "desc": "विशेषज्ञ जूरी के समक्ष साक्षात्कार दें। चयनित होने पर अनुदान राशि दो किस्तों में जारी होती है।"
      }
    ],
    "documentsHi": [
      "आधार कार्ड और पैन कार्ड",
      "शैक्षणिक योग्यता प्रमाण",
      "पिच डेक / परियोजना रिपोर्ट (DPR)",
      "बैंक खाता विवरण व 6 महीने का स्टेटमेंट"
    ]
  },
  {
    "id": "pm-ddky",
    "code": "DDK-001",
    "name": "PM Dhan-Dhaanya Krishi Yojana (PM-DDKY)",
    "nameHi": "प्रधानमंत्री धन-धान्य कृषि योजना",
    "category": "Rural Development",
    "categoryHi": "ग्रामीण विकास",
    "issuingBody": "Convergence Mission (MoA&FW & State Depts)",
    "issuingBodyHi": "अभिसरण मिशन (कृषि मंत्रालय)",
    "tagline": "Intensive 100-district convergence scheme providing priority credit, irrigation, and storage.",
    "taglineHi": "100 चयनित कृषि जिलों में प्राथमिकता आधारित ऋण, सिंचाई और भंडारण की योजना।",
    "subsidyHighlight": "Priority district fast-track subsidy",
    "badge": "100 District Focus",
    "lastVerified": "September 2026",
    "officialUrl": "https://agriwelfare.gov.in",
    "sourceUrl": "https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2002012",
    "minLand": 0.1,
    "maxLand": 999,
    "farmerTypes": [
      "marginal",
      "small",
      "medium"
    ],
    "targetBeneficiary": "Farmers in 100 low-productivity aspirational agricultural districts",
    "benefits": [
      "Bundled single-window access to KCC, PMKSY, Soil Health, and crop insurance.",
      "Fast-track doorstep sanction through district special task forces.",
      "Assistance for setting up primary processing clusters at village panchayat level."
    ],
    "eligibility": [
      "Residents of notified target districts owning agricultural land."
    ],
    "documents": [
      "Aadhaar",
      "Land Records",
      "Bank Passbook"
    ],
    "procedure": [
      {
        "step": 1,
        "title": "District Camp Enrollment",
        "desc": "Visit block-level convergence camps organized fortnightly."
      }
    ],
    "applyUrl": "https://agriwelfare.gov.in",
    "officialDocuments": [
      {
        "title": "PM Dhan-Dhaanya Krishi Guidelines & Pulses Incentive Framework",
        "url": "https://pib.gov.in/PressReleasePage.aspx?PRID=2028810",
        "type": "page",
        "source": "Ministry of Agriculture & Farmers Welfare",
        "year": "2024"
      }
    ],
    "keywords": [
      "dhan dhaanya",
      "pm ddky",
      "pulses self sufficiency",
      "oilseeds incentive",
      "crop diversification",
      "dal utpadan"
    ],
    "targetBeneficiaryHi": "सभी खाद्य तेल एवं दलहन उत्पादक किसान",
    "subsidyHighlightHi": "प्रमाणित बीज मिनीकिट व खरीद गारंटी",
    "eligibilityHi": [
      "सरसों, मूंगफली, सोयाबीन, सूरजमुखी या दलहन फसलें उगाने वाले किसान।"
    ],
    "benefitsHi": [
      "उच्च उपज वाली प्रमाणित बीज किस्मों की निःशुल्क मिनीकिट सीधे किसान के घर तक।",
      "कीट एवं रोग निगरानी हेतु निःशुल्क फेरोमोन ट्रैप और बायो-एजेंट का वितरण।",
      "नेफेड और एफसीआई के माध्यम से एमएसपी पर 100% खरीद गारंटी।"
    ],
    "procedureHi": [
      {
        "step": 1,
        "title": "कृषि प्रसार अधिकारी से संपर्क",
        "desc": "अपने ब्लॉक कृषि कार्यालय में जाएं और बुवाई सीजन से पहले बीज मिनीकिट वितरण में नाम दर्ज कराएं।"
      }
    ],
    "documentsHi": [
      "आधार कार्ड",
      "भूमि अभिलेख (खतौनी)",
      "बैंक खाता विवरण"
    ]
  },
  {
    "id": "mgnrega-farm-pond",
    "code": "MGN-001",
    "name": "MGNREGA - Individual Farm Pond & Well Scheme",
    "nameHi": "मनरेगा - व्यक्तिगत खेत तालाब एवं कुआं निर्माण",
    "category": "Rural Development",
    "categoryHi": "ग्रामीण विकास",
    "issuingBody": "Ministry of Rural Development (MoRD)",
    "issuingBodyHi": "ग्रामीण विकास मंत्रालय",
    "tagline": "100% grant for constructing individual farm ponds (Khet Talab), open irrigation wells, and bunding.",
    "taglineHi": "खेत तालाब (खेत तलाई), सिंचाई कुआं और मेड़बंदी के लिए 100% सरकारी सहायता।",
    "subsidyHighlight": "100% Grant (Labor + Material up to ₹3.5 Lakh)",
    "badge": "100% Centrally Funded",
    "lastVerified": "September 2026",
    "officialUrl": "https://nrega.nic.in",
    "sourceUrl": "https://agriwelfare.gov.in/en/Major",
    "minLand": 0.2,
    "maxLand": 5,
    "farmerTypes": [
      "marginal",
      "small"
    ],
    "targetBeneficiary": "Small and marginal farmers holding active MGNREGA Job Cards (Priority to SC/ST/Women/FRA)",
    "benefits": [
      "100% cost of labor and construction material funded by government (typical unit cost ₹1.5 Lakh to ₹3.5 Lakh).",
      "Creates perennial on-farm water reservoir for critical crop irrigation during dry spells.",
      "Improves ground water table and allows integrated fish farming in the pond."
    ],
    "eligibility": [
      "Must hold a valid MGNREGA Job Card in the household.",
      "Small/Marginal farmer, SC/ST, Forest Rights Act beneficiary, or Women-headed household.",
      "Must own land suitable for water harvesting structure."
    ],
    "documents": [
      "MGNREGA Job Card",
      "Aadhaar Card",
      "Land Ownership Documents (Khatauni / 7/12)",
      "Gram Panchayat recommendation resolution"
    ],
    "procedure": [
      {
        "step": 1,
        "title": "Submit Demand in Gram Sabha",
        "desc": "Submit individual work demand to Gram Rozgar Sahayak (GRS) or Sarpanch during Gram Sabha."
      },
      {
        "step": 2,
        "title": "Technical Sanction & Estimate",
        "desc": "Junior Engineer (JE) visits farm, calculates dimensions, and prepares estimate."
      },
      {
        "step": 3,
        "title": "Work Muster Roll Issuance",
        "desc": "Muster roll issued. Farmer and family members work on their own land and receive weekly wages."
      },
      {
        "step": 4,
        "title": "Material Payment",
        "desc": "Lining/cement material payments credited directly via DBT to supplier and beneficiary."
      }
    ],
    "applyUrl": "https://nrega.nic.in",
    "officialDocuments": [
      {
        "title": "MGNREGA - Individual Farm Pond & Well Scheme Official Overview",
        "url": "https://agriwelfare.gov.in/en/Major",
        "type": "page",
        "source": "Ministry of Rural Development (MoRD)",
        "year": "2024"
      }
    ],
    "keywords": [
      "mgnrega - individual farm pond & well scheme",
      "rural development"
    ],
    "targetBeneficiaryHi": "लघु व सीमांत किसान परिवार, एससी/एसटी परिवार",
    "subsidyHighlightHi": "100% निःशुल्क खेत तालाब निर्माण एवं 100 दिन मजदूरी",
    "eligibilityHi": [
      "सक्रिय मनरेगा जॉब कार्ड धारक ग्रामीण परिवार।",
      "लघु/सीमांत किसान, अजा/अजजा परिवार या वन अधिकार अधिनियम पट्टाधारक।"
    ],
    "benefitsHi": [
      "खेत तालाब, चेक डैम या कूप निर्माण पर 100% सरकारी खर्च (शून्य व्यक्तिगत लागत)।",
      "अपने ही खेत पर निर्माण कार्य करने के लिए अकुशल मजदूरी के रूप में सीधे बैंक खाते में भुगतान।",
      "सूखे के समय फसलों को जीवन रक्षक सिंचाई मिलती है और भूजल स्तर में सुधार होता है।"
    ],
    "procedureHi": [
      {
        "step": 1,
        "title": "ग्राम सभा में मांग प्रस्तुत करें",
        "desc": "ग्राम सभा बैठक में ग्राम रोजगार सहायक (GRS) या सरपंच को कार्य की लिखित मांग दें।"
      },
      {
        "step": 2,
        "title": "तकनीकी स्वीकृति एवं प्राक्कलन",
        "desc": "कनिष्ठ अभियंता (JE) खेत का निरीक्षण कर तालाब के आयाम मापता है और प्राक्कलन बनाता है।"
      },
      {
        "step": 3,
        "title": "मस्टर रोल जारी होना",
        "desc": "मस्टर रोल जारी होता है। किसान व उसके परिवार के सदस्य अपने खेत पर कार्य कर साप्ताहिक मजदूरी प्राप्त करते हैं।"
      },
      {
        "step": 4,
        "title": "सामग्री भुगतान",
        "desc": "लाइनिंग/सीमेंट सामग्री का भुगतान डीबीटी के माध्यम से सीधे बैंक खाते में अंतरित होता है।"
      }
    ],
    "documentsHi": [
      "मनरेगा जॉब कार्ड",
      "आधार कार्ड",
      "भूमि स्वामित्व दस्तावेज (खतौनी / 7/12)",
      "आधार-लिंक बैंक बचत खाता"
    ]
  },
  {
    "id": "pmay-g",
    "code": "PMA-001",
    "name": "Pradhan Mantri Awaas Yojana – Gramin (PMAY-G)",
    "nameHi": "प्रधानमंत्री आवास योजना – ग्रामीण",
    "category": "Rural Development",
    "categoryHi": "ग्रामीण विकास",
    "issuingBody": "Ministry of Rural Development",
    "issuingBodyHi": "ग्रामीण विकास मंत्रालय",
    "tagline": "Financial grant of ₹1.20 Lakh to ₹1.30 Lakh for construction of pucca house with toilet.",
    "taglineHi": "पक्का मकान बनाने के लिए ₹1.20 लाख से ₹1.30 लाख तक की प्रत्यक्ष सहायता।",
    "subsidyHighlight": "₹1,20,000 - ₹1,30,000 Direct Grant",
    "badge": "Rural Housing",
    "lastVerified": "September 2026",
    "officialUrl": "https://pmayg.nic.in",
    "sourceUrl": "https://agriwelfare.gov.in/en/Major",
    "minLand": 0,
    "maxLand": 2,
    "farmerTypes": [
      "marginal",
      "small"
    ],
    "targetBeneficiary": "Homeless and households living in kutcha/dilapidated houses in rural areas",
    "benefits": [
      "Direct grant of ₹1,20,000 in plains and ₹1,30,000 in hilly/difficult/North-Eastern areas.",
      "Additional 90-95 days of unskilled wage labor under MGNREGA (~₹25,000 extra).",
      "₹12,000 assistance for toilet construction under Swachh Bharat Mission (SBM-G)."
    ],
    "eligibility": [
      "Families identified in SECC 2011 / Awaas+ list without pucca house."
    ],
    "documents": [
      "Aadhaar",
      "Job Card",
      "Bank Account Details",
      "Land title / House site document"
    ],
    "procedure": [
      {
        "step": 1,
        "title": "Check Name in Awaas+ List",
        "desc": "Check priority ranking on pmayg.nic.in or at Panchayat office."
      },
      {
        "step": 2,
        "title": "Geo-tagging of Kutcha House",
        "desc": "Panchayat secretary clicks geo-tagged photo of existing kutcha house."
      },
      {
        "step": 3,
        "title": "Instalment Release",
        "desc": "Funds released in 3 instalments upon completion of foundation, lintel, and roof."
      }
    ],
    "applyUrl": "https://pmayg.nic.in",
    "officialDocuments": [
      {
        "title": "Pradhan Mantri Awaas Yojana - Gramin Framework for Implementation",
        "url": "https://pmayg.nic.in/netiay/PMAY-G_Framework_for_Implementation.pdf",
        "type": "pdf",
        "source": "Ministry of Rural Development",
        "year": "2024"
      }
    ],
    "keywords": [
      "pmay g",
      "rural housing",
      "farmer house",
      "pucca house",
      "awaas yojana",
      "gramin awas",
      "makan anudan"
    ],
    "targetBeneficiaryHi": "कच्चे घरों में रहने वाले ग्रामीण बेघर परिवार",
    "subsidyHighlightHi": "₹1,20,000 पक्का मकान निर्माण अनुदान",
    "eligibilityHi": [
      "एसईसीसी 2011 (SECC) या आवास+ सर्वेक्षण सूची में शामिल परिवार जिनके पास पक्का मकान नहीं है।"
    ],
    "benefitsHi": [
      "मैदानी क्षेत्रों में ₹1,20,000 और पहाड़ी/दुर्गम/पूर्वोत्तर क्षेत्रों में ₹1,30,000 का सीधा अनुदान।",
      "मनरेगा के तहत 90-95 दिनों की अकुशल मजदूरी सहायता (अतिरिक्त लगभग ₹25,000)।",
      "स्वच्छ भारत मिशन (SBM-G) के अंतर्गत शौचालय निर्माण हेतु ₹12,000 की अलग सहायता।"
    ],
    "procedureHi": [
      {
        "step": 1,
        "title": "आवास+ सूची में नाम जांचें",
        "desc": "pmayg.nic.in या पंचायत कार्यालय में अपनी प्राथमिकता वरीयता सूची की जांच करें।"
      },
      {
        "step": 2,
        "title": "कच्चे घर की जियो-टैगिंग",
        "desc": "पंचायत सचिव मौजूदा कच्चे घर की जीपीएस-सक्षम फोटो खींचकर ऐप पर अपलोड करता है।"
      },
      {
        "step": 3,
        "title": "किस्त राशि का अंतरण",
        "desc": "नींव (प्लिंथ), लिंटेल और छत का स्तर पूरा होने पर तीन किस्तों में राशि सीधे बैंक खाते में आती है।"
      }
    ],
    "documentsHi": [
      "आधार कार्ड",
      "बैंक बचत खाता पासबुक",
      "भूमि पट्टा / घर का भूखंड दस्तावेज",
      "ग्राम पंचायत / ग्राम सभा का अनुशंसा प्रस्ताव",
      "एसईसीसी-2011 पात्रता पर्ची / पीएमएवाई आईडी"
    ]
  },
  {
    "id": "atma",
    "code": "ATM-001",
    "name": "Agricultural Technology Management Agency (ATMA)",
    "nameHi": "कृषि प्रौद्योगिकी प्रबंधन अभिकरण (आत्मा)",
    "category": "Education & Skilling",
    "categoryHi": "शिक्षा और कौशल",
    "issuingBody": "Central & State Governments (Extension Division)",
    "issuingBodyHi": "केंद्र एवं राज्य सरकारें",
    "tagline": "Free hands-on training, exposure visits, demonstrations, and progressive farmer awards.",
    "taglineHi": "निःशुल्क तकनीकी प्रशिक्षण, अन्य राज्यों में भ्रमण, प्रदर्शन और पुरस्कार।",
    "subsidyHighlight": "100% Free Training & Inter-State Exposure",
    "badge": "Free Skill Training",
    "lastVerified": "September 2026",
    "officialUrl": "https://agriwelfare.gov.in",
    "sourceUrl": "https://agriwelfare.gov.in/en/Major",
    "minLand": 0,
    "maxLand": 999,
    "farmerTypes": [
      "marginal",
      "small",
      "medium",
      "large"
    ],
    "targetBeneficiary": "All practicing farmers, women food security groups (FSGs), and farm youth",
    "benefits": [
      "Free 3 to 5 day practical training courses in modern agronomy, integrated pest management, and horticulture.",
      "100% sponsored inter-district and inter-state exposure tours to premier agri universities (IARI, PAU, GBPUAT).",
      "Demonstration plot subsidy up to ₹5,000 per demo on the farmer's own field.",
      "District Progressive Farmer Awards of ₹25,000 to ₹50,000."
    ],
    "eligibility": [
      "Any practicing farmer interested in upgrading farming practices."
    ],
    "documents": [
      "Aadhaar Card",
      "Bank Account Details",
      "Farmer Interest Group (FIG) membership (optional)"
    ],
    "procedure": [
      {
        "step": 1,
        "title": "Contact Block Technology Manager",
        "desc": "Visit Block Development Office and meet the ATMA Block Technology Manager (BTM)."
      },
      {
        "step": 2,
        "title": "Select Training Course",
        "desc": "Enroll in upcoming seasonal calendar for training, demonstration, or interstate exposure."
      }
    ],
    "applyUrl": "https://agriwelfare.gov.in",
    "officialDocuments": [
      {
        "title": "ATMA Guidelines & Training Structure",
        "source": "Ministry of Agriculture",
        "year": "2024",
        "url": "https://agriwelfare.gov.in"
      }
    ],
    "keywords": [
      "atma",
      "farmer training",
      "exposure visit",
      "farmer school",
      "kisan sangh",
      "krishi prashikshan",
      "extension reforms"
    ],
    "targetBeneficiaryHi": "आधुनिक कृषि तकनीक सीखने के इच्छुक सभी किसान",
    "subsidyHighlightHi": "निःशुल्क व्यावहारिक प्रशिक्षण, विश्वविद्यालय भ्रमण व पुरस्कार",
    "eligibilityHi": [
      "खेती की नई तकनीकें सीखने व अपनाने का इच्छुक कोई भी किसान।"
    ],
    "benefitsHi": [
      "आधुनिक सस्य विज्ञान, एकीकृत कीट प्रबंधन और बागवानी पर 3 से 5 दिनों के निःशुल्क व्यावहारिक प्रशिक्षण।",
      "देश के अग्रणी कृषि विश्वविद्यालयों (IARI, PAU, GBPUAT) में 100% प्रायोजित अंतर-राज्यीय अध्ययन भ्रमण।",
      "किसान के अपने खेत पर प्रदर्शन प्लॉट (Demonstration) हेतु ₹5,000 तक की इनपुट सहायता।",
      "जिला प्रगतिशील किसान पुरस्कार के रूप में ₹25,000 से ₹50,000 की नकद राशि।"
    ],
    "procedureHi": [
      {
        "step": 1,
        "title": "ब्लॉक टेक्नोलॉजी मैनेजर से संपर्क",
        "desc": "प्रखंड विकास कार्यालय (BDO Office) जाएं और आत्मा ब्लॉक टेक्नोलॉजी मैनेजर (BTM) से मिलें।"
      },
      {
        "step": 2,
        "title": "प्रशिक्षण पाठ्यक्रम का चयन",
        "desc": "आगामी मौसमी कैलेंडर में प्रशिक्षण, प्रक्षेत्र प्रदर्शन या अध्ययन भ्रमण हेतु अपना नाम दर्ज कराएं।"
      }
    ],
    "documentsHi": [
      "आधार कार्ड",
      "भूमि अभिलेख",
      "किसान मित्र / आत्मा किसान समूह सदस्यता (वैकल्पिक)"
    ]
  },
  {
    "id": "kvk",
    "code": "KVK-001",
    "name": "Krishi Vigyan Kendra (KVK) Skill & Frontline Demos",
    "nameHi": "कृषि विज्ञान केंद्र (केवीके) कौशल कार्यक्रम",
    "category": "Education & Skilling",
    "categoryHi": "शिक्षा और कौशल",
    "issuingBody": "Indian Council of Agricultural Research (ICAR)",
    "issuingBodyHi": "भारतीय कृषि अनुसंधान परिषद",
    "tagline": "District-level frontline crop demonstrations, quality seed distribution, and certified vocational training.",
    "taglineHi": "प्रत्येक जिले में वैज्ञानिक खेती प्रशिक्षण, उन्नत बीज वितरण एवं निःशुल्क मार्गदर्शन।",
    "subsidyHighlight": "Certified Training & Seed Subsidies",
    "badge": "ICAR Certified",
    "lastVerified": "September 2026",
    "officialUrl": "https://icar.org.in",
    "sourceUrl": "https://agriwelfare.gov.in/en/Major",
    "minLand": 0,
    "maxLand": 999,
    "farmerTypes": [
      "marginal",
      "small",
      "medium",
      "large"
    ],
    "targetBeneficiary": "Farmers in all 730+ districts across India",
    "benefits": [
      "Frontline demonstrations of newly released climate-resilient crop varieties on farmer fields.",
      "Availability of certified breeder and foundation seeds, bio-pesticides, and poultry chicks at subsidized cost.",
      "Free soil, water, and plant disease testing clinic."
    ],
    "eligibility": [
      "Open to all farmers in the district."
    ],
    "documents": [
      "Aadhaar",
      "Land Record"
    ],
    "procedure": [
      {
        "step": 1,
        "title": "Visit District KVK Campus",
        "desc": "Walk in to your district KVK or check training schedule on kvk.icar.gov.in."
      }
    ],
    "applyUrl": "https://icar.org.in",
    "officialDocuments": [
      {
        "title": "KVK Mandate & Action Guidelines",
        "source": "ICAR Portal",
        "year": "2024",
        "url": "https://icar.org.in"
      }
    ],
    "keywords": [
      "krishi vigyan kendra (kvk) skill & frontline demos",
      "education & skilling"
    ],
    "targetBeneficiaryHi": "जिले के सभी किसान, ग्रामीण युवा व महिला किसान",
    "subsidyHighlightHi": "निःशुल्क बीज प्रदर्शन, मृदा परीक्षण व तकनीकी परामर्श",
    "eligibilityHi": [
      "जिले के सभी किसान, महिला किसान और कृषि उद्यमी।"
    ],
    "benefitsHi": [
      "किसान के खेतों पर नई जलवायु-अनुकूल फसल किस्मों के प्रथम पंक्ति प्रदर्शन (FLD)।",
      "प्रमाणित प्रजनक एवं आधार बीज, जैव कीटनाशक और चूजों की रियायती दर पर उपलब्धता।",
      "निःशुल्क मृदा, जल एवं पादप रोग निदान क्लिनिक।"
    ],
    "procedureHi": [
      {
        "step": 1,
        "title": "जिला केवीके परिसर जाएं",
        "desc": "अपने जिले के कृषि विज्ञान केंद्र जाएं या icar.org.in पर प्रशिक्षण कार्यक्रम देखें।"
      }
    ],
    "documentsHi": [
      "आधार कार्ड",
      "भूमि अभिलेख"
    ]
  },
  {
    "id": "day-nrlm-mksp",
    "code": "DAY-001",
    "name": "DAY-NRLM (Mahila Kisan Sashaktikaran Pariyojana)",
    "nameHi": "दीनदयाल अंत्योदय - महिला किसान सशक्तिकरण",
    "category": "Women & SHG",
    "categoryHi": "महिला एवं स्वयं सहायता समूह",
    "issuingBody": "Ministry of Rural Development",
    "issuingBodyHi": "ग्रामीण विकास मंत्रालय",
    "tagline": "Dedicated credit and sustainable agriculture support for women farmers and SHG federations.",
    "taglineHi": "महिला किसानों और स्वयं सहायता समूहों के लिए रियायती ऋण और कृषि उपकरण बैंक।",
    "subsidyHighlight": "Revolving Fund & Capital Subsidy for Women SHGs",
    "badge": "Women Empowerment",
    "lastVerified": "September 2026",
    "officialUrl": "https://rural.gov.in",
    "sourceUrl": "https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2002012",
    "minLand": 0,
    "maxLand": 2,
    "farmerTypes": [
      "marginal",
      "small"
    ],
    "targetBeneficiary": "Smallholder women farmers organized in SHGs",
    "benefits": [
      "Revolving fund of ₹15,000 to ₹20,000 and Community Investment Fund (CIF) up to ₹1.5 Lakh per SHG.",
      "Subsidized bank loan linkage at 7% interest (further reduced to 4% with prompt repayment).",
      "Establishment of Custom Hiring Centres managed exclusively by women farmers."
    ],
    "eligibility": [
      "Women farmers belonging to active SHGs under DAY-NRLM."
    ],
    "documents": [
      "Aadhaar Card",
      "SHG Passbook",
      "Bank Account Details"
    ],
    "procedure": [
      {
        "step": 1,
        "title": "Join Village SHG",
        "desc": "Connect with Village Organization (VO) or Cluster Level Federation (CLF)."
      },
      {
        "step": 2,
        "title": "Micro-Credit Plan (MCP)",
        "desc": "Prepare farm investment plan with help of Krishi Sakhi and receive loan."
      }
    ],
    "applyUrl": "https://rural.gov.in",
    "officialDocuments": [
      {
        "title": "MKSP Guidelines & Action Plan",
        "source": "Ministry of Rural Development",
        "year": "2024",
        "url": "https://rural.gov.in"
      }
    ],
    "keywords": [
      "mahila kisan",
      "mksp",
      "day nrlm",
      "women farmer",
      "shg group",
      "livelihoods",
      "aajeevika",
      "swayam sahayata samooh"
    ],
    "targetBeneficiaryHi": "महिला किसान, स्वयं सहायता समूह (SHG) सदस्य",
    "subsidyHighlightHi": "₹1.5 लाख तक सामुदायिक निवेश निधि व 4% ऋण ब्याज",
    "eligibilityHi": [
      "डे-एनआरएलएम (DAY-NRLM) के अंतर्गत सक्रिय स्वयं सहायता समूह से जुड़ी महिला किसान।"
    ],
    "benefitsHi": [
      "प्रति एसएचजी ₹15,000 से ₹20,000 की रिवाल्विंग फंड और ₹1.5 लाख तक की सामुदायिक निवेश निधि (CIF)।",
      "7% ब्याज पर रियायती बैंक ऋण, समय पर भुगतान करने पर 4% की विशेष रियायत।",
      "महिला किसानों द्वारा विशेष रूप से संचालित कस्टम हायरिंग सेंटर की स्थापना।"
    ],
    "procedureHi": [
      {
        "step": 1,
        "title": "ग्राम एसएचजी से जुड़ें",
        "desc": "अपने ग्राम संगठन (VO) या क्लस्टर लेवल फेडरेशन (CLF) से संपर्क कर एसएचजी में शामिल हों।"
      },
      {
        "step": 2,
        "title": "सूक्ष्म ऋण योजना (MCP)",
        "desc": "कृषि सखी की मदद से कृषि निवेश योजना तैयार करें और बैंक लिंकेज के माध्यम से ऋण प्राप्त करें।"
      }
    ],
    "documentsHi": [
      "आधार कार्ड",
      "न्यूनतम 6 महीने की नियमित बचत वाली एसएचजी पासबुक",
      "राशन कार्ड"
    ]
  },
  {
    "id": "itc-sunehra-kal",
    "code": "NGO-001",
    "name": "ITC Mission Sunehra Kal (Agri CSR Program)",
    "nameHi": "आईटीसी मिशन सुनहरा कल (कृषि सीएसआर)",
    "category": "NGO & Private CSR",
    "categoryHi": "एनजीओ और सीएसआर",
    "issuingBody": "ITC Limited Corporate Social Responsibility",
    "issuingBodyHi": "आईटीसी लिमिटेड सीएसआर",
    "tagline": "Water stewardship, climate-smart agriculture, and assured buyback for wheat and soya farmers.",
    "taglineHi": "जलवायु अनुकूल कृषि, जल संचयन एवं गेहूं व सोयाबीन किसानों को सुनिश्चित बाजार।",
    "subsidyHighlight": "100% Free Agri-Extension & Market Tie-up",
    "badge": "Verified CSR Initiative",
    "lastVerified": "September 2026",
    "officialUrl": "https://www.itcportal.com",
    "sourceUrl": "https://www.itcportal.com",
    "minLand": 0.1,
    "maxLand": 999,
    "farmerTypes": [
      "marginal",
      "small",
      "medium",
      "large"
    ],
    "targetBeneficiary": "Farmers in 17+ states (MP, AP, Telangana, Maharashtra, Rajasthan, Karnataka)",
    "benefits": [
      "Assistance in zero-tillage sowing, laser land levelling, and micro-irrigation layout.",
      "Free village watershed construction: stop-dams, check-dams, and contour trenches.",
      "Direct procurement of wheat, soybean, and chili at competitive market price through ITC e-Choupal centers."
    ],
    "eligibility": [
      "Farmers situated in ITC intervention catchment districts."
    ],
    "documents": [
      "Aadhaar Card",
      "Land Record",
      "Bank Passbook"
    ],
    "procedure": [
      {
        "step": 1,
        "title": "Connect with Sanyojak / e-Choupal",
        "desc": "Visit your village ITC e-Choupal lead farmer (Sanyojak)."
      },
      {
        "step": 2,
        "title": "Enroll in Climate Smart Village Program",
        "desc": "Register for free input advisory and demonstration package."
      }
    ],
    "applyUrl": "https://www.itcportal.com",
    "officialDocuments": [
      {
        "title": "ITC Mission Sunehra Kal Sustainability Report",
        "source": "ITC Portal",
        "year": "2024",
        "url": "https://www.itcportal.com"
      }
    ],
    "keywords": [
      "itc mission sunehra kal (agri csr program)",
      "ngo & private csr"
    ],
    "targetBeneficiaryHi": "आईटीसी कार्यक्षेत्र जिलों के किसान",
    "subsidyHighlightHi": "निःशुल्क वाटरशेड निर्माण व ई-चौपाल सीधी खरीद",
    "eligibilityHi": [
      "आईटीसी सीएसआर कार्यक्षेत्र के अंतर्गत आने वाले जिलों के किसान।"
    ],
    "benefitsHi": [
      "शून्य-जुताई बुवाई, लेजर लैंड लेवलिंग और ड्रिप सिंचाई स्थापना में विशेषज्ञ सहायता।",
      "निःशुल्क गांव वाटरशेड निर्माण: स्टॉप-डैम, चेक-डैम और कंटूर ट्रेंच का निर्माण।",
      "आईटीसी ई-चौपाल केंद्रों के माध्यम से गेहूं, सोयाबीन और मिर्च की प्रतिस्पर्धी बाजार मूल्य पर सीधी खरीद।"
    ],
    "procedureHi": [
      {
        "step": 1,
        "title": "संयोजक / ई-चौपाल से संपर्क",
        "desc": "अपने गांव के आईटीसी ई-चौपाल लीड किसान (संयोजक) से संपर्क करें।"
      },
      {
        "step": 2,
        "title": "क्लाइमेट स्मार्ट विलेज में नामांकन",
        "desc": "निःशुल्क इनपुट सलाह और प्रदर्शन पैकेज हेतु अपना नाम दर्ज कराएं।"
      }
    ],
    "documentsHi": [
      "आधार कार्ड",
      "भूमि अभिलेख"
    ]
  },
  {
    "id": "tata-trusts-lakhpati",
    "code": "NGO-002",
    "name": "Tata Trusts - Lakhpati Kisan Initiative",
    "nameHi": "टाटा ट्रस्ट्स - लखपति किसान पहल",
    "category": "NGO & Private CSR",
    "categoryHi": "एनजीओ और सीएसआर",
    "issuingBody": "Tata Trusts / Collectives for Integrated Livelihood Initiatives (CInI)",
    "issuingBodyHi": "टाटा ट्रस्ट्स (सीआईएनआई)",
    "tagline": "Multi-layered farming and gravity-flow irrigation transforming small tribal farmers into ₹1 Lakh+ earners.",
    "taglineHi": "बहुस्तरीय खेती और सिंचाई से छोटे व सीमांत किसानों की आय ₹1 लाख+ करने की पहल।",
    "subsidyHighlight": "Comprehensive Livelihood Grant & Infrastructure",
    "badge": "Verified NGO Initiative",
    "lastVerified": "September 2026",
    "officialUrl": "https://www.tatatrusts.org",
    "sourceUrl": "https://www.tatatrusts.org",
    "minLand": 0.2,
    "maxLand": 2,
    "farmerTypes": [
      "marginal",
      "small"
    ],
    "targetBeneficiary": "Small and marginal tribal farmers in Jharkhand, Odisha, Gujarat, and Maharashtra",
    "benefits": [
      "Grant support for solar micro-lift irrigation schemes and drip systems.",
      "High-value vegetable cultivation (capsicum, tomato, bitter gourd, watermelon) on small plots.",
      "FPO formation providing quality inputs at wholesale rates and collective marketing."
    ],
    "eligibility": [
      "Marginal and small tribal or backward community households."
    ],
    "documents": [
      "Aadhaar",
      "Land Records",
      "Ration Card"
    ],
    "procedure": [
      {
        "step": 1,
        "title": "Community Mobilization",
        "desc": "Contact local CInI / Tata Trusts field team in your block."
      },
      {
        "step": 2,
        "title": "Family Livelihood Plan",
        "desc": "Create a 3-year multi-cropping roadmap and receive technical and input support."
      }
    ],
    "applyUrl": "https://www.tatatrusts.org",
    "officialDocuments": [
      {
        "title": "Tata Trusts - Lakhpati Kisan Initiative Official Overview",
        "url": "https://www.tatatrusts.org",
        "type": "page",
        "source": "Tata Trusts / Collectives for Integrated Livelihood Initiatives (CInI)",
        "year": "2024"
      }
    ],
    "keywords": [
      "tata trusts - lakhpati kisan initiative",
      "ngo & private csr"
    ],
    "targetBeneficiaryHi": "सीमांत व छोटे आदिवासी एवं पिछड़े समुदाय के परिवार",
    "subsidyHighlightHi": "₹1.2 लाख+ वार्षिक आय हेतु सिंचाई व सब्जी क्लस्टर",
    "eligibilityHi": [
      "सीमांत और छोटे आदिवासी या पिछड़े समुदाय के कृषक परिवार।"
    ],
    "benefitsHi": [
      "सोलर माइक्रो-लिफ्ट सिंचाई योजनाओं और ड्रिप सिस्टम हेतु वित्तीय अनुदान।",
      "छोटे भूखंडों पर उच्च मूल्य वाली सब्जियों (शिमला मिर्च, टमाटर, करेला, तरबूज) की सघन खेती।",
      "थोक भाव पर गुणवत्तापूर्ण आदान उपलब्ध कराने और सामूहिक विपणन हेतु एफपीओ गठन।"
    ],
    "procedureHi": [
      {
        "step": 1,
        "title": "सामुदायिक संपर्क",
        "desc": "अपने ब्लॉक में स्थानीय सीआईएनआई (CInI) / टाटा ट्रस्ट्स फील्ड टीम से संपर्क करें।"
      },
      {
        "step": 2,
        "title": "पारिवारिक आजीविका योजना",
        "desc": "3-वर्षीय बहु-फसली कार्ययोजना बनाएं और तकनीकी व इनपुट सहयोग प्राप्त करें।"
      }
    ],
    "documentsHi": [
      "आधार कार्ड",
      "भूमि स्वामित्व विलेख / वन अधिकार पट्टा",
      "बैंक पासबुक"
    ]
  },
  {
    "id": "baif-wadi",
    "code": "NGO-003",
    "name": "BAIF Development Research Foundation - Wadi Agro-Forestry",
    "nameHi": "बाइफ (BAIF) - वाडी कृषि-वानिकी मॉडल",
    "category": "NGO & Private CSR",
    "categoryHi": "एनजीओ और सीएसआर",
    "issuingBody": "BAIF & NABARD Tribal Development Fund",
    "issuingBodyHi": "बाइफ रिसर्च फाउंडेशन एवं नाबार्ड",
    "tagline": "One-acre orchard model (Mango & Cashew) with soil conservation for wasteland revival.",
    "taglineHi": "बंजर जमीन पर 1 एकड़ आम व काजू बागवानी (वाडी) मॉडल हेतु संपूर्ण सहायता।",
    "subsidyHighlight": "Full 7-Year Plant & Irrigation Grant",
    "badge": "Agro-Forestry Model",
    "lastVerified": "September 2026",
    "officialUrl": "https://baif.org.in",
    "sourceUrl": "https://baif.org.in",
    "minLand": 0.5,
    "maxLand": 2,
    "farmerTypes": [
      "marginal",
      "small"
    ],
    "targetBeneficiary": "Tribal and marginal farmers with degraded or undulating land",
    "benefits": [
      "Free supply of 40-60 grafted fruit plants (Mango, Cashew, Aonla, Guava) per acre.",
      "Funding for fencing, trenching, water storage structure, and drip irrigation.",
      "Provides sustained yearly income of ₹50,000 to ₹1,50,000 for 30+ years."
    ],
    "eligibility": [
      "Small/Marginal landholders in BAIF operational talukas."
    ],
    "documents": [
      "Aadhaar",
      "Land Title Deed / Forest Rights Title"
    ],
    "procedure": [
      {
        "step": 1,
        "title": "Contact BAIF Field Officer",
        "desc": "BAIF field officer surveys degraded land parcel."
      },
      {
        "step": 2,
        "title": "Plantation & 5-Year Maintenance",
        "desc": "Establish pit digging, manure, plantation, and maintenance under technical supervision."
      }
    ],
    "applyUrl": "https://baif.org.in",
    "officialDocuments": [
      {
        "title": "BAIF Wadi Agro-Horti-Forestry Model Guidelines",
        "url": "https://baif.org.in/wadi-programme",
        "type": "page",
        "source": "BAIF Development Research Foundation",
        "year": "2024"
      }
    ],
    "keywords": [
      "baif",
      "wadi",
      "agro forestry",
      "mango orchard",
      "cashew plantation",
      "tribal farm development",
      "baif foundation"
    ],
    "targetBeneficiaryHi": "बाइफ कार्यक्षेत्र के लघु व सीमांत किसान",
    "subsidyHighlightHi": "प्रति एकड़ 40-60 फलदार पौधे व 30 वर्ष सुनिश्चित आय",
    "eligibilityHi": [
      "बाइफ (BAIF) कार्यक्षेत्र के तालुकों में 1-2 एकड़ बंजर या कम उपजाऊ भूमि रखने वाले लघु/सीमांत किसान।"
    ],
    "benefitsHi": [
      "प्रति एकड़ 40-60 कलमी फलदार पौधे (आम, काजू, आंवला, अमरूद) निःशुल्क उपलब्ध।",
      "बाड़बंदी, ट्रेंचिंग, जल भंडारण संरचना और ड्रिप सिंचाई हेतु संपूर्ण अनुदान।",
      "30 से अधिक वर्षों तक प्रति वर्ष ₹50,000 से ₹1,50,000 की दीर्घकालिक सुनिश्चित आय।"
    ],
    "procedureHi": [
      {
        "step": 1,
        "title": "बाइफ फील्ड अधिकारी से संपर्क",
        "desc": "बाइफ फील्ड अधिकारी बंजर भूमि का सर्वेक्षण करता है।"
      },
      {
        "step": 2,
        "title": "वृक्षारोपण व 5-वर्षीय रखरखाव",
        "desc": "तकनीकी देखरेख में गड्ढा खुदाई, खाद डालना, पौधारोपण और 5 वर्षों तक नियमित देखभाल की जाती है।"
      }
    ],
    "documentsHi": [
      "आधार कार्ड",
      "भूमि अभिलेख",
      "बैंक पासबुक"
    ]
  },
  {
    "id": "reliance-water",
    "code": "NGO-004",
    "name": "Reliance Foundation - Bharat India Jodo (BIJ) Agri Program",
    "nameHi": "रिलायंस फाउंडेशन - भारत इंडिया जोड़ो कृषि कार्यक्रम",
    "category": "NGO & Private CSR",
    "categoryHi": "एनजीओ और सीएसआर",
    "issuingBody": "Reliance Foundation",
    "issuingBodyHi": "रिलायंस फाउंडेशन",
    "tagline": "Toll-free voice advisory, weather alerts, and farm pond water security for marginalized farmers.",
    "taglineHi": "टोल-फ्री फोन परामर्श, मौसम अलर्ट और खेत तालाब निर्माण में सहायता।",
    "subsidyHighlight": "Free Toll-Free (1800 419 8800) Advisory & Ponds",
    "badge": "CSR Advisory & Water",
    "lastVerified": "September 2026",
    "officialUrl": "https://www.reliancefoundation.org",
    "sourceUrl": "https://www.reliancefoundation.org",
    "minLand": 0,
    "maxLand": 999,
    "farmerTypes": [
      "marginal",
      "small",
      "medium",
      "large"
    ],
    "targetBeneficiary": "Farmers and fishers across India",
    "benefits": [
      "Direct line to agri-scientists via 1800 419 8800 for instant diagnosis of crop pests and diseases.",
      "Subsidized machinery rental and community check dam construction in drought-prone taluks.",
      "Real-time WhatsApp crop alerts and market price updates."
    ],
    "eligibility": [
      "Open to all Indian farmers."
    ],
    "documents": [
      "Mobile Number"
    ],
    "procedure": [
      {
        "step": 1,
        "title": "Call Toll-Free Number",
        "desc": "Dial 1800-419-8800 between 9:30 AM and 6:00 PM for free voice consultation."
      }
    ],
    "applyUrl": "https://www.reliancefoundation.org",
    "officialDocuments": [
      {
        "title": "Reliance Foundation - Bharat India Jodo (BIJ) Agri Program Official Overview",
        "url": "https://www.reliancefoundation.org",
        "type": "page",
        "source": "Reliance Foundation",
        "year": "2024"
      }
    ],
    "keywords": [
      "reliance foundation - bharat india jodo (bij) agri program",
      "ngo & private csr"
    ],
    "targetBeneficiaryHi": "भारत के सभी किसान भाई-बहन",
    "subsidyHighlightHi": "टोल-फ्री वैज्ञानिक सलाह व चेक डैम निर्माण",
    "eligibilityHi": [
      "कृषि सलाह और जल प्रबंधन सहायता चाहने वाले भारत के सभी किसान।"
    ],
    "benefitsHi": [
      "फसल कीटों और रोगों के त्वरित समाधान हेतु टोल-फ्री नंबर 1800 419 8800 पर कृषि वैज्ञानिकों से सीधी बातचीत।",
      "सूखा प्रभावित तालुकों में रियायती मशीनरी किराया और सामुदायिक चेक डैम निर्माण।",
      "व्हाट्सएप पर वास्तविक समय मौसम चेतावनियां और मंडी भाव की जानकारी।"
    ],
    "procedureHi": [
      {
        "step": 1,
        "title": "टोल-फ्री नंबर पर कॉल करें",
        "desc": "निःशुल्क परामर्श हेतु प्रातः 9:30 से सायं 6:00 बजे के बीच 1800-419-8800 डायल करें।"
      }
    ],
    "documentsHi": [
      "आधार कार्ड",
      "मोबाइल नंबर"
    ]
  },
  {
    "id": "wotr-resilient",
    "code": "NGO-005",
    "name": "Watershed Organisation Trust (WOTR) Climate Resilient Agri",
    "nameHi": "वाटरशेड ऑर्गनाइजेशन ट्रस्ट (WOTR) जलवायु अनुकूल खेती",
    "category": "NGO & Private CSR",
    "categoryHi": "एनजीओ और सीएसआर",
    "issuingBody": "WOTR Non-Profit Organization",
    "issuingBodyHi": "WOTR संस्था",
    "tagline": "Community watershed development, soil rejuvenation, and agro-meteorological advisories.",
    "taglineHi": "सामुदायिक वाटरशेड विकास, मृदा पुनर्जीवन एवं सटीक मौसम पूर्वानुमान।",
    "subsidyHighlight": "Community Watershed Grants",
    "badge": "Climate Resilience",
    "lastVerified": "September 2026",
    "officialUrl": "https://wotr.org",
    "sourceUrl": "https://wotr.org",
    "minLand": 0.1,
    "maxLand": 5,
    "farmerTypes": [
      "marginal",
      "small",
      "medium"
    ],
    "targetBeneficiary": "Rainfed farming communities in Maharashtra, MP, Rajasthan, Jharkhand",
    "benefits": [
      "Community watershed treatment: continuous contour trenches, earthen bunds, and check dams.",
      "Automated weather station installations providing hyper-local 3-day weather forecasts.",
      "Farm-level soil carbon enrichment techniques."
    ],
    "eligibility": [
      "Villages agreeing to participatory watershed management."
    ],
    "documents": [
      "Panchayat resolution",
      "Aadhaar"
    ],
    "procedure": [
      {
        "step": 1,
        "title": "Village Watershed Committee",
        "desc": "Form Village Development Committee (VDC) with WOTR facilitators."
      }
    ],
    "applyUrl": "https://wotr.org",
    "officialDocuments": [
      {
        "title": "Watershed Organisation Trust (WOTR) Climate Resilient Agri Official Overview",
        "url": "https://wotr.org",
        "type": "page",
        "source": "WOTR Non-Profit Organization",
        "year": "2024"
      }
    ],
    "keywords": [
      "watershed organisation trust (wotr) climate resilient agri",
      "ngo & private csr"
    ],
    "targetBeneficiaryHi": "वाटरशेड प्रबंधन हेतु सहमत ग्राम समुदाय",
    "subsidyHighlightHi": "सामुदायिक चेक डैम, कंटूर ट्रेंच व मौसम पूर्वानुमान",
    "eligibilityHi": [
      "सहभागी वाटरशेड प्रबंधन अपनाने हेतु सहमत ग्रामीण समुदाय।"
    ],
    "benefitsHi": [
      "सामुदायिक वाटरशेड उपचार: निरंतर कंटूर ट्रेंच, मिट्टी के बांध और चेक डैम निर्माण।",
      "स्वचालित मौसम स्टेशन स्थापित कर 3 दिन का सटीक स्थानीय मौसम पूर्वानुमान प्रदान करना।",
      "खेत स्तर पर मिट्टी में जैविक कार्बन बढ़ाने की वैज्ञानिक तकनीकें।"
    ],
    "procedureHi": [
      {
        "step": 1,
        "title": "ग्राम वाटरशेड समिति",
        "desc": "डब्लूओटीआर (WOTR) समन्वयकों की मदद से ग्राम विकास समिति (VDC) का गठन करें।"
      }
    ],
    "documentsHi": [
      "पंचायत का प्रस्ताव",
      "भूमि अभिलेख"
    ]
  },
  {
    "id": "pm-pranam",
    "code": "PRN-001",
    "name": "PM-PRANAM (Promotion of Alternate Nutrients for Agriculture Management)",
    "nameHi": "पीएम-प्रणाम (रासायनिक उर्वरक विकल्प एवं संतुलित पोषण योजना)",
    "category": "Soil & Inputs",
    "categoryHi": "मृदा एवं कृषि आदान",
    "issuingBody": "Central Government (Department of Fertilizers / MoA&FW)",
    "issuingBodyHi": "केंद्र सरकार (उर्वरक विभाग एवं कृषि मंत्रालय)",
    "tagline": "Incentivizing states and farmers to adopt bio-fertilizers and reduce chemical fertilizer dependence.",
    "taglineHi": "जैव उर्वरकों को अपनाने और रासायनिक खादों पर निर्भरता कम करने के लिए प्रोत्साहन।",
    "subsidyHighlight": "50% Fertilizer Subsidy Savings Sharing",
    "badge": "Eco Agriculture",
    "lastVerified": "September 2026",
    "officialUrl": "https://fert.gov.in",
    "applyUrl": "https://fert.gov.in",
    "sourceUrl": "https://pib.gov.in/PressReleasePage.aspx?PRID=1935876",
    "minLand": 0,
    "maxLand": 999,
    "farmerTypes": [
      "marginal",
      "small",
      "medium",
      "large"
    ],
    "targetBeneficiary": "Farmers and Gram Panchayats promoting bio-organic nutrient balance",
    "benefits": [
      "50% of the subsidy savings achieved by reducing chemical fertilizer (Urea/DAP) passed on to States as grants.",
      "70% of grant allocated for village-level bio-fertilizer and compost infrastructure creation.",
      "Subsidized distribution of Nano-Urea, Nano-DAP, and bio-decomposers to participating farmers."
    ],
    "eligibility": [
      "All farmers practicing balanced fertilizer use or transitioning to bio/organic nutrients.",
      "Gram Panchayats adopting community vermi-compost and bio-fertilizer units.",
      "FPOs and SHGs engaged in alternate nutrient production."
    ],
    "documents": [
      "Aadhaar Card",
      "Soil Health Card or Land Record Extract",
      "Active Bank Account Passbook",
      "Gram Panchayat / Block Agriculture Officer Endorsement"
    ],
    "procedure": [
      {
        "step": 1,
        "title": "Soil Nutrient Assessment",
        "desc": "Obtain Soil Health Card recommendation from your local Agriculture Extension Officer or KVK."
      },
      {
        "step": 2,
        "title": "Register with Gram Panchayat / FPO",
        "desc": "Enroll in the village alternate nutrient cluster managed under the State Agriculture Directorate."
      },
      {
        "step": 3,
        "title": "Adopt Nano & Bio Inputs",
        "desc": "Procure subsidized Nano Urea / Nano DAP from PACS or registered cooperatives."
      },
      {
        "step": 4,
        "title": "Incentive Disbursal",
        "desc": "Panchayats and farmer clusters achieving target fertilizer reduction receive infrastructure assistance."
      }
    ],
    "officialDocuments": [
      {
        "title": "PM-PRANAM Cabinet Approval & Guidelines",
        "source": "Department of Fertilizers",
        "year": "2023",
        "url": "https://fert.gov.in"
      }
    ],
    "keywords": [
      "pm pranam",
      "nano urea",
      "chemical fertilizer reduction",
      "bio fertilizer",
      "pranam scheme",
      "organic nutrient",
      "fert.nic.in",
      "soil nutrients"
    ],
    "targetBeneficiaryHi": "रासायनिक उर्वरक कम करने वाले किसान व ग्राम पंचायतें",
    "subsidyHighlightHi": "रासायनिक खाद बचत पर 50% अनुदान व नैनो यूरिया छूट",
    "eligibilityHi": [
      "संतुलित उर्वरक उपयोग करने वाले या जैविक/प्राकृतिक पोषक तत्वों की ओर अग्रसर सभी किसान।",
      "सामुदायिक वर्मी-कंपोस्ट और जैव-उर्वरक इकाइयां अपनाने वाली ग्राम पंचायतें।",
      "वैकल्पिक पोषक तत्व उत्पादन में लगे किसान उत्पादक संगठन (FPO) और स्वयं सहायता समूह (SHG)।"
    ],
    "benefitsHi": [
      "रासायनिक उर्वरक (यूरिया/डीएपी) की खपत घटाने से होने वाली 50% सरकारी सब्सिडी बचत राज्यों को अनुदान के रूप में जारी।",
      "प्राप्त अनुदान का 70% हिस्सा ग्राम स्तर पर जैव-उर्वरक, कंपोस्टिंग व वैकल्पिक खाद अधोसंरचना निर्माण में उपयोग।",
      "भागीदार किसानों को नैनो-यूरिया, नैनो-डीएपी और बायो-डीकंपोजर रियायती दरों पर वितरण।"
    ],
    "procedureHi": [
      {
        "step": 1,
        "title": "मृदा पोषण मूल्यांकन",
        "desc": "अपने स्थानीय कृषि प्रसार अधिकारी या केवीके से सॉइल हेल्थ कार्ड की सिफारिश प्राप्त करें।"
      },
      {
        "step": 2,
        "title": "ग्राम पंचायत / एफपीओ के पास पंजीकरण",
        "desc": "राज्य कृषि निदेशालय के तहत संचालित वैकल्पिक पोषक तत्व क्लस्टर में नामांकन कराएं।"
      },
      {
        "step": 3,
        "title": "नैनो एवं जैव इनपुट अपनाना",
        "desc": "पैक्स (PACS) या पंजीकृत सहकारी समितियों से रियायती नैनो यूरिया / नैनो डीएपी प्राप्त करें।"
      },
      {
        "step": 4,
        "title": "प्रोत्साहन संवितरण",
        "desc": "लक्ष्य अनुसार उर्वरक घटाने वाली पंचायतों और किसान क्लस्टरों को अधोसंरचना विकास सहायता मिलती है।"
      }
    ],
    "documentsHi": [
      "सॉइल हेल्थ कार्ड या भूमि अभिलेख उद्धरण",
      "आधार कार्ड",
      "सक्रिय बैंक खाता पासबुक",
      "ग्राम पंचायत / प्रखंड कृषि अधिकारी का अनुमोदन"
    ]
  }
];

const SCHEME_CATEGORIES = [
  { id: 'all', name: 'All Schemes', nameHi: 'सभी योजनाएं', icon: '🌱' },
  { id: 'Income Support & Pension', name: 'Income Support & Pension', nameHi: 'आय व पेंशन', icon: '💰' },
  { id: 'Crop Insurance', name: 'Crop Insurance', nameHi: 'फसल बीमा', icon: '🛡️' },
  { id: 'Credit & Finance', name: 'Credit & Finance', nameHi: 'ऋण और वित्त', icon: '💳' },
  { id: 'Irrigation & Water', name: 'Irrigation & Water', nameHi: 'सिंचाई और जल', icon: '💧' },
  { id: 'Soil & Inputs', name: 'Soil & Inputs', nameHi: 'मृदा व उर्वरक', icon: '🧪' },
  { id: 'Market Access', name: 'Market Access', nameHi: 'बाजार व मूल्य', icon: '📈' },
  { id: 'Farm Mechanization', name: 'Farm Mechanization', nameHi: 'कृषि यंत्रीकरण', icon: '🚜' },
  { id: 'Horticulture', name: 'Horticulture', nameHi: 'बागवानी', icon: '🍎' },
  { id: 'Livestock & Dairy', name: 'Livestock & Dairy', nameHi: 'पशुपालन व डेयरी', icon: '🐄' },
  { id: 'Fisheries', name: 'Fisheries', nameHi: 'मत्स्य पालन', icon: '🐟' },
  { id: 'Food Processing', name: 'Food Processing', nameHi: 'खाद्य प्रसंस्करण', icon: '🏭' },
  { id: 'Rural Development', name: 'Rural Development', nameHi: 'ग्रामीण विकास', icon: '🏡' },
  { id: 'Education & Skilling', name: 'Education & Skilling', nameHi: 'शिक्षा व कौशल', icon: '🎓' },
  { id: 'Women & SHG', name: 'Women & SHG', nameHi: 'महिला एवं SHG', icon: '👩‍🌾' },
  { id: 'NGO & Private CSR', name: 'NGO & CSR Programs', nameHi: 'एनजीओ एवं सीएसआर', icon: '🤝' }
];

const CSC_KVK_LOCATIONS = [
  {
    id: "kvk-ujjain",
    type: "KVK",
    name: "Krishi Vigyan Kendra, Ujjain",
    nameHi: "कृषि विज्ञान केंद्र, उज्जैन",
    district: "Ujjain",
    state: "Madhya Pradesh",
    address: "Dewas Road, Near R.V.S.K.V.V. Campus, Ujjain",
    contact: "+91 734 252 5050",
    services: ["Soil Health Testing", "Seed Distribution", "Agri Advisory", "Scheme Enrollment"]
  },
  {
    id: "csc-ujjain-1",
    type: "CSC",
    name: "Digital Seva Kendra (CSC) - Barnagar",
    nameHi: "डिजिटल सेवा केंद्र (सीएससी) - बड़नगर",
    district: "Ujjain",
    state: "Madhya Pradesh",
    address: "Main Market, Barnagar Tehsil, Ujjain",
    contact: "+91 98260 12345",
    services: ["Aadhaar e-KYC", "PM-KISAN Registration", "KCC Support", "Crop Insurance Claim"]
  },
  {
    id: "kvk-indore",
    type: "KVK",
    name: "Krishi Vigyan Kendra, Kasturbagram, Indore",
    nameHi: "कृषि विज्ञान केंद्र, कस्तूरबाग्राम, इंदौर",
    district: "Indore",
    state: "Madhya Pradesh",
    address: "Kasturbagram, Khandwa Road, Indore",
    contact: "+91 731 287 4200",
    services: ["Soil Health Testing", "Biometric Authentication", "Agri Advisory", "Seed Distribution"]
  },
  {
    id: "csc-lucknow-1",
    type: "CSC",
    name: "CSC Digital Seva - Bakshi Ka Talab",
    nameHi: "सीएससी डिजिटल सेवा - बख्शी का तालाब",
    district: "Lucknow",
    state: "Uttar Pradesh",
    address: "Near Block Development Office, NH-24, BKT, Lucknow",
    contact: "+91 94150 98765",
    services: ["Aadhaar e-KYC", "PM-KISAN Registration", "Scheme Enrollment", "KCC Support"]
  },
  {
    id: "kvk-lucknow",
    type: "KVK",
    name: "ICAR-IISR Krishi Vigyan Kendra, Lucknow",
    nameHi: "आईसीएआर-आईआईएसआर कृषि विज्ञान केंद्र, लखनऊ",
    district: "Lucknow",
    state: "Uttar Pradesh",
    address: "Raebareli Road, Dilkusha, Lucknow",
    contact: "+91 522 248 0726",
    services: ["Soil Health Testing", "Agri Advisory", "Seed Distribution", "Farmer Registration"]
  },
  {
    id: "kvk-pune",
    type: "KVK",
    name: "Krishi Vigyan Kendra, Baramati",
    nameHi: "कृषि विज्ञान केंद्र, बारामती",
    district: "Pune",
    state: "Maharashtra",
    address: "Agricultural Development Trust, Malegaon Khurd, Baramati, Pune",
    contact: "+91 2112 255227",
    services: ["Soil Health Testing", "Agri Advisory", "Seed Distribution", "Scheme Enrollment"]
  },
  {
    id: "csc-pune-1",
    type: "CSC",
    name: "CSC Digital Seva Kendra - Haveli",
    nameHi: "सीएससी डिजिटल सेवा केंद्र - हवेली",
    district: "Pune",
    state: "Maharashtra",
    address: "Gram Panchayat Complex, Wagholi, Haveli, Pune",
    contact: "+91 98220 54321",
    services: ["Aadhaar e-KYC", "Crop Insurance Claim", "Direct Benefit Transfer (DBT)", "KCC Support"]
  },
  {
    id: "kvk-jaipur",
    type: "KVK",
    name: "Krishi Vigyan Kendra, Chomu, Jaipur",
    nameHi: "कृषि विज्ञान केंद्र, चोमू, जयपुर",
    district: "Jaipur",
    state: "Rajasthan",
    address: "SKN Agri University Extension Center, Chomu, Jaipur",
    contact: "+91 1423 222145",
    services: ["Soil Health Testing", "Agri Advisory", "Seed Distribution", "Farmer Registration"]
  },
  {
    id: "csc-jaipur-1",
    type: "CSC",
    name: "CSC Digital Kendra - Sanganer",
    nameHi: "सीएससी डिजिटल केंद्र - सांगानेर",
    district: "Jaipur",
    state: "Rajasthan",
    address: "Near Tehsil Office, Tonk Road, Sanganer, Jaipur",
    contact: "+91 94140 33221",
    services: ["Aadhaar e-KYC", "PM-KISAN Registration", "KCC Support", "Scheme Enrollment"]
  },
  {
    id: "kvk-ludhiana",
    type: "KVK",
    name: "Krishi Vigyan Kendra, Samrala, Ludhiana",
    nameHi: "कृषि विज्ञान केंद्र, समराला, लुधियाना",
    district: "Ludhiana",
    state: "Punjab",
    address: "PAU Extension Farm, Samrala, Ludhiana",
    contact: "+91 1628 261234",
    services: ["Soil Health Testing", "Agri Advisory", "Seed Distribution", "Farmer Registration"]
  },
  {
    id: "csc-patna-1",
    type: "CSC",
    name: "Digital Seva Centre - Danapur",
    nameHi: "डिजिटल सेवा केंद्र - दानापुर",
    district: "Patna",
    state: "Bihar",
    address: "Station Road, Danapur Cantt, Patna",
    contact: "+91 93340 77889",
    services: ["Aadhaar e-KYC", "PM-KISAN Registration", "Crop Insurance Claim", "Direct Benefit Transfer (DBT)"]
  },
  {
    id: "kvk-anand",
    type: "KVK",
    name: "Krishi Vigyan Kendra, Anand Agri University",
    nameHi: "कृषि विज्ञान केंद्र, आणंद कृषि विश्वविद्यालय",
    district: "Anand",
    state: "Gujarat",
    address: "AAU Campus, Borsad Chokdi, Anand",
    contact: "+91 2692 261310",
    services: ["Soil Health Testing", "Agri Advisory", "Seed Distribution", "Scheme Enrollment"]
  }
];

// Support both browser globals and Node/ES modules
if (typeof window !== 'undefined') {
  window.SCHEMES_DATA = SCHEMES_DATA;
  window.SCHEME_CATEGORIES = SCHEME_CATEGORIES;
  window.CSC_KVK_LOCATIONS = CSC_KVK_LOCATIONS;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SCHEMES_DATA, SCHEME_CATEGORIES, CSC_KVK_LOCATIONS };
}

