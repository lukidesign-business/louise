"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, LoaderCircle, Music2, Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { LeafIllustration } from "@/components/leaf-illustration";
import { brandLogos, heroConfig } from "@/lib/site-data";

function VideoControls({
  isPlaying,
  onToggle,
}: {
  isPlaying: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isPlaying ? "Pause hero video" : "Play hero video"}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/80 bg-[rgba(255,255,255,0.72)] text-[#171717] shadow-[0_16px_28px_rgba(23,23,23,0.12)] backdrop-blur-sm transition hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sage)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f3e5de] sm:h-14 sm:w-14"
    >
      {isPlaying ? <Pause size={16} aria-hidden="true" /> : <Play size={16} className="ml-0.5 fill-current" aria-hidden="true" />}
    </button>
  );
}

function FloatingPhotoCard({
  src,
  alt,
  className,
  rotate,
}: {
  src: string;
  alt: string;
  className?: string;
  rotate?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ y: -8, rotate: 0, transition: { duration: 0.25 } }}
      className={`absolute z-10 w-20 overflow-hidden rounded-xl border border-white/80 bg-white p-1.5 shadow-lg sm:w-32 sm:p-2 md:w-40 ${rotate ?? ""} ${className ?? ""}`}
    >
      <div className="aspect-[4/5] overflow-hidden rounded-lg">
        <Image src={src} alt={alt} width={250} height={320} className="h-full w-full object-cover" sizes="(max-width: 768px) 35vw, 20vw" loading="lazy" />
      </div>
    </motion.div>
  );
}

function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  // What the viewer has asked for via the play/pause button. The video is only
  // ever paused on their behalf when it scrolls out of view, which must not be
  // mistaken for them pausing it.
  const [wantsToPlay, setWantsToPlay] = useState(true);
  // What the element is actually doing, so the button icon stays honest even if
  // the browser refuses to autoplay.
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(Boolean(entry?.isIntersecting));
      },
      { threshold: 0.2 },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVisible && wantsToPlay) {
      void video.play().catch(() => undefined);
    } else if (!video.paused) {
      video.pause();
    }
  }, [isVisible, wantsToPlay]);

  const handleToggle = () => setWantsToPlay((current) => !current);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-20 mx-auto w-48 max-w-full sm:w-64 lg:max-h-[520px] lg:w-[310px]"
    >
      <div className="relative aspect-[9/16] overflow-hidden rounded-[2.5rem] border-[6px] border-neutral-900 bg-neutral-900 shadow-2xl">
        <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-neutral-900" aria-hidden="true" />
        <div className="relative h-full overflow-hidden rounded-[2rem] bg-[#f1d8d6]">
          <video
            ref={videoRef}
            src={heroConfig.videoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="h-full w-full object-cover"
            aria-label="Louise creator video preview"
            onPause={() => setIsPlaying(false)}
            onPlay={() => setIsPlaying(true)}
            onLoadedData={() => setIsLoaded(true)}
          >
            <source src={heroConfig.videoSrc} type="video/mp4" />
          </video>

          {!isLoaded && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#f1d8d6]" aria-label="Loading video" role="status">
              <LoaderCircle className="h-8 w-8 animate-spin text-neutral-700" aria-hidden="true" />
              <span className="sr-only">Loading video</span>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.1)] via-transparent to-transparent" aria-hidden="true" />

          <div className="absolute inset-x-0 bottom-4 z-20 flex items-end justify-between px-3 text-white">
            <div className="text-xs font-medium">▶ 18M</div>
            <VideoControls isPlaying={isPlaying} onToggle={handleToggle} />
            <Music2 size={16} aria-label="TikTok audio" />
          </div>
        </div>
      </div>

      <a
        href={heroConfig.tiktokUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="View this creator video on TikTok"
        className="mt-3 inline-flex w-full items-center justify-center gap-2 text-xs tracking-wider text-neutral-500 transition hover:text-neutral-900"
      >
        View on TikTok <ArrowUpRight size={14} />
      </a>
    </motion.div>
  );
}

