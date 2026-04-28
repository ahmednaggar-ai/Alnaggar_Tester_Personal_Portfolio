export default function DocsPage() {
  const categories = [
    {
      title: "Testing Strategy",
      items: [
        { name: "Automation Frameworks", desc: "Guidelines for Playwright and Selenium integration." },
        { name: "Continuous Integration", desc: "Configuring GitHub Actions for automated regression." },
        { name: "Manual Audit Protocols", desc: "Checklists for exploratory and accessibility testing." },
      ],
    },
    {
      title: "Core Infrastructure",
      items: [
        { name: "Deployment Pipeline", desc: "Vercel-based deployment flow and environment management." },
        { name: "Security Standards", desc: "Encryption protocols and data sanitization practices." },
        { name: "API Documentation", desc: "Internal endpoints and request/response schemas." },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto w-[90%] max-w-5xl py-20">
        <header className="mb-16 border-b border-card-border pb-10">
          <h1 className="mb-4 text-5xl font-black tracking-tight text-foreground">DOCUMENTATION</h1>
          <p className="text-xl text-muted leading-relaxed">
            The comprehensive guide to my testing methodology, system architecture, and quality assurance standards.
          </p>
        </header>

        <div className="grid gap-16 lg:grid-cols-[240px_1fr]">
          <aside className="hidden lg:block">
            <nav className="sticky top-32 space-y-8">
              {categories.map((cat) => (
                <div key={cat.title}>
                  <h3 className="mb-4 text-[10px] font-bold tracking-widest text-muted uppercase">{cat.title}</h3>
                  <ul className="space-y-3">
                    {cat.items.map((item) => (
                      <li key={item.name}>
                        <a href={`#${item.name.toLowerCase().replace(/ /g, "-")}`} className="text-sm text-muted transition hover:text-emerald-500">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </aside>

          <div className="space-y-20">
            {categories.map((cat) => (
              <section key={cat.title}>
                <h2 className="mb-10 text-3xl font-bold text-foreground">{cat.title}</h2>
                <div className="space-y-12">
                  {cat.items.map((item) => (
                    <div key={item.name} id={item.name.toLowerCase().replace(/ /g, "-")} className="group">
                      <h4 className="mb-3 text-xl font-bold text-foreground transition group-hover:text-emerald-500">
                        {item.name}
                      </h4>
                      <p className="text-lg leading-relaxed text-muted mb-4">{item.desc}</p>
                      <div className="rounded-lg bg-surface/50 p-6 font-mono text-sm border border-card-border">
                        <p className="text-muted mb-2">// Configuration example</p>
                        <p className="text-emerald-500">const config = &#123; target: 'production', threads: 4 &#125;;</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
