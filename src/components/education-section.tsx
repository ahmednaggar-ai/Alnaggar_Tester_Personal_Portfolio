"use client";

const educationItems = [
  {
    degree: "Bachelor of Computer Science",
    institution: "State Technical University",
    period: "2012 — 2016",
    details: "Focused on Software Engineering, Data Structures, and Algorithmic Analysis. Graduated with Honors.",
  },
  {
    degree: "Advanced Software Testing Diploma",
    institution: "QA Institute of Excellence",
    period: "2016 — 2017",
    details: "Post-graduate specialization in automated testing methodologies and quality control systems.",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="w-full bg-background py-20 border-t border-card-border/20">
      <div className="mx-auto w-[90%]">
        <span className="mb-2 block text-xs font-bold tracking-[0.2em] text-emerald-500 uppercase">
          ACADEMIC_CREDENTIALS
        </span>
        <h2 className="mb-12 text-4xl font-extrabold text-foreground">Education</h2>
        
        <div className="space-y-8">
          {educationItems.map((item, index) => (
            <div key={index} className="group relative rounded-xl border border-card-border/50 bg-card p-8 transition-all hover:border-emerald-500/40 hover:shadow-sm">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-emerald-500 transition-colors">
                    {item.degree}
                  </h3>
                  <p className="text-lg font-medium text-muted mt-1">{item.institution}</p>
                </div>
                <span className="inline-block rounded-md bg-surface px-3 py-1 text-sm font-bold text-foreground border border-card-border/30">
                  {item.period}
                </span>
              </div>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted/80">
                {item.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
