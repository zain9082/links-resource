import type { MetadataRoute } from "next";
import { resources, categories, tags } from "@/lib/data";
import { baseUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/resources",
    "/categories",
    "/search",
    "/submit",
    "/about",
    "/team",
    "/case-studies",
    "/contact",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const resourceRoutes = resources.map((r) => ({
    url: `${baseUrl}/resources/${r.slug}`,
    lastModified: new Date(r.createdAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const categoryRoutes = categories.map((c) => ({
    url: `${baseUrl}/categories/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const tagRoutes = tags.map((t) => ({
    url: `${baseUrl}/tags/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.4,
  }));

  return [...staticRoutes, ...resourceRoutes, ...categoryRoutes, ...tagRoutes];
}
