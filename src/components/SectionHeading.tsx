import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({ eyebrow, title, description, align = "center" }: SectionHeadingProps) {
  const alignClass = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`flex flex-col ${alignClass}`}>
      <span className="inline-flex items-center gap-2 rounded-full border border-line bg-cream-card px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-navy-700">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className="mt-5 max-w-2xl font-display text-[2rem] font-bold leading-[1.12] tracking-tight text-navy-900 sm:text-[2.6rem]">
        {title}
      </h2>
      {description && (
        <p className={`mt-4 max-w-xl text-[1rem] leading-relaxed text-muted ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}
