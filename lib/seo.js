import { siteConfig } from "@/config/site";

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  noIndex = false,
  path = "", // relative path for canonical
} = {}) {
  const url = new URL(path, siteConfig.url).toString();

  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    keywords: [
      "marketing agency in Lagos",
      "marketing agency Nigeria",
      "full service marketing agency",
      "media buying agency Nigeria",
      "PR agency Lagos",
      "digital marketing agency Nigeria",
      "OOH advertising Nigeria",
      "brand strategy agency Lagos",
      "Adesa Media",
      "adesamedia.com",
      "adesa",
      "adesa media.com",
    ],
    authors: [{ name: "ADESA MEDIA" }],
    creator: "ADESA MEDIA",
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title,
      description,
      siteName: siteConfig.name,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@adesamedia",
    },
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
    // JSON-LD structured data for better indexing
    additionalMetaTags: [
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        name: "theme-color",
        content: "#151e47", // your brand blue
      },
    ],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: siteConfig.ogImage,
      sameAs: [
        "https://twitter.com/adesamedia",
        "https://www.linkedin.com/company/adesamedia",
      ],
    },
  };
}
