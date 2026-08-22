import { siteConfig } from "@/config/site";

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  noIndex = false,
  path = "",
  type = "website",
  publishedTime,
  authors,
} = {}) {
  const baseUrl = siteConfig.url || "https://adesamedia.com";
  const url = new URL(path, baseUrl).toString();

  const formattedImage = image.startsWith("http")
    ? image
    : `${baseUrl}${image.startsWith("/") ? "" : "/"}${image}`;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: `${title} | Full-Service Marketing & PR Agency Lagos, Nigeria`,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    applicationName: siteConfig.name,
    keywords: [
      "marketing agency in Lagos",
      "marketing agency Nigeria",
      "full service marketing agency",
      "media buying agency Nigeria",
      "PR agency Lagos",
      "digital marketing agency Nigeria",
      "OOH advertising Nigeria",
      "brand strategy agency Lagos",
      "experiential marketing Lagos",
      "communications agency West Africa",
      "corporate documentary production Nigeria",
      "TV commercials production Lagos",
      "Adesa Media",
      "adesamedia.com",
      "ADESA MEDIA HQ",
    ],
    authors: authors
      ? authors.map((name) => ({ name }))
      : [{ name: "ADESA MEDIA", url: baseUrl }],
    creator: "ADESA MEDIA",
    publisher: "ADESA MEDIA",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: url,
      languages: {
        "en-NG": url,
        "en-US": url,
        "en-GB": url,
      },
    },
    openGraph: {
      type,
      locale: "en_NG",
      alternateLocale: ["en_US", "en_GB"],
      url,
      title: `${title} | ADESA MEDIA`,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: formattedImage,
          width: 1200,
          height: 630,
          alt: `${title} - ADESA MEDIA`,
        },
      ],
      ...(publishedTime && { publishedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ADESA MEDIA`,
      description,
      images: [formattedImage],
      creator: "@AdesaMedia",
      site: "@AdesaMedia",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      nocache: false,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    category: "Marketing, Advertising & Public Relations",
    other: {
      "geo.region": "NG-LA",
      "geo.placename": "Lagos",
      "geo.position": "6.6342;3.3644",
      "ICBM": "6.6342, 3.3644",
      "rating": "General",
      "revisit-after": "7 days",
    },
  };
}

