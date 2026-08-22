import CareersPage from "./_components/CareersPage";

import { siteConfig } from "@/config/site";
import { createJobPostingSchema } from "@/lib/careers";
import { constructMetadata } from "@/lib/seo";

const PAGE_DESCRIPTION =
  "Explore career opportunities at Adesa Media and submit a general application for future roles across strategy, creative, media, PR, digital, and client partnerships.";

export const metadata = constructMetadata({
  title: "Careers",
  description: PAGE_DESCRIPTION,
  path: "/careers",
});

export default function CareersRoute() {
  const { careers } = siteConfig;
  const values = [
    ...siteConfig.coreValues.left,
    ...siteConfig.coreValues.right,
  ].map((value) => value.label);
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Careers at Adesa Media",
      description: PAGE_DESCRIPTION,
      url: `${siteConfig.url}/careers`,
      isPartOf: {
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.url,
      },
    },
    ...careers.openPositions.map((position) =>
      createJobPostingSchema(position, siteConfig),
    ),
  ];

  return (
    <>
      <CareersPage careers={careers} values={values} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
