import { notFound } from "next/navigation";
import TeamProfile from "./_components/TemProfile";
import { siteConfig } from "@/config/site";
import { constructMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}) {
  const { slug } = params;
  const member = siteConfig.team.find((m) => m.slug === slug);

  if (!member) return {};

  return constructMetadata({
    title: `${member.name} – ${member.role}`,
    description: member.bio,
    path: `/team/${member.slug}`,
    openGraph: {
      type: "profile",
      images: member.image
        ? [`${siteConfig.url}${member.image}`]
        : undefined,
    },
    twitter: {
      images: member.image
        ? [`${siteConfig.url}${member.image}`]
        : undefined,
    },
  });
}

export default async function TeamBioPage({
  params,
}) {
  const { slug } = params;

  const member = siteConfig.team.find((m) => m.slug === slug);

  if (!member) return notFound();

  return <TeamProfile member={member} />;
}