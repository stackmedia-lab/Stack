import { groq } from "next-sanity";

export const SERVICES_Q = groq`*[_type == "service"] | order(orderRank asc){
  _id, title, "slug": slug.current, number, short, channel, hero, intro, tone,
  whatYouGet, deliverables, metrics, process, faqs
}`;

export const SERVICE_BY_SLUG_Q = groq`*[_type == "service" && slug.current == $slug][0]{
  _id, title, "slug": slug.current, number, short, channel, hero, intro, tone,
  whatYouGet, deliverables, metrics, process, faqs
}`;

export const INDUSTRIES_Q = groq`*[_type == "industry"] | order(orderRank asc){
  _id, title, "slug": slug.current, tagline, intro, "image": image.asset->url,
  challenges, playbook, kpis
}`;

export const INDUSTRY_BY_SLUG_Q = groq`*[_type == "industry" && slug.current == $slug][0]{
  _id, title, "slug": slug.current, tagline, intro, "image": image.asset->url,
  challenges, playbook, kpis
}`;

export const CASE_STUDIES_Q = groq`*[_type == "caseStudy"] | order(_createdAt desc){
  _id, title, "slug": slug.current, tag, region, problem, actions, metrics, tone
}`;

export const TESTIMONIALS_Q = groq`*[_type == "testimonial"] | order(_createdAt desc){
  _id, quote, author, role, company, "avatar": avatar.asset->url
}`;

export const FAQ_Q = groq`*[_type == "faq"] | order(orderRank asc){
  _id, question, answer, category
}`;

export const POSTS_Q = groq`*[_type == "post"] | order(publishedAt desc){
  _id, title, "slug": slug.current, excerpt, publishedAt, "cover": cover.asset->url
}`;

export const POST_BY_SLUG_Q = groq`*[_type == "post" && slug.current == $slug][0]{
  _id, title, "slug": slug.current, excerpt, publishedAt, body, "cover": cover.asset->url
}`;

export const SETTINGS_Q = groq`*[_type == "siteSettings"][0]{
  brandName, tagline, contactEmail, contactPhone, address,
  socials, navLinks, footerText
}`;