function HeroCollage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 14 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.08 }}
      className="relative mx-auto min-h-[540px] w-full max-w-[680px] overflow-hidden sm:min-h-[580px] lg:min-h-[650px]"
    >
      <FloatingPhotoCard src={heroConfig.photos[0].src} alt={heroConfig.photos[0].alt} rotate="-rotate-3" className="left-0 top-[22%] sm:left-4 sm:top-12 lg:left-0 lg:top-16" />
      <FloatingPhotoCard src={heroConfig.photos[1].src} alt={heroConfig.photos[1].alt} className="bottom-4 left-0 hidden lg:block lg:left-4" />
      <FloatingPhotoCard src={heroConfig.photos[2].src} alt={heroConfig.photos[2].alt} rotate="rotate-2" className="bottom-[22%] right-0 top-auto sm:bottom-auto sm:right-4 sm:top-20 lg:right-0 lg:top-20" />
      <FloatingPhotoCard src={heroConfig.photos[3].src} alt={heroConfig.photos[3].alt} className="bottom-6 right-0 hidden lg:block lg:right-4" />

      <div className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 justify-center">
        <HeroVideo />
      </div>

      <motion.div
        whileHover={{ y: -5 }}
        className="absolute bottom-0 left-0 z-30 rounded-xl border border-white/60 bg-white/90 px-3 py-2 shadow-md backdrop-blur-md sm:px-4 sm:py-2.5 lg:bottom-auto lg:left-auto lg:right-[calc(50%+171px)] lg:top-1/2"
      >
        <div className="font-display text-lg font-bold text-neutral-900 sm:text-xl">2.1M</div>
        <p className="text-[9px] uppercase tracking-wider text-neutral-500 sm:text-[10px]">views in 30 days</p>
      </motion.div>

      <motion.div
        whileHover={{ y: -5 }}
        className="absolute right-0 top-0 z-30 rounded-xl border border-white/60 bg-white/90 px-3 py-2 shadow-md backdrop-blur-md sm:right-4 sm:top-2 sm:px-4 sm:py-2.5 lg:right-0"
      >
        <div className="font-display text-lg font-bold text-neutral-900 sm:text-xl">2,085,733</div>
        <p className="text-[9px] uppercase tracking-wider text-neutral-500 sm:text-[10px]">campaign video views</p>
      </motion.div>


      <p className="absolute bottom-0 right-0 z-30 w-24 rotate-6 font-serif text-xs italic leading-tight text-neutral-700 sm:w-28 sm:text-sm lg:bottom-auto lg:left-1/2 lg:right-auto lg:top-1/2 lg:w-32 lg:translate-x-[175px] lg:-translate-y-1/2">
        More Creators, Brighter Brands
      </p>
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-[90vh] w-full items-center overflow-hidden bg-gradient-to-r from-[#FDFBF7] to-[#DDF3F5] pt-16 pb-10 sm:pt-20 lg:min-h-screen lg:max-h-[950px] lg:py-0">
      <div className="pointer-events-none absolute -left-10 -top-8 opacity-60" aria-hidden="true">
        <LeafIllustration />
      </div>
      <div className="pointer-events-none absolute -right-8 -top-8 rotate-90 opacity-60" aria-hidden="true">
        <LeafIllustration />
      </div>
      <div className="pointer-events-none absolute -bottom-10 -left-10 -rotate-90 opacity-60" aria-hidden="true">
        <LeafIllustration />
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-6 lg:grid-cols-12 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-5 lg:pr-4"
        >
          <h1 className="mb-6 font-serif text-4xl leading-[1.08] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            Where creator culture meets measurable growth.
          </h1>
          <p className="mb-8 max-w-lg text-sm leading-relaxed text-neutral-600 sm:text-[0.9375rem]">
            Create &amp; Capture connects ambitious brands with standout talent, social-first ideas and performance-led content built to move audiences.
          </p>

          <div className="mb-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-neutral-800">
              Start a Project <ArrowRight size={14} />
            </a>
            <a href="#results" className="inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-white/80 px-6 py-3.5 text-sm font-medium text-neutral-800 backdrop-blur-sm transition hover:bg-white">
              See Our Results <ArrowUpRight size={14} />
            </a>
          </div>

          <p className="mb-2.5 text-xs font-medium text-neutral-500">
            Trusted across beauty, fashion, wellness &amp; lifestyle
          </p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-600">
            <div className="flex items-center gap-1.5" aria-label="Partner brands">
              {brandLogos.slice(0, 3).map((brand) => (
                <span
                  key={brand.name}
                  className="inline-flex items-center justify-center"
                >
                  {brand.logo ? (
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      width={64}
                      height={40}
                      className={`w-auto object-contain ${brand.name === "e.l.f." ? "max-h-8 max-w-16" : "max-h-12 max-w-32"}`}
                    />
                  ) : (
                    <span className="font-display text-[9px] font-semibold tracking-[-0.02em] text-neutral-700">
                      {brand.name}
                    </span>
                  )}
                </span>
              ))}
            </div>
            <span className="text-sm text-amber-500" aria-label="5 out of 5 stars">★★★★★</span>
            <span className="text-xs font-medium text-neutral-600">5.0 Trusted by 100+ brands and creators</span>
          </div>
        </motion.div>

        <div className="lg:col-span-7">
          <HeroCollage />
        </div>
      </div>
    </section>
  );
}
