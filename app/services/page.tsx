import Link from "next/link";
import { services } from "@/lib/services";
import { Reveal } from "@/components/site/Reveal";

export const metadata = { title: "Services — Stack Media", description: "Paid media, SEO and local marketing services." };

export default function ServicesIndex() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <div className="text-xs uppercase tracking-widest text-subtle mb-4">Services</div>
        <h1 className="font-display text-5xl md:text-7xl tracking-tight mb-12">Five channels. One pod.</h1>
      </Reveal>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map(s => (
          <Link key={s.slug} href={`/services/${s.slug}`}
            className={`rounded-3xl border border-line p-8 bg-gradient-to-br ${s.tone} hover:scale-[1.01] transition`}>
            <div className="text-xs uppercase tracking-widest">{s.number} · {s.channel}</div>
            <h2 className="font-display text-3xl md:text-4xl mt-4">{s.name}</h2>
            <p className="mt-3 text-foreground/80">{s.short}</p>
            <div className="mt-6 text-sm">Read more →</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
