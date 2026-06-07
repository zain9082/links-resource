import type {
  Category,
  Resource,
  Service,
  CaseStudy,
  Review,
  Faq,
  Package,
  Step,
  Tag,
  Partnership,
  Placement,
  WebsiteMetric,
} from "./types";

/* ============================================================
   Site config — preserved from linksresource.com
   ============================================================ */
export const site = {
  name: "Links Resource",
  legalName: "Links Resource LTD",
  domain: "linksresource.com",
  url: "https://linksresource.com",
  tagline: "Premium Link Building & Digital Marketing Agency",
  description:
    "Links Resource is a performance marketing agency specialising in niche-relevant backlinks, content creation & SEO to drive traffic, leads and brand growth.",
  email: "support@linksresource.com",
  phone: "+44 7476 606752",
  address: "0/1 7 Aberfoyle Street, Glasgow, United Kingdom, G31 3RW",
  socials: {
    facebook: "https://facebook.com",
    x: "https://x.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
};

export const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "50+", label: "Global Clients" },
  { value: "98%", label: "Success Rate" },
  { value: "10K+", label: "Placements Delivered" },
];

export const heroBullets = [
  "Rank Higher on Google with Proven SEO",
  "Get High-Quality Backlinks That Build Authority",
  "Increase Traffic with Optimized Content",
  "Convert Visitors into Leads with Smart Web Design",
  "Scalable SEO Strategies for Business Growth",
  "Clear Reporting & Measurable Results",
];

export const leadFormGoals = [
  "SEO + GEO Services",
  "Link Building Services",
  "White Label / Link Building",
  "Web Design",
  "Others",
];

export const featuredPlacements: Placement[] = [
  {
    name: "Morocco World News",
    url: "https://www.moroccoworldnews.com/",
    gradient: "blue",
  },
  {
    name: "Indie Hackers",
    url: "https://www.indiehackers.com/",
    gradient: "purple",
  },
  {
    name: "iLounge",
    url: "https://www.ilounge.com/",
    gradient: "pink",
  },
  {
    name: "Analytics Insight",
    url: "https://www.analyticsinsight.net/",
    gradient: "blue",
  },
  {
    name: "BB Time",
    url: "https://bbtime.co.uk/",
    gradient: "purple",
  },
  {
    name: "ARK",
    url: "https://ark-invest.com/",
    gradient: "pink",
  },
];

export const partnerships: Partnership[] = [
  {
    name: "Google",
    logo: "/logos/google.svg",
    url: "https://about.google/",
    gradient: "purple",
  },
  {
    name: "Google Pay",
    logo: "/logos/googlepay.svg",
    url: "https://pay.google.com/",
    gradient: "blue",
  },
  {
    name: "PayPal",
    logo: "/logos/paypal.svg",
    url: "https://www.paypal.com/",
    gradient: "blue",
  },
  {
    name: "Semrush",
    logo: "/logos/semrush.svg",
    url: "https://www.semrush.com/",
    gradient: "pink",
  },
  {
    name: "Binance",
    logo: "/logos/binance.svg",
    url: "https://www.binance.com/",
    gradient: "pink",
  },
  {
    name: "Stripe",
    logo: "/logos/stripe.svg",
    url: "https://stripe.com/",
    gradient: "purple",
  },
];

