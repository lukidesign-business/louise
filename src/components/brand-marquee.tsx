import { brandLogos } from "@/lib/site-data";

export function BrandMarquee() {
  return (
    <div className="overflow-hidden border-y border-[var(--line)] bg-[var(--ivory)] py-3 text-[0.7rem] font-medium uppercase tracking-[0.18rem] text-[var(--muted)]">
      <div className="marquee flex min-w-max gap-8 whitespace-nowrap px-4">
        {[...brandLogos, ...brandLogos].map((logo, index) => (
          <span key={`${logo}-${index}`} className="inline-flex items-center">
            {logo}
          </span>
        ))}
      </div>
    </div>
  );
}
