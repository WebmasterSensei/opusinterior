import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ParallaxImage from "@/components/ParallaxImage";
import Stat from "@/components/Stat";
import CtaBand from "@/components/CtaBand";
import Marquee from "@/components/Marquee";
import { stats, uimg } from "@/lib/content";
import { CheckIcon, ArrowUpRightIcon } from "@/components/icons";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Opus Interiors — home improvement and fitted infrastructure craftsmen creating custom, aesthetic interior solutions across the UK.",
};

const values = [
  {
    title: "Craft before speed",
    text: "We fit work to fit tolerances, not to a clock. If it takes an extra day to make the joint perfect, it takes an extra day.",
  },
  {
    title: "One team, accountable",
    text: "No subcontractor roulette. Our own joiners, fitters and electricians see every project through from start to finish.",
  },
  {
    title: "Honest numbers",
    text: "Transparent, itemised quotes with no surprises mid-project. If we find something, we call before we change anything.",
  },
  {
    title: "Built to last",
    text: "Materials and methods chosen for decades of daily use — backed by a 10-year workmanship guarantee.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageBanner
          eyebrow="About Opus Interiors"
          title="The people behind the perfect joints"
          description="A design-led home improvement and fitted infrastructure company that behaves more like a workshop than a contractor."
          image={uimg("photo-1521737604893-d14cc237f11d", 1600)}
        />

        <section className="bg-stone">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8 lg:py-32">
            <div>
              <SectionHeading
                eyebrow="Our story"
                title="Started at a bench, built on trust"
                description="Opus Interiors began fourteen years ago with two joiners and a bench saw in South London. We quickly learned that homeowners don't just want fitted furniture — they want a company that will treat their house like it's their own."
              />
              <Reveal delay={0.1}>
                <p className="mt-6 leading-relaxed text-ink-soft">
                  Today that&apos;s still our whole business: custom and aesthetic interior solutions for modern homes,
                  workspaces and functional living spaces. We design in 3D, build in our own workshop, and fit with the
                  same craftsmen — so the drawer that slides softly today will still slide softly in ten years.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-5 leading-relaxed text-ink-soft">
                  We&apos;re registered, insured and Quality Mark certified, and we work across London, the Home Counties and
                  most of the UK. More importantly, we&apos;re the kind of company your neighbours will ask about.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-9">
                  <Button href="/contact" variant="solid">
                    Work With Us
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </Button>
                </div>
              </Reveal>
            </div>
            <ParallaxImage
              src={uimg("photo-1552321554-5fefe8c9ef14", 1200)}
              alt="A kitchen fitted by Opus Interiors"
              className="aspect-[4/5] rounded-3xl shadow-lift"
            />
          </div>
        </section>

        <section className="bg-charcoal">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
              {stats.map((s) => (
                <Stat key={s.label} value={s.value} suffix={s.suffix} label={s.label} dark />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ivory">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
            <SectionHeading
              eyebrow="What we stand for"
              title="The values sewn into every seam"
              align="center"
            />
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={(i % 4) * 0.08}>
                  <div className="h-full rounded-2xl border border-line bg-stone p-7 transition-all duration-300 hover:-translate-y-1 hover:border-taupe/40 hover:shadow-card">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-taupe/15 text-taupe">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-medium text-ink">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-stone">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8 lg:py-32">
            <ParallaxImage
              src={uimg("photo-1497366754035-f200968a6e72", 1200)}
              alt="A home office designed by Opus Interiors"
              className="aspect-[4/3] rounded-3xl shadow-lift lg:order-2"
            />
            <div className="lg:order-1">
              <SectionHeading
                eyebrow="Why choose Opus"
                title="The difference you'll feel on day one"
              />
              <div className="mt-8 space-y-3">
                {[
                  "Six-figure projects and single-wardrobe jobs get the same design rigour",
                  "Fixed quotes — the price we agree is the price you pay",
                  "Daily photo updates and a named site manager on every project",
                  "Workshop-built joinery for finishes impossible on-site",
                  "Snag-free handover and 10 years of cover behind every joint",
                ].map((point, i) => (
                  <Reveal key={point} delay={i * 0.06}>
                    <div className="flex items-start gap-4 rounded-xl bg-ivory p-5">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-taupe/15 text-taupe">
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>
                      <p className="text-sm font-medium text-ink-soft">{point}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Marquee
          items={[
            "Quality Mark Certified",
            "Fully Insured",
            "10-Year Guarantee",
            "Workshop-Built Joinery",
            "Named Site Manager",
            "Fixed-Price Quotes",
          ]}
          className="border-y border-line bg-sand py-5"
          itemClassName="text-sm font-semibold uppercase tracking-[0.22em] text-ink-soft"
        />

        <CtaBand
          title="Let's build your project together"
          text="Visit us for a coffee at our showroom workshop, or we'll come to you. Either way, the first conversation's free."
        />
      </main>
      <Footer />
    </>
  );
}