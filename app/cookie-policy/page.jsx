import { constructMetadata } from "@/lib/seo";
import CookiePolicyContent from "./_components/CookiePolicyContent";

export const metadata = constructMetadata({
  title: "Cookie Policy",
  description:
    "Understand how Adesa Media uses cookies on its website. Learn what types of cookies we use, why we use them, and how to manage your preferences.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return <CookiePolicyContent />;
}
