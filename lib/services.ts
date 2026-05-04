export type Service = {
  slug: "google-ads" | "meta-ads" | "tiktok-ads" | "seo" | "google-business-profile";
  number: string;
  name: string;
  short: string;
  hero: string;
  intro: string;
  tone: string;
  channel: string;
  whatYouGet: string[];
  process: { n: string; t: string; d: string }[];
  deliverables: string[];
  metrics: { label: string; value: string }[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "google-ads",
    number: "01",
    name: "Google Ads",
    short: "Search, Performance Max & YouTube campaigns engineered for profitable acquisition.",
    hero: "Capture demand the moment it happens.",
    intro:
      "We build Google Ads accounts that compound. Search for high-intent buyers, Performance Max for asset-driven scale, YouTube for affordable reach, and Shopping for ecommerce throughput — all wired into a single, ROAS-led measurement model.",
    tone: "from-sky-100 via-blue-100 to-indigo-200",
    channel: "Search · PMax · YouTube · Shopping · Demand Gen",
    whatYouGet: [
      "Account audit and growth roadmap in week one",
      "Conversion tracking rebuilt with GA4 + enhanced conversions",
      "Keyword research segmented by buying stage",
      "SKAG-light or theme-based ad group structure",
      "Responsive search ads with dedicated copy testing",
      "Performance Max with audience signals and asset groups",
      "Bid strategy and budget pacing reviewed weekly",
      "Negative keyword sculpting and search-term hygiene",
      "Geo, device and dayparting experiments",
      "Live Looker Studio dashboard with weekly written notes",
    ],
    process: [
      { n: "01", t: "Audit", d: "Account, tracking and competitive teardown. We benchmark CPA, CTR, CVR and impression share." },
      { n: "02", t: "Architecture", d: "Rebuild structure, naming and conversions so every dollar is attributable to an outcome." },
      { n: "03", t: "Launch", d: "New campaigns shipped in two-week sprints, with copy, creative and landing pages reviewed end-to-end." },
      { n: "04", t: "Optimize", d: "Weekly experiments on bidding, audiences, creative and landing pages. Monthly strategy review." },
    ],
    deliverables: [
      "Custom Looker Studio dashboard",
      "Weekly written performance notes",
      "Monthly strategy & roadmap call",
      "Creative + copy iteration backlog",
      "Quarterly business review",
    ],
    metrics: [
      { label: "Avg ROAS lift in 90 days", value: "2.4×" },
      { label: "Median CPA reduction", value: "−38%" },
      { label: "Accounts managed", value: "120+" },
    ],
    faqs: [
      { q: "What ad spend do you typically work with?", a: "Our sweet spot is $10k–$250k/month in media. Below that, we'll honestly tell you whether paid search is the right channel yet." },
      { q: "Do you handle landing pages?", a: "Yes. Most of our wins come from page experiments, not bid tweaks. We design and build dedicated landers for every major campaign." },
      { q: "Who owns the ad account?", a: "You do — always. We work inside your Google Ads MCC and you keep full admin access on day one." },
    ],
  },
  {
    slug: "meta-ads",
    number: "02",
    name: "Meta Ads",
    short: "Facebook and Instagram campaigns built around creative testing at scale.",
    hero: "Win on Meta with creative, not bids.",
    intro:
      "On Meta, creative is the single biggest lever — and most accounts don't test enough of it. We run a creative-first system: 8–20 fresh concepts a month, statistical winner selection, and a CBO structure that lets winners scale without breaking attribution.",
    tone: "from-pink-100 via-rose-200 to-fuchsia-200",
    channel: "Facebook · Instagram · Messenger · Reels · Advantage+",
    whatYouGet: [
      "Pixel and Conversions API setup with deduplication",
      "Creative strategy doc — angles, hooks, formats, CTAs",
      "8–20 fresh creative concepts per month",
      "Static, motion and UGC-style production",
      "Advantage+ Shopping and ASC+ campaign builds",
      "Audience research and lookalike testing",
      "Retargeting funnel with offer + content layers",
      "Statistical creative testing framework",
      "Attribution checks against GA4 and your back-end",
      "Weekly performance + creative review",
    ],
    process: [
      { n: "01", t: "Discovery", d: "We pull 90 days of data, audit creative, and rebuild your tracking on Pixel + CAPI." },
      { n: "02", t: "Creative system", d: "Hook bank, concept library and a production pipeline you can plug into forever." },
      { n: "03", t: "Test & scale", d: "Two creative test cycles per month. Winners scale into Advantage+ and broad audiences." },
      { n: "04", t: "Compound", d: "Monthly review of incrementality, blended ROAS and customer LTV, not just last-click." },
    ],
    deliverables: [
      "Creative concept library (live doc)",
      "Monthly production: 8–20 assets",
      "Looker Studio reporting",
      "Weekly Loom walkthrough",
      "Quarterly incrementality test",
    ],
    metrics: [
      { label: "Avg blended ROAS lift", value: "+62%" },
      { label: "Creative concepts shipped/yr", value: "1,400+" },
      { label: "Hook test win rate", value: "1-in-7" },
    ],
    faqs: [
      { q: "Do you produce the creative?", a: "Yes. Static, motion graphics and edited UGC are included. For original UGC shoots we work with a vetted creator network." },
      { q: "How do you measure success when iOS broke attribution?", a: "We triangulate Pixel + CAPI, GA4, your back-end, and quarterly geo-lift or holdout tests. Blended efficiency is the north star." },
      { q: "Do you work with B2B on Meta?", a: "Selectively. Meta works for B2B when there's a clear lead magnet and a long content engine. We'll tell you up front if it's the wrong fit." },
    ],
  },
  {
    slug: "tiktok-ads",
    number: "03",
    name: "TikTok Ads",
    short: "Native, creator-led campaigns that win attention in the feed and convert it.",
    hero: "Make ads that feel like the For You page.",
    intro:
      "TikTok rewards content that earns attention. We build a native creative engine: trend-aware hooks, vertical-first edits, creator partnerships, and Spark Ads that scale your top-performing organic posts into paid wins.",
    tone: "from-zinc-100 via-stone-200 to-neutral-300",
    channel: "TikTok Ads Manager · Spark Ads · Creator Marketplace · Shop Ads",
    whatYouGet: [
      "TikTok Pixel + Events API setup with web/app deduping",
      "Creator brief and creative concept matrix",
      "Spark Ads sourcing from organic + creator partners",
      "Hook-first editing system (3-second test)",
      "Campaign structure: prospecting, retargeting, branded",
      "Smart+ campaign testing where eligible",
      "Weekly creative refresh cadence (creative fatigue control)",
      "TikTok Shop integration for ecommerce brands",
      "Cross-channel attribution against Meta, Google and back-end",
      "Trend monitoring and rapid-response briefs",
    ],
    process: [
      { n: "01", t: "Trend audit", d: "We map your category on TikTok — what's working, what's saturated, and where attention is moving." },
      { n: "02", t: "Creator pipeline", d: "Source 4–10 creators per month aligned with your brand voice and target audience." },
      { n: "03", t: "Iterate weekly", d: "Hook tests, edit tests, CTA tests. Refresh creative every 7–10 days to fight fatigue." },
      { n: "04", t: "Scale & cross-post", d: "Top performers get extended into Reels, Shorts and Spark Ads for compounding reach." },
    ],
    deliverables: [
      "Creator brief library",
      "10+ ad concepts per month",
      "Spark Ads management",
      "Weekly creative report",
      "Trend response in <48h",
    ],
    metrics: [
      { label: "Median CPM vs Meta", value: "−41%" },
      { label: "3-sec view rate", value: "62%" },
      { label: "Creators in network", value: "300+" },
    ],
    faqs: [
      { q: "Is TikTok worth it for older audiences?", a: "The 25–45 segment on TikTok is the fastest-growing on the platform. For most consumer brands the answer is yes — for B2B, selectively." },
      { q: "Do we need to film original content?", a: "Ideally yes — even iPhone-shot, founder-led video performs. We can also work with creator-shot content exclusively if needed." },
      { q: "Can you run TikTok Shop ads?", a: "Yes. We manage Shop Ads, GMV Max and live shopping campaigns for eligible brands." },
    ],
  },
  {
    slug: "seo",
    number: "04",
    name: "SEO",
    short: "Technical, content and link strategy that compounds organic revenue, not just rankings.",
    hero: "Own the search results that matter.",
    intro:
      "Most SEO agencies optimize for vanity rankings. We optimize for revenue. Topical authority, technical excellence and editorial content built around the queries that move pipeline — measured against organic-attributed deals, not impressions.",
    tone: "from-emerald-100 via-teal-100 to-cyan-200",
    channel: "Technical SEO · Content · Digital PR · Programmatic · Local",
    whatYouGet: [
      "Technical audit: crawl, indexation, Core Web Vitals, schema",
      "Topical map and content cluster strategy",
      "Keyword research aligned to buying intent",
      "On-page optimization templates and SOPs",
      "Content production: 4–12 long-form articles/month",
      "Editorial calendar and internal linking system",
      "Schema markup (Org, Product, FAQ, How-to, Article)",
      "Authority building via digital PR and HARO",
      "Programmatic SEO for scalable categories",
      "Monthly organic revenue reporting via GA4",
    ],
    process: [
      { n: "01", t: "Foundations", d: "Technical fixes, site speed, indexation and schema deployed in the first 30 days." },
      { n: "02", t: "Topical map", d: "We map every cluster you should own, prioritized by traffic value and competitive gap." },
      { n: "03", t: "Content engine", d: "Production pipeline with briefs, drafts, edits and SME review — built to ship weekly." },
      { n: "04", t: "Authority", d: "Digital PR, partnerships and link earning to lift the entire domain over 6–12 months." },
    ],
    deliverables: [
      "Quarterly technical audit",
      "Monthly content shipped & published",
      "Live keyword + ranking dashboard",
      "Backlink and PR report",
      "Competitive gap analysis",
    ],
    metrics: [
      { label: "Avg organic traffic at 12 mo", value: "+184%" },
      { label: "Pages ranking top-10", value: "8,400+" },
      { label: "Authority links earned", value: "1,200/yr" },
    ],
    faqs: [
      { q: "How long until SEO works?", a: "Technical wins land in 30–60 days. Content compounds from month 4 onward. We share an honest 12-month forecast in the proposal." },
      { q: "Do you write the content?", a: "Yes. In-house editorial team plus a vetted SME network for niche industries (legal, fintech, healthcare, B2B SaaS)." },
      { q: "What about AI-written content?", a: "We use AI for research and outlines, never for finished copy. Google's helpful-content system rewards genuine expertise." },
    ],
  },
  {
    slug: "google-business-profile",
    number: "05",
    name: "Google Business Profile & Local SEO",
    short: "Dominate Maps, the Local Pack and 'near me' searches in every market you serve.",
    hero: "Show up first when buyers are nearby.",
    intro:
      "If you serve customers in the real world — clinics, agencies, restaurants, multi-location retail — your Google Business Profile is your most valuable storefront. We optimize, manage and scale it so your locations win the Local Pack week after week.",
    tone: "from-amber-100 via-orange-200 to-rose-200",
    channel: "Google Business Profile · Maps · Apple Business Connect · Bing Places",
    whatYouGet: [
      "Profile claim, verification and recovery (suspensions handled)",
      "Category, service-area and attribute optimization",
      "NAP (name, address, phone) consistency across the web",
      "Citation building on top 60 directories",
      "Geo-tagged photo and product uploads (weekly)",
      "Google Posts schedule (offers, events, updates)",
      "Review acquisition system and response management",
      "Q&A seeding with high-intent questions",
      "Local landing pages built per location",
      "Local Pack rank tracking by grid (geo-grid reporting)",
    ],
    process: [
      { n: "01", t: "Audit & fix", d: "Claim profiles, fix duplicates, resolve suspensions, align NAP across the web." },
      { n: "02", t: "Optimize", d: "Categories, services, products, attributes, photos and posts dialed in for every location." },
      { n: "03", t: "Activate", d: "Reviews flywheel, Q&A seeding and weekly post cadence to feed Google fresh signals." },
      { n: "04", t: "Scale", d: "Multi-location playbooks, local landing pages and PR for compounding local authority." },
    ],
    deliverables: [
      "Geo-grid rank tracking dashboard",
      "Monthly review acquisition report",
      "Weekly Google Posts published",
      "Citation audit & cleanup",
      "Local landing page library",
    ],
    metrics: [
      { label: "Avg Local Pack visibility", value: "+212%" },
      { label: "Locations under management", value: "1,800+" },
      { label: "Avg new reviews/mo per location", value: "18" },
    ],
    faqs: [
      { q: "We have a suspended profile — can you help?", a: "Yes. Reinstatements are one of our specialties. We've recovered profiles across regulated industries (medical, legal, financial) with a 92% success rate." },
      { q: "Do you handle multi-location brands?", a: "Yes. From 5 locations to 500+. We build location-aware reporting and roll-up dashboards for franchise and corporate stakeholders." },
      { q: "What about Apple Maps and Bing?", a: "Included. Apple Business Connect and Bing Places are part of every engagement, plus the major data aggregators." },
    ],
  },
];

export const findService = (slug: string) => services.find((s) => s.slug === slug);
