import Link from "next/link";
import { consultationBanner } from "@/lib/data";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";

export function ConsultationBanner() {
  return (
    <section className="container-wide py-16">
      <Reveal>
        <div className="glow-border relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue/30 via-purple/25 to-cyan/20 p-10 text-center sm:p-14">
          <div className="pointer-events-none absolute -left-20 top-0 size-60 rounded-full bg-blue/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 size-60 rounded-full bg-purple/30 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              {consultationBanner.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-200 sm:text-lg">
              {consultationBanner.subtitle}
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-gradient-pink hover:opacity-90"
            >
              <Link href="/contact">{consultationBanner.cta}</Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
