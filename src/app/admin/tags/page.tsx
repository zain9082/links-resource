import type { Metadata } from "next";
import { Plus } from "lucide-react";
import { tags, getResourcesByTag } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { buildAdminMetadata } from "@/lib/seo";

export const metadata: Metadata = buildAdminMetadata("Admin · Tags", "/admin/tags");

export default function AdminTags() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Tags</h1>
          <p className="mt-1 text-muted">{tags.length} tags</p>
        </div>
        <Button>
          <Plus className="size-4" /> Add Tag
        </Button>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {tags.map((t) => (
          <div
            key={t.slug}
            className="flex items-center gap-2 rounded-full glass glow-border px-4 py-2"
          >
            <span className="text-sm text-white">#{t.name}</span>
            <span className="rounded-full bg-purple/20 px-2 py-0.5 text-xs text-purple-2">
              {getResourcesByTag(t.slug).length}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
