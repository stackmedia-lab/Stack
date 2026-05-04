import Link from "next/link";
import { caseStudies } from "@/lib/caseStudies";
import { Reveal, Stagger } from "@/components/site/Reveal";

export const metadata = { title: "Results — Stack Media", description: "Real campaign results across paid media, SEO and local." };

const headlineStats = [
  { n: "$48M+", l: "Total ad spend managed" },
  { n: "−67%", l: "Average CPL reduction" },
  { n: "4.8×", l: "Average ROAS delivered" },
  { n: "3.2×", l: "Average revenue increase" },
];

export default function Results() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-12 pb-16">
        <Reveal>
          <div className="text-xs uppercase tracking-widest text-subtle mb-4">Proven results</div>
          <h1 className="font-display text-5xl md:text-8xl tracking-tight">Real numbers. <span className="text-subtle/70">Real growth.</span></h1>
          <p className="mt-6 max-w-2xl text-lg text-subtle">Every result was achieved through systematic strategy, accurate tracking and disciplined execution.</p>
        </Reveal>
      </section>
      <section className="border-y border-line bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-14 grid md:grid-cols-4 gap-10">
          {headlineStats.map(s => (
            <div key={s.l}><div className="font-display text-5xl tracking-tight">{s.n}</div><div className="text-subtle text-sm mt-2">{s.l}</div></div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Stagger>
          <div className="space-y-6">
            {caseStudies.map(c => (
              <article key={c.slug} className="rounded-3xl border border-line bg-card overflow-hidden grid md:grid-cols-12">
                <div className={`md:col-span-4 bg-gradient-to-br ${c.tone} p-8 flex flex-col justify-between min-h-56`}>
                  <div className="text-xs uppercase tracking-widest text-foreground/70">✦ {c.tag}</div>
                  <div className="font-display text-lg mt-6">{c.region}</div>
                </div>
                <div className="md:col-span-8 p-8 md:p-10">
                  <h3 className="font-display text-2xl md:text-3xl">{c.title}</h3>
                  <p className="mt-3 text-subtle">{c.problem}</p>
                  <ul className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                    {c.actions.map(a => <li key={a} className="flex gap-2"><span className="text-success">✓</span>{a}</li>)}
                  </ul>
                  <div className="mt-6 grid grid-cols-3 gap-4 pt-6 border-t border-line">
                    {c.metrics.map(m => (
                      <div key={m.label}><div className="font-display text-2xl">{m.value}</div><div className="text-xs text-subtle mt-1">{m.label}</div></div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Stagger>
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="rounded-[2rem] border border-line bg-card p-10 md:p-14 text-center">
          <h2 className="font-display text-4xl md:text-5xl">Want results like these?</h2>
          <Link href="/contact" className="mt-7 inline-flex rounded-full bg-foreground text-background px-6 py-3 text-sm">Apply for a free audit ↗</Link>
        </div>
      </section>
    </>
  );
}
