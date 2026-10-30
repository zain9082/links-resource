import type { NavbarMenuSection } from "../../src/lib/data";
import { visiblePageConfigs } from ".";

export function pageNavigationSections(): NavbarMenuSection[] {
  const pages = visiblePageConfigs().filter((page) => page.slug !== "/");
  const groups = [
    { title: "SEO & Content", accepts: (slug: string) => slug.startsWith("/seo-") || slug.startsWith("/content-writing-services") || slug === "/ai-seo-agency" },
    { title: "Link Building", accepts: (slug: string) => slug.startsWith("/link-building") || ["/guest-posting-services", "/blogger-outreach-services", "/niche-edits", "/digital-pr-services"].includes(slug) },
    { title: "White Label", accepts: (slug: string) => slug.startsWith("/white-label") },
    { title: "PPC", accepts: (slug: string) => slug.startsWith("/ppc-management") },
    { title: "Web Development", accepts: (slug: string) => slug.startsWith("/web-development") },
    { title: "Industries", accepts: (slug: string) => slug.startsWith("/industries") },
    { title: "Locations", accepts: (slug: string) => slug.startsWith("/locations") },
    { title: "Guides & Results", accepts: (slug: string) => slug.startsWith("/blog") || slug === "/case-studies" },
  ];
  return groups.map((group) => ({
    title: group.title,
    items: pages.filter((page) => group.accepts(page.slug)).map((page) => ({
      title: page.title,
      description: page.metaDescription,
      href: page.slug,
    })),
  })).filter((group) => group.items.length > 0);
}
