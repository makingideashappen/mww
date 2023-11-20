/* eslint-disable global-require */
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const detectionOptions = {
  order: [
    "path",
    "cookie",
    "navigator",
    "localStorage",
    "subdomain",
    "queryString",
    "htmlTag",
  ],
  lookupFromPathIndex: 0,
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: detectionOptions,
    fallbackLng: "en",
    react: {
      useSuspense: false,
    },
    resources: {
      en: {
        about: require("./translations/en/about.json"),
        contact: require("./translations/en/contact.json"),
        home: require("./translations/en/home.json"),
        news: require("./translations/en/news.json"),
        products: require("./translations/en/products.json"),
        shared: require("./translations/en/shared.json"),
        technicalInfo: require("./translations/en/technicalInfo.json"),
        legal: require("./translations/en/legal.json"),

      },
    },
    ns: [
      "about",
      "contact",
      "home",
      "news",
      "products",
      "shared",
      "technicalInfo",
      "legal"
    ],
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    keySeparator: false,
    nsSeparator: ".",
    returnObjects: true,
    debug: process.env.NODE_ENV === "development",
  });

i18next.languages = ["en"];

export default i18next;
