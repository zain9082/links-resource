import { readFileSync } from "node:fs";

const base = (process.argv[2] || "http://localhost:3210").replace(/\/$/, "");
const rows = readFileSync(new URL("../docs/live-snapshot/index.csv", import.meta.url), "utf8")
  .trim().split(/\r?\n/).slice(1);
const paths = [...new Set(rows.map((row) => new URL(row.split(",", 1)[0]).pathname || "/"))];
const failures = [];
let direct = 0;
let redirected = 0;

for (const path of paths) {
  const response = await fetch(`${base}${path}`, { redirect: "manual" });
  if (response.status === 200) {
    direct++;
  } else if ([301, 308].includes(response.status)) {
    const location = response.headers.get("location");
    const target = new URL(location, base);
    const second = await fetch(`${base}${target.pathname}`, { redirect: "manual" });
    if (second.status === 200 && target.host === new URL(base).host) redirected++;
    else failures.push(`${path}: ${response.status} -> ${location} -> ${second.status}`);
  } else failures.push(`${path}: ${response.status}`);
}

const home = await fetch(base);
const html = await home.text();
const robots = await (await fetch(`${base}/robots.txt`)).text();
const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
const internal = await fetch(`${base}/internal/pages`);
const draft = await fetch(`${base}/locations/london`);
const draftHtml = await draft.text();
const checks = {
  oldUrls: failures.length === 0,
  homeIndexable: /<meta name="robots" content="index, follow"/.test(html) && !home.headers.get("x-robots-tag")?.includes("noindex"),
  canonical: html.includes('href="https://linksresource.com/"'),
  robots: robots.includes("Allow: /") && robots.includes("https://linksresource.com/sitemap.xml"),
  internal404: internal.status === 404,
  draftNoindex: draftHtml.includes('name="robots" content="noindex') && draft.status === 200,
  draftAbsentSitemap: !sitemap.includes("/locations/london"),
  publishedInSitemap: sitemap.includes("https://linksresource.com/about"),
  obsoleteCompanyAbsent: !/Links Resource (Limited|LTD)|14819683|Aberfoyle/.test(html),
};
console.log(JSON.stringify({ base, oldUrlCount: paths.length, direct, redirected, checks, failures }, null, 2));
if (Object.values(checks).some((ok) => !ok)) process.exitCode = 1;
