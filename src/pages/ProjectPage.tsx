import { Link, useParams } from "react-router-dom";
import { getProject, projects } from "../lib/projects";
import { Reveal } from "../components/Reveal";

export function ProjectPage() {
  const { slug } = useParams();
  const project = slug ? getProject(slug) : undefined;

  if (!project) {
    return (
      <main className="mx-auto max-w-6xl px-5 py-32 sm:px-8">
        <p className="text-mute">Project not found.</p>
        <Link to="/#work" className="mt-4 inline-block text-bone underline">Back to work</Link>
      </main>
    );
  }

  const idx = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  return (
    <main className="pb-24 pt-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <Link to="/#work" className="text-sm text-mute hover:text-bone">← Work</Link>
          <p className="mt-8 text-xs uppercase tracking-[0.28em] text-mute">{project.year}</p>
          <h1 className="mt-2 font-display text-display italic leading-[0.95] text-bone">{project.title}</h1>
          <p className="mt-6 max-w-2xl text-lead text-mute">{project.logline}</p>
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-12 overflow-hidden rounded-sm border border-line/40 bg-ink">
            <div className={project.aspect === "portrait" ? "mx-auto aspect-[9/16] max-w-md bg-void sm:max-w-lg" : "aspect-video bg-void"}>
              <video className="h-full w-full object-contain" controls playsInline poster={project.poster} preload="metadata">
                <source src={project.video} type="video/mp4" />
              </video>
            </div>
            <p className="border-t border-line/40 px-4 py-3 text-xs text-mute">Add your file at <code className="text-bone/80">{project.video}</code></p>
          </div>
        </Reveal>
        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-xs uppercase tracking-[0.2em] text-mute">Objective</h2>
            <p className="mt-3 text-mute leading-relaxed">{project.objective}</p>
            <h2 className="mt-10 text-xs uppercase tracking-[0.2em] text-mute">Concept</h2>
            <p className="mt-3 text-mute leading-relaxed">{project.concept}</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="text-xs uppercase tracking-[0.2em] text-mute">Role</h2>
            <p className="mt-3 text-bone">{project.role}</p>
            <h2 className="mt-10 text-xs uppercase tracking-[0.2em] text-mute">Tools</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.tools.map((t) => (
                <li key={t} className="rounded-full border border-line px-3 py-1 text-sm text-mute">{t}</li>
              ))}
            </ul>
            <h2 className="mt-10 text-xs uppercase tracking-[0.2em] text-mute">Process</h2>
            <ol className="mt-3 space-y-3">
              {project.process.map((step, i) => (
                <li key={step} className="flex gap-3 text-sm text-mute">
                  <span className="text-bone/50">{String(i + 1).padStart(2, "0")}</span>
                  {step}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
        <div className="mt-20 flex items-center justify-between border-t border-line/40 pt-8 text-sm">
          <Link to={`/work/${prev.slug}`} className="text-mute hover:text-bone">← {prev.title}</Link>
          <Link to={`/work/${next.slug}`} className="text-mute hover:text-bone">{next.title} →</Link>
        </div>
      </div>
    </main>
  );
}
