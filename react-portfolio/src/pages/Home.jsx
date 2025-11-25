// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n/I18nProvider";
import { Section } from "../components/Section";
import { ProjectCard } from "../components/ProjectCard";

const featuredProjects = [
  {
    id: "student-social",
    title: "Student Social Network Platform",
    subtitle:
      "Full-stack web application for students using Laravel, React and PostgreSQL.",
    bullets: [
      "Authentication & authorization with JWT and email verification.",
      "Dockerized deployment with Azure integration.",
    ],
    tech: ["Laravel", "React", "PostgreSQL", "Docker", "Azure"],
  },
  {
    id: "devsecops",
    title: "DevSecOps in Regulated Industries",
    subtitle:
      "CI/CD security checks with Snyk, OWASP ZAP and Trivy on GitLab CI.",
    bullets: [
      "Automated security scans integrated into the pipeline.",
      "Deployment on Azure Kubernetes Service (AKS).",
    ],
    tech: ["GitLab CI/CD", "Snyk", "OWASP ZAP", "Trivy", "Docker", "AKS"],
  },
];

function Home() {
  const { t } = useI18n();

  return (
    <div className="space-y-10">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid md:grid-cols-[1.6fr,1fr] gap-8 items-center"
      >
        <div className="space-y-5">
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-orange-400">
            {t.hero.badge}
          </p>
          <h1 className="text-2xl md:text-4xl font-semibold tracking-tight">
            {t.hero.title}
          </h1>
          <p className="text-sm md:text-base text-[var(--muted-text)]
 leading-relaxed">
            {t.hero.intro1}
          </p>
          <p className="text-sm md:text-base text-[var(--muted-text)] leading-relaxed">
            {t.hero.intro2}
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-2 text-xs font-semibold shadow-lg shadow-orange-500/30 hover:scale-[1.02] active:scale-[0.99] transition"
            >
              {t.hero.viewProjects}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
  to="/experience"
  className="
    inline-flex items-center gap-2 rounded-full 
    border border-[var(--card-border)] 
    px-4 py-2 text-xs font-semibold 
    text-[var(--text)]
    bg-[var(--card-bg)]/40 
    hover:bg-[var(--card-bg)]/70 
    transition
  "
>

              {t.hero.aboutMe}
            </Link>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/40 via-pink-500/20 to-sky-500/30 blur-3xl opacity-60" />
          <div className="relative rounded-3xl border border-white/10 bg-slate-900/80 p-5 max-w-xs mx-auto space-y-2">
            <p className="text-[0.65rem] uppercase tracking-[0.25em] text-orange-300">
              {t.hero.profileTitle}
            </p>
            <p className="text-sm font-medium">Billy Max Tsane Tsafack</p>
            <p className="text-xs text-slate-300">{t.hero.profileSubtitle}</p>
            <p className="text-xs text-slate-300 mt-1">
              {t.hero.profileLocation}
            </p>
            <div className="flex flex-wrap gap-2 mt-3 text-[0.65rem]">
              {["Java", "Laravel", "React", "Docker", "GitLab CI/CD"].map(
                (s) => (
                  <span
                    key={s}
                    className="
          text-[0.65rem] px-2 py-0.5 rounded-full 
          border border-[var(--chip-border)] 
          bg-[var(--chip-bg)] 
          text-[var(--chip-text)]
        "
                  >
                    {s}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Featured Projects */}
      <Section title={t.sections.featuredProjects} id="featured-projects">
        <div className="grid md:grid-cols-2 gap-4">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>
        <div className="mt-4 text-right">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1 text-xs text-slate-300 hover:text-white"
          >
            {t.sections.viewAll}
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </Section>
    </div>
  );
}

export default Home;
