import Image from "next/image";
import { Code2 } from "lucide-react";
import { site } from "@/data/site";

/** Hero heading, word by word — each word blurs in, staggered, like the
 *  Simplefolio hero. The code icon animates as one of the words. */
const line1 = ["Hey,", "I'm", "Junayed", "Hossain."];
const line2: Array<{ text?: string; icon?: boolean }> = [
  { text: "Developer" },
  { text: "&" },
  { icon: true },
  { text: "Digital" },
  { text: "Creator" },
];

export default function Hero() {
  let i = 0;
  const wordDelay = () => `${140 + i++ * 90}ms`;

  return (
    <section id="home" className="px-6 pb-16 pt-12 sm:px-10">
      <div
        className="hero-rise relative h-24 w-24 overflow-hidden rounded-full"
        style={{ "--hero-delay": "0ms" } as React.CSSProperties}
      >
        <Image
          src={site.portrait}
          alt={site.portraitAlt}
          fill
          priority
          sizes="96px"
          className="object-cover object-[50%_18%]"
        />
      </div>

      <h1 className="mt-7 text-[2.45rem] font-bold leading-[1.08] tracking-tight text-ink sm:text-[2.85rem]">
        {line1.map((word) => (
          <span key={word}>
            <span className="hero-word" style={{ animationDelay: wordDelay() }}>
              {word}
            </span>{" "}
          </span>
        ))}
        <br />
        {line2.map((part, idx) =>
          part.icon ? (
            <span key="icon">
              <span className="hero-word" style={{ animationDelay: wordDelay() }}>
                <span className="inline-flex h-[0.85em] w-[0.85em] translate-y-[0.08em] items-center justify-center rounded-[0.22em] bg-ink align-baseline">
                  <Code2 className="h-[0.6em] w-[0.6em] text-white" strokeWidth={2.5} />
                </span>
              </span>{" "}
            </span>
          ) : (
            <span key={part.text ?? idx}>
              <span className="hero-word" style={{ animationDelay: wordDelay() }}>
                {part.text}
              </span>{" "}
            </span>
          ),
        )}
      </h1>

      <p
        className="hero-rise mt-5 max-w-md text-[1rem] leading-relaxed text-muted"
        style={{ "--hero-delay": "180ms" } as React.CSSProperties}
      >
        {site.tagline}
      </p>

      <div
        className="hero-rise mt-7 flex flex-wrap items-center gap-3"
        style={{ "--hero-delay": "260ms" } as React.CSSProperties}
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-pill-green-bg px-4 py-3 text-[0.88rem] font-semibold text-pill-green-text">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse-dot" aria-hidden="true" />
          Available for new project
        </span>
      </div>
    </section>
  );
}
