import { Reveal } from "@/components/site/Reveal";
export const metadata = { title: "Clients — Stack Media", description: "Industries and brands we serve." };

const verticals = ["Ecommerce", "B2B SaaS", "Healthcare", "Finance", "Local services", "Education", "Hospitality", "DTC"];
const testimonials = [
  { q: "Stack Media transformed our acquisition. ROAS doubled in 60 days.", a: "Sarah J.", r: "CMO, DTC brand" },
  { q: "Best agency we've worked with — they actually own the metric.", a: "Marcus T.", r: "Founder, B2B SaaS" },
  { q: "TikTok went from $0 to our #1 channel in 6 weeks.", a: "Emma L.", r: "Growth Lead" },
];

export default function Clients() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <div className="text-xs uppercase tracking-widest text-subtle mb-4">Clients</div>
          <h1 className="font-display text-5xl md:text-7xl tracking-tight mb-12">Brands we grow.</h1>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line border border-line rounded-3xl overflow-hidden">
          {verticals.map(v => <div key={v} className="bg-background p-8 font-display text-xl">{v}</div>)}
        </div>
      </section>
      <section className="border-y border-line bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <blockquote key={t.a} className="rounded-3xl border border-line p-8 bg-background">
              <p className="font-display text-xl">"{t.q}"</p>
              <footer className="mt-6 text-sm text-subtle">{t.a} — {t.r}</footer>
            </blockquote>
          ))}
        </div>
      </section>
    </>
  );
}
