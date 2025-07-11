import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/en.json";
import fr from "./locales/fr/fr.json";
import it from "./locales/it/it.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
    it: { translation: it },
  },
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: { escapeValue: false },
  lng: localStorage.getItem("lang") || "en",
});

export default i18n;
