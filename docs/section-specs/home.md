# Section spec: homepage

- **Template:** Custom homepage composition in `src/app/page.tsx` (the `serviceHub` config sections are not rendered).
- **URL:** `/`
- **Parent hub:** none
- **Related pages:** `/content-writing-services`, `/guest-posting-services`, `/link-building-services` (config order)
- **Main keyword (CSV):** seo agency uk *
- **Supporting keywords (CSV):** digital growth agency, seo agency *, seo company uk *, seo expert agency, seo internet marketing companies
- **Audience:** Both
- **Current status:** published
- **Copy sources:** `src/components/home/*`, `src/components/shared/cursor-gradient-text.tsx`, `src/components/forms/hero-lead-form.tsx`, `src/lib/data.ts`

The order below is the actual `src/app/page.tsx` render order. `PageSchema` first emits non-visible Service JSON-LD. The homepage has no breadcrumb. Lengths are fit targets inferred from current type size, card widths and grid columns; they are not code limits. Every listed slot is currently **filled** unless marked otherwise.

## 1. Hero

**Block/component:** custom hero — `src/components/home/hero.tsx`; H1 in `src/components/shared/cursor-gradient-text.tsx`; form in `src/components/forms/hero-lead-form.tsx`. Two-column layout.

| Text slot | Current fill | Fit target |
| --- | --- | --- |
| Eyebrow badge | “Trusted SEO & Link Building Agency” | 4–7 words |
| H1 | “Grow Faster with SEO & High-Converting Websites” | 7–11 words; preserve short gradient phrase |
| Hero bullets | 6 filled: rankings, backlinks, traffic/content, conversion/web design, scalability, reporting | 6 bullets, 5–10 words each |
| Primary CTA | “Get My Free SEO Audit” (opens modal; from `seoAuditContent.label`) | 3–6 words |
| Secondary CTA | “View Case Study” → `/case-studies` | 2–4 words |
| Proof chips | “500+ Projects Delivered”; “50+ Global Clients” | 2 chips, 3–5 words each; verify figures |
| Form H2 and subheading | “Grow Your Brand”; “by partnering with Links Resource” | H2 3–6 words; sub 5–9 words |
| Form placeholders | “Your Name”; “Your Email”; “Website URL”; “How can we help?” | 4 labels/placeholders, 2–5 words each |
| Form goal choices | SEO + GEO Services; Link Building Services; White Label / Link Building; Web Design; Others | 5 choices, 1–5 words each |
| Form button | “Submit” | 1–3 words |

The form confirmation text is “Thanks! Our team will reach out shortly.” (filled, 6–10 words recommended). There is no separate hero subtitle paragraph.

## 2. Credibility marquee

**Block/component:** custom marquee — `src/components/home/marquee.tsx`. Seven unique labels are duplicated in DOM for animation: projects, clients, UK agency, manual outreach, DR range, reporting, Google Partner. **7 labels**, 2–6 words each, all filled. Verify numerical and partner claims before copy changes.

## 3. Featured placements

**Block/component:** custom carousel — `src/components/home/featured-placements.tsx`; heading in `src/components/shared/section-heading.tsx`.

- Eyebrow “Featured placements” (2–4 words), H2 “Placements from real authority websites” (5–9 words), subheading (20–30 words): all filled.
- **6 placement cards** from `featuredPlacements`: each has name (1–4 words) and external link; the six cards are duplicated for animation. Names currently Morocco World News, Indie Hackers, iLounge, Analytics Insight, BB Time, ARK. All filled.
- CTA “Get Quote” → `/contact` (2–4 words), filled.

## 4. Services grid

**Block/component:** `src/components/home/services-section.tsx`; heading in `SectionHeading`.

- Eyebrow “Our services” (2–4 words); H2 “Services we are offering” (4–8 words); subheading (18–28 words): filled.
- **4 cards in a two-column grid:** Link Building & Guest Posting, Content Writing, Website Development, Search Engine Optimization. Each card has H3 title (2–6 words), description (12–22 words), and fixed “Learn More” link label (2 words). All filled from `services` in `src/lib/data.ts`.
- The `services[].points` bullets exist in data but **do not render in this component**. Card destinations are mapped by `serviceHrefBySlug`; copywriting alone cannot change them.

## 5. About

**Block/component:** `src/components/home/about-section.tsx`; two-column copy and illustration.

- Eyebrow “About Us” (2–4 words); H2 “Your Growth Partner, Not Just a Service Provider” (6–10 words); body paragraph (45–70 words); CTA “Get Started” → `/contact` (2–4 words): all filled from `aboutContent`.
- Illustration caption “SEO · Content · Development — built for measurable growth” (7–11 words), filled.

## 6. Consultation banner

**Block/component:** `src/components/home/consultation-banner.tsx`.

H2 “Get a Free Guest Posting Consultation” (5–9 words); subtitle (20–35 words); CTA “Request Your Free Consultation” → `/contact` (3–6 words). One of each, all filled from `consultationBanner`.

## 7. How it works

