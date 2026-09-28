import { useEffect, useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/i18n/LanguageContext";

const GITHUB_URL = "https://github.com/laurencelle14";
const LINKEDIN_URL = "https://www.linkedin.com/in/laurencelle-akpa-522484432";

export function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const LINKS = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.stack, href: "#stack" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a href="#home" className="focus-ring font-mono text-sm font-medium tracking-tight">
          armel<span className="text-muted">.dev</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="focus-ring relative text-sm text-muted transition-colors duration-200 hover:text-text"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="focus-ring text-muted transition-colors duration-200 hover:text-text"
          >
            <Github size={18} />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="focus-ring text-muted transition-colors duration-200 hover:text-text"
          >
            <Linkedin size={18} />
          </a>
          <LanguageToggle />
          <ThemeToggle />
        </div>

        <button
          className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-md md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-smooth md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 border-t border-border bg-bg px-6 py-4">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="focus-ring block py-2 text-sm text-muted transition-colors duration-200 hover:text-text"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2 flex items-center gap-4 pt-2">
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub" className="focus-ring text-muted hover:text-text">
              <Github size={18} />
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="focus-ring text-muted hover:text-text">
              <Linkedin size={18} />
            </a>
            <LanguageToggle />
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </motion.header>
  );
}
