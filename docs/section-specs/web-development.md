# Section spec: /web-development

- **Template:** webDev via PageTemplateRenderer → ConfigTemplate
- **URL:** `/web-development`
- **Parent hub:** `/`
- **Related pages:** `/content-writing-services`, `/link-building-services`, `/seo-services`
- **Main keyword (CSV):** custom website development services
- **Supporting keywords (CSV):** b2b website development services, cms development services, cms web development services, consultant website design, consulting web design, web development agency london, web development company uk *, web development services uk *, website and seo services, website development company uk *
- **Audience:** Direct UK business owner
- **Current status:** `published`
- **Page config:** `content/pages/web-development.ts`

## Rendering notes

All sections below use `src/components/templates/page-template.tsx`. The header is `src/components/shared/page-header.tsx`. JSON-LD renders before visible content. Breadcrumbs precede the header and derive their labels from page and parent titles. The first hero block supplies only the header subtitle; its own heading is ignored. Other blocks render in listed order. These length targets reflect the current widths, type sizes, and grid layout; they are editorial guidance, not validation rules. Existing live copy was flattened into paragraph fields, so a filled paragraph may need restructuring. The generic template renders no HTML tables.

## Sections in render order

### 1. hero — Conversion-focused websites built to rank and perform

- **Component:** `src/components/templates/page-template.tsx` (ConfigTemplate + PageHeader)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| Eyebrow badge (generated from template; hero.eyebrow ignored) | 2–4 words | Filled; `web Dev` |
| H1 (page.h1; hero.heading ignored) | 6–12 words; 45–70 characters | Filled; `Conversion-focused websites built to rank and perform` |
| Header subheading (hero.body) | 25–35 words | Filled; `Web Development Conversion-focused websites built to rank and perform Next.…` |
| Config-only hero.heading (not rendered) | No copy required | Filled; `Conversion-focused websites built to rank and perform` |

- **Rendered item count:** 0; hero block itself returns null.

### 2. richText — Websites built for real business goals

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Websites built for real business goals` |
| Body paragraph | 30–55 words | Filled; `Whether you need a new marketing site, a scalable web app, or a mobile prod…` |

### 3. richText — SEO-friendly builds with conversion in mind

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `SEO-friendly builds with conversion in mind` |
| Body paragraph | 30–55 words | Filled; `Performance, structure, and UX decisions are made around how the site will …` |

### 4. richText — Modern stack, maintainable code

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Modern stack, maintainable code` |
| Body paragraph | 30–55 words | Filled; `We choose technologies based on speed, SEO readiness, scalability, and how …` |

### 5. richText — Engineering led by Malik Zain

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Engineering led by Malik Zain` |
| Body paragraph | 30–55 words | Filled; `Full-stack development for modern websites, APIs, and mobile products — wit…` |

### 6. richText — A clear path from brief to launch

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `A clear path from brief to launch` |
| Body paragraph | 30–55 words | Filled; `Every project follows structured stages so you always know what is happenin…` |

### 7. pricing — Transparent packages for every project stage

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Transparent packages for every project stage` |
| Body paragraph | 20–40 words | Filled; `From starter marketing sites to scalable MERN builds — scoped clearly befor…` |

- **Rendered item count:** 0; suggested design count: 3 plans, 3-column grid. Add structured `plans[]` in the page config; body prose does not generate items.
- **Item text slots:** Per plan: H3 name 1–4 words; description 20–35 words. No price, bullet, or button slots.

### 8. richText — Project examples coming soon

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Project examples coming soon` |
| Body paragraph | 30–55 words | Filled; `These slots are ready for verified client projects. Add live URLs, before/a…` |

### 9. richText — What you receive at launch

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `What you receive at launch` |
| Body paragraph | 30–55 words | Filled; `Code, structure, documentation, and handover support — not just a visual mo…` |

### 10. richText — Built for launch — and easy to manage

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Built for launch — and easy to manage` |
| Body paragraph | 30–55 words | Filled; `Development does not end at deployment. We plan for editing, testing, hando…` |

### 11. faq — Frequently asked questions

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Frequently asked questions` |
| Body (ignored while FAQs exist) | No visible copy required | Filled; `Everything you need to know about our digital marketing services. Do you bu…` |

- **Rendered FAQ count:** 4; suggested design count: 4–6. Each FAQ has an H3 question (8–14 words) and answer paragraph (35–65 words).
- **FAQ 1 (filled):** question `Do you build with the MERN stack?`; answer `Yes. We use MongoDB, Express, React, and Node.js for full-stack web applica…`
- **FAQ 2 (filled):** question `Can you build React Native mobile apps?`; answer `Absolutely. Malik Zain leads React Native development for iOS and Android w…`
- **FAQ 3 (filled):** question `Will the website be mobile optimized?`; answer `Every build is responsive and tested for mobile performance, usability, and…`
- **FAQ 4 (filled):** question `Do you support existing products?`; answer `Yes. We can audit, refactor, or extend existing React, Node.js, and React N…`

### 12. richText — Discuss your website project with our team

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Discuss your website project with our team` |
| Body paragraph | 30–55 words | Filled; `Share your goals, current site, and timeline. We will recommend the right s…` |

## After the configured blocks

- **Component:** `src/components/templates/page-template.tsx` / PageInternalLinks.
- **Published child cards:** 0; fixed H2 Explore our services. Three-column cards use child title as H3 (3–8 words) and child metaDescription as body (18–25 words desired). None.
- **Parent hub link:** Part of `SEO Agency UK` → `/`.
- **Published related pills:** 3 of up to 3; fixed H2 Related services; labels are related titles (2–6 words). `/content-writing-services`, `/link-building-services`, `/seo-services`.
- **Schema:** non-visible Service and BreadcrumbList; FAQPage only if `faqs[]` has entries. Text comes from metadata, titles and FAQ fields.

## Copy action

Write the visible slots above with the CSV keyword used naturally. Verify factual claims. To show cards, steps, plans, metrics or FAQ items, the developer must add the structured arrays to the page config. This spec changes no page data or publication status.
