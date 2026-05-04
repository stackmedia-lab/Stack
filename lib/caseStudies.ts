export type CaseStudy = {
  slug: string;
  tag: string;
  region: string;
  title: string;
  problem: string;
  actions: string[];
  metrics: { value: string; label: string }[];
  tone: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "shopify-roas",
    tag: "eCommerce Win",
    region: "USA — Shopify Brand",
    title: "From 1.4× to 4.1× ROAS in 60 days",
    problem:
      "A US-based Shopify brand was spending $15,000/month at a 1.4× ROAS. No audience segmentation, broken tracking and one generic creative for every traffic temperature.",
    actions: [
      "Rebuilt campaign structure into cold, warm and hot segments",
      "Installed Meta Conversions API and Triple Whale for accurate attribution",
      "Launched audience-specific creatives — testimonials for warm, urgency for hot",
      "Built full retargeting for video viewers and cart abandoners",
    ],
    metrics: [
      { value: "4.1×", label: "ROAS achieved" },
      { value: "−58%", label: "Cost per purchase" },
      { value: "$87K", label: "Extra monthly revenue" },
    ],
    tone: "from-sky-100 via-blue-100 to-indigo-200",
  },
  {
    slug: "uk-leadgen",
    tag: "Lead Gen Win",
    region: "UK — Service Business",
    title: "CPL dropped from £45 to £9 in 3 weeks",
    problem:
      "A UK service business was running Facebook Ads at a £45 cost per lead — 3× over target. Generic ads, stock images and traffic sent to the homepage.",
    actions: [
      "Rewrote all ad copy to focus directly on customer pain points",
      "Replaced stock images with UGC-style authentic creatives",
      "Switched from broad interests to custom lookalike audiences",
      "Built a dedicated landing page with message match to the ad",
    ],
    metrics: [
      { value: "£9", label: "Cost per lead" },
      { value: "−80%", label: "CPL reduction" },
      { value: "3 wks", label: "Time to results" },
    ],
    tone: "from-emerald-100 via-teal-100 to-cyan-200",
  },
  {
    slug: "au-google-ads",
    tag: "Google Ads Win",
    region: "Australia — Home Services",
    title: "$320 → $67 AUD cost per lead",
    problem:
      "An Australian home services company was spending $8,000 AUD/month on Google Ads with a $320 CPL. Broad-match keywords and zero call tracking were draining the budget.",
    actions: [
      "Separated each service into dedicated campaigns with specific ad groups",
      "Added 180+ negative keywords before relaunch",
      "Built service-specific landing pages with click-to-call tracking",
      "Added Google Display retargeting for website visitors",
    ],
    metrics: [
      { value: "$67", label: "AUD CPL" },
      { value: "94", label: "Leads / month" },
      { value: "+40%", label: "Close-rate lift" },
    ],
    tone: "from-amber-100 via-orange-200 to-rose-200",
  },
  {
    slug: "uae-restaurant",
    tag: "Local Business Win",
    region: "UAE — Restaurant",
    title: "3× online orders on the same budget",
    problem:
      "A UAE restaurant was running Meta Ads with zero online orders. Wrong objective, no pixel and traffic sent to the homepage.",
    actions: [
      "Switched to Conversions campaign with correct Meta Pixel tracking",
      "Built a direct-order landing page with menu and clear CTA",
      "Created warm retargeting audiences from website visitors",
      "Added a limited-time offer to create urgency in the creative",
    ],
    metrics: [
      { value: "3×", label: "Online orders" },
      { value: "Same", label: "Budget used" },
      { value: "30 days", label: "Time to results" },
    ],
    tone: "from-rose-100 via-pink-100 to-fuchsia-200",
  },
  {
    slug: "tiktok-dtc",
    tag: "TikTok Win",
    region: "Australia — DTC Brand",
    title: "TikTok became the #1 acquisition channel in 6 weeks",
    problem:
      "A DTC brand had never tested TikTok Ads. Within 6 weeks TikTok became their lowest-CPA channel — outperforming two years of Meta Ads history.",
    actions: [
      "Developed a UGC hook-testing framework with 5 creative angles",
      "Launched broad targeting and let TikTok's algorithm learn",
      "Refreshed top performers weekly to prevent fatigue",
      "Scaled budget +20% every 3 days on winning ad groups",
    ],
    metrics: [
      { value: "#1", label: "Acquisition channel" },
      { value: "−42%", label: "CPA vs Meta" },
      { value: "6 wks", label: "Time to scale" },
    ],
    tone: "from-zinc-100 via-stone-200 to-neutral-300",
  },
  {
    slug: "coaching-automation",
    tag: "Automation Win",
    region: "Canada — Coaching Business",
    title: "Close rate +40% with CRM automation",
    problem:
      "A Canadian coaching business generated leads from Meta Ads but lost 70% because follow-up was manual and average response time was 6+ hours.",
    actions: [
      "Built instant SMS follow-up triggering within 90 seconds of submission",
      "Created a 7-day automated email + SMS nurture sequence",
      "Set up automated calendar booking inside the pipeline",
      "Integrated Meta Lead Forms for zero-friction lead capture",
    ],
    metrics: [
      { value: "+40%", label: "Close rate" },
      { value: "90s", label: "Lead response" },
      { value: "−20h", label: "Admin / week saved" },
    ],
    tone: "from-violet-100 via-purple-100 to-indigo-200",
  },
];
