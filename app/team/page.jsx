import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import TeamGrid from "./_components/TeamGrid";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Team - Adesa Media | Full-Service Marketing Agency",
  description:
    "Meet the leadership and experts at Adesa Media. Senior team driving strategy, creative, and media execution for brands in Lagos and Nigeria.",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: "Team - Adesa Media",
    description:
      "Our senior team delivers strategy, creativity, and execution for leading brands across marketing, media, and PR.",
    url: "https://adesamedia.com/team",
    siteName: "Adesa Media",
    images: [
      {
        url: `${siteConfig.url}/Adesa-media-logo-white.png`,
        width: 800,
        height: 600,
        alt: "Adesa Media Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Team - Adesa Media",
    description:
      "Meet the experts behind strategy, creative, and media execution at Adesa Media.",
    images: [`${siteConfig.url}/Adesa-media-logo-black.png`],
    creator: "@adesahq",
  },
  alternates: {
    canonical: "https://adesamedia.com/team",
  },
};

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
