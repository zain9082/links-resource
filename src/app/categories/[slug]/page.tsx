import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  categories,
  getCategoryBySlug,
  getResourcesByCategory,
} from "@/lib/data";
import { ResourceExplorer } from "@/components/resources/resource-explorer";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/shared/breadcrumbs";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

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
  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", href: "/" },
    { name: "Categories", href: "/categories" },
    { name: category.name, href: `/categories/${category.slug}` },
  ];
  const breadcrumbSchema = breadcrumbJsonLd(breadcrumbs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="container-wide pt-32 sm:pt-36">
        <Breadcrumbs items={breadcrumbs} className="flex justify-center" />
        <div className="mt-8 text-center">
          <span className="mb-3 inline-block rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-purple-2">
            Category
          </span>
          <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {category.name} <span className="text-gradient">resources</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted">{category.description}</p>
        </div>
      </div>
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
