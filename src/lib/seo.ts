import type { Metadata } from "next";
import { site } from "./data";

export const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://linksresource.com";

export function buildMetadata({
  title,
  description,
  path = "/",
  image = "/og.png",
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
} = {}): Metadata {
  const fullTitle = title ? `${title} — ${site.name}` : `${site.name} — ${site.tagline}`;
  const desc = description ?? site.description;
  const url = `${baseUrl}${path}`;

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
      "developer resources",
      "design tools",
      "resource directory",
    ],
    authors: [{ name: site.legalName }],
    openGraph: {
      type: "website",
      url,
      title: fullTitle,
      description: desc,
      siteName: site.legalName,
      images: [{ url: image, width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    alternateName: site.name,
    url: baseUrl,
    email: site.email,
    telephone: site.phone,
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

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.legalName,
    url: baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}
