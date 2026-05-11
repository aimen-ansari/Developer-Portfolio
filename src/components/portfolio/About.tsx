const About = () => (
  <section id="about" className="container py-32 relative">
    <div className="grid md:grid-cols-12 gap-12 items-start">
      <div className="md:col-span-4 reveal">
        <p className="mono text-xs tracking-[0.3em] text-lavender mb-4">
          / 01 — ABOUT
        </p>
        <h2 className="serif text-5xl md:text-6xl leading-[1.05] text-gradient">
          AI-driven Systems, Built with Modern Engineering.
        </h2>
      </div>
      <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg text-muted-foreground leading-relaxed reveal">
        <p>
          I'm a final-year{" "}
          <span className="text-foreground">Software Engineering</span> student
          focused on{" "}
          <span className="text-lavender-soft italic">
            Artificial Intelligence, Machine Learning, Deep Learning and
            Full-Stack Web Development
          </span>{" "}
          — building scalable and intelligent digital solutions using React.js,
          Supabase, ASP.NET Core, JavaScript, and modern web technologies.
        </p>
        <p>
          My work combines clean frontend experiences with powerful backend
          systems, while expanding into Deep Learning and Computer Vision to
          create AI-powered applications that solve real-world problems. My
          craft lives in the browser: accessible, beautifully animated
          interfaces that make complex models feel effortless.
        </p>
        <p>
          The goal? Building technology that is intelligent, scalable, and
          beautifully
          <span className="text-foreground italic">
            {" "}
            beautifully engineered.
          </span>
          .
        </p>

        <div className="grid grid-cols-3 gap-4 pt-8">
          {[
            { k: "5+", v: "Major projects" },
            { k: "20+", v: "Technologies" },
            { k: "3yr", v: "Building Digital Solutions" },
          ].map((s) => (
            <div
              key={s.v}
              className="glass-card rounded-2xl p-5 text-center hover-glow"
            >
              <div className="serif text-4xl text-gradient">{s.k}</div>
              <div className="mono text-[0.65rem] tracking-widest text-muted-foreground mt-2 uppercase">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
