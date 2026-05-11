import { ArrowDown, Sparkles } from "lucide-react";

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
    {/* Floating orbs */}
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute top-24 -left-24 w-[420px] h-[420px] rounded-full bg-lavender/20 blur-3xl animate-orb" />
      <div className="absolute bottom-10 right-0 w-[520px] h-[520px] rounded-full bg-lavender-soft/15 blur-3xl animate-orb" style={{ animationDelay: "-6s" }} />
      <div className="absolute top-1/3 right-1/4 w-[260px] h-[260px] rounded-full bg-accent/15 blur-3xl animate-pulse-glow" />
    </div>

    <div className="container relative text-center max-w-4xl">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mono text-xs tracking-widest text-muted-foreground mb-8 animate-fade-in">
        <Sparkles className="w-3.5 h-3.5 text-lavender" />
        AVAILABLE FOR COLLABORATIONS · 2026
      </div>

      <h1 className="serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tight mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
        <span className="text-gradient">Aimen</span>
        <br />
        <span className="italic font-light text-foreground/85">Software Engineer</span>
      </h1>

      <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 animate-fade-in" style={{ animationDelay: "0.25s" }}>
        Bridging the gap between <span className="text-lavender-soft italic">deep learning</span> and
        <span className="text-lavender-soft italic"> user-centric web design</span>  crafting intelligent
        interfaces where machine intuition meets human delight.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
        <a href="#projects" className="px-7 py-3.5 rounded-full bg-gradient-lavender text-primary-foreground font-medium shadow-soft hover:shadow-glow transition-all duration-500 hover:-translate-y-0.5">
          Explore work
        </a>
        <a href="#about" className="px-7 py-3.5 rounded-full glass text-foreground/90 hover:border-lavender/50 transition-all duration-500">
          About me
        </a>
      </div>

      <a href="#about" className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-lavender transition-colors animate-float">
        <ArrowDown className="w-5 h-5" />
      </a>
    </div>
  </section>
);

export default Hero;
