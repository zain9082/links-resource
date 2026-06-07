"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import type { Category, Resource } from "@/lib/types";
import { ResourceCard } from "./resource-card";
import { cn } from "@/lib/utils";

const PRICING = ["All", "Free", "Freemium", "Paid"] as const;
const SORTS = [
  { key: "popular", label: "Popular" },
  { key: "recent", label: "Recent" },
  { key: "rating", label: "Top rated" },
] as const;

export function ResourceExplorer({
  resources,
  categories,
  initialQuery = "",
  initialCategory = "all",
}: {
  resources: Resource[];
  categories: Category[];
  initialQuery?: string;
  initialCategory?: string;
}) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);
  const [pricing, setPricing] = useState<(typeof PRICING)[number]>("All");
  const [sort, setSort] = useState<(typeof SORTS)[number]["key"]>("popular");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    let list = resources.filter((r) => {
      const matchesQ =
        !q ||
        r.title.toLowerCase().includes(q) ||
        r.tagline.toLowerCase().includes(q) ||
        r.tags.some((t) => t.includes(q));
      const matchesCat = category === "all" || r.category === category;
      const matchesPrice = pricing === "All" || r.pricing === pricing;
      return matchesQ && matchesCat && matchesPrice;
    });

    list = [...list].sort((a, b) => {
      if (sort === "recent")
        return +new Date(b.createdAt) - +new Date(a.createdAt);
      if (sort === "rating") return b.rating - a.rating;
      return b.views - a.views;
    });
    return list;
  }, [resources, query, category, pricing, sort]);

  return (
    <div>
      <div className="glass-strong sticky top-20 z-30 rounded-2xl p-4">
        <div className="flex items-center gap-3 rounded-xl bg-white/5 px-4">
          <Search className="size-5 shrink-0 text-muted" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search resources, tools, services…"
            className="h-12 w-full bg-transparent text-sm text-white placeholder:text-muted/70 outline-none"
          />
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <button
            onClick={() => setCategory("all")}
            className={cn(
              "rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors",
              category === "all"
                ? "bg-gradient-purple text-white"
                : "glass text-muted hover:text-white"
            )}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c.slug}
              onClick={() => setCategory(c.slug)}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors",
                category === c.slug
                  ? "bg-gradient-purple text-white"
                  : "glass text-muted hover:text-white"
              )}
            >
              {c.name}
            </button>
          ))}
          <div className="ml-auto flex items-center gap-2">
            <span className="hidden items-center gap-1.5 text-xs text-muted sm:flex">
              <SlidersHorizontal className="size-3.5" />
            </span>
            {PRICING.map((p) => (
              <button
                key={p}
                onClick={() => setPricing(p)}
                className={cn(
                  "rounded-full px-3 py-1.5 text-xs transition-colors",
                  pricing === p
                    ? "bg-white/15 text-white"
                    : "text-muted hover:text-white"
                )}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-muted">
          {filtered.length} resource{filtered.length !== 1 && "s"}
        </p>
        <div className="flex items-center gap-1">
          {SORTS.map((s) => (
            <button
              key={s.key}
              onClick={() => setSort(s.key)}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs transition-colors",
                sort === s.key
                  ? "glass text-white"
                  : "text-muted hover:text-white"
              )}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r, i) => (
            <ResourceCard key={r.slug} resource={r} index={i} />
          ))}
        </div>
      ) : (
        <div className="mt-16 text-center">
          <p className="text-lg font-semibold text-white">No resources found</p>
          <p className="mt-1 text-sm text-muted">
            Try a different search or filter combination.
          </p>
        </div>
      )}
    </div>
  );
}
