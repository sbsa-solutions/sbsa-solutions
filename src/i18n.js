// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
// Import translations
import translationEN from "./locales/en/translation.json"; // English
import translationFR from "./locales/fr/translation.json"; // French
import translationAR from "./locales/ar/translation.json"; // Arabic

import XHR from "i18next-http-backend";
const resources = {
  en: {
    translation: translationEN,
  },
  ar: {
    translation: translationAR,
  },
  fr: {
    translation: translationFR,
  },
};

const options = {
  order: ["querystring", "navigator"],
  lookupQuerystring: "lng",
};
i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)

  .init({
    resources,
    supportedLngs: ["en", "fr", "ar"],
    //    lng: "en", // Set the default language
    debug: true,
    detection: options,
    fallbackLng: "en",

    // keySeparator: true, // Allow for nested translations without using dots
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;
