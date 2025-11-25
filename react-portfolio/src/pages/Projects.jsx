// src/pages/Projects.jsx
import React from "react";
import { Section } from "../components/Section";
import { ProjectCard } from "../components/ProjectCard";
import { useI18n } from "../i18n/I18nProvider";

const allProjects = [
  {
    id: "student-social",
    title: "Student Social Network Platform",
    subtitle:
      "Bachelor thesis project: social network for students using Laravel, React and PostgreSQL.",
    bullets: [
      "Full-stack architecture with REST API in Laravel and SPA frontend in React.",
      "Authentication & authorization with JWT and email verification.",
      "Docker-based deployment and Azure integration.",
    ],
    tech: ["Laravel", "React", "PostgreSQL", "JWT", "Docker", "Azure"],
  },
  {
    id: "devsecops",
    title: "DevSecOps in Regulated Industries",
    subtitle:
      "PSE project implementing automated security checks in CI/CD for Node.js services.",
    bullets: [
      "GitLab CI/CD pipeline with security gates.",
      "Integration of Snyk, OWASP ZAP and Trivy.",
      "Deployment on Azure Kubernetes Service (AKS).",
    ],
    tech: ["Node.js", "GitLab CI/CD", "Snyk", "OWASP ZAP", "Trivy", "AKS"],
  },
  {
    id: "fnr-forms",
    title: "FNR Online Funding Forms",
    subtitle:
      "Development of complex HTML5/JavaScript forms and PostgreSQL/PostGIS backend.",
    bullets: [
      "User-friendly form interfaces using jQuery and jQuery UI.",
      "Data stored in a PostgreSQL/PostGIS database.",
    ],
    tech: ["HTML5", "CSS", "JavaScript", "jQuery", "PostgreSQL", "PostGIS"],
  },
  {
    id: "os-compliance",
    title: "Open Source Compliance Tools",
    subtitle:
      "Automation tools to support open-source license and copyright checks.",
    bullets: [
      "Code scanning for license headers and copied code.",
      "Implementation in PowerShell, Node.js and React.",
    ],
    tech: ["PowerShell", "Node.js", "React", "Open Source Compliance"],
  },
];

function Projects() {
  const { t } = useI18n();

  return (
    <div className="space-y-6">
      <Section title={t.projects.title}>
        <p className="text-xs md:text-sm text-[var(--muted-text)]
 mb-4">
          {t.projects.description}
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {allProjects.map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>
      </Section>
    </div>
  );
}

export default Projects;
