import ContactSection from "@/components/Sections/ContactSection";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Adesa Media. Reach out for media solutions, social media marketing, advertising, influencer campaigns, and media buying.",
  keywords:
    "Adesa Media, contact, social media marketing, advertising, influencer marketing, media buying",
  authors: [{ name: "Adesa Media" }],
  robots: "index, follow",
  openGraph: {
    title: "Contact Us | Adesa Media",
    description:
      "Get in touch with Adesa Media for branding, social media marketing, advertising, and media solutions.",
    url: "https://adesamedia.com/contact",
    siteName: "Adesa Media",
    images: [
      {
        url: "https://adesamedia.com/og-image-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Adesa Media",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Adesa Media",
    description:
      "Reach out to Adesa Media for media solutions, social media marketing, advertising, influencer campaigns, and media buying.",
    images: ["https://adesamedia.com/og-image-contact.jpg"],
  },
  alternates: {
    canonical: "https://adesamedia.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main>
      <h1 className="sr-only">Contact Adesa Media</h1>
      <ContactSection variant="blog" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Adesa Media",
            url: "https://adesamedia.com",
            logo: "https://adesamedia.com/logo.png",
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+234-XXX-XXX-XXXX",
                contactType: "customer service",
                areaServed: "NG",
              },
            ],
            sameAs: [
              "https://www.facebook.com/AdesaMedia",
              "https://twitter.com/AdesaMedia",
              "https://www.linkedin.com/company/AdesaMedia",
            ],
          }),
        }}
      />
    </main>
  );
}
