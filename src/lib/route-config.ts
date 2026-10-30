import { resources, tags } from "@/lib/data";
import { restoredLegalRoutes, restoredServiceRoutes } from "@/lib/restored-routes";
import { isIndexableResource } from "@/lib/resource-policy";
import { pageConfigs } from "../../content/pages";

export type IndexableRoute = {
  path: string;
  updatedAt?: string;
  indexable: boolean;
};

// Add updatedAt only when the page's content revision date is known.
// A build timestamp or a resource's creation date is not a content lastmod.
export const staticRoutes: IndexableRoute[] = [
  "/", "/about", "/team", "/contact", "/case-studies",
  "/link-building-services", "/link-building-services/publications",
  "/resources", "/categories", "/submit",
].map((path) => ({ path, indexable: true }));

export function indexableRoutes(): IndexableRoute[] {
  const configured = new Set(pageConfigs.map((page) => page.slug));
  return [
    ...staticRoutes.filter((route) => !configured.has(route.path)),
    ...[...Object.keys(restoredServiceRoutes), ...Object.keys(restoredLegalRoutes)]
      .filter((path) => !configured.has(path))
      .map((path) => ({ path, indexable: true, updatedAt: "2026-10-30" })),
    ...pageConfigs
      .filter((page) => page.status === "published")
      .map((page) => ({ path: page.slug, indexable: true, updatedAt: page.updatedAt })),
    ...resources
      .filter((resource) => isIndexableResource(resource.slug))
      .map((resource) => ({ path: `/resources/${resource.slug}`, indexable: true })),
    ...tags.map((tag) => ({ path: `/tags/${tag.slug}`, indexable: true })),
  ];
}
