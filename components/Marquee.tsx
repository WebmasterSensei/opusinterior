"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type MarqueeProps = {
  items: string[];
  className?: string;
  itemClassName?: string;
};

function Row({ items, itemClassName }: { items: string[]; itemClassName?: string }) {
  return (
    <div className="flex w-max shrink-0 items-center">
      {items.map((item, i) => (
        <span key={i} className={`flex items-center gap-6 pr-6 ${itemClassName ?? ""}`}>
          <span className="whitespace-nowrap">{item}</span>
          <span className="text-taupe" aria-hidden="true">
            ✦
          </span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee({
  items,
  className = "",
  itemClassName = "",
}: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        xPercent: -50,
        ease: "none",
        duration: 36,
        repeat: -1,
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div className={`overflow-hidden ${className}`}>
      <div ref={trackRef} className="flex w-max">
        <Row items={items} itemClassName={itemClassName} />
        <Row items={items} itemClassName={itemClassName} />
      </div>
    </div>
  );
}