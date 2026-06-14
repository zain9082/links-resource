import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ViewAllSites } from "@/components/link-building/view-all-sites";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { navbarLinkBuildingMenu } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Link Building Services",
  description:
    "Premium editorial link building, guest posting, and white-label placements on high-authority publications worldwide.",
  path: "/link-building-services",
});

export default function LinkBuildingServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Link Building Services"
        title={
          <>
            Build authority with{" "}
            <span className="text-gradient">premium publications</span>
          </>
        }
        subtitle="Editorial placements, guest posting, and scalable link building packages — backed by transparent pricing and vetted high-DA sites."
      />

      <section className="container-wide pb-8">
        <div className="grid gap-4 md:grid-cols-3">
          {navbarLinkBuildingMenu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="glass glow-border group rounded-2xl p-6 transition-transform hover:-translate-y-0.5"
            >
              <Badge variant="purple" className="mb-4">
                Service
              </Badge>
              <h2 className="text-lg font-semibold text-white group-hover:text-purple-2">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-purple-2">
                Learn more
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-wide py-8">
        <div className="mb-8 grid gap-3 sm:grid-cols-3">
          {[
            "Hand-vetted high-DA publications",
            "Transparent pricing & turnaround times",
            "Niche-specific placement options",
          ].map((point) => (
            <div
              key={point}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200"
            >
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-gradient-purple">
                <Check className="size-3.5 text-white" strokeWidth={3} />
              </span>
              {point}
            </div>
          ))}
        </div>

        <ViewAllSites limit={5} />
      </section>

      <section className="container-wide pb-24 pt-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-blue p-8 text-center sm:p-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_55%)]" />
          <h2 className="relative text-2xl font-bold text-white sm:text-3xl">
            Need help choosing the right placements?
          </h2>
          <p className="relative mx-auto mt-3 max-w-xl text-sm text-slate-100 sm:text-base">
            Our outreach team will recommend the best publications for your niche, budget, and
            SEO goals.
          </p>
          <Button asChild size="lg" className="relative mt-6 bg-white text-blue hover:bg-white/90">
            <Link href="/contact">
              Get a free proposal
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
