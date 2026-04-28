import ThemeToggle from "@/components/theme-toggle";

const navItems = ["Summary", "Logbook", "Tech Stack", "Benchmarks", "Contact"];

export default function Navbar() {
  return (
    <header className="w-full bg-card/95 py-4 backdrop-blur">
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

        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-sm font-medium text-muted transition hover:text-foreground"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button className="rounded-md bg-black px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 dark:bg-white dark:text-black cursor-pointer">
            Download CV
          </button>
        </div>
      </nav>
    </header>
  );
}
