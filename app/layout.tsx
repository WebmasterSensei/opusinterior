import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Opus Interiors | Home Improvements & Fitted Infrastructure Experts UK",
    template: "%s | Opus Interiors",
  },
  description:
    "Opus Interiors specialize in custom and aesthetic interior solutions for modern homes, workspaces, and functional living spaces across the UK.",
  keywords: [
    "home improvements",
    "fitted infrastructure",
    "interior solutions",
    "fitted kitchens",
    "bespoke joinery",
    "UK",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-stone text-ink">
        {children}
      </body>
    </html>
  );
}