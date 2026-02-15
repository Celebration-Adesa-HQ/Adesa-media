import { notFound } from "next/navigation";
import TeamProfile from "./_components/TemProfile";
import { siteConfig } from "@/config/site";

// Generate page-level metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const member = siteConfig.team.find((m) => m.slug === slug);

  if (!member) return {};

  return {
    title: `${member.name} – ${member.role} | ${siteConfig.title}`,
    description: member.bio,
    alternates: { canonical: `${siteConfig.url}/team/${member.slug}` },
    openGraph: {
      title: `${member.name} – ${member.role}`,
      description: member.bio,
      url: `${siteConfig.url}/team/${member.slug}`,
      siteName: siteConfig.title,
      type: "profile",
      images: member.image ? [{ url: `${siteConfig.url}${member.image}` }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${member.name} – ${member.role}`,
      description: member.bio,
      images: member.image ? [`${siteConfig.url}${member.image}`] : [],
      creator: siteConfig.socialMedia.twitter?.href || "",
    },
  };
}

export default async function TeamBioPage({ params }) {
  const { slug } = await params;

  const member = siteConfig.team.find((m) => m.slug === slug);

  if (!member) return notFound();

  return <TeamProfile member={member} />;
}
