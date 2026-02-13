import AboutSection from "@/components/Sections/AboutSection";
import MissionAndVisionSection from "@/components/Sections/MissionAndVisionSection";
import OurCoreValue from "@/components/Sections/OurCoreValue";
import WhyChooseUsSection from "@/components/Sections/WhyChooseUsSection";

export default function AboutPage() {
  return (
    <main>
      <h1 className="sr-only">About Adesa Media</h1>
      <MissionAndVisionSection />
      <OurCoreValue />
      {/* Why Adesa Media */}
      <WhyChooseUsSection />
    </main>
  );
}
