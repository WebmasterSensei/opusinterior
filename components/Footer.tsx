"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { navLinks, services, serviceAreas } from "@/lib/content";
import { PhoneIcon, MailIcon, PinIcon } from "./icons";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
        },
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <footer className="bg-charcoal text-ivory/80">
      <div ref={ref} className="mx-auto gsap-reveal max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-display text-3xl text-ivory">
              Opus<span className="text-taupe">.</span>
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.28em] text-taupe">
              Interiors
            </p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ivory/60">
              Custom and aesthetic interior solutions for modern homes, workspaces and functional living spaces
              across the UK.
            </p>
            <div className="mt-8 flex gap-3">
              <a
                href="tel:+442080012345"
                aria-label="Call us"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/15 text-ivory/70 transition-colors hover:border-taupe hover:text-taupe"
              >
                <PhoneIcon className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@opusinteriors.co.uk"
                aria-label="Email us"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/15 text-ivory/70 transition-colors hover:border-taupe hover:text-taupe"
              >
                <MailIcon className="h-5 w-5" />
              </a>
              <a
                href="https://maps.google.com/?q=London"
                target="_blank"
                rel="noreferrer"
                aria-label="Find us"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/15 text-ivory/70 transition-colors hover:border-taupe hover:text-taupe"
              >
                <PinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-ivory/50">Explore</h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-taupe">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-ivory/50">Services</h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <Link href="/services" className="transition-colors hover:text-taupe">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-ivory/50">Areas We Cover</h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              {serviceAreas.slice(0, 5).map((a) => (
                <li key={a} className="text-ivory/60">
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-ivory/10 pt-8 text-xs text-ivory/40 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Opus Interiors Ltd. All rights reserved.</p>
          <p>Quality Mark certified · Fully insured · Workmanship guarantee</p>
        </div>
      </div>
    </footer>
  );
}