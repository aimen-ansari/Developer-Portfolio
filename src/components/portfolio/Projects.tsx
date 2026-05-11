import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Tryonnex",
    tag: "Virtual Try-On · Deep Learning",
    desc: "An end-to-end virtual try-on system using pose estimation and generative garment overlays — letting users experience AI-powered fashion interaction in real time.",
    stack: ["PyTorch", "OpenCV", "CNNs", "React"],
    accent: "from-lavender/30 to-accent/20",
    link: "https://tryonnex.com/",
  },
  {
    title: "Stahltech Leather",
    tag: "Full Stack E-commerce",
    desc: "A modern full-stack leather business platform built with scalable backend architecture, responsive UI, and integrated database management.",
    stack: ["React.js", "Supabase", "ASP.NET Core"],
    accent: "from-accent/30 to-lavender/15",
    link: "https://stahltechleather.biz/",
  },
  {
    title: "Stahltech Surgical Instruments",
    tag: "Industrial E-commerce",
    desc: "A professional business website developed for a surgical instruments manufacturer with product showcasing, export-focused structure, and responsive design.",
    stack: ["WordPress", "PHP"],
    accent: "from-lavender-soft/25 to-lavender/15",
    link: "https://stahltech.biz/",
  },
  {
    title: "Musician Portfolio",
    tag: "Creative Portfolio Website",
    desc: "A modern animated portfolio experience focused on elegant UI design, smooth interactions, and responsive frontend architecture.",
    stack: ["React.js", "Tailwind CSS", "GSAP"],
    accent: "from-accent/25 to-lavender-soft/20",
    link: "https://musicianportfolio.com/",
  },
   {
    title: "Modern Exports",
    tag: "Exporter E-com Portfolio",
    desc: "A modern animated fashion industry portfolio experience focused on elegant UI design, smooth interactions, and responsive frontend architecture.",
    stack: ["React.js", "Tailwind CSS", "GSAP"],
    accent: "from-accent/25 to-lavender-soft/20",
    link: "https://moderncoexports.com/",
  },
  {
    title: "Smart Mirror API",
    tag: "Embedded · APIs",
    desc: "A Smart Mirror API exposing AI-powered modules including gesture recognition, contextual widgets, and computer vision integrations.",
    stack: ["Node.js", "Python", "REST APIs", "SQL"],
    accent: "from-lavender/25 to-accent/20",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="container py-32 relative">
      {/* Heading */}
      <div className="flex items-end justify-between flex-wrap gap-6 mb-16 reveal">
        <div className="max-w-2xl">
          <p className="mono text-xs tracking-[0.3em] text-lavender mb-4">
            / 03 — SELECTED WORK
          </p>
          <h2 className="serif text-5xl md:text-6xl leading-[1.05] text-gradient">
            Intelligent systems, crafted through code & design.
          </h2>
        </div>

        <p className="mono text-xs text-muted-foreground tracking-widest">
          {projects.length} PROJECTS · 2023 — 2026
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-5">
        {projects.map((p, i) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <article
              className="group glass-card rounded-3xl p-8 md:p-10 hover-glow reveal relative overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Background Gradient Glow */}
              <div
                className={`absolute -right-32 -top-32 w-96 h-96 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700`}
              />

              {/* Content Grid */}
              <div className="relative grid md:grid-cols-12 gap-6 items-start">
                {/* Index Number */}
                <div className="md:col-span-1 mono text-sm text-lavender">
                  0{i + 1}
                </div>

                {/* Title and Tag */}
                <div className="md:col-span-4">
                  <h3 className="serif text-3xl md:text-4xl text-foreground mb-2 pastel-glow">
                    {p.title}
                  </h3>
                  <p className="mono text-xs tracking-widest text-muted-foreground uppercase">
                    {p.tag}
                  </p>
                </div>

                {/* Description */}
                <p className="md:col-span-5 text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>

                {/* Tech Stack & Action */}
                <div className="md:col-span-2 flex md:flex-col items-end gap-4">
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 justify-end">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] mono px-2 py-1 rounded-full border border-border text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Visual CTA */}
                  <div className="flex items-center gap-2 text-sm mono text-lavender group-hover:text-white transition-colors duration-300">
                    <span>View Project</span>
                    <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </article>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;