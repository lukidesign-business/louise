export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "For Creators", href: "#for-creators" },
  { label: "Contact", href: "#contact" },
];

export type BrandLogo = {
  /** Brand name. Used as the image alt text, and rendered as-is when no logo file is set. */
  name: string;
  /** Path under /public to a logo file, e.g. "/images/brands/myprotein.svg". Falls back to the name when omitted. */
  logo?: string;
};

export const brandLogos: BrandLogo[] = [
  {
    name: "L'Oréal",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/loreal-paris-logo-png_seeklogo-85584-MGc3jIZlkUQjreWiF3E4gMfOkNkEHh.png",
  },
  {
    name: "e.l.f.",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/elf-cosmetics-logo-png_seeklogo-447294-r6SdtJijiHCn2ZD8PAO0ZqCaysmAeb.png",
  },
  {
    name: "The Ordinary",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/the-ordinary-logo-png_seeklogo-323086-fcp0IpZWyHYo4GTCaquxDEqVM60H9f.png",
  },
  { name: "Pixi" },
  { name: "Maybelline" },
  { name: "Estrid" },
  { name: "MyProtein" },
  { name: "Biodance" },
  { name: "Good Molecules" },
  { name: "Free Soul" },
  { name: "Ego" },
];

export const blueprintPhases = [
  {
    phase: "PHASE 01",
    eyebrow: "FOUNDATIONS & PERSONAL BRAND SETUP",
    title: "Positioning & Profile Setup",
    description:
      "Audit your niche, refine your aesthetic, and optimize your profile for instant authority across TikTok and Instagram.",
    deliverables: ["Profile optimization checklist", "Bio formulas", "Content niche strategy"],
  },
  {
    phase: "PHASE 02",
    eyebrow: "HIGH-CONVERTING CONTENT PLAYBOOK",
    title: "Viral Content Architecture",
    description:
      "Master the exact shooting, editing, and storytelling frameworks used to generate millions of monthly views and keep audiences engaged.",
    deliverables: ["Hook formulas", "Storytelling scripts", "Daily content workflow"],
  },
  {
    phase: "PHASE 03",
    eyebrow: "MONETIZATION & REVENUE STREAMS",
    title: "Monetization & Brand Deals",
    description:
      "Learn the exact blueprint to pitch brands, secure 4-figure paid sponsorships, and scale passive affiliate income with TikTok Shop.",
    deliverables: ["Media kit templates", "Email pitch scripts", "Rate negotiation guide"],
  },
  {
    phase: "PHASE 04",
    eyebrow: "SCALING & BUSINESS OPERATIONS",
    title: "Systems & Client Management",
    description:
      "Turn your content creation into a registered, streamlined business with recurring revenue, contracts, and scalable management tools.",
    deliverables: ["Client onboarding systems", "Invoice & contract templates"],
  },
];

export const stats = [
  { value: "2.1M", label: "Views in the last 30 days" },
  { value: "2,085,733", label: "Video views on a selected campaign" },
  { value: "31M", label: "Views on a high-performing post" },
  { value: "£523.52", label: "Estimated rewards from a selected TikTok Shop result" },
  { value: "23.7K", label: "Louise's Instagram community" },
  { value: "2.8M", label: "Likes on a selected analytics snapshot" },
];

export const faqItems = [
  {
    question: "What types of brands do you work with?",
    answer:
      "We support beauty, fashion, wellness, lifestyle and emerging consumer brands that need creator-led content and performance-minded campaign support.",
  },
  {
    question: "Can you source creators for a campaign?",
    answer:
      "Yes. We can shape talent lists, manage sourcing, brief creators and support production across UGC, influencer and paid-social deliverables.",
  },
  {
    question: "Do you offer TikTok Shop content?",
    answer:
      "Absolutely. We build creator-led product content designed to support discovery, trust and conversion across TikTok Shop and affiliate flows.",
  },
  {
    question: "Do you work with creators outside Scotland / the UK?",
    answer:
      "Yes. We regularly work with creators and brands across the UK and internationally, depending on campaign goals and content requirements.",
  },
  {
    question: "How do creator applications work?",
    answer:
      "The best next step is to send your details, content links and the kind of work you want to create. We’ll be in touch if there’s a fit.",
  },
  {
    question: "How do I start a project?",
    answer:
      "Use the enquiry form below and share your goals, timeline and any campaign examples. We’ll come back with the right next step.",
  },
];

export const heroConfig = {
  tiktokUrl: "https://www.tiktok.com/@lou1sethomsonx/video/7556044869718789398",
  videoSrc: "/media/louise-hero.mp4",
  posterSrc: "/media/louise-hero-poster.jpg",
  photos: [
    {
      src: "/images/louise-hero-1.jpg",
      alt: "Louise in a warm beauty portrait with polished styling.",
      className: "hidden sm:block -left-6 top-5 md:-left-8 md:top-10",
    },
    {
      src: "/images/louise-hero-2.jpg",
      alt: "Louise in a fashion portrait with a soft editorial look.",
      className: "hidden sm:block -right-5 top-4 md:-right-8 md:top-8",
    },
    {
      src: "/images/louise-hero-3.jpg",
      alt: "Louise in a lifestyle portrait with natural light styling.",
      className: "hidden sm:block -left-4 bottom-2 md:-left-6 md:bottom-6",
    },
    {
      src: "/images/louise-hero-4.jpg",
      alt: "Louise with a confident creator look in a portrait shot.",
      className: "block -right-5 bottom-8 md:-right-6 md:bottom-8",
    },
  ],
};

export const portfolioUrl =
  "https://www.canva.com/design/DAHBym1qid0/PJVzesjlsHGtUjfuVOwXBw/view";
