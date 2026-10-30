import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const base = process.env.CHECK_BASE_URL ?? "http://127.0.0.1:3000";
const root = fileURLToPath(new URL("../content/pages/", import.meta.url));

async function configFiles(directory) {
  const files = [];
  for (const item of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, item.name);
    if (item.isDirectory()) files.push(...await configFiles(path));
    else if (item.name.endsWith(".ts") && !["types.ts", "index.ts", "navigation.ts"].includes(item.name)) files.push(path);
  }
  return files;
}

const configs = [];
for (const path of await configFiles(root)) {
  const source = await readFile(path, "utf8");
  const match = source.match(/export default\s+(\{[\s\S]*\})\s+satisfies PageConfig;/);
  if (!match) throw new Error(`Cannot read config: ${path}`);
  configs.push(JSON.parse(match[1]));
}
const drafts = configs.filter((page) => page.status === "draft");
const sitemap = await (await fetch(new URL("/sitemap.xml", base))).text();
const home = await (await fetch(new URL("/", base))).text();
const shell = `${home.match(/<header\b[\s\S]*?<\/header>/)?.[0] ?? ""}${home.match(/<footer\b[\s\S]*?<\/footer>/)?.[0] ?? ""}`;
const shellHrefs = [...shell.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map((match) => match[1]);

let failed = 0;
for (const page of drafts) {
  const response = await fetch(new URL(page.slug, base));
  const html = await response.text();
  const robots = html.match(/<meta name="robots" content="([^"]+)"/)?.[1] ?? "";
  const absentFromSitemap = !sitemap.includes(`<loc>https://linksresource.com${page.slug}</loc>`);
  const absentFromShell = !shellHrefs.some((href) => href === page.slug || href.startsWith(`${page.slug}#`));
  const noindex = /noindex/.test(robots) && /nofollow/.test(robots);
  const ok = response.status === 200 && absentFromSitemap && absentFromShell && noindex;
  console.log(`${ok ? "PASS" : "FAIL"} ${page.slug}: status=${response.status} robots=${robots || "(missing)"} sitemap=${absentFromSitemap ? "absent" : "PRESENT"} nav/footer=${absentFromShell ? "absent" : "PRESENT"}`);
  if (!ok) failed++;
}
console.log(`${drafts.length - failed}/${drafts.length} draft checks passed`);
process.exitCode = failed ? 1 : 0;
