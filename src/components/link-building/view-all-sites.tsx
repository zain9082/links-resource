import Link from "next/link";
import { ArrowRight, Globe2 } from "lucide-react";
import { PublicationsTable } from "@/components/link-building/publications-table";
import { Button } from "@/components/ui/button";
import { publicationSites } from "@/lib/publications";

type ViewAllSitesProps = {
  limit?: number;
  showViewMore?: boolean;
};

export function ViewAllSites({ limit = 5, showViewMore = true }: ViewAllSitesProps) {
  const preview = publicationSites.slice(0, limit);

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-purple/30 bg-purple/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-purple-2">
            <Globe2 className="size-3.5" />
            Premium Placements
          </span>
          <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">View All Sites</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            High-authority publications with transparent pricing, turnaround times, and niche
            acceptance — hand-picked for scalable link building campaigns.
          </p>
        </div>
        {showViewMore && (
          <Button asChild variant="audit" className="shrink-0">
            <Link href="/link-building-services/publications">
              View More
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        )}
      </div>

      <PublicationsTable sites={preview} compact />

      {showViewMore && (
        <div className="flex justify-center pt-2">
          <Button asChild variant="glass" size="lg">
            <Link href="/link-building-services/publications">
              Browse all {publicationSites.length} publications
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      )}
    </section>
  );
}
