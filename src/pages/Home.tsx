import { useEffect, useRef, useState } from "react";
import { featured, archive, type Project } from "../lib/projects";
import { site } from "../lib/site";
import { ProjectCard } from "../components/ProjectCard";
import { Reveal } from "../components/Reveal";
import { VideoPlayer } from "../components/VideoPlayer";
import { XIcon, TelegramIcon, GithubIcon, ArrowUpRight } from "../components/icons";

const marquee = [
  "Explainers",
  "Music videos",
  "Short films",
  "AI direction",
  "Motion",
  "Visual storytelling",
];

function SectionHead({ index, label, title }: { index: string; label: string; title: string }) {
  return (
    <Reveal>
      <div className="flex items-baseline gap-4">
        <span className="text-xs tabular-nums text-faint">{index}</span>
        <span className="kicker">{label}</span>
      </div>
      <h2 className="mt-3 font-display text-title italic text-bone">{title}</h2>
    </Reveal>
  );
}

export function Home() {
  const [playing, setPlaying] = useState<Project | null>(null);
  const heroVideo = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, []);

  useEffect(() => {
    heroVideo.current?.play().catch(() => {});
  }, []);

  const heroProject = featured[0];

  return (
    <main>
      {/* ============================= HERO ============================= */}
      <section className="relative flex min-h-[100dvh] items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8">
        <div className="pointer-events-none absolute inset-0">
          <div className="float-slow absolute -left-1/4 top-0 h-[60vh] w-[60vh] rounded-full bg-[radial-gradient(circle,rgba(42,168,157,0.10),transparent_70%)]" />
          <div className="absolute right-0 top-1/3 h-[50vh] w-[50vh] rounded-full bg-[radial-gradient(circle,rgba(193,74,60,0.08),transparent_70%)]" />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Reveal>
              <p className="kicker flex items-center gap-3">
                <span className="h-px w-8 bg-mute/60" />
                {site.role}
              </p>
            </Reveal>
            <h1 className="mt-6 font-display text-hero font-medium leading-[0.92] tracking-tight text-bone">
              {site.hero.map((line, i) => (
                <Reveal key={line} delay={80 + i * 90}>
                  <span className="block italic">{line}</span>
                </Reveal>
              ))}
            </h1>
            <Reveal delay={360}>
              <p className="mt-8 max-w-xl text-lead leading-relaxed text-mute">{site.bio}</p>
            </Reveal>
            <Reveal delay={440}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 rounded-full bg-bone px-6 py-3 text-sm font-medium text-void transition hover:bg-accent"
                >
                  Watch selected work
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href={site.socials.x}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm text-bone transition hover:border-bone/40 hover:bg-white/5"
                >
                  <XIcon className="h-3.5 w-3.5" />
                  {site.handle}
                </a>
              </div>
            </Reveal>
          </div>

          {/* Ambient reel panel */}
          <Reveal delay={300} className="mx-auto w-full max-w-xs sm:max-w-sm lg:mx-0 lg:ml-auto">
            <button
              type="button"
              onClick={() => setPlaying(heroProject)}
              className="group relative block w-full overflow-hidden rounded-lg border border-line/60 bg-ink shadow-2xl"
              aria-label={`Play ${heroProject.title}`}
            >
              <div className="relative aspect-[9/16]">
                <video
                  ref={heroVideo}
                  className="absolute inset-0 h-full w-full object-cover"
                  muted
                  loop
                  playsInline
                  autoPlay
                  preload="metadata"
                  poster={heroProject.poster}
                >
                  <source src={heroProject.video} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-void/20" />
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-void/60 px-3 py-1.5 text-xs text-bone backdrop-blur-md">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal" />
                  Now playing
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/25 bg-void/40 text-bone backdrop-blur-md transition duration-500 group-hover:scale-110 group-hover:border-teal group-hover:text-teal">
                    <svg viewBox="0 0 24 24" className="ml-1 h-5 w-5" fill="currentColor">
                      <path d="M8 5.5v13a1 1 0 0 0 1.5.87l11-6.5a1 1 0 0 0 0-1.74l-11-6.5A1 1 0 0 0 8 5.5Z" />
                    </svg>
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 text-left">
                  <p className="kicker text-teal">{heroProject.kicker}</p>
                  <p className="font-display text-2xl italic text-bone">{heroProject.title}</p>
                </div>
              </div>
            </button>
          </Reveal>
        </div>

        <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-faint sm:flex">
          <span className="text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
          <span className="h-8 w-px bg-gradient-to-b from-mute/60 to-transparent" />
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee-track overflow-hidden border-y border-line/40 py-5">
        <div className="marquee">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i} className="flex items-center whitespace-nowrap font-display text-2xl italic text-mute/50 sm:text-3xl">
              <span className="px-8">{m}</span>
              <span className="text-teal/50">✳</span>
            </span>
          ))}
        </div>
      </div>

      {/* ============================= SELECTED WORK ============================= */}
      <section id="work" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHead index="01" label="Selected" title="Work that holds" />
            <Reveal>
              <p className="max-w-xs text-sm text-mute">
                Short-form films where a hard idea suddenly clicks. Hover to preview — click to open the full project.
              </p>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <ProjectCard project={p} large index={i} onPlay={setPlaying} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= ALL PROJECTS ============================= */}
      <section id="projects" className="scroll-mt-24 border-t border-line/40 px-5 py-20 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHead index="02" label="Archive" title="All projects" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {archive.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 70}>
                <ProjectCard project={p} index={p.wip ? undefined : i} onPlay={p.wip ? undefined : setPlaying} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= ABOUT ============================= */}
      <section id="about" className="scroll-mt-24 border-t border-line/40 px-5 py-20 sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHead index="03" label="About" title="Headie" />
            <Reveal delay={80}>
              <p className="mt-4 text-sm text-mute">{site.location}</p>
            </Reveal>
            <Reveal delay={140}>
              <dl className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-line/50 bg-line/40 sm:grid-cols-3 lg:grid-cols-1">
                {site.stats.map((s) => (
                  <div key={s.k} className="bg-void p-5">
                    <dt className="kicker">{s.k}</dt>
                    <dd className="mt-1 font-display text-xl italic text-bone">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <p className="font-display text-3xl italic leading-snug text-bone sm:text-4xl">
              {site.thesis}
            </p>
            <p className="mt-8 text-lead leading-relaxed text-mute">{site.about}</p>
            <p className="mt-6 leading-relaxed text-mute">
              From narratives to music videos to explainers, I obsess over the details that make AI footage read like it
              was crewed, not conjured: palette discipline, continuity, and a cut that breathes.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============================= PROCESS ============================= */}
      <section id="process" className="scroll-mt-24 border-t border-line/40 px-5 py-20 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHead index="04" label="Process" title="How a film lands" />
          <ol className="mt-14 grid gap-px overflow-hidden rounded-md border border-line/50 bg-line/40 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Question", d: "One idea worth a minute of someone's attention — cut to a single testable sentence." },
              { n: "02", t: "Frames", d: "References, prompts and continuity locked before volume. The look is decided on paper." },
              { n: "03", t: "Cut", d: "Music, VO and picture locked to the same pulse so the reveal lands on the beat." },
              { n: "04", t: "Ship", d: "Export for the feed, in the aspect it will actually be watched. Invite the argument." },
            ].map((step, i) => (
              <Reveal key={step.n} delay={i * 70}>
                <li className="group h-full bg-void p-7 transition-colors duration-500 hover:bg-film">
                  <p className="text-xs tabular-nums text-teal">{step.n}</p>
                  <h3 className="mt-4 font-display text-2xl italic text-bone">{step.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mute">{step.d}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ============================= TOOLS ============================= */}
      <section id="tools" className="scroll-mt-24 border-t border-line/40 px-5 py-20 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHead index="05" label="Stack" title="Tools & technology" />
            <Reveal>
              <p className="max-w-xs text-sm text-mute">The kit behind the films — generation, motion, and the polish that ties it together.</p>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {site.tools.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 60}>
                <div className="group flex items-center justify-between rounded-md border border-line/50 bg-film/40 px-6 py-5 transition-colors duration-500 hover:border-bone/25">
                  <div>
                    <p className="font-display text-2xl italic text-bone">{t.name}</p>
                    <p className="mt-1 text-sm text-mute">{t.role}</p>
                  </div>
                  <span className="text-teal opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= SOCIALS ============================= */}
      <section id="socials" className="scroll-mt-24 border-t border-line/40 px-5 py-20 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHead index="06" label="Socials" title="Where the work lives" />
          <div className="mt-12 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
            {/* Prominent X panel */}
            <Reveal>
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-line/50 bg-gradient-to-br from-film to-void p-8 sm:p-10">
                <div className="pointer-events-none absolute -right-10 -top-10 opacity-[0.04]">
                  <XIcon className="h-64 w-64" />
                </div>
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-bone text-void">
                      <XIcon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-display text-2xl italic text-bone">{site.handle}</p>
                      <p className="text-xs text-mute">X / Twitter · Primary channel</p>
                    </div>
                  </div>
                  <p className="mt-6 max-w-md text-lead leading-relaxed text-mute">
                    New films land here first — plus the breakdowns, experiments and behind-the-scenes on how each one
                    was made.
                  </p>
                </div>
                <div className="relative mt-8">
                  {/* Space reserved for a live post feed when an X API key is configured */}
                  <div className="grid gap-2 sm:grid-cols-2">
                    {[hoverPost(featured[0]), hoverPost(featured[1])].map((p, i) => (
                      <a
                        key={i}
                        href={site.socials.x}
                        target="_blank"
                        rel="noreferrer"
                        className="group rounded-md border border-line/50 bg-void/40 p-4 transition hover:border-bone/25"
                      >
                        <p className="text-sm leading-relaxed text-bone/90">{p}</p>
                        <span className="mt-2 inline-flex items-center gap-1 text-xs text-mute group-hover:text-teal">
                          View on X <ArrowUpRight className="h-3 w-3" />
                        </span>
                      </a>
                    ))}
                  </div>
                  <a
                    href={site.socials.x}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-bone px-6 py-3 text-sm font-medium text-void transition hover:bg-accent"
                  >
                    <XIcon className="h-4 w-4" />
                    Follow on X
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Secondary socials */}
            <div className="grid gap-5">
              <Reveal delay={80}>
                <a
                  href={site.socials.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-lg border border-line/50 p-7 transition hover:border-bone/25"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-bone">
                      <TelegramIcon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-display text-xl italic text-bone">Telegram</p>
                      <p className="text-xs text-mute">Headiee</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-mute transition group-hover:text-teal" />
                </a>
              </Reveal>
              <Reveal delay={140}>
                <a
                  href={site.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-lg border border-line/50 p-7 transition hover:border-bone/25"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-bone">
                      <GithubIcon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-display text-xl italic text-bone">GitHub</p>
                      <p className="text-xs text-mute">iamHeadie</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-mute transition group-hover:text-teal" />
                </a>
              </Reveal>
              <Reveal delay={200}>
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-center justify-between rounded-lg border border-line/50 p-7 transition hover:border-bone/25"
                >
                  <div>
                    <p className="font-display text-xl italic text-bone">Email</p>
                    <p className="text-xs text-mute">{site.email}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-mute transition group-hover:text-teal" />
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= CONTACT ============================= */}
      <section id="contact" className="scroll-mt-24 border-t border-line/40 px-5 py-24 sm:px-8 sm:py-40">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="kicker">07 — Contact</span>
            <h2 className="mt-6 max-w-4xl font-display text-display italic leading-[0.95] text-bone">
              Have an idea that deserves to be seen?
            </h2>
            <p className="mt-8 max-w-lg text-lead text-mute">
              Brands and creators — if you need a short that doesn't look generated by default, let's make it.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${site.email}`}
                className="group inline-flex items-center gap-2 rounded-full bg-bone px-7 py-3.5 text-sm font-medium text-void transition hover:bg-accent"
              >
                {site.email}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={site.socials.x}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm text-bone transition hover:border-bone/40 hover:bg-white/5"
              >
                <XIcon className="h-3.5 w-3.5" />
                DM on X
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {playing && <VideoPlayer project={playing} onClose={() => setPlaying(null)} />}
    </main>
  );
}

// Placeholder post copy shown until a live X feed is wired in.
function hoverPost(p?: Project) {
  if (!p) return "New film dropping soon.";
  return `“${p.title}” — ${p.kicker.toLowerCase()} in ${p.runtime}. Full breakdown in the thread ↓`;
}
