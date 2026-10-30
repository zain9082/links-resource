import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { pageConfigs } from "../../../../content/pages";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Page review inventory",
  description: "Internal review inventory of the Links Resource page structure.",
  path: "/internal/pages",
  noindex: true,
});

function sectionFor(slug: string): string {
  if (slug === "/") return "Home";
  if (slug.startsWith("/white-label")) return "White Label";
  if (slug.startsWith("/ppc-management")) return "PPC";
  if (slug.startsWith("/web-development")) return "Web Development";
  if (slug.startsWith("/industries")) return "Industries";
  if (slug.startsWith("/locations")) return "Locations";
  if (slug.startsWith("/blog")) return "Blog";
  if (slug === "/case-studies") return "Case Studies";
  if (["/guest-posting-services", "/blogger-outreach-services", "/niche-edits", "/digital-pr-services"].includes(slug) || slug.startsWith("/link-building")) return "Link Building";
  return "SEO & Content";
}

export default function InternalPages() {
  const pages = [...pageConfigs].sort((a, b) => sectionFor(a.slug).localeCompare(sectionFor(b.slug)) || a.slug.localeCompare(b.slug));
  const drafts = pages.filter((page) => page.status === "draft").length;

  return <>
    <PageHeader eyebrow="Internal review" title="Full page structure" subtitle="Review every configured URL, template, status and audience before approving content." />
    <section className="container-wide pb-20 pt-10">
      <div className="mb-8 flex flex-wrap gap-3">
        <Badge variant="purple">{pages.length} pages</Badge>
        <Badge variant="blue">{drafts} drafts</Badge>
        <Badge>{pages.length - drafts} published configs</Badge>
      </div>
      <Card className="overflow-hidden p-0">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="bg-white/5 text-xs uppercase tracking-widest text-purple-2">
              <tr>
                <th className="px-5 py-4">URL</th>
                <th className="px-5 py-4">Section</th>
                <th className="px-5 py-4">Template</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Audience</th>
                <th className="px-5 py-4">Review</th>
              </tr>
            </thead>
            <tbody>
              {pages.map((page) => <tr className="border-t border-white/5 align-top" key={page.slug}>
                <td className="max-w-[300px] break-all px-5 py-4 font-medium text-white">{page.slug}</td>
                <td className="px-5 py-4 text-muted">{sectionFor(page.slug)}</td>
                <td className="px-5 py-4 text-muted">{page.template}</td>
                <td className="px-5 py-4"><Badge variant={page.status === "draft" ? "pink" : "purple"}>{page.status}</Badge></td>
                <td className="px-5 py-4 text-muted">{page.audience}</td>
                <td className="px-5 py-4"><Link className="inline-flex items-center gap-1 text-purple-2 hover:text-white" href={page.slug}>Open <ArrowUpRight className="size-4" /></Link></td>
              </tr>)}
            </tbody>
          </table>
        </div>
      </Card>
    </section>
  </>;
}
