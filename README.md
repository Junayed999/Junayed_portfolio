# Junayed.Here — Junayed Hossain

A premium personal developer portfolio for **Junayed Hossain** — Developer, Digital Creator, and Co-Founder of JNX.

Built with Next.js 16, TypeScript, Tailwind CSS v4 and Lucide icons. Fully static, no backend, no database.

## Design

- **Theme:** Warm cream-white + luxury deep navy blue, with soft blue ambient lighting.
- **Hero:** Inspired by the Sevora and Mia Carter portfolio references — a large rounded panel, real portrait photograph, floating status cards and a stats row.
- **Sections:** Hero, About, Skills, Featured Projects, Experience, JNX (Co-Founder), Services, Workflow, Contact, Footer.

## Content

Everything editable lives in **`src/data/site.ts`** — personal info, social links, skills, projects, services and workflow. Edit that one file to update the site.

- **Portrait:** `public/portrait.png` (the user's own photograph — never replace with stock/AI imagery).
- **Project previews:** `public/projects/` — real screenshots of the live project sites (Jinary, Netrex, Pio).

## Contact form

The form has no backend. Submitting opens WhatsApp (`wa.me/8801991269926`) with the visitor's message pre-filled — nothing is stored on the site.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (static)
npm run start    # serve the production build
```

## Deploy

Push to GitHub, then import the repo into Vercel. No environment variables are needed — the site is fully static.
