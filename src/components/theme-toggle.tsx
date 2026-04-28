"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "qa-theme";

function applyTheme(theme: Theme) {
  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(theme);
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "light";
    }
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "light" || saved === "dark" ? saved : "light";
  });
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function toggleTheme() {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    applyTheme(nextTheme);
    localStorage.setItem(STORAGE_KEY, nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-md border border-card-border bg-card p-2 text-foreground transition hover:opacity-90"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <svg
          width="28"
          height="28"
          viewBox="0 0 80 80"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <g transform="translate(40,40)">
            <g stroke="#F59E0B" strokeWidth="3" strokeLinecap="round">
              <line x1="0" y1="-26" x2="0" y2="-32" />
              <line x1="0" y1="26" x2="0" y2="32" />
              <line x1="-26" y1="0" x2="-32" y2="0" />
              <line x1="26" y1="0" x2="32" y2="0" />
              <line x1="-18" y1="-18" x2="-22" y2="-22" />
              <line x1="18" y1="-18" x2="22" y2="-22" />
              <line x1="-18" y1="18" x2="-22" y2="22" />
              <line x1="18" y1="18" x2="22" y2="22" />
            </g>
            <circle r="18" fill="#FBBF24" stroke="#F59E0B" strokeWidth="2" />
            <circle r="14" fill="#FDE68A" />
            <circle r="9" fill="#FEF3C7" />
          </g>
        </svg>
      ) : (
        <svg
          width="28"
          height="28"
          viewBox="0 0 80 80"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <clipPath id="moonClip">
              <circle cx="40" cy="40" r="26" />
            </clipPath>
          </defs>
          <circle cx="40" cy="40" r="26" fill="#6366F1" stroke="#4F46E5" strokeWidth="2" />
          <circle cx="51" cy="32" r="22" fill="#0F172A" />
          <circle cx="57" cy="25" r="2.5" fill="#E0E7FF" />
          <circle cx="63" cy="42" r="1.5" fill="#C7D2FE" />
          <circle cx="54" cy="52" r="1.2" fill="#E0E7FF" />
        </svg>
      )}
    </button>
  );
}
