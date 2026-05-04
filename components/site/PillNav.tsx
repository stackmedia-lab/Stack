"use client";
import { useState } from "react";
import Link from "next/link";
import { ServicesMegaMenu } from "./MegaMenu";

const links = [
  { to: "/results", label: "Results" },
  { to: "/process", label: "Process" },
  { to: "/why-us", label: "Why us" },
  { to: "/clients", label: "Clients" },
  { to: "/pricing", label: "Pricing" },
  { to: "/faq", label: "FAQ" },
];

export function PillNav() {
  const [megaOpen, setMegaOpen] = useState(false);
  return (
    <header className="fixed top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto relative">
        <nav className="flex items-center gap-1 rounded-full border border-line bg-card/90 backdrop-blur-md pl-2 pr-2 py-2 pill-shadow">
          <Link href="/" className="flex items-center gap-2 pl-1 pr-3 py-1 rounded-full hover:bg-muted transition">
            <span className="h-7 w-7 rounded-full bg-foreground text-background grid place-items-center font-display text-xs">S</span>
            <span className="font-display font-medium text-sm tracking-tight">Stack<span className="text-subtle">·</span>Media</span>
          </Link>
          <div className="hidden md:flex items-center">
            <button onMouseEnter={() => setMegaOpen(true)} onClick={() => setMegaOpen(v => !v)}
              className={`px-3 py-1.5 text-sm rounded-full transition flex items-center gap-1 ${megaOpen ? "bg-muted" : "text-foreground/80 hover:text-foreground"}`}>
              Services
              <svg width="10" height="10" viewBox="0 0 10 10" className={`transition-transform ${megaOpen ? "rotate-180" : ""}`}>
                <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </svg>
            </button>
            {links.map(l => (
              <Link key={l.to} href={l.to} onMouseEnter={() => setMegaOpen(false)}
                className="px-3 py-1.5 text-sm text-foreground/80 hover:text-foreground rounded-full transition">{l.label}</Link>
            ))}
          </div>
          <Link href="/contact" onMouseEnter={() => setMegaOpen(false)}
            className="ml-1 px-4 py-1.5 text-sm rounded-full bg-foreground text-background hover:opacity-90 transition">Contact</Link>
        </nav>
        <ServicesMegaMenu open={megaOpen} onClose={() => setMegaOpen(false)} />
      </div>
    </header>
  );
}
