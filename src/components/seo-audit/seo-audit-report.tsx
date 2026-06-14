"use client";

import { useState } from "react";
import {
  ArrowRight,
  ExternalLink,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type {
  AuditRecommendation,
  AuditSectionScore,
  KeywordRow,
  SeoAuditResult,
} from "@/lib/seo-audit/types";

type TabId =
  | "overview"
  | "on-page"
  | "geo"
  | "links"
  | "usability"
  | "performance"
  | "social"
  | "local";

const tabs: { id: TabId; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "on-page", label: "On-Page SEO" },
  { id: "geo", label: "GEO" },
  { id: "links", label: "Links" },
  { id: "usability", label: "Usability" },
  { id: "performance", label: "Performance" },
  { id: "social", label: "Social" },
  { id: "local", label: "Local SEO" },
];

const priorityColors = {
  High: "bg-rose-500/15 text-rose-300 border-rose-500/25",
  Medium: "bg-amber-500/15 text-amber-300 border-amber-500/25",
  Low: "bg-purple/15 text-purple-2 border-purple/25",
};

function GradeBadge({ grade, score }: { grade: string; score: number }) {
  return (
    <div className="flex items-center gap-4">
      <div className="grid size-20 place-items-center rounded-2xl border border-purple/30 bg-gradient-purple/20">
        <div className="text-center">
          <p className="text-3xl font-bold text-white">{grade}</p>
          <p className="text-[10px] uppercase tracking-wider text-purple-2">{score}/100</p>
        </div>
      </div>
    </div>
  );
}

function SectionCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <h4 className="text-sm font-semibold text-white">{title}</h4>
      <div className="mt-3 space-y-2 text-sm text-muted">{children}</div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-4">
      <span className="text-muted">{label}</span>
      <span className="text-slate-200 sm:text-right">{value}</span>
    </div>
  );
}

