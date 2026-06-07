"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { reviews } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/utils";

export function Reviews() {
  const [index, setIndex] = useState(0);

  function prev() {
    setIndex((i) => (i - 1 + reviews.length) % reviews.length);
  }
  function next() {
    setIndex((i) => (i + 1) % reviews.length);
  }

  const shown = [
    reviews[index % reviews.length],
    reviews[(index + 1) % reviews.length],
  ];

  return (
    <section id="reviews" className="container-wide scroll-mt-24 py-24">
      <SectionHeading
        eyebrow="Client reviews"
        title={
          <>
            Client <span className="text-gradient">Reviews</span>
          </>
        }
        subtitle="Don't just take our word for it. Here's what our clients say about working with us."
      />

      <div className="relative mt-14">
        <button
          onClick={prev}
          aria-label="Previous review"
          className="absolute -left-2 top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full glass text-white hover:bg-white/10 sm:-left-5"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          onClick={next}
          aria-label="Next review"
          className="absolute -right-2 top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full glass text-white hover:bg-white/10 sm:-right-5"
        >
          <ChevronRight className="size-5" />
        </button>

        <div className="grid items-stretch gap-5 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {shown.map((r, i) => (
              <motion.figure
                key={`${r.name}-${index}-${i}`}
                initial={{ opacity: 0, rotateY: i === 0 ? -8 : 8, x: i === 0 ? -20 : 20 }}
                animate={{ opacity: 1, rotateY: 0, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className={cn("glass glow-border flex h-full flex-col rounded-2xl p-7 sm:p-8")}
                style={{ perspective: "1000px" }}
              >
                <Quote className="size-8 text-purple/40" />
                <div className="mt-3 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star
                      key={k}
                      className="size-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-200 sm:text-base">
                  {r.body}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
                  <span className="grid size-11 place-items-center rounded-full bg-gradient-purple text-sm font-bold text-white">
                    {r.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-white">
                      {r.name}
                    </span>
                    <span className="block text-xs text-muted">{r.role}</span>
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to review ${i + 1}`}
              className={cn(
                "h-2 rounded-full transition-all",
                index % reviews.length === i
                  ? "w-6 bg-gradient-purple"
                  : "w-2 bg-white/20"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
