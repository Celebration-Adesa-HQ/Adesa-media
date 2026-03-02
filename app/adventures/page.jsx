import { Container } from "@/components/Container";
import AdventuresList from "./_components/AdventuresList";
import HeroCarousel from "./_components/HeroCarousel";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Case Studies & Adventures",
  description:
    "Explore Adesa Media’s featured campaigns and case studies. See how our marketing, media buying, PR, digital, and experiential strategies drive measurable growth for leading brands.",
  path: "/adventures",
});

export default function AdventuresPage() {
  return (
    <main className="relative" role="main">
      <h1 className="sr-only">
        Case Studies and Marketing Campaigns by Adesa Media
      </h1>

      <HeroCarousel />

      <Container className="py-16">
        <AdventuresList />
      </Container>
    </main>
  );
}
