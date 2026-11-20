import Image from "next/image";
import Reveal from "./Reveal";
import { services } from "@/data/site";

/** "How Can I Help?" — the template's real design, measured in the browser:
 *  a compact 2×2 grid (510px, 250px cards, 10px gap) of #fafafa cards,
 *  each with two small 62px thumbnails floating tilted (-6° / +8°) and
 *  overlapping at the top, and the label left-aligned at the bottom.
 *  Heading 32px / weight 400, subtitle 16px #5a5a5a, both centred.
 *  Cards rise in with a stagger on scroll; no hover effect on the
 *  template's cards. Thumbnails are the user's own project screenshots. */
export default function Services() {
  return (
    <section id="services" className="border-t border-line px-6 py-14 sm:px-10">
      <Reveal>
        <h2 className="text-center text-[2rem] font-normal leading-tight tracking-tight text-ink">
          How Can I Help?
        </h2>
        <p className="mx-auto mt-2 max-w-sm text-center text-base leading-relaxed text-[#5a5a5a]">
          Let&apos;s turn your vision into something amazing.
        </p>
      </Reveal>
      <div className="mx-auto mt-9 grid max-w-[510px] grid-cols-2 gap-[10px]">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={i * 80}>
            <article
              className="relative h-[160px] bg-card shadow-[inset_0_3px_0_0_#fff]"
              style={{ borderRadius: service.radius }}
            >
              <span className="absolute left-5 top-[18px] block h-[62px] w-[62px] rotate-[-6deg] overflow-hidden rounded-[12px] bg-white shadow-[-3px_5px_13px_0px_rgba(0,0,0,0.1),-13px_20px_24px_0px_rgba(0,0,0,0.09)]">
                <Image
                  src={service.images[0]}
                  alt={`${service.title} — example work`}
                  fill
                  sizes="62px"
                  className="object-cover object-top"
                />
              </span>
              <span className="absolute left-[51px] top-[30px] block h-[62px] w-[62px] rotate-[8deg] overflow-hidden rounded-[12px] bg-white shadow-[-3px_5px_13px_0px_rgba(0,0,0,0.1),-13px_20px_24px_0px_rgba(0,0,0,0.09)]">
                <Image
                  src={service.images[1]}
                  alt={`${service.title} — example work`}
                  fill
                  sizes="62px"
                  className="object-cover object-top"
                />
              </span>
              <h3 className="absolute bottom-[19px] left-5 text-base font-normal leading-snug text-black">
                {service.title}
              </h3>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
