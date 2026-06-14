import type { AuditGrade, SeoCheckStatus } from "./types";

const STOP_WORDS = new Set([
  "a", "an", "the", "and", "or", "but", "in", "on", "at", "to", "for", "of", "with",
  "by", "from", "as", "is", "was", "are", "were", "be", "been", "being", "have",
  "has", "had", "do", "does", "did", "will", "would", "could", "should", "may",
  "might", "must", "shall", "can", "need", "your", "you", "we", "our", "us", "it",
  "its", "this", "that", "these", "those", "i", "my", "me", "he", "she", "they",
  "them", "their", "what", "which", "who", "when", "where", "why", "how", "all",
  "each", "few", "more", "most", "other", "some", "such", "no", "nor", "not",
  "only", "own", "same", "so", "than", "too", "very", "just", "about", "into",
  "through", "during", "before", "after", "above", "below", "up", "down", "out",
  "off", "over", "under", "again", "further", "then", "once", "here", "there",
]);

export function scoreToGrade(score: number): AuditGrade {
  if (score >= 97) return "A+";
  if (score >= 93) return "A";
  if (score >= 90) return "A-";
  if (score >= 87) return "B+";
  if (score >= 83) return "B";
  if (score >= 80) return "B-";
  if (score >= 77) return "C+";
  if (score >= 73) return "C";
  if (score >= 70) return "C-";
  if (score >= 67) return "D+";
  if (score >= 63) return "D";
  if (score >= 60) return "D-";
  return "F";
}

export function statusWeight(status: SeoCheckStatus): number {
  return status === "pass" ? 1 : status === "warn" ? 0.65 : 0;
}

export function averageScore(values: number[]): number {
  if (!values.length) return 0;
  return Math.round(values.reduce((a, b) => a + b, 0) / values.length);
}

export function decodeEntities(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

export function stripTags(html: string): string {
  return decodeEntities(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
  );
}

export function matchMeta(html: string, key: string): string | null {
  const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const patterns = [
    new RegExp(
      `<meta[^>]+(?:name|property)=["']${escaped}["'][^>]+content=["']([^"']*)["']`,
      "i"
    ),
    new RegExp(
      `<meta[^>]+content=["']([^"']*)["'][^>]+(?:name|property)=["']${escaped}["']`,
      "i"
    ),
  ];
  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match?.[1]) return decodeEntities(match[1]);
  }
  return null;
}

export function extractHead(html: string): string {
  const match = html.match(/<head[\s>][\s\S]*?<\/head>/i);
  return match?.[0] ?? html.slice(0, 80_000);
}

export function countTag(html: string, tag: string): number {
  return (html.match(new RegExp(`<${tag}[\\s>]`, "gi")) ?? []).length;
}

export function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 2 && !STOP_WORDS.has(word));
}

export function topTerms(
  text: string,
  limit: number
): { term: string; frequency: number }[] {
  const freq = new Map<string, number>();
  for (const word of tokenize(text)) {
    freq.set(word, (freq.get(word) ?? 0) + 1);
  }
  return [...freq.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([term, frequency]) => ({ term, frequency }));
}

export function topPhrases(
  text: string,
  limit: number
): { term: string; frequency: number }[] {
  const words = tokenize(text);
  const freq = new Map<string, number>();
  for (let i = 0; i < words.length - 1; i++) {
    for (let size = 2; size <= 4 && i + size <= words.length; size++) {
      const phrase = words.slice(i, i + size).join(" ");
      freq.set(phrase, (freq.get(phrase) ?? 0) + 1);
    }
  }
  return [...freq.entries()]
    .filter(([, count]) => count >= 2)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([term, frequency]) => ({ term, frequency }));
}

