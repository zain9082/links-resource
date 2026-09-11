import type { Metadata } from "next";
import { site } from "./data";

export const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
  site.url ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined) ||
  "https://linksresource.com";

export function buildMetadata({
  title,
  description,
  path = "/",
  image = "/og.png",
  noindex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noindex?: boolean;
} = {}): Metadata {
  const fullTitle = title ? `${title} — ${site.name}` : `${site.name} — ${site.tagline}`;
  const desc = description ?? site.description;
  const url = `${baseUrl}${path}`;
  const googleVerification = process.env.GOOGLE_SITE_VERIFICATION?.trim();

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
    robots: noindex
      ? { index: false, follow: false, googleBot: { index: false, follow: false } }
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
  };
}
