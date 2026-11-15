import { ArrowUpRight, Check } from "lucide-react";
import Reveal from "./Reveal";
import { jnx } from "@/data/site";

const points = [
  "Modern websites & digital solutions",
  "Clean design, premium quality",
  "Products that actually work",
];

export default function JnxSection() {
  return (
    <section aria-label="About JNX" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-navy-900 px-7 py-14 shadow-[0_40px_90px_-32px_rgba(8,18,38,0.8)] sm:px-12 lg:px-16">
          {/* Ambient lighting */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-accent/30 blur-[100px]" />
            <div className="absolute -bottom-40 right-0 h-80 w-80 rounded-full bg-navy-500/40 blur-[110px]" />
            <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:52px_52px] [mask-image:radial-gradient(ellipse_60%_70%_at_70%_30%,black,transparent)]" />
          </div>

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-accent-soft">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-soft" aria-hidden="true" />
                Co-Founder of JNX
              </p>
              <h2 className="mt-6 font-display text-[2.2rem] font-bold leading-[1.08] tracking-tight text-white sm:text-[3rem]">
                Building the web,
                <br />
                <span className="font-serif font-normal italic text-accent-soft">together</span> with JNX.
              </h2>
              <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-white/70">{jnx.description}</p>
              <ul className="mt-7 flex flex-col gap-2.5">
                {points.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-[0.95rem] font-medium text-white/85">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/25 text-accent-soft">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-start gap-6 lg:items-end">
              <div className="rounded-[2rem] border border-white/12 bg-white/[0.06] p-8 backdrop-blur-sm lg:text-right">
                <p className="font-display text-[3.4rem] font-bold leading-none tracking-tight text-white">
                  JNX
                </p>
                <p className="mt-3 text-[0.85rem] font-medium uppercase tracking-[0.22em] text-white/60">
                  Web Design & Development
                </p>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-white/70 lg:max-w-[16rem]">
                  Junayed Hossain — Co-Founder, shaping JNX&apos;s digital work from the inside.
                </p>
              </div>
              <a
                href={jnx.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[0.95rem] font-semibold text-navy-900 shadow-[0_16px_32px_-12px_rgba(0,0,0,0.5)] transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_38px_-12px_rgba(0,0,0,0.55)]"
              >
                Explore JNX
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
