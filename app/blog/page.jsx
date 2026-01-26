import BlogSection from "@/components/Sections/BlogSection";

export const metadata = {
  title: "Blog",
  description:
    "Insights on branding, media strategy, advertising, digital marketing, and growth. Practical ideas from Adesa Media.",
  keywords: [
    "Adesa Media blog",
    "branding insights",
    "digital marketing",
    "media strategy",
    "advertising",
    "social media marketing",
    "content production",
  ],
  authors: [{ name: "Adesa Media" }],
  openGraph: {
    title: "Blog | Adesa Media",
    description:
      "Insights on branding, media strategy, advertising, digital marketing, and growth.",
    url: "https://adesamedia.com/blog",
    siteName: "Adesa Media",
    images: [
      {
        url: "https://adesamedia.com/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "Adesa Media Blog",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Adesa Media",
    description:
      "Insights on branding, media strategy, advertising, digital marketing, and growth.",
    images: ["https://adesamedia.com/og-blog.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://adesamedia.com/blog",
  },
};

export default function BlogPage() {
  return (
    <main>
      <h1 className="sr-only">Adesa Media Blog</h1>
      <BlogSection variant="blog" />
    </main>
  );
}
