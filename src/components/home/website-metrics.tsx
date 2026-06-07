"use client";

import { motion } from "framer-motion";
import { BarChart3, Globe, TrendingUp } from "lucide-react";
import { websiteMetrics } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

export function WebsiteMetrics() {
  return (
    <section className="container-wide py-24">
      <SectionHeading
        eyebrow="Authority metrics"
        title={
          <>
            Sample website metrics &{" "}
            <span className="text-gradient">authority</span>
          </>
        }
        subtitle="Below are examples of websites where placements may be secured depending on niche relevance and availability."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {websiteMetrics.map((m, i) => (
          <Reveal key={i} delay={i % 5}>
            <a href={m.url} target="_blank" rel="noopener noreferrer">
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass glow-border group relative overflow-hidden rounded-2xl p-5"
              >
                <div className="pointer-events-none absolute -right-6 -top-6 size-20 rounded-full bg-purple/10 blur-2xl transition-opacity group-hover:opacity-100" />

                <div className="mb-1 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted">
                  <Globe className="size-3.5 text-purple-2" />
                  Placement site
                </div>
                <p className="mb-3 truncate text-[11px] text-slate-300">{m.site}</p>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gradient">{m.da}</div>
                    <div className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-muted">
                      DA
                    </div>
                  </div>
                  <div>
                    <div className="bg-gradient-to-r from-blue to-cyan bg-clip-text text-2xl font-bold text-transparent">
                      {m.dr}
                    </div>
                    <div className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-muted">
                      DR
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white sm:text-xl">
                      {m.traffic}
                    </div>
                    <div className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-muted">
                      Traffic
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-1.5 text-xs text-muted">
                  <TrendingUp className="size-3 text-emerald-400" />
                  <BarChart3 className="size-3 text-blue" />
                  High authority
                </div>
              </motion.div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
