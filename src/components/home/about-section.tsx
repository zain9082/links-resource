import Link from "next/link";
import { ArrowRight, Code2, Rocket, Settings } from "lucide-react";
import { aboutContent } from "@/lib/data";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section className="container-wide py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-widest text-pink">
            {aboutContent.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {aboutContent.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            {aboutContent.body}
          </p>
          <Button asChild size="lg" className="mt-8 bg-gradient-pink">
            <Link href="/contact">
              Get Started <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>

        <Reveal delay={1}>
          <div className="relative flex aspect-square max-w-lg items-center justify-center lg:ml-auto">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple/20 via-bg-800 to-blue/20 blur-sm" />
            <div className="glass-strong glow-border relative w-full rounded-3xl p-10">
              <div className="flex flex-col items-center gap-6">
                <div className="relative">
                  <div className="glass rounded-2xl p-6">
                    <Code2 className="size-16 text-purple-2" />
                  </div>
                  <div className="absolute -right-4 -top-4 grid size-12 animate-float place-items-center rounded-xl bg-gradient-purple glow-shadow">
                    <Settings className="size-5 text-white" />
                  </div>
                </div>
                <Rocket className="size-20 animate-float text-gradient" />
                <p className="text-center text-sm text-muted">
                  SEO · Content · Development — built for measurable growth
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
