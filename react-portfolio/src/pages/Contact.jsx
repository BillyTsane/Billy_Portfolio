// src/pages/Contact.jsx
import React from "react";
import { Section } from "../components/Section";
import { useI18n } from "../i18n/I18nProvider";
import ContactForm from "./ContactForm";

function Contact() {
  const { t } = useI18n();

  return (
    <div className="space-y-6">
      <Section title={t.sections.contact}>
        <p className="text-xs md:text-sm text-[var(--muted-text)] mb-4">
          {t.contact.intro}
        </p>

        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 space-y-2">
            <InfoRow label={t.contact.emailLabel} value="billytsane.bt@gmail.com" />
            <InfoRow label={t.contact.phoneLabel} value="+49 163 155 82 69" />
            <InfoRow
              label={t.contact.locationLabel}
              value="Virginiastraße 13, 66482 Zweibrücken, Germany"
            />
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              {t.contact.linksLabel}
            </p>
            <ul className="text-xs space-y-1">
              <li>
                <a
                  className="text-orange-300 hover:text-orange-200 underline"
                  href="https://www.linkedin.com/in/billy-tsane-721b8620a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="text-orange-300 hover:text-orange-200 underline"
                  href="https://github.com/BillyTsane"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className="text-orange-300 hover:text-orange-200 underline"
                  href="https://gitlab.com/Billytsane"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitLab
                </a>
              </li>
            </ul>
            <p className="text-[0.7rem] text-slate-400 mt-2">
              {t.contact.hint}
            </p>
          </div>
        </div>
      </Section>
        <ContactForm />
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div>
      <p className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
        {label}
      </p>
      <p className="text-sm text-slate-100">{value}</p>
    </div>
  );
}

export default Contact;
