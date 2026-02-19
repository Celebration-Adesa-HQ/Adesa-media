import { Container } from "@/components/Container";
import AdventuresList from "./_components/AdventuresList";
import HeroCarousel from "./_components/HeroCarousel";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Case Studies & Adventures - Full Service Marketing Agency",
  description:
    "Explore Adesa Media's featured campaigns and adventures. See how our marketing, media, and PR strategies deliver measurable growth and engagement for leading brands.",
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: { canonical: `${siteConfig.url}/adventures` },
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
  twitter: {
    card: "summary_large_image",
    title: "Case Studies & Adventures - Adesa Media",
    description:
      "Explore how Adesa Media drives brand growth with marketing, media, and PR campaigns.",
    images: [`${siteConfig.url}/hot-air-balloons-6144x4096-12393.jpg`],
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
