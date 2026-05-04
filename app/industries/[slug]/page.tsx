import { notFound } from "next/navigation";
import Link from "next/link";
import { industries } from "@/lib/industries";
import { Reveal } from "@/components/site/Reveal";

export function generateStaticParams() { return industries.map(i => ({ slug: i.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }) {
  const i = industries.find(x => x.slug === params.slug);
  return i ? { title: `${i.name} — Stack Media`, description: i.short } : {};
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const i = industries.find(x => x.slug === params.slug);
  if (!i) notFound();
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <div className="text-xs uppercase tracking-widest text-subtle mb-4">Industry</div>
          <h1 className="font-display text-5xl md:text-8xl tracking-tight">{i.name}</h1>
          <p className="text-xl text-subtle mt-6 max-w-3xl">{i.short}</p>
        </Reveal>
      </section>
      <section className="border-y border-line bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-3 gap-10">
          {i.metrics.map(m => (
            <div key={m.label}>
              <div className="font-display text-5xl tracking-tight">{m.value}</div>
              <div className="text-subtle text-sm mt-2">{m.label}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-lg text-foreground/85 max-w-3xl">{i.long}</p>
        <div className="mt-8 flex flex-wrap gap-2">
          {i.channels.map(c => <span key={c} className="rounded-full border border-line px-3 py-1 text-xs">{c}</span>)}
        </div>
        <Link href="/contact" className="mt-10 inline-flex rounded-full bg-foreground text-background px-6 py-3 text-sm">Talk to us ↗</Link>
      </section>
    </>
  );
}