export const websiteMetrics: WebsiteMetric[] = [
  {
    site: "moroccoworldnews.com",
    url: "https://www.moroccoworldnews.com/",
    da: 44,
    dr: 56,
    traffic: "130K+",
  },
  {
    site: "indiehackers.com",
    url: "https://www.indiehackers.com/",
    da: 55,
    dr: 80,
    traffic: "103K+",
  },
  {
    site: "ilounge.com",
    url: "https://www.ilounge.com/",
    da: 78,
    dr: 82,
    traffic: "18K+",
  },
  {
    site: "analyticsinsight.net",
    url: "https://www.analyticsinsight.net/",
    da: 72,
    dr: 76,
    traffic: "100K+",
  },
  {
    site: "bbtime.co.uk",
    url: "https://bbtime.co.uk/",
    da: 65,
    dr: 80,
    traffic: "149K+",
  },
  {
    site: "ark-invest.com",
    url: "https://ark-invest.com/",
    da: 89,
    dr: 91,
    traffic: "1.5M+",
  },
  {
    site: "semrush.com",
    url: "https://www.semrush.com/",
    da: 87,
    dr: 76,
    traffic: "10K+",
  },
  {
    site: "paypal.com",
    url: "https://www.paypal.com/",
    da: 46,
    dr: 61,
    traffic: "34K+",
  },
  {
    site: "google.com",
    url: "https://about.google/",
    da: 65,
    dr: 65,
    traffic: "311K+",
  },
  {
    site: "stripe.com",
    url: "https://stripe.com/",
    da: 56,
    dr: 57,
    traffic: "348K+",
  },
];

export const navbarLinkBuildingMenu = [
  {
    title: "Link Building Services",
    description:
      "Link building services built to increase authority, improve rankings, and generate consistent organic growth.",
    href: "/resources?category=link-building",
  },
  {
    title: "Editorial Guest Posting Services",
    description:
      "Custom outreach campaigns that improve rankings, traffic and brand visibility.",
    href: "/resources/editorial-guest-posting",
  },
  {
    title: "Editorial Link Building Services",
    description:
      "Build authority with trusted backlinks from relevant high-authority websites.",
    href: "/resources/editorial-link-building",
  },
  {
    title: "White Label Link Building Services",
    description:
      "Scalable link building solutions designed for agencies and SEO resellers.",
    href: "/resources/white-label-link-building",
  },
];

export const navbarMoreServicesMenu = [
  {
    title: "SEO Services",
    description:
      "Data-driven strategies to boost rankings, traffic and conversions.",
    href: "/resources?category=seo-tools",
  },
  {
    title: "Boost DA/DR",
    description: "Secure high-quality mentions and links from top media sites.",
    href: "/resources/da-dr-boost",
  },
  {
    title: "SEO Content Writing",
    description: "Content built to rank, attract traffic, and convert visitors.",
    href: "/resources/seo-content-writing",
  },
  {
    title: "Local SEO",
    description: "Improve local rankings and attract nearby customers.",
    href: "/resources/local-seo",
  },
];

export const aboutContent = {
  eyebrow: "About Us",
  title: "Your Growth Partner, Not Just a Service Provider",
  body: "We help brands grow, not just rank. From SEO to content and development, everything we do is built to bring traffic, convert users, and increase revenue. We focus on strategies that create measurable business growth through SEO, content, and digital marketing.",
};

