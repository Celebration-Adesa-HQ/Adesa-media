import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/config/site";
import BlogSection from "@/components/Sections/BlogSection";

export const metadata = {
  title: "Media & PR Agency Nigeria",
  description:
    "Explore Adesa Media's Media & PR services. Full-service marketing agency offering media buying, PR strategy, and digital campaigns for brands in Nigeria.",
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/media",
  },
  openGraph: {
    title: "Media & PR Agency Nigeria | Adesa Media",
    description:
      "Explore Adesa Media's Media & PR services. Full-service marketing agency offering media buying, PR strategy, and digital campaigns for brands in Nigeria.",
    url: `${siteConfig.url}/media`,
    siteName: siteConfig.title,
    images: [
      {
        url: `${siteConfig.url}/Adesa-media-logo-black.png`,
        width: 800,
        height: 600,
        alt: "Adesa Media Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Media & PR Agency Nigeria | Adesa Media",
    description:
      "Explore Adesa Media's Media & PR services. Full-service marketing agency offering media buying, PR strategy, and digital campaigns for brands in Nigeria.",
    site: "@adesahq",
    creator: "@adesahq",
    images: [`${siteConfig.url}/Adesa-media-logo-black.png`],
  },
};

export default function MediaPRPage() {
  const { mediaPR } = siteConfig;

  return (
    <main className="bg-background-light dark:bg-background-dark font-display transition-colors duration-300">
      {/* Hero */}
      <SectionHeading
        showFullClient
        eyebrow={mediaPR.hero.eyebrow}
        title={mediaPR.hero.title}
        description={mediaPR.hero.description}
      />

      <BlogSection variant="blog" />
    </main>
  );
}
