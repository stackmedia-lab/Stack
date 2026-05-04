import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import { PillNav } from "@/components/site/PillNav";
import { Footer } from "@/components/site/Footer";

const display = Instrument_Serif({ subsets: ["latin"], weight: "400", variable: "--font-display" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Stack Media — Performance marketing that compounds",
  description: "A senior media-buying pod for ambitious brands. Meta, Google, TikTok, SEO & GBP — engineered for revenue.",
  openGraph: {
    title: "Stack Media — Performance marketing that compounds",
    description: "Senior media-buying pod for ambitious brands.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-screen flex flex-col">
        <PillNav />
        <main className="flex-1 pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
