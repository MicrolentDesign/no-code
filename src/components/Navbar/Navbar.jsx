import { useEffect, useState } from "react";
import "./Navbar.css";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { nav } from "../../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__pill">
        <Logo />

        <nav className="nav__links" aria-label="Primary">
          {nav.links.map((l) => (
            <a key={l.label} href={l.href} className="nav__link">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <a href={nav.login.href} className="nav__login">
            {nav.login.label}
          </a>
          <Button variant="brand" size="sm" href={nav.cta.href}>
            {nav.cta.label}
          </Button>
          <button
            className="nav__burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "X" : "Menu"} size={20} />
          </button>
        </div>
      </div>

      <div className="nav__sheet" hidden={!open}>
        <nav className="nav__sheet-links">
          {nav.links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav__sheet-actions">
          <Button variant="light" href={nav.login.href}>
            {nav.login.label}
          </Button>
          <Button variant="brand" href={nav.cta.href}>
            {nav.cta.label}
          </Button>
        </div>
      </div>
    </header>
  );
}
