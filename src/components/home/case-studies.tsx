"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { caseStudies, caseStudyTabs } from "@/lib/data";
import { CaseStudyCard } from "@/components/case-studies/case-study-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CaseStudies() {
  const [active, setActive] = useState<string>(caseStudyTabs[0]);

  const filtered = caseStudies.filter((cs) => cs.category === active);
  const current = filtered[0] ?? caseStudies[0];

  return (
    <section id="case-studies" className="container-wide scroll-mt-24 py-24">
      <SectionHeading
        eyebrow="Case studies"
        title={
          <>
            Real SEO growth & <span className="text-gradient">traffic results</span>
          </>
        }
        subtitle="Explore how our SEO and link-building campaigns improved rankings, traffic, and visibility for growing businesses."
      />

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {caseStudyTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={cn(
              "whitespace-nowrap rounded-full px-4 py-2 text-xs font-medium transition-all sm:text-sm",
              active === tab
                ? "bg-gradient-purple text-white glow-shadow"
                : "glass text-muted hover:text-white"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.slug}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35 }}
          className="mt-10"
        >
          <CaseStudyCard study={current} />
        </motion.div>
      </AnimatePresence>

      <p className="mt-6 flex items-start justify-center gap-2 text-center text-xs text-muted">
        <span className="mt-0.5 size-1 shrink-0 rounded-full bg-pink" />
        Results may vary. Performance depends on competition, niche, and your
        website&apos;s current condition.
      </p>

      <div className="mt-8 text-center">
        <Button asChild variant="gradientBlue" size="lg">
          <Link href="/case-studies">View All Case Studies</Link>
        </Button>
      </div>
    </section>
  );
}
