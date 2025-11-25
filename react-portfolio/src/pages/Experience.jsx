// src/pages/Experience.jsx
import React from "react";
import { Section } from "../components/Section";
import { useI18n } from "../i18n/I18nProvider";

function Experience() {
  const { t } = useI18n();

  return (
    <div className="space-y-8">
      <Section title={t.sections.experience}>
        <div className="space-y-5 text-sm">
          {/* FNR */}
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
            <h3 className="text-sm font-semibold">{t.experience.fnrTitle}</h3>
            <p className="text-xs text-slate-400">{t.experience.fnrLocation}</p>
            <ul className="mt-2 list-disc list-inside text-xs text-slate-200 space-y-1">
              {t.experience.fnrPoints.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>

          {/* proALPHA */}
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
            <h3 className="text-sm font-semibold">
              {t.experience.proalphaTitle}
            </h3>
            <p className="text-xs text-slate-400">
              {t.experience.proalphaLocation}
            </p>
            <ul className="mt-2 list-disc list-inside text-xs text-slate-200 space-y-1">
              {t.experience.proalphaPoints.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section title={t.sections.education} id="education">
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          {t.education.items.map((ed, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-slate-900/70 p-4"
            >
              <h3 className="text-sm font-semibold">{ed.title}</h3>
              <p className="text-xs text-slate-300 mt-1">{ed.place}</p>
              <p className="text-xs text-slate-400 mt-1">{ed.time}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title={t.sections.skills} id="skills">
        <div className="grid md:grid-cols-3 gap-4 text-xs md:text-sm">
          <SkillBlock title={t.skills.languages} items={t.skills.languageList} />
          <SkillBlock title={t.skills.techSkills} items={t.skills.techList} />
          <SkillBlock title={t.skills.softSkills} items={t.skills.softList} />
        </div>
      </Section>
    </div>
  );
}

function SkillBlock({ title, items }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
      <h3 className="text-sm font-semibold mb-2">{title}</h3>
      <ul className="space-y-1 list-disc list-inside text-xs text-slate-200">
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
    </div>
  );
}

export default Experience;
