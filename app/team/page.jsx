import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import TeamGrid from "./_components/TeamGrid";
import { siteConfig } from "@/config/site";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Team",
  description:
    "Meet the leadership and experts at Adesa Media. Senior team driving strategy, creative, and media execution for brands in Lagos and Nigeria.",
  path: "/team",
});

export default function TeamPage() {
  const team = siteConfig.team;

  return (
    <main className="bg-white">
      <SectionHeading
        eyebrow="Our People"
        showFullClient={true}
        title="Senior expertise across strategy, creative, and delivery"
        description="Role-led structure built for quality control, accountability, and consistent execution."
        className=""
      />
      <section className="bg-slate-50">
        <Container className="py-20">
          <TeamGrid team={team} />
        </Container>
      </section>
    </main>
  );
}
