"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "@/components/theme-toggle";
import Link from "next/link";

const navItems = ["Summary", "Logbook", "Tech Stack", "Education", "Courses", "Contact"];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 12);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b py-4 transition-all duration-300 ${
        isScrolled
          ? "border-foreground/10 bg-card/72 shadow-sm backdrop-blur-xl"
          : "border-transparent bg-card/40 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex w-[90%] items-center justify-between gap-4">
        <h1 className="flex items-center gap-3 text-foreground">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="block dark:hidden"
          >
            <rect x="4" y="8" width="40" height="32" rx="3" ry="3" fill="#1E2235" />
            <rect x="4" y="8" width="40" height="10" rx="3" ry="3" fill="#1E2235" />
            <rect x="4" y="13" width="40" height="5" fill="#1E2235" />
            <polyline
              points="13,21 19,27 13,33"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line x1="22" y1="33" x2="30" y2="33" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="hidden dark:block"
          >
            <rect x="4" y="8" width="40" height="32" rx="3" ry="3" fill="#E5E7EB" />
            <rect x="4" y="8" width="40" height="10" rx="3" ry="3" fill="#E5E7EB" />
            <rect x="4" y="13" width="40" height="5" fill="#E5E7EB" />
            <polyline
              points="13,21 19,27 13,33"
              fill="none"
              stroke="#0F172A"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line x1="22" y1="33" x2="30" y2="33" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <span className="font-display text-base tracking-tight">QA_ENGINEER</span>
        </h1>

        <ul className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => {
            const href = item === "Summary" ? "#summary" 
                       : item === "Logbook" ? "#logbook" 
                       : item === "Tech Stack" ? "#tech-stack" 
                       : item === "Education" ? "#education" 
                       : item === "Courses" ? "#courses" 
                       : item === "Benchmarks" ? "/status" 
                       : item === "Contact" ? "#contact" 
                       : "#";
            return (
              <li key={item}>
                <Link
                  href={href}
                  className="text-sm font-medium text-muted transition hover:text-foreground"
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <ThemeToggle />
          </div>
          <button className="hidden rounded-md bg-black px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 dark:bg-white dark:text-black lg:inline-flex cursor-pointer">
            Download CV
          </button>
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-card-border text-foreground lg:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <div
        className={`absolute left-1/2 top-full z-50 w-[90%] -translate-x-1/2 rounded-b-xl border border-card-border/60 bg-card/95 p-4 shadow-xl backdrop-blur-xl transition-all duration-300 lg:hidden ${
          isMenuOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <ul className="space-y-2">
          {navItems.map((item) => {
            const href = item === "Summary" ? "#summary" 
                       : item === "Logbook" ? "#logbook" 
                       : item === "Tech Stack" ? "#tech-stack" 
                       : item === "Education" ? "#education" 
                       : item === "Courses" ? "#courses" 
                       : item === "Benchmarks" ? "/status" 
                       : item === "Contact" ? "#contact" 
                       : "#";
            return (
              <li key={`mobile-${item}`}>
                <Link
                  href={href}
                  className="block rounded-md px-2 py-2 text-sm font-medium text-muted transition hover:bg-surface hover:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            );
          })}
          <li>
            <div className="px-2 py-1">
              <ThemeToggle />
            </div>
          </li>
        </ul>
        <button className="mt-4 w-full rounded-md bg-black px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 dark:bg-white dark:text-black cursor-pointer">
          Download CV
        </button>
      </div>
    </header>
  );
}
