"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 600);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Back to top"
      tabIndex={isVisible ? 0 : -1}
      aria-hidden={!isVisible}
      className={`fixed bottom-6 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--line)] bg-[rgba(252,250,247,0.88)] text-[var(--charcoal)] shadow-[0_12px_28px_rgba(23,23,23,0.12)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-[var(--charcoal)] hover:bg-[var(--charcoal)] hover:text-[var(--ivory)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sage)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ivory)] md:bottom-8 md:right-8 ${
        isVisible ? "pointer-events-auto opacity-100" : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <ArrowUp size={18} aria-hidden="true" />
    </button>
  );
}
