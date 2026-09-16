"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { serviceIconMap, ArrowUpRightIcon } from "./icons";
import type { Service } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

type ServiceGridProps = {
  services: Service[];
};

export default function ServiceGrid({ services }: ServiceGridProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cards = el.querySelectorAll<HTMLElement>(".service-card");

    const ctx = gsap.context(() => {
      if (cards.length) {
        gsap.fromTo(
          cards,
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 84%", once: true },
          },
        );
      }
    }, el);

    return () => ctx.revert();
  }, [services.length]);

  return (
    <div ref={ref} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((service) => {
        const Icon = serviceIconMap[service.icon] ?? serviceIconMap.smart;
        return (
          <Link
            key={service.title}
            href="/services"
            className="service-card group flex flex-col rounded-2xl border border-line bg-ivory p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-taupe/40 hover:shadow-card"
          >
            <div className="flex items-start justify-between">
              <span className="rounded-xl bg-sand p-3.5 text-ink transition-colors duration-300 group-hover:bg-taupe group-hover:text-ivory">
                <Icon className="h-7 w-7" />
              </span>
              <ArrowUpRightIcon className="h-5 w-5 text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-taupe" />
            </div>
            <h3 className="mt-6 font-display text-xl font-medium text-ink">{service.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{service.blurb}</p>
            <ul className="mt-4 space-y-1.5 text-xs text-muted">
              {service.features.slice(0, 2).map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-taupe" />
                  {f}
                </li>
              ))}
            </ul>
          </Link>
        );
      })}
    </div>
  );
}