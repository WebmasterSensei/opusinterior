"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { processSteps } from "@/lib/content";
import SectionHeading from "./SectionHeading";

gsap.registerPlugin(ScrollTrigger);

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const line = el.querySelector<HTMLElement>(".process-line-fill");
      if (line) {
        gsap.fromTo(
          line,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            transformOrigin: "left center",
            scrollTrigger: { trigger: el, start: "top 75%", end: "bottom 55%", scrub: 0.6 },
          },
        );
      }
      gsap.fromTo(
        el.querySelectorAll(".process-step"),
        { autoAlpha: 0, y: 44 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 80%", once: true },
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-ivory">
      <div ref={ref} className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Our process"
          title="From first sketch to final screw"
          description="A calm, transparent process run entirely by our own team — so the finished space lands exactly where the conversation started."
          align="center"
        />

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-line lg:block">
            <div className="process-line-fill h-px bg-taupe" />
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((s) => (
              <div key={s.step} className="process-step relative">
                <div className="absolute left-0 -top-px hidden h-px w-9 bg-taupe lg:block" />
                <span className="relative z-10 flex h-18 w-18 items-center justify-center rounded-full border border-line bg-ivory font-display text-2xl font-medium text-ink shadow-card">
                  {s.step}
                  <span className="absolute inset-0 -z-10 rounded-full bg-ivory" />
                </span>
                <h3 className="mt-6 font-display text-xl font-medium text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}