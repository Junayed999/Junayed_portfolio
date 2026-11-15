import { Briefcase, Globe, Monitor, MousePointerClick, PenTool, ShoppingBag, type LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { services } from "@/data/site";

const icons: Record<string, LucideIcon> = {
  Globe,
  Monitor,
  MousePointerClick,
  Briefcase,
  ShoppingBag,
  PenTool,
};

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <Reveal>
        <SectionHeading
          eyebrow="Services · What I Do"
          title={
            <>
              What I can build{" "}
              <span className="font-serif font-normal italic text-navy-700">for you.</span>
            </>
          }
          description="Clear, focused services — each one delivered with the same care I put into my own products."
        />
      </Reveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const Icon = icons[service.icon] ?? Globe;
          return (
            <Reveal key={service.number} delay={(i % 3) * 110} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-[1.75rem] border border-line bg-cream-card p-7 shadow-[0_10px_30px_-18px_rgba(14,30,58,0.25)] transition-all duration-300 hover:-translate-y-1.5 hover:border-navy-900/25 hover:shadow-[0_28px_48px_-20px_rgba(14,30,58,0.4)]">
                <span
                  aria-hidden="true"
                  className="absolute -right-3 -top-5 font-display text-[5.2rem] font-bold leading-none text-navy-900/[0.05] transition-colors group-hover:text-accent/10"
                >
                  {service.number}
                </span>
                <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-light text-navy-800 transition-colors group-hover:bg-navy-900 group-hover:text-cream">
                  <Icon className="h-5.5 w-5.5" />
                </span>
                <h3 className="relative mt-5 font-display text-[1.2rem] font-bold leading-snug text-navy-900">
                  {service.title}
                </h3>
                <p className="relative mt-2.5 text-[0.93rem] leading-relaxed text-muted">{service.description}</p>
                <p className="relative mt-5 text-[0.78rem] font-bold uppercase tracking-[0.2em] text-accent/80">
                  Service {service.number}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