export const aboutPageContent = {
  hero: {
    eyebrow: "About Links Resource",
    title: "About Links Resource",
    intro:
      "At Links Resource, we help businesses improve online visibility through SEO, link building, content writing, website development, and growth-focused digital strategies tailored to real business goals.",
    cta: "Book a Free Consultation",
  },
  whoWeAre: {
    eyebrow: "Who we are",
    title: "A digital growth agency built around real business goals",
    paragraphs: [
      "Links Resource is a digital growth agency focused on helping businesses strengthen their online presence through practical, results-focused strategies. We specialize in SEO, authority building, content writing, and website development tailored to different industries and business goals.",
      "Rather than one-size-fits-all solutions, we focus on customized strategies designed around business needs, competition, and long-term growth opportunities.",
    ],
  },
  whatWeDo: {
    eyebrow: "What we do",
    title: "Practical digital solutions for measurable growth",
    body: "At Links Resource, we help businesses strengthen their online presence through tailored digital solutions designed to improve visibility, authority, and long-term growth. Our services include SEO, link building, content writing, website development, and local SEO strategies tailored to different industries and business goals. Whether you want to improve search visibility, build a stronger website, or attract more qualified traffic, we focus on practical solutions designed to support measurable business growth.",
  },
  whyChoose: {
    eyebrow: "Why businesses choose Links Resource",
    title: "Strategies tailored to real business goals",
    intro:
      "We believe digital growth works best when strategies are tailored to real business goals, not generic templates. At Links Resource, we focus on practical, long-term solutions designed to improve visibility, authority, and online performance. Our approach combines transparency, quality, and business-focused execution to help brands build a stronger digital presence.",
    items: [
      {
        title: "Tailored Strategies",
        body: "Every business has unique goals and challenges. We create customized digital strategies designed around your industry, competition, and growth objectives.",
      },
      {
        title: "Transparent Communication",
        body: "We value clear communication and keep clients informed with updates, recommendations, and a transparent working process.",
      },
      {
        title: "Long-Term Growth Focus",
        body: "Our strategies are designed to support sustainable growth rather than short-term tactics that may not provide lasting value.",
      },
      {
        title: "Quality-Driven Execution",
        body: "From content writing to SEO and website development, we prioritize quality, usability, and practical results.",
      },
      {
        title: "Ethical SEO Practices",
        body: "We follow search-friendly and ethical approaches designed to improve visibility while supporting long-term website performance.",
      },
      {
        title: "Dedicated Support",
        body: "We work closely with businesses to understand their goals and recommend solutions tailored to their specific needs.",
      },
    ],
  },
  approach: {
    eyebrow: "Our approach",
    title: "Our approach to digital growth",
    intro:
      "We follow a structured process designed to understand business goals, build the right strategy, and create sustainable online growth. By combining planning, execution, and ongoing optimization, we help businesses move toward stronger digital performance.",
    steps: [
      {
        title: "Understanding Your Business Goals",
        body: "We begin by learning about your business, target audience, industry, and growth objectives to identify the right opportunities.",
      },
      {
        title: "Building a Tailored Strategy",
        body: "Based on your goals, we create a practical digital strategy designed to improve visibility, authority, and online performance.",
      },
      {
        title: "Execution & Optimization",
        body: "Our team implements improvements across SEO, content, website performance, or digital growth areas while continuously refining the approach.",
      },
      {
        title: "Tracking Progress & Growth",
        body: "We monitor performance, identify opportunities, and make improvements to support long-term digital growth.",
      },
    ],
  },
  mission: {
    eyebrow: "Our mission",
    title: "Helping businesses grow online with practical solutions",
    body: "Our mission is to help businesses grow online through practical digital solutions designed to improve visibility, trust, and long-term performance. We aim to provide tailored strategies that align with business goals while focusing on quality, transparency, and sustainable growth.",
  },
  services: {
    eyebrow: "Services we offer",
    title: "Digital solutions for visibility, authority, and growth",
    intro:
      "We provide digital solutions designed to help businesses improve visibility, strengthen authority, and support long-term online growth. Our services are tailored to different industries, goals, and business needs.",
    items: [
      {
        title: "SEO Services",
        body: "Improve search visibility, organic traffic, and website performance through tailored SEO strategies.",
        href: "/resources?category=seo-tools",
      },
      {
        title: "Link Building Services",
        body: "Strengthen website authority with niche-relevant placements and quality backlink strategies.",
        href: "/resources?category=link-building",
      },
      {
        title: "Content Writing Services",
        body: "Create SEO-focused content designed to improve readability, engagement, and online visibility.",
        href: "/resources?category=content-writing",
      },
      {
        title: "Website Development",
        body: "Build fast, responsive, and user-friendly websites designed for performance and business growth.",
        href: "/resources?category=web-development",
      },
      {
        title: "Local SEO Services",
        body: "Improve local search visibility and connect with nearby customers through location-focused SEO strategies.",
        href: "/resources/local-seo",
      },
      {
        title: "Technical SEO Optimization",
        body: "Improve website structure, indexing, performance, and technical health for better search visibility.",
        href: "/resources/technical-seo",
      },
      {
        title: "Guest Posting & Outreach",
        body: "Secure relevant content placements designed to support authority and long-term SEO value.",
        href: "/resources/editorial-guest-posting",
      },
    ],
  },
  cta: {
    title: "Ready to Strengthen Your Online Presence?",
    body: "Whether you need SEO, website development, content writing, or digital growth support, we're here to help you find the right strategy for your business goals.",
    button: "Get A Free Quote",
  },
};

