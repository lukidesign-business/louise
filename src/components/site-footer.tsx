export function SiteFooter() {
  return (
    <footer className="border-t border-[rgba(23,23,23,0.08)] bg-[var(--ivory)] py-10">
      <div className="section-shell">
        <div className="grid gap-8 md:grid-cols-[1.3fr_0.9fr_0.9fr_0.9fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[rgba(255,255,255,0.5)] text-[0.9rem] font-semibold tracking-[0.2rem]">C</div>
              <div className="font-display text-[1.8rem] tracking-[-0.06em]">Create &amp; Capture</div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-7 text-[var(--muted)]">
              Creator-led content and management for brands built for now.
            </p>
          </div>

          <div>
            <p className="label mb-4 text-[var(--muted)]">Explore</p>
            <ul className="space-y-3 text-sm text-[var(--muted)]">
              <li><a href="#about" className="transition hover:text-[var(--charcoal)]">About</a></li>
              <li><a href="#services" className="transition hover:text-[var(--charcoal)]">Services</a></li>
              <li><a href="#work" className="transition hover:text-[var(--charcoal)]">Work</a></li>
            </ul>
          </div>

          <div>
            <p className="label mb-4 text-[var(--muted)]">Work With Us</p>
            <ul className="space-y-3 text-sm text-[var(--muted)]">
              <li><a href="#contact" className="transition hover:text-[var(--charcoal)]">Brand enquiries</a></li>
              <li><a href="#contact" className="transition hover:text-[var(--charcoal)]">Creator applications</a></li>
              <li><a href="#contact" className="transition hover:text-[var(--charcoal)]">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="label mb-4 text-[var(--muted)]">Social</p>
            <ul className="space-y-3 text-sm text-[var(--muted)]">
              <li><a href="https://instagram.com" className="transition hover:text-[var(--charcoal)]">Instagram</a></li>
              <li><a href="https://tiktok.com" className="transition hover:text-[var(--charcoal)]">TikTok</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-[var(--line)] pt-6 text-[0.7rem] uppercase tracking-[0.14rem] text-[var(--muted)] md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <a href="#" className="transition hover:text-[var(--charcoal)]">Privacy</a>
            <a href="#" className="transition hover:text-[var(--charcoal)]">Terms</a>
          </div>
          <div>© {new Date().getFullYear()} Create &amp; Capture. All rights reserved.</div>
          <div>Designed for the next scroll.</div>
        </div>
      </div>
    </footer>
  );
}
