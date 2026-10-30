import type { PageConfig } from "./types";
import page0 from "./home";
import page1 from "./seo-services";
import page2 from "./seo-services/organic-seo";
import page3 from "./seo-services/local-seo";
import page4 from "./seo-services/technical-seo";
import page5 from "./seo-services/on-page-seo";
import page6 from "./seo-services/seo-audit";
import page7 from "./seo-services/keyword-research";
import page8 from "./seo-packages";
import page9 from "./seo-services/small-business-seo";
import page10 from "./blog/how-much-does-seo-cost-uk";
import page11 from "./ai-seo-agency";
import page12 from "./blog/geo-vs-seo";
import page13 from "./seo-services/wordpress-seo";
import page14 from "./seo-services/ecommerce-seo";
import page15 from "./seo-services/international-seo";
import page16 from "./seo-services/enterprise-seo";
import page17 from "./seo-consultancy";
import page18 from "./link-building-services";
import page19 from "./white-label/link-building";
import page20 from "./link-building-services/packages";
import page21 from "./guest-posting-services";
import page22 from "./blogger-outreach-services";
import page23 from "./niche-edits";
import page24 from "./digital-pr-services";
import page25 from "./industries/seo-for-law-firms";
import page26 from "./industries/dental-seo";
import page27 from "./industries/saas-seo";
import page28 from "./industries/fintech-seo";
import page29 from "./industries/estate-agent-seo";
import page30 from "./industries/seo-for-tradesmen";
import page31 from "./industries/seo-for-tradesmen/plumbers";
import page32 from "./industries/seo-for-tradesmen/electricians";
import page33 from "./industries/seo-for-tradesmen/gas-engineers";
import page34 from "./industries/seo-for-tradesmen/roofers";
import page35 from "./industries/seo-for-tradesmen/gardeners";
import page36 from "./industries/automotive-seo";
import page37 from "./industries/travel-seo";
import page38 from "./white-label/seo";
import page39 from "./white-label/seo/reseller";
import page40 from "./white-label/seo/local-seo";
import page41 from "./white-label/ppc";
import page42 from "./white-label/web-development";
import page43 from "./white-label";
import page44 from "./ppc-management";
import page45 from "./ppc-management/google-ads";
import page46 from "./ppc-management/microsoft-ads";
import page47 from "./ppc-management/ppc-audit";
import page48 from "./web-development";
import page49 from "./web-development/wordpress";
import page50 from "./web-development/website-redesign";
import page51 from "./web-development/ecommerce";
import page52 from "./content-writing-services";
import page53 from "./content-writing-services/blog-writing";
import page54 from "./locations/london";
import page55 from "./locations/nottingham";
import page56 from "./locations/york";
import page57 from "./locations/bristol";
import page58 from "./locations/leicester";
import page59 from "./locations/manchester";
import page60 from "./locations/newcastle";
import page61 from "./locations/leeds";
import page62 from "./locations/sheffield";
import page63 from "./locations/cheltenham";
import page64 from "./locations/milton-keynes";
import page65 from "./locations/birmingham";
import page66 from "./locations/cambridge";
import page67 from "./locations/brighton";
import page68 from "./locations/staffordshire";
import page69 from "./locations/liverpool";
import page70 from "./locations/reading";
import page71 from "./locations/warwickshire";
import page72 from "./locations/hertfordshire";
import page73 from "./locations/kent";
import page74 from "./locations/suffolk";
import page75 from "./locations/norwich";
import page76 from "./locations/cornwall";
import page77 from "./locations/scotland";
import page78 from "./blog/technical-seo-audit-checklist";
import page79 from "./blog/link-building-basics";
import page80 from "./blog/saas-seo-checklist";
import page81 from "./blog/seo-for-estate-agents";
import page82 from "./case-studies";
import page83 from "./industries";
import page84 from "./locations";
import page85 from "./blog";

export const pageConfigs: PageConfig[] = [
  page0, page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14, page15, page16, page17, page18, page19, page20, page21, page22, page23, page24, page25, page26, page27, page28, page29, page30, page31, page32, page33, page34, page35, page36, page37, page38, page39, page40, page41, page42, page43, page44, page45, page46, page47, page48, page49, page50, page51, page52, page53, page54, page55, page56, page57, page58, page59, page60, page61, page62, page63, page64, page65, page66, page67, page68, page69, page70, page71, page72, page73, page74, page75, page76, page77, page78, page79, page80, page81, page82, page83, page84, page85
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
