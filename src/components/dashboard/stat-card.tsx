import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function StatCard({
  label,
  value,
  icon: Icon,
  gradient = "purple",
  hint,
}: {
  label: string;
  value: string | number;
  icon: LucideIcon;
  gradient?: "purple" | "blue" | "pink";
  hint?: string;
}) {
  const grad = {
    purple: "bg-gradient-purple",
    blue: "bg-gradient-blue",
    pink: "bg-gradient-pink",
  }[gradient];

  return (
    <div className="glass glow-border rounded-2xl p-5">
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted">{label}</span>
        <span className={cn("grid size-9 place-items-center rounded-lg text-white", grad)}>
          <Icon className="size-4" />
        </span>
      </div>
      <div className="mt-3 text-3xl font-bold text-white">{value}</div>
      {hint && <p className="mt-1 text-xs text-muted">{hint}</p>}
    </div>
  );
}
