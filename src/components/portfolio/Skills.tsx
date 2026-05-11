const groups = [
{
  title: "AI, ML & Intelligent Systems",
  items: [
    "Python",
    "Machine Learning",
    "Deep Learning",
    "TensorFlow",
    "PyTorch",
    "OpenCV",
    "Computer Vision",
    "CNNs",
    "Neural Networks",
    "NLP"
  ],
},
{
  title: "Frontend & Interactive UI",
  items: [
    "React.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "GSAP",
    "Responsive Design",
    "UI/UX",
    "Vite"
  ],
},
{
  title: "Backend, Database & APIs",
  items: [
    "ASP.NET Core",
    "Supabase",
    "REST APIs",
    "SQL",
    "Firebase",
    "Authentication",
    "Backend Architecture",
    "Database Management"
  ],
},
{
  title: "Software Engineering & Management",
  items: [
    "Agile Methodology",
    "Project Management",
    "Requirement Analysis",
    "SRS Documentation",
    "System Design",
    "UML Modeling",
    "Git & GitHub",
    "SDLC",
    "Technical Documentation"
  ],
},
];

const Skills = () => (
  <section id="skills" className="container py-32 relative">
    <div className="max-w-3xl mb-16 reveal">
      <p className="mono text-xs tracking-[0.3em] text-lavender mb-4">/ 02 — TOOLKIT</p>
      <h2 className="serif text-5xl md:text-6xl leading-[1.05] text-gradient">
        A powerhouse stack, softly arranged.
      </h2>
    </div>

    <div className="grid md:grid-cols-2 gap-5">
      {groups.map((g, i) => (
        <div
          key={g.title}
          className="glass-card rounded-3xl p-8 hover-glow reveal"
          style={{ transitionDelay: `${i * 80}ms` }}
        >
          <div className="flex items-baseline justify-between mb-6">
            <h3 className="serif text-2xl text-foreground">{g.title}</h3>
            <span className="mono text-xs text-muted-foreground">0{i + 1}</span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {g.items.map((items) => (
              <span
                key={items}
                className="px-4 py-2 rounded-full text-sm border border-border bg-secondary/40 text-foreground/85 hover:border-lavender/60 hover:text-lavender-soft hover:bg-lavender/5 transition-all duration-500 cursor-default pastel-glow"
              >
                {items}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
