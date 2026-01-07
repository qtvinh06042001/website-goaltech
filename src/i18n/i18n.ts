"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en";
import vi from "./locales/vi";

const resources = {
  en,
  vi,
};

const isBrowser = typeof window !== "undefined";

const instance = i18n.use(initReactI18next);
if (isBrowser) {
  instance.use(LanguageDetector);
}

// guard to avoid re-initializing during HMR
if (!i18n.isInitialized) {
  instance.init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["en", "vi"],
    ns: ["common", "home"],
    defaultNS: "common",
    detection: {
      order: ["localStorage", "navigator", "htmlTag", "path", "subdomain"],
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
    },
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });
}

export default i18n;
