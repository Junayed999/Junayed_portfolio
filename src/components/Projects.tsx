"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { projects } from "@/data/site";

const GAP = 20;
/** Continuous marquee, like the template's slider: a touch faster than
 *  its ~80px/s, and it slows right down while the mouse hovers over it. */
const SPEED = 100;
const HOVER_SPEED = 30;

export default function Projects() {
  // Two copies of the set so the loop wraps without a visible jump.
  const slides = [...projects, ...projects];
  const [viewportW, setViewportW] = useState(1024);

  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const speedRef = useRef(SPEED);
  const targetRef = useRef(SPEED);
  const posRef = useRef(0);

  // Template-like sizing: ~430px cards on desktop so several projects
  // show across the full viewport, 62% on tablets, 84% on phones.
  const cardW =
    viewportW >= 1024
      ? 430
      : Math.round(viewportW * (viewportW >= 640 ? 0.62 : 0.84));

  const measure = () => {
    const vp = viewportRef.current;
    if (vp) setViewportW(vp.clientWidth);
  };

  useLayoutEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // requestAnimationFrame marquee: the speed eases toward its target, so
  // hovering slows the slide down smoothly instead of jumping.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const setWidth = projects.length * (cardW + GAP);
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      speedRef.current +=
        (targetRef.current - speedRef.current) * Math.min(dt * 6, 1);
      posRef.current -= speedRef.current * dt;
      if (posRef.current <= -setWidth) posRef.current += setWidth;
      if (trackRef.current)
        trackRef.current.style.transform = `translateX(${posRef.current}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [cardW]);

  return (
    // Full-bleed like the Simplefolio slider: the section breaks out of the
    // narrow column to span the whole viewport (no background band — the
    // page background shows through behind the projects).
    <section
      id="projects"
      aria-label="Featured projects"
      className="group relative left-1/2 w-screen -translate-x-1/2 overflow-hidden pb-16"
      onMouseEnter={() => {
        targetRef.current = HOVER_SPEED;
      }}
      onMouseLeave={() => {
        targetRef.current = SPEED;
      }}
    >
      <div ref={viewportRef} className="touch-pan-y select-none overflow-hidden">
        <div ref={trackRef} className="flex w-max gap-5 will-change-transform">
          {slides.map((project, i) => (
            <a
              key={`${project.id}-${i}`}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-hidden={i >= projects.length || undefined}
              tabIndex={i >= projects.length ? -1 : undefined}
              aria-label={`Open ${project.name} live website`}
              draggable={false}
              className="block shrink-0"
              style={{ width: cardW }}
            >
              {/* Template frame: #fafafa, 24px padding, 20px radius, inset
                  white top highlight; image wrapper 10px radius with a soft
                  drop shadow. No hover effect on the template's cards. */}
              <span className="block rounded-[20px] bg-card p-6 shadow-[inset_0_3px_0_0_#fff]">
                <span className="relative block aspect-[4/3] overflow-hidden rounded-[10px] bg-white shadow-[0_10px_16px_-3px_rgba(0,0,0,0.25)]">
                  <Image
                    src={project.image}
                    alt={`${project.name} — live website screenshot`}
                    fill
                    sizes="(max-width: 640px) 84vw, 430px"
                    draggable={false}
                    className="object-cover object-top"
                  />
                </span>
              </span>
              <span className="mt-3 block text-center text-[1.15rem] font-bold leading-tight text-ink">
                {project.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
