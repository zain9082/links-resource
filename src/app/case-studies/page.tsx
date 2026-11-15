import type { Metadata } from "next";
import { CaseStudiesHero } from "@/components/case-studies/case-studies-hero";
import { CaseStudiesContent } from "@/components/case-studies/case-studies-content";
import { buildMetadata } from "@/lib/seo";
import caseStudiesPage from "../../../content/pages/case-studies";
import { PageBreadcrumbs, PageSchema } from "@/components/templates/page-template";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies",
  description:
    "Explore SEO, link building, and web development case studies with real traffic, ranking, and conversion results.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <PageSchema page={caseStudiesPage} />
      <PageBreadcrumbs page={caseStudiesPage} />
      <CaseStudiesHero />
      <CaseStudiesContent />
    </>
  );
}
