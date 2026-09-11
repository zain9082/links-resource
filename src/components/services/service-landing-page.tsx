import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Dot, TrendingUp } from "lucide-react";
import { HeroLeadForm } from "@/components/forms/hero-lead-form";
import { CaseStudyCard } from "@/components/case-studies/case-study-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { CaseStudy, ServicePageContent } from "@/lib/types";

type ServiceLandingPageProps = {
  content: ServicePageContent;
  relatedCaseStudies: CaseStudy[];
};

export function ServiceLandingPage({
  content,
  relatedCaseStudies,
}: ServiceLandingPageProps) {
  return (
    <>
      <section className="container-wide pt-32 sm:pt-36">
        <div className="grid items-center gap-8 lg:grid-cols-5 lg:gap-10">
          <div className="lg:col-span-3">
            <Badge variant="purple">{content.eyebrow}</Badge>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl">
              {content.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {content.subtitle}
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {content.heroPoints.map((point) => (
                <span
                  key={point}
                  className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs text-slate-200 sm:text-sm"
                >
                  <Check className="size-3.5 text-purple-2" />
                  {point}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/contact">
                  {content.ctaButton}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <HeroLeadForm />
          </div>
        </div>
      </section>

      <section className="container-wide py-10">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {content.stats.map((stat) => (
            <div key={stat.label} className="glass glow-border rounded-2xl p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-muted">
                {stat.label}
              </p>
              <p className="mt-2 text-2xl font-bold text-white">{stat.value}</p>
              {stat.delta && (
                <p className="mt-1 inline-flex items-center gap-1 text-xs text-emerald-300">
                  <TrendingUp className="size-3.5" />
                  {stat.delta}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="container-wide py-12">
        <div className="text-center">
          <Badge variant="blue">Pricing plans</Badge>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Flexible packages for your growth goals
          </h2>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {content.packages.map((pkg) => (
            <div key={pkg.name} className="glass-strong glow-border rounded-3xl p-7">
              <p className="text-sm font-semibold text-purple-2">{pkg.name}</p>
              <p className="mt-3 text-4xl font-bold text-white">
                {pkg.price}
                <span className="ml-1 text-base font-medium text-muted">
                  {pkg.period}
                </span>
              </p>
              <p className="mt-3 text-sm text-muted">{pkg.description}</p>
              <ul className="mt-6 space-y-2.5">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-200">
                    <Dot className="mt-0.5 size-4 shrink-0 text-purple-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="sm" className="mt-7">
                <Link href="/contact">Choose Plan</Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section className="container-wide py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <Badge variant="pink">Why choose us</Badge>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              {content.whyTitle}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {content.whyDescription}
            </p>
          </div>
          <div className="space-y-3">
            {content.whyPoints.map((point) => (
              <div key={point} className="glass rounded-2xl px-4 py-3 text-sm text-slate-200">
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-wide py-10">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-blue p-10 text-center">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_55%)]" />
          <h3 className="relative text-3xl font-bold text-white sm:text-4xl">
            {content.ctaTitle}
          </h3>
          <Button asChild size="lg" className="relative mt-6 bg-white text-blue hover:bg-white/90">
            <Link href="/contact">{content.ctaButton}</Link>
          </Button>
        </div>
      </section>

      <section className="container-wide py-14">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Badge variant="blue">Process</Badge>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              {content.processTitle}
            </h2>
          </div>
          <div className="lg:col-span-3">
            <div className="space-y-5">
              {content.processSteps.map((step, i) => (
                <div
                  key={step.title}
                  className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-5"
                >
                  <span className="absolute -left-3 top-5 grid size-8 place-items-center rounded-full bg-gradient-purple text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="pl-6 text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 pl-6 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-wide py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="glass-strong glow-border rounded-3xl p-7">
            <h3 className="text-2xl font-bold text-white">{content.deliverablesTitle}</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {content.deliverables.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2 text-sm text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="glass-strong glow-border rounded-3xl p-7">
            <h3 className="text-2xl font-bold text-white">Trusted placements</h3>
            <p className="mt-2 text-sm text-muted">
              We work with platforms and publishers trusted worldwide.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {content.sampleLogos.map((logo) => (
                <div
                  key={logo}
                  className="relative h-12 overflow-hidden rounded-lg border border-white/10 bg-white/90 p-2"
                >
                  <Image src={logo} alt="Partner logo" fill className="object-contain p-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {relatedCaseStudies.length > 0 && (
        <section className="container-wide py-12">
          <div className="flex items-center justify-between gap-4">
            <div>
              <Badge variant="purple">Case studies</Badge>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Real project outcomes
              </h2>
            </div>
            <Button asChild variant="glass">
              <Link href="/case-studies">View all</Link>
            </Button>
          </div>
          <div className="mt-8 space-y-8">
            {relatedCaseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </section>
      )}

      <section className="container-wide pb-24 pt-12">
        <div className="glass-strong glow-border rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{content.faqTitle}</h2>
          <div className="mt-6 space-y-3">
            {content.faq.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-white/10 bg-white/[0.02] p-4"
              >
                <summary className="cursor-pointer list-none text-sm font-semibold text-white">
                  {item.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
