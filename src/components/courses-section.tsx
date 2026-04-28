"use client";

const courses = [
  {
    title: "ISTQB Certified Tester",
    provider: "ISTQB",
    date: "2018",
    id: "CERT-9921",
  },
  {
    title: "Advanced Playwright Automation",
    provider: "Udemy",
    date: "2023",
    id: "UD-PLAY-2023",
  },
  {
    title: "Performance Testing with JMeter",
    provider: "Coursera",
    date: "2021",
    id: "CS-JMET-X",
  },
  {
    title: "API Testing & Security",
    provider: "Test Automation University",
    date: "2022",
    id: "TAU-API-SEC",
  },
  {
    title: "Docker for QA Engineers",
    provider: "LinkedIn Learning",
    date: "2020",
    id: "LI-DOCK-QA",
  },
  {
    title: "Agile Testing Methodology",
    provider: "Scrum.org",
    date: "2019",
    id: "AG-TEST-99",
  },
];

export default function CoursesSection() {
  return (
    <section id="courses" className="w-full bg-background py-20 border-t border-card-border/20">
      <div className="mx-auto w-[90%]">
        <span className="mb-2 block text-xs font-bold tracking-[0.2em] text-emerald-500 uppercase">
          SKILL_EXPANSION
        </span>
        <h2 className="mb-12 text-4xl font-extrabold text-foreground">Courses & Certifications</h2>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <div key={index} className="rounded-xl border border-card-border/40 bg-surface/30 p-6 transition-all hover:bg-card hover:shadow-md hover:-translate-y-1">
              <div className="mb-4 flex items-start justify-between">
                <div className="rounded-md bg-emerald-500/10 p-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <span className="text-[10px] font-black tracking-widest text-muted/60 uppercase">{course.id}</span>
              </div>
              <h3 className="mb-1 text-lg font-bold text-foreground leading-snug">{course.title}</h3>
              <div className="flex items-center justify-between mt-4">
                <p className="text-sm font-medium text-muted">{course.provider}</p>
                <p className="text-sm font-mono text-emerald-500/80">{course.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
