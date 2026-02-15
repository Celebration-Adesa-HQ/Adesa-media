import { siteConfig } from "@/config/site";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-light dark:bg-brand-dark">
      <div className="flex flex-col items-center gap-6">
        <Image
          src={siteConfig.logo}
          alt="Adesa Media Logo"
          width={120}
          height={120}
          priority
          className="animate-pulse"
        />

        <div className="relative w-40 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-brand-orange animate-loading-bar rounded-full" />
        </div>

        <p className="text-sm tracking-wide text-brand-dark dark:text-brand-light">
          Building bold brand experiences...
        </p>
      </div>
    </div>
  );
}
