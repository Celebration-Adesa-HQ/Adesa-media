import MissionAndVisionSection from "@/components/Sections/MissionAndVisionSection";
import OurCoreValue from "@/components/Sections/OurCoreValue";
import WhyChooseUsSection from "@/components/Sections/WhyChooseUsSection";

export const metadata = {
  title: "About Us - Full-Service Marketing Agency",
  description:
    "Learn about Adesa Media, a leading full-service marketing agency in Lagos, Nigeria. Discover our mission, vision, core values, and why brands trust us.",
  keywords: [
    "Marketing Agency Lagos",
    "Full-Service Marketing Agency Nigeria",
    "Brand Strategy Agency Lagos",
    "PR Agency Lagos",
    "Digital Marketing Agency Nigeria",
    "marketing agency in Lagos",
    "marketing agency Nigeria",
    "full service marketing agency",
    "media buying agency Nigeria",
    "PR agency Lagos",
    "digital marketing agency Nigeria",
    "OOH advertising Nigeria",
    "brand strategy agency Lagos",
    "Adesa Media",
    "adesamedia.com",
    "adesa",
    "adesa media.com",
    "adesa media about",
    "about"
  ],
  alternates: {
    canonical: "https://www.adesamedia.com/about",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

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
