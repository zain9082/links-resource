"""One-time bootstrap from the reviewed CSV and saved live crawl.

Do not rerun after editors start writing copy: this replaces the 15 page configs.
"""

import csv
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PAGES = ROOT / "content" / "pages"

SPECS = {
    "/": ("serviceHub", None, "SEO Agency UK", "SEO agency UK for link building, content and web development. Grow qualified traffic and leads with Links Resource.", "SEO agency UK helping ambitious brands grow", "home.md"),
    "/seo-services": ("serviceHub", "/", "SEO Services UK", "SEO services UK for technical, on-page and off-page growth. Improve rankings, qualified traffic and conversions with Links Resource.", "Results-driven SEO that helps businesses grow faster", "seo-services.md"),
    "/seo-services/local-seo": ("serviceChild", "/seo-services", "Local SEO Agency", "Local SEO agency helping UK businesses earn more map visibility, nearby leads and calls through location-focused campaigns.", "Rank in Google Maps and local search", "local-seo-services.md"),
    "/seo-services/seo-audit": ("serviceChild", "/seo-services", "SEO Audit Services", "SEO audit services that identify technical, content and indexing issues, then turn findings into a clear growth plan.", "SEO audit services that reveal growth opportunities", None),
    "/seo-packages": ("serviceHub", "/seo-services", "Affordable SEO Services in UK", "Affordable SEO services in UK with clear packages and measurable goals for businesses ready to grow organic traffic.", "Affordable SEO services in UK with clear packages", None),
    "/ai-seo-agency": ("serviceChild", "/seo-services", "AI SEO Agency", "AI SEO agency combining search strategy and generative engine optimisation to improve brand visibility across search experiences.", "AI SEO agency for the next era of search", None),
    "/link-building-services": ("serviceHub", "/", "Link Building Services", "Link building services with manual outreach, relevant editorial placements and transparent reporting to build lasting authority.", "Authority-driven placements that fuel sustainable SEO growth", "link-building-services.md"),
    "/guest-posting-services": ("serviceChild", "/link-building-services", "Guest Posting Services", "Guest posting services with manual outreach and contextual links on relevant publishers, backed by transparent reporting.", "Guest posts that support long-term SEO growth", "guest-posting-services.md"),
    "/white-label": ("whiteLabel", "/", "White Label Digital Marketing Agency", "White label digital marketing agency for SEO, outreach, PPC and web delivery that helps partner agencies scale.", "White label digital marketing agency for partners", None),
    "/white-label/link-building": ("whiteLabel", "/white-label", "White Label Link Building", "White label link building for SEO agencies with manual outreach, editorial placements and client-ready reporting.", "Editorial link building for authority growth", "white-label-link-building-services.md"),
    "/white-label/seo": ("whiteLabel", "/white-label", "White Label SEO Services", "White label SEO services for agencies needing scalable strategy, technical delivery, content and transparent reporting.", "White label SEO services for growing agencies", None),
    "/white-label/seo/reseller": ("whiteLabel", "/white-label/seo", "SEO Reseller Services", "SEO reseller services for agencies that need dependable fulfilment, clear reporting and room to scale client delivery.", "SEO reseller services built for agency growth", None),
    "/ppc-management": ("ppc", "/", "Paid Search Agency", "Paid search agency managing PPC campaigns with clear budgets, conversion tracking and practical reporting for UK brands.", "Paid search agency focused on measurable growth", None),
    "/web-development": ("webDev", "/", "Custom Website Development Services", "Custom website development services for fast, conversion-focused websites built with clear SEO structure and maintainable code.", "Conversion-focused websites built to rank and perform", "web-development-services.md"),
    "/content-writing-services": ("serviceChild", "/", "SEO Content Writing Services", "SEO content writing services for blog posts, landing pages and product copy built to rank, engage and convert.", "Rank-ready content that helps businesses grow faster", "content-writing-services.md"),
}


def block_type(heading):
    h = heading.lower()
    if "faq" in h or "frequently asked" in h:
        return "faq"
    if any(w in h for w in ("pricing", "packages", "cost", "calculator")):
        return "pricing"
    if any(w in h for w in ("process", "workflow", "path to", "how it works")):
        return "process"
    if any(w in h for w in ("proof", "results", "reviews", "case stud", "performance")):
        return "proof"
    if any(w in h for w in ("services", "solutions", "disciplines")):
        return "servicesGrid"
    if any(w in h for w in ("ready to", "talk to", "contact us", "request a")):
        return "cta"
    return "richText"


