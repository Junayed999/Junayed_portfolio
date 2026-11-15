import { ArrowUpRight, MessageCircle } from "lucide-react";
import { FacebookIcon } from "./icons";
import CurrentYear from "./CurrentYear";
import { jnx, navLinks, site, socials } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line/70 bg-cream-deep/60">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a href="#home" className="flex items-baseline gap-0.5" aria-label="Junayed.Here — back to top">
              <span className="font-display text-[1.35rem] font-bold tracking-tight text-navy-900">Junayed</span>
              <span className="font-display text-[1.35rem] font-bold tracking-tight text-accent">.Here</span>
            </a>
            <p className="mt-3 text-[0.93rem] leading-relaxed text-muted">
              Developer, digital creator, and Co-Founder of JNX — building modern websites and meaningful
              digital experiences.
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              <a
                href={socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Junayed Hossain on Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-cream-card text-navy-800 transition-all hover:-translate-y-0.5 hover:bg-navy-900 hover:text-cream"
              >
                <FacebookIcon className="h-[1.05rem] w-[1.05rem]" />
              </a>
              <a
                href={socials.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Junayed Hossain on WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-cream-card text-navy-800 transition-all hover:-translate-y-0.5 hover:bg-navy-900 hover:text-cream"
              >
                <MessageCircle className="h-[1.05rem] w-[1.05rem]" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-navy-700">Explore</p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {navLinks.slice(0, 4).map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-[0.92rem] text-muted transition-colors hover:text-navy-900">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-navy-700">More</p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {navLinks.slice(4).map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-[0.92rem] text-muted transition-colors hover:text-navy-900">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-navy-700">Connect</p>
              <ul className="mt-4 flex flex-col gap-2.5">
                <li>
                  <a
                    href={socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.92rem] text-muted transition-colors hover:text-navy-900"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href={socials.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.92rem] text-muted transition-colors hover:text-navy-900"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-[0.92rem] text-muted transition-colors hover:text-navy-900"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-7 text-center sm:flex-row sm:text-left">
          <p className="text-[0.88rem] text-muted">
            © <CurrentYear /> {site.owner}. Built with creativity by {site.owner}. Co-Founder of {jnx.name}.
          </p>
          <a
            href={jnx.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-full border border-line bg-cream-card px-4 py-2 text-[0.85rem] font-semibold text-navy-900 transition-all hover:-translate-y-0.5 hover:border-navy-900/40"
          >
            Visit JNX
            <ArrowUpRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
