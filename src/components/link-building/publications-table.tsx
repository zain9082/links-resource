import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatYesNo, type PublicationSite } from "@/lib/publications";

const columns = [
  "Publication",
  "Website",
  "DA",
  "Niche Accepted",
  "TAT",
  "Type",
  "Price",
  "Do Follow",
  "Sponsored",
  "Traffic",
] as const;

function YesNoBadge({ value }: { value: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex min-w-[2rem] justify-center rounded-full px-2 py-0.5 text-[11px] font-semibold",
        value
          ? "bg-emerald-500/15 text-emerald-300"
          : "bg-white/8 text-muted"
      )}
    >
      {formatYesNo(value)}
    </span>
  );
}

type PublicationsTableProps = {
  sites: PublicationSite[];
  compact?: boolean;
};

export function PublicationsTable({ sites, compact = false }: PublicationsTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
      <div className="overflow-x-auto scrollbar-none">
        <table className="min-w-[1100px] w-full text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.04]">
              {columns.map((col) => (
                <th
                  key={col}
                  className="whitespace-nowrap px-4 py-3.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-purple-2"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sites.map((site) => (
              <tr
                key={site.id}
                className="border-b border-white/5 transition-colors hover:bg-white/[0.03]"
              >
                <td className="px-4 py-3.5 font-semibold text-white">{site.publication}</td>
                <td className="px-4 py-3.5">
                  <a
                    href={`https://${site.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-purple-2 hover:underline"
                  >
                    {site.website}
                    <ExternalLink className="size-3 shrink-0 opacity-70" />
                  </a>
                </td>
                <td className="px-4 py-3.5">
                  <span className="rounded-full bg-gradient-purple/20 px-2.5 py-1 text-xs font-bold text-purple-2">
                    {site.da}
                  </span>
                </td>
                <td
                  className={cn(
                    "max-w-[220px] px-4 py-3.5 text-muted",
                    compact && "line-clamp-2"
                  )}
                >
                  {site.nicheAccepted}
                </td>
                <td className="whitespace-nowrap px-4 py-3.5 text-slate-200">{site.tat}</td>
                <td className="max-w-[180px] px-4 py-3.5 text-slate-200">{site.type}</td>
                <td className="whitespace-nowrap px-4 py-3.5 font-semibold text-white">
                  {site.priceLabel}
                </td>
                <td className="px-4 py-3.5">
                  <YesNoBadge value={site.doFollow} />
                </td>
                <td className="px-4 py-3.5">
                  <YesNoBadge value={site.sponsored} />
                </td>
                <td className="whitespace-nowrap px-4 py-3.5 font-medium text-cyan-300">
                  {site.traffic}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
