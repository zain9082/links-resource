"use client";

import { useState } from "react";
import { Bookmark, Heart, History as HistoryIcon, User } from "lucide-react";
import type { Resource } from "@/lib/types";
import { ResourceCard } from "@/components/resources/resource-card";
import { cn } from "@/lib/utils";

const tabs = [
  { key: "saved", label: "Saved", icon: Bookmark },
  { key: "favorites", label: "Favorites", icon: Heart },
  { key: "history", label: "History", icon: HistoryIcon },
  { key: "profile", label: "Profile", icon: User },
] as const;

export function DashboardTabs({
  recommended,
  user,
}: {
  recommended: Resource[];
  user: { name?: string | null; email?: string | null };
}) {
  const [active, setActive] = useState<(typeof tabs)[number]["key"]>("saved");

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={cn(
              "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors",
              active === t.key
                ? "bg-gradient-purple text-white"
                : "glass text-muted hover:text-white"
            )}
          >
            <t.icon className="size-4" />
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-8">
        {active === "profile" ? (
          <div className="glass glow-border max-w-md rounded-2xl p-7">
            <div className="flex items-center gap-4">
              <span className="grid size-16 place-items-center rounded-2xl bg-gradient-purple text-2xl font-bold text-white">
                {(user.name ?? user.email ?? "U").charAt(0).toUpperCase()}
              </span>
              <div>
                <p className="text-lg font-semibold text-white">
                  {user.name ?? "Your account"}
                </p>
                <p className="text-sm text-muted">{user.email}</p>
              </div>
            </div>
          </div>
        ) : (
          <>
            <p className="mb-5 text-sm text-muted">
              {active === "history"
                ? "Recently viewed resources will appear here."
                : "Your collection is empty — here are some recommendations to get started."}
            </p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {recommended.map((r, i) => (
                <ResourceCard key={r.slug} resource={r} index={i} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
