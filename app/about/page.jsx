import MissionAndVisionSection from "@/components/Sections/MissionAndVisionSection";
import OurCoreValue from "@/components/Sections/OurCoreValue";
import WhyChooseUsSection from "@/components/Sections/WhyChooseUsSection";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "About Adesa Media",
  description:
    "Learn about Adesa Media, a full service marketing agency in Lagos, Nigeria. Explore our mission, vision, core values, and why brands trust us for strategy, media buying, PR, and digital campaigns.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main role="main">
      <h1 className="sr-only">
        About Adesa Media Marketing Agency in Lagos, Nigeria
      </h1>
      <MissionAndVisionSection />
      <OurCoreValue />
      <WhyChooseUsSection />
    </main>
  );
}
