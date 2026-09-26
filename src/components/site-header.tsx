"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

import { navItems } from "@/lib/site-data";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(23,23,23,0.08)] bg-[rgba(252,250,247,0.78)] backdrop-blur-md">
      <div className="section-shell flex items-center justify-between py-4">
        <a href="#home" className="flex items-center" aria-label="Create & Capture home">
          <div className="font-display text-[1.5rem] leading-none tracking-[-0.05em]">Create &amp; Capture</div>
        </a>

        <nav className="hidden items-center gap-8 text-[0.72rem] font-medium uppercase tracking-[0.18rem] text-[var(--muted)] md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-[var(--charcoal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sage)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ivory)]">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-sm border border-[var(--charcoal)] bg-[var(--charcoal)] px-5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.16rem] text-[var(--ivory)] transition hover:-translate-y-0.5 hover:bg-[var(--muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sage)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ivory)]"
          >
            Work With Us
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle mobile navigation"
          aria-expanded={menuOpen}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] text-[var(--charcoal)] md:hidden"
          onClick={() => setMenuOpen((state) => !state)}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[var(--line)] bg-[var(--ivory)] md:hidden">
          <div className="section-shell flex flex-col gap-4 py-5 text-[0.75rem] font-medium uppercase tracking-[0.16rem] text-[var(--muted)]">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="transition hover:text-[var(--charcoal)]">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)} className="mt-2 inline-flex w-fit items-center justify-center bg-[var(--charcoal)] px-4 py-2.5 text-[var(--ivory)]">
              Work With Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
