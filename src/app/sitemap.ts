import type { MetadataRoute } from "next";
import { resources, categories, tags } from "@/lib/data";
import { baseUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/resources",
    "/categories",
    "/submit",
    "/about",
    "/team",
    "/case-studies",
    "/contact",
    "/link-building-services",
    "/link-building-services/publications",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const resourceRoutes = resources.map((r) => ({
    url: `${baseUrl}/resources/${r.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const categoryRoutes = categories.map((c) => ({
    url: `${baseUrl}/categories/${c.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const tagRoutes = tags.map((t) => ({
    url: `${baseUrl}/tags/${t.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.4,
  }));

  return [...staticRoutes, ...resourceRoutes, ...categoryRoutes, ...tagRoutes];
}
