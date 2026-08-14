import { constructMetadata } from "@/lib/seo";
import TermsContent from "./_components/TermsContent";

export const metadata = constructMetadata({
  title: "Terms & Conditions",
  description:
    "Read the Terms and Conditions governing your use of the Adesa Media website and services. Understand your rights and obligations.",
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return <TermsContent />;
}
