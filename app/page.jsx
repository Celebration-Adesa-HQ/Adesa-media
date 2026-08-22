import HomePage from "@/components/HomePage";
import { constructMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata = constructMetadata({
  title: "Adesa Media - Full Service Marketing & PR Agency in Lagos",
  description:
    "Adesa Media is a leading full-service marketing agency in Lagos, Nigeria. We deliver brand strategy, media buying, PR, digital marketing, OOH advertising, and experiential campaigns built for measurable growth.",
  path: "/",
});

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main role="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h1 className="sr-only">
        Adesa Media - Full Service Marketing Agency in Lagos, Nigeria
      </h1>
      <HomePage />
    </main>
  );
}

