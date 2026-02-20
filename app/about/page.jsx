import MissionAndVisionSection from "@/components/Sections/MissionAndVisionSection";
import OurCoreValue from "@/components/Sections/OurCoreValue";
import WhyChooseUsSection from "@/components/Sections/WhyChooseUsSection";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "About Adesa Media - Full-Service Marketing Agency in Lagos",
  description:
    "Learn about Adesa Media, a leading full-service marketing agency in Lagos, Nigeria. Discover our mission, vision, core values, and why brands trust us.",
  keywords: [
    "Marketing Agency Lagos",
    "Full-Service Marketing Agency Nigeria",
    "Brand Strategy Agency Lagos",
    "PR Agency Lagos",
    "Digital Marketing Agency Nigeria",
  ],
  alternates: {
    canonical: "https://www.adesamedia.com/about",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  icons: {
    icon: siteConfig.favicon,
    apple: siteConfig.favicon,
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
