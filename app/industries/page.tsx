import Link from "next/link";
import { industries } from "@/lib/industries";
import { Reveal } from "@/components/site/Reveal";

export const metadata = { title: "Industries — Stack Media", description: "Verticals we know inside out." };

export default function IndustriesIndex() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <div className="text-xs uppercase tracking-widest text-subtle mb-4">Industries</div>
        <h1 className="font-display text-5xl md:text-7xl tracking-tight mb-12">Verticals we know <span className="text-subtle/70">inside out.</span></h1>
      </Reveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map(i => (
          <Link key={i.slug} href={`/industries/${i.slug}`} className="rounded-3xl border border-line p-8 hover:bg-muted/40 transition">
            <h2 className="font-display text-2xl">{i.name}</h2>
            <p className="text-sm text-foreground/75 mt-3">{i.short}</p>
            <div className="text-xs text-subtle mt-5">{i.channels.join(" · ")}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
