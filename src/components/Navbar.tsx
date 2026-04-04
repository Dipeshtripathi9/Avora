import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Services", href: "/#services" },
  { label: "Impact", href: "/#impact" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    if (isHome && href.startsWith("/#")) {
      const el = document.querySelector(href.replace("/", ""));
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-xl border-b border-gold/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-20">
        <Link to="/" className="font-display text-2xl text-primary-foreground tracking-wide">
        Avora
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) =>
            isHome ? (
              <a
                key={l.label}
                href={l.href.replace("/", "")}
                className="font-body text-sm text-primary-foreground/60 hover:text-gold transition-colors duration-300 uppercase tracking-widest"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.label}
                to={l.href}
                className="font-body text-sm text-primary-foreground/60 hover:text-gold transition-colors duration-300 uppercase tracking-widest"
              >
                {l.label}
              </Link>
            )
          )}
          <Link
            to="/#contact"
            onClick={() => handleNavClick("/#contact")}
            className="border border-gold/40 text-gold px-6 py-2.5 rounded-full font-body font-semibold text-sm hover:bg-gold hover:text-accent-foreground transition-all duration-300 uppercase tracking-wider"
          >
            Free Consultation
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-primary-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-primary/98 backdrop-blur-xl border-t border-gold/10 px-6 py-6 space-y-4">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              onClick={() => setOpen(false)}
              className="block font-body text-primary-foreground/70 hover:text-gold uppercase tracking-widest text-sm"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/#contact"
            onClick={() => setOpen(false)}
            className="block border border-gold/40 text-gold px-5 py-2.5 rounded-full font-body font-semibold text-sm text-center uppercase tracking-wider"
          >
            Free Consultation
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
