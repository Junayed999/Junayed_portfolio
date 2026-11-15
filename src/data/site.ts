/**
 * Junayed.Here — site content & configuration.
 *
 * Everything editable lives here: personal info, social links, skills,
 * projects, services and workflow. Edit this file to update the site —
 * no other file needs to change.
 */

export const site = {
  name: "Junayed.Here",
  owner: "Junayed Hossain",
  role: "Developer • Entrepreneur • Digital Creator",
  tagline: "I build modern digital experiences, develop meaningful products, and turn creative ideas into practical solutions.",
  description:
    "Explore the personal portfolio of Junayed Hossain — Developer, Digital Creator, and Co-Founder of JNX.",
  url: "https://junayed-here.vercel.app",
  email: "jnx.webcraft@gmail.com",
  portrait: "/portrait.png",
  portraitAlt: "Portrait of Junayed Hossain",
} as const;

export const socials = {
  /** Confirmed Facebook profile */
  facebook: "https://www.facebook.com/share/19XkcJZrkx/",
  /** Confirmed WhatsApp number */
  whatsapp: "+880 1991-269926",
  whatsappLink: "https://wa.me/8801991269926",
  /** GitHub — the user's verified account (jxdeveloper001) */
  github: "https://github.com/jxdeveloper001",
  /** Add your real URLs here when ready — empty links are never rendered. */
  linkedin: "",
  instagram: "",
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
] as const;

export const stats = [
  { value: "4", suffix: "Years", label: "of Experience" },
  { value: "3", suffix: "", label: "Featured Projects" },
  { value: "JNX", suffix: "", label: "Co-Founder" },
] as const;

export const skillGroups = [
  {
    title: "Frontend Development",
    description: "Interfaces people love to use — fast, responsive and polished.",
    icon: "Layout",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend & Database",
    description: "Solid foundations behind every product — APIs and data done right.",
    icon: "Server",
    skills: ["Node.js", "REST APIs", "Prisma", "MySQL", "PostgreSQL", "Supabase"],
  },
  {
    title: "Tools & Workflow",
    description: "A modern workflow that ships clean, maintainable code.",
    icon: "Wrench",
    skills: ["Git", "GitHub", "VS Code", "Vercel", "AI-Assisted Development"],
  },
] as const;

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
    id: "netrex",
    name: "Netrex",
    category: "Portfolio Website",
    description:
      "A premium one-page personal portfolio with a bold editorial design — big typography, playful details and a confident visual identity.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/netrex.png",
    url: "https://netrex-dev.vercel.app",
  },
  {
    id: "pio",
    name: "Pio",
    category: "AI Product",
    description:
      "An AI-powered photo enhancement platform — upload a photo, pick an enhancement or a ready-made template, and get a professionally retouched result.",
    tags: ["Next.js", "TypeScript", "AI"],
    image: "/projects/pio.png",
    url: "https://pio-web-eight.vercel.app",
  },
];

export const services = [
  {
    number: "01",
    title: "Website Development",
    description: "Building modern, responsive, and professional websites.",
    icon: "Globe",
  },
  {
    number: "02",
    title: "Frontend Development",
    description: "Creating interactive and visually polished user interfaces.",
    icon: "Monitor",
  },
  {
    number: "03",
    title: "Landing Page Development",
    description: "Designing and developing attractive landing pages focused on presentation and user engagement.",
    icon: "MousePointerClick",
  },
  {
    number: "04",
    title: "Business Website Development",
    description: "Building professional websites for businesses and organizations.",
    icon: "Briefcase",
  },
  {
    number: "05",
    title: "E-commerce Development",
    description: "Developing modern online shopping experiences and e-commerce platforms.",
    icon: "ShoppingBag",
  },
  {
    number: "06",
    title: "UI Implementation",
    description: "Turning design concepts and reference designs into functional, responsive interfaces.",
    icon: "PenTool",
  },
] as const;

export const workflow = [
  {
    step: "01",
    title: "Discovery",
    description: "Understanding the project requirements, goals, target audience, and overall vision.",
  },
  {
    step: "02",
    title: "Planning & Design",
    description: "Planning the website structure, layout, user experience, and visual direction.",
  },
  {
    step: "03",
    title: "Development",
    description: "Building the actual website, implementing functionality, and making the design responsive.",
  },
  {
    step: "04",
    title: "Testing & Delivery",
    description: "Testing responsiveness, functionality, performance, and fixing issues before delivery.",
  },
] as const;

export const jnx = {
  name: "JNX",
  role: "Co-Founder",
  url: "https://jnx-dev.vercel.app",
  description:
    "JNX is a digital development initiative focused on building modern websites and digital solutions — clean design, premium quality, and products that actually work.",
} as const;
