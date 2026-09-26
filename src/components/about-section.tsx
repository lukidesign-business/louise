import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { CountUpNumber } from "@/components/count-up-number";
import { LeafIllustration } from "@/components/leaf-illustration";
import { stats } from "@/lib/site-data";

export function AboutSection() {
  return (
    <section id="about" className="w-full overflow-hidden">
      <div className="grid min-h-[580px] w-full grid-cols-1 lg:grid-cols-12">
        <div className="relative flex flex-col justify-center overflow-hidden bg-[#FAF7F2] p-8 lg:col-span-5 lg:p-12">
          <div className="pointer-events-none absolute -bottom-8 -right-10 opacity-40" aria-hidden="true">
            <LeafIllustration />
          </div>
          <div className="relative z-10 grid items-center gap-8 sm:grid-cols-[190px_1fr] lg:grid-cols-1 xl:grid-cols-[210px_1fr]">
            <div className="relative mx-auto flex w-full max-w-[210px] flex-col items-center sm:mx-0 lg:mx-0">
              <p className="absolute -left-4 -top-12 -rotate-6 font-serif text-xl italic text-neutral-700">Louise Thomson</p>
              <div className="w-48 rotate-[-2deg] rounded-2xl bg-white p-2.5 shadow-xl sm:w-56">
                <Image src="/images/louise-hero-1.jpg" alt="Louise Thomson portrait" width={900} height={1200} className="aspect-[4/5] w-full rounded-xl object-cover" priority />
              </div>
              <div className="-ml-3 -mt-12 w-36 rotate-[3deg] self-start rounded-xl bg-white p-2 shadow-lg sm:w-40">
                <Image src="/images/louise-hero-2.jpg" alt="Louise with a camera during a lifestyle shoot" width={900} height={900} className="aspect-square w-full rounded-lg object-cover" />
              </div>
              <p className="mt-3 ml-12 max-w-[150px] rotate-[-4deg] font-serif text-sm italic leading-tight text-neutral-700">Scotland-based Creator Influencer Presenter</p>
            </div>

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">The people behind the work</p>
              <h2 className="mb-4 font-serif text-3xl leading-[1.15] text-neutral-900 sm:text-4xl">Meet Louise &amp; the team behind Create &amp; Capture.</h2>
              <p className="mb-6 max-w-md text-sm leading-relaxed text-neutral-600">
                Founded by Louise Thomson and her sister, Create &amp; Capture is a Scotland-based creator management and social content agency working across fashion, fitness, beauty and lifestyle.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-neutral-900 underline underline-offset-4 transition hover:opacity-75">
                Meet Louise / View creator portfolio <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>

        <div id="results" className="relative flex flex-col justify-center bg-[#141414] p-8 text-white lg:col-span-7 lg:p-12">
          <div className="max-w-4xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">Performance, with proof</p>
            <h2 className="mb-3 font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">Good content should do more than look good.</h2>
            <p className="mb-8 text-xs text-neutral-400 sm:text-sm">Selected results from creator content, social campaigns and TikTok Shop performance.</p>

            <div className="my-4 grid grid-cols-1 divide-y divide-neutral-800 border-y border-neutral-800 py-4 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-3 lg:divide-y-0">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col justify-start px-4 py-4 sm:py-3">
                  <div className="font-serif text-3xl font-normal text-white lg:text-4xl">
                    <CountUpNumber value={stat.value} />
                  </div>
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-neutral-400">{stat.label}</p>
                </div>
              ))}
            </div>

            <p className="mt-4 text-[10px] uppercase tracking-wide text-neutral-500">
              Selected creator and campaign results. Metrics vary by platform, campaign, time period and content format.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
