import React from "react";
import { NavLink } from "react-router-dom";
import { useI18n } from "../i18n/I18nProvider";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTheme } from "../theme/ThemeProvider";
import { Sun, Moon } from "lucide-react";

function Navbar() {
  const { t } = useI18n();
  const { theme, toggleTheme } = useTheme();

  const navBase =
  "text-xs font-medium px-3 py-1.5 rounded-full transition";
const navInactive = "text-[var(--muted-text)] hover:text-[var(--text)] hover:bg-[var(--card-bg)]/40";
const navActive =
  "bg-white text-slate-900 shadow-sm dark:bg-slate-100 dark:text-slate-900";
  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-[var(--nav-border)] bg-[var(--nav-bg)] backdrop-blur">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <NavLink to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center text-sm font-bold">
            BM
          </div>
          <div className="leading-tight">
            <p className="font-semibold text-sm">Billy Max Tsane Tsafack</p>
            <p className="text-[0.7rem] text-slate-400">
              Fullstack Developer & Computer Science Student
            </p>
          </div>
        </NavLink>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-1">
            <Nav to="/" label={t.nav.home} />
            <Nav to="/experience" label={t.nav.experience} />
            <Nav to="/projects" label={t.nav.projects} />
            <Nav to="/certificates" label={t.nav.certificates} />
            <Nav to="/contact" label={t.nav.contact} />
            <Nav to="/downloads" label="Downloads" />
          </div>

          <LanguageSwitcher />

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-yellow-300" />
            ) : (
              <Moon className="w-4 h-4 text-slate-900" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}

function Nav({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-xs px-3 py-1.5 rounded-full transition ${
          isActive ? "bg-white text-slate-900" : "text-[var(--muted-text)] hover:bg-white/10"
        }`
      }
      end
    >
      {label}
    </NavLink>
  );
}

export default Navbar;
