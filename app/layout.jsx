import { Inter, Sora, Geist_Mono } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import AppShell from "./AppShell";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
  metadataBase: new URL("https://adesamedia.com"),
  title: {
    default: "Full Service Marketing Agency in Lagos, Nigeria | Adesa Media",
    template: "%s | Adesa Media",
  },
  description:
    "Adesa Media is a full service marketing agency in Lagos, Nigeria. We specialize in brand strategy, media buying, PR, digital marketing, OOH advertising, and content production for growth-driven brands.",
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
  ],
  authors: [{ name: "Adesa Media" }],
  creator: "Adesa Media",
  publisher: "Adesa Media",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Full Service Marketing Agency in Lagos, Nigeria | Adesa Media",
    description:
      "Brand strategy, media buying, PR, digital marketing, OOH advertising, and content production tailored for Nigerian and West African brands.",
    url: "https://adesamedia.com",
    siteName: "Adesa Media",
    images: [
      {
        url: "/og-main.jpg",
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
    title: "Full Service Marketing Agency in Lagos, Nigeria | Adesa Media",
    description:
      "Strategic branding, media buying, PR, digital campaigns, and OOH advertising for ambitious brands.",
    creator: "@adesahq",
    images: ["https://adesamedia.com/og-main.jpg"],
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
  alternates: {
    canonical: "https://adesamedia.com",
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Adesa Media",
              url: "https://adesamedia.com",
              logo: "https://adesamedia.com/logo.png",
              description: "Full service marketing agency in Lagos, Nigeria.",
              sameAs: [
                "https://twitter.com/adesahq",
                "https://instagram.com/adesamedia",
                "https://linkedin.com/company/adesamedia",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lagos",
                addressCountry: "NG",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
