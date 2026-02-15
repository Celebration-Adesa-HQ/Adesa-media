"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";

export default function TeamGrid({ team }) {
const gridRef = useRef(null);

useEffect(() => {
const cards = gridRef.current.children;

gsap.fromTo(
  cards,
  {
    opacity: 0,
    y: 80,
    scale: 0.9,
  },
  {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 1,
    stagger: 0.15,
    ease: "power4.out",
  }
);


}, []);

return (
  <div ref={gridRef} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {team.map((member) => (
      <Link
        key={member.slug}
        href={`/team/${member.slug}`}
        className="group relative overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2"
      >
        <Image
          src={member.image}
          alt={member.name}
          width={400}
          height={288}
          className="h-72 w-full object-cover"
        />

        <div className="p-6">
          <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>

          <p className="text-sm text-slate-500">{member.role}</p>
        </div>

        <div className="absolute inset-0 bg-black/60 opacity-0 transition group-hover:opacity-100 flex items-center justify-center">
          <span className="text-white font-semibold">View Profile</span>
        </div>
      </Link>
    ))}
  </div>
);
}