import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Icon } from "@/components/shared/icon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const grad: Record<string, string> = {
  Link2: "bg-gradient-purple",
  PenLine: "bg-gradient-pink",
  Code2: "bg-gradient-blue",
  Search: "bg-gradient-blue",
};

const serviceHrefBySlug: Record<string, string> = {
  "link-building": "/resources/editorial-guest-posting",
  "content-writing": "/resources/seo-content-writing",
  "web-development": "/resources/web-design-development",
  seo: "/resources/technical-seo-audit",
};

export function ServicesSection() {
  return (
    <section className="container-wide py-24">
      <SectionHeading
        eyebrow="Our services"
        title={
          <>
            Services we are <span className="text-gradient">offering</span>
          </>
        }
        subtitle="We help businesses grow through SEO, link building, content marketing, and conversion-focused digital solutions."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {services.map((s, i) => (
          <Reveal key={s.slug} delay={i}>
            <div className="group glass glow-border flex h-full flex-col rounded-2xl p-8 transition-transform hover:-translate-y-1.5">
              <span
                className={cn(
                  "grid size-14 place-items-center rounded-2xl text-white glow-shadow",
                  grad[s.icon] ?? "bg-gradient-purple"
                )}
              >
                <Icon name={s.icon} className="size-7" />
              </span>
              <h3 className="mt-6 text-xl font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {s.description}
              </p>
              <Button
                asChild
                variant="gradientBlue"
                size="sm"
                className="mt-6 w-fit"
              >
                <Link href={serviceHrefBySlug[s.slug] ?? `/resources?category=${s.slug}`}>
                  Learn More <ArrowUpRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
