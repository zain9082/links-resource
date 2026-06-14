import Link from "next/link";
import { Sparkles, Mail, Phone, MapPin } from "lucide-react";
import { site, categories } from "@/lib/data";

const cols = [
  {
    title: "Directory",
    links: [
      { href: "/resources", label: "All Resources" },
      { href: "/categories", label: "Categories" },
      { href: "/search", label: "Search" },
      { href: "/submit", label: "Submit Resource" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/team", label: "Team" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/#faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/terms-of-service", label: "Terms of Service" },
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/refund-policy", label: "Refund Policy" },
      { href: "/service-policy", label: "Service Policy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/5">
      <div className="container-wide py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="grid size-9 place-items-center rounded-xl bg-gradient-purple glow-shadow">
                <Sparkles className="size-4 text-white" />
              </span>
              <span className="text-base font-bold text-white">
                Links<span className="text-gradient">Resource</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted">
              A results-driven agency and curated resource directory helping
              businesses grow through high-quality backlinks, content, and
              scalable digital strategies.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted">
              <li className="flex items-center gap-2">
                <MapPin className="size-4 text-purple-2" /> {site.address}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-purple-2" />
                <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-purple-2" />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            </ul>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-sm font-semibold text-white">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-muted transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-2 border-t border-white/5 pt-6">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/categories/${c.slug}`}
              className="rounded-full glass px-3 py-1 text-xs text-muted hover:text-white"
            >
              {c.name}
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-sm text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p>Built with Next.js, Tailwind & Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
