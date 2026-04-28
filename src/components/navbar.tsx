import ThemeToggle from "@/components/theme-toggle";

const navItems = ["Summary", "Logbook", "Tech Stack", "Benchmarks", "Contact"];

export default function Navbar() {
  return (
    <header className="w-full rounded-t-2xl border-b border-card-border bg-card/95 px-6 py-4 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4">
        <h1 className="text-lg font-bold tracking-wide text-foreground">QA ENGINEER</h1>

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
          <button className="rounded-md bg-black px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 dark:bg-white dark:text-black">
            Download CV
          </button>
        </div>
      </nav>
    </header>
  );
}
