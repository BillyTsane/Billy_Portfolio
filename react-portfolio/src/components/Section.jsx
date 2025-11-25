// src/components/Section.jsx
import React from "react";

export function Section({ title, children, id }) {
  return (
    <section id={id} className="mb-10">
      {title && (
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg md:text-xl font-semibold tracking-tight">
            {title}
          </h2>
        </div>
      )}
      {children}
    </section>
  );
}
