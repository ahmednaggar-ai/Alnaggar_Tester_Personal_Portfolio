export default function HeroSection() {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-14 lg:grid-cols-2 lg:items-center">
      <div className="space-y-6">
        <span className="inline-flex items-center rounded-full bg-emerald-600/15 px-4 py-1 text-xs font-semibold tracking-wide text-emerald-600 dark:text-emerald-400">
          BUILD STATUS: VERIFIED
        </span>

        <div className="space-y-3">
          <p className="text-3xl font-semibold text-foreground">Alex Chen</p>
          <h2 className="max-w-md text-5xl font-black leading-tight text-foreground">
            Quality Assurance Engineer
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

      <div className="rounded-xl border border-card-border bg-card p-6 shadow-sm">
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
    </section>
  );
}
