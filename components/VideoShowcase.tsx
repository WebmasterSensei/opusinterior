"use client";

import { videos } from "@/lib/content";
import Reveal from "./Reveal";

export default function VideoShowcase() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {videos.map((video, i) => (
        <Reveal key={video.src} delay={i * 0.08} className="md:first:row-span-2">
          <div className="group relative overflow-hidden rounded-2xl border border-line bg-charcoal shadow-lift">
            <video
              src={video.src}
              poster={video.poster}
              controls
              playsInline
              preload="metadata"
              className={`aspect-video w-full object-cover ${
                video.label === "Feature" ? "md:aspect-[3/4] md:h-full md:object-cover" : ""
              }`}
            />
            <span className="absolute left-4 top-4 rounded-full bg-charcoal/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-ivory backdrop-blur">
              {video.label}
            </span>
          </div>
          <p className="mt-3 font-display text-lg font-medium text-ink">{video.title}</p>
        </Reveal>
      ))}
    </div>
  );
}