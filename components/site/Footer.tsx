import Link from "next/link";
export function Footer() {
  return (
    <footer className="border-t border-line bg-card/30 mt-24">
      <div className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="font-display text-2xl">Stack<span className="text-subtle">·</span>Media</div>
          <p className="text-subtle text-sm mt-3 max-w-sm">A senior media-buying pod for ambitious brands. Meta, Google, TikTok, SEO & GBP — engineered for revenue.</p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-subtle mb-3">Services</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services/google-ads">Google Ads</Link></li>
            <li><Link href="/services/meta-ads">Meta Ads</Link></li>
            <li><Link href="/services/tiktok-ads">TikTok Ads</Link></li>
            <li><Link href="/services/seo">SEO</Link></li>
            <li><Link href="/services/google-business-profile">Local SEO / GBP</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-subtle mb-3">Company</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/results">Results</Link></li>
            <li><Link href="/process">Process</Link></li>
            <li><Link href="/why-us">Why us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line py-6 text-center text-xs text-subtle">© {new Date().getFullYear()} Stack Media. All rights reserved.</div>
    </footer>
  );
}
