import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./assets/locales/en.json";
import translationHE from "./assets/locales/he.json";

const resources = {
  en: { translation: translationEN },
  he: { translation: translationHE },
};

export type TranslationType = typeof resources.en;
export type TranslationKeys = keyof typeof resources.en.translation;

declare module "i18next" {
  interface CustomTypeOptions {
    returnNull: false;
    returnEmptyString: true;
    defaultNS: "he";
    resources: TranslationType;
  }
}

i18n.use(initReactI18next).init({
  returnNull: false,
  supportedLngs: ["he", "en"],
  fallbackLng: "he",
  compatibilityJSON: "v3",
  resources: resources,
  debug: false,
  returnEmptyString: true,
});

export default i18n;
