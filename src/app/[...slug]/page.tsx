import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServicePageBySlug, caseStudies } from "@/lib/data";
import { restoredServiceRoutes, restoredLegalRoutes } from "@/lib/restored-routes";
import { buildMetadata, serviceJsonLd, canonicalUrl, pageMetadata } from "@/lib/seo";
import { ServiceLandingPage } from "@/components/services/service-landing-page";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { getPageConfig, pageConfigs } from "../../../content/pages";
import { PageTemplateRenderer } from "@/components/templates/page-template";

export const dynamicParams = false;

export function generateStaticParams() {
  return [...new Set([...pageConfigs.map((page) => page.slug), ...Object.keys(restoredServiceRoutes), ...Object.keys(restoredLegalRoutes)])]
    .filter((path) => path !== "/")
    .map((path) => ({ slug: path.split("/").filter(Boolean) }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  const path = `/${slug.join("/")}`;
  const configured = getPageConfig(path);
  if (configured) return pageMetadata(configured);
  const page = restoredServiceRoutes[path] ?? restoredLegalRoutes[path];
  if (!page) return buildMetadata({ title: "Not found", path, noindex: true });
  return buildMetadata({ title: page.title, description: page.description, path });
}

export default async function RestoredPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const path = `/${slug.join("/")}`;
  const configured = getPageConfig(path);
  if (configured) return <PageTemplateRenderer page={configured} />;
  const service = restoredServiceRoutes[path];
  const legal = restoredLegalRoutes[path];
  if (!service && !legal) notFound();

  if (service) {
    const original = getServicePageBySlug(service.sourceSlug);
    if (!original) notFound();
    const content = { ...original, title: service.h1, seoTitle: service.title, seoDescription: service.description };
    return <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd({ name: service.title, description: service.description, url: canonicalUrl(path) })) }} />
      <ServiceLandingPage
        content={content}
        relatedCaseStudies={caseStudies.slice(0, 2)}
        breadcrumbs={<Breadcrumbs items={[{ name: "Home", href: "/" }, { name: service.title, href: path }]} />}
      />
    </>;
  }

  return <article className="container-wide pb-24 pt-32 sm:pt-36">
    <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: legal.title, href: path }]} />
    <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12">
      <p className="text-sm uppercase tracking-widest text-purple-2">Legal</p>
      <h1 className="mt-3 text-4xl font-bold text-white">{legal.title}</h1>
      <p className="mt-5 text-muted">{legal.intro}</p>
      {legal.sections.map((section) => <section className="mt-9" key={section.heading}>
        <h2 className="text-xl font-semibold text-white">{section.heading}</h2>
        <p className="mt-3 leading-relaxed text-muted">{section.text}</p>
      </section>)}
      <p className="mt-10 text-sm text-muted">Last updated: 2026</p>
    </div>
  </article>;
}
