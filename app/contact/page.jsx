import ContactSection from "@/components/Sections/ContactSection";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Contact Us - Full-Service Marketing Agency",
  description:
    "Partner with Adesa Media today. Full-service marketing, media, PR, and digital solutions for brands in Lagos, Nigeria.",
  keywords: [
    "Marketing Agency Lagos",
    "Full Service Marketing Agency Nigeria",
    "Digital Marketing Agency Lagos",
    "PR Agency Lagos",
    "Media Buying Agency Nigeria",
    "Adesa media",
    "adesamedia.com",
    "adesa",
    "adesa media.com",
    "adesa media contact",
    "contact",
  ],
  alternates: {
    canonical: "https://www.adesamedia.com/contact",
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

export default function ContactPage() {
  return (
    <main  role="main">
      <h1 className="sr-only">Contact Adesa Media</h1>
      <ContactSection variant="blog" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Adesa Media",
            image: siteConfig.logo,
            url: siteConfig.url,
            telephone: siteConfig.contact?.phone?.value ?? "+2347012345154",
            email: siteConfig.contact?.email?.value ?? "info@adesahq.com",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                siteConfig.contact?.address?.lines?.[0] ??
                "2, Isheri Road (2nd Floor)",
              addressLocality:
                siteConfig.contact?.address?.lines?.[2] ??
                "Ojodu Berger, Lagos",
              postalCode:
                siteConfig.contact?.address?.lines?.[2]
                  ?.split(",")[1]
                  ?.trim() ?? "101233",
              addressCountry: "NG",
            },
            sameAs: [
              siteConfig.socialMedia?.linkedin?.href ?? "",
              siteConfig.socialMedia?.twitter?.href ?? "",
              siteConfig.socialMedia?.instagram?.href ?? "",
              siteConfig.socialMedia?.tiktok?.href ?? "",
            ].filter(Boolean),
          }),
        }}
      />
    </main>
  );
}
