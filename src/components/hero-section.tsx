"use client";

import { useEffect, useState } from "react";

const TYPING_TITLES = [
  "Software Tester",
  "QA Automation Engineer",
  "Manual & API Tester",
  "Performance Test Engineer",
];

export default function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = TYPING_TITLES[titleIndex];
    const isTypingComplete = displayText === currentTitle;
    const isDeletingComplete = displayText.length === 0;

    let timeoutMs = 90;
    if (isTypingComplete && !isDeleting) {
      timeoutMs = 1400;
    } else if (isDeleting) {
      timeoutMs = 45;
    }

    const timer = window.setTimeout(() => {
      if (!isDeleting && !isTypingComplete) {
        setDisplayText(currentTitle.slice(0, displayText.length + 1));
        return;
      }

      if (!isDeleting && isTypingComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && !isDeletingComplete) {
        setDisplayText(currentTitle.slice(0, displayText.length - 1));
        return;
      }

      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % TYPING_TITLES.length);
    }, timeoutMs);

    return () => window.clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section className="w-full bg-[radial-gradient(circle,rgba(100,116,139,0.18)_2px,transparent_2px)] bg-size-[34px_34px] dark:bg-[radial-gradient(circle,rgba(148,163,184,0.2)_2px,transparent_2px)]">
      <div className="mx-auto grid w-[90%] gap-4 py-14 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-5">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-600/15 px-4 py-1 text-xs font-semibold tracking-wide text-emerald-600 dark:text-emerald-400">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            BUILD STATUS: VERIFIED
          </span>

          <div className="space-y-3">
            <p className="text-3xl font-semibold text-foreground">Mohamed Hossam</p>
            <h2 className="text-5xl font-black leading-tight text-foreground lg:whitespace-nowrap">
              {displayText}
              <span className="ml-1 inline-block animate-pulse text-emerald-500">|</span>
            </h2>
          </div>

          <p className="max-w-lg text-xl leading-relaxed text-muted">
            Ensuring system integrity through rigorous automation, manual logic
            testing, and performance stress benchmarks. 100% test coverage target.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="rounded-md bg-black px-6 py-3 text-base font-semibold text-white transition hover:opacity-90 dark:bg-white dark:text-black">
              View Case Studies
            </button>
            <button className="rounded-md border border-card-border bg-card px-6 py-3 text-base font-semibold text-foreground transition hover:bg-surface">
              Read Logbook
            </button>
          </div>
        </div>

        <div className="rounded-xl bg-card p-7 shadow-sm lg:w-full lg:max-w-[760px] lg:justify-self-end">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>
          <pre className="overflow-x-auto text-sm leading-relaxed text-[#1fd6a4] dark:text-[#2af2c0]">
            <code>{`$ npm run test:prod

RUNS ./src/core/security.test.ts
PASS ./src/api/endpoints.test.ts
PASS ./src/core/auth_flow.test.ts
PASS ./src/utils/data_sanitizer.test.ts

Test Suites: 24 passed, 24 total
Tests:      182 passed, 182 total
Snapshots:  0 total
Time:       12.452s

Done in 13.1s.`}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
