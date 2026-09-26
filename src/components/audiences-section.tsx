import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

const brandPoints = [
  "Creator sourcing and management",
  "Campaign concepts and production",
  "Paid and organic social assets",
];

const creatorPoints = [
  "Brand opportunities",
  "Negotiation and campaign support",
  "Personal brand and growth guidance",
];

export function AudiencesSection() {
  return (
    <section id="for-creators" className="w-full overflow-hidden">
      <div className="grid w-full grid-cols-1 lg:grid-cols-2">
        <div className="relative min-h-[680px] overflow-hidden bg-gradient-to-br from-[#f8e4e3] via-[#f3d8d8] to-[#eed0d2] px-8 py-12 md:px-12 lg:px-16">
          <div className="relative z-10 max-w-[60%]">
            <p className="label text-neutral-500">For brands</p>
            <h3 className="mt-4 font-serif text-3xl leading-[1.08] text-neutral-900 md:text-4xl lg:text-5xl">
              Find the right creators. Make the right impression.
            </h3>
            <p className="mt-5 text-sm leading-7 text-neutral-600">
              Bring us your brief, your ambition and your challenge. We will shape the talent, strategy and content to make it land.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-neutral-800">
              {brandPoints.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c9a56a] text-white"><Check size={12} /></span>
                  {point}
                </li>
              ))}
            </ul>
            <a href="#contact" className="mt-8 inline-flex items-center gap-3 rounded-md bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-800">
              Partner With Us <ArrowRight size={15} />
            </a>
          </div>

          <div className="absolute right-[8%] top-1/2 z-10 w-44 -translate-y-1/2 rotate-[4deg] border-[6px] border-white bg-white shadow-2xl md:w-56 lg:right-[10%] lg:w-64">
            <Image src="/images/louise-hero-2.jpg" alt="Creator portrait from a brand partnership shoot" width={900} height={1200} className="aspect-[4/5] w-full object-cover" loading="lazy" />
          </div>
          <p className="absolute bottom-24 right-[5%] z-20 w-32 rotate-[-8deg] font-serif text-lg italic leading-tight text-neutral-700 md:right-[8%]">
            Brands that get it get results.
          </p>
          <svg className="absolute bottom-16 right-[31%] h-28 w-20 rotate-12 text-[#84977d] opacity-60" viewBox="0 0 80 120" fill="none" aria-hidden="true">
            <path d="M8 115C24 82 39 49 49 5" stroke="currentColor" />
            <path d="M26 77C14 69 9 59 10 49C21 53 28 61 30 70" stroke="currentColor" />
            <path d="M37 51C48 46 57 38 61 27C50 29 42 35 36 43" stroke="currentColor" />
          </svg>
        </div>

        <div className="relative min-h-[680px] overflow-hidden bg-gradient-to-br from-[#e4eee5] via-[#d8e7dc] to-[#cbded1] px-8 py-12 md:px-12 lg:px-16">
          <div className="relative z-10 max-w-[60%]">
            <p className="label text-neutral-500">For creators</p>
            <h3 className="mt-4 font-serif text-3xl leading-[1.08] text-neutral-900 md:text-4xl lg:text-5xl">
              More than management. A team in your corner.
            </h3>
            <p className="mt-5 text-sm leading-7 text-neutral-600">
              We support creators with the opportunities, negotiations and strategy to build a career that lasts.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-neutral-800">
              {creatorPoints.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c9a56a] text-white"><Check size={12} /></span>
                  {point}
                </li>
              ))}
            </ul>
            <a href="#contact" className="mt-8 inline-flex items-center gap-3 rounded-md bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-800">
              Join the Roster <ArrowRight size={15} />
            </a>
          </div>

          <div className="absolute right-[4%] top-1/2 z-10 w-44 -translate-y-1/2 rotate-[-4deg] border-[6px] border-white bg-white shadow-2xl md:w-56 lg:right-[6%] lg:w-64">
            <Image src="/images/louise-hero-3.jpg" alt="Creator portrait from a roster lifestyle shoot" width={900} height={1200} className="aspect-[4/5] w-full object-cover" loading="lazy" />
          </div>
          <p className="absolute bottom-20 right-[11%] z-20 flex rotate-[-8deg] flex-col font-serif text-xl italic leading-[0.9] text-neutral-700">
            <span>Create</span>
            <span>Connect</span>
            <span>Grow</span>
          </p>
        </div>
      </div>
    </section>
  );
}
