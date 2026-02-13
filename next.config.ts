import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" },
    ],
    qualities: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
  },
};

export default nextConfig;
