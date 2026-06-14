import type { Metadata } from "next";
import { Plus } from "lucide-react";
import { categories, getResourcesByCategory } from "@/lib/data";
import { Icon } from "@/components/shared/icon";
import { Button } from "@/components/ui/button";
import { buildAdminMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildAdminMetadata("Admin · Categories", "/admin/categories");

const grad: Record<string, string> = {
  purple: "bg-gradient-purple",
  blue: "bg-gradient-blue",
  pink: "bg-gradient-pink",
};

export default function AdminCategories() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Categories</h1>
          <p className="mt-1 text-muted">{categories.length} categories</p>
        </div>
        <Button>
          <Plus className="size-4" /> Add Category
        </Button>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {categories.map((c) => (
          <div
            key={c.slug}
            className="flex items-center gap-4 rounded-2xl glass glow-border p-5"
          >
            <span
              className={cn(
                "grid size-12 shrink-0 place-items-center rounded-xl text-white",
                grad[c.gradient]
              )}
            >
              <Icon name={c.icon} className="size-6" />
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-white">{c.name}</h3>
              <p className="truncate text-xs text-muted">{c.description}</p>
            </div>
            <span className="shrink-0 text-sm font-medium text-purple-2">
              {getResourcesByCategory(c.slug).length}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
