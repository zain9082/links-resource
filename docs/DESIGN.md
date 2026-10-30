# Links Resource design system

This records the existing design used by the homepage and link building page. Source of truth: `src/app/globals.css`, `src/app/layout.tsx`, and the components below. Templates should reuse these tokens and components without adding colours or fonts.

## Colour tokens

| Token | Value | Use |
| --- | --- | --- |
| `bg-900` | `#050816` | page background |
| `bg-800` | `#0b1120` | dark panels |
| `bg-700` | `#111827` | raised panels |
| `purple` | `#8b5cf6` | primary brand/action |
| `purple-2` | `#a855f7` | accent text |
| `blue` | `#3b82f6` | secondary brand/action |
| `cyan` | `#06b6d4` | blue gradient endpoint |
| `pink` | `#ec4899` | CTA accent |
| `foreground` | `#ffffff` | main text |
| `muted` | `#94a3b8` | secondary text |
| `surface` | `rgba(255,255,255,.04)` | glass card fill |
| `surface-strong` | `rgba(255,255,255,.08)` | prominent glass fill |
| `border-glow` | `rgba(139,92,246,.35)` | accent border |

Existing light theme overrides: `bg-900 #f8fafc`, `bg-800 #eef2ff`, `bg-700 #e2e8f0`, `foreground #0f172a`, `muted #64748b`. Common light text is `#334155`. Existing orange gradient `#f97316 → #fb923c` is defined but is not a template accent.

## Gradients, backgrounds and effects

- `.bg-gradient-purple`: `120deg #8b5cf6 → #a855f7`; `.bg-gradient-blue`: `120deg #3b82f6 → #06b6d4`; `.bg-gradient-pink`: `120deg #ec4899 → #8b5cf6`.
- `.text-gradient`: `120deg #c4b5fd → #8b5cf6 → #06b6d4`; `.text-gradient-pink`: `#ec4899 → #8b5cf6`. Homepage H1 uses `.cursor-gradient-accent` with the existing pink, purple, blue, and cyan stops.
- `.cta-live-gradient` animates translucent purple, blue, pink and cyan. `.grid-bg` uses a 60px grid of `rgba(148,163,184,.06)`.
- `AuroraBackground` supplies ambient page colour; `.glass` uses 16px backdrop blur and 8% white border; `.glass-strong` uses 24px blur and 12% border. `.glow-border` draws a purple/blue/pink gradient outline. `.shimmer` uses a white translucent sweep.
- `glow-shadow` uses a purple 1px ring and `0 18px 60px -18px rgba(139,92,246,.55)`; `glow-shadow-blue` uses `0 18px 60px -18px rgba(6,182,212,.6)`. Do not add shadow styles for templates.

## Typography and layout

- Font: **Inter** through `next/font/google` (`--font-sans`); **JetBrains Mono** is loaded as `--font-mono` for code/data. Body fallback is `system-ui, sans-serif`. No other font.
- Page hero H1: `text-4xl sm:text-5xl`, bold, tight tracking, max width `3xl`. Homepage gradient H1 reaches `lg:text-6xl` with 1.08 line height.
- Section H2 via `SectionHeading`: `text-3xl sm:text-4xl md:text-5xl`, bold, max width `2xl`. Template block H2 uses `text-2xl sm:text-3xl`, semibold. Card H3 is `text-lg` or `text-xl`; body is `text-sm` to `text-base`, muted, relaxed leading. Eyebrows use `text-xs`, uppercase, wide tracking.
- `.container-wide`: max width **1280px**, side padding **1.25rem**. Hero starts after fixed nav at `pt-32` (mobile) / `pt-36`; homepage starts `pt-28 sm:pt-32`. Section rhythm is `py-24` on homepage and `py-10` for template blocks. Cards use gaps `4–6` and responsive grids: one column mobile, two at `sm` or `md`, three at `md` for service/step/metric/plan blocks.
- Radii: token `xl 1.25rem`, `2xl 1.75rem`; existing components commonly use Tailwind `rounded-xl`, `rounded-2xl`, `rounded-3xl`, and pill `rounded-full`.
- Animations: aurora 22s, gradient shift 8s, float 7s, glow pulse 4s, marquee 38s, shimmer 2.4s. Reduced motion query removes animation/transition duration.

## Component inventory

