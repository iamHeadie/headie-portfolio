import { Link } from "react-router-dom";
import { site } from "../lib/site";
import { XIcon, TelegramIcon, GithubIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-line/50">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="font-display text-3xl italic text-bone">{site.name}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
            </Link>
            <p className="mt-3 max-w-xs text-sm text-mute">{site.tagline} — {site.location}.</p>
          </div>
          <div className="flex items-center gap-3">
            <a href={site.socials.x} target="_blank" rel="noreferrer" aria-label="X / Twitter" className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-mute transition hover:border-bone/40 hover:text-bone">
              <XIcon className="h-4 w-4" />
            </a>
            <a href={site.socials.telegram} target="_blank" rel="noreferrer" aria-label="Telegram" className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-mute transition hover:border-bone/40 hover:text-bone">
              <TelegramIcon className="h-4 w-4" />
            </a>
            <a href={site.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-mute transition hover:border-bone/40 hover:text-bone">
              <GithubIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-line/40 pt-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name} · AI films & visual stories</p>
          <p>Built for the feed · Directed, not summoned</p>
        </div>
      </div>
    </footer>
  );
}
