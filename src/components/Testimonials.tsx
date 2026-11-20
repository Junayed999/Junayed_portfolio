import Reveal from "./Reveal";
import { testimonials } from "@/data/site";

/** "Meet Who Are Around" — the template's Testimonials, renamed.
 *  Same horizontal scrolling effect, but compact: shorter cards, smaller
 *  text, initials avatars instead of photos. The track holds two copies
 *  of the set and scrolls continuously; it pauses on hover. */
export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section id="voices" aria-label="What people say" className="border-t border-line py-14">
      <Reveal className="px-6 sm:px-10">
        <h2 className="text-center text-[1.4rem] font-bold tracking-tight text-ink">
          Meet Who Are Around
        </h2>
        <p className="mx-auto mt-2 max-w-sm text-center text-[0.92rem] leading-relaxed text-muted">
          Kind words from the people I&apos;ve built things with.
        </p>
      </Reveal>

      {/* Full-bleed like the template's reviews row: the marquee breaks out
          of the column (no background band — the page background shows
          through behind the cards). */}
      <div
        className="testimonials-fade group relative left-1/2 mt-9 w-screen -translate-x-1/2 overflow-hidden py-1"
        aria-hidden={false}
      >
        <div className="testimonials-track flex w-max gap-4 px-2 group-hover:[animation-play-state:paused]">
          {doubled.map((t, i) => (
            <figure
              key={`${t.name}-${i}`}
              aria-hidden={i >= testimonials.length || undefined}
              className="w-[290px] shrink-0 rounded-[20px] bg-card p-4 shadow-[inset_0_3px_0_0_#fff] sm:w-[320px]"
            >
              <blockquote className="text-[0.88rem] leading-relaxed text-ink/85">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-[0.85rem] font-bold text-white"
                  aria-hidden="true"
                >
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-[0.88rem] font-bold leading-tight text-ink">
                    {t.name}
                  </span>
                  <span className="block text-[0.8rem] leading-tight text-muted">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
