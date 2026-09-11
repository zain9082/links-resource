import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Eye, Star, Check, ArrowLeft } from "lucide-react";
import {
  getResourceBySlug,
  getServicePageBySlug,
  getResources,
  getCategoryBySlug,
  getResourcesByCategory,
  caseStudies,
} from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ResourceCard } from "@/components/resources/resource-card";
import { ServiceLandingPage } from "@/components/services/service-landing-page";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/shared/breadcrumbs";
import { buildMetadata, serviceJsonLd, baseUrl, breadcrumbJsonLd } from "@/lib/seo";
import { formatNumber, formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return getResources().map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) return buildMetadata({ title: "Not found" });
  const servicePage = getServicePageBySlug(slug);
  return buildMetadata({
    title: servicePage
      ? servicePage.seoTitle ?? `${servicePage.eyebrow} | ${resource.title}`
      : resource.title,
    description: servicePage?.seoDescription ?? servicePage?.subtitle ?? resource.description,
    path: `/resources/${resource.slug}`,
  });
}

const serviceCaseStudyCategoryMap: Record<string, string> = {
  "technical-seo-audit": "Search Engine Optimization",
  "seo-content-writing": "Content Writing",
  "da-dr-boost": "DA-DR Boost",
  "web-design-development": "Web Development",
  "local-seo": "Local SEO",
  "editorial-guest-posting": "Link Building",
  "editorial-link-building": "Link Building",
  "white-label-link-building": "Link Building",
};

export default async function ResourceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) notFound();
  const servicePage = getServicePageBySlug(slug);
  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", href: "/" },
    { name: "Resources", href: "/resources" },
    { name: resource.title, href: `/resources/${resource.slug}` },
  ];
  const breadcrumbSchema = breadcrumbJsonLd(breadcrumbs);

  if (servicePage) {
    const caseStudyCategory = serviceCaseStudyCategoryMap[slug] ?? "";
    const relatedCaseStudies = caseStudies
      .filter((study) => study.category === caseStudyCategory)
      .slice(0, 2);

    const serviceSchema = serviceJsonLd({
      name: resource.title,
      description: servicePage.subtitle,
      url: `${baseUrl}/resources/${resource.slug}`,
    });

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <ServiceLandingPage
          content={servicePage}
          relatedCaseStudies={relatedCaseStudies}
          breadcrumbs={<Breadcrumbs items={breadcrumbs} />}
        />
      </>
    );
  }

  const category = getCategoryBySlug(resource.category);
  const related = getResourcesByCategory(resource.category)
    .filter((r) => r.slug !== resource.slug)
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="container-wide pt-32 sm:pt-36">
        <Breadcrumbs items={breadcrumbs} />
        <Link
          href="/resources"
          className="mt-5 inline-flex items-center gap-1.5 text-sm text-muted hover:text-white"
        >
          <ArrowLeft className="size-4" /> Back to resources
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="flex items-start gap-4">
              <div className="grid size-16 shrink-0 place-items-center rounded-2xl bg-gradient-purple text-2xl font-bold text-white glow-shadow">
                {resource.title.charAt(0)}
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white sm:text-4xl">
                  {resource.title}
                </h1>
                <p className="mt-1 text-muted">{resource.tagline}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {category && (
                <Link href={`/categories/${category.slug}`}>
                  <Badge variant="purple">{category.name}</Badge>
                </Link>
              )}
              <Badge variant="blue">{resource.pricing}</Badge>
              {resource.tags.map((t) => (
                <Link key={t} href={`/tags/${t}`}>
                  <Badge>#{t}</Badge>
                </Link>
              ))}
            </div>

            <p className="mt-8 text-lg leading-relaxed text-slate-200">
              {resource.description}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Niche-relevant and quality-driven",
                "Transparent reporting & tracking",
                "Built for long-term, sustainable growth",
                "Trusted by 50+ global clients",
              ].map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-2.5 rounded-xl glass p-3 text-sm text-slate-200"
                >
                  <span className="grid size-5 place-items-center rounded-full bg-purple/20">
                    <Check className="size-3 text-purple-2" />
                  </span>
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="glass-strong glow-shadow sticky top-24 rounded-2xl p-6">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="rounded-xl bg-white/5 p-3">
                  <div className="flex items-center justify-center gap-1 text-lg font-bold text-white">
                    <Star className="size-4 fill-purple-2 text-purple-2" />
                    {resource.rating.toFixed(1)}
                  </div>
                  <div className="mt-1 text-xs text-muted">Rating</div>
                </div>
                <div className="rounded-xl bg-white/5 p-3">
                  <div className="flex items-center justify-center gap-1 text-lg font-bold text-white">
                    <Eye className="size-4" />
                    {formatNumber(resource.views)}
                  </div>
                  <div className="mt-1 text-xs text-muted">Views</div>
                </div>
              </div>

              <Button asChild size="lg" className="mt-5 w-full">
                <a href={resource.url} target="_blank" rel="noopener noreferrer">
                  Visit Resource <ArrowUpRight className="size-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="mt-3 w-full">
                <Link href="/contact">Request a Quote</Link>
              </Button>

              <p className="mt-5 text-center text-xs text-muted">
                Added {formatDate(resource.createdAt)}
              </p>
            </div>
          </aside>
        </div>

        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="text-2xl font-bold text-white">
              Related <span className="text-gradient">resources</span>
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r, i) => (
                <ResourceCard key={r.slug} resource={r} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
