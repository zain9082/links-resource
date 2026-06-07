import Link from "next/link";
import {
  LayoutDashboard,
  Boxes,
  FolderTree,
  Tags,
  Users,
  Search,
} from "lucide-react";

const nav = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard },
  { href: "/admin/resources", label: "Resources", icon: Boxes },
  { href: "/admin/categories", label: "Categories", icon: FolderTree },
  { href: "/admin/tags", label: "Tags", icon: Tags },
  { href: "/admin/users", label: "Users", icon: Users },
  { href: "/admin/seo", label: "SEO", icon: Search },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container-wide flex gap-6 pt-28">
      <aside className="sticky top-24 hidden h-fit w-56 shrink-0 lg:block">
        <div className="glass glow-border rounded-2xl p-3">
          <p className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-muted">
            Admin
          </p>
          <nav className="space-y-1">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted transition-colors hover:bg-white/5 hover:text-white"
              >
                <n.icon className="size-4" />
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
      <div className="min-w-0 flex-1 pb-16">{children}</div>
    </div>
  );
}
