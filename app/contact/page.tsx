import { Reveal } from "@/components/site/Reveal";
export const metadata = { title: "Contact — Stack Media", description: "Apply for a free audit." };
export default function Contact() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <Reveal>
        <div className="text-xs uppercase tracking-widest text-subtle mb-4">Contact</div>
        <h1 className="font-display text-5xl md:text-7xl tracking-tight mb-10">Apply for a free audit.</h1>
      </Reveal>
      <form className="space-y-5">
        <input className="w-full rounded-2xl border border-line bg-card px-5 py-4" placeholder="Your name" />
        <input className="w-full rounded-2xl border border-line bg-card px-5 py-4" placeholder="Work email" type="email" />
        <input className="w-full rounded-2xl border border-line bg-card px-5 py-4" placeholder="Company website" />
        <select className="w-full rounded-2xl border border-line bg-card px-5 py-4">
          <option>Monthly ad spend…</option>
          <option>$5k – $25k</option>
          <option>$25k – $100k</option>
          <option>$100k – $500k</option>
          <option>$500k+</option>
        </select>
        <textarea className="w-full rounded-2xl border border-line bg-card px-5 py-4" placeholder="What are you trying to grow?" rows={5} />
        <button type="submit" className="rounded-full bg-foreground text-background px-6 py-3 text-sm">Submit application ↗</button>
      </form>
    </section>
  );
}
