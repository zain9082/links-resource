# Section spec: /web-development/wordpress

- **Template:** webDev via PageTemplateRenderer → ConfigTemplate
- **URL:** `/web-development/wordpress`
- **Parent hub:** `/web-development`
- **Related pages:** `/web-development/website-redesign`, `/web-development/ecommerce`, `/web-development`
- **Main keyword (CSV):** wordpress development agency uk
- **Supporting keywords (CSV):** wordpress development agency *, wordpress development company uk *
- **Audience:** direct UK business owner
- **Current status:** `draft`
- **Page config:** `content/pages/web-development/wordpress.ts`

## Rendering notes

The shared renderer is `src/components/templates/page-template.tsx`. PageSchema emits non-visible structured data first. Breadcrumbs precede `src/components/shared/page-header.tsx`. The header takes H1 from page.h1 and subtitle from the hero body. The hero block returns null in the block list. Every later block renders in config order. Fit targets reflect the existing responsive grid, glass cards and text sizes; they are guidance, not code limits. The prefix [COPY PENDING] marks provisional content. Pricing and comparisons are cards, not HTML tables.

## Sections in render order

### 1. hero — Wordpress Development Agency UK

- **Component:** `src/components/templates/page-template.tsx` / ConfigTemplate and PageHeader

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| Eyebrow badge (generated from template; block eyebrow ignored) | 2–4 words | Filled — `web Dev` |
| H1 (page.h1; hero.heading ignored) | 6–12 words; 45–70 characters | Filled — `Wordpress Development Agency UK` |
| Header subtitle (hero.body) | 25–35 words | [COPY PENDING] — `Explore wordpress development agency uk with a clear plan for visibility, qualified enquirie…` |
| Config-only heading (not rendered) | No visible slot | Filled — `Wordpress Development Agency UK` |

### 2. problem — The challenge

- **Component:** `src/components/templates/page-template.tsx` / Block

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled — `The challenge` |
| Body paragraph | 30–55 words | [COPY PENDING] — `Businesses considering wordpress development agency uk often face unclear priorities, limite…` |

### 3. servicesGrid — What is included

- **Component:** `src/components/templates/page-template.tsx` / Block

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled — `What is included` |
| Body paragraph | 20–40 words | [COPY PENDING] — `These wordpress development agency uk options will be tailored to your goals, audience and c…` |

- **Item count:** 6 configured; 3-column cards at desktop width and stacked on mobile.
- **Item text slots:** Per card: fixed Service badge, H3 title (3–6 words), description (18–25 words), optional Learn more link and href.
- **Item 1:** title Filled — `Discovery and planning`; description [COPY PENDING] — `Explain how discovery and planning supports wordpress development agency uk, what the team d…`
- **Item 2:** title Filled — `Technical foundations`; description [COPY PENDING] — `Explain how technical foundations supports wordpress development agency uk, what the team de…`
- **Item 3:** title Filled — `Content direction`; description [COPY PENDING] — `Explain how content direction supports wordpress development agency uk, what the team delive…`
- **Item 4:** title Filled — `Authority support`; description [COPY PENDING] — `Explain how authority support supports wordpress development agency uk, what the team delive…`
- **Item 5:** title Filled — `Performance reporting`; description [COPY PENDING] — `Explain how performance reporting supports wordpress development agency uk, what the team de…`
- **Item 6:** title Filled — `Ongoing improvement`; description [COPY PENDING] — `Explain how ongoing improvement supports wordpress development agency uk, what the team deli…`

### 4. process — How the work happens

- **Component:** `src/components/templates/page-template.tsx` / Block

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled — `How the work happens` |
| Body paragraph | 20–40 words | [COPY PENDING] — `A transparent wordpress development agency uk workflow gives readers a clear starting point …` |

- **Item count:** 4 configured; 3-column cards at desktop width and stacked on mobile.
- **Item text slots:** Per step: automatic number, H3 step name (2–5 words), description (18–30 words).
- **Item 1:** title Filled — `Discovery`; description [COPY PENDING] — `Explain how discovery supports wordpress development agency uk, what the team delivers, and …`
- **Item 2:** title Filled — `Strategy`; description [COPY PENDING] — `Explain how strategy supports wordpress development agency uk, what the team delivers, and w…`
- **Item 3:** title Filled — `Delivery`; description [COPY PENDING] — `Explain how delivery supports wordpress development agency uk, what the team delivers, and w…`
- **Item 4:** title Filled — `Review`; description [COPY PENDING] — `Explain how review supports wordpress development agency uk, what the team delivers, and wha…`

### 5. proof — Evidence and outcomes

- **Component:** `src/components/templates/page-template.tsx` / Block

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled — `Evidence and outcomes` |
| Body paragraph | 20–40 words | [COPY PENDING] — `Use this section to show verified evidence for wordpress development agency uk: relevant out…` |

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
| Body paragraph | 20–40 words | [COPY PENDING] — `Explain the factors that affect wordpress development agency uk pricing, the expected scope …` |

