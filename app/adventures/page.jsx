import { Container } from "@/components/Container";
import AdventuresList from "./_components/AdventuresList";
import HeroCarousel from "./_components/HeroCarousel";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Case Studies & Adventures - Full Service Marketing Agency",
  description:
    "Explore Adesa Media's featured campaigns and adventures. See how our marketing, media, and PR strategies deliver measurable growth and engagement for leading brands.",
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
    "adesa media adventures",
    "adesa media adventure",
    "adventure"
  ],
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
