# Section spec: /content-writing-services

- **Template:** serviceChild via PageTemplateRenderer → ConfigTemplate
- **URL:** `/content-writing-services`
- **Parent hub:** `/`
- **Related pages:** `/link-building-services`, `/seo-services`, `/web-development`
- **Main keyword (CSV):** seo content writing services
- **Supporting keywords (CSV):** b2b content writing service, b2b content writing services, case study writing services, cheap copywriting services, content writing agency uk *, content writing company, content writing prices, content writing services, landing page copywriting service, landing page copywriting services, legal seo writer, saas content writing firm, saas content writing services, seo copywriting services *, tech writing services, technical writing services, whitepaper writing services
- **Audience:** Direct UK business owner
- **Current status:** `published`
- **Page config:** `content/pages/content-writing-services.ts`

## Rendering notes

All sections below use `src/components/templates/page-template.tsx`. The header is `src/components/shared/page-header.tsx`. JSON-LD renders before visible content. Breadcrumbs precede the header and derive their labels from page and parent titles. The first hero block supplies only the header subtitle; its own heading is ignored. Other blocks render in listed order. These length targets reflect the current widths, type sizes, and grid layout; they are editorial guidance, not validation rules. Existing live copy was flattened into paragraph fields, so a filled paragraph may need restructuring. The generic template renders no HTML tables.

## Sections in render order

### 1. hero — Rank-ready content that helps businesses grow faster

- **Component:** `src/components/templates/page-template.tsx` (ConfigTemplate + PageHeader)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| Eyebrow badge (generated from template; hero.eyebrow ignored) | 2–4 words | Filled; `service Child` |
| H1 (page.h1; hero.heading ignored) | 6–12 words; 45–70 characters | Filled; `Rank-ready content that helps businesses grow faster` |
| Header subheading (hero.body) | 25–35 words | Filled; `Content Writing Services Rank-ready content that helps businesses grow fast…` |
| Config-only hero.heading (not rendered) | No copy required | Filled; `Rank-ready content that helps businesses grow faster` |

- **Rendered item count:** 0; hero block itself returns null.

### 2. richText — Grow Your Brand

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Grow Your Brand` |
| Body paragraph | 30–55 words | Filled; `by partnering with Links Resource Get Free Proposal Now hello@linksresource…` |

### 3. richText — Content built around search intent and editorial quality

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Content built around search intent and editorial quality` |
| Body paragraph | 30–55 words | Filled; `Research-led briefs, human-written copy, and on-page structure designed to …` |

### 4. richText — Content strategies for every stage of growth

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Content strategies for every stage of growth` |
| Body paragraph | 30–55 words | Filled; `SEO-first briefs, human-written copy, and on-page optimization built for ra…` |

### 5. richText — SEO content for your specific needs

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `SEO content for your specific needs` |
| Body paragraph | 30–55 words | Filled; `Blog posts, landing pages, and commercial copy — all engineered to rank and…` |

### 6. richText — Affordable content for every stage of growth

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Affordable content for every stage of growth` |
| Body paragraph | 30–55 words | Filled; `Per-article pricing with clear deliverables — scale from foundational blogs…` |

### 7. richText — Estimate your content investment

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Estimate your content investment` |
| Body paragraph | 30–55 words | Filled; `Adjust article volume and content tier to see a transparent starting estima…` |

### 8. richText — Quality content vs. cheap alternatives

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Quality content vs. cheap alternatives` |
| Body paragraph | 30–55 words | Filled; `Compare our SEO content process against typical low-cost writing vendors an…` |

### 9. process — A clear, proven path to growth

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `A clear, proven path to growth` |
| Body paragraph | 20–40 words | Filled; `From research to publication-ready drafts — a transparent content workflow.…` |

- **Rendered item count:** 0; suggested design count: 3 or 6 steps, 3-column grid. Add structured `steps[]` in the page config; body prose does not generate items.
- **Item text slots:** Per step: automatic number; H3 step name 3–6 words; description 18–30 words.

### 10. richText — The quality of our content speaks for itself

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `The quality of our content speaks for itself` |
| Body paragraph | 30–55 words | Filled; `Sample outcomes from content programs — keywords indexed, traffic growth, a…` |

