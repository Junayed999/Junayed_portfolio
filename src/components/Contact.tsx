"use client";

import { useState, type FormEvent } from "react";
import { Mail, MessageCircle, Send } from "lucide-react";
import { FacebookIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { site, socials } from "@/data/site";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      `Hello Junayed, I'm ${name || "a visitor"} — I found your portfolio and would like to connect.`,
      subject ? `Subject: ${subject}` : "",
      email ? `My email: ${email}` : "",
      message ? `Message: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    const url = `https://wa.me/8801991269926?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Have a project{" "}
              <span className="font-serif font-normal italic text-navy-700">in mind?</span>
            </>
          }
          description="Let's connect and turn your ideas into something meaningful."
        />
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Contact cards */}
        <div className="flex flex-col gap-4">
          <Reveal>
            <a
              href={socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 rounded-[1.75rem] border border-line bg-cream-card p-6 shadow-[0_10px_30px_-18px_rgba(14,30,58,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-navy-900/25 hover:shadow-[0_24px_44px_-20px_rgba(14,30,58,0.4)]"
            >
              <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-[#1877f2]/10 text-[#1877f2] transition-transform group-hover:scale-105">
                <FacebookIcon className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-muted">
                  Facebook
                </span>
                <span className="mt-1 block font-display text-[1.08rem] font-bold text-navy-900">
                  Connect on Facebook
                </span>
                <span className="mt-0.5 block text-[0.88rem] text-muted">Message me directly</span>
              </span>
            </a>
          </Reveal>

          <Reveal delay={90}>
            <a
              href={socials.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 rounded-[1.75rem] border border-line bg-cream-card p-6 shadow-[0_10px_30px_-18px_rgba(14,30,58,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-navy-900/25 hover:shadow-[0_24px_44px_-20px_rgba(14,30,58,0.4)]"
            >
              <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-[#25d366]/10 text-[#1da851] transition-transform group-hover:scale-105">
                <MessageCircle className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-muted">
                  WhatsApp
                </span>
                <span className="mt-1 block font-display text-[1.08rem] font-bold text-navy-900">
                  {socials.whatsapp}
                </span>
                <span className="mt-0.5 block text-[0.88rem] text-muted">Fastest way to reach me</span>
              </span>
            </a>
          </Reveal>

          <Reveal delay={180}>
            <a
              href={`mailto:${site.email}`}
              className="group flex items-center gap-5 rounded-[1.75rem] border border-line bg-cream-card p-6 shadow-[0_10px_30px_-18px_rgba(14,30,58,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-navy-900/25 hover:shadow-[0_24px_44px_-20px_rgba(14,30,58,0.4)]"
            >
              <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-accent-light text-navy-800 transition-transform group-hover:scale-105">
                <Mail className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-muted">
                  Email
                </span>
                <span className="mt-1 block break-all font-display text-[1.08rem] font-bold text-navy-900">
                  {site.email}
                </span>
                <span className="mt-0.5 block text-[0.88rem] text-muted">For detailed enquiries</span>
              </span>
            </a>
          </Reveal>

          <Reveal delay={240}>
            <p className="rounded-[1.75rem] border border-dashed border-navy-900/25 bg-cream-deep/60 p-5 text-[0.88rem] leading-relaxed text-muted">
              Prefer a form? Fill it in — it opens WhatsApp with your message ready to send. No account,
              no waiting.
            </p>
          </Reveal>
        </div>

        {/* Form — sends via WhatsApp (no backend) */}
        <Reveal delay={120}>
          <form
            onSubmit={handleSubmit}
            className="flex h-full flex-col rounded-[1.75rem] border border-line bg-cream-card p-7 shadow-[0_10px_30px_-18px_rgba(14,30,58,0.25)] sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-[0.85rem] font-semibold text-navy-900">Your Name</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="e.g. Alex Rahman"
                  autoComplete="name"
                  className="w-full rounded-xl border border-line bg-cream px-4 py-3 text-[0.95rem] text-navy-900 placeholder:text-muted/60 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/25"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-[0.85rem] font-semibold text-navy-900">Your Email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="w-full rounded-xl border border-line bg-cream px-4 py-3 text-[0.95rem] text-navy-900 placeholder:text-muted/60 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/25"
                />
              </label>
            </div>
            <label className="mt-5 block">
              <span className="mb-2 block text-[0.85rem] font-semibold text-navy-900">Subject</span>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="e.g. I need a website for my business"
                className="w-full rounded-xl border border-line bg-cream px-4 py-3 text-[0.95rem] text-navy-900 placeholder:text-muted/60 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/25"
              />
            </label>
            <label className="mt-5 block flex-1">
              <span className="mb-2 block text-[0.85rem] font-semibold text-navy-900">Message</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                placeholder="Tell me a little about your project…"
                className="w-full resize-y rounded-xl border border-line bg-cream px-4 py-3 text-[0.95rem] leading-relaxed text-navy-900 placeholder:text-muted/60 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/25"
              />
            </label>
            <button
              type="submit"
              className="group mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-[0.95rem] font-semibold text-cream shadow-[0_16px_32px_-12px_rgba(14,30,58,0.65)] transition-all hover:-translate-y-0.5 hover:bg-navy-800"
            >
              Send via WhatsApp
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <p className="mt-4 text-center text-[0.82rem] leading-relaxed text-muted">
              Submitting opens WhatsApp with your message pre-filled — nothing is stored on this site.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
