import { notFound } from "next/navigation";
import AdventureGallery from "./_components/AdventureGallery";
import { AdventureWork } from "../_components/AdventureWork";
import { constructMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const adventure = AdventureWork.find((a) => a.slug === id);

  if (!adventure) {
    return constructMetadata({
      title: "Adventure Not Found",
      path: `/adventures/${id}`,
      noIndex: true,
    });
  }

  const rawImage =
    adventure.images?.[0] ?? "/Adesa-media-logo-black.png";

  const imageUrl = rawImage.startsWith("http")
    ? rawImage
    : `${siteConfig.url}${rawImage.startsWith("/") ? "" : "/"}${rawImage}`;

  return constructMetadata({
    title: `${adventure.title} - ${adventure.client} Case Study`,
    description: `${adventure.description} Learn how Adesa Media delivered high-impact results for ${adventure.client}.`,
    path: `/adventures/${adventure.slug}`,
    image: imageUrl,
    type: "article",
  });
}

export default async function AdventurePage({ params }) {
  const { id } = await params;
  const adventureData = AdventureWork.find((a) => a.slug === id);

  if (!adventureData) {
    notFound();
  }

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: adventureData.title,
    description: adventureData.description,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/Adesa-media-logo-black.png`,
      },
    },
    image: adventureData.images?.[0] ? `${siteConfig.url}${adventureData.images[0]}` : undefined,
    about: {
      "@type": "Organization",
      name: adventureData.client,
    },
  };

  return (
    <div className="min-h-screen bg-[#070e24] text-white py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
      <main role="main" className="container mx-auto px-4 py-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 text-white">
          {adventureData.title}
        </h1>

        <AdventureGallery data={adventureData} />
      </main>
    </div>
  );
}