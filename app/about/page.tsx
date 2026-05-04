import { Reveal } from "@/components/site/Reveal";
export const metadata = { title: "About — Stack Media", description: "A senior media-buying pod." };
export default function About() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <Reveal>
        <div className="text-xs uppercase tracking-widest text-subtle mb-4">About</div>
        <h1 className="font-display text-5xl md:text-7xl tracking-tight mb-10">Built by operators, for operators.</h1>
        <div className="prose prose-lg max-w-none text-foreground/85 space-y-6">
          <p>Stack Media is a senior pod of media buyers, SEOs and creative strategists who've spent the last decade scaling brands across 12+ countries.</p>
          <p>We started Stack because the agency model is broken. Junior account managers, vanity reporting, and creative built by committee don't move revenue. Senior operators who own the metric do.</p>
          <p>Today we manage $48M+ in annual ad spend across DTC, SaaS, healthcare, finance and local — with the same playbook: tight pods, accurate tracking, and creative that earns attention.</p>
        </div>
      </Reveal>
    </section>
  );
}
