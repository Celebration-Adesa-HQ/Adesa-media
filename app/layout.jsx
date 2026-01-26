import { Inter, Sora, Geist_Mono } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import AppShell from "./AppShell";

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
    default: "Adesa Media | 360° Marketing & Media Agency",
    template: "%s | Adesa Media",
  },
  description:
    "Adesa Media is a 360° marketing agency focused on branding, advertising, digital strategy, media buying, influencer marketing, and content production.",
  applicationName: "Adesa Media",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Adesa Media",
    "marketing agency",
    "branding agency",
    "digital marketing",
    "media buying",
    "out of home advertising",
    "content production",
    "influencer marketing",
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
    title: "Adesa Media | 360° Marketing & Media Agency",
    description:
      "Branding, advertising, digital strategy, media buying, influencer marketing, and content production.",
    url: "https://adesamedia.com",
    siteName: "Adesa Media",
    images: [
      {
        url: "/og-main.jpg",
        width: 1200,
        height: 630,
        alt: "Adesa Media",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adesa Media | 360° Marketing & Media Agency",
    description:
      "Branding, advertising, digital strategy, media buying, influencer marketing, and content production.",
    images: ["/og-main.jpg"],
  },
  robots: {
    index: true,
    follow: true,
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
      </body>
    </html>
  );
}
