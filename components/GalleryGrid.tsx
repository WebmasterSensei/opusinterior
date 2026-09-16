"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { galleryItems, galleryCategories } from "@/lib/content";
import { ArrowLeftIcon, ArrowRightIcon, CloseIcon } from "./icons";

gsap.registerPlugin(ScrollTrigger);

export default function GalleryGrid() {
  const [active, setActive] = useState<(typeof galleryCategories)[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const items = useMemo(
    () => (active === "All" ? galleryItems : galleryItems.filter((i) => i.category === active)),
    [active],
  );

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const cards = el.querySelectorAll<HTMLElement>(".gallery-tile");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { autoAlpha: 0, y: 34, scale: 0.98 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          stagger: 0.07,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: active === "All" },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [active]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((p) => (p === null ? p : (p + 1) % items.length));
      if (e.key === "ArrowLeft") setLightbox((p) => (p === null ? p : (p - 1 + items.length) % items.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, items.length]);

  const current = lightbox !== null ? items[lightbox] : null;

  return (
    <div>
      <div className="mb-10 flex flex-wrap items-center gap-3">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => {
              setActive(cat);
              setLightbox(null);
            }}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
              active === cat
                ? "bg-ink text-ivory"
                : "border border-line bg-ivory text-ink-soft hover:border-taupe hover:text-taupe"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div ref={gridRef} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <button
            key={`${active}-${item.src}`}
            type="button"
            onClick={() => setLightbox(items.indexOf(item))}
            className="gallery-tile group relative block overflow-hidden rounded-2xl text-left"
          >
            <div className="aspect-[4/3] overflow-hidden bg-sand">
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-taupe">
                {item.category}
              </span>
              <span className="mt-1 font-display text-xl font-medium text-ivory">{item.title}</span>
            </div>
          </button>
        ))}
      </div>

      {current && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/95 p-4 backdrop-blur-sm sm:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setLightbox(null)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors hover:bg-ivory hover:text-charcoal"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((p) => (p === null ? p : (p - 1 + items.length) % items.length));
            }}
            className="absolute left-3 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors hover:bg-ivory hover:text-charcoal sm:left-10"
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((p) => (p === null ? p : (p + 1) % items.length));
            }}
            className="absolute right-3 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors hover:bg-ivory hover:text-charcoal sm:right-10"
          >
            <ArrowRightIcon className="h-5 w-5" />
          </button>
          <figure
            className="relative max-h-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] max-h-[75vh] w-full overflow-hidden rounded-2xl bg-charcoal sm:max-w-4xl">
              <Image
                src={current.src}
                alt={current.title}
                fill
                priority
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-contain"
              />
            </div>
            <figcaption className="mt-4 flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-taupe">
                  {current.category}
                </span>
                <p className="mt-0.5 font-display text-xl font-medium text-ivory">{current.title}</p>
              </div>
              <span className="text-sm text-ivory/50">
                {lightbox! + 1} / {items.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}