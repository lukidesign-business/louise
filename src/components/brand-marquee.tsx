import Image from "next/image";

import { brandLogos } from "@/lib/site-data";

export function BrandMarquee() {
  return (
    <div className="overflow-hidden border-y border-[var(--line)] bg-[var(--ivory)] py-4 text-[0.7rem] font-medium uppercase tracking-[0.18rem] text-[var(--muted)]">
      <div className="marquee flex min-w-max items-center gap-10 whitespace-nowrap px-4">
        {[...brandLogos, ...brandLogos].map((brand, index) => (
          <span key={`${brand.name}-${index}`} className="inline-flex items-center">
            {brand.logo ? (
              <Image
                src={brand.logo}
                alt={brand.name}
                width={160}
                height={40}
                className="h-6 w-auto object-contain opacity-70 transition hover:opacity-100 sm:h-7"
              />
            ) : (
              brand.name
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
