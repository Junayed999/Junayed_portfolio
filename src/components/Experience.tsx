import Reveal from "./Reveal";
import { experience } from "@/data/site";

const pillStyles = {
  dark: "bg-ink text-white",
  neutral: "bg-card text-ink",
  green: "bg-pill-green-bg text-pill-green-text",
} as const;

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line px-6 py-14 sm:px-10">
      <Reveal>
        <h2 className="text-[1.4rem] font-bold tracking-tight text-ink">Work Experience</h2>
      </Reveal>
      <Reveal delay={100}>
        <ul className="mt-6 max-w-[760px]">
          {experience.map((job) => (
            <li
              key={`${job.role}-${job.company}`}
              className="flex items-baseline gap-4 border-b border-line py-5 last:border-b-0"
            >
              <span className="w-[104px] shrink-0 pt-0.5 text-[0.83rem] leading-snug text-muted">
                {job.period}
              </span>
              <p className="text-[0.95rem] leading-relaxed text-ink">
                <span className="font-semibold">{job.role}</span>{" "}
                <span className="text-muted">at</span>{" "}
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[0.82rem] font-semibold ${pillStyles[job.companyStyle]}`}
                >
                  {job.company}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
