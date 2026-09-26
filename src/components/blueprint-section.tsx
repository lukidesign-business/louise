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

        <div className="grid auto-rows-fr grid-cols-2 gap-3 sm:gap-4 md:gap-5">
          {blueprintPhases.map(({ phase, eyebrow, title, description, deliverables }, index) => (
            <motion.article
              key={phase}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={`flex flex-col rounded-2xl border border-neutral-200/60 bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-1 sm:p-6 md:p-7 ${index === 0 ? "bg-gradient-to-br from-[#fff9f6] to-white" : ""}`}
            >
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-neutral-400 sm:text-xs">{phase}</p>
                <p className="mt-1 hidden text-[10px] font-medium uppercase leading-snug tracking-[0.16em] text-neutral-500 sm:block">{eyebrow}</p>
              </div>
              <h3 className="mt-2 mb-2 font-serif text-base leading-snug text-neutral-900 sm:mt-5 sm:text-lg md:text-xl">{title}</h3>
              <p className="hidden leading-relaxed text-neutral-600 sm:block sm:text-sm">{description}</p>
              <ul className="mt-1 space-y-2 sm:mt-5 sm:space-y-2.5">
                {deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex items-start gap-2 text-[11px] leading-relaxed text-neutral-600 sm:text-xs">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#f4e4df] text-neutral-700">
                      <Check size={10} />
                    </span>
                    {deliverable}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-auto inline-flex items-center gap-1.5 self-start pt-5 text-[11px] font-semibold tracking-wider text-neutral-900 underline underline-offset-4 transition hover:opacity-70 sm:gap-2 sm:pt-6 sm:text-xs">
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
              Work directly with Louise and the team to build the blueprint into your own brand.
            </p>
          </div>
          <div>
            <ul className="space-y-2.5 text-xs leading-relaxed text-neutral-700 sm:space-y-3 sm:text-sm">
              {advisoryHighlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5 sm:gap-3">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#c9a56a] text-white sm:h-5 sm:w-5">
                    <Check size={10} className="sm:hidden" />
                    <Check size={12} className="hidden sm:block" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a href="#contact" className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800 sm:px-8 sm:py-4 sm:text-base">
              Book now <ArrowRight size={15} className="sm:hidden" />
              <ArrowRight size={16} className="hidden sm:block" />
            </a>
            <p className="mt-3 text-xs text-neutral-500">Limited intake per month to ensure dedicated support.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
