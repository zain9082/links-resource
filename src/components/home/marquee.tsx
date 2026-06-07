const items = [
  "500+ Projects Delivered",
  "50+ Clients Worldwide",
  "UK-Based Agency",
  "Real Websites & Manual Outreach",
  "DR 50–90 Backlinks",
  "Transparent Reporting",
  "Google Partner",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-white/5 py-5">
      <div className="flex w-max animate-marquee gap-10">
        {row.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-3 whitespace-nowrap text-sm font-medium text-muted"
          >
            <span className="size-1.5 rounded-full bg-gradient-purple" />
            {t}
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg-900 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg-900 to-transparent" />
    </div>
  );
}
