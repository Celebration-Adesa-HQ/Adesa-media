'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo({ color = "black", className = "" }) {
  return (
    <Link href="/" className={`inline-block group focus:outline-none ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: -8, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.25, ease: "easeOut" }
        }}
        whileTap={{ scale: 0.96 }}
        className="relative flex items-center"
      >
        <Image
          src={`/Adesa-media-logo-${color}.png`}
          alt="ADESA MEDIA"
          width={130}
          height={44}
          priority
          className="transition-all duration-300 drop-shadow-sm group-hover:drop-shadow-[0_0_12px_rgba(255,162,5,0.4)]"
        />
      </motion.div>
    </Link>
  );
}