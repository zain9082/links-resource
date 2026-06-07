"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function scrollToHash(hash: string) {
  const id = hash.replace("#", "");
  if (!id) return;

  const el = document.getElementById(id);
  if (!el) return;

  requestAnimationFrame(() => {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.location.hash) {
      scrollToHash(window.location.hash);
    }

    const onHashChange = () => scrollToHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [pathname]);

  return null;
}

export function navigateToHash(href: string) {
  const [path, hash = ""] = href.split("#");

  if (path === "/" && window.location.pathname === "/" && hash) {
    scrollToHash(`#${hash}`);
    window.history.pushState(null, "", `/#${hash}`);
    return true;
  }

  return false;
}
