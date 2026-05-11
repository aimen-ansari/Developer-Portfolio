import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const Contact = () => (
  <section id="contact" className="container py-32 relative">
    <div className="max-w-4xl mx-auto text-center reveal">
      <p className="mono text-xs tracking-[0.3em] text-lavender mb-6">/ 05 — SAY HELLO</p>
      <h2 className="serif text-6xl md:text-8xl leading-[0.95] mb-8">
        <span className="italic font-light text-foreground/90">Let's build something</span>
        <br />
        <span className="text-gradient">quietly remarkable.</span>
      </h2>
      <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
        Whether it's a research collaboration, a freelance build, or a thoughtful conversation —
        my inbox is always open.
      </p>

      <a
        href="mailto:hello@aimen.dev"
        className="inline-flex items-center gap-3 serif italic text-3xl md:text-5xl text-foreground pastel-glow border-b border-border hover:border-lavender pb-2 transition-all duration-500 group"
      >
        hello@aimen.dev
        <ArrowUpRight className="w-7 h-7 text-lavender group-hover:rotate-45 transition-transform duration-500" />
      </a>

      <div className="flex items-center justify-center gap-4 mt-16">
        {[
          { icon: Mail, href: "aimenansari4@gmail.com", label: "Email" },
          { icon: Github, href: "https://github.com/aimen-ansari", label: "GitHub" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/aimen92/", label: "LinkedIn" },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="w-12 h-12 rounded-full glass flex items-center justify-center hover:border-lavender/60 hover:text-lavender hover:shadow-glow transition-all duration-500"
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </div>

    <footer className="mt-32 pt-5 border-t border-border/50 flex items-center justify-between text-xs mono text-muted-foreground">
      <span>© 2026 Aimen — Software Engineer.</span>
      <span className="hidden sm:inline">All Rights Reserved.</span>
    </footer>
  </section>
);

export default Contact;