export const consultationBanner = {
  title: "Get a Free Guest Posting Consultation",
  subtitle:
    "Discover how our team can secure high-quality placements, improve rankings and organic visibility, and boost your website's authority with strategic guest posting.",
  cta: "Request Your Free Consultation",
};

/* ============================================================
   Resource directory — categories
   ============================================================ */
export const categories: Category[] = [
  {
    slug: "link-building",
    name: "Link Building",
    description:
      "Editorial backlinks, guest posting and authority-building tools and services.",
    icon: "Link2",
    gradient: "purple",
  },
  {
    slug: "seo-tools",
    name: "SEO Tools",
    description:
      "Rank tracking, audits, keyword research and technical SEO platforms.",
    icon: "Search",
    gradient: "blue",
  },
  {
    slug: "content-writing",
    name: "Content Writing",
    description: "SEO content, copywriting and editorial production resources.",
    icon: "PenLine",
    gradient: "pink",
  },
  {
    slug: "web-development",
    name: "Web Development",
    description: "Frameworks, hosting, and tooling to build fast web apps.",
    icon: "Code2",
    gradient: "blue",
  },
  {
    slug: "design",
    name: "Design",
    description: "UI kits, illustration, prototyping and inspiration galleries.",
    icon: "Palette",
    gradient: "pink",
  },
  {
    slug: "ai-tools",
    name: "AI Tools",
    description: "Generative AI, automation and productivity assistants.",
    icon: "Sparkles",
    gradient: "purple",
  },
];

export const tags: Tag[] = [
  { slug: "backlinks", name: "Backlinks" },
  { slug: "outreach", name: "Outreach" },
  { slug: "analytics", name: "Analytics" },
  { slug: "keyword-research", name: "Keyword Research" },
  { slug: "copywriting", name: "Copywriting" },
  { slug: "framework", name: "Framework" },
  { slug: "hosting", name: "Hosting" },
  { slug: "ui-kit", name: "UI Kit" },
  { slug: "inspiration", name: "Inspiration" },
  { slug: "automation", name: "Automation" },
  { slug: "free", name: "Free" },
  { slug: "local-seo", name: "Local SEO" },
];

/* ============================================================
   Resources — curated directory + agency services as resources
   ============================================================ */
