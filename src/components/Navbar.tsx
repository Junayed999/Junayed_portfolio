"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks, site } from "@/data/site";

const sectionIds = navLinks.map((l) => l.href.slice(1));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/85 shadow-[0_1px_0_0_var(--color-line),0_12px_32px_-16px_rgba(14,30,58,0.25)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        <a href="#home" className="group flex items-baseline gap-0.5" aria-label="Junayed.Here — home">
          <span className="font-display text-[1.35rem] font-bold tracking-tight text-navy-900">
            Junayed
          </span>
          <span className="font-display text-[1.35rem] font-bold tracking-tight text-accent transition-colors group-hover:text-navy-700">
            .Here
          </span>
          <span className="ml-1.5 hidden h-2 w-2 rounded-full bg-accent sm:block" aria-hidden="true" />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href.slice(1) ? "true" : undefined}
                className={`relative rounded-full px-4 py-2 text-[0.9rem] font-medium transition-colors ${
                  active === link.href.slice(1)
                    ? "text-navy-900"
                    : "text-muted hover:text-navy-900"
                }`}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-4 -bottom-0.5 h-[2px] rounded-full bg-accent transition-all duration-300 ${
                    active === link.href.slice(1) ? "opacity-100 scale-x-100" : "opacity-0 scale-x-50"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="group hidden items-center gap-1.5 rounded-full bg-navy-900 px-5 py-2.5 text-[0.9rem] font-semibold text-cream shadow-[0_10px_24px_-10px_rgba(14,30,58,0.6)] transition-all hover:-translate-y-0.5 hover:bg-navy-800 hover:shadow-[0_16px_30px_-10px_rgba(14,30,58,0.6)] sm:inline-flex"
          >
            Let&apos;s Talk
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-cream-card text-navy-900 transition-colors hover:bg-cream-deep lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out lg:hidden ${
          open ? "max-h-[26rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-line bg-cream/95 px-5 pb-6 pt-3 backdrop-blur-xl">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-3 py-3 text-[1rem] font-medium transition-colors ${
                    active === link.href.slice(1) ? "bg-accent-light/60 text-navy-900" : "text-muted hover:text-navy-900"
                  }`}
                >
                  {link.label}
                  <ArrowUpRight className="h-4 w-4 opacity-40" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-navy-900 px-5 py-3 text-[0.95rem] font-semibold text-cream"
          >
            Let&apos;s Talk
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
