const careerEntries = [
  {
    period: "2022 — PRESENT",
    role: "Lead QA Specialist at Nexus Systems",
    description:
      "Architecting automated regression suites for cloud-native infrastructure and managing 24/7 CI/CD health checks.",
  },
  {
    period: "2020 — 2022",
    role: "Senior Automation Architect",
    description:
      "Developed internal tools that reduced manual regression time by 85% across web and mobile platforms.",
  },
  {
    period: "2018 — 2020",
    role: "Quality Engineer at FinTech Global",
    description:
      "Specialized in high-frequency trading security protocols and transactional integrity validation.",
  },
  {
    period: "2016 — 2018",
    role: "Junior Test Engineer",
    description:
      "Led manual and exploratory testing for consumer iOS/Android products with strong edge-case discovery.",
  },
];

export default function CareerLogbookSection() {
  return (
    <section className="w-full bg-background py-16">
      <div className="mx-auto w-[90%]">
        <h3 className="mb-8 text-4xl font-extrabold text-foreground">Career Logbook</h3>

        <div className="grid gap-5 lg:grid-cols-2">
          {careerEntries.map((entry) => (
            <article
              key={`${entry.period}-${entry.role}`}
              className="rounded-lg border border-card-border/60 bg-card px-6 py-5"
            >
              <p className="mb-2 text-xs font-bold tracking-[0.14em] text-emerald-500">{entry.period}</p>
              <h4 className="mb-2 text-3xl font-bold leading-tight text-foreground">{entry.role}</h4>
              <p className="text-lg leading-relaxed text-muted">{entry.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
