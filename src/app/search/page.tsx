import type { Metadata } from "next";
import { getResources, categories } from "@/lib/data";
import { ResourceExplorer } from "@/components/resources/resource-explorer";
import { PageHeader } from "@/components/shared/page-header";
import { buildMetadata } from "@/lib/seo";

const searchMetadata = buildMetadata({
  title: "Search",
  description: "Search the full resource directory instantly.",
  path: "/search",
});

export const metadata: Metadata = {
  ...searchMetadata,
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  return (
    <>
      <PageHeader
        eyebrow="Search"
        title={
          <>
            Find your next <span className="text-gradient">resource</span>
          </>
        }
        subtitle="Type to instantly filter across the entire directory."
      />
      <div className="container-wide py-12">
        <ResourceExplorer
          resources={getResources()}
          categories={categories}
          initialQuery={q ?? ""}
        />
      </div>
    </>
  );
}
