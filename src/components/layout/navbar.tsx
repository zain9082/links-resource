"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { SeoAuditButton } from "@/components/seo-audit/seo-audit-button";
import type { HeaderItem, HeaderMenu } from "../../../content/pages/navigation";

const topLinks = [
  { href: "/seo-packages", label: "Pricing" },
  { href: "/case-studies", label: "Case Studies" },
];

const navLinkClass = "shrink-0 whitespace-nowrap rounded-full px-2.5 py-2 text-xs text-muted transition-colors hover:bg-white/5 hover:text-white xl:px-3.5 xl:text-sm";

function DropdownItem({ item, onClick, featured = false }: { item: HeaderItem; onClick: () => void; featured?: boolean }) {
  return <Link
    href={item.href}
    onClick={onClick}
    className={cn("block rounded-xl border px-3 py-2.5 transition-colors hover:border-purple-2/30 hover:bg-bg-700/90", featured ? "border-purple-2/25 bg-purple/10" : "border-white/10 bg-bg-800/90")}
  >
    <span className="block text-[15px] font-semibold leading-tight text-white">{item.title}</span>
    <span className="mt-0.5 block text-[13px] leading-snug text-muted">{item.description}</span>
  </Link>;
}

function BottomLink({ item, onClick }: { item: HeaderItem; onClick: () => void }) {
  return <Link href={item.href} onClick={onClick} className="inline-flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-0.5 rounded-md text-[13px] leading-snug text-purple-2 hover:text-white">
    <span className="font-semibold">{item.title}</span><span className="text-muted">{item.description}</span>
  </Link>;
}

export function Navbar({ servicesMenu }: { servicesMenu: HeaderMenu[] }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const onOutside = (event: MouseEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setDesktopOpen(null);
    };
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setDesktopOpen(null); setMobileOpen(false); }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("pointerdown", onOutside);
    document.addEventListener("keydown", onEscape);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("pointerdown", onOutside);
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

  return <header ref={headerRef} className="fixed inset-x-0 top-0 z-50 px-3 pt-3">
    <nav className={cn(
      "mx-auto flex h-16 max-w-[min(1440px,calc(100vw-1.5rem))] items-center justify-between gap-2 rounded-2xl px-3 transition-all duration-300 sm:px-5 lg:gap-3",
      scrolled ? "glass-strong glow-shadow" : "glass-strong"
    )}>
      <Link href="/" className="group flex shrink-0 items-center gap-2" onClick={() => { setDesktopOpen(null); setMobileOpen(false); }}>
        <span className="grid size-9 place-items-center rounded-xl bg-gradient-purple glow-shadow">
          <Sparkles className="size-4 text-white" />
        </span>
        <span className="whitespace-nowrap text-sm font-bold tracking-tight text-white xl:text-base">
          Links<span className="text-gradient">Resource</span>
        </span>
      </Link>

      <div className="hidden min-w-0 flex-1 flex-nowrap items-center justify-center gap-0.5 lg:flex xl:gap-1">
        {servicesMenu.map((section) => <div key={section.title}>
          <button
            type="button"
            aria-expanded={desktopOpen === section.title}
            aria-controls={`header-dropdown-${section.title.replace(/\s+/g, "-").toLowerCase()}`}
            onFocus={() => setDesktopOpen(section.title)}
            onClick={() => setDesktopOpen(section.title)}
            className={cn(navLinkClass, "inline-flex items-center gap-1")}
          >
            {section.title}<ChevronDown className={cn("size-3.5 shrink-0 transition-transform xl:size-4", desktopOpen === section.title && "rotate-180")} />
          </button>
          <AnimatePresence>
            {desktopOpen === section.title && <motion.div
              id={`header-dropdown-${section.title.replace(/\s+/g, "-").toLowerCase()}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "fixed inset-x-4 top-20 z-50 mx-auto hidden rounded-2xl border border-white/15 bg-bg-800/95 p-4 shadow-2xl backdrop-blur-xl lg:block",
                section.items.length > 3 ? "w-[min(780px,calc(100vw-2rem))]" : "w-[min(540px,calc(100vw-2rem))]"
              )}
            >
              <DropdownItem item={section.items[0]} featured onClick={() => setDesktopOpen(null)} />
              <div className={cn("mt-3 grid gap-2", section.items.length > 3 ? "grid-cols-3" : "grid-cols-2")}>
                {section.items.slice(1).map((item) => <DropdownItem key={item.href} item={item} onClick={() => setDesktopOpen(null)} />)}
              </div>
              {!!section.bottomLinks?.length && <div className="mt-3 grid grid-cols-2 gap-3 border-t border-white/10 pt-3">
                {section.bottomLinks.map((item) => <BottomLink key={item.href} item={item} onClick={() => setDesktopOpen(null)} />)}
              </div>}
            </motion.div>}
          </AnimatePresence>
        </div>)}
        {topLinks.map((item) => <Link key={item.href} href={item.href} onFocus={() => setDesktopOpen(null)} onClick={() => setDesktopOpen(null)} className={navLinkClass}>{item.label}</Link>)}
      </div>
      <div className="hidden shrink-0 lg:flex">
        <SeoAuditButton size="sm" label="Get Free SEO Audit" className="whitespace-nowrap text-xs xl:text-sm" />
      </div>
      <button
        type="button"
        aria-label="Toggle menu"
        aria-expanded={mobileOpen}
        aria-controls="mobile-site-menu"
        onClick={() => { setMobileOpen(!mobileOpen); setDesktopOpen(null); }}
        className="grid size-10 shrink-0 place-items-center rounded-xl glass text-white lg:hidden"
      >
        {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>
    </nav>

    <AnimatePresence>
      {mobileOpen && <motion.div
        id="mobile-site-menu"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="mx-auto mt-2 max-h-[calc(100vh-6rem)] max-w-[min(1440px,calc(100vw-1.5rem))] overflow-y-auto rounded-2xl border border-white/15 bg-bg-800/95 p-3 shadow-2xl backdrop-blur-xl lg:hidden"
      >
        {servicesMenu.map((section) => <div key={section.title} className="border-b border-white/10">
          <button
            type="button"
            aria-expanded={mobileSection === section.title}
            aria-controls={`mobile-section-${section.title.replace(/\s+/g, "-").toLowerCase()}`}
            onClick={() => setMobileSection(mobileSection === section.title ? null : section.title)}
            className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium text-white"
          >
            {section.title}<ChevronDown className={cn("size-4 text-purple-2 transition-transform", mobileSection === section.title && "rotate-180")} />
          </button>
          {mobileSection === section.title && <div id={`mobile-section-${section.title.replace(/\s+/g, "-").toLowerCase()}`} className="space-y-2 px-2 pb-3">
            <DropdownItem item={section.items[0]} featured onClick={() => setMobileOpen(false)} />
            {section.items.slice(1).map((item) => <DropdownItem key={item.href} item={item} onClick={() => setMobileOpen(false)} />)}
            {!!section.bottomLinks?.length && <div className="grid gap-2 border-t border-white/10 pt-3">
              {section.bottomLinks.map((item) => <BottomLink key={item.href} item={item} onClick={() => setMobileOpen(false)} />)}
            </div>}
          </div>}
        </div>)}
        {topLinks.map((item) => <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="block rounded-xl px-4 py-3 text-sm text-white">{item.label}</Link>)}
        <div className="mt-2 px-2 pb-2">
          <SeoAuditButton size="sm" label="Get Free SEO Audit" className="w-full" onOpen={() => setMobileOpen(false)} />
        </div>
      </motion.div>}
    </AnimatePresence>
  </header>;
}
