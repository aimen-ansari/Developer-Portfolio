const roles = [
  {
    role: "AI Research Intern",
    org: "Independent Research",
    period: "2025 — Present",
    desc: "Investigating pose-aware garment synthesis and lightweight inference for fashion-tech applications.",
  },
  {
    role: "Marketing Manager & Web Developer",
    org: "StahlTech",
    period: "2025 — Present",
    desc: "Owned brand surface and engineering: shipped marketing site, automated funnels, and led the visual identity.",
  },
  {
    role: "Full-Stack Freelance Developer",
    org: "Independent · Multiple Clients",
    period: "2023 — Present",
    desc: "Designed and delivered React + Node products end-to-end — from system design to deploy, with a soft eye for craft.",
  },
  {
    role: "UI/UX Branding Specialist",
    org: "Modern Exports",
    period: "2026 — Present",
    desc: "Refined a complete brand and product UX system — typography, motion, and conversion-led layouts.",
  },
  {
    role: "Academic Project Lead",
    org: "University Capstone",
    period: "2024 — 2026",
    desc: "Leading a multi-disciplinary team building Tryonnex — coordinating ML researchers, designers, and engineers.",
  },
];

const Experience = () => (
  <section id="experience" className="container py-32 relative">
    <div className="max-w-3xl mb-16 reveal">
      <p className="mono text-xs tracking-[0.3em] text-lavender mb-4">/ 04 — JOURNEY</p>
      <h2 className="serif text-5xl md:text-6xl leading-[1.05] text-gradient">
        A timeline of curiosities.
      </h2>
    </div>

    <div className="relative max-w-4xl mx-auto">
      <div className="absolute left-3 md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-lavender/40 to-transparent md:-translate-x-1/2" />
      {roles.map((r, i) => (
        <div
          key={r.role}
          className={`relative reveal mb-10 md:mb-14 md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"}`}
          style={{ transitionDelay: `${i * 80}ms` }}
        >
          <div className={`pl-10 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12 md:col-start-2"}`}>
            <div className="absolute left-0 md:left-1/2 top-2 w-6 h-6 rounded-full bg-gradient-lavender shadow-glow md:-translate-x-1/2 ring-4 ring-background" />
            <p className="mono text-xs tracking-widest text-lavender mb-2">{r.period}</p>
            <h3 className="serif text-2xl md:text-3xl text-foreground mb-1 pastel-glow">{r.role}</h3>
            <p className="text-sm text-muted-foreground italic mb-3">{r.org}</p>
            <p className="text-muted-foreground leading-relaxed">{r.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
