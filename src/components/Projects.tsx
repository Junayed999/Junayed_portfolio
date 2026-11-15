import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects, socials } from "@/data/site";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <Reveal>
        <SectionHeading
          eyebrow="Featured Projects"
          title={
            <>
              Work I&apos;m <span className="font-serif font-normal italic text-navy-700">proud of.</span>
            </>
          }
          description="A few things I've built and shipped — each one a real, live product you can open and try."
        />
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 120} className="h-full">
            <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line bg-cream-card shadow-[0_10px_30px_-18px_rgba(14,30,58,0.25)] transition-all duration-300 hover:-translate-y-2 hover:border-navy-900/25 hover:shadow-[0_32px_56px_-20px_rgba(14,30,58,0.45)]">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.name} live website`}
                className="relative block overflow-hidden"
              >
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={project.image}
                    alt={`${project.name} — live website screenshot`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    loading={i === 0 ? "eager" : "lazy"}
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <span className="absolute left-4 top-4 rounded-full bg-navy-950/80 px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                  {project.category}
                </span>
                <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 text-cream opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </a>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-[0.8rem] font-bold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-[1.35rem] font-bold text-navy-900">{project.name}</h3>
                </div>
                <p className="mt-3 flex-1 text-[0.94rem] leading-relaxed text-muted">{project.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-accent-light/60 px-3 py-1 text-[0.78rem] font-semibold text-navy-800"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-5 py-3 text-[0.9rem] font-semibold text-cream transition-all hover:bg-navy-800 hover:shadow-[0_14px_28px_-12px_rgba(14,30,58,0.6)]"
                >
                  Visit Live Website
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={150} className="mt-10 flex justify-center">
        <a
          href={socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2.5 rounded-full border border-navy-900/20 bg-cream-card px-6 py-3.5 text-[0.95rem] font-semibold text-navy-900 transition-all hover:-translate-y-0.5 hover:border-navy-900/40 hover:shadow-[0_14px_28px_-14px_rgba(14,30,58,0.4)]"
        >
          <GithubIcon className="h-5 w-5" />
          View All Projects on GitHub
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </Reveal>
    </section>
  );
}
