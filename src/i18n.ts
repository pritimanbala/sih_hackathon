import type { PatientLanguage } from "./types"

const translations: Record<PatientLanguage, Record<string, string>> = {
  en: {},
  hi: {
    "Select language": "भाषा चुनें", Language: "भाषा", English: "अंग्रेज़ी", "Sign out": "साइन आउट", Logout: "लॉग आउट",
    Overview: "अवलोकन", Patients: "मरीज़", Assignments: "असाइनमेंट", "AI & Analytics": "AI और विश्लेषण", Account: "खाता",
    Dashboard: "डैशबोर्ड", "Patient Queue": "मरीज़ कतार", "Register Patient": "मरीज़ पंजीकरण", "Doctor Assignment": "डॉक्टर असाइनमेंट", "Referral Queue": "रेफरल कतार", "Model Monitoring": "मॉडल निगरानी", Notifications: "सूचनाएं", "Completed Cases": "पूर्ण मामले",
    "Imaging Work": "इमेजिंग कार्य", "Radiology Queue": "रेडियोलॉजी कतार", "My Work": "मेरा कार्य", "My Queue": "मेरी कतार", "Clinical Summary": "क्लिनिकल सारांश", Reviews: "समीक्षा", "Patient Timeline": "मरीज़ समयरेखा",
    "Admin / Reception": "प्रशासन / रिसेप्शन", "Doctor View": "डॉक्टर दृश्य", "Radiologist View": "रेडियोलॉजिस्ट दृश्य", "Open navigation": "नेविगेशन खोलें", "Close navigation": "नेविगेशन बंद करें",
    Login: "लॉग इन", "Overview Dashboard": "अवलोकन डैशबोर्ड", "Doctor Assignment": "डॉक्टर असाइनमेंट", "AI Model Monitoring": "AI मॉडल निगरानी", "My Patient Queue": "मेरी मरीज़ कतार", "Clinical Summary Review": "क्लिनिकल सारांश समीक्षा",
    "AI-Powered Imaging Triage Platform": "AI-संचालित इमेजिंग ट्रायेज प्लेटफ़ॉर्म", "Select your role to access the appropriate workspace. All sessions are logged and audited.": "उपयुक्त कार्यक्षेत्र खोलने के लिए अपनी भूमिका चुनें। सभी सत्र लॉग और ऑडिट किए जाते हैं।",
    "Reception / Admin": "रिसेप्शन / प्रशासन", Radiologist: "रेडियोलॉजिस्ट", "Clinician / Doctor": "चिकित्सक / डॉक्टर", "Patient registration": "मरीज़ पंजीकरण", "Doctor assignment": "डॉक्टर असाइनमेंट", "Referral management": "रेफरल प्रबंधन", "Workflow oversight": "कार्यप्रवाह निगरानी", "Study review": "अध्ययन समीक्षा", "Report severity": "रिपोर्ट गंभीरता", "DICOM upload": "DICOM अपलोड", "Consultant handoff": "सलाहकार हस्तांतरण", "Patient queue": "मरीज़ कतार", "DICOM viewer": "DICOM व्यूअर", "AI findings review": "AI निष्कर्ष समीक्षा", "Clinical documentation": "क्लिनिकल दस्तावेज़ीकरण", "Enter as": "इस रूप में प्रवेश करें",
    "Open MediKiosk Patient Check-in": "MediKiosk मरीज़ चेक-इन खोलें", "This system is for authorized hospital personnel only. All access is logged. Session expires after 30 minutes of inactivity.": "यह प्रणाली केवल अधिकृत अस्पताल कर्मियों के लिए है। सभी पहुंच लॉग की जाती है। 30 मिनट की निष्क्रियता के बाद सत्र समाप्त हो जाता है।",
  },
  ta: {
    "Select language": "மொழியைத் தேர்ந்தெடுக்கவும்", Language: "மொழி", English: "ஆங்கிலம்", "Sign out": "வெளியேறு", Logout: "வெளியேறு",
    Overview: "மேலோட்டம்", Patients: "நோயாளிகள்", Assignments: "ஒதுக்கீடுகள்", "AI & Analytics": "AI மற்றும் பகுப்பாய்வு", Account: "கணக்கு",
    Dashboard: "டாஷ்போர்டு", "Patient Queue": "நோயாளர் வரிசை", "Register Patient": "நோயாளியைப் பதிவு செய்க", "Doctor Assignment": "மருத்துவர் ஒதுக்கீடு", "Referral Queue": "பரிந்துரை வரிசை", "Model Monitoring": "மாதிரி கண்காணிப்பு", Notifications: "அறிவிப்புகள்", "Completed Cases": "நிறைவு செய்யப்பட்ட வழக்குகள்",
    "Imaging Work": "படப்பிடிப்பு பணி", "Radiology Queue": "கதிரியக்க வரிசை", "My Work": "என் பணி", "My Queue": "என் வரிசை", "Clinical Summary": "மருத்துவ சுருக்கம்", Reviews: "மதிப்பாய்வுகள்", "Patient Timeline": "நோயாளர் காலவரிசை",
    "Admin / Reception": "நிர்வாகம் / வரவேற்பு", "Doctor View": "மருத்துவர் காட்சி", "Radiologist View": "கதிரியக்க மருத்துவர் காட்சி", "Open navigation": "வழிசெலுத்தலைத் திறக்கவும்", "Close navigation": "வழிசெலுத்தலை மூடவும்",
    Login: "உள்நுழைவு", "Overview Dashboard": "மேலோட்ட டாஷ்போர்டு", "AI Model Monitoring": "AI மாதிரி கண்காணிப்பு", "My Patient Queue": "என் நோயாளர் வரிசை", "Clinical Summary Review": "மருத்துவ சுருக்க மதிப்பாய்வு",
    "AI-Powered Imaging Triage Platform": "AI அடிப்படையிலான படப்பிடிப்பு வகைப்படுத்தல் தளம்", "Select your role to access the appropriate workspace. All sessions are logged and audited.": "சரியான பணியிடத்தைத் திறக்க உங்கள் பங்கைத் தேர்ந்தெடுக்கவும். அனைத்து அமர்வுகளும் பதிவு செய்யப்பட்டு தணிக்கை செய்யப்படுகின்றன.",
    "Reception / Admin": "வரவேற்பு / நிர்வாகம்", Radiologist: "கதிரியக்க மருத்துவர்", "Clinician / Doctor": "மருத்துவர்", "Patient registration": "நோயாளர் பதிவு", "Doctor assignment": "மருத்துவர் ஒதுக்கீடு", "Referral management": "பரிந்துரை மேலாண்மை", "Workflow oversight": "பணிப்பாய்வு கண்காணிப்பு", "Study review": "ஆய்வு மதிப்பாய்வு", "Report severity": "அறிக்கை தீவிரம்", "DICOM upload": "DICOM பதிவேற்றம்", "Consultant handoff": "ஆலோசகர் ஒப்படைப்பு", "Patient queue": "நோயாளர் வரிசை", "DICOM viewer": "DICOM பார்வையாளர்", "AI findings review": "AI கண்டுபிடிப்புகள் மதிப்பாய்வு", "Clinical documentation": "மருத்துவ ஆவணப்படுத்தல்", "Enter as": "இவ்வாறு நுழைக",
    "Open MediKiosk Patient Check-in": "MediKiosk நோயாளர் செக்-இன் திறக்கவும்", "This system is for authorized hospital personnel only. All access is logged. Session expires after 30 minutes of inactivity.": "இந்த அமைப்பு அங்கீகரிக்கப்பட்ட மருத்துவமனை பணியாளர்களுக்கானது. அனைத்து அணுகல்களும் பதிவு செய்யப்படும். 30 நிமிட செயலற்ற நிலையில் அமர்வு முடிவடையும்.",
  },
}

export function translate(text: string, language: PatientLanguage) {
  return translations[language][text] ?? text
}

export const languageLabels: Record<PatientLanguage, string> = { en: "English", hi: "हिन्दी", ta: "தமிழ்" }
