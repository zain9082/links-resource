import type { PageConfig } from "../../content/pages/types";

export type HubGroup = { title: string; pages: PageConfig[] };

const locationRegions: Record<string, string> = {
  london: "London",
  brighton: "South East", cambridge: "South East", hertfordshire: "South East",
  kent: "South East", "milton-keynes": "South East", norwich: "South East",
  reading: "South East", suffolk: "South East",
  bristol: "South West", cheltenham: "South West", cornwall: "South West",
  birmingham: "Midlands", leicester: "Midlands", nottingham: "Midlands",
  staffordshire: "Midlands", warwickshire: "Midlands",
  leeds: "North", liverpool: "North", manchester: "North",
  newcastle: "North", sheffield: "North", york: "North",
  scotland: "Scotland",
};

const groupOrder: Record<string, string[]> = {
  "/seo-services": ["SEO disciplines", "Strategy and pricing"],
  "/link-building-services": ["Outreach and authority", "Packages"],
  "/white-label": ["SEO and outreach", "PPC and web delivery"],
  "/industries": ["Business sectors", "Trades"],
  "/industries/seo-for-tradesmen": ["Trades"],
  "/ppc-management": ["Ad channels", "Audit"],
  "/web-development": ["Web development"],
  "/content-writing-services": ["Writing services"],
  "/blog": ["SEO guides", "Link building guides"],
  "/locations": ["London", "South East", "South West", "Midlands", "North", "Scotland"],
};

export function hubHeading(slug: string): string {
  if (slug === "/locations") return "Explore our locations";
  if (slug === "/industries") return "Explore industries";
  if (slug === "/blog") return "Explore our guides";
  return "Explore our services";
}

function groupName(parent: string, child: string): string {
  if (parent === "/locations") return locationRegions[child.split("/").at(-1) ?? ""] ?? "Other locations";
  if (parent === "/seo-services") return ["/seo-packages", "/ai-seo-agency", "/seo-consultancy"].includes(child) ? "Strategy and pricing" : "SEO disciplines";
  if (parent === "/link-building-services") return child.endsWith("/packages") ? "Packages" : "Outreach and authority";
  if (parent === "/white-label") return ["/white-label/ppc", "/white-label/web-development"].includes(child) ? "PPC and web delivery" : "SEO and outreach";
  if (parent === "/industries") return child === "/industries/seo-for-tradesmen" ? "Trades" : "Business sectors";
  if (parent === "/industries/seo-for-tradesmen") return "Trades";
  if (parent === "/ppc-management") return child.endsWith("/ppc-audit") ? "Audit" : "Ad channels";
  if (parent === "/web-development") return "Web development";
  if (parent === "/content-writing-services") return "Writing services";
  if (parent === "/blog") return child.includes("link-building") ? "Link building guides" : "SEO guides";
  return "Services";
}

export function groupHubChildren(parent: string, children: PageConfig[]): HubGroup[] {
  const order = groupOrder[parent] ?? ["Services"];
  const groups = new Map<string, PageConfig[]>();
  for (const child of children) {
    const name = groupName(parent, child.slug);
    groups.set(name, [...(groups.get(name) ?? []), child]);
  }
  return [...groups.entries()]
    .sort(([a], [b]) => (order.indexOf(a) < 0 ? order.length : order.indexOf(a)) - (order.indexOf(b) < 0 ? order.length : order.indexOf(b)))
    .map(([title, pages]) => ({ title, pages }));
}