| File | Usage |
| --- | --- |
| `src/components/ui/button.tsx` | Primary purple, blue, glass, outline, ghost and link buttons; `sm`, `md`, `lg`, icon sizes |
| `src/components/ui/card.tsx` | Glass card, header, title, description, content and footer primitives |
| `src/components/ui/badge.tsx` | Glass/brand eyebrow and category pills |
| `src/components/ui/input.tsx` | Form fields |
| `src/components/shared/page-header.tsx` | Centered eyebrow, H1 and subtitle for inner pages |
| `src/components/shared/section-heading.tsx` | Eyebrow, H2 and optional subtitle for large sections |
| `src/components/shared/reveal.tsx` | Existing scroll reveal wrapper |
| `src/components/shared/breadcrumbs.tsx` | Visible breadcrumb navigation |
| `src/components/shared/icon.tsx` | Lucide icon name adapter |
| `src/components/backgrounds/aurora-background.tsx` | Site-wide ambient background |
| `src/components/backgrounds/particles.tsx` | Homepage hero particles |
| `src/components/templates/page-template.tsx` | Nine page templates, original blocks, schema and internal links |
| `src/components/templates/extended-blocks.tsx` | Additional data, proof, process and CTA blocks |
| `src/lib/hub-groups.ts` | Hub card grouping, including the six UK location regions |
| `src/components/layout/navbar.tsx` | Fixed glass header with focused dropdowns and mobile accordions |
| `src/components/layout/footer.tsx` | Five curated footer columns and legal links |
| `src/components/home/*.tsx` | Custom homepage hero, cards, process, proof, FAQ and CTA patterns |
| `src/components/link-building/view-all-sites.tsx` | Publication preview heading and CTAs |
| `src/components/link-building/publications-table.tsx` | Responsive data table in glass container |
| `src/components/case-studies/case-study-card.tsx` | Metric proof card with image panel |

## Template rules

Use the components and utilities above for `serviceHub`, `serviceChild`, `whiteLabel`, `industry`, `location`, `ppc`, `webDev`, `blogGuide`, and `caseStudies`. Each config's `sections` array defines its own blocks and render order; templates do not inject a default section set. Draft placeholder sections stay in place until copy is written. Long copy wraps inside cards; data tables scroll horizontally at narrow widths. Copy lengths and item counts for existing sections are in `docs/section-specs/`.

## Navigation placement

`docs/new-structure.csv` has a `Nav Placement` column. `header` means a direct header dropdown, bottom dropdown link or top-level link; `footer` means one of the curated footer columns or the brand link; `header + footer` means both; `hub only` means the page is reached through its parent hub's child cards. Draft links are shown in navigation only while `SHOW_DRAFTS=true`.

| Area | Links |
| --- | --- |
| Header SEO | SEO Services, Local SEO, Technical SEO, SEO Audit, Ecommerce SEO, AI SEO Agency; Industries and Locations at the bottom |
| Header Link Building | Link Building Services, Guest Posting, Niche Edits, Blogger Outreach, Digital PR, Packages |
| Header For agencies | White Label, White Label SEO, SEO Reseller, White Label Link Building, White Label PPC, White Label Web Development |
| Header More Services | PPC Management, Web Development, Content Writing |
| Header direct | Pricing, Case Studies, Get Free SEO Audit CTA |
| Footer | Services, For Agencies, Industries (hub + five), Locations (hub + six), Company, legal links |
| Location hub | London, South East, South West, Midlands, North, Scotland groups |

## Block library

All blocks use the colour, typography, card and button patterns above. The first ten render in `src/components/templates/page-template.tsx`; the additional blocks render in `src/components/templates/extended-blocks.tsx`. Every block supports `heading` and `body`, and the `hero` also supports an eyebrow. The page's `faqs` array supplies FAQ entries.

| Block | Content slots and presentation |
| --- | --- |
| `hero` | Eyebrow, H1 from page config, body in the existing page header |
| `problem`, `richText` | H2 and body; problem uses a strong glass panel |
| `servicesGrid` | Service cards with title, description, optional link |
| `process` | Ordered step cards |
| `proof` | Metric cards |
| `pricing` | Plan cards |
| `comparison` | Side-by-side comparison cards |
| `faq` | Page FAQ question and answer cards |
| `cta` | Strong glass CTA with button label and URL |
| `pricingTable` | Column headings and rows in a horizontally scrollable table |
| `packageCards` | Package name, optional price, description, features and link |
| `comparisonTable` | Column headings and rows in a horizontally scrollable table |
| `publicationTable` | Existing publications table, with an optional row limit |
| `stats` | Responsive metric cards |
| `caseStudyHighlight` | Study title, summary, metrics and optional link |
| `testimonials` | Quote, name and optional role cards |
| `logos` | Responsive named logo tiles |
| `localProof` | City or area chips in a glass card |
| `industryProblems` | Industry challenge cards with title and description |
| `resellerProcess` | Ordered agency fulfilment steps |
| `deliverablesList` | Checked list of deliverables |
| `timeline` | Ordered milestone cards |
| `ctaBanner` | Strong glass CTA with button label and URL |