export const resources: Resource[] = [
  {
    slug: "editorial-guest-posting",
    title: "Editorial Guest Posting",
    tagline: "Custom outreach campaigns that improve rankings & visibility",
    description:
      "Manual, niche-relevant guest posting on real websites with organic traffic. Pre-approval system, live link tracking and safe anchor strategy — no PBNs, no automation.",
    url: "https://linksresource.com/editorial-guest-posting-services/",
    category: "link-building",
    tags: ["backlinks", "outreach"],
    pricing: "Paid",
    featured: true,
    popular: true,
    rating: 4.9,
    views: 18400,
    createdAt: "2026-01-12T00:00:00.000Z",
    logoColor: "purple",
  },
  {
    slug: "editorial-link-building",
    title: "Editorial Link Building",
    tagline: "Trusted backlinks from relevant high-authority websites",
    description:
      "Build authority with contextual, domain-approved placements from DR 50–90 websites. Every link is earned through real outreach and relationships.",
    url: "https://linksresource.com/editorial-link-building-services/",
    category: "link-building",
    tags: ["backlinks", "outreach"],
    pricing: "Paid",
    featured: true,
    popular: true,
    rating: 4.8,
    views: 15200,
    createdAt: "2026-01-20T00:00:00.000Z",
    logoColor: "blue",
  },
  {
    slug: "white-label-link-building",
    title: "White Label Link Building",
    tagline: "Scalable link building for agencies & SEO resellers",
    description:
      "Reseller-ready link building with transparent reporting and consistent monthly campaigns designed to scale your agency without in-house hiring.",
    url: "https://linksresource.com/white-label-link-building/",
    category: "link-building",
    tags: ["backlinks", "outreach"],
    pricing: "Paid",
    featured: true,
    popular: false,
    rating: 4.7,
    views: 9800,
    createdAt: "2026-02-02T00:00:00.000Z",
    logoColor: "pink",
  },
  {
    slug: "da-dr-boost",
    title: "DA / DR Boost",
    tagline: "High-quality mentions & links from top media sites",
    description:
      "Secure authority-boosting placements that lift your Domain Authority and Domain Rating with safe, sustainable strategies.",
    url: "https://linksresource.com/da-dr-boost-services/",
    category: "link-building",
    tags: ["backlinks", "analytics"],
    pricing: "Paid",
    featured: false,
    popular: true,
    rating: 4.6,
    views: 7300,
    createdAt: "2026-02-10T00:00:00.000Z",
    logoColor: "purple",
  },
  {
    slug: "seo-content-writing",
    title: "SEO Content Writing",
    tagline: "Content built to rank, attract traffic and convert",
    description:
      "SEO-optimized, well-researched content that matches your brand voice and is engineered to rank and convert visitors into leads.",
    url: "https://linksresource.com/seo-content-writing-services/",
    category: "content-writing",
    tags: ["copywriting", "keyword-research"],
    pricing: "Paid",
    featured: true,
    popular: true,
    rating: 4.9,
    views: 12600,
    createdAt: "2026-01-28T00:00:00.000Z",
    logoColor: "pink",
  },
  {
    slug: "local-seo",
    title: "Local SEO",
    tagline: "Improve local rankings & attract nearby customers",
    description:
      "Location-focused SEO to improve maps ranking, local visibility and lead generation for businesses targeting nearby customers.",
    url: "https://linksresource.com/local-seo-services/",
    category: "seo-tools",
    tags: ["local-seo", "analytics"],
    pricing: "Paid",
    featured: false,
    popular: false,
    rating: 4.7,
    views: 6100,
    createdAt: "2026-02-14T00:00:00.000Z",
    logoColor: "blue",
  },
  {
    slug: "technical-seo-audit",
    title: "Technical SEO Audit",
    tagline: "Fix indexing, performance & Core Web Vitals",
    description:
      "Improve website structure, indexing, performance and technical health for better search visibility and stronger rankings.",
    url: "https://linksresource.com/search-engine-optimaization-services/",
    category: "seo-tools",
    tags: ["analytics", "keyword-research"],
    pricing: "Freemium",
    featured: true,
    popular: true,
    rating: 4.8,
    views: 14100,
    createdAt: "2026-02-18T00:00:00.000Z",
    logoColor: "blue",
  },
  {
    slug: "web-design-development",
    title: "Web Design & Development",
    tagline: "Conversion-focused, SEO-optimized websites that perform",
    description:
      "Fast, modern, responsive websites built for performance and business growth, with conversion-focused UX and clean code.",
    url: "https://linksresource.com/web-development-services/",
    category: "web-development",
    tags: ["framework", "hosting"],
    pricing: "Paid",
    featured: true,
    popular: false,
    rating: 4.8,
    views: 8800,
    createdAt: "2026-02-22T00:00:00.000Z",
    logoColor: "blue",
  },
  {
    slug: "keyword-research-kit",
    title: "Keyword Research Kit",
    tagline: "Data-driven keyword discovery & clustering",
    description:
      "Find high-intent keywords, cluster topics and prioritize opportunities with a data-driven research workflow.",
    url: "https://linksresource.com/",
    category: "seo-tools",
    tags: ["keyword-research", "analytics", "free"],
    pricing: "Free",
    featured: false,
    popular: true,
    rating: 4.5,
    views: 5400,
    createdAt: "2026-03-01T00:00:00.000Z",
    logoColor: "purple",
  },
  {
    slug: "geo-llm-optimization",
    title: "GEO / LLM Optimization",
    tagline: "Boost visibility across search engines AND LLMs",
    description:
      "Generative Engine Optimization to make your brand discoverable across both traditional search and large language models.",
    url: "https://linksresource.com/",
    category: "ai-tools",
    tags: ["automation", "analytics"],
    pricing: "Freemium",
    featured: true,
    popular: true,
    rating: 4.9,
    views: 16700,
    createdAt: "2026-03-08T00:00:00.000Z",
    logoColor: "purple",
  },
  {
    slug: "brand-design-system",
    title: "Brand Design System",
    tagline: "Premium UI kits & brand guidelines",
    description:
      "Reusable design systems, UI kits and brand guidelines to keep your product consistent and beautiful at scale.",
    url: "https://linksresource.com/",
    category: "design",
    tags: ["ui-kit", "inspiration"],
    pricing: "Freemium",
    featured: false,
    popular: false,
    rating: 4.6,
    views: 4200,
    createdAt: "2026-03-12T00:00:00.000Z",
    logoColor: "pink",
  },
  {
    slug: "ai-content-assistant",
    title: "AI Content Assistant",
    tagline: "Draft, optimize and scale content with AI",
    description:
      "An AI-powered assistant for drafting, optimizing and scaling SEO content while keeping your brand voice consistent.",
    url: "https://linksresource.com/",
    category: "ai-tools",
    tags: ["automation", "copywriting"],
    pricing: "Freemium",
    featured: true,
    popular: true,
    rating: 4.8,
    views: 13900,
    createdAt: "2026-03-18T00:00:00.000Z",
    logoColor: "purple",
  },
];

