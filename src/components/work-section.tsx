"use client";

import Image from "next/image";
import { ArrowRight, Check, Play } from "lucide-react";
import { useState } from "react";

import { workFilters, workItems } from "@/lib/site-data";

const featuredHighlights = [
  "2.0M+ views",
  "High-intent product engagement",
  "Platform-native creative built for repurposing",
];

export function WorkSection() {
  const [workFilter, setWorkFilter] = useState("All");

  const filteredWorkItems = workFilter === "All"
    ? workItems
    : workItems.filter((item) => item.category === workFilter);

  return (
    <section id="work" className="bg-[#DDF3F5] py-16 md:py-20">
      <div className="section-shell relative">
        <p className="pointer-events-none absolute right-2 top-0 hidden max-w-[180px] rotate-6 text-right font-serif text-lg italic leading-tight text-neutral-600 lg:block">
          Real brands. Real creators. Real results.
        </p>

        <div className="grid gap-8 lg:grid-cols-[260px_1fr] lg:items-start">
          <div>
            <p className="label text-neutral-500">Selected work</p>
            <h2 className="mt-3 font-serif text-4xl leading-[1.05] text-neutral-900 md:text-5xl">Content that connects. Results that scale.</h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-neutral-600">
              A selection of creator content, influencer campaigns and social assets across beauty, fashion, fitness, lifestyle and more.
            </p>
            <a href="#contact" className="mt-6 inline-flex items-center gap-2 rounded-md border border-neutral-700 bg-transparent px-5 py-3 text-xs font-semibold tracking-wider text-neutral-900 transition hover:bg-white/60">
              View all work <ArrowRight size={14} />
            </a>
          </div>

          <div>
            <div className="mb-4 flex flex-wrap gap-2 lg:pr-40">
              {workFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setWorkFilter(filter)}
                  aria-pressed={workFilter === filter}
                  className={`rounded-full border px-4 py-2 text-xs font-medium transition ${workFilter === filter ? "border-neutral-900 bg-neutral-900 text-white" : "border-neutral-300 bg-white/70 text-neutral-700 hover:bg-white"}`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {filteredWorkItems.map((item, index) => (
                <article key={item.title} className={`group relative min-h-[210px] overflow-hidden rounded-xl ${index === 0 && workFilter === "All" ? "sm:row-span-2 sm:min-h-[435px]" : ""}`}>
                  <Image src={item.image} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 50vw" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  <div className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/15 text-white backdrop-blur-sm transition group-hover:scale-110">
                    <Play size={15} className="ml-0.5 fill-current" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-[10px] uppercase tracking-wider text-white/75">{item.category}</p>
                    <h3 className="mt-1 font-serif text-2xl leading-tight">{item.title}</h3>
                    <p className="mt-1 text-xs text-white/80">{item.type}</p>
                    {index === 0 && workFilter === "All" && (
                      <a href="#contact" className="mt-3 inline-flex items-center gap-2 text-xs font-semibold tracking-wider underline underline-offset-4">
                        View Case Study <ArrowRight size={13} />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid overflow-hidden rounded-2xl bg-[#FAF7F2] md:grid-cols-[35%_65%]">
          <div className="relative min-h-[260px] overflow-hidden">
            <Image src="/images/louise-hero-2.jpg" alt="Featured beauty campaign creative" fill className="object-cover" sizes="(max-width: 768px) 100vw, 35vw" loading="lazy" />
            <p className="absolute right-5 top-5 max-w-[130px] rotate-6 font-serif text-lg italic leading-tight text-neutral-700">Authentic content. Real results.</p>
          </div>
          <div className="flex flex-col justify-center p-6 md:p-10">
            <p className="label text-neutral-500">Featured campaign</p>
            <h3 className="mt-3 font-serif text-3xl leading-tight text-neutral-900 md:text-4xl">Social-first beauty content designed for discovery.</h3>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600">
              A creator-led campaign strategy that blended native storytelling, TikTok-native hooks and a sales-friendly product narrative across multiple assets.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-neutral-700">
              {featuredHighlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C9A56A] text-white"><Check size={12} /></span>
                  {item}
                </li>
              ))}
            </ul>
            <a href="#contact" className="mt-7 inline-flex w-fit items-center gap-2 rounded-md bg-neutral-900 px-5 py-3 text-xs font-semibold tracking-wider text-white transition hover:bg-neutral-800">
              See the case study <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
