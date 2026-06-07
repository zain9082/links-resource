"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { howItWorks } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Check } from "lucide-react";

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

  return (
    <section className="container-wide py-24">
      <SectionHeading
        align="left"
        eyebrow="How it works"
        title={
          <>
            Simple process, <span className="text-gradient">real results</span>
          </>
        }
        subtitle="A clear, transparent workflow designed around measurable business growth."
      />

      <div ref={ref} className="relative mt-16 max-w-3xl">
        {/* Progress line */}
        <div className="absolute bottom-0 left-5 top-0 w-0.5 bg-white/10" />
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-5 top-0 w-0.5 origin-top bg-gradient-to-b from-purple via-blue to-pink"
        />

        <div className="space-y-6">
          {howItWorks.map((s, i) => (
            <Reveal key={s.index} delay={i}>
              <div className="relative flex gap-6 pl-14">
                {/* Step marker */}
                <div className="absolute left-0 top-6 z-10">
                  <div className="grid size-10 place-items-center rounded-full border-2 border-purple/50 bg-bg-900 text-sm font-bold text-purple-2">
                    {i === 0 ? (
                      <Check className="size-4" />
                    ) : (
                      s.index.replace("0", "")
                    )}
                  </div>
                </div>

                <div className="glass glow-border flex-1 rounded-2xl p-6 sm:p-7">
                  <div className="mb-3 inline-flex items-center gap-2">
                    <span className="rounded-lg bg-gradient-pink px-2.5 py-1 text-xs font-bold text-white">
                      {s.index}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {s.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