/* ============================================================
   Services — preserved from linksresource.com
   ============================================================ */
export const services: Service[] = [
  {
    slug: "link-building",
    title: "Link Building & Guest Posting",
    description: "Build authority with high-quality backlinks from real websites.",
    icon: "Link2",
    points: ["No PBNs", "Niche-relevant placements", "Long-term SEO impact"],
  },
  {
    slug: "content-writing",
    title: "Content Writing",
    description: "SEO-optimized content that ranks and converts.",
    icon: "PenLine",
    points: ["Brand-matched voice", "Well researched", "Conversion focused"],
  },
  {
    slug: "web-development",
    title: "Website Development",
    description: "Create fast, modern, and conversion-focused websites.",
    icon: "Code2",
    points: ["Responsive design", "Performance first", "SEO-ready"],
  },
  {
    slug: "seo",
    title: "Search Engine Optimization",
    description: "Improve rankings, traffic, and visibility with complete SEO.",
    icon: "Search",
    points: ["Technical SEO", "On-page", "Off-page authority"],
  },
];

/* ============================================================
   Case studies — preserved from linksresource.com
   ============================================================ */
export const caseStudies: CaseStudy[] = [
  {
    slug: "flat-seo-to-2300-traffic",
    category: "Link Building",
    title: "Turning Flat SEO Into 2,300+ Monthly Traffic",
    metrics: [
      { value: "2,300", label: "Organic Traffic" },
      { value: "3,500", label: "Keywords Ranking" },
      { value: "$2,500/mo", label: "Monthly Investment" },
      { value: "1 year", label: "Timeline" },
    ],
  },
  {
    slug: "15-links-a-month",
    category: "Link Building",
    title: "How 15 Links a Month Changed Everything",
    metrics: [
      { value: "3,272", label: "Organic Traffic" },
      { value: "6,789", label: "Keywords Ranking" },
      { value: "$5k/mo", label: "Monthly Investment" },
      { value: "1 year", label: "Timeline" },
    ],
  },
  {
    slug: "seo-growth-case",
    category: "Search Engine Optimization",
    title: "Compounding SEO Growth Case Study",
    metrics: [
      { value: "3,472%", label: "Organic Traffic" },
      { value: "100.5%", label: "Keyword Growth" },
      { value: "CWVs Fixed", label: "On-Page" },
      { value: "5 mo | $1k/mo", label: "Investment" },
    ],
  },
  {
    slug: "local-seo-case",
    category: "Local SEO",
    title: "Local SEO That Generated Real Leads",
    metrics: [
      { value: "+900%", label: "Local Visibility" },
      { value: "+700%", label: "Maps Ranking" },
      { value: "45", label: "Leads Generated" },
      { value: "4 weeks", label: "Growth Timeline" },
    ],
  },
  {
    slug: "web-dev-case",
    category: "Web Development",
    title: "Conversion-Focused Website Rebuild",
    metrics: [
      { value: "WordPress", label: "CMS Platform" },
      { value: "Company", label: "Website Type" },
      { value: "Tech", label: "Industry" },
      { value: "Full Build", label: "Project Scope" },
    ],
  },
  {
    slug: "content-writing-case",
    category: "Content Writing",
    title: "Content That Compounded Organic Growth",
    metrics: [
      { value: "+6,790%", label: "Traffic Growth" },
      { value: "500+", label: "Keywords" },
      { value: "4 Days", label: "Timeline" },
      { value: "$0.05/ppw", label: "Budget" },
    ],
  },
  {
    slug: "da-dr-boost-case",
    category: "DA-DR Boost",
    title: "Authority Metrics That Unlocked Rankings",
    metrics: [
      { value: "DA 42", label: "Domain Authority" },
      { value: "DR 38", label: "Domain Rating" },
      { value: "+180%", label: "Referring Domains" },
      { value: "3 months", label: "Timeline" },
    ],
  },
];

