import HomePage from "@/components/HomePage";

export const metadata = {
  title: "Adesa Media | Full Service Marketing Agency in Lagos, Nigeria",
  description:
    "Adesa Media is a full service marketing agency in Lagos, Nigeria. We provide brand strategy, media buying, PR, digital marketing, and experiential campaigns built for measurable growth.",
  alternates: {
    canonical: "https://www.adesamedia.com/",
  },
};


export default function Home() {
return (
  <main role="main">
    <h1 className="sr-only">Full Service Marketing Agency in Lagos, Nigeria</h1>
    <HomePage />
  </main>
);
}