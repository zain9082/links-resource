export type PageTemplate =
  | "serviceHub"
  | "serviceChild"
  | "whiteLabel"
  | "industry"
  | "location"
  | "ppc"
  | "webDev"
  | "blogGuide"
  | "caseStudies";

export type PageStatus = "draft" | "published";
export type PagePriority = "P1" | "P2" | "P3";
export type PageAudience = "direct UK business owner" | "white-label agency" | "both";

type BaseBlock = { heading?: string; body: string };

export type PageBlock =
  | ({ type: "hero"; eyebrow?: string } & BaseBlock)
  | ({ type: "problem" } & BaseBlock)
  | ({ type: "servicesGrid"; items?: { title: string; description: string; href?: string }[] } & BaseBlock)
  | ({ type: "process"; steps?: { title: string; description: string }[] } & BaseBlock)
  | ({ type: "proof"; metrics?: { label: string; value: string }[] } & BaseBlock)
  | ({ type: "pricing"; plans?: { name: string; description: string }[] } & BaseBlock)
  | ({ type: "comparison"; columns?: { title: string; points: string[] }[] } & BaseBlock)
  | ({ type: "faq" } & BaseBlock)
  | ({ type: "cta"; href?: string; label?: string } & BaseBlock)
  | ({ type: "richText" } & BaseBlock);

export type PageFaq = { question: string; answer: string };

export type PageConfig = {
  slug: string; // canonical pathname, e.g. /seo-services/local-seo
  parent: string | null;
  template: PageTemplate;
  status: PageStatus;
  updatedAt: string; // date of the content revision, ISO 8601
  title: string;
  metaDescription: string;
  h1: string;
  primaryKeyword: string;
  supportingKeywords: string[];
  priority: PagePriority;
  audience: PageAudience;
  sections: PageBlock[];
  faqs: PageFaq[];
  relatedSlugs: string[];
};
