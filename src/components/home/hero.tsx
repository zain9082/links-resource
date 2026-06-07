"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Check, Rocket } from "lucide-react";
import { Particles } from "@/components/backgrounds/particles";
import { HeroLeadForm } from "@/components/forms/hero-lead-form";
import { HeroGradientHeading } from "@/components/shared/cursor-gradient-text";
import { Button } from "@/components/ui/button";
import { heroBullets } from "@/lib/data";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 60, damping: 20 });
  const py = useSpring(my, { stiffness: 60, damping: 20 });

  function onMouseMove(e: React.MouseEvent) {
    const { innerWidth, innerHeight } = window;
    mx.set((e.clientX / innerWidth - 0.5) * 30);
    my.set((e.clientY / innerHeight - 0.5) * 30);
  }

  return (
    <section
      ref={ref}
      onMouseMove={onMouseMove}
      className="relative overflow-hidden pt-28 sm:pt-32"
    >
      <Particles density={55} />

      <motion.div
        style={{ x: px, y: py }}
        className="pointer-events-none absolute left-0 top-20 size-80 rounded-full bg-purple/20 blur-[120px]"
      />
      <motion.div
        style={{ x: useTransform(px, (v) => -v), y: useTransform(py, (v) => -v) }}
        className="pointer-events-none absolute bottom-0 right-0 size-80 rounded-full bg-blue/20 blur-[120px]"
      />

      <motion.div style={{ y, opacity }} className="container-wide relative z-10 pb-16">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — copy */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-muted"
            >
              <Rocket className="size-4 text-purple-2" />
              Trusted SEO & Link Building Agency
            </motion.span>

            <HeroGradientHeading
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mt-6"
            />

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-8 space-y-3.5"
            >
              {heroBullets.map((item, i) => (
                <li key={item} className="flex items-start gap-3 text-sm sm:text-base">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-gradient-blue">
                    <Check className="size-3.5 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-slate-200">{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Button asChild size="lg">
                <Link href="/case-studies">View Case Study</Link>
              </Button>
              <div className="flex flex-wrap gap-2 text-xs text-muted">
                <span className="rounded-full glass px-3 py-1.5">
                  ✓ 500+ Projects Delivered
                </span>
                <span className="rounded-full glass px-3 py-1.5">
                  ✓ 50+ Global Clients
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right — lead form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <HeroLeadForm />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
