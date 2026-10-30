import { visiblePageConfigs } from ".";

export type HeaderItem = { title: string; description: string; href: string };
export type HeaderMenu = { title: string; items: HeaderItem[]; bottomLinks?: HeaderItem[] };

const menus: HeaderMenu[] = [
  { title: "SEO", items: [
    { title: "All SEO Services", description: "Technical, content and authority work in one plan.", href: "/seo-services" },
    { title: "Local SEO", description: "Win nearby searches and map visibility.", href: "/seo-services/local-seo" },
    { title: "Technical SEO", description: "Find crawl, speed and indexing blockers.", href: "/seo-services/technical-seo" },
    { title: "SEO Audit", description: "See what limits rankings and conversions.", href: "/seo-services/seo-audit" },
    { title: "Ecommerce SEO", description: "Improve product discovery and category performance.", href: "/seo-services/ecommerce-seo" },
    { title: "AI SEO Agency", description: "Get cited in ChatGPT, Gemini and AI Overviews.", href: "/ai-seo-agency" },
  ], bottomLinks: [
    { title: "Industries →", description: "Find SEO plans for your sector.", href: "/industries" },
    { title: "Locations →", description: "See local SEO support across the UK.", href: "/locations" },
  ] },
  { title: "Link Building", items: [
    { title: "All Link Building", description: "Earn relevant authority from vetted publications.", href: "/link-building-services" },
    { title: "Guest Posting", description: "Editorial guest posts on vetted, real-traffic sites.", href: "/guest-posting-services" },
    { title: "Niche Edits", description: "Add contextual links to existing articles.", href: "/niche-edits" },
    { title: "Blogger Outreach", description: "Reach publishers matched to your niche.", href: "/blogger-outreach-services" },
    { title: "Digital PR", description: "Turn newsworthy stories into earned coverage.", href: "/digital-pr-services" },
    { title: "Link Building Packages", description: "Compare outreach scope and campaign options.", href: "/link-building-services/packages" },
  ] },
  { title: "For agencies", items: [
    { title: "All White Label Services", description: "Scale delivery under your own brand.", href: "/white-label" },
    { title: "White Label SEO", description: "Offer managed search campaigns to clients.", href: "/white-label/seo" },
    { title: "SEO Reseller", description: "Resell fulfilment with clear agency reporting.", href: "/white-label/seo/reseller" },
    { title: "White Label Link Building", description: "Deliver vetted placements behind your brand.", href: "/white-label/link-building" },
    { title: "White Label PPC", description: "Add paid search without hiring specialists.", href: "/white-label/ppc" },
    { title: "White Label Web Development", description: "Ship client websites through our team.", href: "/white-label/web-development" },
  ] },
  { title: "More Services", items: [
    { title: "PPC Management", description: "Manage spend, targeting and conversion performance.", href: "/ppc-management" },
    { title: "Web Development", description: "Build fast sites that support growth.", href: "/web-development" },
    { title: "Content Writing", description: "Create search-led copy that converts readers.", href: "/content-writing-services" },
  ] },
];

export function pageNavigationSections(): HeaderMenu[] {
  const visible = new Set(visiblePageConfigs().map((page) => page.slug));
  return menus.map((menu) => ({
    title: menu.title,
    items: menu.items.filter((item) => visible.has(item.href)),
    bottomLinks: menu.bottomLinks?.filter((item) => visible.has(item.href)),
  })).filter((menu) => menu.items.length || menu.bottomLinks?.length);
}
