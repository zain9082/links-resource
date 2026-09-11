import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { tags, getTagBySlug, getResourcesByTag } from "@/lib/data";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/shared/breadcrumbs";
import { ResourceCard } from "@/components/resources/resource-card";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return tags.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tag = getTagBySlug(slug);
  return buildMetadata({
    title: tag ? `#${tag.name}` : "Tag",
    path: `/tags/${slug}`,
  });
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tag = getTagBySlug(slug);
  if (!tag) notFound();
  const list = getResourcesByTag(slug);
  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", href: "/" },
    { name: "Resources", href: "/resources" },
    { name: tag.name, href: `/tags/${tag.slug}` },
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
            Tag
          </span>
          <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            <span className="text-gradient">#{tag.name}</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            {list.length} resources tagged {tag.name}.
          </p>
        </div>
      </div>
      <div className="container-wide grid gap-5 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((r, i) => (
          <ResourceCard key={r.slug} resource={r} index={i} />
        ))}
      </div>
    </>
  );
}
