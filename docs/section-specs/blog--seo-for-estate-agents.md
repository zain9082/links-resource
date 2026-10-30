# Section spec: /blog/seo-for-estate-agents

- **Template:** blogGuide via PageTemplateRenderer → ConfigTemplate
- **URL:** `/blog/seo-for-estate-agents`
- **Parent hub:** `/blog`
- **Related pages:** `/blog/how-much-does-seo-cost-uk`, `/blog/geo-vs-seo`, `/blog/technical-seo-audit-checklist`
- **Main keyword (CSV):** seo for estate agents *
- **Supporting keywords (CSV):** how to improve seo on property management company
- **Audience:** both
- **Current status:** `draft`
- **Page config:** `content/pages/blog/seo-for-estate-agents.ts`

## Rendering notes

The shared renderer is `src/components/templates/page-template.tsx`. PageSchema emits non-visible structured data first. Breadcrumbs precede `src/components/shared/page-header.tsx`. The header takes H1 from page.h1 and subtitle from the hero body. The hero block returns null in the block list. Every later block renders in config order. Fit targets reflect the existing responsive grid, glass cards and text sizes; they are guidance, not code limits. The prefix [COPY PENDING] marks provisional content. Pricing and comparisons are cards, not HTML tables.

## Sections in render order

### 1. hero — SEO For Estate Agents

- **Component:** `src/components/templates/page-template.tsx` / ConfigTemplate and PageHeader

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| Eyebrow badge (generated from template; block eyebrow ignored) | 2–4 words | Filled — `blog Guide` |
| H1 (page.h1; hero.heading ignored) | 6–12 words; 45–70 characters | Filled — `SEO For Estate Agents` |
| Header subtitle (hero.body) | 25–35 words | [COPY PENDING] — `Explore seo for estate agents with a clear plan for visibility, qualified enquiries and sust…` |
| Config-only heading (not rendered) | No visible slot | Filled — `SEO For Estate Agents` |

### 2. problem — The challenge

- **Component:** `src/components/templates/page-template.tsx` / Block

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled — `The challenge` |
| Body paragraph | 30–55 words | [COPY PENDING] — `Businesses considering seo for estate agents often face unclear priorities, limited time and…` |

### 3. richText — What to know before you start

- **Component:** `src/components/templates/page-template.tsx` / Block

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled — `What to know before you start` |
| Body paragraph | 30–55 words | [COPY PENDING] — `Add a useful explanation of seo for estate agents in context. Define any specialist terms, s…` |

### 4. process — How the work happens

- **Component:** `src/components/templates/page-template.tsx` / Block

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled — `How the work happens` |
| Body paragraph | 20–40 words | [COPY PENDING] — `A transparent seo for estate agents workflow gives readers a clear starting point and regula…` |

- **Item count:** 4 configured; 3-column cards at desktop width and stacked on mobile.
- **Item text slots:** Per step: automatic number, H3 step name (2–5 words), description (18–30 words).
- **Item 1:** title Filled — `Discovery`; description [COPY PENDING] — `Explain how discovery supports seo for estate agents, what the team delivers, and what the c…`
- **Item 2:** title Filled — `Strategy`; description [COPY PENDING] — `Explain how strategy supports seo for estate agents, what the team delivers, and what the cl…`
- **Item 3:** title Filled — `Delivery`; description [COPY PENDING] — `Explain how delivery supports seo for estate agents, what the team delivers, and what the cl…`
- **Item 4:** title Filled — `Review`; description [COPY PENDING] — `Explain how review supports seo for estate agents, what the team delivers, and what the clie…`

### 5. comparison — Compare your options

- **Component:** `src/components/templates/page-template.tsx` / Block

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled — `Compare your options` |
| Body paragraph | 20–40 words | [COPY PENDING] — `Help readers compare approaches to seo for estate agents using practical criteria such as sc…` |

- **Item count:** 2 configured; 2-column cards at desktop width and stacked on mobile.
- **Item text slots:** Per column: H3 title (2–5 words), 3 bullets (5–12 words each) with fixed check icons. Not an HTML table.
- **Item 1:** title Filled — `Managed delivery`; points 3 bullets: [COPY PENDING] — `Explain scope for seo for estate agents in clear, verifiable terms.`, [COPY PENDING] — `Explain ownership for seo for estate agents in clear, verifiable terms.`, [COPY PENDING] — `Explain reporting for seo for estate agents in clear, verifiable terms.`
- **Item 2:** title Filled — `In-house option`; points 3 bullets: [COPY PENDING] — `Explain scope for seo for estate agents in clear, verifiable terms.`, [COPY PENDING] — `Explain ownership for seo for estate agents in clear, verifiable terms.`, [COPY PENDING] — `Explain reporting for seo for estate agents in clear, verifiable terms.`

### 6. faq — Frequently asked questions

- **Component:** `src/components/templates/page-template.tsx` / Block

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled — `Frequently asked questions` |
| Body paragraph (ignored for FAQ when FAQ cards exist) | No visible slot | [COPY PENDING] — `Answer common questions about seo for estate agents with specific, verifiable information. K…` |

- **FAQ count:** 5 configured; two-column cards desktop, one column mobile. Each H3 question should be 8–14 words and each answer 35–65 words.
- **FAQ 1:** question [COPY PENDING] — `What does seo for estate agents include?`; answer [COPY PENDING] — `Give a direct answer about seo for estate agents, including practical scope, any important c…`
- **FAQ 2:** question [COPY PENDING] — `Who is seo for estate agents best suited to?`; answer [COPY PENDING] — `Give a direct answer about seo for estate agents, including practical scope, any important c…`
- **FAQ 3:** question [COPY PENDING] — `How long does seo for estate agents take?`; answer [COPY PENDING] — `Give a direct answer about seo for estate agents, including practical scope, any important c…`
- **FAQ 4:** question [COPY PENDING] — `How is progress measured for seo for estate agents?`; answer [COPY PENDING] — `Give a direct answer about seo for estate agents, including practical scope, any important c…`
- **FAQ 5:** question [COPY PENDING] — `What should we prepare before starting seo for estate agents?`; answer [COPY PENDING] — `Give a direct answer about seo for estate agents, including practical scope, any important c…`

### 7. cta — Plan your next step

- **Component:** `src/components/templates/page-template.tsx` / Block

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled — `Plan your next step` |
| Body paragraph | 20–40 words | [COPY PENDING] — `Tell readers what to send us about their seo for estate agents needs and what response they …` |
| CTA button label | 2–5 words | Filled — `Discuss your project` |
- **Button destination:** `/contact`; fixed arrow icon.

## After the configured blocks

- **Component:** `src/components/templates/page-template.tsx` / PageInternalLinks.
- **Child cards:** 0 when drafts are shown. Fixed H2 Explore our services, responsive three-column cards. H3 uses child title (3–8 words); body uses child metaDescription (18–25 words preferred). None.
- **Parent hub link:** `/blog` using parent title.
- **Related pills:** 3 configured; fixed H2 Related services; labels use titles (2–6 words). `/blog/how-much-does-seo-cost-uk`, `/blog/geo-vs-seo`, `/blog/technical-seo-audit-checklist`.
- **Schema:** Service and BreadcrumbList; FAQPage when FAQ entries exist. Text derives from metadata and FAQ fields.

## Copy handoff

Replace every [COPY PENDING] text slot with approved copy. Verify facts before replacing TBC proof values. This document does not publish or index the page.
