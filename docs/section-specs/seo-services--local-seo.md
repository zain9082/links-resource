# Section spec: /seo-services/local-seo

- **Template:** serviceChild via PageTemplateRenderer → ConfigTemplate
- **URL:** `/seo-services/local-seo`
- **Parent hub:** `/seo-services`
- **Related pages:** `/`, `/content-writing-services`, `/guest-posting-services`
- **Main keyword (CSV):** local seo agency
- **Supporting keywords (CSV):** best local seo services, local citation services, local seo agency uk, local seo company, local seo consultant services, local seo experts, local seo firm, local seo optimisation services, local seo service, local seo service uk, local seo services *, local seo services uk, local seo specialist
- **Audience:** Direct UK business owner
- **Current status:** `published`
- **Page config:** `content/pages/seo-services/local-seo.ts`

## Rendering notes

All sections below use `src/components/templates/page-template.tsx`. The header is `src/components/shared/page-header.tsx`. JSON-LD renders before visible content. Breadcrumbs precede the header and derive their labels from page and parent titles. The first hero block supplies only the header subtitle; its own heading is ignored. Other blocks render in listed order. These length targets reflect the current widths, type sizes, and grid layout; they are editorial guidance, not validation rules. Existing live copy was flattened into paragraph fields, so a filled paragraph may need restructuring. The generic template renders no HTML tables.

## Sections in render order

### 1. hero — Rank in Google Maps and local search

- **Component:** `src/components/templates/page-template.tsx` (ConfigTemplate + PageHeader)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| Eyebrow badge (generated from template; hero.eyebrow ignored) | 2–4 words | Filled; `service Child` |
| H1 (page.h1; hero.heading ignored) | 6–12 words; 45–70 characters | Filled; `Rank in Google Maps and local search` |
| Header subheading (hero.body) | 25–35 words | Filled; `Local SEO Services Rank in Google Maps and local search Local SEO campaigns…` |
| Config-only hero.heading (not rendered) | No copy required | Filled; `Rank in Google Maps and local search` |

- **Rendered item count:** 0; hero block itself returns null.

### 2. richText — Grow Your Brand

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Grow Your Brand` |
| Body paragraph | 30–55 words | Filled; `by partnering with Links Resource Get Free Proposal Now hello@linksresource…` |

### 3. richText — Local SEO that connects search intent to calls

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Local SEO that connects search intent to calls` |
| Body paragraph | 30–55 words | Filled; `Google Business Profile, citations, local pages, and review strategy coordi…` |

### 4. richText — Get found by customers in your area

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Get found by customers in your area` |
| Body paragraph | 30–55 words | Filled; `Google Maps, citations, and localized pages that turn nearby searches into …` |

### 5. richText — Local visibility drives real customers

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Local visibility drives real customers` |
| Body paragraph | 30–55 words | Filled; `Map pack rankings, calls, and qualified leads from customers searching near…` |

### 6. richText — Choose the right local SEO plan

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Choose the right local SEO plan` |
| Body paragraph | 30–55 words | Filled; `Weekly local SEO packages for single-location, city-wide, and multi-locatio…` |

### 7. richText — See your potential monthly leads

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `See your potential monthly leads` |
| Body paragraph | 30–55 words | Filled; `Adjust monthly local search volume and plan tier to estimate potential lead…` |

### 8. process — How our local SEO process works

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `How our local SEO process works` |
| Body paragraph | 20–40 words | Filled; `Audit, optimize, build authority, and track performance with transparent re…` |

- **Rendered item count:** 0; suggested design count: 3 or 6 steps, 3-column grid. Add structured `steps[]` in the page config; body prose does not generate items.
- **Item text slots:** Per step: automatic number; H3 step name 3–6 words; description 18–30 words.

### 9. richText — Everything included

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Everything included` |
| Body paragraph | 30–55 words | Filled; `What's covered in our local SEO campaigns from setup through ongoing optimi…` |

### 10. proof — Local SEO results that matter

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Local SEO results that matter` |
| Body paragraph | 20–40 words | Filled; `Real map visibility, call volume, and lead growth from focused local campai…` |

- **Rendered item count:** 0; suggested design count: 3 or 6 metrics, 3-column grid. Add structured `metrics[]` in the page config; body prose does not generate items.
- **Item text slots:** Per metric: value 1–4 words or number; label 2–6 words. No H3.

### 11. richText — What our clients say

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `What our clients say` |
| Body paragraph | 30–55 words | Filled; `Business owners who grew local visibility, calls, and qualified leads with …` |

### 12. faq — Frequently asked questions

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Frequently asked questions` |
| Body (ignored while FAQs exist) | No visible copy required | Filled; `Everything you need to know about our digital marketing services. Can local…` |

- **Rendered FAQ count:** 6; suggested design count: 4–6. Each FAQ has an H3 question (8–14 words) and answer paragraph (35–65 words).
- **FAQ 1 (filled):** question `Can local SEO help service-area businesses?`; answer `Yes. We build campaigns for both storefront and service-area businesses tar…`
- **FAQ 2 (filled):** question `How quickly can map rankings improve?`; answer `Many businesses see early movement in 4–8 weeks, with stronger consistency …`
- **FAQ 3 (filled):** question `Do you manage Google Business Profile updates?`; answer `Yes. We support profile optimization, updates, and strategic posting guidan…`
- **FAQ 4 (filled):** question `Do you work with multi-location brands?`; answer `Yes. Our Multi-Location plan supports scalable GBP, citations, and local pa…`
- **FAQ 5 (filled):** question `Will I see call and lead tracking?`; answer `Yes. Monthly reports include calls, direction requests, and qualified lead …`
- **FAQ 6 (filled):** question `Can local SEO work with our existing SEO campaigns?`; answer `Yes. Local SEO integrates with broader SEO, content, and link building for …`

### 13. richText — Want more local customers finding you?

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Want more local customers finding you?` |
| Body paragraph | 30–55 words | Filled; `Let's build a local SEO plan tailored to your service areas and growth goal…` |

## After the configured blocks

- **Component:** `src/components/templates/page-template.tsx` / PageInternalLinks.
- **Published child cards:** 0; fixed H2 Explore our services. Three-column cards use child title as H3 (3–8 words) and child metaDescription as body (18–25 words desired). None.
- **Parent hub link:** Part of `SEO Services UK` → `/seo-services`.
- **Published related pills:** 3 of up to 3; fixed H2 Related services; labels are related titles (2–6 words). `/`, `/content-writing-services`, `/guest-posting-services`.
- **Schema:** non-visible Service and BreadcrumbList; FAQPage only if `faqs[]` has entries. Text comes from metadata, titles and FAQ fields.

## Copy action

Write the visible slots above with the CSV keyword used naturally. Verify factual claims. To show cards, steps, plans, metrics or FAQ items, the developer must add the structured arrays to the page config. This spec changes no page data or publication status.
