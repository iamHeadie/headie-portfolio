import { site } from "../lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-display text-lg italic text-bone">{site.name}</p>
        <p className="text-sm text-mute">© {new Date().getFullYear()} · AI films & science stories</p>
        <div className="flex gap-5 text-sm text-mute">
          <a href={site.socials.x} target="_blank" rel="noreferrer" className="hover:text-bone">X</a>
          <a href={site.socials.telegram} target="_blank" rel="noreferrer" className="hover:text-bone">Telegram</a>
          <a href={site.socials.github} target="_blank" rel="noreferrer" className="hover:text-bone">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
