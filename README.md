# MD Samrat — Portfolio

A premium, single-page portfolio built with Next.js App Router, TypeScript, Tailwind CSS and Framer Motion.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react + react-icons (technology logos)
- class-variance-authority + tailwind-merge (shadcn/ui-style button primitive)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/            App Router pages, layout, and SEO routes (sitemap, robots, icon, OG image)
components/     Section components (hero, about, skills, projects, services, contact, footer)
components/ui/  Reusable primitives (button, magnetic wrapper, tilt card, reveal animations)
data/           Content: nav items, skills, projects, services
hooks/          useActiveSection, useScrolled
lib/            cn() helper and scroll utility
types/          Shared TypeScript interfaces
```

## Before you deploy

- Add your real resume PDF at `public/resume.pdf` — the "Download Resume" button links there.
- Update `SITE_URL` in `app/layout.tsx` and the sitemap/robots routes once you have a real domain.
- Swap the profile and project screenshots in `data/projects.ts` / `components/hero.tsx` for your own hosted images, or keep the existing links.
- The contact form validates input client-side and opens the visitor's email client pre-filled with their message. Wire it to an API route (Resend, Formspree, etc.) if you want server-side delivery instead.

## Deploying to Vercel

Push this repository to GitHub and import it in Vercel — no additional configuration is required.
