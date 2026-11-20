"use client";

import { Home } from "lucide-react";
import { FacebookIcon, GithubIcon, InstagramIcon } from "./icons";
import { socials } from "@/data/site";

/** Floating pill navigation — matches the reference: home icon, socials, Book a Call. */
export default function Navbar() {
  return (
    <div className="sticky top-4 z-50 flex justify-center px-4 pt-4">
      <nav
        aria-label="Main navigation"
        className="flex items-center gap-0.5 rounded-full border border-line bg-white/90 py-1.5 pl-1.5 pr-1.5 shadow-[0_10px_28px_-12px_rgba(0,0,0,0.35)] backdrop-blur-md"
      >
        <a
          href="#home"
          aria-label="Junayed.JS — home"
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-card"
        >
          <Home className="h-[1.1rem] w-[1.1rem]" />
        </a>
        <span aria-hidden="true" className="mx-1 h-6 w-px bg-line" />
        <a
          href={socials.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Junayed Hossain on Facebook"
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-card"
        >
          <FacebookIcon className="h-[1.05rem] w-[1.05rem]" />
        </a>
        <a
          href={socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Junayed Hossain on Instagram"
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-card"
        >
          <InstagramIcon className="h-[1.05rem] w-[1.05rem]" />
        </a>
        <a
          href={socials.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Junayed Hossain on GitHub"
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-card"
        >
          <GithubIcon className="h-[1.05rem] w-[1.05rem]" />
        </a>
        <a
          href="#contact"
          className="ml-2 inline-flex items-center rounded-full bg-ink px-4 py-2.5 text-[0.88rem] font-semibold text-white transition-transform hover:-translate-y-0.5"
        >
          Book a Call
        </a>
      </nav>
    </div>
  );
}
