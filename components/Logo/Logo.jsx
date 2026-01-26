'use client';

import Image from "next/image";
import Link from "next/link";

export default function Logo({ color = "black" }) {
    return (
      <Link href="/" className="logo">
        <Image
          src={`/Adesa-media-logo-${color}.png`}
          alt="ADESA MEDIA"
          width={120}
          height={40}
          priority
        />
      </Link>
    );
}