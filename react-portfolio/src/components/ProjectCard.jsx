// src/components/ProjectCard.jsx
import React from "react";
import { motion } from "framer-motion";

export function ProjectCard({ title, subtitle, bullets, tech }) {
  return (
   <motion.article
  whileHover={{ y: -4, scale: 1.01 }}
  transition={{ type: "spring", stiffness: 260, damping: 18 }}
  className="rounded-2xl border border-white/10 bg-slate-900/70 p-4"
>

      <h3 className="text-sm font-semibold">{title}</h3>
      {subtitle && (
        <p className="text-xs text-slate-400 leading-relaxed">{subtitle}</p>
      )}
      {bullets && (
        <ul className="mt-1 list-disc list-inside text-xs text-slate-300 space-y-1">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
      {tech && (
  <div className="flex flex-wrap gap-1 mt-2">
    {tech.map((t) => (
      <span
        key={t}
        className="
          text-[0.65rem] px-2 py-0.5 rounded-full 
          border border-[var(--chip-border)] 
          bg-[var(--chip-bg)] 
          text-[var(--chip-text)]
        "
      >
        {t}
      </span>
    ))}
  </div>
)}

    </motion.article>
  );
}
