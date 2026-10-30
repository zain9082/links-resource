# Section spec: /guest-posting-services

- **Template:** serviceChild via PageTemplateRenderer → ConfigTemplate
- **URL:** `/guest-posting-services`
- **Parent hub:** `/link-building-services`
- **Related pages:** `/`, `/content-writing-services`, `/link-building-services`
- **Main keyword (CSV):** guest posting services *
- **Supporting keywords (CSV):** guest post outreach, guest post outreach service *, guest post service *, guest post services *, guest post services uk *, guest posting agency *, guest posting service *, guest posting service uk *
- **Audience:** Direct UK business owner
- **Current status:** `published`
- **Page config:** `content/pages/guest-posting-services.ts`

## Rendering notes

All sections below use `src/components/templates/page-template.tsx`. The header is `src/components/shared/page-header.tsx`. JSON-LD renders before visible content. Breadcrumbs precede the header and derive their labels from page and parent titles. The first hero block supplies only the header subtitle; its own heading is ignored. Other blocks render in listed order. These length targets reflect the current widths, type sizes, and grid layout; they are editorial guidance, not validation rules. Existing live copy was flattened into paragraph fields, so a filled paragraph may need restructuring. The generic template renders no HTML tables.

## Sections in render order

### 1. hero — Guest posts that support long-term SEO growth

- **Component:** `src/components/templates/page-template.tsx` (ConfigTemplate + PageHeader)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| Eyebrow badge (generated from template; hero.eyebrow ignored) | 2–4 words | Filled; `service Child` |
| H1 (page.h1; hero.heading ignored) | 6–12 words; 45–70 characters | Filled; `Guest posts that support long-term SEO growth` |
| Header subheading (hero.body) | 25–35 words | Filled; `Guest Posting Services Guest posts that support long-term SEO growth Manual…` |
| Config-only hero.heading (not rendered) | No copy required | Filled; `Guest posts that support long-term SEO growth` |

- **Rendered item count:** 0; hero block itself returns null.

### 2. richText — Grow Your Brand

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Grow Your Brand` |
| Body paragraph | 30–55 words | Filled; `by partnering with Links Resource Get Free Proposal Now hello@linksresource…` |

### 3. richText — How we select guest post publishers

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `How we select guest post publishers` |
| Body paragraph | 30–55 words | Filled; `Every placement is evaluated for niche relevance, editorial quality, traffi…` |

### 4. richText — Niche-relevant placements for growing brands

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Niche-relevant placements for growing brands` |
| Body paragraph | 30–55 words | Filled; `Start with a proven outreach package or build a custom campaign tailored to…` |

### 5. richText — Estimate your guest posting investment

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Estimate your guest posting investment` |
| Body paragraph | 30–55 words | Filled; `Adjust link quantity and quality tier to estimate your campaign cost. Campa…` |

### 6. richText — How our guest posting works

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `How our guest posting works` |
| Body paragraph | 30–55 words | Filled; `From niche research to live placements — a clear, transparent outreach work…` |

### 7. richText — Examples of websites we work with

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Examples of websites we work with` |
| Body paragraph | 30–55 words | Filled; `A sample of real publications in our outreach network — vetted for relevanc…` |

### 8. richText — Every guest post includes

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Every guest post includes` |
| Body paragraph | 30–55 words | Filled; `Quality controls and deliverables built into every guest posting campaign. …` |

### 9. proof — Results from content placements

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Results from content placements` |
| Body paragraph | 20–40 words | Filled; `Guest posting campaigns that lifted traffic, keyword visibility, and author…` |

- **Rendered item count:** 0; suggested design count: 3 or 6 metrics, 3-column grid. Add structured `metrics[]` in the page config; body prose does not generate items.
- **Item text slots:** Per metric: value 1–4 words or number; label 2–6 words. No H3.

### 10. richText — The experts behind your growth

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `The experts behind your growth` |
| Body paragraph | 30–55 words | Filled; `Outreach specialists, strategists, and campaign managers dedicated to your …` |

### 11. proof — Built for safe, lasting results

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Built for safe, lasting results` |
| Body paragraph | 20–40 words | Filled; `White-hat outreach principles that protect your rankings and compound growt…` |

- **Rendered item count:** 0; suggested design count: 3 or 6 metrics, 3-column grid. Add structured `metrics[]` in the page config; body prose does not generate items.
- **Item text slots:** Per metric: value 1–4 words or number; label 2–6 words. No H3.

### 12. faq — Frequently asked questions

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Frequently asked questions` |
| Body (ignored while FAQs exist) | No visible copy required | Filled; `Everything you need to know about our digital marketing services. Do you us…` |

- **Rendered FAQ count:** 3; suggested design count: 4–6. Each FAQ has an H3 question (8–14 words) and answer paragraph (35–65 words).
- **FAQ 1 (filled):** question `Do you use private blog networks?`; answer `No. We focus on real outreach and editorial placements on genuine websites.`
- **FAQ 2 (filled):** question `Can I review sites before publishing?`; answer `Yes. We can provide a pre-approval workflow based on your campaign package.`
- **FAQ 3 (filled):** question `Is guest posting safe for long-term SEO?`; answer `Yes, when done ethically with relevance and quality controls, which is exac…`

### 13. cta — Ready to grow your business?

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Ready to grow your business?` |
| Body paragraph | 18–30 words | Filled; `Let's build a guest posting campaign designed around your niche, authority …` |
| CTA button label | 2–5 words; 12–28 characters | Filled; `Contact us` |

- **Button destination:** `/contact`; arrow icon fixed.

## After the configured blocks

- **Component:** `src/components/templates/page-template.tsx` / PageInternalLinks.
- **Published child cards:** 0; fixed H2 Explore our services. Three-column cards use child title as H3 (3–8 words) and child metaDescription as body (18–25 words desired). None.
- **Parent hub link:** Part of `Link Building Services` → `/link-building-services`.
- **Published related pills:** 3 of up to 3; fixed H2 Related services; labels are related titles (2–6 words). `/`, `/content-writing-services`, `/link-building-services`.
- **Schema:** non-visible Service and BreadcrumbList; FAQPage only if `faqs[]` has entries. Text comes from metadata, titles and FAQ fields.

## Copy action

Write the visible slots above with the CSV keyword used naturally. Verify factual claims. To show cards, steps, plans, metrics or FAQ items, the developer must add the structured arrays to the page config. This spec changes no page data or publication status.
