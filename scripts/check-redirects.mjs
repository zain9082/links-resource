const base = process.env.CHECK_BASE_URL ?? "http://127.0.0.1:3000";

const redirects = new Map([
  ["/local-seo-services", "/seo-services/local-seo"],
  ["/white-label-link-building-services", "/white-label/link-building"],
  ["/web-development-services", "/web-development"],
  ["/editorial-link-building-services", "/link-building-services"],
  ["/authority-backlinks-services", "/link-building-services"],
  ["/about-links-resource-2", "/about"],
  ["/link-building", "/link-building-services"],
  ["/website-development", "/web-development"],
  ["/case-studies/testing-seo-case-study", "/case-studies"],
]);

let failed = 0;
async function checkRedirect(source, target) {
  const response = await fetch(new URL(source, base), { redirect: "manual" });
  const location = response.headers.get("location");
  const resolved = location ? new URL(location, base) : null;
  const expected = new URL(target, base);
  const oneHop = resolved && resolved.pathname === expected.pathname && resolved.search === expected.search;
  const final = oneHop ? await fetch(resolved, { redirect: "manual" }) : null;
  const ok = [301, 308].includes(response.status) && oneHop && final?.status === 200 && !final.headers.has("location");
  console.log(`${ok ? "PASS" : "FAIL"} ${source} ${response.status} -> ${location ?? "(none)"}; target ${final?.status ?? "(not fetched)"}`);
  if (!ok) failed++;
}

for (const [source, target] of redirects) await checkRedirect(source, target);

for (const path of ["/about/", "/seo-services/local-seo/", "/white-label/link-building/"]) {
  const response = await fetch(new URL(path, base), { redirect: "manual" });
  const location = response.headers.get("location");
  const ok = response.status === 308 && location && new URL(location, base).pathname === path.slice(0, -1);
  console.log(`${ok ? "PASS" : "FAIL"} ${path} ${response.status} -> ${location ?? "(none)"}`);
  if (!ok) failed++;
}

const unknown = `/unknown-route-${crypto.randomUUID()}`;
const response = await fetch(new URL(unknown, base), { redirect: "manual" });
const ok = response.status === 404;
console.log(`${ok ? "PASS" : "FAIL"} ${unknown} HTTP ${response.status}`);
if (!ok) failed++;

const probe = "/resources/sync-probe-1788889913";
const probeResponse = await fetch(new URL(probe, base), { redirect: "manual" });
const probeOk = probeResponse.status === 404;
console.log(`${probeOk ? "PASS" : "FAIL"} ${probe} HTTP ${probeResponse.status}`);
if (!probeOk) failed++;

console.log(`${14 - failed}/14 checks passed`);
process.exitCode = failed ? 1 : 0;
