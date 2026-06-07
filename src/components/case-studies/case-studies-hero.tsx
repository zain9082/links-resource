"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HeroImagePanel } from "@/components/shared/hero-image-panel";
import { Button } from "@/components/ui/button";

export function CaseStudiesHero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="container-wide relative z-10 pb-16">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex rounded-full glass px-4 py-2 text-xs font-medium uppercase tracking-widest text-purple-2"
            >
              Case Studies
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl"
            >
              Grow With SEO &{" "}
              <span className="text-gradient-pink">High-Converting</span> Websites
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="mt-5 max-w-xl text-base text-muted sm:text-lg"
            >
              See how we&apos;ve helped experts transform their digital presence and
              become industry authorities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8"
            >
              <Button asChild size="lg">
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </motion.div>
          </div>

          <HeroImagePanel
            src="/images/case-studies-hero.png"
            alt="SEO and web development team planning growth strategy"
            label="Client success stories"
          />
        </div>
      </div>
    </section>
  );
}
