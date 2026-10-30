import type { Metadata } from "next";
import type { PageConfig } from "../../content/pages/types";
import { site } from "./data";
import { siteNoindex } from "./site-flags";

// Canonicals always identify the production domain, including in preview builds.
export const baseUrl = "https://linksresource.com";

export function canonicalUrl(path: string = "/") {
  const normalized = `/${path.split("/").filter(Boolean).join("/")}`;
  return `${baseUrl}${normalized}`;
}

export function buildMetadata({
  title,
  description,
  path = "/",
  image = "/og.png",
  noindex = false,
  follow = !noindex,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noindex?: boolean;
  follow?: boolean;
} = {}): Metadata {
  const fullTitle = title ? `${title} — ${site.name}` : `${site.name} — ${site.tagline}`;
  const desc = description ?? (title ? `${title} at ${site.name}. ${site.description}` : site.description);
  const url = canonicalUrl(path);
  const googleVerification = process.env.GOOGLE_SITE_VERIFICATION?.trim();
  const shouldNoindex = siteNoindex || noindex;
  const shouldFollow = siteNoindex ? false : follow;

  return {
    title: fullTitle,
    description: desc,
    metadataBase: new URL(baseUrl),
    alternates: { canonical: url },
    keywords: [
      "link building",
      "SEO services",
      "guest posting",
      "backlinks",
      "content writing",
      "digital marketing",
      "guest posting agency",
      "resource directory",
    ],
    authors: [{ name: site.legalName }],
    ...(googleVerification
      ? { verification: { google: googleVerification } }
      : {}),
    openGraph: {
      type: "website",
      url,
      title: fullTitle,
      description: desc,
      siteName: site.legalName,
      locale: "en_GB",
      images: [{ url: image, width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [image],
    },
    robots: shouldNoindex
      ? { index: false, follow: shouldFollow, googleBot: { index: false, follow: shouldFollow } }
      : {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, "max-image-preview": "large" },
        },
  };
}

export function buildAdminMetadata(title: string, path: string): Metadata {
  return buildMetadata({ title, path, noindex: true });
}

export function pageMetadata(page: PageConfig): Metadata {
  return buildMetadata({
    title: page.title,
    description: page.metaDescription,
    path: page.slug,
    noindex: page.status === "draft",
  });
}

export function serviceJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: site.legalName,
      url: baseUrl,
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    serviceType: name,
  };
}

export type BreadcrumbJsonLdItem = {
  name: string;
  href: string;
};

export function breadcrumbJsonLd(items: BreadcrumbJsonLdItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.href, `${baseUrl}/`).toString(),
    })),
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Links Resource Limited",
    alternateName: site.name,
    url: baseUrl,
    email: site.email,
    telephone: "+44 7438 836553",
    identifier: {
      "@type": "PropertyValue",
      propertyID: "UK company number",
      value: "14819683",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "0/1 7 Aberfoyle Street",
      addressLocality: "Glasgow",
      postalCode: "G31 3RW",
      addressCountry: "GB",
    },
    sameAs: Object.values(site.socials),
  };
}

export function professionalServiceJsonLd() {
  return {
    ...organizationJsonLd(),
    "@type": "ProfessionalService",
    name: "Links Resource Limited",
    priceRange: "Contact for a quote",
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.legalName,
    url: baseUrl,
  };
}