export const caseStudyTabs = [
  "Link Building",
  "Search Engine Optimization",
  "DA-DR Boost",
  "Web Development",
  "Local SEO",
  "Content Writing",
] as const;

/* ============================================================
   Reviews — preserved from linksresource.com
   ============================================================ */
export const reviews: Review[] = [
  {
    name: "Gail Schenbaum",
    role: "CEO at Umergency",
    body: "I worked with Links Resource for content writing services, and the experience was excellent. The team delivered high-quality, well-researched, and engaging content that perfectly matched our brand's voice. Highly recommend their services!",
  },
  {
    name: "Peter Johnson",
    role: "Product Manager, Kustomer",
    body: "Links Resource did an excellent job improving my website's authority and online visibility. Their team was professional, efficient, and delivered high-quality backlinks from relevant sites. Highly recommended for SEO results.",
  },
  {
    name: "Jhon Edison",
    role: "CEO, Drive Mouse",
    body: "I used Links Resource for on-page SEO services and I'm extremely satisfied with the results. They optimized my website perfectly, improving both performance and visibility. The team delivered exactly what they promised.",
  },
];

/* ============================================================
   How it works — preserved
   ============================================================ */
export const howItWorks: Step[] = [
  {
    index: "01",
    title: "Understand your business",
    description:
      "We start by learning your goals, audience, competitors, and current online presence to build a strategy that fits.",
  },
  {
    index: "02",
    title: "Create strategy",
    description:
      "Our team develops a clear action plan focused on visibility, authority, and long-term growth based on real research.",
  },
  {
    index: "03",
    title: "Execute campaigns",
    description:
      "We launch and manage campaigns across SEO, outreach, content and branding with a focus on measurable performance.",
  },
  {
    index: "04",
    title: "Deliver results",
    description:
      "You receive transparent reporting, steady growth, stronger rankings and real business impact that helps you scale.",
  },
];