- **Item count:** 3 configured; 3-column cards at desktop width and stacked on mobile.
- **Item text slots:** Per plan: fixed Plan badge, H3 name (1–4 words), description (20–35 words). No price or per-plan CTA slot.
- **Item 1:** name Filled — `Starter`; description [COPY PENDING] — `Describe the starter scope for wordpress development agency uk, what is included, any depend…`
- **Item 2:** name Filled — `Growth`; description [COPY PENDING] — `Describe the growth scope for wordpress development agency uk, what is included, any depende…`
- **Item 3:** name Filled — `Bespoke`; description [COPY PENDING] — `Describe the bespoke scope for wordpress development agency uk, what is included, any depend…`

### 7. comparison — Compare your options

- **Component:** `src/components/templates/page-template.tsx` / Block

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled — `Compare your options` |
| Body paragraph | 20–40 words | [COPY PENDING] — `Help readers compare approaches to wordpress development agency uk using practical criteria …` |

- **Item count:** 2 configured; 2-column cards at desktop width and stacked on mobile.
- **Item text slots:** Per column: H3 title (2–5 words), 3 bullets (5–12 words each) with fixed check icons. Not an HTML table.
- **Item 1:** title Filled — `Managed delivery`; points 3 bullets: [COPY PENDING] — `Explain scope for wordpress development agency uk in clear, verifiable terms.`, [COPY PENDING] — `Explain ownership for wordpress development agency uk in clear, verifiable terms.`, [COPY PENDING] — `Explain reporting for wordpress development agency uk in clear, verifiable terms.`
- **Item 2:** title Filled — `In-house option`; points 3 bullets: [COPY PENDING] — `Explain scope for wordpress development agency uk in clear, verifiable terms.`, [COPY PENDING] — `Explain ownership for wordpress development agency uk in clear, verifiable terms.`, [COPY PENDING] — `Explain reporting for wordpress development agency uk in clear, verifiable terms.`

### 8. richText — What to know before you start

- **Component:** `src/components/templates/page-template.tsx` / Block

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled — `What to know before you start` |
| Body paragraph | 30–55 words | [COPY PENDING] — `Add a useful explanation of wordpress development agency uk in context. Define any specialis…` |

### 9. faq — Frequently asked questions

- **Component:** `src/components/templates/page-template.tsx` / Block

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled — `Frequently asked questions` |
| Body paragraph (ignored for FAQ when FAQ cards exist) | No visible slot | [COPY PENDING] — `Answer common questions about wordpress development agency uk with specific, verifiable info…` |

- **FAQ count:** 5 configured; two-column cards desktop, one column mobile. Each H3 question should be 8–14 words and each answer 35–65 words.
- **FAQ 1:** question [COPY PENDING] — `What does wordpress development agency uk include?`; answer [COPY PENDING] — `Give a direct answer about wordpress development agency uk, including practical scope, any i…`
- **FAQ 2:** question [COPY PENDING] — `Who is wordpress development agency uk best suited to?`; answer [COPY PENDING] — `Give a direct answer about wordpress development agency uk, including practical scope, any i…`
- **FAQ 3:** question [COPY PENDING] — `How long does wordpress development agency uk take?`; answer [COPY PENDING] — `Give a direct answer about wordpress development agency uk, including practical scope, any i…`
- **FAQ 4:** question [COPY PENDING] — `How is progress measured for wordpress development agency uk?`; answer [COPY PENDING] — `Give a direct answer about wordpress development agency uk, including practical scope, any i…`
- **FAQ 5:** question [COPY PENDING] — `What should we prepare before starting wordpress development agency uk?`; answer [COPY PENDING] — `Give a direct answer about wordpress development agency uk, including practical scope, any i…`

### 10. cta — Plan your next step

- **Component:** `src/components/templates/page-template.tsx` / Block

| Text slot | Recommended fit | Current state / sample |
| --- | --- | --- |
| H2 heading | 4–9 words; 25–60 characters | Filled — `Plan your next step` |
| Body paragraph | 20–40 words | [COPY PENDING] — `Tell readers what to send us about their wordpress development agency uk needs and what resp…` |
| CTA button label | 2–5 words | Filled — `Discuss your project` |
- **Button destination:** `/contact`; fixed arrow icon.

## After the configured blocks

- **Component:** `src/components/templates/page-template.tsx` / PageInternalLinks.
- **Child cards:** 0 when drafts are shown. Fixed H2 Explore our services, responsive three-column cards. H3 uses child title (3–8 words); body uses child metaDescription (18–25 words preferred). None.
- **Parent hub link:** `/web-development` using parent title.
- **Related pills:** 3 configured; fixed H2 Related services; labels use titles (2–6 words). `/web-development/website-redesign`, `/web-development/ecommerce`, `/web-development`.
- **Schema:** Service and BreadcrumbList; FAQPage when FAQ entries exist. Text derives from metadata and FAQ fields.

## Copy handoff

Replace every [COPY PENDING] text slot with approved copy. Verify facts before replacing TBC proof values. This document does not publish or index the page.
