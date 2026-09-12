"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Eye, Star } from "lucide-react";
import type { Resource } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { formatNumber, cn } from "@/lib/utils";

const gradientMap: Record<string, string> = {
  purple: "bg-gradient-purple",
  blue: "bg-gradient-blue",
  pink: "bg-gradient-pink",
};

export function ResourceCard({
  resource,
  index = 0,
}: {
  resource: Resource;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
      whileHover={{ y: -6 }}
      className="group glass glow-border relative flex h-full flex-col rounded-2xl p-5"
    >
      <div className="flex items-start justify-between">
        <div
          className={cn(
            "grid size-12 place-items-center rounded-xl text-lg font-bold text-white glow-shadow",
            gradientMap[resource.logoColor] ?? "bg-gradient-purple"
          )}
        >
          {resource.title.charAt(0)}
        </div>
        <div className="flex items-center gap-2">
          {resource.featured && <Badge variant="purple">Featured</Badge>}
          <Badge
            variant={
              resource.pricing === "Free"
                ? "blue"
                : resource.pricing === "Paid"
                  ? "pink"
                  : "default"
            }
          >
            {resource.pricing}
          </Badge>
        </div>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-white">
        <Link href={`/resources/${resource.slug}`} className="after:absolute after:inset-0">
          {resource.title}
        </Link>
      </h3>
      <p className="mt-1 text-sm text-muted">{resource.tagline}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {resource.tags.slice(0, 3).map((t) => (
          <Link
            key={t}
            href={`/tags/${t}`}
            className="relative z-10 rounded-full bg-white/5 px-2.5 py-0.5 text-[11px] text-muted transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-2"
          >
            #{t}
          </Link>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4 text-xs text-muted">
        <span className="flex items-center gap-1.5">
          <Star className="size-3.5 fill-purple-2 text-purple-2" />
          {resource.rating.toFixed(1)}
        </span>
        <span className="flex items-center gap-1.5">
          <Eye className="size-3.5" />
          {formatNumber(resource.views)}
        </span>
        <span className="flex items-center gap-1 text-purple-2 transition-transform group-hover:translate-x-0.5">
          View <ArrowUpRight className="size-3.5" />
        </span>
      </div>
    </motion.div>
  );
}
