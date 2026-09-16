import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import ServiceGrid from "@/components/ServiceGrid";
import ProcessSection from "@/components/ProcessSection";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { services, uimg } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Fitted kitchens, bespoke joinery, loft conversions, home offices, bathrooms and smart-home infrastructure — designed and built by Opus Interiors.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageBanner
          eyebrow="Our services"
          title="Designed, built & finished in-house"
          description="Every service is delivered by our own designers, joiners, fitters and electricians — one team, one contract, one standard of finish."
          image={uimg("photo-1600607687939-ce8a6c25118c", 1600)}
        />

        <section className="bg-stone">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
            <SectionHeading
              eyebrow="What we deliver"
              title="The full spectrum of interior craftsmanship"
              description="Whether it's a single fitted wardrobe or a full renovation, you get the same obsessive attention to tolerances, function and finish."
            />
            <div className="mt-14">
              <ServiceGrid services={services} />
            </div>
          </div>
        </section>

        <section className="border-y border-line bg-sand">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-3">
              <SectionHeading
                eyebrow="Trade services"
                title="Infrastructure you can't see matters just as much."
                description="Modern living depends on the hidden layers — power, data, light and comfort. We build those properly so the visible finish can be beautiful."
              />
              <Reveal delay={0.1} className="lg:col-span-2">
                <div className="grid gap-6 sm:grid-cols-2">
                  {[
                    {
                      n: "01",
                      t: "Electrical & rewiring",
                      d: "Certified new circuits, consumer unit upgrades and full re-wires — planned so nothing is ever on show unnecessarily.",
                    },
                    {
                      n: "02",
                      t: "Data & structured cabling",
                      d: "Cat6/7 runs, whole-home Wi-Fi and AV backbone fitted before plasterboard, with every cable labelled and terminated.",
                    },
                    {
                      n: "03",
                      t: "Plumbing & heating",
                      d: "Pipework, pressurised systems and underfloor heating zones, pressure-tested and certified before finishes go on.",
                    },
                    {
                      n: "04",
                      t: "Joinery & carpentry",
                      d: "Trims, doors, skirtings and hand-built furniture — constructed in our workshop and fitted to the millimetre.",
                    },
                  ].map((item) => (
                    <div
                      key={item.n}
                      className="rounded-2xl border border-line bg-ivory p-7 transition-colors duration-300 hover:border-taupe/40"
                    >
                      <span className="font-display text-sm font-medium text-taupe">{item.n}</span>
                      <h3 className="mt-3 font-display text-xl font-medium text-ink">{item.t}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.d}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <ProcessSection />

        <CtaBand
          title="Not sure which service you need?"
          text="Tell us what you're imagining — even roughly — and we'll come back with options, sketches and a realistic figure. That initial chat is always free."
        />
      </main>
      <Footer />
    </>
  );
}