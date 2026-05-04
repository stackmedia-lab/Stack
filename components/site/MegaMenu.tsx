"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/lib/services";
import { industries } from "@/lib/industries";

export function ServicesMegaMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="absolute left-1/2 top-[calc(100%+10px)] -translate-x-1/2 w-[min(1100px,calc(100vw-2rem))] rounded-3xl border border-line bg-card/95 backdrop-blur-xl pill-shadow overflow-hidden"
          onMouseLeave={onClose}>
          <div className="grid grid-cols-12 gap-0">
            <div className="col-span-5 p-6 border-r border-line">
              <div className="text-[11px] uppercase tracking-widest text-subtle mb-4">By channel</div>
              {services.map(s => (
                <Link key={s.slug} href={`/services/${s.slug}`} onClick={onClose}
                  className="group flex items-start gap-3 rounded-2xl p-3 hover:bg-muted transition">
                  <span className="text-xs text-subtle pt-1 tabular-nums">{s.number}</span>
                  <span className="flex-1">
                    <span className="block font-display text-base">{s.name}</span>
                    <span className="block text-xs text-subtle mt-0.5 line-clamp-1">{s.short}</span>
                  </span>
                </Link>
              ))}
            </div>
            <div className="col-span-4 p-6 border-r border-line">
              <div className="text-[11px] uppercase tracking-widest text-subtle mb-4">By industry</div>
              {industries.slice(0, 6).map(i => (
                <Link key={i.slug} href={`/industries/${i.slug}`} onClick={onClose}
                  className="flex items-center justify-between rounded-2xl p-3 hover:bg-muted transition text-sm">
                  {i.name}
                </Link>
              ))}
            </div>
            <div className="col-span-3 p-6 bg-muted/40">
              <div className="text-[11px] uppercase tracking-widest text-subtle mb-4">Featured</div>
              <Link href="/results" onClick={onClose} className="block">
                <div className="aspect-[4/3] rounded-2xl border border-line bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-200" />
                <div className="mt-3 font-display text-base leading-snug">Northwind: 4.8× ROAS in 90 days</div>
                <div className="text-xs text-subtle mt-1">Read case →</div>
              </Link>
            </div>
          </div>
          <div className="border-t border-line bg-background/60 px-6 py-3 flex items-center justify-between text-xs">
            <span className="text-subtle">All retainers include weekly optimization & monthly QBRs.</span>
            <Link href="/contact" onClick={onClose} className="rounded-full bg-foreground text-background px-3 py-1.5">Book a call ↗</Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
