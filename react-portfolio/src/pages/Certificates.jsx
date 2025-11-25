// src/pages/Certificates.jsx
import React from "react";
import { Section } from "../components/Section";
import { useI18n } from "../i18n/I18nProvider";

const certificates = [
  {
    title: "React for Beginners – From HTML, CSS & JavaScript to React.js",
    issuer: "Udemy",
    date: "June 17, 2025",
  },
  {
    title: "Beginning Laravel – From Novice to Professional",
    issuer: "Udemy",
    date: "June 17, 2025",
  },
  {
    title: "Complete CodeIgniter 4 Framework with Bootstrap Admin Panel",
    issuer: "Udemy",
    date: "June 12, 2025",
  },
  {
    title: "International Summer School 2023 – Greece",
    issuer:
      "Universities of Applied Sciences Heilbronn & Kaiserslautern",
    date: "June 12–16, 2023",
  },
];

function Certificates() {
  const { t } = useI18n();

  return (
    <div className="space-y-6">
      <Section title={t.sections.certificates}>
        <p className="text-xs md:text-sm text-[var(--muted-text)] mb-4">
          {t.certificates.description}
        </p>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          {certificates.map((c, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-slate-900/70 p-4"
            >
              <h3 className="text-sm font-semibold">{c.title}</h3>
              <p className="text-xs text-slate-300 mt-1">{c.issuer}</p>
              <p className="text-xs text-slate-400 mt-1">{c.date}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

export default Certificates;
