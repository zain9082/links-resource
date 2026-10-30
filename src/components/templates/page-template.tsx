import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { PageBlock, PageConfig, PageFaq, PageTemplate } from "../../../content/pages/types";
import { getPageConfig, visibleChildren, visibleRelated } from "../../../content/pages";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/shared/breadcrumbs";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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

function Block({ block, index, faqs }: { block: PageBlock; index: number; faqs: PageFaq[] }) {
  if (block.type === "hero") return null;
  const body = <p className="mt-4 max-w-3xl break-words leading-relaxed text-muted">{block.body}</p>;
  const heading = block.heading ? <h2 className="max-w-3xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">{block.heading}</h2> : null;
  const sectionClass = "container-wide py-10 sm:py-14";

  if (block.type === "servicesGrid") return <section className={sectionClass} id={`section-${index}`}>
    {heading}{body}
    {!!block.items?.length && <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{block.items.map((item) =>
      <Card className="flex h-full min-w-0 flex-col p-7" key={item.title}>
        <Badge variant="purple" className="w-fit">Service</Badge>
        <h3 className="mt-5 break-words text-xl font-semibold text-white">{item.title}</h3>
        <p className="mt-3 flex-1 break-words text-sm leading-relaxed text-muted">{item.description}</p>
        {item.href && <Link href={item.href} className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-purple-2">Learn more <ArrowRight className="size-4" /></Link>}
      </Card>)}</div>}
  </section>;

  if (block.type === "process") return <section className={sectionClass} id={`section-${index}`}>
    {heading}{body}
    {!!block.steps?.length && <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{block.steps.map((step, i) =>
      <Card className="min-w-0 p-7" key={step.title}><span className="text-3xl font-bold text-gradient">{String(i + 1).padStart(2, "0")}</span><h3 className="mt-4 break-words text-xl font-semibold text-white">{step.title}</h3><p className="mt-3 break-words text-sm leading-relaxed text-muted">{step.description}</p></Card>)}</div>}
  </section>;

  if (block.type === "proof") return <section className={sectionClass} id={`section-${index}`}>
    {heading}{body}
    {!!block.metrics?.length && <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{block.metrics.map((metric) =>
      <Card className="min-w-0 p-7" key={metric.label}><p className="break-words text-3xl font-bold text-gradient">{metric.value}</p><p className="mt-3 break-words text-sm text-muted">{metric.label}</p></Card>)}</div>}
  </section>;

  if (block.type === "pricing") return <section className={sectionClass} id={`section-${index}`}>
    {heading}{body}
    {!!block.plans?.length && <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{block.plans.map((plan) =>
      <Card className="min-w-0 p-7" key={plan.name}><Badge variant="purple">Plan</Badge><h3 className="mt-5 break-words text-xl font-semibold text-white">{plan.name}</h3><p className="mt-3 break-words text-sm leading-relaxed text-muted">{plan.description}</p></Card>)}</div>}
  </section>;

  if (block.type === "comparison") return <section className={sectionClass} id={`section-${index}`}>
    {heading}{body}
    {!!block.columns?.length && <div className="mt-8 grid gap-5 md:grid-cols-2">{block.columns.map((column) =>
      <Card className="min-w-0 p-7" key={column.title}><h3 className="break-words text-xl font-semibold text-white">{column.title}</h3><ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted">{column.points.map((point) => <li className="flex items-start gap-3" key={point}><Check className="mt-0.5 size-4 shrink-0 text-purple-2" />{point}</li>)}</ul></Card>)}</div>}
  </section>;

  if (block.type === "cta") return <section className={sectionClass} id={`section-${index}`}>
    <div className="glass-strong glow-border rounded-3xl p-8 sm:p-12">{heading}{body}<Button asChild size="lg" className="mt-7"><Link href={block.href ?? "/contact"}>{block.label ?? "Contact us"}<ArrowRight className="size-4" /></Link></Button></div>
  </section>;

  if (block.type === "faq") return <section className={sectionClass} id={`section-${index}`}>
    {heading}
    {faqs.length ? <div className="mt-8 grid gap-4 md:grid-cols-2">{faqs.map((faq) => <Card className="min-w-0" key={faq.question}><h3 className="break-words font-semibold text-white">{faq.question}</h3><p className="mt-3 break-words text-sm leading-relaxed text-muted">{faq.answer}</p></Card>)}</div> : body}
  </section>;

  return <section className={sectionClass} id={`section-${index}`}>
    <div className={block.type === "problem" ? "glass-strong glow-border rounded-3xl p-8 sm:p-12" : ""}>{heading}{body}</div>
  </section>;
}

function ConfigTemplate({ page, variant }: { page: PageConfig; variant: PageTemplate }) {
  const hero = page.sections.find((block) => block.type === "hero");
  const crumbs = breadcrumbItems(page);
  return <>
    <PageSchema page={page} />
    {page.slug !== "/" && <div className="container-wide pt-32"><Breadcrumbs items={crumbs} /></div>}
    <PageHeader eyebrow={variant.replace(/([A-Z])/g, " $1")} title={page.h1} subtitle={hero?.body} />
    <div className="pb-14">{page.sections.map((block, index) => <Block block={block} index={index} faqs={page.faqs} key={`${block.type}-${index}`} />)}</div>
    <PageInternalLinks page={page} />
  </>;
}

export function PageSchema({ page }: { page: PageConfig }) {
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
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function PageInternalLinks({ page }: { page: PageConfig }) {
  const children = visibleChildren(page.slug);
  const related = visibleRelated(page);
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
