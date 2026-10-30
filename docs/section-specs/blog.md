# Section spec: /blog

- **Template:** blogGuide via PageTemplateRenderer → ConfigTemplate
- **URL:** `/blog`
- **Parent hub:** `/`
- **Related pages:** `/`, `/seo-services`, `/link-building-services`
- **Main keyword (index hub):** SEO and link building guides
- **Supporting keywords (index hub):** SEO insights, link building advice
- **Audience:** both
- **Current status:** `draft`
- **Page config:** `content/pages/blog.ts`

## Rendering notes

The shared renderer is `src/components/templates/page-template.tsx`. PageSchema emits non-visible structured data first. Breadcrumbs precede `src/components/shared/page-header.tsx`. The header takes H1 from page.h1 and subtitle from the hero body. The hero block returns null in the block list. Every later block renders in config order. Fit targets reflect the existing responsive grid, glass cards and text sizes; they are guidance, not code limits. The prefix [COPY PENDING] marks provisional content. Pricing and comparisons are cards, not HTML tables.

## Sections in render order

### 1. hero — SEO And Link Building Guides

- **Component:** `src/components/templates/page-template.tsx` / ConfigTemplate and PageHeader

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| Eyebrow badge (generated from template; block eyebrow ignored) | 2–4 words | Filled — `blog Guide` |
| H1 (page.h1; hero.heading ignored) | 6–12 words; 45–70 characters | Filled — `SEO And Link Building Guides` |
| Header subtitle (hero.body) | 25–35 words | [COPY PENDING] — `Explore SEO and link building guides with a clear plan for visibility, qualified enquiries a…` |
| Config-only heading (not rendered) | No visible slot | Filled — `SEO And Link Building Guides` |

### 2. problem — The challenge

- **Component:** `src/components/templates/page-template.tsx` / Block

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled — `The challenge` |
| Body paragraph | 30–55 words | [COPY PENDING] — `Businesses considering SEO and link building guides often face unclear priorities, limited t…` |

### 3. richText — What to know before you start

- **Component:** `src/components/templates/page-template.tsx` / Block

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled — `What to know before you start` |
| Body paragraph | 30–55 words | [COPY PENDING] — `Add a useful explanation of SEO and link building guides in context. Define any specialist t…` |

### 4. process — How the work happens

- **Component:** `src/components/templates/page-template.tsx` / Block

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled — `How the work happens` |
| Body paragraph | 20–40 words | [COPY PENDING] — `A transparent SEO and link building guides workflow gives readers a clear starting point and…` |

- **Item count:** 4 configured; 3-column cards at desktop width and stacked on mobile.
- **Item text slots:** Per step: automatic number, H3 step name (2–5 words), description (18–30 words).
- **Item 1:** title Filled — `Discovery`; description [COPY PENDING] — `Explain how discovery supports SEO and link building guides, what the team delivers, and wha…`
- **Item 2:** title Filled — `Strategy`; description [COPY PENDING] — `Explain how strategy supports SEO and link building guides, what the team delivers, and what…`
- **Item 3:** title Filled — `Delivery`; description [COPY PENDING] — `Explain how delivery supports SEO and link building guides, what the team delivers, and what…`
- **Item 4:** title Filled — `Review`; description [COPY PENDING] — `Explain how review supports SEO and link building guides, what the team delivers, and what t…`

### 5. comparison — Compare your options

- **Component:** `src/components/templates/page-template.tsx` / Block

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled — `Compare your options` |
| Body paragraph | 20–40 words | [COPY PENDING] — `Help readers compare approaches to SEO and link building guides using practical criteria suc…` |

- **Item count:** 2 configured; 2-column cards at desktop width and stacked on mobile.
- **Item text slots:** Per column: H3 title (2–5 words), 3 bullets (5–12 words each) with fixed check icons. Not an HTML table.
- **Item 1:** title Filled — `Managed delivery`; points 3 bullets: [COPY PENDING] — `Explain scope for SEO and link building guides in clear, verifiable terms.`, [COPY PENDING] — `Explain ownership for SEO and link building guides in clear, verifiable terms.`, [COPY PENDING] — `Explain reporting for SEO and link building guides in clear, verifiable terms.`
- **Item 2:** title Filled — `In-house option`; points 3 bullets: [COPY PENDING] — `Explain scope for SEO and link building guides in clear, verifiable terms.`, [COPY PENDING] — `Explain ownership for SEO and link building guides in clear, verifiable terms.`, [COPY PENDING] — `Explain reporting for SEO and link building guides in clear, verifiable terms.`

### 6. faq — Frequently asked questions

- **Component:** `src/components/templates/page-template.tsx` / Block

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled — `Frequently asked questions` |
| Body paragraph (ignored for FAQ when FAQ cards exist) | No visible slot | [COPY PENDING] — `Answer common questions about SEO and link building guides with specific, verifiable informa…` |

- **FAQ count:** 5 configured; two-column cards desktop, one column mobile. Each H3 question should be 8–14 words and each answer 35–65 words.
- **FAQ 1:** question [COPY PENDING] — `What does SEO and link building guides include?`; answer [COPY PENDING] — `Give a direct answer about SEO and link building guides, including practical scope, any impo…`
- **FAQ 2:** question [COPY PENDING] — `Who is SEO and link building guides best suited to?`; answer [COPY PENDING] — `Give a direct answer about SEO and link building guides, including practical scope, any impo…`
- **FAQ 3:** question [COPY PENDING] — `How long does SEO and link building guides take?`; answer [COPY PENDING] — `Give a direct answer about SEO and link building guides, including practical scope, any impo…`
- **FAQ 4:** question [COPY PENDING] — `How is progress measured for SEO and link building guides?`; answer [COPY PENDING] — `Give a direct answer about SEO and link building guides, including practical scope, any impo…`
- **FAQ 5:** question [COPY PENDING] — `What should we prepare before starting SEO and link building guides?`; answer [COPY PENDING] — `Give a direct answer about SEO and link building guides, including practical scope, any impo…`

### 7. cta — Plan your next step

- **Component:** `src/components/templates/page-template.tsx` / Block

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled — `Plan your next step` |
| Body paragraph | 20–40 words | [COPY PENDING] — `Tell readers what to send us about their SEO and link building guides needs and what respons…` |
| CTA button label | 2–5 words | Filled — `Discuss your project` |
- **Button destination:** `/contact`; fixed arrow icon.

## After the configured blocks

- **Component:** `src/components/templates/page-template.tsx` / PageInternalLinks.
- **Child cards:** 6 when drafts are shown. Fixed H2 Explore our services, responsive three-column cards. H3 uses child title (3–8 words); body uses child metaDescription (18–25 words preferred). `/blog/geo-vs-seo`, `/blog/how-much-does-seo-cost-uk`, `/blog/link-building-basics`, `/blog/saas-seo-checklist`, `/blog/seo-for-estate-agents`, `/blog/technical-seo-audit-checklist`.
- **Parent hub link:** `/` using parent title.
- **Related pills:** 3 configured; fixed H2 Related services; labels use titles (2–6 words). `/`, `/seo-services`, `/link-building-services`.
- **Schema:** Service and BreadcrumbList; FAQPage when FAQ entries exist. Text derives from metadata and FAQ fields.

## Copy handoff

Replace every [COPY PENDING] text slot with approved copy. Verify facts before replacing TBC proof values. This document does not publish or index the page.
