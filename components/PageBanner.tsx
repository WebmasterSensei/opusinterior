import Image from "next/image";
import Reveal from "./Reveal";

type PageBannerProps = {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
};

export default function PageBanner({ eyebrow, title, description, image }: PageBannerProps) {
  return (
    <section className="relative overflow-hidden bg-charcoal">
      <div className="absolute inset-0">
        <Image src={image} alt="" fill priority className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/60" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-40 lg:px-8 lg:pb-24 lg:pt-44">
        <Reveal className="max-w-2xl">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.32em] text-taupe">
            <span className="h-px w-10 bg-taupe" />
            {eyebrow}
          </p>
          <h1 className="mt-6 font-display text-4xl leading-[1.05] font-medium text-ivory text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory/70">{description}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}