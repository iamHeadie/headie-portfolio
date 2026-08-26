import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { site } from "../lib/site";
import { cn } from "../lib/utils";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#process", label: "Process" },
  { href: "/#socials", label: "Socials" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { setOpen(false); }, [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  return (
    <header className={cn("fixed inset-x-0 top-0 z-40 transition-colors duration-300", scrolled || open ? "bg-void/90 backdrop-blur-md border-b border-line/60" : "bg-transparent")}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="font-display text-xl tracking-tight text-bone italic">{site.name}</Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-mute transition-colors hover:text-bone">{l.label}</a>
          ))}
          <a href={site.socials.x} target="_blank" rel="noreferrer" className="rounded-full border border-line px-4 py-1.5 text-sm text-bone transition hover:border-bone/40">Follow on X</a>
        </nav>
        <button type="button" className="md:hidden text-sm text-mute" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((v) => !v)}>{open ? "Close" : "Menu"}</button>
      </div>
      {open && (
        <div className="fixed inset-0 top-16 z-40 bg-void md:hidden">
          <nav className="flex h-full flex-col gap-2 px-6 py-10">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-display text-4xl italic text-bone">{l.label}</a>
            ))}
            <a href={site.socials.x} target="_blank" rel="noreferrer" className="mt-8 text-mute">{site.handle} on X →</a>
          </nav>
        </div>
      )}
    </header>
  );
}
