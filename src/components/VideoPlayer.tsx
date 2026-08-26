import { useEffect, useRef } from "react";
import type { Project } from "../lib/projects";

export function VideoPlayer({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    videoRef.current?.play().catch(() => {});
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      className="lb-enter fixed inset-0 z-[80] flex items-center justify-center bg-void/95 backdrop-blur-xl"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} — video player`}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-line/70 text-bone transition hover:border-bone/50 hover:bg-white/5 sm:right-6 sm:top-6"
        aria-label="Close player"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
        </svg>
      </button>

      <div
        className="lb-panel relative flex max-h-[92dvh] w-full max-w-[420px] flex-col px-4 sm:max-w-[440px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="overflow-hidden rounded-lg border border-line/60 bg-black shadow-2xl">
          <video
            ref={videoRef}
            className="mx-auto max-h-[78dvh] w-full bg-black object-contain"
            controls
            autoPlay
            playsInline
            poster={project.poster}
            preload="auto"
          >
            <source src={project.video} type="video/mp4" />
          </video>
        </div>
        <div className="mt-4 flex items-baseline justify-between gap-4">
          <div>
            <p className="kicker text-teal">{project.kicker}</p>
            <h3 className="font-display text-2xl italic text-bone">{project.title}</h3>
          </div>
          <span className="shrink-0 text-xs text-mute">{project.runtime}</span>
        </div>
      </div>
    </div>
  );
}
