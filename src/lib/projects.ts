export type Project = {
  slug: string;
  title: string;
  year: string;
  featured: boolean;
  logline: string;
  objective: string;
  concept: string;
  role: string;
  tools: string[];
  process: string[];
  poster: string;
  video: string;
  aspect: "video" | "portrait";
};

export const projects: Project[] = [
  {
    slug: "bandits-heist",
    title: "Bandits Heist",
    year: "2026",
    featured: true,
    logline: "A cinematic music-video heist scored to Bella Ciao — built for @playbandits.",
    objective: "Deliver a high-energy AI music video that feels like a crew film, not a template ad.",
    concept: "Mask, money, and motion. Short set-pieces of a heist crew, cut to La Casa de Papel’s anthem.",
    role: "Director · Prompt design · Edit",
    tools: ["invideo", "Minimax", "Edit suite"],
    process: ["Locked tone and references", "Generated key scenes", "Cut for music hits", "Final grade and export"],
    poster: "/images/bandits-heist.jpg",
    video: "/videos/bandits-heist.mp4",
    aspect: "video",
  },
  {
    slug: "does-time-exist",
    title: "Does Time Exist?",
    year: "2026",
    featured: true,
    logline: "A vertical science film that asks whether time is fundamental — or something we invent.",
    objective: "Make a dense physics idea feel clear and cinematic in under a minute.",
    concept: "Clock faces, light cones, and quiet narration. Visual metaphors over jargon.",
    role: "Writer · Director · Editor",
    tools: ["Hyperframes", "Claude", "invideo"],
    process: ["Scripted the core question", "Generated vertical sequences", "Tightened VO", "Exported 1080×1920"],
    poster: "/images/does-time-exist.jpg",
    video: "/videos/does-time-exist.mp4",
    aspect: "portrait",
  },
  {
    slug: "origin-of-gravity",
    title: "Origin of Gravity",
    year: "2026",
    featured: true,
    logline: "Gravity isn’t a force — a 60-second branded explainer for physics noobs.",
    objective: "Translate a frontier idea into a shareable short without losing accuracy.",
    concept: "From Newton’s apple to entropy. Simple diagrams, calm pacing.",
    role: "Director · Script · Brand packaging",
    tools: ["invideo", "Claude"],
    process: ["Outlined the claim", "Designed branded open/close", "Edited for clarity", "Published"],
    poster: "/images/origin-of-gravity.jpg",
    video: "/videos/origin-of-gravity.mp4",
    aspect: "video",
  },
  {
    slug: "quantum-double-slit",
    title: "Quantum Double Slit",
    year: "2026",
    featured: false,
    logline: "The experiment that broke classical intuition — in portrait format.",
    objective: "Show interference and observation without burying the viewer in math.",
    concept: "Slits, waves, dots on a screen. Minimal UI, maximum weirdness.",
    role: "Director · Edit",
    tools: ["invideo", "Hyperframes"],
    process: ["Storyboarded beats", "Generated vertical plates", "Cut for comprehension"],
    poster: "/images/quantum-double-slit.jpg",
    video: "/videos/quantum-double-slit.mp4",
    aspect: "portrait",
  },
  {
    slug: "electromagnetism",
    title: "Electromagnetism",
    year: "2026",
    featured: false,
    logline: "Motors, magnets, and fields — a vertical primer.",
    objective: "Make field lines and motors feel physical on a phone screen.",
    concept: "Copper, coils, and motion.",
    role: "Director",
    tools: ["invideo"],
    process: ["Reference real demos", "Generate motion loops", "Title and export"],
    poster: "/images/electromagnetism.jpg",
    video: "/videos/electromagnetism.mp4",
    aspect: "portrait",
  },
  {
    slug: "higgs-field",
    title: "Higgs Field",
    year: "2026",
    featured: false,
    logline: "A 2D explainer pass on the field that gives particles mass.",
    objective: "Keep the Higgs approachable without oversimplifying.",
    concept: "Field as medium. Particles as swimmers.",
    role: "Director · Motion",
    tools: ["invideo"],
    process: ["Script beats", "2D motion pass", "VO lock"],
    poster: "/images/higgs-field.jpg",
    video: "/videos/higgs-field.mp4",
    aspect: "video",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const featured = projects.filter((p) => p.featured);
