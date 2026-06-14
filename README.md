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
# Start Postgres (Docker) — uses port 5433 to avoid conflicts with other local DBs
npm run db:up

# One-command setup: start Docker, push schema, seed data
npm run db:setup

# Or step by step:
npm run db:push
npm run db:seed

# Inspect data
npm run db:studio
```

**Important:** Set `DATABASE_URL` in `.env` to this project only:
`postgresql://postgres:postgres@localhost:5433/links_resource`

Seeded admin: `admin@linksresource.com` — password is `SEED_ADMIN_PASSWORD` in `.env`

## Environment Variables

| Variable | Purpose |
|----------|---------|
| `DATABASE_URL` | PostgreSQL connection string |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (SEO) — e.g. `https://linksresource.com` |
| `AUTH_SECRET` | NextAuth secret (`npx auth secret`) |
| `SEED_ADMIN_PASSWORD` | Password for seeded admin user (`npm run db:seed`) |
| `GOOGLE_SITE_VERIFICATION` | Google Search Console HTML tag verification code |
| `AUTH_GOOGLE_ID/SECRET` | Optional Google OAuth |
| `AUTH_GITHUB_ID/SECRET` | Optional GitHub OAuth |

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

### Custom domain (linksresource.com)

1. Add domain in Vercel → Project Settings → Domains
2. Set `NEXT_PUBLIC_SITE_URL=https://linksresource.com` in Vercel env
3. Redeploy

### Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property `https://linksresource.com`
3. Choose **HTML tag** verification → copy the `content` value
4. Set `GOOGLE_SITE_VERIFICATION=<content-value>` in Vercel env and redeploy
5. Submit sitemap: `https://linksresource.com/sitemap.xml`
