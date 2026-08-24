import { siteConfig } from "@/config/site";

export default function robots() {
  const baseUrl = siteConfig.url || "https://adesamedia.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/private/",
          "/*?s=*",
          "/*?*search_term_string*",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: [
          "/api/",
          "/private/",
          "/*?s=*",
          "/*?*search_term_string*",
        ],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: [
          "/api/",
          "/private/",
          "/*?s=*",
          "/*?*search_term_string*",
        ],
      },
      {
        userAgent: "Twitterbot",
        allow: "/",
      },
      {
        userAgent: "facebookexternalhit",
        allow: "/",
      },
      {
        userAgent: "LinkedInBot",
        allow: "/",
      },
      {
        userAgent: "Applebot",
        allow: "/",
      },
      {
        userAgent: "DuckDuckBot",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}

