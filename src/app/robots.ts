import type { MetadataRoute } from "next";
import { baseUrl } from "@/lib/seo";
import { siteNoindex } from "@/lib/site-flags";

export default function robots(): MetadataRoute.Robots {
  if (siteNoindex) {
    return { rules: [{ userAgent: "*", disallow: "/" }], host: baseUrl };
  }
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/dashboard", "/api", "/internal"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
