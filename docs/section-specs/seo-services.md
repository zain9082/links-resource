# Section spec: /seo-services

- **Template:** serviceHub via PageTemplateRenderer → ConfigTemplate
- **URL:** `/seo-services`
- **Parent hub:** `/`
- **Related pages:** `/content-writing-services`, `/link-building-services`, `/web-development`
- **Main keyword (CSV):** seo services uk *
- **Supporting keywords (CSV):** advanced seo agency, bespoke seo services, complete seo services, full service seo, professional seo company, seo services *
- **Audience:** Direct UK business owner
- **Current status:** `published`
- **Page config:** `content/pages/seo-services.ts`

## Rendering notes

All sections below use `src/components/templates/page-template.tsx`. The header is `src/components/shared/page-header.tsx`. JSON-LD renders before visible content. Breadcrumbs precede the header and derive their labels from page and parent titles. The first hero block supplies only the header subtitle; its own heading is ignored. Other blocks render in listed order. These length targets reflect the current widths, type sizes, and grid layout; they are editorial guidance, not validation rules. Existing live copy was flattened into paragraph fields, so a filled paragraph may need restructuring. The generic template renders no HTML tables.

## Sections in render order

### 1. hero — Results-driven SEO that helps businesses grow faster

- **Component:** `src/components/templates/page-template.tsx` (ConfigTemplate + PageHeader)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| Eyebrow badge (generated from template; hero.eyebrow ignored) | 2–4 words | Filled; `service Hub` |
| H1 (page.h1; hero.heading ignored) | 6–12 words; 45–70 characters | Filled; `Results-driven SEO that helps businesses grow faster` |
| Header subheading (hero.body) | 25–35 words | Filled; `SEO Services Results-driven SEO that helps businesses grow faster Custom SE…` |
| Config-only hero.heading (not rendered) | No copy required | Filled; `Results-driven SEO that helps businesses grow faster` |

- **Rendered item count:** 0; hero block itself returns null.

### 2. richText — Grow Your Brand

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Grow Your Brand` |
| Body paragraph | 30–55 words | Filled; `by partnering with Links Resource Get Free Proposal Now hello@linksresource…` |

### 3. richText — SEO built as a monthly growth system

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `SEO built as a monthly growth system` |
| Body paragraph | 30–55 words | Filled; `Technical fixes, content priorities, and authority work coordinated through…` |

### 4. proof — Results-driven, transparent SEO

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Results-driven, transparent SEO` |
| Body paragraph | 20–40 words | Filled; `Technical, on-page, and authority SEO with clear reporting and buyer-intent…` |

- **Rendered item count:** 0; suggested design count: 3 or 6 metrics, 3-column grid. Add structured `metrics[]` in the page config; body prose does not generate items.
- **Item text slots:** Per metric: value 1–4 words or number; label 2–6 words. No H3.

### 5. richText — Strategic SEO for your specific needs

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Strategic SEO for your specific needs` |
| Body paragraph | 30–55 words | Filled; `On-page, off-page, and technical SEO executed as one integrated growth syst…` |

### 6. richText — Effective SEO for every stage of growth

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Effective SEO for every stage of growth` |
| Body paragraph | 30–55 words | Filled; `Weekly SEO packages designed for brands scaling organic traffic and qualifi…` |

