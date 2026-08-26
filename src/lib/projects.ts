export type Project = {
  slug: string;
  title: string;
  kicker: string;
  year: string;
  runtime: string;
  featured: boolean;
  wip?: boolean;
  logline: string;
  objective: string;
  concept: string;
  role: string;
  tools: string[];
  process: { t: string; d: string }[];
  poster: string;
  video: string;
  aspect: "video" | "portrait";
};

export const projects: Project[] = [
  {
    slug: "double-slit",
    title: "The Double-Slit",
    kicker: "Quantum Mechanics",
    year: "2026",
    runtime: "1:07",
    featured: true,
    logline:
      "A minute inside the experiment that broke classical certainty — and why the simple act of watching changes the answer.",
    objective:
      "Make quantum measurement legible to a scrolling feed. The brief was a single, honest goal: a viewer with no physics background should finish the film understanding why observation collapses possibility — and want to argue about it.",
    concept:
      "Paper-craft physics. The set is a single sheet of warm stock; electrons are dots, slits are cuts, and the observer becomes a character — a lone teal eye that turns the wave into a particle the moment it looks. Every idea earns exactly one frame, so nothing crowds the mystery.",
    role: "Director · Writer · Motion & Edit",
    tools: ["invideo Agent", "Minimax", "After Effects", "CapCut"],
    process: [
      { t: "Premise", d: "Cut the concept to one testable sentence: watching changes the outcome." },
      { t: "Board", d: "Storyboarded on paper first — the aesthetic came from the medium, not a filter." },
      { t: "Generate", d: "Built shot continuity in invideo, held the palette flat with a locked style key." },
      { t: "Cut", d: "Scored the reveal so the pattern collapses on the beat the eye opens." },
    ],
    poster: "/images/Quantum-Double-Slit.jpg",
    video: "/videos/Quantum-Double-Slit_1080x1920.mp4",
    aspect: "portrait",
  },
  {
    slug: "electromagnetism",
    title: "Fields in Motion",
    kicker: "Electromagnetism",
    year: "2026",
    runtime: "1:18",
    featured: true,
    logline:
      "Magnets, motors and the invisible field between them — the hidden handshake that turns electricity into movement.",
    objective:
      "Take four ideas that usually need a textbook — field, force, current and the motor effect — and connect them into one continuous visual argument the viewer can feel in under ninety seconds.",
    concept:
      "The invisible, made physical. A horseshoe magnet breathes a field into the paper; current and field meet and the frame literally pushes. North and South are cast as two characters with weight and intent, so an abstract law reads as a relationship rather than an equation.",
    role: "Director · Writer · Motion & Edit",
    tools: ["invideo Agent", "Minimax", "After Effects", "CapCut"],
    process: [
      { t: "Premise", d: "One through-line: every motor is just current arguing with a field." },
      { t: "Board", d: "Mapped the four beats so each visual hands off cleanly to the next." },
      { t: "Generate", d: "Kept iconography consistent across shots — same magnet, same weight, every cut." },
      { t: "Cut", d: "Timed the 'push' to a low hit so the force lands physically, not just visually." },
    ],
    poster: "/images/Electromagnetism-Motors-Magnets.jpg",
    video: "/videos/Electromagnetism-Motors-Magnets_1080x1920.mp4",
    aspect: "portrait",
  },
  {
    slug: "in-production",
    title: "Untitled — In Production",
    kicker: "Next Film",
    year: "2026",
    runtime: "—",
    featured: false,
    wip: true,
    logline: "The next short in the science series is in the cut. Follow along on X to see it first.",
    objective: "",
    concept: "",
    role: "Director",
    tools: ["invideo Agent", "Minimax"],
    process: [],
    poster: "",
    video: "",
    aspect: "portrait",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const featured = projects.filter((p) => p.featured);
export const archive = projects;
