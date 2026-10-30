import type { PageConfig } from "./types";
import home from "./home";
import seoServices from "./seo-services";
import localSeo from "./seo-services/local-seo";
import seoAudit from "./seo-services/seo-audit";
import seoPackages from "./seo-packages";
import aiSeo from "./ai-seo-agency";
import linkBuilding from "./link-building-services";
import guestPosting from "./guest-posting-services";
import whiteLabel from "./white-label";
import whiteLabelLinkBuilding from "./white-label/link-building";
import whiteLabelSeo from "./white-label/seo";
import seoReseller from "./white-label/seo/reseller";
import ppc from "./ppc-management";
import webDev from "./web-development";
import contentWriting from "./content-writing-services";

export const pageConfigs: PageConfig[] = [
  home, seoServices, localSeo, seoAudit, seoPackages, aiSeo,
  linkBuilding, guestPosting, whiteLabel, whiteLabelLinkBuilding,
  whiteLabelSeo, seoReseller, ppc, webDev, contentWriting,
];

const bySlug = new Map(pageConfigs.map((page) => [page.slug, page]));

export function getPageConfig(slug: string): PageConfig | undefined {
  return bySlug.get(slug);
}

export function publishedPageConfigs(): PageConfig[] {
  return pageConfigs.filter((page) => page.status === "published");
}

export function publishedChildren(parent: string): PageConfig[] {
  return publishedPageConfigs().filter((page) => page.parent === parent);
}

export function publishedRelated(page: PageConfig): PageConfig[] {
  return page.relatedSlugs
    .map((slug) => getPageConfig(slug))
    .filter((related): related is PageConfig => !!related && related.status === "published")
    .slice(0, 3);
}
