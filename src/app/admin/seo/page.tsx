import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ title: "Admin · SEO" });

const checks = [
  { label: "Dynamic metadata", value: "Per-page title, description & canonical" },
  { label: "Open Graph & Twitter Cards", value: "Generated site-wide" },
  { label: "Structured data (JSON-LD)", value: "Organization, WebSite, SoftwareApplication" },
  { label: "Sitemap", value: "/sitemap.xml (auto-generated)" },
  { label: "Robots", value: "/robots.txt (auto-generated)" },
  { label: "Image optimization", value: "next/image + AVIF/WebP" },
];

export default function AdminSeo() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white">SEO Management</h1>
      <p className="mt-1 text-muted">
        Site-wide SEO configuration and health.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {checks.map((c) => (
          <div
            key={c.label}
            className="flex items-start gap-3 rounded-2xl glass glow-border p-5"
          >
            <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-400" />
            <div>
              <h3 className="font-medium text-white">{c.label}</h3>
              <p className="text-sm text-muted">{c.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
