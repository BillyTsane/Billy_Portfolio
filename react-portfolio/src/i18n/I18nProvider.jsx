// src/i18n/I18nProvider.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, LANGS } from "./translations";

const I18nContext = createContext();

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") return "en";
    return localStorage.getItem("lang") || "en";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const value = {
    lang,
    setLang,
    t: translations[lang],
    languages: LANGS,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
