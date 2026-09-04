import ContactSection from "@/components/Sections/ContactSection";
import { siteConfig } from "@/config/site";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Contact Us - Full-Service Marketing Agency",
  description:
    "Partner with Adesa Media today. Full-service marketing, media, PR, and digital solutions for brands in Lagos, Nigeria.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main role="main">
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
            telephone: siteConfig.contact?.phone?.value ?? "+2348023087303",
            email: siteConfig.contact?.email?.value ?? "info.adesamedia@adesahq.com",
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
