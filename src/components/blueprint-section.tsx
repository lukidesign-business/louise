"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

import { blueprintPhases } from "@/lib/site-data";

const advisoryHighlights = [
  "1-on-1 Content & Portfolio Strategy Calls",
  "Full Pitch Decks, Rate Cards & Script Playbooks",
  "Direct Guidance on TikTok Shop & Brand Negotiations",
];

export function BlueprintSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#fcfaf7] bg-[url('/media/blueprint-consultancy-bg.png')] bg-[length:100%_100%] bg-center bg-no-repeat py-20 md:py-24">
      <div className="absolute inset-0 bg-[rgba(252,250,247,0.12)]" aria-hidden="true" />
      <div className="section-shell relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">The Blueprint &amp; Consultancy</p>
          <h2 className="mb-4 font-serif text-3xl leading-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Learn how to build a profitable social business from the inside.
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base">
            A complete, step-by-step advisory service and operational playbook. Learn exactly how Louise creates viral content, scales revenue streams, and turns an online presence into a sustainable career.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {blueprintPhases.map(({ phase, eyebrow, title, description, deliverables }, index) => (
            <motion.article
              key={phase}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={`rounded-2xl border border-neutral-200/60 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 ${index === 0 ? "bg-gradient-to-br from-[#fff9f6] to-white" : ""}`}
            >
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-neutral-400">{phase}</p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-neutral-500">{eyebrow}</p>
              </div>
              <h3 className="mt-5 mb-2 font-serif text-xl text-neutral-900">{title}</h3>
              <p className="text-sm leading-relaxed text-neutral-600">{description}</p>
              <ul className="mt-5 space-y-2.5">
                {deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex items-start gap-2 text-xs leading-relaxed text-neutral-600">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#f4e4df] text-neutral-700">
                      <Check size={10} />
                    </span>
                    {deliverable}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-neutral-900 underline underline-offset-4 transition hover:opacity-70">
                Explore this phase <ArrowRight size={13} />
              </a>
            </motion.article>
          ))}
        </div>

        <div className="mt-6 grid gap-8 rounded-2xl border border-[#e9e3dc] bg-gradient-to-r from-[#f8ece8] via-white to-[#f3e5df] p-7 shadow-sm sm:p-9 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">Private client service</p>
            <h3 className="mb-3 mt-3 font-serif text-2xl text-neutral-900 sm:text-3xl">The Complete Creator Advisory Programme</h3>
            <p className="max-w-2xl text-sm leading-relaxed text-neutral-600">
              Work directly with Louise and the Create &amp; Capture team to implement the full operational blueprint into your personal brand. Includes 1-on-1 strategy sessions, direct content audits, and lifetime access to our business templates.
            </p>
          </div>
          <div>
            <ul className="space-y-3 text-sm text-neutral-700">
              {advisoryHighlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c9a56a] text-white"><Check size={12} /></span>
                  {item}
                </li>
              ))}
            </ul>
            <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 px-8 py-4 font-medium text-white transition hover:bg-neutral-800 sm:w-auto">
              Book now <ArrowRight size={16} />
            </a>
            <p className="mt-3 text-xs text-neutral-500">Limited intake per month to ensure dedicated support.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
