import { Award, Compass, Lightbulb, Rocket } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const highlights = [
  {
    icon: Award,
    title: "4 Years of Experience",
    text: "Building websites and digital products — learning, shipping and improving every single year.",
  },
  {
    icon: Rocket,
    title: "Co-Founder of JNX",
    text: "Co-leading a digital development initiative focused on modern websites and digital solutions.",
  },
  {
    icon: Compass,
    title: "Product Thinking",
    text: "I don't just write code — I think about the people who will use what I build.",
  },
  {
    icon: Lightbulb,
    title: "Always Curious",
    text: "Exploring new technologies, solving problems, and turning ideas into working products.",
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="About Me"
            title={
              <>
                A developer who turns{" "}
                <span className="font-serif font-normal italic text-navy-700">ideas</span> into
                working products.
              </>
            }
            align="left"
          />
          <p className="mt-6 text-[1.02rem] leading-relaxed text-muted">
            I&apos;m Junayed Hossain, a developer and digital creator passionate about building modern
            websites, digital products, and meaningful online experiences.
          </p>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-muted">
            I enjoy exploring new technologies, solving problems, and transforming ideas into functional
            digital solutions. I&apos;m also the Co-Founder of JNX, where we work on creating digital
            experiences and innovative web solutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-line bg-cream-card px-4 py-2 text-[0.85rem] font-semibold text-navy-800">
              Developer
            </span>
            <span className="rounded-full border border-line bg-cream-card px-4 py-2 text-[0.85rem] font-semibold text-navy-800">
              Digital Creator
            </span>
            <span className="rounded-full border border-line bg-cream-card px-4 py-2 text-[0.85rem] font-semibold text-navy-800">
              Entrepreneur
            </span>
            <span className="rounded-full bg-navy-900 px-4 py-2 text-[0.85rem] font-semibold text-cream">
              Co-Founder of JNX
            </span>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 90} className={i % 2 === 1 ? "sm:translate-y-6" : ""}>
              <article className="group h-full rounded-3xl border border-line bg-cream-card p-6 shadow-[0_10px_30px_-18px_rgba(14,30,58,0.25)] transition-all duration-300 hover:-translate-y-1.5 hover:border-navy-900/25 hover:shadow-[0_24px_44px_-20px_rgba(14,30,58,0.4)]">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-light text-navy-800 transition-colors group-hover:bg-navy-900 group-hover:text-cream">
                  <h.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-[1.05rem] font-bold leading-snug text-navy-900">
                  {h.title}
                </h3>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-muted">{h.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
