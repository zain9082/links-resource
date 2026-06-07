"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type HeroImagePanelProps = {
  src: string;
  alt: string;
  className?: string;
  label?: string;
};

export function HeroImagePanel({
  src,
  alt,
  className,
  label = "Client success stories",
}: HeroImagePanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.15, duration: 0.6 }}
      className={cn("relative", className)}
    >
      <div className="glass-strong glow-border overflow-hidden rounded-3xl p-3">
        <div className="mb-3 flex items-center gap-2 px-1">
          <span className="size-2.5 rounded-full bg-pink" />
          <span className="size-2.5 rounded-full bg-yellow-400" />
          <span className="size-2.5 rounded-full bg-emerald-400" />
          <span className="ml-2 text-xs text-muted">{label}</span>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/5">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain p-2"
            priority
          />
        </div>
      </div>
      <div className="pointer-events-none absolute -right-6 -top-6 size-28 rounded-full bg-purple/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-8 -left-8 size-32 rounded-full bg-blue/20 blur-3xl" />
    </motion.div>
  );
}
