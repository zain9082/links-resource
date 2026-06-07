import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories, getResourcesByCategory } from "@/lib/data";
import { PageHeader } from "@/components/shared/page-header";
import { Icon } from "@/components/shared/icon";
import { Reveal } from "@/components/shared/reveal";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Categories",
  description: "Browse curated resources by category.",
  path: "/categories",
});

const grad: Record<string, string> = {
  purple: "bg-gradient-purple",
  blue: "bg-gradient-blue",
  pink: "bg-gradient-pink",
};

export default function CategoriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Categories"
        title={
          <>
            Browse by <span className="text-gradient">category</span>
          </>
        }
        subtitle="Find exactly what you need across every discipline."
      />
      <div className="container-wide grid gap-5 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c, i) => (
          <Reveal key={c.slug} delay={i}>
            <Link
              href={`/categories/${c.slug}`}
              className="group glass glow-border flex h-full flex-col rounded-2xl p-6 transition-transform hover:-translate-y-1.5"
            >
              <div
                className={cn(
                  "grid size-12 place-items-center rounded-xl text-white glow-shadow",
                  grad[c.gradient]
                )}
              >
                <Icon name={c.icon} className="size-6" />
              </div>
              <h3 className="mt-5 flex items-center gap-1.5 text-lg font-semibold text-white">
                {c.name}
                <ArrowUpRight className="size-4 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-purple-2" />
              </h3>
              <p className="mt-2 flex-1 text-sm text-muted">{c.description}</p>
              <p className="mt-4 text-xs font-medium text-purple-2">
                {getResourcesByCategory(c.slug).length} resources
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </>
  );
}
