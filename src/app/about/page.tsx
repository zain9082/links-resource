import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Eye,
  Headphones,
  LineChart,
  Search,
  Shield,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { aboutPageContent } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: aboutPageContent.hero.intro,
  path: "/about",
});

const whyChooseIcons = [Target, Eye, Zap, Sparkles, Shield, Users];

export default function AboutPage() {
  const { hero, whoWeAre, whatWeDo, whyChoose, approach, mission, services, cta } =
    aboutPageContent;

  return (
    <>
      <PageHeader
        eyebrow={hero.eyebrow}
        title={
          <>
            About <span className="text-gradient">Links Resource</span>
          </>
        }
        subtitle={hero.intro}
      />

      <div className="container-wide pb-8 text-center">
        <Button asChild size="lg">
          <Link href="/contact">
            {hero.cta}
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>

      <section className="container-wide py-16">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-purple-2">
              {whoWeAre.eyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {whoWeAre.title}
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <div className="space-y-4 text-base leading-relaxed text-muted sm:text-lg">
              {whoWeAre.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-wide py-16">
        <Reveal>
          <div className="glass-strong glow-border rounded-3xl p-8 sm:p-10">
            <span className="text-sm font-semibold uppercase tracking-widest text-purple-2">
              {whatWeDo.eyebrow}
            </span>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              {whatWeDo.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              {whatWeDo.body}
            </p>
          </div>
        </Reveal>
      </section>

      <section className="container-wide py-16">
        <SectionHeading
          eyebrow={whyChoose.eyebrow}
          title={
            <>
              {whyChoose.title.split(" ").slice(0, -2).join(" ")}{" "}
              <span className="text-gradient">
                {whyChoose.title.split(" ").slice(-2).join(" ")}
              </span>
            </>
          }
          subtitle={whyChoose.intro}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.items.map((item, i) => {
            const Icon = whyChooseIcons[i] ?? Sparkles;
            return (
              <Reveal key={item.title} delay={i}>
                <div className="glass glow-border h-full rounded-2xl p-6">
                  <span className="grid size-11 place-items-center rounded-xl bg-gradient-purple text-white glow-shadow">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="container-wide py-16">
        <SectionHeading
          eyebrow={approach.eyebrow}
          title={
            <>
              Our approach to{" "}
              <span className="text-gradient">digital growth</span>
            </>
          }
          subtitle={approach.intro}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {approach.steps.map((step, i) => (
            <Reveal key={step.title} delay={i}>
              <div className="glass glow-border h-full rounded-2xl p-6">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-gradient-pink text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-wide py-16">
        <Reveal>
          <div className="glass-strong glow-border rounded-3xl p-8 text-center sm:p-10">
            <span className="text-sm font-semibold uppercase tracking-widest text-purple-2">
              {mission.eyebrow}
            </span>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              {mission.title}
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
              {mission.body}
            </p>
          </div>
        </Reveal>
      </section>

      <section className="container-wide py-16">
        <SectionHeading
          eyebrow={services.eyebrow}
          title={
            <>
              Digital solutions for{" "}
              <span className="text-gradient">visibility & growth</span>
            </>
          }
          subtitle={services.intro}
        />
        <div className="mt-12 grid gap-4">
          {services.items.map((service, i) => (
            <Reveal key={service.title} delay={i % 3}>
              <Link
                href={service.href}
                className="glass glow-border group flex flex-col gap-3 rounded-2xl p-6 transition-colors hover:bg-white/5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-blue text-white">
                    {i % 3 === 0 ? (
                      <Search className="size-5" />
                    ) : i % 3 === 1 ? (
                      <LineChart className="size-5" />
                    ) : (
                      <Headphones className="size-5" />
                    )}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-2">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {service.body}
                    </p>
                  </div>
                </div>
                <ArrowRight className="size-5 shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:text-purple-2" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-wide pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-purple p-8 text-center sm:p-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)]" />
            <div className="relative">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                {cta.title}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm text-white/80 sm:text-base">
                {cta.body}
              </p>
              <Button
                asChild
                size="lg"
                className="mt-8 bg-white text-purple hover:bg-white/90"
              >
                <Link href="/contact">
                  {cta.button}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
