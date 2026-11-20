import Image from "next/image";
import Reveal from "./Reveal";
import { site } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="border-t border-line px-6 py-14 sm:px-10">
      <Reveal>
        <h2 className="text-[1.4rem] font-bold tracking-tight text-ink">About</h2>
        <p className="mt-4 text-[0.98rem] leading-relaxed text-muted">
          I&apos;m Junayed Hossain, a developer, web developer and digital creator. I&apos;m the
          Co-Founder of JNX, where we build modern websites and digital solutions for businesses and
          creators.
        </p>
        <p className="mt-3 text-[0.98rem] leading-relaxed text-muted">
          I thrive on transforming ideas into reality — whether it&apos;s crafting a website,
          designing an interface, or building a web product that feels effortless to use.
        </p>
      </Reveal>

      <Reveal delay={120}>
        <div className="relative mx-auto mt-10 h-[300px] max-w-[430px]">
          <figure className="absolute left-0 top-10 w-[190px] -rotate-6 border border-line bg-white p-2 pb-3 shadow-[0_18px_36px_-16px_rgba(0,0,0,0.35)]">
            <span className="relative block aspect-square overflow-hidden bg-card">
              <Image
                src={site.portrait}
                alt="Junayed Hossain"
                fill
                sizes="190px"
                className="object-cover object-[50%_15%]"
              />
            </span>
            <figcaption className="pt-2 text-center font-hand text-[0.95rem] text-ink">
              Junayed Hossain
            </figcaption>
          </figure>
          <figure className="absolute right-0 top-0 w-[190px] rotate-3 border border-line bg-white p-2 pb-3 shadow-[0_18px_36px_-16px_rgba(0,0,0,0.35)]">
            <span className="relative block aspect-square overflow-hidden bg-card">
              <Image
                src="/profile.jpg"
                alt="Junayed Hossain — profile photo"
                fill
                sizes="190px"
                className="object-cover"
              />
            </span>
            <figcaption className="pt-2 text-center font-hand text-[0.95rem] text-ink">
              Co-Founder — JNX
            </figcaption>
          </figure>
        </div>
      </Reveal>
    </section>
  );
}
