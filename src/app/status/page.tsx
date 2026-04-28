export default function StatusPage() {
  const systems = [
    { name: "Frontend Production", status: "Operational", uptime: "99.98%", latency: "42ms" },
    { name: "Backend API (Node.js)", status: "Operational", uptime: "99.99%", latency: "112ms" },
    { name: "Test Automation Pipeline", status: "Active", uptime: "100%", latency: "N/A" },
    { name: "Database (PostgreSQL)", status: "Operational", uptime: "99.95%", latency: "12ms" },
    { name: "Global CDN", status: "Operational", uptime: "100%", latency: "18ms" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto w-[90%] py-20">
        <header className="mb-12">
          <div className="mb-4 flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
            </span>
            <h1 className="text-4xl font-black tracking-tight text-foreground">SYSTEM STATUS</h1>
          </div>
          <p className="text-lg text-muted">Real-time health monitoring for all portfolio infrastructure and test environments.</p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {systems.map((system) => (
            <div key={system.name} className="rounded-xl border border-card-border bg-card p-6 shadow-sm transition-all hover:border-emerald-500/30">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-bold text-foreground">{system.name}</h3>
                <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-emerald-500 uppercase">
                  {system.status}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-muted uppercase">Uptime</p>
                  <p className="font-mono text-foreground">{system.uptime}</p>
                </div>
                <div className="space-y-1 text-right">
                  <p className="text-[10px] font-bold text-muted uppercase">Latency</p>
                  <p className="font-mono text-foreground">{system.latency}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-16">
          <h2 className="mb-6 text-xl font-bold text-foreground">Recent Test Runs</h2>
          <div className="overflow-hidden rounded-xl border border-card-border bg-card">
            <table className="w-full text-left">
              <thead className="bg-surface/50 border-b border-card-border">
                <tr>
                  <th className="px-6 py-4 text-[10px] font-bold text-muted uppercase">Test Suite</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-muted uppercase">Status</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-muted uppercase">Duration</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-muted uppercase">Timestamp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-card-border">
                {[
                  { suite: "auth-flow.spec.ts", status: "PASSED", duration: "1.2s", time: "2 mins ago" },
                  { suite: "api-v2-endpoints.spec.ts", status: "PASSED", duration: "4.8s", time: "15 mins ago" },
                  { suite: "visual-regression.spec.ts", status: "PASSED", duration: "12.4s", time: "1 hour ago" },
                  { suite: "database-integrity.spec.ts", status: "PASSED", duration: "0.9s", time: "3 hours ago" },
                ].map((run, i) => (
                  <tr key={i} className="hover:bg-surface/30">
                    <td className="px-6 py-4 font-mono text-sm text-foreground">{run.suite}</td>
                    <td className="px-6 py-4 text-xs font-bold text-emerald-500">{run.status}</td>
                    <td className="px-6 py-4 text-sm text-muted">{run.duration}</td>
                    <td className="px-6 py-4 text-sm text-muted">{run.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
