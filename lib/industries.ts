const ecommerce = "";
const saas = "";
const local = "";
const health = "";
const education = "";
const finance = "";

export type Industry = {
  slug: string;
  name: string;
  short: string;
  long: string;
  image: string;
  metrics: { label: string; value: string }[];
  channels: string[];
};

export const industries: Industry[] = [
  {
    slug: "ecommerce",
    name: "Ecommerce & DTC",
    short: "Shopify, WooCommerce and headless brands scaling profitably across paid + organic.",
    long: "From first-purchase ROAS to repeat LTV, we run the full funnel for DTC brands — Meta and TikTok creative engines, Google Shopping + PMax, and SEO content that compounds. Built for operators who care about contribution margin, not just last-click.",
    image: ecommerce,
    metrics: [
      { label: "Avg blended ROAS", value: "3.4×" },
      { label: "Repeat-rate lift", value: "+27%" },
      { label: "DTC brands scaled", value: "60+" },
    ],
    channels: ["Meta Ads", "TikTok Ads", "Google Shopping", "Email + SMS", "SEO"],
  },
  {
    slug: "saas",
    name: "B2B SaaS",
    short: "Pipeline-led acquisition for product-led and sales-assist SaaS companies.",
    long: "We build acquisition engines around qualified pipeline, not MQLs. Programmatic SEO for category capture, paid search for high-intent demos, LinkedIn for ABM, and a measurement stack wired into your CRM so every dollar maps to ARR.",
    image: saas,
    metrics: [
      { label: "Avg SQL lift", value: "+118%" },
      { label: "CAC payback", value: "<9 mo" },
      { label: "SaaS clients", value: "30+" },
    ],
    channels: ["Google Search", "LinkedIn Ads", "SEO", "Programmatic", "HubSpot/Salesforce"],
  },
  {
    slug: "local-multi-location",
    name: "Local & Multi-location",
    short: "Clinics, restaurants, retail and service brands winning the Local Pack at scale.",
    long: "From single-location to 500+ stores, we manage Google Business Profile, Maps, local landing pages and review acquisition — with geo-grid reporting that proves visibility lift in every market you serve.",
    image: local,
    metrics: [
      { label: "Local Pack visibility", value: "+212%" },
      { label: "Locations managed", value: "1,800+" },
      { label: "Reviews / mo / loc", value: "18" },
    ],
    channels: ["Google Business Profile", "Local SEO", "Apple Business Connect", "Geo-grid tracking"],
  },
  {
    slug: "healthcare",
    name: "Healthcare & Wellness",
    short: "Compliant patient acquisition for clinics, dental groups, med-spas and DTC health.",
    long: "HIPAA-aware tracking, conservative ad copy review, and conversion paths designed around patient intake. We've grown bookings for multi-location dental, med-spa, dermatology and telehealth brands without violating platform policy.",
    image: health,
    metrics: [
      { label: "Avg booking lift", value: "+96%" },
      { label: "Cost per consult", value: "−44%" },
      { label: "Healthcare brands", value: "25+" },
    ],
    channels: ["Google Ads", "Meta Ads", "Local SEO", "Reviews + reputation"],
  },
  {
    slug: "education",
    name: "Education & EdTech",
    short: "Course platforms, bootcamps, K-12 and higher-ed enrollment marketing.",
    long: "Enrollment funnels that respect a 30–90 day decision window. Long-form SEO content, retargeting sequences, and lead-quality scoring tied back to actual enrolments — not form fills.",
    image: education,
    metrics: [
      { label: "Enrolment lift", value: "+74%" },
      { label: "CPL reduction", value: "−39%" },
      { label: "Cohorts launched", value: "200+" },
    ],
    channels: ["Meta Ads", "Google Ads", "YouTube", "SEO", "Email nurture"],
  },
  {
    slug: "fintech",
    name: "Fintech & Financial Services",
    short: "Compliance-aware growth for lenders, neobanks, wealth and insurance brands.",
    long: "We work inside FCA, OSFI and SEC marketing constraints. Server-side tracking with PII redaction, compliance-reviewed creative pipelines and SEO content that earns trust signals search engines reward in YMYL categories.",
    image: finance,
    metrics: [
      { label: "Funded-account lift", value: "+62%" },
      { label: "CPA reduction", value: "−31%" },
      { label: "Fintech clients", value: "15+" },
    ],
    channels: ["Google Ads", "SEO", "Programmatic", "LinkedIn", "Server-side tracking"],
  },
];

export const findIndustry = (slug: string) => industries.find((i) => i.slug === slug);
