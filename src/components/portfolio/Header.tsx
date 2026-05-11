import { Home, User, Code, Briefcase, Award, Mail, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const links = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#skills", label: "Skills", icon: Code },
  { href: "#projects", label: "Projects", icon: Briefcase },
  { href: "#experience", label: "Experience", icon: Award },
  { href: "#contact", label: "Contact", icon: Mail },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerOpacity = Math.max(0.8, 1 - scrollY / 300);
  const headerScale = Math.max(0.95, 1 - scrollY / 1000);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-muted z-50">
        <div
          className="h-full bg-gradient-to-r from-lavender to-purple-500 transition-all duration-300 ease-out"
          style={{ width: `${(scrollY / (document.body.scrollHeight - window.innerHeight)) * 100}%` }}
        />
      </div>

      <header
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(95%,1100px)] transition-all duration-300"
        style={{ opacity: headerOpacity, transform: `translate(-50%, -50%) scale(${headerScale})` }}
      >
      <nav className="glass rounded-full px-6 py-3 flex items-center justify-between shadow-soft backdrop-blur-xl border border-white/10">
        <a href="#home" className="serif text-xl tracking-wide group">
          <span className="text-gradient font-semibold group-hover:scale-105 transition-transform duration-300">Aimen</span>
          <span className="text-muted-foreground italic group-hover:text-lavender-soft transition-colors duration-300"> Ansari</span>
        </a>
        <ul className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="group flex items-center gap-1 hover:text-foreground pastel-glow transition-all duration-300 hover:scale-105 relative">
                <l.icon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span>{l.label}</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-lavender to-purple-400 group-hover:w-full transition-all duration-300"></div>
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] px-4 py-2 rounded-full bg-gradient-to-r from-lavender to-purple-500 text-white font-medium hover:shadow-glow hover:scale-105 transition-all duration-500 group"
          >
            <Mail className="w-3 h-3 group-hover:rotate-12 transition-transform duration-300" />
            Let's talk
          </a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full glass hover:bg-lavender/10 transition-colors duration-300 group relative"
          >
            <Menu className={`w-5 h-5 transition-all duration-300 ${isMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`} />
            <X className={`w-5 h-5 absolute inset-0 m-auto transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 glass rounded-2xl p-6 shadow-soft backdrop-blur-xl border border-white/10 animate-fade-in">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300 p-2 rounded-lg hover:bg-lavender/10"
                >
                  <l.icon className="w-5 h-5 group-hover:text-lavender transition-colors duration-300" />
                  <span className="font-medium">{l.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-4 border-t border-white/10">
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 text-sm uppercase tracking-[0.1em] px-6 py-3 rounded-full bg-gradient-to-r from-lavender to-purple-500 text-white font-medium hover:shadow-glow hover:scale-105 transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
              Let's talk
            </a>
          </div>
        </div>
        )}
      </header>
    </>
  );
};
