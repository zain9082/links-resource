import type { MetadataRoute } from "next";
import { canonicalUrl } from "@/lib/seo";
import { indexableRoutes } from "@/lib/route-config";
import { siteNoindex } from "@/lib/site-flags";

export default function sitemap(): MetadataRoute.Sitemap {
  if (siteNoindex) return [];
  return indexableRoutes()
    .filter((route) => route.indexable)
    .map((route) => ({
      url: canonicalUrl(route.path),
      ...(route.updatedAt ? { lastModified: new Date(route.updatedAt) } : {}),
    }));
}
