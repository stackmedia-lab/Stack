import Link from "next/link";
import { Reveal } from "@/components/site/Reveal";
export const metadata = { title: "Pricing — Stack Media", description: "Transparent retainers for serious operators." };

const plans = [
  { n: "Launch", p: "$3,500/mo", d: "1 channel · 1 strategist", f: ["Account audit", "Campaign builds", "Weekly reporting", "Monthly call"] },
  { n: "Scale", p: "$6,500/mo", d: "2–3 channels · pod", f: ["Everything in Launch", "Creative production (8–12/mo)", "Server-side tracking", "Bi-weekly call"] },
  { n: "Compound", p: "Custom", d: "Multi-channel · dedicated pod", f: ["Everything in Scale", "Programmatic SEO", "Quarterly QBR", "Slack channel access"] },
];

export default function Pricing() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <div className="text-xs uppercase tracking-widest text-subtle mb-4">Pricing</div>
        <h1 className="font-display text-5xl md:text-7xl tracking-tight mb-12">Transparent retainers.</h1>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map(p => (
          <div key={p.n} className="rounded-3xl border border-line p-8 bg-card">
            <div className="font-display text-2xl">{p.n}</div>
            <div className="font-display text-4xl mt-2">{p.p}</div>
            <div className="text-xs text-subtle mt-1">{p.d}</div>
            <ul className="mt-6 space-y-2 text-sm">
              {p.f.map(x => <li key={x} className="flex gap-2"><span className="text-success">✓</span>{x}</li>)}
            </ul>
            <Link href="/contact" className="mt-6 inline-flex rounded-full bg-foreground text-background px-5 py-2 text-sm">Get started ↗</Link>
          </div>
        ))}
      </div>
    </section>
  );
}
