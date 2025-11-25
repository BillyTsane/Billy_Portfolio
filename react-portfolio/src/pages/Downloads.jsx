import React from "react";
import { Section } from "../components/Section";
import { useI18n } from "../i18n/I18nProvider";

const docs = [
  { label: "CV / Resume", file: "Lebenslauf_BillyMax.pdf" },
  { label: "React Certificate", file: "React_Certificate.pdf" },
  { label: "Laravel Certificate", file: "Laravel_Certificate.pdf" },
  { label: "Excel Certificate", file: "ExcelZertifikat_BillyMax_Tsafack.pdf" },
  { label: "ProAlpha Work Transcript", file: "Tsane-Tsafack_Billy-Max_Abschlusszeugnis.pdf" },
  { label: "Bachelor Degree Certificate", file: "Urkunde_B.Sc..pdf" },
  { label: "Summer School 2023 Certificate", file: "Summer_School_Certificate_Billy_Max_Tsane_Tsafack.pdf" },
  { label: "FNR Work Transcript", file: "Abschlusszeugnis_fnr.pdf" },
];

function Downloads() {
  const { t } = useI18n();

  return (
    <div className="space-y-6">
      <Section title="Downloads">
        <p className="text-sm text-slate-300 mb-4">
          {t.certificates.description}
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {docs.map((d, i) => (
            <a
              key={i}
              href={`/docs/${d.file}`}
              download
              className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-sm hover:bg-white/10 transition"
            >
              {d.label}
            </a>
          ))}
        </div>
      </Section>
    </div>
  );
}

export default Downloads;

