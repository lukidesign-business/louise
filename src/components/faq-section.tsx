"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { faqItems } from "@/lib/site-data";

export function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="bg-[var(--ivory)] py-20 md:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-[var(--line)] bg-white p-5 shadow-[0_18px_32px_rgba(23,23,23,0.04)] md:p-8">
          <div className="mb-8 text-center">
            <p className="label text-[var(--muted)]">Frequently asked questions</p>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, index) => (
              <div key={item.question} className="rounded-[1rem] border border-[var(--line)] bg-[rgba(252,250,247,0.8)]">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-5 px-4 py-4 text-left"
                  onClick={() => setOpenFaq((current) => (current === index ? null : index))}
                  aria-expanded={openFaq === index}
                >
                  <span className="text-base font-medium text-[var(--charcoal)]">{item.question}</span>
                  <ChevronDown size={18} className={`shrink-0 transition-transform ${openFaq === index ? "rotate-180" : ""}`} />
                </button>
                {openFaq === index && (
                  <div className="border-t border-[var(--line)] px-4 py-4 text-base leading-7 text-[var(--muted)]">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
