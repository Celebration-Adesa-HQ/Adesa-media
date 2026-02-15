"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

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

        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark dark:text-brand-light">
          Something went wrong
        </h1>

        <p className="text-gray-600 dark:text-gray-300">
          An unexpected error occurred while loading this page.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={reset}
            className="px-6 py-3 rounded-full bg-brand-orange text-white font-medium hover:opacity-90 transition"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="px-6 py-3 rounded-full border border-brand-dark dark:border-brand-light text-brand-dark dark:text-brand-light font-medium hover:opacity-80 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
