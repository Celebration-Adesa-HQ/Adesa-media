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
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: "About Adesa Media - Full-Service Marketing Agency in Lagos",
    description:
      "Learn about Adesa Media, a leading full-service marketing agency in Lagos, Nigeria. Discover our mission, vision, core values, and why brands trust us.",
    url: `${siteConfig.url}/about`,
    siteName: siteConfig.title,
    type: "website",
    images: [
      {
        url: siteConfig.logo,
        width: 800,
        height: 600,
        alt: "Adesa Media Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Adesa Media - Full-Service Marketing Agency in Lagos",
    description:
      "Learn about Adesa Media, a leading full-service marketing agency in Lagos, Nigeria. Discover our mission, vision, core values, and why brands trust us.",
    images: [siteConfig.logo],
    site: "@adesahq",
  },
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: siteConfig.favicon,
    apple: siteConfig.favicon,
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

export default function AboutPage() {
  return (
    <main>
      <h1 className="sr-only">About Adesa Media</h1>
      <MissionAndVisionSection />
      <OurCoreValue />
      <WhyChooseUsSection />
    </main>
  );
}
