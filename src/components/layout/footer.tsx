import Link from "next/link";
import { Sparkles, Mail, Phone, MapPin } from "lucide-react";
import { site } from "@/lib/data";
import { getPageConfig, visiblePageConfigs } from "../../../content/pages";

type FooterLink = { href: string; label: string };

const columns: { title: string; links: FooterLink[] }[] = [
  { title: "Services", links: [
    { href: "/seo-services", label: "SEO Services" },
    { href: "/link-building-services", label: "Link Building" },
    { href: "/ppc-management", label: "PPC Management" },
    { href: "/web-development", label: "Web Development" },
    { href: "/content-writing-services", label: "Content Writing" },
  ] },
  { title: "For Agencies", links: [
    { href: "/white-label", label: "White Label Services" },
    { href: "/white-label/seo", label: "White Label SEO" },
    { href: "/white-label/seo/reseller", label: "SEO Reseller" },
    { href: "/white-label/link-building", label: "White Label Link Building" },
    { href: "/white-label/ppc", label: "White Label PPC" },
    { href: "/white-label/web-development", label: "White Label Web Development" },
  ] },
  { title: "Industries", links: [
    { href: "/industries", label: "All Industries" },
    { href: "/industries/seo-for-law-firms", label: "Law Firms" },
    { href: "/industries/dental-seo", label: "Dental" },
    { href: "/industries/saas-seo", label: "SaaS" },
    { href: "/industries/seo-for-tradesmen", label: "Tradesmen" },
    { href: "/industries/estate-agent-seo", label: "Estate Agents" },
  ] },
  { title: "Locations", links: [
    { href: "/locations", label: "All Locations" },
    { href: "/locations/london", label: "London" },
    { href: "/locations/nottingham", label: "Nottingham" },
    { href: "/locations/york", label: "York" },
    { href: "/locations/bristol", label: "Bristol" },
    { href: "/locations/leicester", label: "Leicester" },
    { href: "/locations/manchester", label: "Manchester" },
  ] },
  { title: "Company", links: [
    { href: "/about", label: "About" },
    { href: "/team", label: "Team" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/blog", label: "Blog" },
    { href: "/link-building-services/publications", label: "Publications" },
    { href: "/contact", label: "Contact" },
  ] },
];

const legalLinks: FooterLink[] = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/refund-policy", label: "Refund Policy" },
  { href: "/service-policy", label: "Service Policy" },
];

export function Footer() {
  const visible = new Set(visiblePageConfigs().map((page) => page.slug));
  const filtered = columns.map((column) => ({
    ...column,
    links: column.links.filter((link) => !getPageConfig(link.href) || visible.has(link.href)),
  }));

  return <footer className="relative mt-24 border-t border-white/5">
    <div className="container-wide py-16">
      <div className="mb-12 grid gap-8 lg:grid-cols-2">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-xl bg-gradient-purple glow-shadow">
              <Sparkles className="size-4 text-white" />
            </span>
            <span className="text-base font-bold text-white">
              Links<span className="text-gradient">Resource</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm text-muted">
            A results-driven agency and curated resource directory helping businesses grow through high-quality backlinks, content, and scalable digital strategies.
          </p>
        </div>
        <ul className="space-y-2 text-sm text-muted lg:justify-self-end">
          <li className="flex items-center gap-2"><MapPin className="size-4 text-purple-2" />{site.address}</li>
          <li className="flex items-center gap-2"><Phone className="size-4 text-purple-2" /><a href={"tel:" + site.phone.replace(/\s/g, "")}>{site.phone}</a></li>
          <li className="flex items-center gap-2"><Mail className="size-4 text-purple-2" /><a href={"mailto:" + site.email}>{site.email}</a></li>
        </ul>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
        {filtered.map((column) => <div key={column.title}>
          <h2 className="mb-4 text-sm font-semibold text-white">{column.title}</h2>
          <ul className="space-y-2.5">
            {column.links.map((link) => <li key={link.href}>
              <Link href={link.href} className="text-sm text-muted transition-colors hover:text-white">{link.label}</Link>
            </li>)}
          </ul>
        </div>)}
      </div>

      <div className="mt-12 border-t border-white/5 pt-6">
        <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2">
          {legalLinks.map((link) => <Link key={link.href} href={link.href} className="text-sm text-muted transition-colors hover:text-white">{link.label}</Link>)}
        </nav>
        <p className="mt-5 text-sm text-muted">© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
      </div>
    </div>
  </footer>;
}
