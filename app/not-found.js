import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-light dark:bg-brand-dark px-6">
      <div className="max-w-xl text-center flex flex-col items-center gap-6">
        <Image
          src={siteConfig.logo}
          alt="Adesa Media Logo"
          width={100}
          height={100}
          priority
        />

        <h1 className="text-4xl md:text-5xl font-bold text-brand-dark dark:text-brand-light">
          404
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300">
          The page you are looking for does not exist or has moved.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-brand-orange text-white font-medium hover:opacity-90 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
