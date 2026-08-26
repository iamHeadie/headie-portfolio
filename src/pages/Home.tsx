import { useEffect } from "react";
import { featured, projects } from "../lib/projects";
import { site } from "../lib/site";
import { ProjectCard } from "../components/ProjectCard";
import { Reveal } from "../components/Reveal";

export function Home() {
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, []);

  return (
    <main>
      <section className="relative flex min-h-[100dvh] flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,#1a1a1e_0%,transparent_55%)]" />
        <div className="relative mx-auto w-full max-w-6xl">
          <Reveal><p className="mb-4 text-xs uppercase tracking-[0.28em] text-mute">{site.role}</p></Reveal>
          <Reveal delay={80}><h1 className="font-display text-display leading-[0.95] tracking-tight text-bone"><span className="italic">{site.thesis}</span></h1></Reveal>
          <Reveal delay={160}><p className="mt-8 max-w-xl text-lead text-mute">{site.bio}</p></Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#work" className="rounded-full bg-bone px-6 py-3 text-sm font-medium text-void transition hover:bg-accent">Selected work</a>
              <a href={site.socials.x} target="_blank" rel="noreferrer" className="rounded-full border border-line px-6 py-3 text-sm text-bone transition hover:border-bone/40">{site.handle}</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="work" className="scroll-mt-20 border-t border-line/40 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-mute">01 — Selected</p>
            <h2 className="mt-2 mb-12 font-display text-title italic text-bone">Work that holds</h2>
          </Reveal>
          <div className="grid gap-6">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 60}><ProjectCard project={p} large /></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-20 border-t border-line/40 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-mute">02 — Archive</p>
            <h2 className="mt-2 mb-12 font-display text-title italic text-bone">All projects</h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 4) * 50}><ProjectCard project={p} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-20 border-t border-line/40 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-mute">03 — About</p>
            <h2 className="mt-2 font-display text-title italic text-bone">Headie</h2>
            <p className="mt-2 text-sm text-mute">{site.location}</p>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-lead text-mute leading-relaxed">{site.bio}</p>
            <p className="mt-6 text-mute leading-relaxed">I ship short films that make science feel human — and music videos that feel like they were shot by a crew.</p>
          </Reveal>
        </div>
      </section>

      <section id="process" className="scroll-mt-20 border-t border-line/40 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-mute">04 — Process</p>
            <h2 className="mt-2 mb-12 font-display text-title italic text-bone">How a film lands</h2>
          </Reveal>
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Question", d: "One idea worth a minute of someone’s attention." },
              { n: "02", t: "Frames", d: "References, prompts, and continuity before volume." },
              { n: "03", t: "Cut", d: "Music, VO, and picture locked to the same pulse." },
              { n: "04", t: "Ship", d: "Export for the feed. Invite the argument." },
            ].map((step, i) => (
              <Reveal key={step.n} delay={i * 60}>
                <li className="border-t border-line/50 pt-5">
                  <p className="text-xs text-mute">{step.n}</p>
                  <h3 className="mt-2 font-display text-2xl italic text-bone">{step.t}</h3>
                  <p className="mt-2 text-sm text-mute">{step.d}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section id="tools" className="scroll-mt-20 border-t border-line/40 px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-mute">05 — Stack</p>
            <h2 className="mt-2 mb-10 font-display text-title italic text-bone">Tools</h2>
          </Reveal>
          <Reveal>
            <ul className="flex flex-wrap gap-3">
              {site.tools.map((t) => (
                <li key={t} className="rounded-full border border-line/70 px-4 py-2 text-sm text-mute">{t}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section id="socials" className="scroll-mt-20 border-t border-line/40 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-mute">06 — Socials</p>
            <h2 className="mt-2 mb-10 font-display text-title italic text-bone">Find the work live</h2>
          </Reveal>
          <div className="grid gap-5 lg:grid-cols-[1.2fr_1fr]">
            <Reveal>
              <a href={site.socials.x} target="_blank" rel="noreferrer" className="block rounded-sm border border-line/50 bg-film p-8 transition hover:border-bone/30">
                <p className="text-xs uppercase tracking-[0.2em] text-mute">X / Twitter</p>
                <p className="mt-3 font-display text-3xl italic text-bone">{site.handle}</p>
                <p className="mt-3 max-w-md text-sm text-mute">New films land here first.</p>
                <span className="mt-8 inline-flex rounded-full bg-bone px-5 py-2.5 text-sm font-medium text-void">Follow</span>
              </a>
            </Reveal>
            <Reveal delay={80}>
              <div className="flex h-full flex-col justify-between gap-6 rounded-sm border border-line/50 p-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-mute">Telegram</p>
                  <p className="mt-3 font-display text-2xl italic text-bone">Headiee</p>
                </div>
                <a href={site.socials.telegram} target="_blank" rel="noreferrer" className="text-sm text-bone underline-offset-4 hover:underline">Open Telegram →</a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-20 border-t border-line/40 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-mute">07 — Contact</p>
            <h2 className="mt-2 font-display text-title italic text-bone">Start a film</h2>
            <p className="mt-4 max-w-lg text-mute">Brands and creators — if you need a short that doesn’t look generated by default, reach out.</p>
            <a href={`mailto:${site.email}`} className="mt-8 inline-block font-display text-2xl italic text-bone underline-offset-4 hover:underline">{site.email}</a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
