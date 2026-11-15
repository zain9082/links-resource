# Section spec: /ppc-management/google-ads

- **Template:** ppc via PageTemplateRenderer → ConfigTemplate
- **URL:** `/ppc-management/google-ads`
- **Parent hub:** `/ppc-management`
- **Related pages:** `/ppc-management/microsoft-ads`, `/ppc-management/ppc-audit`, `/ppc-management`
- **Main keyword (CSV):** google ads management services *
- **Supporting keywords (CSV):** google ads agency *, google ads agency uk *, google ads management *
- **Audience:** direct UK business owner
- **Current status:** `draft`
- **Page config:** `content/pages/ppc-management/google-ads.ts`

## Rendering notes

The shared renderer is `src/components/templates/page-template.tsx`. PageSchema emits non-visible structured data first. Breadcrumbs precede `src/components/shared/page-header.tsx`. The header takes H1 from page.h1 and subtitle from the hero body. The hero block returns null in the block list. Every later block renders in config order. Fit targets reflect the existing responsive grid, glass cards and text sizes; they are guidance, not code limits. The prefix [COPY PENDING] marks provisional content. Pricing and comparisons are cards, not HTML tables.

## Sections in render order

### 1. hero — Google Ads Management Services

- **Component:** `src/components/templates/page-template.tsx` / ConfigTemplate and PageHeader

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| Eyebrow badge (generated from template; block eyebrow ignored) | 2–4 words | Filled — `ppc` |
| H1 (page.h1; hero.heading ignored) | 6–12 words; 45–70 characters | Filled — `Google Ads Management Services` |
| Header subtitle (hero.body) | 25–35 words | [COPY PENDING] — `Explore google ads management services with a clear plan for visibility, qualified enquiries…` |
| Config-only heading (not rendered) | No visible slot | Filled — `Google Ads Management Services` |

### 2. problem — The challenge

- **Component:** `src/components/templates/page-template.tsx` / Block

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled — `The challenge` |
| Body paragraph | 30–55 words | [COPY PENDING] — `Businesses considering google ads management services often face unclear priorities, limited…` |

### 3. servicesGrid — What is included

- **Component:** `src/components/templates/page-template.tsx` / Block

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled — `What is included` |
| Body paragraph | 20–40 words | [COPY PENDING] — `These google ads management services options will be tailored to your goals, audience and cu…` |

- **Item count:** 6 configured; 3-column cards at desktop width and stacked on mobile.
- **Item text slots:** Per card: fixed Service badge, H3 title (3–6 words), description (18–25 words), optional Learn more link and href.
- **Item 1:** title Filled — `Discovery and planning`; description [COPY PENDING] — `Explain how discovery and planning supports google ads management services, what the team de…`
- **Item 2:** title Filled — `Technical foundations`; description [COPY PENDING] — `Explain how technical foundations supports google ads management services, what the team del…`
- **Item 3:** title Filled — `Content direction`; description [COPY PENDING] — `Explain how content direction supports google ads management services, what the team deliver…`
- **Item 4:** title Filled — `Authority support`; description [COPY PENDING] — `Explain how authority support supports google ads management services, what the team deliver…`
- **Item 5:** title Filled — `Performance reporting`; description [COPY PENDING] — `Explain how performance reporting supports google ads management services, what the team del…`
- **Item 6:** title Filled — `Ongoing improvement`; description [COPY PENDING] — `Explain how ongoing improvement supports google ads management services, what the team deliv…`

### 4. process — How the work happens

- **Component:** `src/components/templates/page-template.tsx` / Block

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled — `How the work happens` |
| Body paragraph | 20–40 words | [COPY PENDING] — `A transparent google ads management services workflow gives readers a clear starting point a…` |

- **Item count:** 4 configured; 3-column cards at desktop width and stacked on mobile.
- **Item text slots:** Per step: automatic number, H3 step name (2–5 words), description (18–30 words).
- **Item 1:** title Filled — `Discovery`; description [COPY PENDING] — `Explain how discovery supports google ads management services, what the team delivers, and w…`
- **Item 2:** title Filled — `Strategy`; description [COPY PENDING] — `Explain how strategy supports google ads management services, what the team delivers, and wh…`
- **Item 3:** title Filled — `Delivery`; description [COPY PENDING] — `Explain how delivery supports google ads management services, what the team delivers, and wh…`
- **Item 4:** title Filled — `Review`; description [COPY PENDING] — `Explain how review supports google ads management services, what the team delivers, and what…`

### 5. proof — Evidence and outcomes

- **Component:** `src/components/templates/page-template.tsx` / Block

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled — `Evidence and outcomes` |
| Body paragraph | 20–40 words | [COPY PENDING] — `Use this section to show verified evidence for google ads management services: relevant outc…` |

- **Item count:** 3 configured; 3-column cards at desktop width and stacked on mobile.
- **Item text slots:** Per metric: value (1–4 words or number), label (2–6 words). No H3.
- **Item 1:** value Filled — `TBC`; label [COPY PENDING] — `Visibility`
- **Item 2:** value Filled — `TBC`; label [COPY PENDING] — `Qualified enquiries`
- **Item 3:** value Filled — `TBC`; label [COPY PENDING] — `Client outcome`

