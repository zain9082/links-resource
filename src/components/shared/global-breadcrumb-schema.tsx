"use client";

import { usePathname } from "next/navigation";
import { breadcrumbJsonLd } from "@/lib/seo";

export function GlobalBreadcrumbSchema() {
  const pathname = usePathname();
  if (!pathname || pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);
  const items = [{ name: "Home", href: "/" }, ...segments.map((segment, index) => ({
    name: decodeURIComponent(segment).replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase()),
    href: `/${segments.slice(0, index + 1).join("/")}`,
  }))];

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(items)) }} />;
}
