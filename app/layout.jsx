import { Inter, Sora, Geist_Mono } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import AppShell from "./AppShell";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { siteConfig } from "@/config/site";

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

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.seo.title,
    template: "%s | Adesa Media",
  },
  description: siteConfig.seo.description,
  applicationName: "Adesa Media",
  referrer: "origin-when-cross-origin",
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
    "adesa media.com"
  ],
  authors: [{ name: "Adesa Media" }],
  creator: "Adesa Media",
  publisher: "Adesa Media",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/Adesa-media-logo-black.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: siteConfig.seo.openGraph.title,
    description: siteConfig.seo.openGraph.description,
    url: siteConfig.url,
    siteName: siteConfig.title,
    images: [
      {
        url: `${siteConfig.url}/Adesa-media-logo-black.png`,
        width: 1200,
        height: 630,
        alt: "Adesa Media – Full Service Marketing Agency in Lagos",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.twitter.title,
    description: siteConfig.seo.twitter.description,
    creator: siteConfig.seo.twitter.creator,
    images: [siteConfig.logo],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                url: siteConfig.url,
                name: siteConfig.title,
                description: siteConfig.description,
                potentialAction: {
                  "@type": "SearchAction",
                  target: `${siteConfig.url}/?s={search_term_string}`,
                  "query-input": "required name=search_term_string",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: siteConfig.title,
                url: siteConfig.url,
                logo: siteConfig.logo,
                description: siteConfig.description,
                sameAs: Object.values(siteConfig.socialMedia || {})
                  .map((s) => s.href)
                  .filter(Boolean),
                address: {
                  "@type": "PostalAddress",
                  streetAddress: siteConfig.contact?.address?.lines?.[0] || "",
                  addressLocality: (
                    siteConfig.contact?.address?.lines?.[2] || "Lagos"
                  )
                    .split(",")[0]
                    .trim(),
                  postalCode:
                    (siteConfig.contact?.address?.lines?.[2] || "")
                      .split(",")[1]
                      ?.trim() || "",
                  addressCountry: "NG",
                },
                contactPoint: [
                  {
                    "@type": "ContactPoint",
                    telephone: siteConfig.contact?.phone?.value || "",
                    contactType: "customer service",
                    email: siteConfig.contact?.email?.value || "",
                  },
                ],
              },
            ]),
          }}
        />
      </body>
    </html>
  );
}