**Block/component:** `src/components/home/how-it-works.tsx`; heading in `SectionHeading`.

- Eyebrow “How it works” (2–4 words); H2 “Simple process, real results” (4–8 words); subtitle (12–22 words): filled.
- **4 numbered steps**, each with a numeric index, H3 name (2–5 words) and description (18–28 words). Names: Understand your business; Create strategy; Execute campaigns; Deliver results. All filled from `howItWorks`.

## 8. Why choose us

**Block/component:** `src/components/home/why-choose.tsx`; heading in `SectionHeading`.

- Eyebrow “Why brands choose Links Resource” (4–7 words); H2 “Skip In-House Hiring. Get Results Faster” (6–10 words); subtitle (14–24 words): filled.
- **4 cards** in a two-column grid. Each has displayed index, H3 title (3–6 words), description (12–22 words), and **3 bullets** (3–7 words each). Titles: Real Websites, Real Results; Manual Outreach, Not Automation; Full Transparency & Control; Built for Scalable Growth. All cards and 12 bullets filled from `whyChooseUs`.

## 9. Case studies

**Block/component:** `src/components/home/case-studies.tsx` and `src/components/case-studies/case-study-card.tsx`.

- Eyebrow “Case studies” (2–3 words); H2 “Real SEO growth & traffic results” (5–9 words); subtitle (17–28 words): filled.
- **6 tabs** (1–4 words each) select a card from **7 case study records**. The viewport shows **one card at a time**. The card has category badge (1–3 words), H3 case title (5–10 words), **4 metric pairs** (value 1–3 words; label 1–3 words), fixed “Read Case Study” CTA → `/contact`, and fixed dashboard caption “Analytics Dashboard”. All filled; image has fixed alt “Analytics dashboard preview”.
- Disclaimer paragraph (14–25 words) and “View All Case Studies” CTA → `/case-studies` (3–5 words): filled. Verify case results before retaining numerical claims.

## 10. Client reviews

**Block/component:** `src/components/home/reviews.tsx`; heading in `SectionHeading`.

- Eyebrow “Client reviews” (2–3 words); H2 “Client Reviews” (2–4 words); subtitle (15–25 words): filled.
- **3 reviews** in the data; **2 cards visible at a time** in the two-column carousel. Each has quote body (35–55 words), client name (2–4 words), and role/company (2–6 words). All filled from `reviews`. Five decorative stars and navigation labels are fixed UI, not copy slots.

## 11. Partnerships

**Block/component:** `src/components/home/partnerships.tsx`; heading in `SectionHeading`.

Eyebrow “Partnerships” (1–3 words), H2 “Trusted platforms & partnerships” (4–8 words), subtitle (10–20 words): filled. **6 partner cards** (name 1–3 words and image alt matching name), duplicated for animation: Google, Google Pay, PayPal, Semrush, Binance, Stripe. All filled from `partnerships`; verify relationship claims.

## 12. Website metrics

**Block/component:** `src/components/home/website-metrics.tsx`; heading in `SectionHeading`.

Eyebrow “Authority metrics” (2–3 words), H2 “Sample website metrics & authority” (5–9 words), subtitle (18–28 words): filled. **10 cards** in a grid that reaches five columns. Each card has a site name (one short domain), DA numeric value, DR numeric value, and traffic value (each 1–3 tokens). “Placement site”, “DA”, “DR”, “Traffic” and “High authority” are fixed labels. All values filled from `websiteMetrics`; validate before publication.

## 13. FAQ

**Block/component:** `src/components/home/faq.tsx`; heading in `SectionHeading`.

Eyebrow “FAQ's” (1–3 words), H2 “Frequently asked questions” (3–6 words), subtitle (10–20 words): filled. **5 accordion items** from `faqs`, each with a button question (8–14 words) and answer paragraph (30–55 words). Topics: services offered, selecting a service, custom strategies, SEO timing, and choosing Links Resource. All filled.

## 14. Closing CTA

**Block/component:** `src/components/home/cta.tsx`.

H2 “Ready to grow your business?” (5–8 words), body (8–18 words), primary button “Book a Free SEO Consultation” → `/contact` (4–6 words), secondary button “Explore Services” → `/resources` (2–4 words). One of each, all filled.

## 15. Automatic internal links

**Block/component:** `PageInternalLinks` in `src/components/templates/page-template.tsx`.

Fixed H2 “Explore our services” and **4 published child cards**: `/seo-services`, `/link-building-services`, `/web-development`, `/content-writing-services`. Each H3 uses child `title` (3–8 words), and body uses child `metaDescription` (18–25 words desired). Fixed H2 “Related services” and **3 related pills**: `/content-writing-services`, `/guest-posting-services`, `/link-building-services`; labels use page titles (2–6 words). All generated and filled from published page configs. No parent link on the homepage.

## Copy handoff

This page's visible sections are hard-coded in the listed components and `src/lib/data.ts`; changing `content/pages/home.ts` sections will not change the rendered homepage. Keep the main keyword natural in the H1 or nearby visible copy, and verify claims and figures before reusing them.
