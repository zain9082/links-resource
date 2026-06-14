export type SeoCheckStatus = "pass" | "warn" | "fail";

export type AuditGrade =
  | "A+"
  | "A"
  | "A-"
  | "B+"
  | "B"
  | "B-"
  | "C+"
  | "C"
  | "C-"
  | "D+"
  | "D"
  | "D-"
  | "F";

export type RecommendationCategory =
  | "On-Page SEO"
  | "GEO"
  | "Links"
  | "Usability"
  | "Performance"
  | "Other";

export type RecommendationPriority = "High" | "Medium" | "Low";

export type AuditRecommendation = {
  title: string;
  category: RecommendationCategory;
  priority: RecommendationPriority;
};

export type AuditSectionScore = {
  id: "on-page" | "geo" | "links" | "usability" | "performance" | "social" | "local";
  label: string;
  grade: AuditGrade;
  score: number;
  status: "good" | "ok" | "needs-work";
  summary: string;
};

export type KeywordRow = {
  term: string;
  title: boolean;
  meta: boolean;
  headings: boolean;
  frequency: number;
};

export type HeaderCounts = {
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  h5: number;
  h6: number;
};

export type LinkBreakdown = {
  total: number;
  internal: number;
  externalFollow: number;
  externalNofollow: number;
  unfriendly: number;
};

export type SeoAuditResult = {
  url: string;
  finalUrl: string;
  hostname: string;
  generatedAt: string;
  overallGrade: AuditGrade;
  overallScore: number;
  headline: string;
  intro: string;
  responseTimeMs: number;
  pageSizeKb: number;
  sections: AuditSectionScore[];
  recommendations: AuditRecommendation[];
  onPage: {
    sectionSummary: string;
    title: string | null;
    titleLength: number;
    titleStatus: SeoCheckStatus;
    metaDescription: string | null;
    metaDescriptionLength: number;
    metaDescriptionStatus: SeoCheckStatus;
    hreflang: boolean;
    language: string | null;
    headers: HeaderCounts;
    wordCount: number;
    imageCount: number;
    imagesMissingAlt: number;
    canonical: string | null;
    noindex: boolean;
    ssl: boolean;
    robotsTxt: boolean;
    robotsTxtUrl: string | null;
    sitemap: boolean;
    sitemapUrl: string | null;
    analyticsDetected: boolean;
    hasSchema: boolean;
    keywords: KeywordRow[];
    phrases: KeywordRow[];
  };
  geo: {
    sectionSummary: string;
    hasOrganizationSchema: boolean;
    renderedContentPct: number;
    llmsTxt: boolean;
    llmsTxtUrl: string | null;
  };
  links: {
    sectionSummary: string;
    breakdown: LinkBreakdown;
  };
  usability: {
    sectionSummary: string;
    hasViewport: boolean;
    hasFavicon: boolean;
    usesIframes: boolean;
    plainTextEmails: number;
    hasFlash: boolean;
  };
  performance: {
    sectionSummary: string;
    serverResponseSec: number;
    pageSizeMb: number;
    compression: string | null;
    resourceCounts: {
      html: number;
      js: number;
      css: number;
      images: number;
      other: number;
      total: number;
    };
    inlineStyles: number;
    usesAmp: boolean;
  };
  social: {
    sectionSummary: string;
    facebookLinked: boolean;
    facebookOg: boolean;
    facebookPixel: boolean;
    twitterLinked: boolean;
    twitterCards: boolean;
    instagramLinked: boolean;
    linkedinLinked: boolean;
    youtubeLinked: boolean;
  };
  local: {
    sectionSummary: string;
    phoneFound: boolean;
    phone: string | null;
    addressFound: boolean;
    address: string | null;
    localSchema: boolean;
  };
  lead?: {
    fullName: string;
    workEmail: string;
    company: string;
    targetCompany: string;
    purpose: string;
  };
  technology: {
    items: { name: string; version?: string }[];
    charset: string | null;
    server: string | null;
  };
};

export type SeoAuditError = {
  error: string;
  message: string;
};

export type SeoAuditResponse = SeoAuditResult | SeoAuditError;

export function isSeoAuditError(
  data: SeoAuditResponse
): data is SeoAuditError {
  return "error" in data;
}
