"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type StatProps = {
  value: number;
  suffix?: string;
  label: string;
  dark?: boolean;
};

export default function Stat({ value, suffix = "", label, dark = false }: StatProps) {
  const numRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = numRef.current;
    if (!el) return;

    const counter = { v: 0 };
    const ctx = gsap.context(() => {
      gsap.to(counter, {
        v: value,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
        onUpdate: () => {
          el.textContent = Math.round(counter.v).toLocaleString();
        },
      });
    }, el);

    return () => ctx.revert();
  }, [value]);

  return (
    <div className="flex flex-col gap-1.5">
      <span
        className={`font-display text-4xl font-medium tabular-nums sm:text-5xl ${
          dark ? "text-ivory" : "text-ink"
        }`}
      >
        <span ref={numRef}>0</span>
        <span className="text-taupe">{suffix}</span>
      </span>
      <span className={`text-sm ${dark ? "text-ivory/60" : "text-muted"}`}>{label}</span>
    </div>
  );
}