### 11. proof — Real performance, real growth

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Real performance, real growth` |
| Body paragraph | 20–40 words | Filled; `See how our content campaigns improved rankings, traffic, and visibility fo…` |

- **Rendered item count:** 0; suggested design count: 3 or 6 metrics, 3-column grid. Add structured `metrics[]` in the page config; body prose does not generate items.
- **Item text slots:** Per metric: value 1–4 words or number; label 2–6 words. No H3.

### 12. proof — Client Reviews

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Client Reviews` |
| Body paragraph | 20–40 words | Filled; `Client Reviews Don't just take our word for it. Here's what our clients say…` |

- **Rendered item count:** 0; suggested design count: 3 or 6 metrics, 3-column grid. Add structured `metrics[]` in the page config; body prose does not generate items.
- **Item text slots:** Per metric: value 1–4 words or number; label 2–6 words. No H3.

### 13. richText — Placements on Sites Like...

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Placements on Sites Like...` |
| Body paragraph | 30–55 words | Filled; `Illustrative examples of websites where placements may be available dependi…` |

### 14. servicesGrid — Amplify content with the right services

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Amplify content with the right services` |
| Body paragraph | 20–40 words | Filled; `SEO, link building, and digital PR services that multiply the impact of you…` |

- **Rendered item count:** 0; suggested design count: 3 or 6 cards, 3-column grid. Add structured `items[]` in the page config; body prose does not generate items.
- **Item text slots:** Per card: fixed Service badge; H3 title 3–6 words; description 18–25 words; optional href with fixed Learn more label.

### 15. faq — Frequently asked questions

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Frequently asked questions` |
| Body (ignored while FAQs exist) | No visible copy required | Filled; `Everything you need to know about our digital marketing services. Can you m…` |

- **Rendered FAQ count:** 6; suggested design count: 4–6. Each FAQ has an H3 question (8–14 words) and answer paragraph (35–65 words).
- **FAQ 1 (filled):** question `Can you match our existing brand tone?`; answer `Yes. We align each piece with your preferred voice, positioning, and audien…`
- **FAQ 2 (filled):** question `Do you include keyword research?`; answer `Yes. Every package includes keyword mapping and topic targeting to support …`
- **FAQ 3 (filled):** question `Can your team upload content to our CMS?`; answer `Yes. We can support formatting and publishing workflows for WordPress and s…`
- **FAQ 4 (filled):** question `What types of content do you write?`; answer `Blog posts, landing pages, product descriptions, service pages, category co…`
- **FAQ 5 (filled):** question `How long does a typical article take?`; answer `Standard articles are delivered within 5–7 business days. Bulk packages fol…`
- **FAQ 6 (filled):** question `Do you offer white-label content for agencies?`; answer `Yes. We provide reseller-ready content with flexible delivery and client-sa…`

### 16. cta — Ready to grow your business?

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Ready to grow your business?` |
| Body paragraph | 18–30 words | Filled; `Let's plan content that ranks, engages your audience, and converts visitors…` |
| CTA button label | 2–5 words; 12–28 characters | Filled; `Contact us` |

- **Button destination:** `/contact`; arrow icon fixed.

## After the configured blocks

- **Component:** `src/components/templates/page-template.tsx` / PageInternalLinks.
- **Published child cards:** 0; fixed H2 Explore our services. Three-column cards use child title as H3 (3–8 words) and child metaDescription as body (18–25 words desired). None.
- **Parent hub link:** Part of `SEO Agency UK` → `/`.
- **Published related pills:** 3 of up to 3; fixed H2 Related services; labels are related titles (2–6 words). `/link-building-services`, `/seo-services`, `/web-development`.
- **Schema:** non-visible Service and BreadcrumbList; FAQPage only if `faqs[]` has entries. Text comes from metadata, titles and FAQ fields.

## Copy action

Write the visible slots above with the CSV keyword used naturally. Verify factual claims. To show cards, steps, plans, metrics or FAQ items, the developer must add the structured arrays to the page config. This spec changes no page data or publication status.
