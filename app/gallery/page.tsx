import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import GalleryGrid from "@/components/GalleryGrid";
import VideoShowcase from "@/components/VideoShowcase";
import CtaBand from "@/components/CtaBand";
import { uimg } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse recent Opus Interiors projects — fitted kitchens, living spaces, studies, bathrooms and joinery on film and in pictures.",
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageBanner
          eyebrow="Portfolio"
          title="Our work, in pictures"
          description="Filter by room type to see the joinery, finishes and lighting we build every week. Click any photo to view it larger."
          image={uimg("photo-1618221195710-dd6b41faaea6", 1600)}
        />

        <section className="bg-stone">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
            <GalleryGrid />
          </div>
        </section>

        <section className="border-t border-line bg-ivory">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
            <SectionHeading
              eyebrow="On film"
              title="Walk through the finished rooms"
              description="Short videos of recent installations — press play and step inside."
              align="center"
            />
            <div className="mt-14">
              <VideoShowcase />
            </div>
          </div>
        </section>

        <CtaBand
          title="Want a space this considered?"
          text="Every project in this gallery started with the same free consultation. Yours can too."
        />
      </main>
      <Footer />
    </>
  );
}