import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: MouseEventHandler;
  variant?: "solid" | "ghost" | "onDark" | "outlineDark";
  className?: string;
  type?: "button" | "submit";
};

const variants: Record<string, string> = {
  solid: "bg-ink text-ivory hover:bg-charcoal",
  ghost: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-ivory",
  onDark: "bg-ivory text-charcoal hover:bg-taupe hover:text-ivory",
  outlineDark: "border border-ivory/40 text-ivory hover:border-ivory hover:bg-ivory hover:text-charcoal",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "solid",
  className = "",
  type = "button",
}: ButtonProps) {
  const cls = `${variants[variant]} inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-300 ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}