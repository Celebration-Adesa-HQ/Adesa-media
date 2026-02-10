import { Container } from "@/components/Container";
import Image from "next/image";
import AdventuresList from "./_components/AdventuresList";
import Logo from "@/components/Logo/Logo";
import HeroNav from "@/components/HeroNav";

export default function AdventuresPage() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <div className="relative min-h-screen w-full">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Breathtaking landscape of misty mountain peaks at dawn"
            className="w-full h-full object-cover brightness-75"
            src="/hot-air-balloons-6144x4096-12393.jpg"
            height={1080}
            width={1920}
            priority
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        <header className="absolute top-0 right-0 z-30 p-8 md:p-12">
          <Logo color="white" />
        </header>

        <section className="relative z-10 h-[calc(107vh-100px)] flex items-center justify-end px-16 md:px-32">
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tighter text-shadow-hero leading-none transform">
            Our Adventures
          </h1>
        </section>

        <HeroNav className="bottom-0 px-4 py-2" />
      </div>

      {/* Adventures List */}
      <Container className="py-16">
        <AdventuresList />
      </Container>
    </main>
  );
}
