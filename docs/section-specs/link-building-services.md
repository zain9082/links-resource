# Section spec: link building services

- **Template:** Custom page in `src/app/link-building-services/page.tsx` (the `serviceHub` config sections are not rendered).
- **URL:** `/link-building-services`
- **Parent hub:** `/`
- **Related pages:** `/content-writing-services`, `/seo-services`, `/web-development`
- **Main keyword (CSV):** link building services
- **Supporting keywords (CSV):** backlink management, backlink services, creative link building, link acquisition, link building agency *, link building agency uk *, link building campaign, link building company, link building management, link building services uk *, link reclamation, premium link building, relevant backlinks, safe relevant backlinks
- **Audience:** Both
- **Current status:** published
- **Copy sources:** `src/app/link-building-services/page.tsx`, `src/lib/data.ts`, `src/lib/publications.ts`

This order follows the actual page component. `PageSchema` emits non-visible Service and BreadcrumbList JSON-LD first. The custom page does **not** render a visible `Breadcrumbs` component. Lengths are editorial fit targets from current widths and grids; all listed slots are currently **filled**. This page does not use the config's `sections[]` or `faqs[]` for visible copy.

## 1. Page header

**Block/component:** `PageHeader` in `src/components/shared/page-header.tsx`, called from `src/app/link-building-services/page.tsx`.

| Text slot | Current fill | Fit target |
| --- | --- | --- |
| Eyebrow | “Link Building Services” | 2–4 words |
| H1 | “Build authority with premium publications” | 6–10 words; preserve short gradient phrase |
| Subheading | “Editorial placements, guest posting, and scalable link building packages — backed by transparent pricing and vetted high-DA sites.” | 20–30 words; max-width 2xl |

## 2. Service cards

**Block/component:** custom three-column grid in `src/app/link-building-services/page.tsx`, driven by `navbarLinkBuildingMenu` in `src/lib/data.ts`.

**4 cards currently render** (three across, fourth wraps). Each has a fixed “Service” badge (1 word), H2 title (3–6 words), description (12–22 words), and fixed “Learn more” link text (2 words). Current card titles: Link Building Services, Editorial Guest Posting Services, Editorial Link Building Services, White Label Link Building Services. All four descriptions and hrefs are filled in data. There is no section H2 above this grid; each card title is an H2.

## 3. Benefit strip

**Block/component:** inline array in `src/app/link-building-services/page.tsx`.

**3 short items** in a three-column row, each 3–6 words with a check icon: “Hand-vetted high-DA publications”, “Transparent pricing & turnaround times”, “Niche-specific placement options”. All filled. These are plain text, not headings or bullet-list elements.

## 4. Publications preview

**Block/components:** `src/components/link-building/view-all-sites.tsx` and `src/components/link-building/publications-table.tsx`; data in `src/lib/publications.ts`.

| Text slot | Current fill | Fit target |
| --- | --- | --- |
| Eyebrow badge | “Premium Placements” | 2–4 words |
| H2 | “View All Sites” | 3–6 words |
| Subheading | “High-authority publications with transparent pricing, turnaround times, and niche acceptance — hand-picked for scalable link building campaigns.” | 18–30 words |
| Top button | “View More” → `/link-building-services/publications` | 2–4 words |
| Bottom button | “Browse all 29 publications” → same route; count is computed from data | 3–6 words |

The compact table shows **5 publication rows** of **29 records**. The table has **10 fixed columns**: Publication, Website, DA, Niche Accepted, TAT, Type, Price, Do Follow, Sponsored, Traffic. Per row slots are publication name (1–5 words), domain (one short URL), DA (number), niche accepted (2–10 words; visually clamped in compact mode), TAT (1–4 words), type (1–5 words), price label (short amount), Do Follow and Sponsored (Y/N), and traffic (short numeric label). All five rows are filled. Source values are commercial claims and require verification.

## 5. Placement CTA

**Block/component:** inline banner in `src/app/link-building-services/page.tsx`.

H2 “Need help choosing the right placements?” (5–9 words), body “Our outreach team will recommend the best publications for your niche, budget, and SEO goals.” (15–25 words), button “Get a free proposal” → `/contact` (3–5 words). One of each, all filled.

## 6. Automatic internal links

**Block/component:** `PageInternalLinks` in `src/components/templates/page-template.tsx`.

Fixed H2 “Explore our services” with **1 published child card** for `/guest-posting-services`. The card H3 is the child `title` (3–8 words) and body is its `metaDescription` (18–25 words desired). Parent line “Part of [home title]” links to `/`. Fixed H2 “Related services” with **3 published pills**: `/content-writing-services`, `/seo-services`, `/web-development`; labels use each page title (2–6 words). All automatically filled from published page configs.

## Copy handoff

The visible sections are in the custom page and its data sources. Changing `content/pages/link-building-services.ts` `sections[]` will not change them. The config still supplies metadata, schema text and automatic link labels. Keep the CSV main keyword in the visible page naturally. Any publication count or metric change must come from verified data.
