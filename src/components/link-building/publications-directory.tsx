"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Search, SlidersHorizontal } from "lucide-react";
import { PublicationsTable } from "@/components/link-building/publications-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  publicationSites,
  publicationTypes,
  type PublicationSite,
} from "@/lib/publications";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 10;

type FilterState = {
  query: string;
  minDa: string;
  type: string;
  doFollow: string;
  sponsored: string;
};

const defaultFilters: FilterState = {
  query: "",
  minDa: "",
  type: "",
  doFollow: "",
  sponsored: "",
};

function filterSites(sites: PublicationSite[], filters: FilterState) {
  return sites.filter((site) => {
    if (filters.query.trim()) {
      const q = filters.query.toLowerCase();
      const haystack = `${site.publication} ${site.website} ${site.nicheAccepted} ${site.type}`.toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    if (filters.minDa && site.da < Number(filters.minDa)) return false;
    if (filters.type && site.type !== filters.type) return false;
    if (filters.doFollow === "Y" && !site.doFollow) return false;
    if (filters.doFollow === "N" && site.doFollow) return false;
    if (filters.sponsored === "Y" && !site.sponsored) return false;
    if (filters.sponsored === "N" && site.sponsored) return false;
    return true;
  });
}

export function PublicationsDirectory() {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => filterSites(publicationSites, filters), [filters]);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageItems = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  function updateFilter<K extends keyof FilterState>(key: K, value: FilterState[K]) {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setPage(1);
  }

  function resetFilters() {
    setFilters(defaultFilters);
    setPage(1);
  }

  return (
    <div className="space-y-6">
      <div className="glass-strong glow-border rounded-2xl p-5 sm:p-6">
        <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-white">
          <SlidersHorizontal className="size-4 text-purple-2" />
          Filter publications
        </div>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-6">
          <div className="relative xl:col-span-2">
            <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted" />
            <Input
              value={filters.query}
              onChange={(e) => updateFilter("query", e.target.value)}
              placeholder="Search publication, site, niche…"
              className="pl-11"
            />
          </div>
          <select
            value={filters.minDa}
            onChange={(e) => updateFilter("minDa", e.target.value)}
            className="h-11 rounded-xl glass px-4 text-sm text-white outline-none focus:ring-2 focus:ring-purple/30"
          >
            <option value="" className="bg-bg-800">Min DA</option>
            <option value="92" className="bg-bg-800">92+</option>
            <option value="93" className="bg-bg-800">93+</option>
            <option value="94" className="bg-bg-800">94+</option>
            <option value="95" className="bg-bg-800">95+</option>
          </select>
          <select
            value={filters.type}
            onChange={(e) => updateFilter("type", e.target.value)}
            className="h-11 rounded-xl glass px-4 text-sm text-white outline-none focus:ring-2 focus:ring-purple/30"
          >
            <option value="" className="bg-bg-800">All types</option>
            {publicationTypes.map((type) => (
              <option key={type} value={type} className="bg-bg-800">
                {type}
              </option>
            ))}
          </select>
          <select
            value={filters.doFollow}
            onChange={(e) => updateFilter("doFollow", e.target.value)}
            className="h-11 rounded-xl glass px-4 text-sm text-white outline-none focus:ring-2 focus:ring-purple/30"
          >
            <option value="" className="bg-bg-800">Do Follow</option>
            <option value="Y" className="bg-bg-800">Yes</option>
            <option value="N" className="bg-bg-800">No</option>
          </select>
          <select
            value={filters.sponsored}
            onChange={(e) => updateFilter("sponsored", e.target.value)}
            className="h-11 rounded-xl glass px-4 text-sm text-white outline-none focus:ring-2 focus:ring-purple/30"
          >
            <option value="" className="bg-bg-800">Sponsored</option>
            <option value="Y" className="bg-bg-800">Yes</option>
            <option value="N" className="bg-bg-800">No</option>
          </select>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-muted">
            Showing{" "}
            <span className="font-semibold text-white">{filtered.length}</span> of{" "}
            {publicationSites.length} publications
          </p>
          <Button type="button" variant="ghost" size="sm" onClick={resetFilters}>
            Reset filters
          </Button>
        </div>
      </div>

      {pageItems.length > 0 ? (
        <PublicationsTable sites={pageItems} />
      ) : (
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-16 text-center">
          <p className="text-lg font-semibold text-white">No publications match your filters</p>
          <p className="mt-2 text-sm text-muted">Try adjusting search or filter options.</p>
        </div>
      )}

      {filtered.length > PAGE_SIZE && (
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted">
            Page {currentPage} of {totalPages}
          </p>
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="glass"
              size="sm"
              disabled={currentPage <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
            >
              <ChevronLeft className="size-4" />
              Previous
            </Button>
            <div className="flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setPage(n)}
                  className={cn(
                    "grid size-9 place-items-center rounded-full text-xs font-semibold transition-colors",
                    n === currentPage
                      ? "bg-gradient-purple text-white"
                      : "border border-white/10 text-muted hover:text-white"
                  )}
                >
                  {n}
                </button>
              ))}
            </div>
            <Button
              type="button"
              variant="glass"
              size="sm"
              disabled={currentPage >= totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            >
              Next
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
