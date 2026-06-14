import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PublicationsDirectory } from "@/components/link-building/publications-directory";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { publicationSites } from "@/lib/publications";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "All Publication Sites",
  description:
    "Browse our full directory of premium link building publications with DA scores, pricing, niches, and turnaround times.",
  path: "/link-building-services/publications",
});

export default function PublicationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Link Building Services"
        title={
          <>
            All <span className="text-gradient">publication sites</span>
          </>
        }
        subtitle={`Filter and explore ${publicationSites.length} high-authority placements — compare DA, pricing, niches, link types, and traffic.`}
      />

      <div className="container-wide pb-24">
        <div className="mb-8">
          <Button asChild variant="ghost" size="sm">
            <Link href="/link-building-services">
              <ArrowLeft className="size-4" />
              Back to Link Building Services
            </Link>
          </Button>
        </div>
        <PublicationsDirectory />
      </div>
    </>
  );
}
