# Section spec: /white-label/link-building

- **Template:** whiteLabel via PageTemplateRenderer → ConfigTemplate
- **URL:** `/white-label/link-building`
- **Parent hub:** `/white-label`
- **Related pages:** `/`, `/content-writing-services`, `/guest-posting-services`
- **Main keyword (CSV):** white label link building
- **Supporting keywords (CSV):** link building services for agencies *, white label backlinks, white label guest posting *, white label link building agency *, white label link building service, white label link building uk *
- **Audience:** White-label agency
- **Current status:** `published`
- **Page config:** `content/pages/white-label/link-building.ts`

## Rendering notes

All sections below use `src/components/templates/page-template.tsx`. The header is `src/components/shared/page-header.tsx`. JSON-LD renders before visible content. Breadcrumbs precede the header and derive their labels from page and parent titles. The first hero block supplies only the header subtitle; its own heading is ignored. Other blocks render in listed order. These length targets reflect the current widths, type sizes, and grid layout; they are editorial guidance, not validation rules. Existing live copy was flattened into paragraph fields, so a filled paragraph may need restructuring. The generic template renders no HTML tables.

## Sections in render order

### 1. hero — Editorial link building for authority growth

- **Component:** `src/components/templates/page-template.tsx` (ConfigTemplate + PageHeader)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| Eyebrow badge (generated from template; hero.eyebrow ignored) | 2–4 words | Filled; `white Label` |
| H1 (page.h1; hero.heading ignored) | 6–12 words; 45–70 characters | Filled; `Editorial link building for authority growth` |
| Header subheading (hero.body) | 25–35 words | Filled; `Link Building Services Editorial link building for authority growth High-qu…` |
| Config-only hero.heading (not rendered) | No copy required | Filled; `Editorial link building for authority growth` |

- **Rendered item count:** 0; hero block itself returns null.

### 2. richText — Grow Your Brand

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Grow Your Brand` |
| Body paragraph | 30–55 words | Filled; `by partnering with Links Resource Get Free Proposal Now hello@linksresource…` |

### 3. richText — White-label fulfilment without client friction

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `White-label fulfilment without client friction` |
| Body paragraph | 30–55 words | Filled; `Built for SEO agencies that need reliable editorial delivery, confidential …` |

### 4. richText — High-authority placements for serious brands

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `High-authority placements for serious brands` |
| Body paragraph | 30–55 words | Filled; `High-quality editorial links for agencies and brands that need reliable, sc…` |

### 5. pricing — Estimate your white-label campaign cost

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Estimate your white-label campaign cost` |
| Body paragraph | 20–40 words | Filled; `Adjust link quantity and authority tier to estimate your white-label fulfil…` |

- **Rendered item count:** 0; suggested design count: 3 plans, 3-column grid. Add structured `plans[]` in the page config; body prose does not generate items.
- **Item text slots:** Per plan: H3 name 1–4 words; description 20–35 words. No price, bullet, or button slots.

### 6. richText — How our editorial outreach works

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `How our editorial outreach works` |
| Body paragraph | 30–55 words | Filled; `A strict, transparent process designed for agency delivery and client-ready…` |

### 7. richText — Editorial outreach across industries

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Editorial outreach across industries` |
| Body paragraph | 30–55 words | Filled; `We work with agencies and brands across SaaS, finance, e-commerce, and more…` |

### 8. richText — Examples of websites we work with

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Examples of websites we work with` |
| Body paragraph | 30–55 words | Filled; `Take a look at some of the high-authority sites where we've secured placeme…` |

### 9. richText — Every editorial placement includes

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Every editorial placement includes` |
| Body paragraph | 30–55 words | Filled; `Quality controls built into every white-label delivery cycle. Manual outrea…` |

### 10. proof — Results from content placements

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Results from content placements` |
| Body paragraph | 20–40 words | Filled; `How our white-label campaigns helped agencies scale client traffic and auth…` |

- **Rendered item count:** 0; suggested design count: 3 or 6 metrics, 3-column grid. Add structured `metrics[]` in the page config; body prose does not generate items.
- **Item text slots:** Per metric: value 1–4 words or number; label 2–6 words. No H3.

### 11. richText — The experts behind your growth

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `The experts behind your growth` |
| Body paragraph | 30–55 words | Filled; `Experienced SEO and outreach specialists supporting agency growth programs.…` |

### 12. proof — Built for safe, lasting results

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Built for safe, lasting results` |
| Body paragraph | 20–40 words | Filled; `White-hat practices that protect client sites and deliver long-term value. …` |

- **Rendered item count:** 0; suggested design count: 3 or 6 metrics, 3-column grid. Add structured `metrics[]` in the page config; body prose does not generate items.
- **Item text slots:** Per metric: value 1–4 words or number; label 2–6 words. No H3.

### 13. cta — Ready to grow your business?

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Ready to grow your business?` |
| Body paragraph | 18–30 words | Filled; `Get started with white-label link building designed for agency scale and cl…` |
| CTA button label | 2–5 words; 12–28 characters | Filled; `Contact us` |

- **Button destination:** `/contact`; arrow icon fixed.

## After the configured blocks

- **Component:** `src/components/templates/page-template.tsx` / PageInternalLinks.
- **Published child cards:** 0; fixed H2 Explore our services. Three-column cards use child title as H3 (3–8 words) and child metaDescription as body (18–25 words desired). None.
- **Parent hub link:** Part of `White Label Digital Marketing Agency` → `/white-label`.
- **Published related pills:** 3 of up to 3; fixed H2 Related services; labels are related titles (2–6 words). `/`, `/content-writing-services`, `/guest-posting-services`.
- **Schema:** non-visible Service and BreadcrumbList; FAQPage only if `faqs[]` has entries. Text comes from metadata, titles and FAQ fields.

## Copy action

Write the visible slots above with the CSV keyword used naturally. Verify factual claims. To show cards, steps, plans, metrics or FAQ items, the developer must add the structured arrays to the page config. This spec changes no page data or publication status.
