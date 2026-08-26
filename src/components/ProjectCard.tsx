import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import type { Project } from "../lib/projects";
import { cn } from "../lib/utils";

function PlayGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M8 5.5v13a1 1 0 0 0 1.5.87l11-6.5a1 1 0 0 0 0-1.74l-11-6.5A1 1 0 0 0 8 5.5Z" />
    </svg>
  );
}

export function ProjectCard({
  project,
  large = false,
  index,
  onPlay,
}: {
  project: Project;
  large?: boolean;
  index?: number;
  onPlay?: (p: Project) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  const enter = () => videoRef.current?.play().catch(() => {});
  const leave = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  // In-production teaser — honest placeholder, not clickable.
  if (project.wip) {
    return (
      <div className="group relative flex min-h-[22rem] flex-col justify-between overflow-hidden rounded-md border border-dashed border-line/70 bg-film/40 p-6">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(42,168,157,0.08),transparent_60%)]" />
        <div className="relative flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal" />
          <span className="kicker text-teal">In production</span>
        </div>
        <div className="relative">
          <h3 className="font-display text-3xl italic text-bone/80">{project.title}</h3>
          <p className="mt-2 max-w-sm text-sm text-mute">{project.logline}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="group relative flex h-full flex-col overflow-hidden rounded-md border border-line/50 bg-film transition-colors duration-500 hover:border-bone/25"
      onMouseEnter={enter}
      onMouseLeave={leave}
    >
      <Link
        to={`/work/${project.slug}`}
        className={cn(
          "relative block overflow-hidden bg-ink",
          large ? "aspect-[4/5] sm:aspect-[16/10]" : "aspect-[4/5]",
        )}
        aria-label={`Open project: ${project.title}`}
      >
        {/* Blurred poster backdrop fills the frame behind portrait media */}
        <div
          className="absolute inset-0 scale-110 bg-cover bg-center opacity-40 blur-2xl saturate-150"
          style={{ backgroundImage: `url(${project.poster})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-void/40" aria-hidden />

        {/* Centered portrait media */}
        <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-5">
          <div className="relative h-full max-h-full overflow-hidden rounded-sm shadow-2xl ring-1 ring-white/5" style={{ aspectRatio: "9 / 16" }}>
            <img
              src={project.poster}
              alt={`${project.title} — ${project.kicker}`}
              loading="lazy"
              className={cn(
                "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
                ready ? "opacity-0" : "opacity-100",
              )}
            />
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              muted
              loop
              playsInline
              preload="none"
              poster={project.poster}
              onPlaying={() => setReady(true)}
            >
              <source src={project.video} type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Corner meta */}
        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-void/50 px-3 py-1 text-xs text-bone/90 backdrop-blur-md">
          {index != null && <span className="tabular-nums text-faint">{String(index + 1).padStart(2, "0")}</span>}
          <span className="tabular-nums">{project.runtime}</span>
        </div>
      </Link>

      {/* Caption bar */}
      <Link
        to={`/work/${project.slug}`}
        className="flex flex-1 flex-col justify-between gap-3 p-5 sm:p-6"
      >
        <div>
          <span className="kicker text-teal">{project.kicker}</span>
          <h3 className="mt-1.5 font-display text-3xl italic leading-tight text-bone sm:text-4xl">
            {project.title}
          </h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-mute line-clamp-2">{project.logline}</p>
        </div>
        <span className="inline-flex items-center gap-2 text-xs text-mute transition-colors group-hover:text-bone">
          View project
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </Link>

      {/* Quick-play button */}
      {onPlay && (
        <button
          type="button"
          onClick={() => onPlay(project)}
          className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-void/60 text-bone backdrop-blur-md transition duration-300 hover:scale-105 hover:border-teal hover:text-teal"
          aria-label={`Play ${project.title}`}
        >
          <PlayGlyph className="ml-0.5 h-4 w-4" />
        </button>
      )}
    </div>
  );
}
