import { Reveal } from "@/components/site/Reveal";
export const metadata = { title: "FAQ — Stack Media", description: "Answers to common questions." };

const faqs = [
  { q: "What's the minimum ad spend?", a: "Sweet spot is $10k–$250k/month. Below that, we'll be honest about whether paid media is the right channel yet." },
  { q: "How long is the contract?", a: "Month-to-month. We earn the next month every month." },
  { q: "Who owns the ad accounts?", a: "You do — always. We work inside your accounts and you keep full admin." },
  { q: "Do you produce creative?", a: "Yes. Static, motion and edited UGC are included. Original UGC shoots via creator network." },
  { q: "How do you report?", a: "Live Looker Studio + weekly written notes + monthly strategy call." },
  { q: "Do you do SEO?", a: "Yes — technical, content, digital PR and local. Paired with paid for compounding effect." },
  { q: "What about Google Business Profile?", a: "Full management including suspensions, citations, reviews and geo-grid tracking." },
  { q: "Do you work with B2B?", a: "Yes — particularly SaaS with clear ICP and pipeline measurement." },
];

export default function FAQ() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <div className="text-xs uppercase tracking-widest text-subtle mb-4">FAQ</div>
        <h1 className="font-display text-5xl md:text-7xl tracking-tight mb-12">Common questions.</h1>
      </Reveal>
      <div className="space-y-4">
        {faqs.map(f => (
          <details key={f.q} className="rounded-2xl border border-line p-6 bg-card">
            <summary className="font-display text-xl cursor-pointer">{f.q}</summary>
            <p className="mt-3 text-foreground/80">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
