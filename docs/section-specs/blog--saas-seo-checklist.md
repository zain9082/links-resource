# Section spec: /blog/saas-seo-checklist

- **Template:** blogGuide via PageTemplateRenderer → ConfigTemplate
- **URL:** `/blog/saas-seo-checklist`
- **Parent hub:** `/blog`
- **Related pages:** `/blog/how-much-does-seo-cost-uk`, `/blog/geo-vs-seo`, `/blog/technical-seo-audit-checklist`
- **Main keyword (CSV):** saas seo checklist
- **Supporting keywords (CSV):** seo strategy for saas
- **Audience:** both
- **Current status:** `draft`
- **Page config:** `content/pages/blog/saas-seo-checklist.ts`

## Rendering notes

The shared renderer is `src/components/templates/page-template.tsx`. PageSchema emits non-visible structured data first. Breadcrumbs precede `src/components/shared/page-header.tsx`. The header takes H1 from page.h1 and subtitle from the hero body. The hero block returns null in the block list. Every later block renders in config order. Fit targets reflect the existing responsive grid, glass cards and text sizes; they are guidance, not code limits. The prefix [COPY PENDING] marks provisional content. Pricing and comparisons are cards, not HTML tables.

## Sections in render order

### 1. hero — SaaS SEO Checklist

- **Component:** `src/components/templates/page-template.tsx` / ConfigTemplate and PageHeader

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| Eyebrow badge (generated from template; block eyebrow ignored) | 2–4 words | Filled — `blog Guide` |
| H1 (page.h1; hero.heading ignored) | 6–12 words; 45–70 characters | Filled — `SaaS SEO Checklist` |
| Header subtitle (hero.body) | 25–35 words | [COPY PENDING] — `Explore saas seo checklist with a clear plan for visibility, qualified enquiries and sustain…` |
| Config-only heading (not rendered) | No visible slot | Filled — `SaaS SEO Checklist` |

### 2. problem — The challenge

- **Component:** `src/components/templates/page-template.tsx` / Block

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled — `The challenge` |
| Body paragraph | 30–55 words | [COPY PENDING] — `Businesses considering saas seo checklist often face unclear priorities, limited time and in…` |

### 3. richText — What to know before you start

- **Component:** `src/components/templates/page-template.tsx` / Block

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled — `What to know before you start` |
| Body paragraph | 30–55 words | [COPY PENDING] — `Add a useful explanation of saas seo checklist in context. Define any specialist terms, show…` |

### 4. process — How the work happens

- **Component:** `src/components/templates/page-template.tsx` / Block

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled — `How the work happens` |
| Body paragraph | 20–40 words | [COPY PENDING] — `A transparent saas seo checklist workflow gives readers a clear starting point and regular o…` |

- **Item count:** 4 configured; 3-column cards at desktop width and stacked on mobile.
- **Item text slots:** Per step: automatic number, H3 step name (2–5 words), description (18–30 words).
- **Item 1:** title Filled — `Discovery`; description [COPY PENDING] — `Explain how discovery supports saas seo checklist, what the team delivers, and what the clie…`
- **Item 2:** title Filled — `Strategy`; description [COPY PENDING] — `Explain how strategy supports saas seo checklist, what the team delivers, and what the clien…`
- **Item 3:** title Filled — `Delivery`; description [COPY PENDING] — `Explain how delivery supports saas seo checklist, what the team delivers, and what the clien…`
- **Item 4:** title Filled — `Review`; description [COPY PENDING] — `Explain how review supports saas seo checklist, what the team delivers, and what the client …`

### 5. comparison — Compare your options

- **Component:** `src/components/templates/page-template.tsx` / Block

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled — `Compare your options` |
| Body paragraph | 20–40 words | [COPY PENDING] — `Help readers compare approaches to saas seo checklist using practical criteria such as scope…` |

- **Item count:** 2 configured; 2-column cards at desktop width and stacked on mobile.
- **Item text slots:** Per column: H3 title (2–5 words), 3 bullets (5–12 words each) with fixed check icons. Not an HTML table.
- **Item 1:** title Filled — `Managed delivery`; points 3 bullets: [COPY PENDING] — `Explain scope for saas seo checklist in clear, verifiable terms.`, [COPY PENDING] — `Explain ownership for saas seo checklist in clear, verifiable terms.`, [COPY PENDING] — `Explain reporting for saas seo checklist in clear, verifiable terms.`
- **Item 2:** title Filled — `In-house option`; points 3 bullets: [COPY PENDING] — `Explain scope for saas seo checklist in clear, verifiable terms.`, [COPY PENDING] — `Explain ownership for saas seo checklist in clear, verifiable terms.`, [COPY PENDING] — `Explain reporting for saas seo checklist in clear, verifiable terms.`

### 6. faq — Frequently asked questions

- **Component:** `src/components/templates/page-template.tsx` / Block

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled — `Frequently asked questions` |
| Body paragraph (ignored for FAQ when FAQ cards exist) | No visible slot | [COPY PENDING] — `Answer common questions about saas seo checklist with specific, verifiable information. Keep…` |

- **FAQ count:** 5 configured; two-column cards desktop, one column mobile. Each H3 question should be 8–14 words and each answer 35–65 words.
- **FAQ 1:** question [COPY PENDING] — `What does saas seo checklist include?`; answer [COPY PENDING] — `Give a direct answer about saas seo checklist, including practical scope, any important cond…`
- **FAQ 2:** question [COPY PENDING] — `Who is saas seo checklist best suited to?`; answer [COPY PENDING] — `Give a direct answer about saas seo checklist, including practical scope, any important cond…`
- **FAQ 3:** question [COPY PENDING] — `How long does saas seo checklist take?`; answer [COPY PENDING] — `Give a direct answer about saas seo checklist, including practical scope, any important cond…`
- **FAQ 4:** question [COPY PENDING] — `How is progress measured for saas seo checklist?`; answer [COPY PENDING] — `Give a direct answer about saas seo checklist, including practical scope, any important cond…`
- **FAQ 5:** question [COPY PENDING] — `What should we prepare before starting saas seo checklist?`; answer [COPY PENDING] — `Give a direct answer about saas seo checklist, including practical scope, any important cond…`

### 7. cta — Plan your next step

- **Component:** `src/components/templates/page-template.tsx` / Block

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled — `Plan your next step` |
| Body paragraph | 20–40 words | [COPY PENDING] — `Tell readers what to send us about their saas seo checklist needs and what response they can…` |
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
