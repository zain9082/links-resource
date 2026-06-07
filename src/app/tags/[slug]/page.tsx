import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { tags, getTagBySlug, getResourcesByTag } from "@/lib/data";
import { PageHeader } from "@/components/shared/page-header";
import { ResourceCard } from "@/components/resources/resource-card";
import { buildMetadata } from "@/lib/seo";

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

  return (
    <>
      <PageHeader
        eyebrow="Tag"
        title={
          <>
            <span className="text-gradient">#{tag.name}</span>
          </>
        }
        subtitle={`${list.length} resources tagged ${tag.name}.`}
      />
      <div className="container-wide grid gap-5 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((r, i) => (
          <ResourceCard key={r.slug} resource={r} index={i} />
        ))}
      </div>
    </>
  );
}
