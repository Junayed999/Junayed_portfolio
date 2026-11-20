"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/data/site";

const AUTO_MS = 4500;
const GAP = 20;

/** Stepped carousel: one project centred with neighbours peeking on both sides.
 *  Auto-advances every few seconds, pauses on hover/drag, has prev/next
 *  arrows on hover (desktop) and swipe on touch. The track holds clones of
 *  the first/last project so the loop wraps without a visible jump. */
export default function Projects() {
  // [clone of last, ...projects, clone of first]
  const slides = [projects[projects.length - 1], ...projects, projects[0]];
  const [pos, setPos] = useState(1);
  const [anim, setAnim] = useState(true);
  const [paused, setPaused] = useState(false);
  const [viewportW, setViewportW] = useState(1024);

  const viewportRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ startX: number; dx: number; active: boolean }>({
    startX: 0,
    dx: 0,
    active: false,
  });

  // Template-like sizing: ~430px cards on desktop so several projects
  // show across the full viewport, 62% on tablets, 84% on phones.
  const cardW =
    viewportW >= 1024
      ? 430
      : Math.round(viewportW * (viewportW >= 640 ? 0.62 : 0.84));

  const measure = useCallback(() => {
    const vp = viewportRef.current;
    if (vp) setViewportW(vp.clientWidth);
  }, []);

  useLayoutEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  // Re-enable the transition shortly after a silent snap reset.
  useEffect(() => {
    if (anim) return;
    const t = setTimeout(() => setAnim(true), 60);
    return () => clearTimeout(t);
  }, [anim]);

  const go = useCallback((dir: 1 | -1) => {
    setAnim(true);
    setPos((p) => p + dir);
  }, []);

  // Auto-advance; the timer restarts after every move or pause change.
  useEffect(() => {
    if (paused) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    const t = setTimeout(() => {
      if (!document.hidden) go(1);
    }, AUTO_MS);
    return () => clearTimeout(t);
  }, [paused, pos, go]);

  const handleTransitionEnd = () => {
    if (pos === 0) {
      setAnim(false);
      setPos(slides.length - 2);
    } else if (pos === slides.length - 1) {
      setAnim(false);
      setPos(1);
    }
  };

  const offset =
    pos * (cardW + GAP) - (viewportW - cardW) / 2;

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    dragRef.current = { startX: e.clientX, dx: 0, active: true };
    setPaused(true);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragRef.current.active) return;
    dragRef.current.dx = e.clientX - dragRef.current.startX;
  };
  const onPointerUp = () => {
    const { dx, active } = dragRef.current;
    dragRef.current.active = false;
    setPaused(false);
    if (!active) return;
    if (dx < -60) go(1);
    else if (dx > 60) go(-1);
  };
  const onClickCapture = (e: React.MouseEvent) => {
    if (Math.abs(dragRef.current.dx) > 10) {
      e.preventDefault();
      e.stopPropagation();
      dragRef.current.dx = 0;
    }
  };

  const arrowCls =
    "absolute top-[38%] z-10 hidden h-11 w-11 items-center justify-center rounded-full border border-line bg-white/90 text-ink shadow-[0_10px_24px_-10px_rgba(0,0,0,0.4)] backdrop-blur transition-all hover:bg-white sm:flex [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 focus-visible:opacity-100";

  return (
    // Full-bleed like the Simplefolio slider: the section breaks out of the
    // narrow column to span the whole viewport (no background band — the
    // page background shows through behind the projects).
    <section
      id="projects"
      aria-label="Featured projects"
      className="group relative left-1/2 w-screen -translate-x-1/2 overflow-hidden pb-16"
    >
      <div
        ref={viewportRef}
        className="touch-pan-y select-none overflow-hidden"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => {
          setPaused(false);
          dragRef.current.active = false;
        }}
      >
        <div
          className="flex w-max gap-5 will-change-transform"
          style={{
            transform: `translateX(${-offset}px)`,
            transition: anim ? "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
          onClickCapture={onClickCapture}
        >
          {slides.map((project, i) => (
            <a
              key={`${project.id}-${i}`}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-hidden={i === 0 || i === slides.length - 1 || undefined}
              tabIndex={i === 0 || i === slides.length - 1 ? -1 : undefined}
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

      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Previous project"
        className={`${arrowCls} left-3`}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Next project"
        className={`${arrowCls} right-3`}
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </section>
  );
}
