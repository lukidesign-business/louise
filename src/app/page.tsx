import { AboutSection } from "@/components/about-section";
import { AudiencesSection } from "@/components/audiences-section";
import { BlueprintSection } from "@/components/blueprint-section";
import { BrandMarquee } from "@/components/brand-marquee";
import { ContactSection } from "@/components/contact-section";
import { FaqSection } from "@/components/faq-section";
import { HeroSection } from "@/components/hero-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WorkSection } from "@/components/work-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--ivory)] text-[var(--charcoal)]">
      <SiteHeader />

      <main>
        <HeroSection />
        <BrandMarquee />
        <AboutSection />
        <BlueprintSection />
        <WorkSection />
        <AudiencesSection />
        <FaqSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
