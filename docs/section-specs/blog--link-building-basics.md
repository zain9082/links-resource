# Section spec: /blog/link-building-basics

- **Template:** blogGuide via PageTemplateRenderer → ConfigTemplate
- **URL:** `/blog/link-building-basics`
- **Parent hub:** `/blog`
- **Related pages:** `/blog/how-much-does-seo-cost-uk`, `/blog/geo-vs-seo`, `/blog/technical-seo-audit-checklist`
- **Main keyword (CSV):** seo links
- **Supporting keywords (CSV):** profile links seo, seo page authority, what is cross linking in seo
- **Audience:** both
- **Current status:** `draft`
- **Page config:** `content/pages/blog/link-building-basics.ts`

## Rendering notes

The shared renderer is `src/components/templates/page-template.tsx`. PageSchema emits non-visible structured data first. Breadcrumbs precede `src/components/shared/page-header.tsx`. The header takes H1 from page.h1 and subtitle from the hero body. The hero block returns null in the block list. Every later block renders in config order. Fit targets reflect the existing responsive grid, glass cards and text sizes; they are guidance, not code limits. The prefix [COPY PENDING] marks provisional content. Pricing and comparisons are cards, not HTML tables.

## Sections in render order

### 1. hero — SEO Links

- **Component:** `src/components/templates/page-template.tsx` / ConfigTemplate and PageHeader

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| Eyebrow badge (generated from template; block eyebrow ignored) | 2–4 words | Filled — `blog Guide` |
| H1 (page.h1; hero.heading ignored) | 6–12 words; 45–70 characters | Filled — `SEO Links` |
| Header subtitle (hero.body) | 25–35 words | [COPY PENDING] — `Explore seo links with a clear plan for visibility, qualified enquiries and sustainable grow…` |
| Config-only heading (not rendered) | No visible slot | Filled — `SEO Links` |

### 2. problem — The challenge

- **Component:** `src/components/templates/page-template.tsx` / Block

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled — `The challenge` |
| Body paragraph | 30–55 words | [COPY PENDING] — `Businesses considering seo links often face unclear priorities, limited time and inconsisten…` |

### 3. richText — What to know before you start

- **Component:** `src/components/templates/page-template.tsx` / Block

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled — `What to know before you start` |
| Body paragraph | 30–55 words | [COPY PENDING] — `Add a useful explanation of seo links in context. Define any specialist terms, show how this…` |

### 4. process — How the work happens

- **Component:** `src/components/templates/page-template.tsx` / Block

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled — `How the work happens` |
| Body paragraph | 20–40 words | [COPY PENDING] — `A transparent seo links workflow gives readers a clear starting point and regular opportunit…` |

- **Item count:** 4 configured; 3-column cards at desktop width and stacked on mobile.
- **Item text slots:** Per step: automatic number, H3 step name (2–5 words), description (18–30 words).
- **Item 1:** title Filled — `Discovery`; description [COPY PENDING] — `Explain how discovery supports seo links, what the team delivers, and what the client should…`
- **Item 2:** title Filled — `Strategy`; description [COPY PENDING] — `Explain how strategy supports seo links, what the team delivers, and what the client should …`
- **Item 3:** title Filled — `Delivery`; description [COPY PENDING] — `Explain how delivery supports seo links, what the team delivers, and what the client should …`
- **Item 4:** title Filled — `Review`; description [COPY PENDING] — `Explain how review supports seo links, what the team delivers, and what the client should ex…`

### 5. comparison — Compare your options

- **Component:** `src/components/templates/page-template.tsx` / Block

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled — `Compare your options` |
| Body paragraph | 20–40 words | [COPY PENDING] — `Help readers compare approaches to seo links using practical criteria such as scope, ownersh…` |

- **Item count:** 2 configured; 2-column cards at desktop width and stacked on mobile.
- **Item text slots:** Per column: H3 title (2–5 words), 3 bullets (5–12 words each) with fixed check icons. Not an HTML table.
- **Item 1:** title Filled — `Managed delivery`; points 3 bullets: [COPY PENDING] — `Explain scope for seo links in clear, verifiable terms.`, [COPY PENDING] — `Explain ownership for seo links in clear, verifiable terms.`, [COPY PENDING] — `Explain reporting for seo links in clear, verifiable terms.`
- **Item 2:** title Filled — `In-house option`; points 3 bullets: [COPY PENDING] — `Explain scope for seo links in clear, verifiable terms.`, [COPY PENDING] — `Explain ownership for seo links in clear, verifiable terms.`, [COPY PENDING] — `Explain reporting for seo links in clear, verifiable terms.`

### 6. faq — Frequently asked questions

- **Component:** `src/components/templates/page-template.tsx` / Block

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled — `Frequently asked questions` |
| Body paragraph (ignored for FAQ when FAQ cards exist) | No visible slot | [COPY PENDING] — `Answer common questions about seo links with specific, verifiable information. Keep each ans…` |

- **FAQ count:** 5 configured; two-column cards desktop, one column mobile. Each H3 question should be 8–14 words and each answer 35–65 words.
- **FAQ 1:** question [COPY PENDING] — `What does seo links include?`; answer [COPY PENDING] — `Give a direct answer about seo links, including practical scope, any important conditions an…`
- **FAQ 2:** question [COPY PENDING] — `Who is seo links best suited to?`; answer [COPY PENDING] — `Give a direct answer about seo links, including practical scope, any important conditions an…`
- **FAQ 3:** question [COPY PENDING] — `How long does seo links take?`; answer [COPY PENDING] — `Give a direct answer about seo links, including practical scope, any important conditions an…`
- **FAQ 4:** question [COPY PENDING] — `How is progress measured for seo links?`; answer [COPY PENDING] — `Give a direct answer about seo links, including practical scope, any important conditions an…`
- **FAQ 5:** question [COPY PENDING] — `What should we prepare before starting seo links?`; answer [COPY PENDING] — `Give a direct answer about seo links, including practical scope, any important conditions an…`

### 7. cta — Plan your next step

- **Component:** `src/components/templates/page-template.tsx` / Block

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled — `Plan your next step` |
| Body paragraph | 20–40 words | [COPY PENDING] — `Tell readers what to send us about their seo links needs and what response they can expect. …` |
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
