import { ArrowUpRight, Briefcase, CalendarRange, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { jnx } from "@/data/site";

export default function Experience() {
  return (
    <section id="experience" className="border-y border-line/70 bg-cream-deep/50">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Professional Experience"
            title={
              <>
                Four years of{" "}
                <span className="font-serif font-normal italic text-navy-700">building.</span>
              </>
            }
            description="No padded résumé — just the real work: years of shipping websites and leading a digital initiative."
          />
        </Reveal>

        <div className="relative mx-auto mt-14 max-w-3xl">
          {/* Timeline spine */}
          <div
            aria-hidden="true"
            className="absolute left-[1.35rem] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-line to-transparent sm:left-1/2"
          />

          <Reveal>
            <article className="relative flex gap-5 pb-2 sm:gap-0">
              <span
                aria-hidden="true"
                className="relative z-10 mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-900 text-cream shadow-[0_10px_24px_-8px_rgba(14,30,58,0.6)] sm:absolute sm:left-1/2 sm:-translate-x-1/2"
              >
                <Briefcase className="h-5 w-5" />
              </span>
              <div className="flex-1 rounded-[1.75rem] border border-line bg-cream-card p-7 shadow-[0_10px_30px_-18px_rgba(14,30,58,0.25)] sm:ml-0 sm:w-[calc(50%-2.5rem)] sm:mr-auto">
                <p className="flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-accent">
                  <CalendarRange className="h-4 w-4" />
                  4 Years of Experience
                </p>
                <h3 className="mt-3 font-display text-[1.4rem] font-bold leading-tight text-navy-900">
                  Co-Founder — {jnx.name}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                  Co-leading a digital development initiative focused on building modern websites and
                  digital solutions.
                </p>
                <p className="mt-4 flex items-center gap-2 text-[0.85rem] font-medium text-muted">
                  <MapPin className="h-4 w-4 text-accent" />
                  Digital Development · Web Solutions
                </p>
                <a
                  href={jnx.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-5 inline-flex items-center gap-1.5 text-[0.92rem] font-semibold text-navy-900 underline decoration-accent/40 decoration-2 underline-offset-4 transition-colors hover:text-accent"
                >
                  Visit {jnx.name} Website
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </article>
          </Reveal>

          <Reveal delay={140}>
            <article className="relative flex gap-5 pt-6 sm:gap-0">
              <span
                aria-hidden="true"
                className="relative z-10 mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-cream-card text-navy-800 sm:absolute sm:left-1/2 sm:-translate-x-1/2"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-accent" />
              </span>
              <div className="flex-1 rounded-[1.75rem] border border-line bg-cream-card/70 p-7 sm:ml-auto sm:w-[calc(50%-2.5rem)]">
                <p className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-accent">
                  Independent Developer
                </p>
                <h3 className="mt-3 font-display text-[1.25rem] font-bold leading-tight text-navy-900">
                  Personal Projects & Client Work
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                  Designing and developing websites, landing pages and web products — from the first
                  sketch to a live, working site.
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
