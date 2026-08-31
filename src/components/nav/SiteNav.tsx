import { useEffect, useState } from "react";
import { Monogram } from "../cinematic/art/Monogram";
import "./nav.css";

const LINKS = [
  { href: "#solutions", label: "Solutions" },
  { href: "#process", label: "Process" },
  { href: "#results", label: "Results" },
  { href: "#stories", label: "About" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-nav${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
      <div className="site-nav__inner">
        <a href="#top" className="site-nav__brand" aria-label="D-Lay Prestige, back to top">
          <Monogram className="site-nav__mark" framed={false} />
          <span>D-Lay Prestige</span>
        </a>

        <nav className="site-nav__links" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn-primary site-nav__cta">
          Start Your Journey
        </a>

        <button
          type="button"
          className="site-nav__toggle"
          aria-expanded={open}
          aria-controls="site-nav-mobile"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="site-nav-mobile" className="site-nav__mobile" hidden={!open}>
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href="#contact" className="btn btn-primary" onClick={() => setOpen(false)}>
          Start Your Journey
        </a>
      </div>
    </header>
  );
}
