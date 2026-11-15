import type { NextConfig } from "next";
import { resourceRedirects } from "./src/lib/resource-policy";

const nextConfig: NextConfig = {
  trailingSlash: false,
  async headers() {
    const internal = {
      source: "/internal/:path*",
      headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
    };
    return process.env.SITE_NOINDEX === "false" ? [internal] : [internal, {
      source: "/:path*",
      headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
    }];
  },
  async redirects() {
    return [
      ...Object.entries(resourceRedirects).map(([slug, destination]) => ({
        source: `/resources/${slug}`,
        destination,
        statusCode: 301,
      })),
      {
        source: "/resources/sync-probe-1788889913",
        destination: "/resources",
        statusCode: 301,
      },
      {
        source: "/our-team",
        destination: "/team",
        statusCode: 301,
      },
      {
        source: "/about-links-resource",
        destination: "/about",
        statusCode: 301,
      },
      {
        source: "/about-links-resource-2",
        destination: "/about",
        statusCode: 301,
      },
      {
        source: "/website-development",
        destination: "/web-development",
        statusCode: 301,
      },
      {
        source: "/web-development-2",
        destination: "/web-development",
        statusCode: 301,
      },
      {
        source: "/guest-posting-2",
        destination: "/resources/editorial-guest-posting",
        statusCode: 301,
      },
      {
        source: "/da-dr-boost",
        destination: "/resources/da-dr-boost",
        statusCode: 301,
      },
      {
        source: "/link-building",
        destination: "/link-building-services",
        statusCode: 301,
      },
      {
        source: "/search-engine-optimaization-services",
        destination: "/resources/technical-seo-audit",
        statusCode: 301,
      },
      {
        source: "/seo-content-writing-services",
        destination: "/resources/seo-content-writing",
        statusCode: 301,
      },
      {
        source: "/da-dr-boost-services",
        destination: "/resources/da-dr-boost",
        statusCode: 301,
      },
      {
        source: "/web-development-services",
        destination: "/web-development",
        statusCode: 301,
      },
      {
        source: "/local-seo-services",
        destination: "/seo-services/local-seo",
        statusCode: 301,
      },
      {
        source: "/editorial-guest-posting-services",
        destination: "/resources/editorial-guest-posting",
        statusCode: 301,
      },
      {
        source: "/editorial-link-building-services",
        destination: "/link-building-services",
        statusCode: 301,
      },
      {
        source: "/white-label-link-building",
        destination: "/white-label/link-building",
        statusCode: 301,
      },
      {
        source: "/white-label-link-building-services",
        destination: "/white-label/link-building",
        statusCode: 301,
      },
      {
        source: "/authority-backlinks-services",
        destination: "/link-building-services",
        statusCode: 301,
      },
      {
        source: "/case-studies/testing-seo-case-study",
        destination: "/case-studies",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;

