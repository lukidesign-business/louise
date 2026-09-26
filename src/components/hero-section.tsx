"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Music2, Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { LeafIllustration } from "@/components/leaf-illustration";
import { heroConfig } from "@/lib/site-data";

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
      className="flex h-14 w-14 items-center justify-center rounded-full border border-white/80 bg-[rgba(255,255,255,0.72)] text-[#171717] shadow-[0_16px_28px_rgba(23,23,23,0.12)] backdrop-blur-sm transition hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sage)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f3e5de]"
    >
      {isPlaying ? <Pause size={18} aria-hidden="true" /> : <Play size={18} className="ml-0.5 fill-current" aria-hidden="true" />}
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
      className={`absolute z-10 w-32 overflow-hidden rounded-xl border border-white/80 bg-white p-2 shadow-lg sm:w-40 ${rotate ?? ""} ${className ?? ""}`}
    >
      <div className="aspect-[4/5] overflow-hidden rounded-lg">
        <Image src={src} alt={alt} width={250} height={320} className="h-full w-full object-cover" sizes="(max-width: 768px) 35vw, 20vw" loading="lazy" />
      </div>
    </motion.div>
  );
}

function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isPlaying, setIsPlaying] = useState(!prefersReducedMotion);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(Boolean(entry?.isIntersecting));
      },
      { threshold: 0.35 },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (prefersReducedMotion) {
      video.pause();
      return;
    }

    if (isVisible && isPlaying) {
      void video.play().catch(() => setIsPlaying(false));
    } else {
      video.pause();
    }
  }, [isVisible, isPlaying, prefersReducedMotion]);

  const handleToggle = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-20 mx-auto max-h-[520px] w-72 lg:w-[310px]"
    >
      <div className="relative aspect-[9/16] overflow-hidden rounded-[2.5rem] border-[6px] border-neutral-900 bg-neutral-900 shadow-2xl">
        <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-neutral-900" aria-hidden="true" />
        <div className="relative h-full overflow-hidden rounded-[2rem] bg-[#f1d8d6]">
          <video
            ref={videoRef}
            src={heroConfig.videoSrc}
            poster={heroConfig.posterSrc}
            autoPlay={!prefersReducedMotion}
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
            aria-label="Louise creator video preview"
            onPause={() => setIsPlaying(false)}
            onPlay={() => setIsPlaying(true)}
          >
            <source src={heroConfig.videoSrc} type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.1)] via-transparent to-transparent" aria-hidden="true" />

          <div className="absolute inset-x-0 bottom-4 z-20 flex items-end justify-between px-3 text-white">
            <div className="text-xs font-medium">▶ 4.2M</div>
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
      className="relative mx-auto min-h-[470px] w-full max-w-[680px] overflow-hidden lg:min-h-[650px]"
    >
      <FloatingPhotoCard src={heroConfig.photos[0].src} alt={heroConfig.photos[0].alt} rotate="-rotate-3" className="left-0 top-12 sm:left-4 lg:left-0 lg:top-16" />
      <FloatingPhotoCard src={heroConfig.photos[1].src} alt={heroConfig.photos[1].alt} className="bottom-4 left-0 hidden lg:block lg:left-4" />
      <FloatingPhotoCard src={heroConfig.photos[2].src} alt={heroConfig.photos[2].alt} rotate="rotate-2" className="right-0 top-20 sm:right-4 lg:right-0 lg:top-20" />
      <FloatingPhotoCard src={heroConfig.photos[3].src} alt={heroConfig.photos[3].alt} className="bottom-6 right-0 hidden lg:block lg:right-4" />

      <div className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 justify-center">
        <HeroVideo />
      </div>

      <motion.div
        whileHover={{ y: -5 }}
        className="absolute right-[calc(50%+160px)] top-1/2 z-30 rounded-xl border border-white/60 bg-white/90 px-4 py-2.5 shadow-md backdrop-blur-md lg:right-[calc(50%+171px)]"
      >
        <div className="font-display text-xl font-bold text-neutral-900">2.1M</div>
        <p className="text-[10px] uppercase tracking-wider text-neutral-500">views in 30 days</p>
      </motion.div>

      <motion.div
        whileHover={{ y: -5 }}
        className="absolute right-0 top-2 z-30 rounded-xl border border-white/60 bg-white/90 px-4 py-2.5 shadow-md backdrop-blur-md sm:right-4 lg:right-0"
      >
        <div className="font-display text-xl font-bold text-neutral-900">2,085,733</div>
        <p className="text-[10px] uppercase tracking-wider text-neutral-500">campaign video views</p>
      </motion.div>

      <p className="absolute left-1/2 top-2 z-30 w-28 -translate-x-[115px] -rotate-6 font-serif text-sm italic leading-tight text-neutral-700">
        Wellness / Lifestyle / Real People / Real Results
      </p>
      <p className="absolute left-1/2 top-1/2 z-30 w-32 translate-x-[175px] -translate-y-1/2 rotate-6 font-serif text-sm italic leading-tight text-neutral-700">
        More Creators, Brighter Brands
      </p>
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-[90vh] w-full items-center overflow-hidden bg-gradient-to-r from-[#FDFBF7] to-[#DDF3F5] lg:min-h-screen lg:max-h-[950px]">
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
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">Creator management + social-first content</p>
          <h1 className="mb-6 font-serif text-4xl leading-[1.08] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            Where creator culture meets measurable growth.
          </h1>
          <p className="mb-8 max-w-lg text-base leading-relaxed text-neutral-600">
            Create &amp; Capture connects ambitious brands with standout talent, social-first ideas and performance-led content built to move audiences.
          </p>

          <div className="mb-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-neutral-800">
              Start a Project <ArrowRight size={14} />
            </a>
            <a href="#work" className="inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-white/80 px-6 py-3.5 text-sm font-medium text-neutral-800 backdrop-blur-sm transition hover:bg-white">
              Explore Our Work <ArrowUpRight size={14} />
            </a>
          </div>

          <p className="mb-2.5 text-xs font-medium text-neutral-500">
            Trusted across beauty, fashion, wellness &amp; lifestyle
          </p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-600">
            <div className="flex -space-x-2">
              {heroConfig.photos.slice(0, 3).map((photo) => (
                <Image key={photo.src} src={photo.src} alt="" width={32} height={32} className="h-8 w-8 rounded-full border-2 border-[#FDFBF7] object-cover" />
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
