import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
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
        destination: "/resources/web-design-development",
        permanent: true,
      },
      {
        source: "/web-development-2",
        destination: "/resources/web-design-development",
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
        destination: "/resources/web-design-development",
        permanent: true,
      },
      {
        source: "/local-seo-services",
        destination: "/resources/local-seo",
        permanent: true,
      },
      {
        source: "/editorial-guest-posting-services",
        destination: "/resources/editorial-guest-posting",
        permanent: true,
      },
      {
        source: "/editorial-link-building-services",
        destination: "/resources/editorial-link-building",
        permanent: true,
      },
      {
        source: "/white-label-link-building",
        destination: "/resources/white-label-link-building",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
