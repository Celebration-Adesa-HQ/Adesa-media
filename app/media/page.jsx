import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/config/site";
import BlogSection from "@/components/Sections/BlogSection";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Media & PR Agency Nigeria",
  description:
    "Explore Adesa Media's Media & PR services. Full-service marketing agency offering media buying, PR strategy, and digital campaigns for brands in Nigeria.",
  path: "/media",
});

export default function MediaPRPage() {
  const { mediaPR } = siteConfig;

  return (
    <main className="bg-background-light dark:bg-background-dark font-display transition-colors duration-300">
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
