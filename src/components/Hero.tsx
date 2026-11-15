import Image from "next/image";
import { ArrowDown, ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";
import { FacebookIcon, GithubIcon } from "./icons";
import { site, socials, stats } from "@/data/site";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-4 pt-[5.5rem] sm:px-6 lg:px-8">
      {/* Ambient decorations */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-[8%] h-[26rem] w-[26rem] rounded-full bg-accent/15 blur-[110px]" />
        <div className="absolute top-[38rem] -left-40 h-[22rem] w-[22rem] rounded-full bg-navy-700/10 blur-[100px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Hero card — Sevora-style rounded panel */}
        <div className="relative overflow-hidden rounded-[2rem] border border-line/70 bg-gradient-to-br from-cream-card via-cream to-cream-deep shadow-[0_32px_80px_-32px_rgba(14,30,58,0.35)] sm:rounded-[2.5rem]">
          {/* Subtle grid texture */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,rgba(14,30,58,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,30,58,0.05)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
          />
          {/* Soft blue ambient glow behind the portrait */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 top-10 h-[24rem] w-[24rem] rounded-full bg-accent/20 blur-[90px]"
          />

          <div className="relative grid items-center gap-10 px-6 py-12 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:px-14 lg:py-16">
            {/* Left — copy */}
            <div className="max-w-xl">
              <p
                className="hero-rise inline-flex items-center gap-2 rounded-full border border-line bg-cream-card/80 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-navy-700"
                style={{ "--hero-delay": "0ms" } as React.CSSProperties}
              >
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse-dot" aria-hidden="true" />
                Available for new projects
              </p>

              <p
                className="hero-rise mt-7 text-[0.8rem] font-semibold uppercase tracking-[0.32em] text-accent"
                style={{ "--hero-delay": "80ms" } as React.CSSProperties}
              >
                Hello, I&apos;m
              </p>

              <h1
                className="hero-rise mt-3 font-display text-[2.9rem] font-bold leading-[1.02] tracking-tight text-navy-900 sm:text-[4.2rem] lg:text-[4.6rem]"
                style={{ "--hero-delay": "160ms" } as React.CSSProperties}
              >
                Junayed
                <br />
                <span className="font-serif font-normal italic tracking-normal text-navy-700">Hossain</span>
              </h1>

              <p
                className="hero-rise mt-5 text-[1.05rem] font-semibold leading-snug text-navy-800 sm:text-[1.15rem]"
                style={{ "--hero-delay": "240ms" } as React.CSSProperties}
              >
                Developer <span className="text-accent">•</span> Entrepreneur{" "}
                <span className="text-accent">•</span> Digital Creator
              </p>

              <p
                className="hero-rise mt-4 max-w-lg text-[1rem] leading-relaxed text-muted"
                style={{ "--hero-delay": "320ms" } as React.CSSProperties}
              >
                {site.tagline}
              </p>

              <div
                className="hero-rise mt-8 flex flex-wrap items-center gap-3"
                style={{ "--hero-delay": "400ms" } as React.CSSProperties}
              >
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-[0.95rem] font-semibold text-cream shadow-[0_16px_32px_-12px_rgba(14,30,58,0.65)] transition-all hover:-translate-y-0.5 hover:bg-navy-800 hover:shadow-[0_22px_38px_-12px_rgba(14,30,58,0.65)]"
                >
                  Explore My Work
                  <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                </a>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full border border-navy-900/20 bg-cream-card px-6 py-3.5 text-[0.95rem] font-semibold text-navy-900 transition-all hover:-translate-y-0.5 hover:border-navy-900/40 hover:shadow-[0_14px_28px_-14px_rgba(14,30,58,0.4)]"
                >
                  Let&apos;s Talk
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              {/* Socials */}
              <div
                className="hero-rise mt-8 flex items-center gap-2.5"
                style={{ "--hero-delay": "480ms" } as React.CSSProperties}
              >
                <span className="text-[0.8rem] font-medium uppercase tracking-[0.18em] text-muted">Follow</span>
                <span className="h-px w-8 bg-line" aria-hidden="true" />
                <a
                  href={socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Junayed Hossain on Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-cream-card text-navy-800 transition-all hover:-translate-y-0.5 hover:border-navy-900 hover:bg-navy-900 hover:text-cream"
                >
                  <FacebookIcon className="h-[1.05rem] w-[1.05rem]" />
                </a>
                <a
                  href={socials.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Junayed Hossain on WhatsApp"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-cream-card text-navy-800 transition-all hover:-translate-y-0.5 hover:border-navy-900 hover:bg-navy-900 hover:text-cream"
                >
                  <MessageCircle className="h-[1.05rem] w-[1.05rem]" />
                </a>
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Junayed Hossain on GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-cream-card text-navy-800 transition-all hover:-translate-y-0.5 hover:border-navy-900 hover:bg-navy-900 hover:text-cream"
                >
                  <GithubIcon className="h-[1.05rem] w-[1.05rem]" />
                </a>
              </div>

              {/* Stats */}
              <dl
                className="hero-rise mt-10 flex flex-wrap gap-x-10 gap-y-5 border-t border-line/80 pt-7"
                style={{ "--hero-delay": "560ms" } as React.CSSProperties}
              >
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="font-display text-[1.7rem] font-bold leading-none text-navy-900">
                      {s.value}
                      {s.suffix && <span className="text-accent"> {s.suffix}</span>}
                    </dd>
                    <dd className="mt-1.5 text-[0.82rem] font-medium text-muted">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Right — portrait */}
            <div
              className="hero-rise relative mx-auto w-full max-w-[26rem] lg:max-w-none"
              style={{ "--hero-delay": "300ms" } as React.CSSProperties}
            >
              {/* Glow */}
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-accent/25 via-navy-700/15 to-transparent blur-2xl"
              />
              <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-cream-card shadow-[0_40px_80px_-28px_rgba(14,30,58,0.55)] ring-1 ring-navy-900/10">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={site.portrait}
                    alt={site.portraitAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 26rem, 34rem"
                    className="object-cover object-[50%_20%]"
                  />
                  {/* Bottom fade for the caption */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-navy-950/70 to-transparent"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                    <div>
                      <p className="font-display text-[1.05rem] font-bold text-white">Junayed Hossain</p>
                      <p className="text-[0.8rem] font-medium text-white/75">Co-Founder of JNX</p>
                    </div>
                    <span className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-[0.72rem] font-semibold text-white backdrop-blur-md">
                      <Sparkles className="h-3.5 w-3.5" />
                      4 Years Exp.
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating card — Co-Founder of JNX */}
              <div className="absolute -left-4 top-8 animate-float-slow rounded-2xl border border-white/10 bg-navy-900/95 px-4 py-3 shadow-[0_20px_44px_-16px_rgba(8,18,38,0.7)] backdrop-blur-md sm:-left-8">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-accent-soft">Co-Founder</p>
                <p className="mt-0.5 font-display text-[1.05rem] font-bold leading-none text-white">JNX</p>
              </div>

              {/* Floating card — available */}
              <div className="absolute -right-2 bottom-24 animate-float-slower rounded-2xl border border-line bg-cream-card/95 px-4 py-3 shadow-[0_20px_44px_-18px_rgba(14,30,58,0.45)] backdrop-blur-md sm:-right-5">
                <p className="flex items-center gap-2 text-[0.82rem] font-semibold text-navy-900">
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse-dot" aria-hidden="true" />
                  Available for projects
                </p>
                <p className="mt-0.5 pl-4 text-[0.75rem] text-muted">Let&apos;s build something great</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="mt-8 flex justify-center">
          <a
            href="#about"
            className="group flex flex-col items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-muted transition-colors hover:text-navy-900"
          >
            Scroll to explore
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-cream-card transition-all group-hover:border-navy-900/30">
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
