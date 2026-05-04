import { notFound } from "next/navigation";
import Link from "next/link";
import { services, findService } from "@/lib/services";
import { Reveal, Stagger, staggerItem } from "@/components/site/Reveal";

export function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const s = findService(params.slug);
  if (!s) return {};
  return { title: `${s.name} — Stack Media`, description: s.short };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const s = findService(params.slug);
  if (!s) notFound();
  return (
    <>
      <section className={`bg-gradient-to-br ${s.tone}`}>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <div className="text-xs uppercase tracking-widest text-foreground/70">{s.number} · {s.channel}</div>
            <h1 className="font-display text-5xl md:text-8xl tracking-tight mt-4">{s.name}</h1>
            <p className="text-2xl md:text-3xl font-display mt-6 max-w-3xl">{s.hero}</p>
            <p className="mt-6 max-w-2xl text-foreground/80">{s.intro}</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-3 gap-10">
        {s.metrics.map(m => (
          <div key={m.label}>
            <div className="font-display text-5xl tracking-tight">{m.value}</div>
            <div className="text-subtle text-sm mt-2">{m.label}</div>
          </div>
        ))}
      </section>

      <section className="border-y border-line bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-4xl md:text-5xl mb-10">What you get.</h2>
          <Stagger>
            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3">
              {s.whatYouGet.map(item => (
                <li key={item} className="flex gap-3 text-foreground/85"><span className="text-success mt-1">✓</span>{item}</li>
              ))}
            </ul>
          </Stagger>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-4xl md:text-5xl mb-10">Process.</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {s.process.map(p => (
            <div key={p.n} className="rounded-3xl border border-line p-6">
              <div className="text-xs text-subtle">{p.n}</div>
              <div className="font-display text-2xl mt-2">{p.t}</div>
              <p className="text-sm text-foreground/75 mt-3">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-4xl mb-8">FAQs.</h2>
          <div className="space-y-4">
            {s.faqs.map(f => (
              <details key={f.q} className="rounded-2xl border border-line p-5 bg-background">
                <summary className="font-display text-lg cursor-pointer">{f.q}</summary>
                <p className="mt-3 text-foreground/80">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h2 className="font-display text-4xl md:text-5xl">Want this for your brand?</h2>
        <Link href="/contact" className="mt-6 inline-flex rounded-full bg-foreground text-background px-6 py-3 text-sm">Apply for a free audit ↗</Link>
      </section>
    </>
  );
}
