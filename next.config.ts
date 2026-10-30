import type { NextConfig } from "next";
import { resourceRedirects } from "./src/lib/resource-policy";

const nextConfig: NextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      ...Object.entries(resourceRedirects).map(([slug, destination]) => ({
        source: `/resources/${slug}`,
        destination,
        permanent: true,
      })),
      {
        source: "/our-team",
        destination: "/team",
        permanent: true,
      },
      {
        source: "/about-links-resource",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/about-links-resource-2",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/website-development",
        destination: "/web-development",
        permanent: true,
      },
      {
        source: "/web-development-2",
        destination: "/web-development",
        permanent: true,
      },
      {
        source: "/guest-posting-2",
        destination: "/resources/editorial-guest-posting",
        permanent: true,
      },
      {
        source: "/da-dr-boost",
        destination: "/resources/da-dr-boost",
        permanent: true,
      },
      {
        source: "/link-building",
        destination: "/link-building-services",
        permanent: true,
      },
      {
        source: "/search-engine-optimaization-services",
        destination: "/resources/technical-seo-audit",
        permanent: true,
      },
      {
        source: "/seo-content-writing-services",
        destination: "/resources/seo-content-writing",
        permanent: true,
      },
      {
        source: "/da-dr-boost-services",
        destination: "/resources/da-dr-boost",
        permanent: true,
      },
      {
        source: "/web-development-services",
        destination: "/web-development",
        permanent: true,
      },
      {
        source: "/local-seo-services",
        destination: "/seo-services/local-seo",
        permanent: true,
      },
      {
        source: "/editorial-guest-posting-services",
        destination: "/resources/editorial-guest-posting",
        permanent: true,
      },
      {
        source: "/editorial-link-building-services",
        destination: "/link-building-services",
        permanent: true,
      },
      {
        source: "/white-label-link-building",
        destination: "/white-label/link-building",
        permanent: true,
      },
      {
        source: "/white-label-link-building-services",
        destination: "/white-label/link-building",
        permanent: true,
      },
      {
        source: "/authority-backlinks-services",
        destination: "/link-building-services",
        permanent: true,
      },
      {
        source: "/case-studies/testing-seo-case-study",
        destination: "/case-studies",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
