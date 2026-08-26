import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProject, projects, type Project } from "../lib/projects";
import { Reveal } from "../components/Reveal";
import { VideoPlayer } from "../components/VideoPlayer";
import { ArrowUpRight } from "../components/icons";

export function ProjectPage() {
  const { slug } = useParams();
  const project = slug ? getProject(slug) : undefined;
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (project) document.title = `${project.title} — Headie`;
    return () => {
      document.title = "Headie — AI Visual Storyteller";
    };
  }, [project]);

  if (!project || project.wip) {
    return (
      <main className="mx-auto flex min-h-[70dvh] max-w-7xl flex-col justify-center px-5 py-32 sm:px-8">
        <p className="kicker">404</p>
        <h1 className="mt-4 font-display text-display italic text-bone">Not in the archive.</h1>
        <Link to="/#work" className="mt-6 inline-flex items-center gap-2 text-bone link-underline w-fit">
          Back to work <ArrowUpRight className="h-4 w-4" />
        </Link>
      </main>
    );
  }

  // Only navigate between real (non-wip) projects.
  const real = projects.filter((p) => !p.wip);
  const idx = real.findIndex((p) => p.slug === project.slug);
  const prev = real[(idx - 1 + real.length) % real.length];
  const next = real[(idx + 1) % real.length];

  return (
    <main className="pb-24 pt-24 sm:pt-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <Reveal>
          <Link to="/#work" className="inline-flex items-center gap-2 text-sm text-mute transition hover:text-bone">
            <span className="rotate-180"><ArrowUpRight className="h-4 w-4" /></span>
            Work
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
            <span className="kicker text-teal">{project.kicker}</span>
            <span className="text-faint">·</span>
            <span className="text-mute">{project.year}</span>
            <span className="text-faint">·</span>
            <span className="text-mute">{project.runtime}</span>
          </div>
          <h1 className="mt-3 font-display text-display italic leading-[0.95] text-bone">{project.title}</h1>
          <p className="mt-6 max-w-2xl text-lead leading-relaxed text-mute">{project.logline}</p>
        </Reveal>

        {/* Video */}
        <Reveal delay={100}>
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group relative mt-12 block w-full overflow-hidden rounded-lg border border-line/50 bg-ink"
            aria-label={`Play ${project.title}`}
          >
            <div className="relative mx-auto aspect-[9/16] max-h-[80dvh] w-full max-w-[380px] sm:max-w-[420px]">
              <img
                src={project.poster}
                alt={`${project.title} — still`}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-void/20 transition group-hover:bg-void/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/25 bg-void/40 text-bone backdrop-blur-md transition duration-500 group-hover:scale-110 group-hover:border-teal group-hover:text-teal">
                  <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7" fill="currentColor">
                    <path d="M8 5.5v13a1 1 0 0 0 1.5.87l11-6.5a1 1 0 0 0 0-1.74l-11-6.5A1 1 0 0 0 8 5.5Z" />
                  </svg>
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-void/80 to-transparent p-5 text-center">
                <p className="text-sm text-bone/90">Tap to play the film — {project.runtime}</p>
              </div>
            </div>
          </button>
        </Reveal>

        {/* Details grid */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div className="space-y-12">
            <Reveal>
              <Field label="Objective" body={project.objective} />
            </Reveal>
            <Reveal>
              <Field label="Creative concept" body={project.concept} />
            </Reveal>
            <Reveal>
              <div>
                <h2 className="kicker">Behind the scenes</h2>
                <ol className="mt-6 space-y-6">
                  {project.process.map((step, i) => (
                    <li key={step.t} className="flex gap-5 border-t border-line/40 pt-5">
                      <span className="font-display text-2xl italic text-faint">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display text-xl italic text-bone">{step.t}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-mute">{step.d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>

          {/* Sidebar */}
          <Reveal delay={80}>
            <aside className="space-y-8 rounded-lg border border-line/50 bg-film/30 p-7 lg:sticky lg:top-28">
              <div>
                <h2 className="kicker">Role</h2>
                <p className="mt-3 text-bone">{project.role}</p>
              </div>
              <div className="border-t border-line/40 pt-6">
                <h2 className="kicker">Tools used</h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tools.map((t) => (
                    <li key={t} className="rounded-full border border-line px-3 py-1.5 text-sm text-mute">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-line/40 pt-6">
                <h2 className="kicker">Year</h2>
                <p className="mt-3 text-bone">{project.year}</p>
              </div>
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-bone px-6 py-3 text-sm font-medium text-void transition hover:bg-accent"
              >
                Watch the film
              </button>
            </aside>
          </Reveal>
        </div>

        {/* Prev / next */}
        <div className="mt-24 grid gap-4 border-t border-line/40 pt-10 sm:grid-cols-2">
          <NavCard project={prev} dir="prev" />
          <NavCard project={next} dir="next" />
        </div>
      </div>

      {playing && <VideoPlayer project={project} onClose={() => setPlaying(false)} />}
    </main>
  );
}

function Field({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <h2 className="kicker">{label}</h2>
      <p className="mt-4 text-lead leading-relaxed text-mute">{body}</p>
    </div>
  );
}

function NavCard({ project, dir }: { project: Project; dir: "prev" | "next" }) {
  return (
    <Link
      to={`/work/${project.slug}`}
      className={`group flex items-center gap-4 rounded-lg border border-line/50 p-6 transition hover:border-bone/25 ${
        dir === "next" ? "sm:flex-row-reverse sm:text-right" : ""
      }`}
    >
      <div className="relative h-16 w-12 shrink-0 overflow-hidden rounded-sm">
        <img src={project.poster} alt="" className="h-full w-full object-cover" />
      </div>
      <div>
        <p className="kicker">{dir === "next" ? "Next" : "Previous"}</p>
        <p className="mt-1 font-display text-xl italic text-bone">{project.title}</p>
      </div>
    </Link>
  );
}
