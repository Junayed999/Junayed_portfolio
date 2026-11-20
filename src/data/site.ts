/**
 * Junayed.JS — site content & configuration.
 *
 * Everything editable lives here: personal info, social links,
 * projects, experience and services. Edit this file to update the site.
 */

export const site = {
  name: "Junayed.JS",
  owner: "Junayed Hossain",
  role: "Developer • Web Developer • Digital Creator",
  tagline:
    "Building modern websites and digital experiences — Co-Founder of JNX, turning ideas into products that feel effortless to use.",
  description:
    "Explore the personal portfolio of Junayed Hossain — Developer, Web Developer, Digital Creator, and Co-Founder of JNX.",
  url: "https://junayed-here.vercel.app",
  email: "jnx.webcraft@gmail.com",
  portrait: "/portrait.png",
  portraitAlt: "Portrait of Junayed Hossain",
} as const;

export const socials = {
  /** Facebook profile (from the recreation brief) */
  facebook: "https://www.facebook.com/share/1D9jWVEru7/",
  /** Instagram profile (from the recreation brief) */
  instagram:
    "https://www.instagram.com/junayed_jun_js?gwpx=ajNyNjE3ajdzYjNt",
  /** Confirmed WhatsApp number */
  whatsapp: "+880 1991-269926",
  whatsappLink: "https://wa.me/8801991269926",
  /** GitHub — the user's verified account (jxdeveloper001) */
  github: "https://github.com/jxdeveloper001",
} as const;

export type Project = {
  id: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  url: string;
};

export const projects: Project[] = [
  {
    id: "netrex",
    name: "Netrex",
    category: "Portfolio Website",
    description:
      "A premium one-page personal portfolio with a bold editorial design — big typography, playful details and a confident visual identity.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/netrex.png",
    url: "https://netrex-dev.vercel.app/",
  },
  {
    id: "jinary",
    name: "Jinary",
    category: "Web Tool",
    description:
      "A one-page text-to-binary converter that translates between human language and binary in seconds — fully client-side, with UTF-8 support and no sign-up.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/jinary.png",
    url: "https://jinary.vercel.app",
  },
  {
    id: "shopstrike",
    name: "ShopStrike",
    category: "E-commerce Storefront",
    description:
      "A premium leather e-commerce storefront — handcrafted shoes, bags and belts, with a clean shopping experience from browse to checkout.",
    tags: ["Next.js", "TypeScript", "E-commerce"],
    image: "/projects/shopstrike.png",
    url: "https://shopstrike.vercel.app/",
  },
];

export const experience = [
  {
    period: "2022 – Present",
    role: "Co-Founder",
    company: "JNX",
    companyStyle: "dark" as const,
  },
  {
    period: "2022 – Present",
    role: "Web Developer",
    company: "Independent",
    companyStyle: "neutral" as const,
  },
  {
    period: "Present",
    role: "Digital Creator",
    company: "Junayed.JS",
    companyStyle: "green" as const,
  },
] as const;

export const services = [
  {
    title: "Website Development",
    description: "Modern, responsive and professional websites.",
    icon: "Globe",
  },
  {
    title: "Frontend Development",
    description: "Interactive, polished interfaces people love to use.",
    icon: "Monitor",
  },
  {
    title: "E-commerce Development",
    description: "Modern online shopping experiences that sell.",
    icon: "ShoppingBag",
  },
  {
    title: "UI Implementation",
    description: "Turning designs into functional, responsive interfaces.",
    icon: "PenTool",
  },
] as const;

export const jnx = {
  name: "JNX",
  role: "Co-Founder",
  url: "https://jnx-dev.vercel.app",
  description:
    "JNX is a digital development initiative focused on building modern websites and digital solutions — clean design, premium quality, and products that actually work.",
} as const;
