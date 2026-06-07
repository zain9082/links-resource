import type { Metadata } from "next";
import { getResources, categories } from "@/lib/data";
import { ResourceExplorer } from "@/components/resources/resource-explorer";
import { PageHeader } from "@/components/shared/page-header";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "All Resources",
  description:
    "Browse the full directory of curated premium resources for developers, designers and digital creators.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Directory"
        title={
          <>
            Explore every <span className="text-gradient">resource</span>
          </>
        }
        subtitle="Instant search and advanced filters across SEO, link building, content, development, design and AI."
      />
      <div className="container-wide py-12">
        <ResourceExplorer resources={getResources()} categories={categories} />
      </div>
    </>
  );
}
