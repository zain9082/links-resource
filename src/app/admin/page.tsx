import type { Metadata } from "next";
import { Boxes, FolderTree, Tags, Eye, Star, TrendingUp } from "lucide-react";
import { resources, categories, tags } from "@/lib/data";
import { StatCard } from "@/components/dashboard/stat-card";
import { Badge } from "@/components/ui/badge";
import { formatNumber } from "@/lib/utils";
import { buildAdminMetadata } from "@/lib/seo";

export const metadata: Metadata = buildAdminMetadata("Admin · Overview", "/admin");

export default function AdminOverview() {
  const totalViews = resources.reduce((s, r) => s + r.views, 0);
  const avgRating = (
    resources.reduce((s, r) => s + r.rating, 0) / resources.length
  ).toFixed(2);

  const byCategory = categories
    .map((c) => ({
      name: c.name,
      count: resources.filter((r) => r.category === c.slug).length,
    }))
    .sort((a, b) => b.count - a.count);
  const max = Math.max(...byCategory.map((c) => c.count), 1);

  const top = [...resources].sort((a, b) => b.views - a.views).slice(0, 5);

  return (
    <div>
      <h1 className="text-3xl font-bold text-white">Dashboard</h1>
      <p className="mt-1 text-muted">
        Analytics overview of your resource directory.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Resources" value={resources.length} icon={Boxes} gradient="purple" hint="+3 this month" />
        <StatCard label="Categories" value={categories.length} icon={FolderTree} gradient="blue" />
        <StatCard label="Tags" value={tags.length} icon={Tags} gradient="pink" />
        <StatCard label="Total Views" value={formatNumber(totalViews)} icon={Eye} gradient="purple" />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="glass glow-border rounded-2xl p-6">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-white">
            <TrendingUp className="size-5 text-purple-2" /> Resources by category
          </h2>
          <div className="mt-5 space-y-4">
            {byCategory.map((c) => (
              <div key={c.name}>
                <div className="mb-1.5 flex justify-between text-sm">
                  <span className="text-slate-200">{c.name}</span>
                  <span className="text-muted">{c.count}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full bg-gradient-purple"
                    style={{ width: `${(c.count / max) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass glow-border rounded-2xl p-6">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-white">
            <Star className="size-5 text-purple-2" /> Top performing
          </h2>
          <div className="mt-5 space-y-3">
            {top.map((r, i) => (
              <div
                key={r.slug}
                className="flex items-center gap-3 rounded-xl bg-white/5 p-3"
              >
                <span className="text-sm font-bold text-muted">#{i + 1}</span>
                <span className="grid size-9 place-items-center rounded-lg bg-gradient-purple text-sm font-bold text-white">
                  {r.title.charAt(0)}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-medium text-white">
                    {r.title}
                  </span>
                  <span className="text-xs text-muted">
                    {formatNumber(r.views)} views · {r.rating.toFixed(1)}★
                  </span>
                </span>
                <Badge variant="purple">{avgRating}avg</Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
