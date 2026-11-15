"""Generate editorial briefs from the typed P1 page configs."""

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CONFIG_ROOT = ROOT / "content" / "pages"
BRIEF_ROOT = ROOT / "docs" / "content-briefs"
BRIEF_ROOT.mkdir(parents=True, exist_ok=True)

pages = {}
for file in CONFIG_ROOT.rglob("*.ts"):
    if file.name in {"types.ts", "index.ts", "navigation.ts"}:
        continue
    source = file.read_text(encoding="utf-8")
    match = re.search(r"export default\s+(\{.*\})\s+satisfies PageConfig;", source, re.S)
    if not match:
        raise ValueError(f"Cannot read page config: {file}")
    page = json.loads(match.group(1))
    pages[page["slug"]] = page


def outgoing(page):
    links = []
    if page["parent"] and page["parent"] in pages:
        links.append(page["parent"])
    links.extend(child["slug"] for child in pages.values() if child["parent"] == page["slug"])
    links.extend(page["relatedSlugs"])
    return list(dict.fromkeys(link for link in links if link != page["slug"] and link in pages))


incoming = {slug: [] for slug in pages}
for page in pages.values():
    for slug in outgoing(page):
        incoming[slug].append(page["slug"])

for slug, page in pages.items():
    name = "home" if slug == "/" else slug.lstrip("/").replace("/", "--")
    file = BRIEF_ROOT / f"{name}.md"
    lines = [
        f"# Content brief: {page['title']}",
        "",
        f"- URL: `{slug}`",
        f"- Status: **{page['status']}**",
        f"- Template: `{page['template']}`",
        f"- Main keyword: **{page['primaryKeyword']}**",
        f"- Priority: {page['priority']}",
        f"- Title: {page['title']}",
        f"- Meta description: {page['metaDescription']}",
        f"- H1: {page['h1']}",
        "",
        "## Supporting keywords",
        "",
    ]
    lines.extend(f"- {keyword}" for keyword in page["supportingKeywords"])
    if not page["supportingKeywords"]:
        lines.append("- None supplied in CSV")
    lines += ["", "## Section order", ""]
    lines.extend(f"{i}. **{section['type']}** — {section.get('heading') or 'Untitled'}" for i, section in enumerate(page["sections"], 1))
    lines += ["", "## Internal links this page gives", ""]
    links = outgoing(page)
    lines.extend(f"- `{target}` ({pages[target]['status']})" for target in links)
    if not links:
        lines.append("- None in current page config")
    lines += ["", "## Internal links this page gets", ""]
    lines.extend(f"- `{source}` ({pages[source]['status']})" for source in incoming[slug])
    if not incoming[slug]:
        lines.append("- None in current page config")
    lines += ["", "## FAQ questions", ""]
    lines.extend(f"- {faq['question']}" for faq in page["faqs"])
    if not page["faqs"]:
        lines.append("- [COPY PENDING]" if page["status"] == "draft" else "- No structured FAQs in the live snapshot")
    lines += ["", "Draft URLs are omitted from the sitemap and navigation until published. Links to draft pages are planned editorial links and are withheld from published page link modules until publication.", ""]
    file.write_text("\n".join(lines), encoding="utf-8")
    print(file.relative_to(ROOT))
