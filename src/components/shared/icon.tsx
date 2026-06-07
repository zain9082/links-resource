import {
  Link2,
  Search,
  PenLine,
  Code2,
  Palette,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Link2,
  Search,
  PenLine,
  Code2,
  Palette,
  Sparkles,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = map[name] ?? Sparkles;
  return <Cmp className={className} />;
}
