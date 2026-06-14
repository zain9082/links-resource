"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { howItWorks } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [completed, setCompleted] = useState<boolean[]>(
    () => howItWorks.map(() => false)
  );

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

  const setStepRef = useCallback((index: number, el: HTMLDivElement | null) => {
    stepRefs.current[index] = el;
  }, []);

  useEffect(() => {
    const updateCompleted = () => {
      const threshold = window.innerHeight * 0.52;
      const next = howItWorks.map((_, i) => {
        const el = stepRefs.current[i];
        if (!el) return false;
        return el.getBoundingClientRect().top < threshold;
      });
      setCompleted((prev) =>
        prev.some((v, i) => v !== next[i]) ? next : prev
      );
    };

    updateCompleted();
    window.addEventListener("scroll", updateCompleted, { passive: true });
    window.addEventListener("resize", updateCompleted, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateCompleted);
      window.removeEventListener("resize", updateCompleted);
    };
  }, []);

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

      <div ref={containerRef} className="relative mt-16 max-w-3xl">
        <div className="absolute bottom-0 left-5 top-0 w-0.5 bg-white/10" />
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-5 top-0 w-0.5 origin-top bg-gradient-to-b from-purple via-blue to-pink"
        />

        <div className="space-y-6">
          {howItWorks.map((s, i) => (
            <Reveal key={s.index} delay={i}>
              <div
                ref={(el) => setStepRef(i, el)}
                className="relative flex gap-6 pl-14"
              >
                <div className="absolute left-0 top-6 z-10">
                  <motion.div
                    layout
                    className={cn(
                      "grid size-10 place-items-center rounded-full border-2 text-sm font-bold transition-colors duration-300",
                      completed[i]
                        ? "border-purple bg-gradient-purple text-white glow-shadow"
                        : "border-purple/50 bg-bg-900 text-purple-2"
                    )}
                  >
                    {completed[i] ? (
                      <motion.span
                        key="check"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 22 }}
                      >
                        <Check className="size-4" strokeWidth={3} />
                      </motion.span>
                    ) : (
                      <span>{s.index.replace("0", "")}</span>
                    )}
                  </motion.div>
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
