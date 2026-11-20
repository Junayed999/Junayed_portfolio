import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/site";

function ProjectCard({
  project,
  index,
  duplicate,
}: {
  project: Project;
  index: number;
  duplicate: boolean;
}) {
  return (
    <article aria-hidden={duplicate || undefined} className="w-[76vw] max-w-[440px] shrink-0 sm:w-[440px]">
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={duplicate ? -1 : undefined}
        aria-label={`Open ${project.name} live website`}
        className="block rounded-[20px] bg-card p-2.5 transition-transform duration-300 hover:-translate-y-1"
      >
        <span className="relative block aspect-[16/10] overflow-hidden rounded-[14px] bg-white">
          <Image
            src={project.image}
            alt={`${project.name} — live website screenshot`}
            fill
            sizes="440px"
            loading={index === 0 && !duplicate ? "eager" : "lazy"}
            className="object-cover object-top"
          />
        </span>
      </a>
      <div className="px-2 pt-4">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted">
          Project {String(index + 1).padStart(2, "0")} — {project.category}
        </p>
        <h3 className="mt-1.5 text-[1.3rem] font-bold leading-tight text-ink">{project.name}</h3>
        <p className="mt-1.5 text-[0.92rem] leading-relaxed text-muted">{project.description}</p>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={duplicate ? -1 : undefined}
          className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2 text-[0.85rem] font-semibold text-ink transition-colors hover:border-ink"
        >
          View Project
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

/**
 * Projects — the reference's card design, with a continuous right-to-left
 * seamless loop. The track holds two identical copies of the set; it
 * translates exactly -50%, so the wrap lands on the second copy with no
 * visible reset, no reversal and no pause. Hover pauses it.
 */
export default function Projects() {
  return (
    <section id="projects" aria-label="Featured projects" className="overflow-hidden pb-16">
      <div className="projects-slider overflow-hidden">
        <div className="projects-track flex w-max">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex gap-5 pr-5">
              {projects.map((project, i) => (
                <ProjectCard key={`${project.id}-${copy}`} project={project} index={i} duplicate={copy === 1} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