function KeywordTable({ title, rows }: { title: string; rows: KeywordRow[] }) {
  if (!rows.length) return null;
  return (
    <div className="overflow-x-auto rounded-xl border border-white/10">
      <table className="min-w-full text-left text-xs">
        <caption className="px-4 py-3 text-left text-sm font-semibold text-white">
          {title}
        </caption>
        <thead className="border-b border-white/10 bg-white/[0.03] text-muted">
          <tr>
            <th className="px-3 py-2">Term</th>
            <th className="px-3 py-2">Title</th>
            <th className="px-3 py-2">Meta</th>
            <th className="px-3 py-2">Headings</th>
            <th className="px-3 py-2">Frequency</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.term} className="border-b border-white/5">
              <td className="px-3 py-2 text-slate-200">{row.term}</td>
              <td className="px-3 py-2">{row.title ? "✓" : "—"}</td>
              <td className="px-3 py-2">{row.meta ? "✓" : "—"}</td>
              <td className="px-3 py-2">{row.headings ? "✓" : "—"}</td>
              <td className="px-3 py-2 text-purple-2">{row.frequency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RecommendationsList({ items }: { items: AuditRecommendation[] }) {
  return (
    <div className="space-y-2">
      {items.map((item) => (
        <div
          key={item.title}
          className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-3 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-sm font-medium text-white">{item.title}</p>
            <p className="text-xs text-muted">{item.category}</p>
          </div>
          <span
            className={cn(
              "inline-flex w-fit rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide",
              priorityColors[item.priority]
            )}
          >
            {item.priority} Priority
          </span>
        </div>
      ))}
    </div>
  );
}

function SectionScores({ sections }: { sections: AuditSectionScore[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {sections.map((section) => (
        <div
          key={section.id}
          className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
        >
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm font-semibold text-white">{section.label}</p>
            <span className="rounded-full bg-purple/15 px-2.5 py-1 text-xs font-bold text-purple-2">
              {section.grade}
            </span>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-muted">{section.summary}</p>
        </div>
      ))}
    </div>
  );
}

function SerpPreview({ result }: { result: SeoAuditResult }) {
  const title =
    result.onPage.title ??
    result.hostname.replace(/^www\./, "").split(".")[0] ??
    "Page Title";
  const description =
    result.onPage.metaDescription ??
    "Meta description preview will appear here when available on your page.";

  return (
    <div className="rounded-xl border border-white/10 bg-white p-4 text-slate-900">
      <p className="text-xs text-slate-500">{result.hostname}</p>
      <p className="mt-1 text-lg text-blue-700">{title.slice(0, 60)}</p>
      <p className="mt-1 text-sm text-slate-600">{result.finalUrl}</p>
      <p className="mt-2 text-sm leading-relaxed text-slate-700">
        {description.slice(0, 160)}
        {description.length > 160 ? "…" : ""}
      </p>
    </div>
  );
}

type SeoAuditReportProps = {
  result: SeoAuditResult;
  onRunAnother: () => void;
};

export function SeoAuditReport({ result, onRunAnother }: SeoAuditReportProps) {
  const [tab, setTab] = useState<TabId>("overview");
  const generated = new Date(result.generatedAt).toLocaleString("en-GB", {
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
    timeZoneName: "short",
  });

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-4 border-b border-white/10 pb-5 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-purple-2">
            SEO Audit for {result.hostname}
          </p>
          <h3 className="mt-2 text-2xl font-bold text-white">{result.headline}</h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
            {result.intro}
          </p>
          <a
            href={result.finalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-sm text-purple-2 hover:underline"
          >
            {result.finalUrl}
            <ExternalLink className="size-3.5" />
          </a>
          <p className="mt-2 text-xs text-muted">Report generated: {generated}</p>
        </div>
        <GradeBadge grade={result.overallGrade} score={result.overallScore} />
      </div>

      <div className="flex flex-wrap gap-2">
        {tabs.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setTab(item.id)}
            className={cn(
              "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
              tab === item.id
                ? "bg-gradient-purple text-white"
                : "border border-white/10 text-muted hover:text-white"
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      {tab === "overview" && (
        <div className="space-y-5">
          <SectionScores sections={result.sections} />
          <div>
            <h4 className="mb-3 text-base font-semibold text-white">Recommendations</h4>
            <RecommendationsList items={result.recommendations} />
          </div>
        </div>
      )}

      {tab === "on-page" && (
        <div className="space-y-4">
          <p className="text-sm text-slate-200">{result.onPage.sectionSummary}</p>
          <div className="grid gap-4 lg:grid-cols-2">
            <SectionCard title="Title Tag">
              <DetailRow label="Value" value={result.onPage.title ?? "Missing"} />
              <DetailRow label="Length" value={`${result.onPage.titleLength} characters`} />
              <DetailRow
                label="Status"
                value={
                  result.onPage.titleStatus === "pass"
                    ? "Optimal length"
                    : result.onPage.titleLength > 60
                      ? "Should be shortened to 50–60 characters"
                      : "Needs improvement"
                }
              />
            </SectionCard>
            <SectionCard title="Meta Description Tag">
              <DetailRow
                label="Value"
                value={result.onPage.metaDescription ?? "Missing"}
              />
              <DetailRow
                label="Length"
                value={`${result.onPage.metaDescriptionLength} characters`}
              />
            </SectionCard>
          </div>
          <div>
            <h4 className="mb-2 text-sm font-semibold text-white">SERP Snippet Preview</h4>
            <SerpPreview result={result} />
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            <SectionCard title="Header Tag Usage">
              {(["h1", "h2", "h3", "h4", "h5", "h6"] as const).map((tag) => (
                <DetailRow
                  key={tag}
                  label={tag.toUpperCase()}
                  value={result.onPage.headers[tag]}
                />
              ))}
            </SectionCard>
            <SectionCard title="Technical Signals">
              <DetailRow
                label="Language"
                value={result.onPage.language ?? "Not declared"}
              />
              <DetailRow label="Hreflang" value={result.onPage.hreflang ? "Present" : "Not used"} />
              <DetailRow label="Canonical" value={result.onPage.canonical ?? "Missing"} />
              <DetailRow label="Word Count" value={result.onPage.wordCount.toLocaleString()} />
              <DetailRow
                label="Images missing alt"
                value={`${result.onPage.imagesMissingAlt} of ${result.onPage.imageCount}`}
              />
              <DetailRow label="Robots.txt" value={result.onPage.robotsTxt ? "Found" : "Missing"} />
              <DetailRow label="XML Sitemap" value={result.onPage.sitemap ? "Found" : "Missing"} />
              <DetailRow
                label="Analytics"
                value={result.onPage.analyticsDetected ? "Detected" : "Not detected"}
              />
              <DetailRow
                label="Schema.org"
                value={result.onPage.hasSchema ? "Detected" : "Not detected"}
              />
            </SectionCard>
          </div>
          <KeywordTable title="Individual Keywords" rows={result.onPage.keywords} />
          <KeywordTable title="Phrases" rows={result.onPage.phrases} />
        </div>
      )}

      {tab === "geo" && (
        <div className="space-y-4">
          <p className="text-sm text-slate-200">{result.geo.sectionSummary}</p>
          <SectionCard title="Generative Engine Optimization">
            <DetailRow
              label="Organization Schema"
              value={result.geo.hasOrganizationSchema ? "Identified" : "Not identified"}
            />
            <DetailRow
              label="Rendered Content"
              value={`${result.geo.renderedContentPct}% readable text ratio`}
            />
            <DetailRow
              label="llms.txt"
              value={
                result.geo.llmsTxt
                  ? result.geo.llmsTxtUrl
                  : "Not detected or unavailable"
              }
            />
          </SectionCard>
        </div>
      )}

      {tab === "links" && (
        <div className="space-y-4">
          <p className="text-sm text-slate-200">{result.links.sectionSummary}</p>
          <SectionCard title="On-Page Link Structure">
            <DetailRow label="Total links" value={result.links.breakdown.total} />
            <DetailRow label="Internal links" value={result.links.breakdown.internal} />
            <DetailRow
              label="External follow links"
              value={result.links.breakdown.externalFollow}
            />
            <DetailRow
              label="External nofollow links"
              value={result.links.breakdown.externalNofollow}
            />
            <DetailRow
              label="Non-friendly URLs"
              value={result.links.breakdown.unfriendly}
            />
          </SectionCard>
        </div>
      )}

      {tab === "usability" && (
        <div className="space-y-4">
          <p className="text-sm text-slate-200">{result.usability.sectionSummary}</p>
          <SectionCard title="Usability Checks">
            <DetailRow
              label="Mobile viewport"
              value={result.usability.hasViewport ? "Configured" : "Missing"}
            />
            <DetailRow
              label="Favicon"
              value={result.usability.hasFavicon ? "Present" : "Missing"}
            />
            <DetailRow
              label="iFrames"
              value={result.usability.usesIframes ? "Detected" : "Not detected"}
            />
            <DetailRow
              label="Plain-text emails"
              value={result.usability.plainTextEmails}
            />
            <DetailRow
              label="Flash content"
              value={result.usability.hasFlash ? "Detected" : "Not detected"}
            />
          </SectionCard>
        </div>
      )}

      {tab === "performance" && (
        <div className="space-y-4">
          <p className="text-sm text-slate-200">{result.performance.sectionSummary}</p>
          <SectionCard title="Website Load Speed">
            <DetailRow
              label="Server response"
              value={`${result.performance.serverResponseSec.toFixed(2)}s`}
            />
            <DetailRow
              label="Download size"
              value={`${result.performance.pageSizeMb.toFixed(2)}MB`}
            />
            <DetailRow
              label="Compression"
              value={result.performance.compression ?? "Not detected"}
            />
            <DetailRow
              label="Inline styles"
              value={result.performance.inlineStyles}
            />
          </SectionCard>
          <SectionCard title="Resources Breakdown">
            <DetailRow label="HTML pages" value={result.performance.resourceCounts.html} />
            <DetailRow label="JS resources" value={result.performance.resourceCounts.js} />
            <DetailRow label="CSS resources" value={result.performance.resourceCounts.css} />
            <DetailRow label="Images" value={result.performance.resourceCounts.images} />
            <DetailRow label="Total objects" value={result.performance.resourceCounts.total} />
          </SectionCard>
        </div>
      )}

      {tab === "social" && (
        <div className="space-y-4">
          <p className="text-sm text-slate-200">{result.social.sectionSummary}</p>
          <SectionCard title="Social Presence">
            <DetailRow
              label="Facebook page linked"
              value={result.social.facebookLinked ? "Yes" : "Not found"}
            />
            <DetailRow
              label="Facebook Open Graph"
              value={result.social.facebookOg ? "Present" : "Missing"}
            />
            <DetailRow
              label="Facebook Pixel"
              value={result.social.facebookPixel ? "Detected" : "Not detected"}
            />
            <DetailRow
              label="X profile linked"
              value={result.social.twitterLinked ? "Yes" : "Not found"}
            />
            <DetailRow
              label="X Cards"
              value={result.social.twitterCards ? "Present" : "Missing"}
            />
            <DetailRow
              label="Instagram linked"
              value={result.social.instagramLinked ? "Yes" : "Not found"}
            />
            <DetailRow
              label="LinkedIn linked"
              value={result.social.linkedinLinked ? "Yes" : "Not found"}
            />
            <DetailRow
              label="YouTube linked"
              value={result.social.youtubeLinked ? "Yes" : "Not found"}
            />
          </SectionCard>
        </div>
      )}

      {tab === "local" && (
        <div className="space-y-4">
          <p className="text-sm text-slate-200">{result.local.sectionSummary}</p>
          <SectionCard title="Local SEO">
            <DetailRow
              label="Phone on page"
              value={result.local.phoneFound ? result.local.phone : "Not found"}
            />
            <DetailRow
              label="Address on page"
              value={
                result.local.address ??
                (result.local.addressFound ? "Detected but not clearly formatted" : "Not clearly detected")
              }
            />
            <DetailRow
              label="Local Business Schema"
              value={result.local.localSchema ? "Present" : "Not identified"}
            />
          </SectionCard>
        </div>
      )}

      <div className="flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row">
        <Button type="button" variant="audit" size="lg" className="sm:flex-1" asChild>
          <a href="/team">
            Get Expert Help
            <ArrowRight className="size-4" />
          </a>
        </Button>
        <Button
          type="button"
          variant="glass"
          size="lg"
          className="sm:flex-1"
          onClick={onRunAnother}
        >
          <RotateCcw className="size-4" />
          Run another audit
        </Button>
      </div>
    </div>
  );
}
