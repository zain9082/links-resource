import { categories, resources, tags } from "@/lib/data";

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
  return [
    ...staticRoutes,
    ...resources
      .filter((resource) => !resource.slug.startsWith("sync-probe-"))
      .map((resource) => ({ path: `/resources/${resource.slug}`, indexable: true })),
    ...categories.map((category) => ({ path: `/categories/${category.slug}`, indexable: true })),
    ...tags.map((tag) => ({ path: `/tags/${tag.slug}`, indexable: true })),
  ];
}
