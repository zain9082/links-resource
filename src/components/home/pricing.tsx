import Link from "next/link";
import { Check } from "lucide-react";
import { packages } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="pricing" className="container-wide scroll-mt-24 py-24">
      <SectionHeading
        eyebrow="Pricing"
        title={
          <>
            Plans that <span className="text-gradient">scale with you</span>
          </>
        }
        subtitle="Transparent monthly packages with a commitment to quality and results."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {packages.map((p, i) => (
          <Reveal key={p.name} delay={i}>
            <div
              className={cn(
                "relative flex h-full flex-col rounded-2xl p-8",
                p.highlight
                  ? "glass-strong glow-shadow scale-[1.02] border border-purple/40"
                  : "glass glow-border"
              )}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-purple px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-white">{p.name}</h3>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-bold text-gradient">
                  {p.price}
                </span>
                <span className="mb-1 text-sm text-muted">{p.period}</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2.5 text-sm text-slate-200"
                  >
                    <span className="grid size-5 place-items-center rounded-full bg-purple/20">
                      <Check className="size-3 text-purple-2" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant={p.highlight ? "primary" : "outline"}
                className="mt-8 w-full"
              >
                <Link href="/contact">Choose {p.name}</Link>
              </Button>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
