"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { caseStudies, caseStudyTabs } from "@/lib/data";
import { CaseStudyCard } from "@/components/case-studies/case-study-card";
import { cn } from "@/lib/utils";

export function CaseStudiesContent() {
  const [active, setActive] = useState<string>(caseStudyTabs[0]);
  const filtered = caseStudies.filter((cs) => cs.category === active);

  return (
    <div className="container-wide pb-24">
      <div className="flex flex-wrap justify-center gap-2">
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

      <div className="mt-10 space-y-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="space-y-8"
          >
            {filtered.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <p className="mt-8 flex items-start justify-center gap-2 text-center text-xs text-muted">
        <span className="mt-0.5 size-1 shrink-0 rounded-full bg-pink" />
        Results may vary. Performance depends on competition, niche, and your
        website&apos;s current condition.
      </p>
    </div>
  );
}
