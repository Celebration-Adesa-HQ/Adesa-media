import { Container } from "@/components/Container";
import AdventuresList from "./_components/AdventuresList";
import HeroCarousel from "./_components/HeroCarousel";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Case Studies & Adventures - Full Service Marketing Agency",
  description:
    "Explore Adesa Media's featured campaigns and adventures. See how our marketing, media, and PR strategies deliver measurable growth and engagement for leading brands.",
  alternates: { canonical: "https://www.adesamedia.com/adventures" },
  openGraph: {
    title: "Case Studies & Adventures - Adesa Media",
    description:
      "Discover our campaigns, case studies, and adventures showcasing full-service marketing, media, and PR expertise.",
    type: "website",
    url: "https://adesamedia.com/adventures",
    images: [
      {
        url: `${siteConfig.url}/hot-air-balloons-6144x4096-12393.jpg`,
        width: 1920,
        height: 1080,
        alt: "Breathtaking landscape of misty mountain peaks at dawn",
      },
    ],
  },
  icons: {
    icon: "/Adesa-media-logo-black.png",
    apple: "/apple-touch-icon.png",
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

export default function AdventuresPage() {
  return (
    <main className="relative">
      {/* Hero */}
      <HeroCarousel />

      {/* Adventures List */}
      <Container className="py-16">
        <AdventuresList />
      </Container>
    </main>
  );
}
