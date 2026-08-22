"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ArrowUpRight } from "lucide-react";

export default function TeamGrid({ team }) {
  const gridRef = useRef(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.children;

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 40,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div ref={gridRef} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {team.map((member) => (
        <Link
          key={member.slug}
          href={`/team/${member.slug}`}
          className="group relative overflow-hidden rounded-3xl bg-[#0c1638] border border-white/10 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#ffa205]/50 flex flex-col justify-between"
        >
          <div>
            <div className="relative h-72 w-full bg-[#070e24] overflow-hidden flex items-center justify-center">
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={288}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1638] via-transparent to-transparent" />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white group-hover:text-[#ffa205] transition-colors">{member.name}</h3>
              <p className="text-sm text-slate-300 mt-1">{member.role}</p>
            </div>
          </div>

          <div className="px-6 pb-6 pt-0 flex items-center gap-1.5 text-xs font-bold text-[#ffa205] uppercase tracking-wider">
            <span>View Profile</span>
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </Link>
      ))}
    </div>
  );
}