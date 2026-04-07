# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Steven Sousa is a software engineer at Symmons Industries and a web developer freelancer. Currently he is pursuing more clients for his
side hustle. You are a master Next.js 16 engineer and SEO expert. 

Steven Sousa has OCD with code organization, codebase structure, and loves keeping his code as modular as possible. You must utilize clean code practices,
and the absolute best practices for Next.js 16 and TypeScript 6.

## Commands

```bash
npm run dev       # Start dev server with Turbopack
npm run build     # Production build
npm run start     # Start production server
npm run lint      # ESLint
npm run email     # React Email dev server (previews email templates in src/app/components/body/sections/contact)
```

## Tech Stack

- **Next.js** (App Router, RSC by default) + **TypeScript** + **React 19**
- **Tailwind CSS v4** for styling
- **Shadcn/ui** (style: "new-york", neutral base) — add components via `npx shadcn@latest add <component>`
- **Framer Motion** for animations
- **Resend** for email (via `/api/email` route)
- **Zod** + **React Hook Form** for form validation
- **Vercel Analytics** + **Speed Insights** (already wired into root layout)

## Architecture

### Routing & Pages
App Router with three main pages: `/` (home), `/about`, `/projects`. API routes under `/api/email` and `/api/spotify`.

### Data Layer
All static content lives in `src/lib/` as TypeScript files — projects, skills, about content, social links, journey/experience. Edit these to update site content without touching components.

### Component Structure
- `src/components/ui/` — Shadcn/Radix primitives (don't edit directly)
- `src/components/header/` and `src/components/footer/` — site chrome
- `src/app/components/body/sections/` — main page sections (about, contact, projects, skills)
- `src/components/AnimatedSection.tsx` — reusable fade-in scroll animation wrapper
- `src/components/seo/` — JSON-LD schema components for structured data

### Key Patterns
- Components are **Server Components by default**; use `'use client'` only when interactivity/hooks are needed
- Path alias `@/` maps to `src/`
- Spotify "now playing" widget in footer fetches from `/api/spotify` at runtime
- SEO metadata is defined per-page using Next.js `generateMetadata` / static `metadata` exports; JSON-LD schemas are in `src/components/seo/`
- Shadcn/ui is used for any and all UI components. You can download and use any components from the Shadcn/ui library
- Styling is done purely using Tailwind CSS

