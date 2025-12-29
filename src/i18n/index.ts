import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import viTranslations from "./locales/vi";
import enTranslations from "./locales/en";

/**
 * i18n Configuration - English & Vietnamese
 */

const resources = {
  vi: {
    translation: viTranslations,
  },
  en: {
    translation: enTranslations,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("language") || "vi",
    fallbackLng: "vi",
    interpolation: {
      escapeValue: false,
    },
  })
  .catch(console.error);

export default i18n;