export function extractPhone(html: string): string | null {
  const candidates: string[] = [];

  for (const match of html.matchAll(/href=["']tel:([^"'?#]+)["']/gi)) {
    candidates.push(decodeEntities(match[1].replace(/[^\d+()\s.-]/g, "")));
  }

  for (const match of html.matchAll(/"telephone"\s*:\s*"([^"]+)"/gi)) {
    candidates.push(match[1]);
  }

  const itempropContent = html.match(
    /itemprop=["']telephone["'][^>]+content=["']([^"']+)["']/i
  )?.[1];
  if (itempropContent) candidates.push(itempropContent);

  const itempropText = html.match(/itemprop=["']telephone["'][^>]*>([^<]{8,})</i)?.[1];
  if (itempropText) candidates.push(itempropText);

  const contactHtml =
    (html.match(/<footer[\s\S]*?<\/footer>/gi) ?? []).join(" ") +
    html.slice(0, 150_000);
  const contactText = stripTags(contactHtml);
  const textMatches =
    contactText.match(
      /\+?\d{1,3}[\s.-]?\(?\d{2,4}\)?[\s.-]?\d{3,4}[\s.-]?\d{4,}/g
    ) ?? [];
  candidates.push(...textMatches);

  for (const candidate of candidates) {
    const cleaned = candidate.replace(/\s+/g, " ").trim();
    if (isValidPhone(cleaned)) return formatPhone(cleaned);
  }

  return null;
}

export function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.startsWith("44") && digits.length >= 11) {
    return `+44 ${digits.slice(2, 6)} ${digits.slice(6)}`;
  }
  if (digits.startsWith("1") && digits.length === 11) {
    return `+1 (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
  }
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  return raw.trim();
}

export function isValidPhone(raw: string): boolean {
  const digits = raw.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 15) return false;
  if (/^(\d)\1{5,}$/.test(digits)) return false;
  if (/^0{5,}/.test(digits)) return false;
  return true;
}

function isLikelyAddress(text: string): boolean {
  if (/document\.|javascript|function|roadmap|classList|wp-content|http/i.test(text)) {
    return false;
  }
  return /\d/.test(text) && text.length >= 12;
}

export function extractAddress(html: string): { found: boolean; text: string | null } {
  const candidates: string[] = [];

  for (const match of html.matchAll(
    />(\d[\d/\s.-]{0,14}\s*\d*\s+[A-Za-z0-9][^<]{4,70}(?:Street|St\.|Road|Rd\.|Avenue|Ave\.|Lane|Drive|Way|Boulevard|Blvd\.)[^<]{0,90})</gi
  )) {
    candidates.push(decodeEntities(match[1].replace(/\s+/g, " ").trim()));
  }

  const addressTag = html.match(/<address[^>]*>([\s\S]*?)<\/address>/i)?.[1];
  if (addressTag) candidates.push(stripTags(addressTag));

  const street = html.match(/"streetAddress"\s*:\s*"([^"]+)"/i)?.[1];
  const locality = html.match(/"addressLocality"\s*:\s*"([^"]+)"/i)?.[1];
  const region = html.match(/"addressRegion"\s*:\s*"([^"]+)"/i)?.[1];
  const country = html.match(/"addressCountry"\s*:\s*"([^"]+)"/i)?.[1];
  const postal = html.match(/"postalCode"\s*:\s*"([^"]+)"/i)?.[1];
  if (street || locality) {
    candidates.push([street, locality, region, country, postal].filter(Boolean).join(", "));
  }

  for (const candidate of candidates) {
    if (isLikelyAddress(candidate)) {
      return { found: true, text: candidate.slice(0, 140) };
    }
  }

  const footer = html.match(/<footer[\s\S]*?<\/footer>/i)?.[0] ?? html.slice(-350_000);
  const footerText = stripTags(footer);
  const hasKeywords =
    /\b(street|st\.|road|rd\.|avenue|ave\.|suite|floor|glasgow|london|united kingdom|postcode)\b/i.test(
      footerText
    );
  return { found: hasKeywords, text: null };
}

export function parseSitemapFromRobots(robotsText: string): string | null {
  const match = robotsText.match(/^Sitemap:\s*(.+)$/im);
  return match?.[1]?.trim() ?? null;
}

export function buildHeadingText(html: string): string {
  const blocks = html.match(/<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>/gi) ?? [];
  return stripTags(blocks.join(" ")).toLowerCase();
}

export function termInHeadings(term: string, headingText: string): boolean {
  return headingText.includes(term.toLowerCase());
}

const FETCH_UA =
  "Mozilla/5.0 (compatible; LinksResourceSEOAudit/1.0; +https://linksresource.com)";

const HEAD_LIMIT = 280_000;
const TAIL_LIMIT = 320_000;
const MAX_SCAN_BYTES = 1_250_000;

export async function fetchPageForAudit(url: string, timeoutMs: number) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  const started = Date.now();
  const decoder = new TextDecoder("utf-8", { fatal: false });

  try {
    const res = await fetch(url, {
      signal: controller.signal,
      redirect: "follow",
      headers: {
        Accept: "text/html,application/xhtml+xml",
        "User-Agent": FETCH_UA,
      },
    });

    const reader = res.body?.getReader();
    if (!reader) {
      const text = (await res.text()).slice(0, MAX_SCAN_BYTES);
      return {
        html: text.slice(0, HEAD_LIMIT),
        contactHtml: text,
        finalUrl: res.url,
        status: res.status,
        ok: res.ok,
        headers: res.headers,
        bytesRead: text.length,
        responseTimeMs: Date.now() - started,
      };
    }

    let head = "";
    let tail = "";
    let totalBytes = 0;
    let hasHeadEnd = false;
    let contactSignalsFound = false;

    while (true) {
      const { done, value } = await reader.read();
      if (done || !value) break;

      totalBytes += value.length;
      const chunk = decoder.decode(value, { stream: !done });

      if (head.length < HEAD_LIMIT) {
        head += chunk.slice(0, HEAD_LIMIT - head.length);
      }

      tail = (tail + chunk).slice(-TAIL_LIMIT);

      if (!hasHeadEnd && head.includes("</head>")) {
        hasHeadEnd = true;
      }

      if (!contactSignalsFound && /href=["']tel:/i.test(tail)) {
        contactSignalsFound = true;
      }

      if (hasHeadEnd && contactSignalsFound && totalBytes >= HEAD_LIMIT) {
        await reader.cancel();
        break;
      }

      if (totalBytes >= MAX_SCAN_BYTES) {
        await reader.cancel();
        break;
      }
    }

    decoder.decode();

    return {
      html: head,
      contactHtml: head + tail,
      finalUrl: res.url,
      status: res.status,
      ok: res.ok,
      headers: res.headers,
      bytesRead: totalBytes,
      responseTimeMs: Date.now() - started,
    };
  } finally {
    clearTimeout(timer);
  }
}

export async function fetchText(
  url: string,
  timeoutMs: number,
  signal?: AbortSignal
): Promise<{ ok: boolean; text: string; status: number }> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      signal: signal ?? controller.signal,
      redirect: "follow",
      headers: {
        Accept: "text/plain,text/html,application/xml",
        "User-Agent": FETCH_UA,
      },
    });
    const text = await res.text();
    return { ok: res.ok, text: text.slice(0, 50_000), status: res.status };
  } catch {
    return { ok: false, text: "", status: 0 };
  } finally {
    clearTimeout(timer);
  }
}

export function normalizeUrl(input: string): string {
  const trimmed = input.trim();
  if (!trimmed) throw new Error("Please enter a website URL.");
  const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  const url = new URL(withProtocol);
  if (!["http:", "https:"].includes(url.protocol)) {
    throw new Error("Only HTTP and HTTPS URLs are supported.");
  }
  return url.toString();
}

export function isBlockedHost(hostname: string): boolean {
  const host = hostname.toLowerCase();
  return (
    host === "localhost" ||
    host.endsWith(".local") ||
    host === "0.0.0.0" ||
    host.startsWith("127.") ||
    host.startsWith("10.") ||
    host.startsWith("192.168.") ||
    /^172\.(1[6-9]|2\d|3[01])\./.test(host) ||
    host.includes(":")
  );
}
