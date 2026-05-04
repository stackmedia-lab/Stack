# Stack Media — Next.js 15 + Sanity + Vercel

Performance marketing agency website. Server-rendered with Next.js App Router, content powered by Sanity Studio (mounted at `/studio`), deployed on Vercel.

## Quick start

```bash
npm install
cp .env.example .env.local
# Fill in NEXT_PUBLIC_SANITY_PROJECT_ID + dataset
npm run dev
```

Visit `http://localhost:3000` — and `http://localhost:3000/studio` for the embedded CMS.

## Sanity setup

1. Create a free project at https://sanity.io/manage
2. Copy the **Project ID** into `.env.local` as `NEXT_PUBLIC_SANITY_PROJECT_ID`
3. Add your domain to **API → CORS origins** (e.g. `http://localhost:3000`, your Vercel URL)
4. Open `/studio` and start adding content. Schemas:
   - `service` — paid media services (Google, Meta, TikTok, SEO, GBP)
   - `industry` — verticals
   - `caseStudy` — wins with metrics
   - `testimonial`, `faq`, `post`, `siteSettings`

> Note: pages currently render from `lib/*.ts` files (static). To make them Sanity-driven, swap the imports for `sanityClient.fetch(SERVICES_Q)` etc. — queries are ready in `sanity/lib/queries.ts`.

## Deploy to Vercel

1. Push to GitHub
2. Import the repo on https://vercel.com/new
3. Add the same env vars (`NEXT_PUBLIC_SANITY_*`)
4. Deploy — done

## Stack

- Next.js 15 (App Router, RSC)
- Tailwind CSS 3
- Framer Motion (Reveal + Stagger animations)
- Sanity 3 (embedded Studio at `/studio`)
- TypeScript strict

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/services` · `/services/[slug]` | Services index + detail (5 channels) |
| `/industries` · `/industries/[slug]` | Verticals |
| `/results` | Case studies + KPIs |
| `/process` | 4-phase methodology |
| `/why-us` | Differentiators |
| `/clients` · `/pricing` · `/faq` · `/about` · `/contact` | Standard |
| `/studio` | Sanity Studio |
