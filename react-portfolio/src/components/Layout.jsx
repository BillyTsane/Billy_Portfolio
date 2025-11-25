// src/components/Layout.jsx
import React from "react";
import Navbar from "./Navbar";

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
      {/* background gradient adapts to theme */}
      <div
        className="
          fixed inset-0 -z-10 
          bg-gradient-to-br 
          from-[var(--bg-alt)] 
          via-[var(--bg)] 
          to-[var(--bg-alt)]
        "
      />
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 pt-24 pb-16">{children}</main>
      <footer className="border-t border-[var(--nav-border)] mt-8">
        <div className="max-w-6xl mx-auto px-4 py-6 text-xs text-[var(--muted-text)] flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Billy Max Tsane Tsafack</p>
          <p>Built with React, Tailwind & passion.</p>
        </div>
      </footer>
    </div>
  );
}
