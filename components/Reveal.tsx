"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  duration?: number;
};

export default function Reveal({
  children,
  className,
  y = 44,
  delay = 0,
  duration = 1,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 86%", once: true },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [y, delay, duration]);

  return (
    <div
      ref={ref}
      className={`gsap-reveal ${className ?? ""}`}
      style={{ opacity: 0 }}
    >
      {children}
    </div>
  );
}