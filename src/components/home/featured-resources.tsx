import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeatured } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { ResourceCard } from "@/components/resources/resource-card";
import { Button } from "@/components/ui/button";

export function FeaturedResources() {
  const featured = getFeatured().slice(0, 6);
  return (
    <section className="container-wide py-24">
      <div className="flex flex-col items-end justify-between gap-6 sm:flex-row">
        <SectionHeading
          align="left"
          eyebrow="Featured"
          title={
            <>
              Hand-picked <span className="text-gradient">premium</span> resources
            </>
          }
          subtitle="The tools and services our team trusts most for real, measurable growth."
        />
        <Button asChild variant="outline" className="shrink-0">
          <Link href="/resources">
            View all <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((r, i) => (
          <ResourceCard key={r.slug} resource={r} index={i} />
        ))}
      </div>
    </section>
  );
}
