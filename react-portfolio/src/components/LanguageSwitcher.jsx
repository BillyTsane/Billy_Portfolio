// src/components/LanguageSwitcher.jsx
import React from "react";
import { useI18n } from "../i18n/I18nProvider";

function LanguageSwitcher() {
  const { lang, setLang, languages } = useI18n();

  return (
    <div className="flex items-center gap-1 rounded-full bg-slate-900/80 border border-white/10 px-1 py-1 text-[0.65rem]">
      {Object.entries(languages).map(([code, label]) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          className={`px-2 py-0.5 rounded-full transition ${
            lang === code
              ? "bg-white text-slate-900 font-semibold"
              : "text-slate-300 hover:bg-white/10"
          }`}
        >
          {label.slice(0, 2)}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
