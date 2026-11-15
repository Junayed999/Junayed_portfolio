import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { workflow } from "@/data/site";

export default function Workflow() {
  return (
    <section aria-label="My workflow" className="border-y border-line/70 bg-cream-deep/50">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="My Workflow"
            title={
              <>
                From idea to a{" "}
                <span className="font-serif font-normal italic text-navy-700">live website.</span>
              </>
            }
            description="A simple, honest process — so you always know what happens next."
          />
        </Reveal>

        <div className="relative mt-16">
          {/* Connector line (desktop) */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-navy-900/25 to-transparent lg:block"
          />
          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {workflow.map((stage, i) => (
              <li key={stage.step} className="relative">
                <Reveal delay={i * 120}>
                  <div className="flex flex-col items-start">
                    <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-cream-deep bg-navy-900 font-display text-[1rem] font-bold text-cream shadow-[0_12px_26px_-10px_rgba(14,30,58,0.6)]">
                      {stage.step}
                    </span>
                    <h3 className="mt-5 font-display text-[1.2rem] font-bold text-navy-900">{stage.title}</h3>
                    <p className="mt-2 max-w-xs text-[0.93rem] leading-relaxed text-muted">{stage.description}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
