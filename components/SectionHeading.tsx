import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  className = "",
}: SectionHeadingProps) {
  const alignCls = align === "center" ? "mx-auto text-center items-center" : "";
  return (
    <Reveal
      className={`flex max-w-2xl flex-col gap-4 ${alignCls} ${className}`}
    >
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-taupe">
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl leading-[1.1] font-medium text-balance sm:text-4xl lg:text-5xl ${
          dark ? "text-ivory" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-1 text-base leading-relaxed sm:text-lg ${
            dark ? "text-ivory/70" : "text-ink-soft"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}