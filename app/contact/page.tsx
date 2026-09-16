import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";
import Reveal from "@/components/Reveal";
import { serviceAreas, uimg } from "@/lib/content";
import { PhoneIcon, MailIcon, PinIcon, ClockIcon, ArrowUpRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get a free, no-obligation quote from Opus Interiors. Call, email or send us your project details — we'll be in touch within one working day.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageBanner
          eyebrow="Contact us"
          title="Tell us what you're dreaming of"
          description="Whether it's a full renovation or a fitted wardrobe — send us the details and we'll come back with options and a figure. Free, friendly, no pressure."
          image={uimg("photo-1600607687920-4e2a09cf159d", 1600)}
        />

        <section className="bg-stone">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-28">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Get in touch"
                title="We'd love to hear about your space"
                description="Choose whichever way suits you — phone, email or the form. We reply to every enquiry within one working day."
              />

              <div className="mt-10 flex flex-col gap-4">
                {[
                  {
                    icon: <PhoneIcon className="h-5 w-5" />,
                    label: "Call the studio",
                    value: "+44 (0)20 8001 2345",
                    detail: "Mon–Fri, 8am–6pm",
                    href: "tel:+442080012345",
                  },
                  {
                    icon: <MailIcon className="h-5 w-5" />,
                    label: "Email us",
                    value: "hello@opusinteriors.co.uk",
                    detail: "Replies within one working day",
                    href: "mailto:hello@opusinteriors.co.uk",
                  },
                  {
                    icon: <PinIcon className="h-5 w-5" />,
                    label: "Showroom & workshop",
                    value: "12 Craftworks Yard, London",
                    detail: "Visits by appointment",
                    href: "https://maps.google.com/?q=London",
                  },
                ].map((c, i) => (
                  <Reveal key={c.label} delay={i * 0.08}>
                    <a
                      href={c.href}
                      {...(c.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                      className="group flex items-start gap-5 rounded-2xl border border-line bg-ivory p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-taupe/40 hover:shadow-card"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sand text-ink transition-colors duration-300 group-hover:bg-taupe group-hover:text-ivory">
                        {c.icon}
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                          {c.label}
                        </span>
                        <span className="mt-1 block font-display text-xl font-medium text-ink">{c.value}</span>
                        <span className="mt-0.5 block text-sm text-ink-soft">{c.detail}</span>
                      </span>
                    </a>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.2}>
                <div className="mt-8 rounded-2xl bg-sand p-6">
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-ink-soft">
                    <ClockIcon className="h-4 w-4 text-taupe" />
                    Opening hours
                  </p>
                  <dl className="mt-4 space-y-2 text-sm text-ink-soft">
                    <div className="flex justify-between">
                      <dt>Monday – Friday</dt>
                      <dd>8:00 – 18:00</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt>Saturday</dt>
                      <dd>9:00 – 15:00</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt>Sunday</dt>
                      <dd>Closed</dd>
                    </div>
                  </dl>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.05} className="h-full">
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </section>

        <section className="border-t border-line bg-charcoal">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <Reveal>
              <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <SectionHeading
                    dark
                    eyebrow="Where we work"
                    title="Serving homes across the UK"
                    description="Our core studio is in London, with project teams covering the regions below. Not listed? Get in touch — we often travel further for larger commissions."
                  />
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:shrink-0">
                  {serviceAreas.map((area) => (
                    <div
                      key={area}
                      className="flex items-center justify-between gap-6 rounded-xl border border-ivory/10 px-5 py-3.5"
                    >
                      <span className="text-sm font-medium text-ivory/85">{area}</span>
                      <ArrowUpRightIcon className="h-4 w-4 text-taupe" />
                    </div>
                  ))}
                  <div className="flex items-center justify-between gap-6 rounded-xl border border-taupe/40 bg-taupe/10 px-5 py-3.5">
                    <span className="text-sm font-semibold text-taupe">Somewhere else?</span>
                    <ArrowUpRightIcon className="h-4 w-4 text-taupe" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}