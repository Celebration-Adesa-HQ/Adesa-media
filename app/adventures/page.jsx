import { Container } from "@/components/Container";
import Image from "next/image";
import AdventuresList from "./_components/AdventuresList";
import Logo from "@/components/Logo/Logo";
import HeroNav from "@/components/HeroNav";

export default function AdventuresPage() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <div className="relative min-h-dvh w-full flex flex-col">
        {/* Background */}
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

        {/* Logo */}
        <header className="relative z-30 p-6 md:p-12 flex items-center justify-end">
          <Logo color="white" />
        </header>

        {/* Hero Content */}
        <section className="relative z-10 flex-1 flex items-center justify-end px-6 md:px-32">
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tighter text-shadow-hero leading-none">
            Our Adventures
          </h1>
        </section>

        {/* Hero Nav */}
        <div className="relative z-20 pb-safe">
          <HeroNav className="px-4 py-2" />
        </div>
      </div>

      {/* Adventures List */}
      <Container className="py-16">
        <AdventuresList />
      </Container>
    </main>
  );
}
