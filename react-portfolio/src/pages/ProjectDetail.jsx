import React from "react";
import { useParams, Link } from "react-router-dom";
import { allProjects } from "../data/projects.js";
import { ArrowLeft } from "lucide-react";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = allProjects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="text-center text-slate-300">
        Project not found.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-sm text-orange-300 hover:text-orange-200"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to projects
      </Link>

      <h1 className="text-2xl font-semibold">{project.title}</h1>
      <p className="text-slate-400">{project.subtitle}</p>

      <ul className="list-disc list-inside text-slate-300 space-y-1">
        {project.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>

      {project.tech && (
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs rounded-full bg-white/10 border border-white/20"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
