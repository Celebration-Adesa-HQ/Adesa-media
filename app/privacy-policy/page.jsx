import { constructMetadata } from "@/lib/seo";
import PrivacyPolicyContent from "./_components/PrivacyPolicyContent";

export const metadata = constructMetadata({
  title: "Privacy Policy",
  description:
    "Learn how Adesa Media collects, uses, and protects your personal information. Our Privacy Policy outlines your rights and our responsibilities.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
