"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { featuredPlacements } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const grad: Record<string, string> = {
  purple: "bg-gradient-purple",
  blue: "bg-gradient-blue",
  pink: "bg-gradient-pink",
};

export function FeaturedPlacements() {
  const row = [...featuredPlacements, ...featuredPlacements];

  return (
    <section className="py-20">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Featured placements"
          title={
            <>
              Placements from{" "}
              <span className="text-gradient">real authority</span> websites
            </>
          }
          subtitle="Explore examples of real websites where we secure niche-relevant content placements to help improve authority, rankings, and organic visibility."
        />
      </div>

      <div className="relative mt-12 w-screen -translate-x-1/2 left-1/2 overflow-hidden">
        <div className="flex w-max animate-marquee gap-6 px-6 md:px-10">
          {row.map((p, i) => {
            const card = (
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass glow-border flex h-24 w-56 shrink-0 items-center justify-center rounded-2xl px-6"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "grid size-10 place-items-center rounded-xl text-sm font-bold text-white",
                      grad[p.gradient]
                    )}
                  >
                    {p.name.charAt(0)}
                  </span>
                  <span className="text-sm font-semibold text-white">{p.name}</span>
                </div>
              </motion.div>
            );
            return p.url ? (
              <a
                key={`${p.name}-${i}`}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${p.name}`}
              >
                {card}
              </a>
            ) : (
              card
            );
          })}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-bg-900 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-bg-900 to-transparent" />
      </div>

      <div className="container-wide mt-10 text-center">
        <Button asChild size="lg" className="bg-gradient-pink hover:opacity-90">
          <Link href="/contact">Get Quote</Link>
        </Button>
      </div>
    </section>
  );
}
