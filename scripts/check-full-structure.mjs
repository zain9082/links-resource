import fs from "node:fs/promises";
import path from "node:path";

const base = process.env.CHECK_BASE_URL ?? "http://127.0.0.1:3000";
const origin = new URL(base).origin;

function parseCsv(input) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (char === '"') {
      if (quoted && input[i + 1] === '"') { field += '"'; i++; }
      else quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(field); field = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && input[i + 1] === "\n") i++;
      row.push(field); field = "";
      if (row.some(Boolean)) rows.push(row);
      row = [];
    } else field += char;
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  return rows;
}

async function pageConfigs() {
  const root = path.resolve("content/pages");
  const files = [];
  async function visit(dir) {
    for (const item of await fs.readdir(dir, { withFileTypes: true })) {
      const full = path.join(dir, item.name);
      if (item.isDirectory()) await visit(full);
      else if (item.name.endsWith(".ts")) files.push(full);
    }
  }
  await visit(root);
  const configs = [];
  for (const file of files) {
    const source = await fs.readFile(file, "utf8");
    const start = source.indexOf("export default {");
    const end = source.lastIndexOf("} satisfies PageConfig");
    if (start >= 0 && end > start) configs.push(JSON.parse(source.slice(start + "export default ".length, end + 1)));
  }
  return configs;
}

function anchorPaths(html) {
  const paths = new Set();
  for (const match of html.matchAll(/<a\b[^>]*\bhref=["']([^"']+)["']/gi)) {
    const href = match[1].replaceAll("&amp;", "&");
    if (href.startsWith("#") || /^(mailto:|tel:|javascript:)/i.test(href)) continue;
    try {
      const url = new URL(href, origin);
      if (![new URL(origin).hostname, "linksresource.com", "www.linksresource.com"].includes(url.hostname)) continue;
      paths.add(url.pathname + url.search);
    } catch { /* Ignore malformed external links; normal anchors are checked below. */ }
  }
  return paths;
}

async function pool(items, worker, concurrency = 8) {
  let cursor = 0;
  await Promise.all(Array.from({ length: Math.min(items.length, concurrency) }, async () => {
    while (cursor < items.length) await worker(items[cursor++]);
  }));
}

const csv = parseCsv(await fs.readFile("docs/new-structure.csv", "utf8"));
const urlIndex = csv[0].indexOf("Proposed URL");
const csvPaths = csv.slice(1).map((row) => row[urlIndex].replace(/\/+$/, "") || "/");
const configs = await pageConfigs();
const allPaths = [...new Set([...csvPaths, "/industries", "/locations", "/blog", "/internal/pages"])];
const errors = [];
const htmlByPath = new Map();
let noindexCount = 0;
let headerCount = 0;

await pool(allPaths, async (page) => {
  try {
    const response = await fetch(new URL(page, origin), { redirect: "follow" });
    const html = await response.text();
    htmlByPath.set(page, html);
    if (response.status !== 200) errors.push(`${page}: HTTP ${response.status}`);
    const robots = html.match(/<meta\b[^>]*name=["']robots["'][^>]*>/i)?.[0] ?? "";
    if (/noindex/i.test(robots) && /nofollow/i.test(robots)) noindexCount++;
    else errors.push(`${page}: robots meta is not noindex,nofollow`);
    const header = response.headers.get("x-robots-tag") ?? "";
    if (/noindex/i.test(header)) headerCount++;
    else errors.push(`${page}: missing X-Robots-Tag noindex`);
  } catch (error) { errors.push(`${page}: ${error.message}`); }
});

const allLinks = new Set();
for (const html of htmlByPath.values()) for (const link of anchorPaths(html)) allLinks.add(link);
let goodLinks = 0;
await pool([...allLinks], async (link) => {
  try {
    const response = await fetch(new URL(link, origin), { redirect: "follow" });
    if (response.ok) goodLinks++;
    else errors.push(`broken internal link ${link}: HTTP ${response.status}`);
  } catch (error) { errors.push(`broken internal link ${link}: ${error.message}`); }
});

const hubs = ["/seo-services", "/white-label", "/industries/seo-for-tradesmen", "/ppc-management", "/web-development", "/content-writing-services", "/locations", "/industries", "/blog"];
let childLinks = 0;
for (const hub of hubs) {
  const links = anchorPaths(htmlByPath.get(hub) ?? "");
  for (const child of configs.filter((page) => page.parent === hub)) {
    if (links.has(child.slug)) childLinks++;
    else errors.push(`${hub}: missing child link ${child.slug}`);
  }
}

const robots = await (await fetch(new URL("/robots.txt", origin))).text();
if (!/Disallow:\s*\//i.test(robots)) errors.push("robots.txt does not disallow /");
const sitemap = await (await fetch(new URL("/sitemap.xml", origin))).text();
if (/<url>/i.test(sitemap)) errors.push("sitemap is not empty");

console.log(`CSV routes: ${csvPaths.length}; checked routes including hubs and review: ${allPaths.length}`);
console.log(`HTTP 200: ${allPaths.length - errors.filter((item) => /HTTP (?!200)/.test(item) && !item.startsWith("broken")).length}/${allPaths.length}`);
console.log(`Robots meta noindex,nofollow: ${noindexCount}/${allPaths.length}; X-Robots-Tag noindex: ${headerCount}/${allPaths.length}`);
console.log(`Internal links resolving: ${goodLinks}/${allLinks.size}; required hub-child links: ${childLinks}`);
console.log(`robots.txt Disallow /: ${/Disallow:\s*\//i.test(robots)}; sitemap empty: ${!/<url>/i.test(sitemap)}`);
for (const error of errors) console.error(`FAIL ${error}`);
console.log(errors.length ? `${errors.length} checks failed` : "PASS: full structure checks passed");
process.exitCode = errors.length ? 1 : 0;
