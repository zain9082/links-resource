import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PageBlock, PageConfig, PageTemplate } from "../../../content/pages/types";
import { getPageConfig, publishedChildren, publishedRelated } from "../../../content/pages";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/shared/breadcrumbs";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { breadcrumbJsonLd, canonicalUrl, serviceJsonLd } from "@/lib/seo";

function breadcrumbItems(page: PageConfig): BreadcrumbItem[] {
  const parents: PageConfig[] = [];
  let cursor = page.parent;
  while (cursor && cursor !== "/") {
    const parent = getPageConfig(cursor);
    if (!parent || parents.some((item) => item.slug === parent.slug)) break;
    parents.unshift(parent);
    cursor = parent.parent;
  }
  return [
    { name: "Home", href: "/" },
    ...parents.map((parent) => ({ name: parent.title, href: parent.slug })),
    { name: page.title, href: page.slug },
  ];
}

function Block({ block, index }: { block: PageBlock; index: number }) {
  if (block.type === "hero") return null;
  const body = <p className="mt-4 max-w-3xl leading-relaxed text-muted">{block.body}</p>;
  const heading = block.heading ? <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{block.heading}</h2> : null;
  const card = "glass glow-border rounded-2xl p-6";

  if (block.type === "servicesGrid") return <section className="container-wide py-10" id={`section-${index}`}>
    {heading}{body}
    {block.items?.length ? <div className="mt-7 grid gap-4 md:grid-cols-3">{block.items.map((item) =>
      <div className={card} key={item.title}>
        <Badge variant="purple">Service</Badge>
        <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
        <p className="mt-2 text-sm text-muted">{item.description}</p>
        {item.href && <Link href={item.href} className="mt-4 inline-flex items-center gap-1 text-sm text-purple-2">Learn more <ArrowRight className="size-4" /></Link>}
      </div>)}</div> : null}
  </section>;

  if (block.type === "process") return <section className="container-wide py-10" id={`section-${index}`}>
    {heading}{body}
    {block.steps?.length ? <div className="mt-7 grid gap-4 md:grid-cols-3">{block.steps.map((step, i) =>
      <div className={card} key={step.title}><span className="text-sm font-semibold text-purple-2">{String(i + 1).padStart(2, "0")}</span><h3 className="mt-3 text-lg font-semibold text-white">{step.title}</h3><p className="mt-2 text-sm text-muted">{step.description}</p></div>)}</div> : null}
  </section>;

  if (block.type === "proof") return <section className="container-wide py-10" id={`section-${index}`}>
    {heading}{body}
    {block.metrics?.length ? <div className="mt-7 grid gap-4 md:grid-cols-3">{block.metrics.map((metric) =>
      <div className={card} key={metric.label}><p className="text-3xl font-bold text-gradient">{metric.value}</p><p className="mt-2 text-sm text-muted">{metric.label}</p></div>)}</div> : null}
  </section>;

  if (block.type === "pricing") return <section className="container-wide py-10" id={`section-${index}`}>
    {heading}{body}
    {block.plans?.length ? <div className="mt-7 grid gap-4 md:grid-cols-3">{block.plans.map((plan) =>
      <div className={card} key={plan.name}><h3 className="text-lg font-semibold text-white">{plan.name}</h3><p className="mt-2 text-sm text-muted">{plan.description}</p></div>)}</div> : null}
  </section>;

  if (block.type === "comparison") return <section className="container-wide py-10" id={`section-${index}`}>
    {heading}{body}
    {block.columns?.length ? <div className="mt-7 grid gap-4 md:grid-cols-2">{block.columns.map((column) =>
      <div className={card} key={column.title}><h3 className="text-lg font-semibold text-white">{column.title}</h3><ul className="mt-3 space-y-2 text-sm text-muted">{column.points.map((point) => <li key={point}>{point}</li>)}</ul></div>)}</div> : null}
  </section>;

  if (block.type === "cta") return <section className="container-wide py-10" id={`section-${index}`}>
    <div className="glass-strong glow-border rounded-3xl p-8 sm:p-12">{heading}{body}<Button asChild className="mt-7"><Link href={block.href ?? "/contact"}>{block.label ?? "Contact us"}<ArrowRight className="ml-2 size-4" /></Link></Button></div>
  </section>;

  if (block.type === "faq") return <section className="container-wide py-10" id={`section-${index}`}>
    {heading}{body}
  </section>;

  return <section className="container-wide py-10" id={`section-${index}`}>
    <div className={block.type === "problem" ? "glass-strong glow-border rounded-3xl p-8 sm:p-10" : ""}>{heading}{body}</div>
  </section>;
}

