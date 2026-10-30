import type { NavbarMenuSection } from "../../src/lib/data";
import { publishedPageConfigs } from ".";

export function pageNavigationSections(): NavbarMenuSection[] {
  const pages = publishedPageConfigs().filter((page) => page.slug !== "/");
  const groups = [
    { title: "SEO & Content", accepts: (slug: string) => slug.startsWith("/seo-") || slug === "/content-writing-services" },
    { title: "Link Building", accepts: (slug: string) => slug.startsWith("/link-building") || slug === "/guest-posting-services" },
    { title: "White Label", accepts: (slug: string) => slug.startsWith("/white-label") },
    { title: "Web Development", accepts: (slug: string) => slug.startsWith("/web-development") },
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
