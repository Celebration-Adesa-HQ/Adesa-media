import { Inter, Sora, Geist_Mono } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import AppShell from "./AppShell";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { siteConfig } from "@/config/site";
import { constructMetadata } from "@/lib/seo";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = constructMetadata();

export const viewport = {
  themeColor: "#070e24",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  const jsonLdOrg = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/Adesa-media-logo-black.png`,
          caption: siteConfig.name,
        },
        image: `${siteConfig.url}/Adesa-media-logo-black.png`,
        description: siteConfig.description,
        address: {
          "@type": "PostalAddress",
          streetAddress: "2, Isheri Road (2nd Floor)",
          addressLocality: "Ojodu Berger",
          addressRegion: "Lagos",
          postalCode: "101233",
          addressCountry: "NG",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+2348023087303",
          contactType: "customer support",
          email: "info@adesahq.com",
          areaServed: "NG",
          availableLanguage: ["en"],
        },
        sameAs: [
          siteConfig.socialMedia?.linkedin?.href,
          siteConfig.socialMedia?.twitter?.href,
          siteConfig.socialMedia?.instagram?.href,
          siteConfig.socialMedia?.facebook?.href,
          siteConfig.socialMedia?.tiktok?.href,
        ].filter(Boolean),
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
        inLanguage: "en-NG",
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#localbusiness`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/Adesa-media-logo-black.png`,
        image: `${siteConfig.url}/Adesa-media-logo-black.png`,
        telephone: "+2348023087303",
        email: "info@adesahq.com",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "2, Isheri Road (2nd Floor), by Berger Roundabout",
          addressLocality: "Ojodu Berger",
          addressRegion: "Lagos",
          postalCode: "101233",
          addressCountry: "NG",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 6.6342,
          longitude: 3.3644,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "08:00",
            closes: "17:00",
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
      </head>
      <body
        className={`${sora.variable} ${inter.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="dark"
        >
          <Providers>
            <AppShell>{children}</AppShell>
          </Providers>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

