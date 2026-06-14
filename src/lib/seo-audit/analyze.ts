import type {
  AuditRecommendation,
  AuditSectionScore,
  KeywordRow,
  LinkBreakdown,
  SeoAuditResult,
  SeoCheckStatus,
} from "./types";
import {
  averageScore,
  buildHeadingText,
  countTag,
  decodeEntities,
  extractAddress,
  extractHead,
  extractPhone,
  fetchPageForAudit,
  fetchText,
  isBlockedHost,
  matchMeta,
  normalizeUrl,
  parseSitemapFromRobots,
  scoreToGrade,
  statusWeight,
  stripTags,
  termInHeadings,
  topPhrases,
  topTerms,
} from "./utils";

const FETCH_TIMEOUT_MS = 4_500;
const ROBOTS_TIMEOUT_MS = 800;

function checkStatus(pass: boolean, warn = false): SeoCheckStatus {
  if (pass) return "pass";
  if (warn) return "warn";
  return "fail";
}

function parseLinks(html: string, hostname: string): LinkBreakdown {
  const anchors = html.match(/<a\b[^>]*href=["'][^"']+["'][^>]*>/gi) ?? [];
  let internal = 0;
  let externalFollow = 0;
  let externalNofollow = 0;
  let unfriendly = 0;

  for (const tag of anchors) {
    const href = tag.match(/href=["']([^"']+)["']/i)?.[1] ?? "";
    const nofollow = /rel=["'][^"']*nofollow/i.test(tag);
    const isExternal = /^https?:\/\//i.test(href) && !href.includes(hostname);
    const isInternal =
      href.startsWith("/") ||
      href.startsWith("#") ||
      href.includes(hostname) ||
      !/^https?:\/\//i.test(href);

    if (isInternal) internal++;
    else if (isExternal) {
      if (nofollow) externalNofollow++;
      else externalFollow++;
    }

    if (/[%?=&]{2,}|\/\d{5,}|\.php|\.aspx/.test(href)) unfriendly++;
  }

  return {
    total: anchors.length,
    internal,
    externalFollow,
    externalNofollow,
    unfriendly,
  };
}

function detectTechnologies(html: string, headers: Headers) {
  const items: { name: string; version?: string }[] = [];
  const lower = html.toLowerCase();

  if (lower.includes("wp-content") || lower.includes("wordpress")) {
    items.push({ name: "WordPress" });
  }
  if (lower.includes("jquery")) items.push({ name: "jQuery" });
  if (lower.includes("react") || lower.includes("__next")) items.push({ name: "React / Next.js" });
  if (lower.includes("bootstrap")) items.push({ name: "Bootstrap" });
  if (headers.get("server")) items.push({ name: "Server", version: headers.get("server") ?? undefined });
  if (headers.get("x-powered-by")) {
    items.push({ name: "Platform", version: headers.get("x-powered-by") ?? undefined });
  }

  const generator = html.match(/<meta[^>]+name=["']generator["'][^>]+content=["']([^"']+)["']/i)?.[1];
  if (generator) items.push({ name: "Generator", version: generator });

  return items;
}

function buildRecommendations(data: {
  titleLength: number;
  h1: number;
  imagesMissingAlt: number;
  unfriendlyLinks: number;
  facebookLinked: boolean;
  twitterLinked: boolean;
  instagramLinked: boolean;
  youtubeLinked: boolean;
  linkedinLinked: boolean;
  llmsTxt: boolean;
  analyticsDetected: boolean;
  addressFound: boolean;
  localSchema: boolean;
  facebookPixel: boolean;
  inlineStyles: number;
  usesIframes: boolean;
  plainTextEmails: number;
  externalLinks: number;
}): AuditRecommendation[] {
  const recs: AuditRecommendation[] = [];

  if (data.externalLinks < 3) {
    recs.push({
      title: "Execute a Link Building Strategy",
      category: "Links",
      priority: "High",
    });
  }
  if (data.titleLength > 60) {
    recs.push({
      title: "Reduce length of Title Tag",
      category: "On-Page SEO",
      priority: "Medium",
    });
  }
  if (data.h1 !== 1) {
    recs.push({
      title: "Remove Duplicate H1 Tags",
      category: "On-Page SEO",
      priority: "Medium",
    });
  }
  if (data.unfriendlyLinks > 0) {
    recs.push({
      title: "Update Link URLs to be more readable",
      category: "Links",
      priority: "Low",
    });
  }
  if (data.imagesMissingAlt > 0) {
    recs.push({
      title: "Add Alt Attributes to all images",
      category: "On-Page SEO",
      priority: "Low",
    });
  }
  if (!data.facebookLinked) {
    recs.push({
      title: "Create and link your Facebook Page",
      category: "Other",
      priority: "Low",
    });
  }
  if (!data.twitterLinked) {
    recs.push({
      title: "Create and link your X Profile",
      category: "Other",
      priority: "Low",
    });
  }
  if (!data.instagramLinked) {
    recs.push({
      title: "Create and link an associated Instagram Profile",
      category: "Other",
      priority: "Low",
    });
  }
  if (!data.youtubeLinked) {
    recs.push({
      title: "Create and link an associated YouTube Channel",
      category: "Other",
      priority: "Low",
    });
  }
  if (!data.linkedinLinked) {
    recs.push({
      title: "Create and link an associated LinkedIn Profile",
      category: "Other",
      priority: "Low",
    });
  }
  if (!data.llmsTxt) {
    recs.push({
      title: "Implement a llms.txt File",
      category: "GEO",
      priority: "Low",
    });
  }
  if (!data.analyticsDetected) {
    recs.push({
      title: "Implement an Analytics Tracking Tool",
      category: "On-Page SEO",
      priority: "Low",
    });
  }
  if (!data.addressFound) {
    recs.push({
      title: "Add Business Address and Phone Number to site",
      category: "Other",
      priority: "Low",
    });
  }
  if (!data.localSchema) {
    recs.push({
      title: "Add Local Business Schema",
      category: "Other",
      priority: "Low",
    });
  }
  if (!data.facebookPixel) {
    recs.push({
      title: "Install a Facebook Pixel",
      category: "Other",
      priority: "Low",
    });
  }
  if (data.inlineStyles > 5) {
    recs.push({
      title: "Remove Inline Styles",
      category: "Performance",
      priority: "Low",
    });
  }
  if (data.usesIframes) {
    recs.push({
      title: "Remove iFrames",
      category: "Usability",
      priority: "Low",
    });
  }
  if (data.plainTextEmails > 0) {
    recs.push({
      title: "Remove Clear Text Email Addresses",
      category: "Usability",
      priority: "Low",
    });
  }

  const priorityOrder = { High: 0, Medium: 1, Low: 2 };
  return recs.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
}

function sectionStatus(score: number): AuditSectionScore["status"] {
  if (score >= 85) return "good";
  if (score >= 70) return "ok";
  return "needs-work";
}

export async function runSeoAudit(
  inputUrl: string,
  lead?: {
    fullName: string;
    workEmail: string;
    company: string;
    targetCompany: string;
    purpose: string;
  }
): Promise<SeoAuditResult> {
  const url = normalizeUrl(inputUrl);
  const parsed = new URL(url);
  if (isBlockedHost(parsed.hostname)) {
    throw new Error("This URL cannot be audited for security reasons.");
  }

  const origin = parsed.origin;

  const [page, robots] = await Promise.all([
    fetchPageForAudit(url, FETCH_TIMEOUT_MS),
    fetchText(`${origin}/robots.txt`, ROBOTS_TIMEOUT_MS),
  ]);

  if (!page.ok && page.status >= 400) {
    throw new Error(`The site returned HTTP ${page.status}. Please verify the URL.`);
  }

  const html = page.html;
  const scanHtml = page.contactHtml;
  const head = extractHead(html);
  const bodyText = stripTags(html);
  const titleMatch = head.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = titleMatch?.[1] ? decodeEntities(titleMatch[1]) : null;
  const metaDescription = matchMeta(head, "description");
  const titleLength = title?.length ?? 0;
  const metaDescriptionLength = metaDescription?.length ?? 0;
  const headers = {
    h1: countTag(html, "h1"),
    h2: countTag(html, "h2"),
    h3: countTag(html, "h3"),
    h4: countTag(html, "h4"),
    h5: countTag(html, "h5"),
    h6: countTag(html, "h6"),
  };
  const images = scanHtml.match(/<img\b[^>]*>/gi) ?? [];
  const imagesMissingAlt = images.filter((tag) => !/\balt\s*=/i.test(tag)).length;
  const wordCount = bodyText.split(/\s+/).filter(Boolean).length;
  const canonical =
    head.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)?.[1] ?? null;
  const robotsMeta = matchMeta(head, "robots")?.toLowerCase() ?? "";
  const noindex = robotsMeta.includes("noindex");
  const hreflang = /<link[^>]+rel=["']alternate["'][^>]+hreflang=/i.test(head);
  const language = html.match(/<html[^>]+lang=["']([^"']+)["']/i)?.[1] ?? null;
  const hasSchema = /<script[^>]+type=["']application\/ld\+json["']/i.test(html);
  const hasOrganizationSchema =
    hasSchema && /"@type"\s*:\s*"(Organization|LocalBusiness|Corporation)"/i.test(html);
  const analyticsDetected =
    /google-analytics|googletagmanager|gtag\(|GTM-|analytics\.js|clarity\.ms|hotjar/i.test(html);
  const linkBreakdown = parseLinks(scanHtml, parsed.hostname);
  const hasViewport = !!matchMeta(head, "viewport");
  const hasFavicon = /<link[^>]+rel=["'](?:shortcut )?icon["']/i.test(head);
  const usesIframes = /<iframe\b/i.test(html);
  const plainTextEmails = (bodyText.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi) ?? []).length;
  const hasFlash = /<object\b|<embed\b/i.test(html) && /flash/i.test(html);
  const compression = page.headers.get("content-encoding");
  const inlineStyles = (html.match(/\sstyle=["'][^"']+["']/gi) ?? []).length;
  const usesAmp = /⚡|amp-/i.test(html);
  const jsCount = (html.match(/<script\b/gi) ?? []).length;
  const cssCount = (html.match(/<link[^>]+rel=["']stylesheet["']/gi) ?? []).length;
  const imageCount = images.length;

  const socialPatterns = {
    facebookLinked: /facebook\.com\//i.test(html),
    facebookOg: !!matchMeta(head, "og:title"),
    facebookPixel: /fbq\(|facebook\.net\/en_US\/fbevents/i.test(html),
    twitterLinked: /(twitter\.com|x\.com)\//i.test(html),
    twitterCards: !!matchMeta(head, "twitter:card"),
    instagramLinked: /instagram\.com\//i.test(html),
    linkedinLinked: /linkedin\.com\//i.test(html),
    youtubeLinked: /youtube\.com\//i.test(html),
  };

  const phone = extractPhone(scanHtml);
  const address = extractAddress(scanHtml);
  const localSchema = /"@type"\s*:\s*"(LocalBusiness|Organization)"/i.test(html);

  const robotsTxt = robots.ok;
  const robotsTxtUrl = robotsTxt ? `${origin}/robots.txt` : null;
  const sitemapUrl = robots.ok ? parseSitemapFromRobots(robots.text) : null;
  const sitemapFound = !!sitemapUrl || /<link[^>]+rel=["']sitemap["']/i.test(head);
  const llmsTxt =
    /llms\.txt/i.test(scanHtml) ||
    /llms\.txt/i.test(robots.text);

  const titleStatus = checkStatus(
    !!title && titleLength >= 50 && titleLength <= 60,
    !!title && titleLength > 0
  );
  const metaDescriptionStatus = checkStatus(
    !!metaDescription && metaDescriptionLength >= 120 && metaDescriptionLength <= 160,
    !!metaDescription
  );

  const headingText = buildHeadingText(html);
  const titleLower = title?.toLowerCase() ?? "";
  const metaLower = metaDescription?.toLowerCase() ?? "";

  const keywords = topTerms(bodyText, 6).map((item) => ({
    term: item.term,
    title: titleLower.includes(item.term),
    meta: metaLower.includes(item.term),
    headings: termInHeadings(item.term, headingText),
    frequency: item.frequency,
  }));

  const phrases = topPhrases(bodyText, 6).map((item) => ({
    term: item.term,
    title: titleLower.includes(item.term),
    meta: metaLower.includes(item.term),
    headings: termInHeadings(item.term, headingText),
    frequency: item.frequency,
  }));

  const renderedContentPct = Math.min(
    100,
    Math.round((bodyText.length / Math.max(html.length, 1)) * 100)
  );

  const onPageScore = averageScore([
    statusWeight(titleStatus) * 100,
    statusWeight(metaDescriptionStatus) * 100,
    headers.h1 === 1 ? 100 : headers.h1 === 0 ? 0 : 65,
    wordCount >= 600 ? 100 : wordCount >= 300 ? 70 : 40,
    imagesMissingAlt === 0 ? 100 : imagesMissingAlt <= 3 ? 70 : 45,
    canonical ? 100 : 70,
    noindex ? 0 : 100,
    hasSchema ? 100 : 65,
    robotsTxt ? 100 : 60,
    sitemapFound ? 100 : 60,
  ]);

  const geoScore = averageScore([
    hasOrganizationSchema ? 100 : 60,
    renderedContentPct >= 15 ? 100 : renderedContentPct >= 8 ? 70 : 45,
    llmsTxt ? 100 : 50,
  ]);

  const linksScore = averageScore([
    linkBreakdown.total >= 20 ? 100 : linkBreakdown.total >= 8 ? 75 : 50,
    linkBreakdown.externalFollow >= 2 ? 100 : 60,
    linkBreakdown.unfriendly === 0 ? 100 : 65,
  ]);

  const usabilityScore = averageScore([
    hasViewport ? 100 : 0,
    hasFavicon ? 100 : 70,
    !usesIframes ? 100 : 55,
    plainTextEmails === 0 ? 100 : 60,
    !hasFlash ? 100 : 40,
  ]);

  const perfScore = averageScore([
    page.responseTimeMs <= 1500 ? 100 : page.responseTimeMs <= 3000 ? 75 : 45,
    page.bytesRead <= 800_000 ? 100 : page.bytesRead <= 1_500_000 ? 70 : 45,
    compression ? 100 : 70,
    inlineStyles <= 5 ? 100 : inlineStyles <= 15 ? 70 : 50,
  ]);

  const socialScore = averageScore([
    socialPatterns.facebookOg ? 100 : 60,
    socialPatterns.twitterCards ? 100 : 60,
    socialPatterns.facebookLinked ? 100 : 55,
    socialPatterns.linkedinLinked ? 100 : 55,
  ]);

  const localScore = averageScore([
    phone ? 100 : 50,
    address.found ? 100 : 55,
    localSchema ? 100 : 50,
  ]);

  const sections: AuditSectionScore[] = [
    {
      id: "on-page",
      label: "On-Page SEO",
      grade: scoreToGrade(onPageScore),
      score: onPageScore,
      status: sectionStatus(onPageScore),
      summary:
        onPageScore >= 85
          ? "Your On-Page SEO is good"
          : onPageScore >= 70
            ? "Your On-Page SEO is OK but can improve"
            : "Your On-Page SEO needs attention",
    },
    {
      id: "geo",
      label: "GEO",
      grade: scoreToGrade(geoScore),
      score: geoScore,
      status: sectionStatus(geoScore),
      summary:
        geoScore >= 85
          ? "Your Generative Engine Optimization is strong"
          : "Your Generative Engine Optimization could be better",
    },
    {
      id: "links",
      label: "Links",
      grade: scoreToGrade(linksScore),
      score: linksScore,
      status: sectionStatus(linksScore),
      summary:
        linkBreakdown.externalFollow >= 5
          ? "Your on-page link structure is healthy"
          : "Your on-page link profile could be stronger",
    },
    {
      id: "usability",
      label: "Usability",
      grade: scoreToGrade(usabilityScore),
      score: usabilityScore,
      status: sectionStatus(usabilityScore),
      summary:
        usabilityScore >= 85
          ? "Your usability is strong across devices"
          : "Your usability could be better",
    },
    {
      id: "performance",
      label: "Performance",
      grade: scoreToGrade(perfScore),
      score: perfScore,
      status: sectionStatus(perfScore),
      summary:
        perfScore >= 85
          ? "Your performance is very good!"
          : "Your performance has room for improvement",
    },
    {
      id: "social",
      label: "Social",
      grade: scoreToGrade(socialScore),
      score: socialScore,
      status: sectionStatus(socialScore),
      summary: "Social signals and sharing metadata review",
    },
    {
      id: "local",
      label: "Local SEO",
      grade: scoreToGrade(localScore),
      score: localScore,
      status: sectionStatus(localScore),
      summary: "Local business visibility and schema review",
    },
  ];

  const overallScore = averageScore(sections.map((s) => s.score));
  const overallGrade = scoreToGrade(overallScore);

  const recommendations = buildRecommendations({
    titleLength,
    h1: headers.h1,
    imagesMissingAlt,
    unfriendlyLinks: linkBreakdown.unfriendly,
    facebookLinked: socialPatterns.facebookLinked,
    twitterLinked: socialPatterns.twitterLinked,
    instagramLinked: socialPatterns.instagramLinked,
    youtubeLinked: socialPatterns.youtubeLinked,
    linkedinLinked: socialPatterns.linkedinLinked,
    llmsTxt,
    analyticsDetected,
    addressFound: address.found,
    localSchema,
    facebookPixel: socialPatterns.facebookPixel,
    inlineStyles,
    usesIframes,
    plainTextEmails,
    externalLinks: linkBreakdown.externalFollow,
  });

  return {
    url: inputUrl.trim(),
    finalUrl: page.finalUrl,
    hostname: parsed.hostname,
    generatedAt: new Date().toISOString(),
    overallGrade,
    overallScore,
    headline:
      overallScore >= 85
        ? "Your page is performing well"
        : overallScore >= 70
          ? "Your page could be better"
          : "Your page needs SEO improvements",
    intro:
      "This report grades your website based on on-page optimization, links, usability, performance, social signals, and more. Improving your grade generally helps users and search visibility.",
    responseTimeMs: page.responseTimeMs,
    pageSizeKb: Math.round(page.bytesRead / 1024),
    sections,
    recommendations,
    onPage: {
      sectionSummary: sections[0].summary,
      title,
      titleLength,
      titleStatus,
      metaDescription,
      metaDescriptionLength,
      metaDescriptionStatus,
      hreflang,
      language,
      headers,
      wordCount,
      imageCount: images.length,
      imagesMissingAlt,
      canonical,
      noindex,
      ssl: page.finalUrl.startsWith("https://"),
      robotsTxt,
      robotsTxtUrl,
      sitemap: sitemapFound,
      sitemapUrl: sitemapUrl ?? (sitemapFound ? `${origin}/sitemap.xml` : null),
      analyticsDetected,
      hasSchema,
      keywords,
      phrases,
    },
    geo: {
      sectionSummary: sections[1].summary,
      hasOrganizationSchema,
      renderedContentPct,
      llmsTxt,
      llmsTxtUrl: llmsTxt ? `${origin}/llms.txt` : null,
    },
    links: {
      sectionSummary: sections[2].summary,
      breakdown: linkBreakdown,
    },
    usability: {
      sectionSummary: sections[3].summary,
      hasViewport,
      hasFavicon,
      usesIframes,
      plainTextEmails,
      hasFlash,
    },
    performance: {
      sectionSummary: sections[4].summary,
      serverResponseSec: page.responseTimeMs / 1000,
      pageSizeMb: page.bytesRead / (1024 * 1024),
      compression,
      resourceCounts: {
        html: 1,
        js: jsCount,
        css: cssCount,
        images: imageCount,
        other: Math.max(linkBreakdown.total - imageCount, 0),
        total: 1 + jsCount + cssCount + imageCount,
      },
      inlineStyles,
      usesAmp,
    },
    social: {
      sectionSummary: sections[5].summary,
      ...socialPatterns,
    },
    local: {
      sectionSummary: sections[6].summary,
      phoneFound: !!phone,
      phone,
      addressFound: address.found,
      address: address.text,
      localSchema,
    },
    technology: {
      items: detectTechnologies(html, page.headers),
      charset: page.headers.get("content-type"),
      server: page.headers.get("server"),
    },
    ...(lead ? { lead } : {}),
  };
}
