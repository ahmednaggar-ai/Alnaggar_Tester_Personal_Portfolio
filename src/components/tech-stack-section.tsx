const stackCards = [
  {
    title: "Automation",
    tags: ["SELENIUM", "CYPRESS", "PLAYWRIGHT", "JEST", "GITHUB ACTIONS"],
    description:
      "Building robust end-to-end testing pipelines that integrate seamlessly with deployment workflows.",
    icon: "⚙",
  },
  {
    title: "Manual & Logic",
    tags: ["EDGE CASES", "UAT", "EXPLORATORY", "BLACK BOX"],
    description:
      "Applying critical human reasoning to identify vulnerabilities that automated scripts might overlook.",
    icon: "⚗",
  },
  {
    title: "Tools & API",
    tags: ["POSTMAN", "DOCKER", "JMETER", "SWAGGER", "KUBERNETES"],
    description:
      "Validating backend resilience through comprehensive REST/GraphQL API testing and load simulation.",
    icon: "✥",
  },
];

export default function TechStackSection() {
  return (
    <section className="w-full bg-background py-16">
      <div className="mx-auto w-[90%]">
        <p className="mb-2 text-xs font-bold tracking-[0.18em] text-muted">ENVIRONMENT</p>
        <h3 className="mb-8 text-4xl font-extrabold text-foreground">Tech Stack & Methodology</h3>

        <div className="grid gap-5 lg:grid-cols-3">
          {stackCards.map((card) => (
            <article key={card.title} className="rounded-lg border border-card-border/60 bg-card px-6 py-6">
              <p className="mb-4 text-3xl text-foreground">{card.icon}</p>
              <h4 className="mb-4 text-4xl font-bold leading-tight text-foreground">{card.title}</h4>

              <div className="mb-5 flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <span
                    key={`${card.title}-${tag}`}
                    className="rounded-sm bg-surface px-2 py-1 text-[10px] font-bold tracking-wide text-muted dark:border dark:border-card-border/70 dark:bg-card-border/35 dark:text-foreground/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-lg leading-relaxed text-muted">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