### 7. pricing — Build your SEO strategy with our calculator

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Build your SEO strategy with our calculator` |
| Body paragraph | 20–40 words | Filled; `Adjust target keywords and service tier to estimate a transparent weekly st…` |

- **Rendered item count:** 0; suggested design count: 3 plans, 3-column grid. Add structured `plans[]` in the page config; body prose does not generate items.
- **Item text slots:** Per plan: H3 name 1–4 words; description 20–35 words. No price, bullet, or button slots.

### 8. proof — SEO that delivers results

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `SEO that delivers results` |
| Body paragraph | 20–40 words | Filled; `Compare our data-driven SEO approach against typical agency packages and lo…` |

- **Rendered item count:** 0; suggested design count: 3 or 6 metrics, 3-column grid. Add structured `metrics[]` in the page config; body prose does not generate items.
- **Item text slots:** Per metric: value 1–4 words or number; label 2–6 words. No H3.

### 9. process — A clear, proven path to growth

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `A clear, proven path to growth` |
| Body paragraph | 20–40 words | Filled; `From audit to implementation and scaling — a transparent workflow with meas…` |

- **Rendered item count:** 0; suggested design count: 3 or 6 steps, 3-column grid. Add structured `steps[]` in the page config; body prose does not generate items.
- **Item text slots:** Per step: automatic number; H3 step name 3–6 words; description 18–30 words.

### 10. richText — The quality of our SEO work speaks for itself

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `The quality of our SEO work speaks for itself` |
| Body paragraph | 30–55 words | Filled; `Sample client outcomes across keywords, organic traffic, and compounding gr…` |

### 11. proof — Real performance, real growth

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Real performance, real growth` |
| Body paragraph | 20–40 words | Filled; `Explore SEO and content campaigns that lifted rankings, traffic, and visibi…` |

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

### 14. richText — Build strong foundations

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Build strong foundations` |
| Body paragraph | 30–55 words | Filled; `Link building, content, and digital PR services that amplify your SEO resul…` |

### 15. faq — Frequently asked questions

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Frequently asked questions` |
| Body (ignored while FAQs exist) | No visible copy required | Filled; `Everything you need to know about our digital marketing services. How long …` |

- **Rendered FAQ count:** 6; suggested design count: 4–6. Each FAQ has an H3 question (8–14 words) and answer paragraph (35–65 words).
- **FAQ 1 (filled):** question `How long does SEO take to show results?`; answer `Most campaigns start seeing meaningful movement in 8–12 weeks, while strong…`
- **FAQ 2 (filled):** question `Do you offer local and national SEO?`; answer `Yes. We run both local SEO campaigns and broader national/international str…`
- **FAQ 3 (filled):** question `Will I receive monthly reports?`; answer `Yes. You get transparent monthly reporting with rankings, traffic, visibili…`
- **FAQ 4 (filled):** question `What's included in your SEO services?`; answer `Technical SEO, on-page optimization, keyword strategy, content recommendati…`
- **FAQ 5 (filled):** question `Do you work with e-commerce and SaaS brands?`; answer `Yes. We tailor SEO strategies for e-commerce, SaaS, local businesses, and B…`
- **FAQ 6 (filled):** question `Can SEO work alongside our existing marketing?`; answer `Yes. Our campaigns integrate with content, paid media, and development work…`

### 16. cta — Ready to grow your business?

- **Component:** `src/components/templates/page-template.tsx` (Block)

| Text slot | Fit target | Current state / text |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled; `Ready to grow your business?` |
| Body paragraph | 18–30 words | Filled; `Let's build an SEO strategy tailored to your niche, goals, and growth timel…` |
| CTA button label | 2–5 words; 12–28 characters | Filled; `Contact us` |

- **Button destination:** `/contact`; arrow icon fixed.

## After the configured blocks

- **Component:** `src/components/templates/page-template.tsx` / PageInternalLinks.
- **Published child cards:** 1; fixed H2 Explore our services. Three-column cards use child title as H3 (3–8 words) and child metaDescription as body (18–25 words desired). `/seo-services/local-seo`.
- **Parent hub link:** Part of `SEO Agency UK` → `/`.
- **Published related pills:** 3 of up to 3; fixed H2 Related services; labels are related titles (2–6 words). `/content-writing-services`, `/link-building-services`, `/web-development`.
- **Schema:** non-visible Service and BreadcrumbList; FAQPage only if `faqs[]` has entries. Text comes from metadata, titles and FAQ fields.

## Copy action

Write the visible slots above with the CSV keyword used naturally. Verify factual claims. To show cards, steps, plans, metrics or FAQ items, the developer must add the structured arrays to the page config. This spec changes no page data or publication status.