def live_sections(snapshot, h1):
    raw = snapshot.read_text(encoding="utf-8")
    body = re.search(r"## Full visible body text\s+```text\s*(.*?)\s*```", raw, re.S)
    if not body:
        raise ValueError(f"No body text in {snapshot}")
    text = " ".join(body.group(1).split())
    headings = re.findall(r"^- H2: (.+)$", raw, re.M)
    found = []
    cursor = 0
    for heading in headings:
        match = re.search(re.escape(heading), text[cursor:], re.I)
        if match:
            start = cursor + match.start()
            found.append((heading, start, cursor + match.end()))
            cursor += match.end()
    if not found:
        return [{"type": "hero", "heading": h1, "body": text}]
    sections = [{"type": "hero", "heading": h1, "body": text[: found[0][1]].strip()}]
    for index, (heading, _start, end) in enumerate(found):
        next_start = found[index + 1][1] if index + 1 < len(found) else len(text)
        sections.append({"type": block_type(heading), "heading": heading, "body": text[end:next_start].strip()})
    return sections


def filename_for(path):
    if path == "/":
        return PAGES / "home.ts"
    return PAGES / (path.lstrip("/") + ".ts")


with (ROOT / "docs" / "new-structure.csv").open(encoding="utf-8-sig", newline="") as stream:
    rows = {row["Proposed URL"]: row for row in csv.DictReader(stream)}

published = {path for path, spec in SPECS.items() if spec[5]}
for path, (template, parent, title, description, h1, snapshot_name) in SPECS.items():
    row = rows[path]
    keyword = row["Main Keyword"].replace("*", "").strip()
    assert keyword.lower() in title.lower(), (path, keyword, title)
    assert keyword.lower() in description.lower(), (path, keyword, description)
    assert len(title) <= 60 and len(description) <= 155, (path, len(title), len(description))
    supporting = [part.replace("*", "").strip() for part in row["Supporting Keywords (use on this page)"].split(",")]
    supporting = [part for part in supporting if part and part != "—"]
    if snapshot_name:
        sections = live_sections(ROOT / "docs" / "live-snapshot" / snapshot_name, h1)
        status = "published"
    else:
        status = "draft"
        sections = [
            {"type": "hero", "heading": h1, "body": "[COPY PENDING]"},
            {"type": "problem", "heading": "The challenge", "body": "[COPY PENDING]"},
            {"type": "servicesGrid", "heading": "What is included", "body": "[COPY PENDING]"},
            {"type": "process", "heading": "How it works", "body": "[COPY PENDING]"},
            {"type": "proof", "heading": "Proof and results", "body": "[COPY PENDING]"},
            {"type": "pricing", "heading": "Pricing", "body": "[COPY PENDING]"},
            {"type": "faq", "heading": "Frequently asked questions", "body": "[COPY PENDING]"},
            {"type": "cta", "heading": "Start a conversation", "body": "[COPY PENDING]", "href": "/contact", "label": "Contact us"},
        ]
    peers = [p for p in SPECS if p != path and p in published]
    related = sorted(peers, key=lambda p: (SPECS[p][1] != parent, p))[:3]
    page = {
        "slug": path,
        "parent": parent,
        "template": template,
        "status": status,
        "updatedAt": "2026-10-30",
        "title": title,
        "metaDescription": description,
        "h1": h1,
        "primaryKeyword": keyword,
        "supportingKeywords": supporting,
        "priority": "P1",
        "sections": sections,
        "faqs": [],
        "relatedSlugs": related,
    }
    file = filename_for(path)
    file.parent.mkdir(parents=True, exist_ok=True)
    depth = len(file.relative_to(PAGES).parts) - 1
    type_path = "/".join([".."] * depth + ["types"]) if depth else "./types"
    file.write_text(
        f'import type {{ PageConfig }} from "{type_path}";\n\n'
        + "export default "
        + json.dumps(page, ensure_ascii=False, indent=2)
        + " satisfies PageConfig;\n",
        encoding="utf-8",
    )
    print(f"{path}: {status}, {len(sections)} sections")
