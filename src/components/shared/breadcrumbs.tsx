import Link from "next/link";
import { cn } from "@/lib/utils";

export type BreadcrumbItem = {
  name: string;
  href: string;
};

export function Breadcrumbs({
  items,
  className,
}: {
  items: BreadcrumbItem[];
  className?: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className={cn("text-sm", className)}>
      <ol className="flex flex-wrap items-center gap-2 text-muted">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.href}-${item.name}`} className="flex items-center gap-2">
              {index > 0 && (
                <span aria-hidden="true" className="text-muted/50">
                  /
                </span>
              )}
              {isLast ? (
                <span aria-current="page" className="font-medium text-slate-200">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="rounded-sm transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-2"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