function ConfigTemplate({ page, variant }: { page: PageConfig; variant: PageTemplate }) {
  const hero = page.sections.find((block) => block.type === "hero");
  const crumbs = breadcrumbItems(page);
  const faqSchema = page.faqs.length ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question", name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  } : null;
  const schema = [
    ...(page.slug === "/" ? [] : [breadcrumbJsonLd(crumbs)]),
    serviceJsonLd({ name: page.title, description: page.metaDescription, url: canonicalUrl(page.slug) }),
    ...(faqSchema ? [faqSchema] : []),
  ];

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    {page.slug !== "/" && <div className="container-wide pt-32"><Breadcrumbs items={crumbs} /></div>}
    <PageHeader eyebrow={variant.replace(/([A-Z])/g, " $1")} title={page.h1} subtitle={hero?.body} />
    <div className="pb-14">{page.sections.map((block, index) => <Block block={block} index={index} key={`${block.type}-${index}`} />)}</div>
    <PageInternalLinks page={page} />
    {page.faqs.length > 0 && <section className="container-wide pb-12"><h2 className="text-3xl font-semibold text-white">Frequently asked questions</h2><div className="mt-6 space-y-4">{page.faqs.map((faq) => <div className="glass rounded-2xl p-6" key={faq.question}><h3 className="font-semibold text-white">{faq.question}</h3><p className="mt-2 text-muted">{faq.answer}</p></div>)}</div></section>}
  </>;
}

export function PageInternalLinks({ page }: { page: PageConfig }) {
  const children = publishedChildren(page.slug);
  const related = publishedRelated(page);
  const parent = page.parent ? getPageConfig(page.parent) : undefined;
  if (!children.length && !parent && !related.length) return null;
  return <section className="container-wide pb-14">
      {children.length > 0 && <div className="mb-10">
        <h2 className="text-2xl font-semibold text-white">Explore our services</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">{children.map((child) => <Link href={child.slug} className="glass glow-border rounded-2xl p-6 transition-transform hover:-translate-y-0.5" key={child.slug}><h3 className="font-semibold text-white">{child.title}</h3><p className="mt-2 text-sm text-muted">{child.metaDescription}</p></Link>)}</div>
      </div>}
      {parent && <p className="mb-6 text-sm text-muted">Part of <Link href={parent.slug} className="font-medium text-purple-2 hover:text-white">{parent.title}</Link></p>}
      {related.length > 0 && <div>
        <h2 className="text-xl font-semibold text-white">Related services</h2>
        <div className="mt-4 flex flex-wrap gap-3">{related.map((item) => <Link href={item.slug} className="glass rounded-full px-4 py-2 text-sm text-muted transition-colors hover:text-white" key={item.slug}>{item.title}</Link>)}</div>
      </div>}
    </section>;
}

export const ServiceHubTemplate = ({ page }: { page: PageConfig }) => <ConfigTemplate page={page} variant="serviceHub" />;
export const ServiceChildTemplate = ({ page }: { page: PageConfig }) => <ConfigTemplate page={page} variant="serviceChild" />;
export const WhiteLabelTemplate = ({ page }: { page: PageConfig }) => <ConfigTemplate page={page} variant="whiteLabel" />;
export const IndustryTemplate = ({ page }: { page: PageConfig }) => <ConfigTemplate page={page} variant="industry" />;
export const LocationTemplate = ({ page }: { page: PageConfig }) => <ConfigTemplate page={page} variant="location" />;
export const PpcTemplate = ({ page }: { page: PageConfig }) => <ConfigTemplate page={page} variant="ppc" />;
export const WebDevTemplate = ({ page }: { page: PageConfig }) => <ConfigTemplate page={page} variant="webDev" />;
export const BlogGuideTemplate = ({ page }: { page: PageConfig }) => <ConfigTemplate page={page} variant="blogGuide" />;
export const CaseStudiesTemplate = ({ page }: { page: PageConfig }) => <ConfigTemplate page={page} variant="caseStudies" />;

export function PageTemplateRenderer({ page }: { page: PageConfig }) {
  switch (page.template) {
    case "serviceHub": return <ServiceHubTemplate page={page} />;
    case "serviceChild": return <ServiceChildTemplate page={page} />;
    case "whiteLabel": return <WhiteLabelTemplate page={page} />;
    case "industry": return <IndustryTemplate page={page} />;
    case "location": return <LocationTemplate page={page} />;
    case "ppc": return <PpcTemplate page={page} />;
    case "webDev": return <WebDevTemplate page={page} />;
    case "blogGuide": return <BlogGuideTemplate page={page} />;
    case "caseStudies": return <CaseStudiesTemplate page={page} />;
  }
}
