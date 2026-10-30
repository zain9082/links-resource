# Section spec: /white-label

- **Template:** whiteLabel via PageTemplateRenderer → ConfigTemplate
- **URL:** `/white-label`
- **Parent hub:** `/`
- **Related pages:** `/content-writing-services`, `/link-building-services`, `/seo-services`
- **Main keyword (CSV):** white label digital marketing agency *
- **Supporting keywords (CSV):** —
- **Audience:** White-label agency
- **Current status:** `draft`
- **Page config:** `content/pages/white-label.ts`

## Rendering notes

All sections below use `src/components/templates/page-template.tsx`. The header is `src/components/shared/page-header.tsx`. JSON-LD renders before visible content. Breadcrumbs precede the header and derive their labels from page and parent titles. The first hero block supplies only the header subtitle; its own heading is ignored. Other blocks render in listed order. These length targets reflect the current widths, type sizes, and grid layout; they are editorial guidance, not validation rules. Existing live copy was flattened into paragraph fields, so a filled paragraph may need restructuring. The generic template renders no HTML tables.

## Sections in render order

### 1. hero — White label digital marketing agency for partners

- **Component:** `src/components/templates/page-template.tsx` (ConfigTemplate + PageHeader)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| Eyebrow badge (generated from template; hero.eyebrow ignored) | 2–4 words | Filled; `white Label` |
| H1 (page.h1; hero.heading ignored) | 6–12 words; 45–70 characters | Filled; `White label digital marketing agency for partners` |
| Header subheading (hero.body) | 25–35 words | [COPY PENDING]; [COPY PENDING] |
| Config-only hero.heading (not rendered) | No copy required | Filled; `White label digital marketing agency for partners` |

- **Rendered item count:** 0; hero block itself returns null.

### 2. problem — The challenge

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `The challenge` |
| Body paragraph | 30–55 words | [COPY PENDING]; [COPY PENDING] |

### 3. servicesGrid — What is included

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `What is included` |
| Body paragraph | 20–40 words | [COPY PENDING]; [COPY PENDING] |

- **Rendered item count:** 0; suggested design count: 3 or 6 cards, 3-column grid. Add structured `items[]` in the page config; body prose does not generate items.
- **Item text slots:** Per card: fixed Service badge; H3 title 3–6 words; description 18–25 words; optional href with fixed Learn more label.

### 4. process — How it works

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `How it works` |
| Body paragraph | 20–40 words | [COPY PENDING]; [COPY PENDING] |

- **Rendered item count:** 0; suggested design count: 3 or 6 steps, 3-column grid. Add structured `steps[]` in the page config; body prose does not generate items.
- **Item text slots:** Per step: automatic number; H3 step name 3–6 words; description 18–30 words.

### 5. proof — Proof and results

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Proof and results` |
| Body paragraph | 20–40 words | [COPY PENDING]; [COPY PENDING] |

- **Rendered item count:** 0; suggested design count: 3 or 6 metrics, 3-column grid. Add structured `metrics[]` in the page config; body prose does not generate items.
- **Item text slots:** Per metric: value 1–4 words or number; label 2–6 words. No H3.

### 6. pricing — Pricing

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Pricing` |
| Body paragraph | 20–40 words | [COPY PENDING]; [COPY PENDING] |

- **Rendered item count:** 0; suggested design count: 3 plans, 3-column grid. Add structured `plans[]` in the page config; body prose does not generate items.
- **Item text slots:** Per plan: H3 name 1–4 words; description 20–35 words. No price, bullet, or button slots.

### 7. faq — Frequently asked questions

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Frequently asked questions` |
| Body paragraph | 20–40 words | [COPY PENDING]; [COPY PENDING] |

- **Rendered FAQ count:** 0; suggested design count: 4–6. Each FAQ has an H3 question (8–14 words) and answer paragraph (35–65 words).
- Add entries to `faqs[]` to render FAQ cards; currently only the block body appears.

### 8. cta — Start a conversation

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Start a conversation` |
| Body paragraph | 18–30 words | [COPY PENDING]; [COPY PENDING] |
| CTA button label | 2–5 words; 12–28 characters | Filled; `Contact us` |

- **Button destination:** `/contact`; arrow icon fixed.

## After the configured blocks

- **Component:** `src/components/templates/page-template.tsx` / PageInternalLinks.
- **Published child cards:** 1; fixed H2 Explore our services. Three-column cards use child title as H3 (3–8 words) and child metaDescription as body (18–25 words desired). `/white-label/link-building`.
- **Parent hub link:** Part of `SEO Agency UK` → `/`.
- **Published related pills:** 3 of up to 3; fixed H2 Related services; labels are related titles (2–6 words). `/content-writing-services`, `/link-building-services`, `/seo-services`.
- **Schema:** non-visible Service and BreadcrumbList; FAQPage only if `faqs[]` has entries. Text comes from metadata, titles and FAQ fields.

## Copy action

Write the visible slots above with the CSV keyword used naturally. Verify factual claims. To show cards, steps, plans, metrics or FAQ items, the developer must add the structured arrays to the page config. This spec changes no page data or publication status.
