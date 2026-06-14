import type { Metadata } from "next";
import Link from "next/link";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { resources, getCategoryBySlug } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatNumber } from "@/lib/utils";
import { buildAdminMetadata } from "@/lib/seo";

export const metadata: Metadata = buildAdminMetadata("Admin · Resources", "/admin/resources");

export default function AdminResources() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Resources</h1>
          <p className="mt-1 text-muted">{resources.length} total resources</p>
        </div>
        <Button>
          <Plus className="size-4" /> Add Resource
        </Button>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl glass glow-border">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-white/10 text-xs uppercase tracking-wider text-muted">
              <tr>
                <th className="p-4">Resource</th>
                <th className="p-4">Category</th>
                <th className="p-4">Pricing</th>
                <th className="p-4">Views</th>
                <th className="p-4">Rating</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {resources.map((r) => (
                <tr
                  key={r.slug}
                  className="border-b border-white/5 transition-colors hover:bg-white/[0.03]"
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <span className="grid size-8 place-items-center rounded-lg bg-gradient-purple text-xs font-bold text-white">
                        {r.title.charAt(0)}
                      </span>
                      <Link
                        href={`/resources/${r.slug}`}
                        className="font-medium text-white hover:text-purple-2"
                      >
                        {r.title}
                      </Link>
                    </div>
                  </td>
                  <td className="p-4 text-muted">
                    {getCategoryBySlug(r.category)?.name}
                  </td>
                  <td className="p-4">
                    <Badge variant="blue">{r.pricing}</Badge>
                  </td>
                  <td className="p-4 text-muted">{formatNumber(r.views)}</td>
                  <td className="p-4 text-muted">{r.rating.toFixed(1)}</td>
                  <td className="p-4">
                    {r.featured ? (
                      <Badge variant="purple">Featured</Badge>
                    ) : (
                      <Badge>Live</Badge>
                    )}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="grid size-8 place-items-center rounded-lg text-muted hover:bg-white/10 hover:text-white">
                        <Pencil className="size-4" />
                      </button>
                      <button className="grid size-8 place-items-center rounded-lg text-muted hover:bg-pink/20 hover:text-pink">
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
