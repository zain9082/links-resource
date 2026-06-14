"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { navigateToHash } from "@/components/layout/hash-scroll";
import { navbarLinkBuildingMenu, navbarMoreServicesMenu } from "@/lib/data";

const links = [
  { href: "/", label: "Home" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/about", label: "About" },
];

const mobileLinks = [
  { href: "/", label: "Home" },
  { href: "/resources?category=link-building", label: "Link Building Services" },
  { href: "/resources?category=seo-tools", label: "More Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
];

const contactMenu = [
  {
    title: "Contact Us",
    description: "Talk with our team about your SEO and growth goals.",
    href: "/contact",
  },
  {
    title: "Book Free Consultation",
    description: "Request a strategy call and get a growth action plan.",
    href: "/contact",
  },
  {
    title: "Email Support",
    description: "Reach us directly: support@linksresource.com",
    href: "mailto:support@linksresource.com",
  },
  {
    title: "Meet Our Team",
    description: "See the specialists behind your campaigns.",
    href: "/team",
  },
];

const navLinkClass =
  "shrink-0 whitespace-nowrap rounded-full px-2.5 py-2 text-xs text-muted transition-colors hover:bg-white/5 hover:text-white xl:px-3.5 xl:text-sm";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<"link-building" | "more-services" | "contact" | null>(
    null
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3">
      <nav
        className={cn(
          "mx-auto flex h-16 max-w-[min(1440px,calc(100vw-1.5rem))] items-center justify-between gap-2 rounded-2xl px-3 transition-all duration-300 sm:px-5 lg:gap-3",
          scrolled ? "glass-strong glow-shadow" : "glass-strong"
        )}
      >
        <Link href="/" className="group flex shrink-0 items-center gap-2">
          <span className="grid size-9 place-items-center rounded-xl bg-gradient-purple glow-shadow">
            <Sparkles className="size-4 text-white" />
          </span>
          <span className="whitespace-nowrap text-sm font-bold tracking-tight text-white xl:text-base">
            Links<span className="text-gradient">Resource</span>
          </span>
        </Link>

        <div className="hidden min-w-0 flex-1 flex-nowrap items-center justify-center gap-0.5 lg:flex xl:gap-1">
          <Link href="/" className={navLinkClass}>
            Home
          </Link>

          <div
            onMouseEnter={() => setMenu("link-building")}
            onMouseLeave={() => setMenu(null)}
            className="relative shrink-0"
          >
            <button className={cn(navLinkClass, "inline-flex items-center gap-1")}>
              <span className="hidden xl:inline">Link Building Services</span>
              <span className="xl:hidden">Link Building</span>
              <ChevronDown className="size-3.5 shrink-0 xl:size-4" />
            </button>
            <MegaMenu
              open={menu === "link-building"}
              title="Link Building SERVICES"
              items={navbarLinkBuildingMenu}
            />
          </div>

          <div
            onMouseEnter={() => setMenu("more-services")}
            onMouseLeave={() => setMenu(null)}
            className="relative shrink-0"
          >
            <button className={cn(navLinkClass, "inline-flex items-center gap-1")}>
              More Services <ChevronDown className="size-3.5 shrink-0 xl:size-4" />
            </button>
            <MegaMenu
              open={menu === "more-services"}
              title="OUR SERVICES"
              items={navbarMoreServicesMenu}
            />
          </div>

          {links.slice(1).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={navLinkClass}
              onClick={(e) => {
                if (navigateToHash(l.href)) e.preventDefault();
              }}
            >
              {l.label}
            </Link>
          ))}
          <div
            onMouseEnter={() => setMenu("contact")}
            onMouseLeave={() => setMenu(null)}
            className="relative shrink-0"
          >
            <button className={cn(navLinkClass, "inline-flex items-center gap-1")}>
              Contact <ChevronDown className="size-3.5 shrink-0 xl:size-4" />
            </button>
            <MegaMenu open={menu === "contact"} title="GET IN TOUCH" items={contactMenu} />
          </div>
        </div>

        <div className="hidden shrink-0 items-center gap-1.5 lg:flex xl:gap-2">
          <ThemeToggle />
          <Button asChild variant="ghost" size="sm" className="hidden xl:inline-flex">
            <Link href="/login">Sign in</Link>
          </Button>
          <Button asChild size="sm" className="whitespace-nowrap text-xs xl:text-sm">
            <Link href="/contact">
              <span className="hidden xl:inline">Get Free Site Data Sample</span>
              <span className="xl:hidden">Free Sample</span>
            </Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid size-10 shrink-0 place-items-center rounded-xl glass text-white lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-2 max-w-[min(1440px,calc(100vw-1.5rem))] overflow-hidden rounded-2xl glass-strong p-3 lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {mobileLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={(e) => {
                    if (navigateToHash(l.href)) e.preventDefault();
                    setOpen(false);
                  }}
                  className="rounded-xl px-4 py-3 text-sm text-muted hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
              <div className="mt-2 flex gap-2">
                <ThemeToggle />
                <Button asChild variant="outline" size="sm" className="flex-1">
                  <Link href="/login" onClick={() => setOpen(false)}>
                    Sign in
                  </Link>
                </Button>
                <Button asChild size="sm" className="flex-1">
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    Free Sample
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function MegaMenu({
  open,
  title,
  items,
}: {
  open: boolean;
  title: string;
  items: { title: string; description: string; href: string }[];
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.2 }}
          className="absolute left-1/2 top-[calc(100%+8px)] z-50 w-[860px] -translate-x-1/2 rounded-2xl border border-white/15 bg-bg-800/95 p-5 shadow-2xl backdrop-blur-xl"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-purple-2">
            {title}
          </p>
          <div className="grid grid-cols-2 gap-3">
            {items.map((item) => (
              item.href.startsWith("mailto:") ? (
                <a
                  key={item.title}
                  href={item.href}
                  className="rounded-xl border border-white/10 bg-bg-800/90 p-4 transition-colors hover:bg-bg-700/90"
                >
                  <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    {item.description}
                  </p>
                </a>
              ) : (
                <Link
                  key={item.title}
                  href={item.href}
                  className="rounded-xl border border-white/10 bg-bg-800/90 p-4 transition-colors hover:bg-bg-700/90"
                >
                  <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    {item.description}
                  </p>
                </Link>
              )
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
