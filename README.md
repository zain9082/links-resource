# Links Resource — Premium Resource Directory

A futuristic, premium dark-themed resource directory + agency platform, rebuilt from
[linksresource.com](https://linksresource.com). All original content (services, case
studies, reviews, FAQ, pricing, contact) is preserved in `src/lib/data.ts`.

## Tech Stack

- **Next.js 16** (App Router, Server Components, Server Actions)
- **TypeScript**
- **Tailwind CSS v4** (CSS-based theme) + shadcn-style UI primitives
- **Framer Motion** (animations, scroll reveal, parallax)
- **PostgreSQL + Prisma 6**
- **NextAuth v5** (Credentials + optional Google / GitHub)
- **AI chat assistant** (streaming, pluggable provider)

## Getting Started

```bash
npm install
cp .env.example .env   # fill in values
npm run dev            # http://localhost:3000
```

The site runs fully on the in-memory data layer (`src/lib/data.ts`) with **no database
required** for browsing. Auth and persistence need a database.

## Database (optional, for auth + persistence)

```bash
# Start Postgres locally
docker compose up -d

# Push schema + seed content (categories, tags, resources, admin user)
npm run db:push
npm run db:seed

# Inspect data
npm run db:studio
```

Seeded admin: `admin@linksresource.com` / `admin1234`

## Environment Variables

| Variable | Purpose |
|----------|---------|
| `DATABASE_URL` | PostgreSQL connection string |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (SEO) |
| `AUTH_SECRET` | NextAuth secret (`npx auth secret`) |
| `AUTH_GOOGLE_ID/SECRET` | Optional Google OAuth |
| `AUTH_GITHUB_ID/SECRET` | Optional GitHub OAuth |
| `OPENAI_API_KEY` / `ANTHROPIC_API_KEY` | Optional — enables a real LLM in `src/app/api/chat/route.ts` |

> OAuth buttons only appear when their env vars are set. The AI assistant works out of
> the box with a built-in recommendation engine; add an API key to swap in a real LLM.

## Structure

```
src/
  app/                 # routes (home, resources, categories, tags, search,
                       #   submit, about, contact, login, signup, dashboard, admin)
    api/               # chat (streaming), auth, register
    actions/           # server actions
  components/
    home/              # hero, sections, marquee, pricing, faq, cta
    resources/         # explorer (search/filter), resource card
    ai/                # floating streaming assistant
    layout/            # navbar, footer, scroll progress
    backgrounds/       # aurora, particles
    ui/                # button, card, badge, input
  lib/                 # data, types, seo, prisma, utils
prisma/                # schema + seed
```

## Key Features

- Full-screen animated hero (typing effect, particles, mouse parallax, scroll fade)
- Persistent floating AI assistant with streaming responses
- Instant search + advanced filters (category, pricing, sort)
- Resource / category / tag / detail pages (SSG with `generateStaticParams`)
- Admin dashboard (analytics, resources, categories, tags, users, SEO)
- Auth: email/password + optional Google/GitHub, user dashboard
- SEO: dynamic metadata, OG/Twitter cards, JSON-LD, sitemap, robots
- Responsive, glassmorphism design system, reduced-motion support

## Production

```bash
npm run build && npm run start
```
```
