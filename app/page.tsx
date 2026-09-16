import Image from "next/image";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import SectionHeading from "@/components/SectionHeading";
import ServiceGrid from "@/components/ServiceGrid";
import VideoShowcase from "@/components/VideoShowcase";
import ProcessSection from "@/components/ProcessSection";
import Stat from "@/components/Stat";
import Reveal from "@/components/Reveal";
import ParallaxImage from "@/components/ParallaxImage";
import CtaBand from "@/components/CtaBand";
import Button from "@/components/Button";
import { services, stats, galleryItems, uimg, videos } from "@/lib/content";
import { ArrowUpRightIcon, CheckIcon } from "@/components/icons";

export default function Home() {
  const featured = services.slice(0, 6);
  const previewImages = galleryItems.slice(0, 6);

  return (
    <>
      <Navbar overlay />
      <main>
        <Hero
          videoSrc={videos[0].src}
          poster={videos[0].poster}
        />

        <Marquee
          items={[
            "Fitted Kitchens",
            "Bespoke Joinery",
            "Loft Conversions",
            "Home Offices",
            "Wet Rooms",
            "Smart Home Infrastructure",
            "Flooring & Cladding",
            "Architectural Lighting",
          ]}
          className="border-y border-line bg-sand py-5"
          itemClassName="text-sm font-semibold uppercase tracking-[0.22em] text-ink-soft"
        />

        <section className="bg-stone">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8 lg:py-32">
            <ParallaxImage
              src={uimg("photo-1616486338812-3dadae4b4ace", 1200)}
              alt="Open-plan living space crafted by Opus Interiors"
              className="aspect-[4/5] rounded-3xl shadow-lift lg:aspect-[5/6]"
            />
            <div>
              <SectionHeading
                eyebrow="The Opus Interiors difference"
                title="We don't just decorate rooms — we engineer how they're lived in."
                description="For over fourteen years we've designed and fitted complete interior infrastructure: kitchens, built-in joinery, lighting, electrics and data — all planned in 3D, built in-house and finished to a standard you can feel."
              />
              <Reveal delay={0.1}>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Design-first, no hard sell",
                    "Our own fitters & joiners",
                    "Fixed, transparent quotes",
                    "10-year workmanship guarantee",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm font-medium text-ink-soft">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-taupe/15 text-taupe">
                        <CheckIcon className="h-3 w-3" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-10">
                  <Button href="/about" variant="ghost">
                    Discover Our Story
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-ivory">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                eyebrow="What we do"
                title="Every part of the home, one trusted team"
                description="From the cabinet doors to the cabling behind them — design, build, project management and finishing under a single contract."
              />
              <Reveal delay={0.15} className="lg:shrink-0">
                <Button href="/services" variant="solid">
                  All Services
                  <ArrowUpRightIcon className="h-4 w-4" />
                </Button>
              </Reveal>
            </div>
            <div className="mt-14">
              <ServiceGrid services={featured} />
            </div>
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

        <section className="bg-stone">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
            <SectionHeading
              eyebrow="See it moving"
              title="Recent projects on film"
              description="A few of our recent installations — played exactly how the finished rooms feel: calm, light and considered."
              align="center"
            />
            <div className="mt-14">
              <VideoShowcase />
            </div>
          </div>
        </section>

        <section className="bg-ivory">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                eyebrow="Portfolio"
                title="Recent fit-outs & renovations"
                description="A glimpse of kitchens, living spaces, studies and bathrooms we've designed and built across the UK."
              />
              <Reveal delay={0.15} className="lg:shrink-0">
                <Button href="/gallery" variant="ghost">
                  View Full Gallery
                  <ArrowUpRightIcon className="h-4 w-4" />
                </Button>
              </Reveal>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {previewImages.map((img, i) => (
                <Reveal
                  key={img.src}
                  delay={(i % 4) * 0.08}
                  className={i === 0 || i === 4 ? "row-span-2" : ""}
                >
                  <a
                    href="/gallery"
                    className={`group relative block overflow-hidden rounded-2xl bg-sand ${
                      i === 0 || i === 4 ? "h-full min-h-60" : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.title}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />
                    <span className="absolute inset-0 bg-charcoal/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <ProcessSection />

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}