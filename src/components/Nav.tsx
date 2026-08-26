import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { site } from "../lib/site";
import { cn } from "../lib/utils";
import { XIcon } from "./icons";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#process", label: "Process" },
  { href: "/#tools", label: "Tools" },
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
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled || open
          ? "bg-void/80 backdrop-blur-xl border-b border-line/50"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <Link
          to="/"
          className="group flex items-center gap-2 text-bone"
          aria-label="Headie — home"
        >
          <span className="font-display text-2xl italic tracking-tight">{site.name}</span>
          <span className="h-1.5 w-1.5 rounded-full bg-teal transition-transform duration-500 group-hover:scale-150" />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline text-sm text-mute transition-colors hover:text-bone"
            >
              {l.label}
            </a>
          ))}
          <a
            href={site.socials.x}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-bone transition hover:border-bone/40 hover:bg-white/5"
          >
            <XIcon className="h-3.5 w-3.5" />
            Follow
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-bone md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="relative h-4 w-6">
            <span
              className={cn(
                "absolute left-0 h-px w-6 bg-current transition-all duration-300",
                open ? "top-2 rotate-45" : "top-0.5",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-2 h-px w-6 bg-current transition-all duration-300",
                open ? "opacity-0" : "opacity-100",
              )}
            />
            <span
              className={cn(
                "absolute left-0 h-px w-6 bg-current transition-all duration-300",
                open ? "top-2 -rotate-45" : "top-[0.9rem]",
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-40 flex flex-col justify-between bg-void px-6 py-10 transition-all duration-500 md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav className="flex flex-col gap-1">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-4xl italic text-bone transition-transform duration-500"
              style={{ transitionDelay: open ? `${i * 40 + 60}ms` : "0ms" }}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-5 text-sm text-mute">
          <a href={site.socials.x} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-bone">
            <XIcon className="h-4 w-4" /> {site.handle}
          </a>
        </div>
      </div>
    </header>
  );
}
