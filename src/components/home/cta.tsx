"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="container-wide py-24">
      <Reveal>
        <div className="glow-border relative overflow-hidden rounded-3xl bg-bg-800/80 p-10 text-center sm:p-16">
          <div className="cta-live-gradient pointer-events-none absolute inset-0" aria-hidden />

          <motion.div
            aria-hidden
            className="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full bg-purple/35 blur-3xl"
            animate={{ x: [0, 48, 12, 0], y: [0, 32, 8, 0], scale: [1, 1.15, 1.05, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -right-24 size-80 rounded-full bg-blue/30 blur-3xl"
            animate={{ x: [0, -40, -10, 0], y: [0, -28, -6, 0], scale: [1, 1.12, 1.04, 1] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink/20 blur-3xl"
            animate={{ scale: [1, 1.25, 1.1, 1], opacity: [0.5, 0.85, 0.65, 0.5] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />

          <h2 className="relative z-10 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Ready to <span className="text-gradient">grow your business?</span>
          </h2>
          <p className="relative z-10 mx-auto mt-4 max-w-xl text-muted">
            Let&apos;s create a strategy tailored to your business.
          </p>
          <div className="relative z-10 mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">
                Book a Free SEO Consultation <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="glass">
              <Link href="/resources">Explore Services</Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
