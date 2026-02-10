import AboutSection from "@/components/Sections/AboutSection";
import MissionAndVisionSection from "@/components/Sections/MissionAndVisionSection";
import OurCoreValue from "@/components/Sections/OurCoreValue";
import WhyChooseUsSection from "@/components/Sections/WhyChooseUsSection";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Adesa Media, a 360° marketing agency specializing in branding, social media, advertising, media buying, and influencer marketing.",
  keywords: [
    "Adesa Media",
    "marketing agency",
    "branding",
    "social media marketing",
    "advertising",
    "media buying",
    "influencer marketing",
  ],
  authors: [{ name: "Adesa Media" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "About Us | Adesa Media",
    description:
      "Discover how Adesa Media builds brands and enables businesses to connect with their audience through creative marketing strategies.",
    url: "https://adesamedia.com/about",
    siteName: "Adesa Media",
    type: "website",
    images: [
      {
        url: "https://adesamedia.com/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "Adesa Media - About Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Adesa Media",
    description:
      "Discover how Adesa Media builds brands and enables businesses to connect with their audience through creative marketing strategies.",
    images: ["https://adesamedia.com/og-about.jpg"],
    site: "@AdesaMedia",
    creator: "@AdesaMedia",
  },
  canonical: "https://adesamedia.com/about",
};

export default function AboutPage() {
  return (
    <main>
      <h1 className="sr-only">About Adesa Media</h1>
      <MissionAndVisionSection />
      <OurCoreValue />
      {/* Why Adesa Media */}
      <WhyChooseUsSection />
    </main>
  );
}
