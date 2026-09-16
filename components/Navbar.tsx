"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { navLinks } from "@/lib/content";
import { MenuIcon, CloseIcon } from "./icons";
import Image from "next/image";

type NavbarProps = {
  overlay?: boolean;
};

export default function Navbar({ overlay = false }: NavbarProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = navRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: -28 },
        { autoAlpha: 1, y: 0, duration: 1, delay: 0.15, ease: "power3.out" }
      );
    }, el);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = overlay ? scrolled : true;
  const onDark = overlay && !scrolled;

  return (
    <header ref={navRef} className="fixed inset-x-0 top-0 z-50">
      <nav
        className={`transition-all duration-500 ${
          solid
            ? "border-b border-line bg-ivory/85 shadow-sm backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:h-20 lg:px-8">
          <Link href="/" className="transition-opacity hover:opacity-80">
            <img
              src="https://opusinteriors.uk/wp-content/smush-webp/2024/08/opusinteriors.png.webp"
              alt="Opus Builders"
              className="h-9 w-auto bg-transparent"
            />
          </Link>

          <ul
            className={`hidden items-center gap-9 text-sm font-medium lg:flex ${
              onDark ? "text-ivory/90" : "text-ink-soft"
            }`}
          >
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`group relative pb-1 transition-colors hover:text-taupe ${
                      active ? "text-taupe" : ""
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-px bg-taupe transition-all duration-300 ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                onDark
                  ? "bg-ivory text-charcoal hover:bg-taupe hover:text-ivory"
                  : "bg-ink text-ivory hover:bg-taupe"
              }`}
            >
              Get a Quote
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className={`flex h-10 w-10 items-center justify-center rounded-full lg:hidden ${
              onDark ? "text-ivory" : "text-ink"
            }`}
          >
            {open ? (
              <CloseIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 top-18 flex flex-col bg-ivory px-6 pb-10 pt-10 transition-all duration-500 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-2">
          {navLinks.map((link, i) => {
            const active = pathname === link.href;
            return (
              <li
                key={link.href}
                style={{
                  transition: `transform .45s ease ${i * 0.05}s, opacity .45s ease ${i * 0.05}s`,
                  transform: open ? "none" : "translateY(12px)",
                  opacity: open ? 1 : 0
                }}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`font-display block py-3 text-4xl transition-colors ${
                    active ? "text-taupe" : "text-ink hover:text-taupe"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="mt-auto flex flex-col gap-3 border-t border-line pt-8">
          <Link
            href="/contact"
            className="rounded-full bg-ink py-4 text-center text-sm font-semibold text-ivory"
          >
            Get a Free Quote
          </Link>
          <a
            href="tel:+442080012345"
            className="text-center text-sm font-medium text-muted"
          >
            +44 (0)20 8001 2345
          </a>
        </div>
      </div>
    </header>
  );
}
