import { Link } from "react-router-dom";
import type { Project } from "../lib/projects";
import { cn } from "../lib/utils";

export function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <Link to={`/work/${project.slug}`} className={cn("group relative block overflow-hidden rounded-sm border border-line/40 bg-film transition duration-500 hover:border-bone/25", large ? "col-span-full" : "")}>
      <div className={cn("relative overflow-hidden bg-ink", project.aspect === "portrait" ? "aspect-[3/4] sm:aspect-video" : "aspect-video")}>
        <div className="absolute inset-0 bg-gradient-to-br from-film via-ink to-void" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-5xl italic text-mute/30 transition duration-500 group-hover:scale-105 group-hover:text-mute/50 sm:text-7xl">{project.title.slice(0, 1)}</span>
        </div>
        <img src={project.poster} alt="" className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:opacity-90" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent opacity-80" />
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
          <p className="mb-1 text-xs uppercase tracking-[0.2em] text-mute">{project.year}</p>
          <h3 className="font-display text-2xl italic text-bone sm:text-3xl">{project.title}</h3>
          <p className="mt-2 max-w-xl text-sm text-mute line-clamp-2">{project.logline}</p>
        </div>
      </div>
    </Link>
  );
}
