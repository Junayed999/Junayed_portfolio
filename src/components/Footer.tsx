import { FacebookIcon, InstagramIcon } from "./icons";
import CurrentYear from "./CurrentYear";
import { site, socials } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-9 text-center sm:px-10">
      <p className="text-[0.88rem] text-muted">
        © <CurrentYear /> {site.owner}. All rights reserved.
      </p>
      <div className="mt-4 flex items-center justify-center gap-2.5">
        <a
          href={socials.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Junayed Hossain on Facebook"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink transition-all hover:-translate-y-0.5 hover:bg-ink hover:text-white"
        >
          <FacebookIcon className="h-[1.05rem] w-[1.05rem]" />
        </a>
        <a
          href={socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Junayed Hossain on Instagram"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink transition-all hover:-translate-y-0.5 hover:bg-ink hover:text-white"
        >
          <InstagramIcon className="h-[1.05rem] w-[1.05rem]" />
        </a>
      </div>
    </footer>
  );
}
