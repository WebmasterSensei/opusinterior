"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRightIcon } from "./icons";

type HeroProps = {
  videoSrc: string;
  poster: string;
};

export default function Hero({ videoSrc, poster }: HeroProps) {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(".hero-media", { autoAlpha: 0, scale: 1.08 }, { autoAlpha: 1, scale: 1, duration: 1.8, ease: "power2.out" })
        .fromTo(".hero-overlay", { autoAlpha: 0 }, { autoAlpha: 1, duration: 1.2 }, "-=1.4")
        .fromTo(".hero-eyebrow", { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.9 }, "-=0.8")
        .fromTo(
          ".hero-line-inner",
          { yPercent: 112 },
          { yPercent: 0, duration: 1.1, stagger: 0.12 },
          "-=0.6",
        )
        .fromTo(".hero-sub", { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.9 }, "-=0.7")
        .fromTo(".hero-cta", { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.1 }, "-=0.55")
        .fromTo(".hero-scrollcue", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.8, delay: 0.3 }, "-=0.3");
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative flex min-h-svh items-center overflow-hidden bg-charcoal">
      <div className="hero-media absolute inset-0">
        <video
          className="h-full w-full object-cover"
          src={videoSrc}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <div className="hero-overlay absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/55 to-charcoal/20" />
        <div className="hero-overlay absolute inset-0 bg-gradient-to-t from-charcoal/85 via-transparent to-charcoal/40" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-40 lg:px-8 lg:pt-44">
        <div className="max-w-3xl">
          <p className="hero-eyebrow flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.32em] text-taupe">
            <span className="h-px w-10 bg-taupe" />
            Home Improvements &amp; Fitted Infrastructure
          </p>

          <h1 className="mt-7 font-display text-5xl leading-[1.04] font-medium text-ivory sm:text-6xl lg:text-7xl">
            {["Custom interior solutions", "for modern homes", "& functional spaces."].map((line, i) => (
              <span key={i} className="block overflow-hidden pb-1">
                <span
                  className={`hero-line-inner block ${i >= 1 ? "text-taupe italic" : ""}`}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <p className="hero-sub mt-8 max-w-xl text-lg leading-relaxed text-ivory/75">
            Opus Interiors specialise in custom and aesthetic interior solutions — designed, built and finished by
            our own craftsmen for modern homes, workspaces and functional living spaces across the UK.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="/services"
              className="hero-cta group inline-flex items-center gap-2 rounded-full bg-ivory px-8 py-4 text-sm font-semibold text-charcoal transition-colors hover:bg-taupe hover:text-ivory"
            >
              Explore Our Services
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="/gallery"
              className="hero-cta inline-flex items-center gap-2 rounded-full border border-ivory/40 px-8 py-4 text-sm font-semibold text-ivory transition-colors hover:border-ivory hover:bg-ivory hover:text-charcoal"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>

      <div className="hero-scrollcue absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-3 text-ivory/50">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">Scroll</span>
          <span className="block h-12 w-px overflow-hidden bg-ivory/20">
            <span className="block h-6 w-px animate-pulse bg-taupe" />
          </span>
        </div>
      </div>
    </section>
  );
}