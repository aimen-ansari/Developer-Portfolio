const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const Header = () => (
  <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(95%,1100px)]">
    <nav className="glass rounded-full px-6 py-3 flex items-center justify-between shadow-soft">
      <a href="#home" className="serif text-xl tracking-wide">
        <span className="text-gradient font-semibold">Aimen</span>
        <span className="text-muted-foreground italic"> .dev</span>
      </a>
      <ul className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="hover:text-foreground pastel-glow transition-colors duration-300">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="hidden sm:inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] px-4 py-2 rounded-full bg-gradient-lavender text-primary-foreground font-medium hover:shadow-glow transition-all duration-500"
      >
        Let's talk
      </a>
    </nav>
  </header>
);

export default Header;
