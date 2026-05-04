import Link from "next/link";
import { Reveal, Stagger, staggerItem } from "@/components/site/Reveal";
import { services } from "@/lib/services";
import { caseStudies } from "@/lib/caseStudies";

export default function Home() {
  const stats = [
    { n: "$48M+", l: "Ad spend managed" },
    { n: "4.8×", l: "Avg ROAS" },
    { n: "−67%", l: "Avg CPL" },
    { n: "12+", l: "Countries" },
  ];
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-12 pb-20">
        <Reveal>
          <div className="text-xs uppercase tracking-widest text-subtle mb-4">Performance marketing pod</div>
          <h1 className="font-display text-5xl md:text-8xl tracking-tight leading-[0.95]">
            Marketing that <span className="text-subtle/70">compounds.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-subtle">
            Stack Media is a senior media-buying pod for ambitious brands. Meta, Google, TikTok, SEO & GBP — engineered for revenue, not vanity metrics.
          </p>
          <div className="mt-8 flex gap-3">
            <Link href="/contact" className="rounded-full bg-foreground text-background px-6 py-3 text-sm hover:opacity-90 transition">Apply for a free audit ↗</Link>
            <Link href="/results" className="rounded-full border border-line px-6 py-3 text-sm hover:bg-muted transition">See results</Link>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-line bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-14 grid md:grid-cols-4 gap-10">
          {stats.map(s => (
            <div key={s.l}>
              <div className="font-display text-5xl tracking-tight">{s.n}</div>
              <div className="text-subtle text-sm mt-2">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <div className="text-xs uppercase tracking-widest text-subtle mb-3">Services</div>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight max-w-3xl mb-12">Channels we live in.</h2>
        </Reveal>
        <Stagger>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-3xl overflow-hidden">
            {services.map(s => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="bg-background p-8 hover:bg-muted/40 transition group">
                <div className="text-xs text-subtle">{s.number}</div>
                <h3 className="font-display text-2xl mt-2">{s.name}</h3>
                <p className="text-sm text-foreground/75 mt-3">{s.short}</p>
                <div className="text-xs text-subtle mt-5 opacity-0 group-hover:opacity-100 transition">Read more →</div>
              </Link>
            ))}
          </div>
        </Stagger>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <Reveal>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight mb-12">Recent wins.</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.slice(0, 4).map(c => (
            <article key={c.slug} className={`rounded-3xl border border-line p-8 bg-gradient-to-br ${c.tone}`}>
              <div className="text-xs uppercase tracking-widest text-foreground/70">{c.tag}</div>
              <h3 className="font-display text-2xl mt-3">{c.title}</h3>
              <div className="grid grid-cols-3 gap-4 mt-5 pt-5 border-t border-foreground/10">
                {c.metrics.map(m => (
                  <div key={m.label}>
                    <div className="font-display text-2xl">{m.value}</div>
                    <div className="text-xs text-foreground/70">{m.label}</div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="rounded-[2rem] border border-line bg-card p-10 md:p-14 text-center">
          <h2 className="font-display text-4xl md:text-5xl tracking-tight">Ready to compound?</h2>
          <p className="text-subtle mt-3 max-w-xl mx-auto">Apply for a free audit. We'll teardown your account and show what's possible.</p>
          <Link href="/contact" className="mt-7 inline-flex rounded-full bg-foreground text-background px-6 py-3 text-sm hover:opacity-90 transition">Apply for a free audit ↗</Link>
        </div>
      </section>
    </>
  );
}
