"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { partnerships } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/utils";

const grad: Record<string, string> = {
  purple: "bg-gradient-purple",
  blue: "bg-gradient-blue",
  pink: "bg-gradient-pink",
};

export function Partnerships() {
  const row = [...partnerships, ...partnerships];

  return (
    <section className="py-24">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Partnerships"
          title={
            <>
              Trusted platforms &{" "}
              <span className="text-gradient">partnerships</span>
            </>
          }
          subtitle="We work with industry-leading platforms to deliver exceptional results."
        />
      </div>

      <div className="relative mt-14 w-screen -translate-x-1/2 left-1/2 overflow-hidden">
        <div className="flex w-max animate-marquee gap-8 px-6 md:px-10">
          {row.map((p, i) => {
            const card = (
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass glow-border flex h-28 w-48 shrink-0 flex-col items-center justify-center gap-3 rounded-2xl px-4"
              >
                {p.logo ? (
                  <span className="grid h-12 w-28 place-items-center rounded-xl bg-white/95 p-2">
                    <Image
                      src={p.logo}
                      alt={p.name}
                      width={96}
                      height={24}
                      className="h-6 w-auto object-contain"
                    />
                  </span>
                ) : (
                  <span
                    className={cn(
                      "grid size-12 place-items-center rounded-xl text-lg font-bold text-white",
                      grad[p.gradient]
                    )}
                  >
                    {p.abbr ?? p.name.charAt(0)}
                  </span>
                )}
                <span className="text-center text-sm font-semibold text-white">
                  {p.name}
                </span>
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
              <div key={`${p.name}-${i}`}>{card}</div>
            );
          })}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-bg-900 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-bg-900 to-transparent" />
      </div>
    </section>
  );
}
