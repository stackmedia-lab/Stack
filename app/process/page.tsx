import { Reveal } from "@/components/site/Reveal";
export const metadata = { title: "Process — Stack Media", description: "Our 4-phase methodology." };

const phases = [
  { n: "01", t: "Diagnose", d: "Account, tracking and competitive teardown. We benchmark your CPA, CTR, ROAS and pipeline efficiency vs category." },
  { n: "02", t: "Architect", d: "Rebuild structure, conversions and creative system so every dollar is attributable to revenue, not vanity metrics." },
  { n: "03", t: "Activate", d: "Two-week sprints. Creative produced, campaigns launched, landing pages shipped. We move fast and document everything." },
  { n: "04", t: "Compound", d: "Weekly experiments, monthly strategy reviews and quarterly business reviews. Wins become repeatable systems." },
];

export default function Process() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <div className="text-xs uppercase tracking-widest text-subtle mb-4">Process</div>
        <h1 className="font-display text-5xl md:text-7xl tracking-tight mb-16">Four phases. <span className="text-subtle/70">Compound forever.</span></h1>
      </Reveal>
      <div className="grid md:grid-cols-2 gap-6">
        {phases.map(p => (
          <div key={p.n} className="rounded-3xl border border-line p-10 bg-card">
            <div className="text-xs text-subtle">{p.n}</div>
            <div className="font-display text-4xl mt-2">{p.t}</div>
            <p className="mt-4 text-foreground/80">{p.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
