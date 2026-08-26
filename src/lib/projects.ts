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
    slug: "Quantum-Double-Slit_1080x1920",
    title: "Quantum-Double-Slit_1080x1920",
    year: "2026",
    featured: true,
    logline: "",
    objective: "",
    concept: "",
    role: "Director",
    tools: ["invideo"],
    process: [],
    poster: "",
    video: "/videos/Quantum-Double-Slit_1080x1920.mp4",
    aspect: "portrait",
  },
  {
    slug: "Electromagnetism-Motors-Magnets_1080x1920",
    title: "Electromagnetism-Motors-Magnets_1080x1920",
    year: "2026",
    featured: true,
    logline: "",
    objective: "",
    concept: "",
    role: "Director",
    tools: ["invideo"],
    process: [],
    poster: "",
    video: "/videos/Electromagnetism-Motors-Magnets_1080x1920.mp4",
    aspect: "portrait",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const featured = projects.filter((p) => p.featured);
