import { Globe, Monitor, PenTool, ShoppingBag, type LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import { services } from "@/data/site";

const icons: Record<string, LucideIcon> = {
  Globe,
  Monitor,
  ShoppingBag,
  PenTool,
};

export default function Services() {
  return (
    <section id="services" className="border-t border-line px-6 py-14 sm:px-10">
      <Reveal>
        <h2 className="text-center text-[1.4rem] font-bold tracking-tight text-ink">How Can I Help?</h2>
        <p className="mx-auto mt-2 max-w-sm text-center text-[0.92rem] leading-relaxed text-muted">
          Clear, focused services — each one delivered with the same care I put into my own products.
        </p>
      </Reveal>
      <div className="mt-9 grid grid-cols-2 gap-x-4 gap-y-8">
        {services.map((service, i) => {
          const Icon = icons[service.icon] ?? Globe;
          return (
            <Reveal key={service.title} delay={(i % 2) * 100} className="h-full">
              <article className="flex h-full flex-col items-center text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-card text-ink">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-3 text-[0.98rem] font-bold leading-snug text-ink">{service.title}</h3>
                <p className="mt-1.5 text-[0.86rem] leading-relaxed text-muted">{service.description}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
