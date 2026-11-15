import { Layout, Server, Wrench, type LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "@/data/site";

const icons: Record<string, LucideIcon> = {
  Layout,
  Server,
  Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="border-y border-line/70 bg-cream-deep/50">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Skills & Expertise"
            title={
              <>
                Tools I use to build{" "}
                <span className="font-serif font-normal italic text-navy-700">real products.</span>
              </>
            }
            description="A focused stack — the technologies I actually work with every day. No inflated scores, just honest, practical expertise."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.icon] ?? Wrench;
            return (
              <Reveal key={group.title} delay={i * 110}>
                <article className="group flex h-full flex-col rounded-[1.75rem] border border-line bg-cream-card p-7 shadow-[0_10px_30px_-18px_rgba(14,30,58,0.25)] transition-all duration-300 hover:-translate-y-1.5 hover:border-navy-900/25 hover:shadow-[0_28px_48px_-20px_rgba(14,30,58,0.4)]">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900 text-cream transition-colors group-hover:bg-accent">
                    <Icon className="h-5.5 w-5.5" />
                  </span>
                  <h3 className="mt-5 font-display text-[1.25rem] font-bold text-navy-900">{group.title}</h3>
                  <p className="mt-2 text-[0.92rem] leading-relaxed text-muted">{group.description}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-line bg-cream px-3.5 py-1.5 text-[0.85rem] font-medium text-navy-800 transition-colors hover:border-accent/50 hover:bg-accent-light/50"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
