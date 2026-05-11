import { ArrowDown, Sparkles, Code, Cpu, Database, Globe, Zap, Terminal, Github, Coffee } from "lucide-react";

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
    {/* Floating orbs */}
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute top-24 -left-24 w-[420px] h-[420px] rounded-full bg-lavender/20 blur-3xl animate-orb" />
      <div className="absolute bottom-10 right-0 w-[520px] h-[520px] rounded-full bg-lavender-soft/15 blur-3xl animate-orb" style={{ animationDelay: "-6s" }} />
      <div className="absolute top-1/3 right-1/4 w-[260px] h-[260px] rounded-full bg-accent/15 blur-3xl animate-pulse-glow" />
      <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl animate-orb" style={{ animationDelay: "-3s" }} />
    </div>

    {/* Floating Tech Icons */}
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute top-20 left-10 animate-float-slow">
        <Code className="w-8 h-8 text-lavender/40" />
      </div>
      <div className="absolute top-40 right-20 animate-float-reverse">
        <Cpu className="w-10 h-10 text-accent/50" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float-slow" style={{ animationDelay: "2s" }}>
        <Database className="w-9 h-9 text-lavender-soft/60" />
      </div>
      <div className="absolute top-60 right-1/4 animate-float-reverse" style={{ animationDelay: "1s" }}>
        <Globe className="w-7 h-7 text-blue-400/40" />
      </div>
      <div className="absolute bottom-60 left-1/3 animate-float-slow" style={{ animationDelay: "3s" }}>
        <Zap className="w-8 h-8 text-yellow-400/50" />
      </div>
      <div className="absolute top-1/2 left-10 animate-float-reverse" style={{ animationDelay: "4s" }}>
        <Terminal className="w-9 h-9 text-green-400/40" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float-slow" style={{ animationDelay: "5s" }}>
        <Github className="w-8 h-8 text-gray-400/50" />
      </div>
      <div className="absolute top-80 right-40 animate-float-reverse" style={{ animationDelay: "6s" }}>
        <Coffee className="w-7 h-7 text-orange-400/40" />
      </div>
    </div>

    {/* Subtle Code Background */}
    <div className="pointer-events-none absolute inset-0 -z-10 opacity-5">
      <pre className="absolute top-1/4 left-1/4 text-xs font-mono text-muted-foreground whitespace-pre-line animate-pulse">
{`const developer = {
  name: 'Aimen',
  skills: ['React', 'TypeScript', 'AI'],
  passion: 'Innovation'
};`}
      </pre>
      <pre className="absolute bottom-1/4 right-1/4 text-xs font-mono text-muted-foreground whitespace-pre-line animate-pulse" style={{ animationDelay: "2s" }}>
{`function createMagic() {
  return '✨ Interactive UI ✨';
}`}
      </pre>
    </div>

    <div className="container relative text-center max-w-4xl">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mono text-xs tracking-widest text-muted-foreground mb-8 animate-fade-in">
        <Sparkles className="w-3.5 h-3.5 text-lavender" />
        AVAILABLE FOR COLLABORATIONS · 2026
      </div>

      <h1 className="serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tight mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
        <span className="bg-gradient-to-r from-lavender via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient">Aimen</span>
        <br />
        <span className="italic font-light bg-gradient-to-r from-foreground/85 to-muted-foreground bg-clip-text text-transparent">Software Engineer</span>
      </h1>

      <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 animate-fade-in" style={{ animationDelay: "0.25s" }}>
        Bridging the gap between <span className="text-lavender-soft italic bg-gradient-to-r from-lavender-soft to-purple-300 bg-clip-text text-transparent">deep learning</span> and
        <span className="text-lavender-soft italic bg-gradient-to-r from-lavender-soft to-blue-300 bg-clip-text text-transparent"> user-centric web design</span>  crafting intelligent
        interfaces where machine intuition meets human delight.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
        <a href="#projects" className="px-7 py-3.5 rounded-full bg-gradient-to-r from-lavender to-purple-500 text-white font-medium shadow-soft hover:shadow-glow transition-all duration-500 hover:-translate-y-0.5 hover:scale-105">
          Explore work
        </a>
        <a href="#about" className="px-7 py-3.5 rounded-full glass border border-lavender/30 text-foreground/90 hover:border-lavender/50 hover:bg-lavender/10 transition-all duration-500 hover:-translate-y-0.5 hover:scale-105">
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