### 6. pricing — Scope and pricing

- **Component:** `src/components/templates/page-template.tsx` / Block

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled — `Scope and pricing` |
| Body paragraph | 20–40 words | [COPY PENDING] — `Explain the factors that affect google ads management services pricing, the expected scope o…` |

- **Item count:** 3 configured; 3-column cards at desktop width and stacked on mobile.
- **Item text slots:** Per plan: fixed Plan badge, H3 name (1–4 words), description (20–35 words). No price or per-plan CTA slot.
- **Item 1:** name Filled — `Starter`; description [COPY PENDING] — `Describe the starter scope for google ads management services, what is included, any depende…`
- **Item 2:** name Filled — `Growth`; description [COPY PENDING] — `Describe the growth scope for google ads management services, what is included, any dependen…`
- **Item 3:** name Filled — `Bespoke`; description [COPY PENDING] — `Describe the bespoke scope for google ads management services, what is included, any depende…`

### 7. comparison — Compare your options

- **Component:** `src/components/templates/page-template.tsx` / Block

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled — `Compare your options` |
| Body paragraph | 20–40 words | [COPY PENDING] — `Help readers compare approaches to google ads management services using practical criteria s…` |

- **Item count:** 2 configured; 2-column cards at desktop width and stacked on mobile.
- **Item text slots:** Per column: H3 title (2–5 words), 3 bullets (5–12 words each) with fixed check icons. Not an HTML table.
- **Item 1:** title Filled — `Managed delivery`; points 3 bullets: [COPY PENDING] — `Explain scope for google ads management services in clear, verifiable terms.`, [COPY PENDING] — `Explain ownership for google ads management services in clear, verifiable terms.`, [COPY PENDING] — `Explain reporting for google ads management services in clear, verifiable terms.`
- **Item 2:** title Filled — `In-house option`; points 3 bullets: [COPY PENDING] — `Explain scope for google ads management services in clear, verifiable terms.`, [COPY PENDING] — `Explain ownership for google ads management services in clear, verifiable terms.`, [COPY PENDING] — `Explain reporting for google ads management services in clear, verifiable terms.`

### 8. richText — What to know before you start

- **Component:** `src/components/templates/page-template.tsx` / Block

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled — `What to know before you start` |
| Body paragraph | 30–55 words | [COPY PENDING] — `Add a useful explanation of google ads management services in context. Define any specialist…` |

### 9. faq — Frequently asked questions

- **Component:** `src/components/templates/page-template.tsx` / Block

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled — `Frequently asked questions` |
| Body paragraph (ignored for FAQ when FAQ cards exist) | No visible slot | [COPY PENDING] — `Answer common questions about google ads management services with specific, verifiable infor…` |

- **FAQ count:** 5 configured; two-column cards desktop, one column mobile. Each H3 question should be 8–14 words and each answer 35–65 words.
- **FAQ 1:** question [COPY PENDING] — `What does google ads management services include?`; answer [COPY PENDING] — `Give a direct answer about google ads management services, including practical scope, any im…`
- **FAQ 2:** question [COPY PENDING] — `Who is google ads management services best suited to?`; answer [COPY PENDING] — `Give a direct answer about google ads management services, including practical scope, any im…`
- **FAQ 3:** question [COPY PENDING] — `How long does google ads management services take?`; answer [COPY PENDING] — `Give a direct answer about google ads management services, including practical scope, any im…`
- **FAQ 4:** question [COPY PENDING] — `How is progress measured for google ads management services?`; answer [COPY PENDING] — `Give a direct answer about google ads management services, including practical scope, any im…`
- **FAQ 5:** question [COPY PENDING] — `What should we prepare before starting google ads management services?`; answer [COPY PENDING] — `Give a direct answer about google ads management services, including practical scope, any im…`

### 10. cta — Plan your next step

- **Component:** `src/components/templates/page-template.tsx` / Block

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled — `Plan your next step` |
| Body paragraph | 20–40 words | [COPY PENDING] — `Tell readers what to send us about their google ads management services needs and what respo…` |
| CTA button label | 2–5 words | Filled — `Discuss your project` |
- **Button destination:** `/contact`; fixed arrow icon.

## After the configured blocks

- **Component:** `src/components/templates/page-template.tsx` / PageInternalLinks.
- **Child cards:** 0 when drafts are shown. Fixed H2 Explore our services, responsive three-column cards. H3 uses child title (3–8 words); body uses child metaDescription (18–25 words preferred). None.
- **Parent hub link:** `/ppc-management` using parent title.
- **Related pills:** 3 configured; fixed H2 Related services; labels use titles (2–6 words). `/ppc-management/microsoft-ads`, `/ppc-management/ppc-audit`, `/ppc-management`.
- **Schema:** Service and BreadcrumbList; FAQPage when FAQ entries exist. Text derives from metadata and FAQ fields.

## Copy handoff

Replace every [COPY PENDING] text slot with approved copy. Verify facts before replacing TBC proof values. This document does not publish or index the page.
