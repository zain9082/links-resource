export const restoredServiceRoutes: Record<string, { sourceSlug: string; title: string; description: string; h1: string }> = {
  "/seo-services": {
    sourceSlug: "technical-seo-audit",
    title: "SEO Services",
    description: "Data-driven SEO campaigns — technical, on-page, and off-page optimization to improve rankings, traffic, and conversions.",
    h1: "Results-driven SEO that helps businesses grow faster",
  },
  "/seo-services/local-seo": {
    sourceSlug: "local-seo",
    title: "Local SEO Services",
    description: "Local SEO services — Google Maps optimization, citations, and location pages to grow calls and nearby leads.",
    h1: "Rank in Google Maps and local search",
  },
  "/guest-posting-services": {
    sourceSlug: "editorial-guest-posting",
    title: "Guest Posting Services",
    description: "Manual guest posting on real, niche-relevant websites — contextual editorial links with transparent reporting and white-hat outreach.",
    h1: "Guest posts that support long-term SEO growth",
  },
  "/content-writing-services": {
    sourceSlug: "seo-content-writing",
    title: "Content Writing Services",
    description: "SEO content writing — blog posts, landing pages, and product copy designed to rank, engage, and convert.",
    h1: "Rank-ready content that helps businesses grow faster",
  },
  "/web-development": {
    sourceSlug: "web-design-development",
    title: "Web Development Services",
    description: "Conversion-focused web development — Next.js, MERN stack, and React Native builds engineered for speed, SEO structure, and measurable business growth.",
    h1: "Conversion-focused websites built to rank and perform",
  },
  "/white-label/link-building": {
    sourceSlug: "white-label-link-building",
    title: "White Label Link Building Services",
    description: "White-label link building for SEO agencies — manual outreach, editorial placements, and client-ready reporting at scale.",
    h1: "Editorial link building for authority growth",
  },
};

export const restoredLegalRoutes: Record<string, { title: string; description: string; intro: string; sections: { heading: string; text: string }[] }> = {
  "/privacy-policy": {
    title: "Privacy Policy",
    description: "How Links Resource collects, uses, and protects personal data.",
    intro: "This policy explains how Links Resource LTD handles personal information when you use our website and services.",
    sections: [
      { heading: "Information we collect", text: "We may collect contact details, website URLs, project requirements, and communication records when you submit forms, request audits, or contact our team." },
      { heading: "How we use information", text: "Information is used to respond to enquiries, deliver services, improve our website, and meet legal or operational requirements. We do not sell personal data." },
      { heading: "Cookies", text: "We use cookies and similar technologies for essential functionality and performance measurement. You can manage cookie preferences through the site banner." },
      { heading: "Data retention & rights", text: "You may request access, correction, or deletion of personal data where applicable under UK GDPR. Contact us using the details on our contact page." },
    ],
  },
  "/terms-of-service": {
    title: "Terms of Service",
    description: "Terms governing use of the Links Resource website and services.",
    intro: "Terms that govern use of Links Resource website and services.",
    sections: [
      { heading: "Agreement", text: "By using our website or engaging our services, you agree to these terms and any service-specific agreement shared at kickoff." },
      { heading: "Services", text: "We provide SEO, link building, content, and related digital services as described in proposals, packages, or statements of work." },
      { heading: "Client responsibilities", text: "Clients must provide accurate information, timely feedback, and access required to deliver agreed work." },
    ],
  },
  "/refund-policy": {
    title: "Refund Policy",
    description: "Refund and cancellation terms for Links Resource services.",
    intro: "How refunds and credits are handled for Links Resource services.",
    sections: [
      { heading: "Eligibility", text: "Refund eligibility depends on the package type, work already completed, and any written agreement for the engagement." },
      { heading: "Third-party costs", text: "Third-party costs such as paid placements are generally non-refundable once incurred." },
    ],
  },
  "/service-policy": {
    title: "Service Policy",
    description: "Delivery standards, communication, and quality expectations for Links Resource services.",
    intro: "Delivery standards, timelines, and quality expectations for our campaigns.",
    sections: [
      { heading: "Delivery", text: "We deliver work according to agreed scope, timelines, and quality standards outlined in your package or proposal." },
      { heading: "Revisions", text: "Reasonable revisions are included where specified. Major scope changes may require a new quote." },
    ],
  },
};
