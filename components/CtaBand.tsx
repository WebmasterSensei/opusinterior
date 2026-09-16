import Reveal from "./Reveal";
import Button from "./Button";

type CtaBandProps = {
  title?: string;
  text?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export default function CtaBand({
  title = "Ready to transform your space?",
  text = "Book a free, no-obligation design consultation with our team. We'll visit your home, listen to how you live, and propose options that fit your budget.",
  primary = { label: "Get a Free Quote", href: "/contact" },
  secondary = { label: "See Our Recent Work", href: "/gallery" },
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden bg-charcoal">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] [background-size:22px_22px]" />
      <Reveal className="relative mx-auto flex max-w-7xl flex-col items-start gap-10 px-6 py-24 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-taupe">Let&apos;s build together</p>
          <h2 className="mt-4 font-display text-3xl leading-[1.1] font-medium text-ivory sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ivory/70">{text}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 lg:shrink-0">
          <Button href={primary.href} variant="onDark">
            {primary.label}
          </Button>
          <Button href={secondary.href} variant="outlineDark">
            {secondary.label}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}