export const whyChooseUs = [
  {
    index: "01",
    title: "Real Websites, Real Results",
    description:
      "We build backlinks on real websites with organic traffic, not spam networks.",
    points: ["No PBNs", "Niche-relevant placements", "Long-term SEO impact"],
  },
  {
    index: "02",
    title: "Manual Outreach, Not Automation",
    description:
      "Every placement is earned through real outreach and relationships.",
    points: ["No mass emails", "Higher quality links", "Better acceptance rate"],
  },
  {
    index: "03",
    title: "Full Transparency & Control",
    description:
      "You approve sites before publishing and get clear live reports.",
    points: ["Pre-approval system", "Live link tracking", "No hidden placements"],
  },
  {
    index: "04",
    title: "Built for Scalable Growth",
    description:
      "Consistent campaigns designed to increase rankings and traffic over time.",
    points: ["Monthly link building", "Safe anchor strategy", "Sustainable growth"],
  },
];

/* ============================================================
   Packages — preserved (placeholder pricing from current site)
   ============================================================ */
export const packages: Package[] = [
  {
    name: "Starter",
    price: "$99",
    period: "/month",
    features: ["5 backlinks / mo", "DR 30–50 sites", "Live reporting", "Email support"],
  },
  {
    name: "Growth",
    price: "$299",
    period: "/month",
    highlight: true,
    features: [
      "15 backlinks / mo",
      "DR 50–70 sites",
      "Content included",
      "Priority support",
      "Strategy calls",
    ],
  },
  {
    name: "Scale",
    price: "$599",
    period: "/month",
    features: [
      "30+ backlinks / mo",
      "DR 70–90 sites",
      "Dedicated manager",
      "White-label reporting",
      "24/7 support",
    ],
  },
];

/* ============================================================
   FAQ — preserved
   ============================================================ */
export const faqs: Faq[] = [
  {
    q: "What digital marketing services do you offer?",
    a: "We offer SEO services, link building, content writing, website development, local SEO, and digital growth solutions designed to improve online visibility and business performance.",
  },
  {
    q: "How do I know which service is right for my business?",
    a: "The right service depends on your goals, competition, and business needs. We can review your website and recommend a tailored strategy based on your objectives.",
  },
  {
    q: "Do you offer custom strategies for different businesses?",
    a: "Yes. Every business is different, which is why we create tailored strategies based on your industry, audience, and growth goals rather than one-size-fits-all solutions.",
  },
  {
    q: "How long does it take to see results from SEO?",
    a: "Results vary depending on the service, competition, and current website condition. Some improvements may be noticeable sooner, while long-term growth typically takes more time.",
  },
  {
    q: "Why choose Links Resource for digital growth services?",
    a: "We focus on tailored strategies, transparent communication, ethical practices, and solutions designed to support long-term online growth.",
  },
];

/* ============================================================
   Query helpers (in-memory data layer — DB-ready via Prisma)
   ============================================================ */
export function getResources() {
  return resources;
}

export function getResourceBySlug(slug: string) {
  return resources.find((r) => r.slug === slug);
}

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getTagBySlug(slug: string) {
  return tags.find((t) => t.slug === slug);
}

export function getResourcesByCategory(slug: string) {
  return resources.filter((r) => r.category === slug);
}

export function getResourcesByTag(slug: string) {
  return resources.filter((r) => r.tags.includes(slug));
}

export function getFeatured() {
  return resources.filter((r) => r.featured);
}

export function getPopular() {
  return resources.filter((r) => r.popular);
}

export function getRecent() {
  return [...resources].sort(
    (a, b) => +new Date(b.createdAt) - +new Date(a.createdAt)
  );
}

export function searchResources(query: string) {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return resources.filter(
    (r) =>
      r.title.toLowerCase().includes(q) ||
      r.tagline.toLowerCase().includes(q) ||
      r.description.toLowerCase().includes(q) ||
      r.category.includes(q) ||
      r.tags.some((t) => t.includes(q))
  );
}
