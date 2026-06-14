import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Mail } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { teamMembers, teamPageContent } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = buildMetadata({
  title: "Our Team",
  description:
    "Meet the team behind Links Resource growth campaigns across SEO, link building, content, and outreach.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <>
      <section className="container-wide pt-32 sm:pt-36">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-blue p-8 text-center sm:p-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_55%)]" />
          <Badge variant="solid" className="relative">
            Team
          </Badge>
          <h1 className="relative mt-4 text-3xl font-bold leading-tight text-white sm:text-5xl">
            {teamPageContent.title}
          </h1>
          <p className="relative mx-auto mt-4 max-w-3xl text-sm text-white/85 sm:text-base">
            {teamPageContent.subtitle}
          </p>
        </div>
      </section>

      <section className="container-wide py-16">
        <div className="grid gap-x-6 gap-y-20 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="group relative mt-14 overflow-visible rounded-[2rem] border border-blue/80 bg-[#1759c3] px-5 pb-6 pt-16 text-center text-white shadow-[0_28px_55px_-34px_rgba(59,130,246,0.95)]"
            >
              <div className="absolute -top-14 left-1/2 h-32 w-32 -translate-x-1/2 overflow-hidden rounded-full border-[6px] border-[#0f5cd5] bg-white/10 shadow-xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="128px"
                  className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                {member.hoverImage && (
                  <Image
                    src={member.hoverImage}
                    alt={`${member.name} working`}
                    fill
                    sizes="128px"
                    className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                )}
              </div>
              <h3 className="text-balance text-center text-[2.2rem] font-bold leading-[1.05]">
                {member.name}
              </h3>
              <p className="mt-2 text-center text-[1.1rem] font-semibold leading-snug text-white/95">
                {member.role}
              </p>
              <p className="mt-2 text-center text-base leading-relaxed text-white/90">
                {member.bio}
              </p>
              <p className="mt-3 break-all text-center text-[1.05rem] font-semibold leading-snug">
                {member.email}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-wide py-8">
        <h2 className="mb-5 text-3xl font-bold text-white sm:text-4xl">
          {teamPageContent.trustHeading}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {teamPageContent.trustPoints.map((point) => (
            <div key={point} className="glass rounded-2xl px-4 py-3 text-sm text-slate-200">
              {point}
            </div>
          ))}
        </div>
      </section>

      <section className="container-wide py-12">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          {teamPageContent.workflowHeading.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="text-gradient">
            {teamPageContent.workflowHeading.split(" ").slice(-1).join(" ")}
          </span>
        </h2>
        <div className="mt-8 space-y-4">
          {teamPageContent.workflow.map((step, i) => (
            <div key={step.title} className="relative rounded-2xl border border-white/10 glass p-5">
              <span className="absolute -left-3 top-5 grid size-8 place-items-center rounded-full bg-gradient-purple text-xs font-bold text-white">
                {i + 1}
              </span>
              <h3 className="pl-6 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 pl-6 text-sm leading-relaxed text-muted">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-wide pb-24 pt-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-pink p-10 text-center sm:p-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_55%)]" />
          <h3 className="relative text-3xl font-bold text-white sm:text-4xl">
            Ready to Grow With Our Team?
          </h3>
          <p className="relative mx-auto mt-3 max-w-2xl text-sm text-white/85 sm:text-base">
            Let&apos;s build a campaign designed around your growth targets.
          </p>
          <div className="relative mt-7 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="bg-white text-purple hover:bg-white/90">
              <Link href="/contact">
                Get Free Proposal
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="glass">
              <a href="mailto:hello@linksresource.com">
                <Mail className="size-4" />
                Email Team
              </a>
            </Button>
          </div>
          <div className="relative mt-6 flex flex-wrap justify-center gap-2 text-xs text-white/85">
            <span className="inline-flex items-center gap-1 rounded-full border border-white/25 px-3 py-1">
              <Check className="size-3.5" /> Real websites
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-white/25 px-3 py-1">
              <Check className="size-3.5" /> Manual outreach
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-white/25 px-3 py-1">
              <Check className="size-3.5" /> Transparent reporting
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
