// Thin directory entries are consolidated into the closest published service.
// The high-content service resources remain available at their live URLs.
export const resourceRedirects: Record<string, string> = {
  "ai-content-assistant": "/content-writing-services",
  "brand-design-system": "/web-development",
  "geo-llm-optimization": "/seo-services",
  "keyword-research-kit": "/seo-services",
};

export function isIndexableResource(slug: string) {
  return !slug.startsWith("sync-probe-") && !(slug in resourceRedirects);
}
