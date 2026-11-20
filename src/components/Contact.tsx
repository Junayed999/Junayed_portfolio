"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import { socials } from "@/data/site";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      `Hello Junayed, I'm ${name || "a visitor"} — I found your portfolio and would like to connect.`,
      email ? `My email: ${email}` : "",
      message ? `Message: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    const url = `${socials.whatsappLink}?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="border-t border-line px-6 py-14 sm:px-10">
      <Reveal>
        <h2 className="text-[1.4rem] font-bold tracking-tight text-ink">Get in touch</h2>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
          Have a project in mind, or just want to say hello? Fill in the form — it opens WhatsApp with
          your message ready to send.
        </p>
      </Reveal>

      <Reveal delay={110}>
        <form onSubmit={handleSubmit} className="mt-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="sr-only">Your name</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your Name"
                autoComplete="name"
                className="w-full rounded-xl border border-line bg-white px-4 py-3 text-[0.95rem] text-ink placeholder:text-muted/60 outline-none transition-colors focus:border-ink focus:ring-2 focus:ring-ink/10"
              />
            </label>
            <label className="block">
              <span className="sr-only">Your email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Your Email"
                autoComplete="email"
                className="w-full rounded-xl border border-line bg-white px-4 py-3 text-[0.95rem] text-ink placeholder:text-muted/60 outline-none transition-colors focus:border-ink focus:ring-2 focus:ring-ink/10"
              />
            </label>
          </div>
          <label className="mt-4 block">
            <span className="sr-only">Your message</span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              placeholder="Tell me a little about your project…"
              className="w-full resize-y rounded-xl border border-line bg-white px-4 py-3 text-[0.95rem] leading-relaxed text-ink placeholder:text-muted/60 outline-none transition-colors focus:border-ink focus:ring-2 focus:ring-ink/10"
            />
          </label>
          <button
            type="submit"
            className="mt-5 w-full rounded-full bg-ink py-3.5 text-[0.95rem] font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Send Message
          </button>
          <p className="mt-3 text-center text-[0.82rem] leading-relaxed text-muted">
            Submitting opens WhatsApp with your message pre-filled — nothing is stored on this site.
          </p>
        </form>
      </Reveal>
    </section>
  );
}
