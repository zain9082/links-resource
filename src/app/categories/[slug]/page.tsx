import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  categories,
  getCategoryBySlug,
  getResourcesByCategory,
} from "@/lib/data";
import { ResourceExplorer } from "@/components/resources/resource-explorer";
import { PageHeader } from "@/components/shared/page-header";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return buildMetadata({ title: "Not found" });
  return buildMetadata({
    title: `${category.name} Resources`,
    description: category.description,
    path: `/categories/${category.slug}`,
  });
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  return (
    <>
      <PageHeader
        eyebrow="Category"
        title={
          <>
            {category.name} <span className="text-gradient">resources</span>
          </>
        }
        subtitle={category.description}
      />
      <div className="container-wide py-12">
        <ResourceExplorer
          resources={getResourcesByCategory(slug)}
          categories={categories}
          initialCategory={slug}
        />
      </div>
    </>
  );
}
