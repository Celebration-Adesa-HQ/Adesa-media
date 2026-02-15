"use client";

import { useMemo } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

import { Container } from "../Container";
import { SectionHeading } from "../SectionHeading";
import { siteConfig } from "@/config/site";

// Lazy load framer-motion
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  {
    ssr: false,
  },
);

export default function ClientsSection({ showFullClient = false }) {
  // Memoize config data
  const clients = useMemo(() => siteConfig.client.clients, []);

  const headingData = useMemo(() => siteConfig.client.clientsSection, []);

  const repeatedClients = useMemo(() => {
    if (showFullClient) return [];
    return [...clients, ...clients];
  }, [clients, showFullClient]);

  const HeadingBlock = useMemo(
    () => (
      <SectionHeading
        showFullClient={showFullClient}
        eyebrow={headingData.eyebrow}
        title={headingData.title}
        description={headingData.description}
      />
    ),
    [
      showFullClient,
      headingData.eyebrow,
      headingData.title,
      headingData.description,
    ],
  );

  const isFull = showFullClient;

  return (
    <section
      className={`overflow-hidden ${
        isFull ? "py-0 pb-24 bg-brand-blue" : "py-24 bg-brand-orange/20"
      }`}
    >
      {isFull ? (
        HeadingBlock
      ) : (
        <Link
          href="/clients"
          aria-label="View all clients"
          className="block focus:outline-none"
        >
          {HeadingBlock}
        </Link>
      )}

      <Container>{isFull && <ClientGrid clients={clients} />}</Container>

      {!isFull && <ClientMarquee clients={repeatedClients} />}
    </section>
  );
}

/* -----------------------------
   Split Components
------------------------------*/

function ClientGrid({ clients }) {
  return (
    <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
      {clients.map((c) => (
        <div
          key={c.name}
          className="
            group relative flex h-44 items-center justify-center
            rounded-2xl
            bg-cyan-400/40
            border border-brand-blue/10
            shadow-sm
            p-6
            transition
            hover:-translate-y-1
            hover:shadow-md
            hover:border-brand-orange/40
          "
        >
          <div className="absolute inset-0 rounded-2xl bg-brand-dark opacity-0 group-hover:opacity-5 transition" />

          <Image
            src={c.logo}
            alt={c.name}
            fill
            sizes="(max-width:768px) 50vw, (max-width:1024px) 33vw, 25vw"
            className="
              object-contain
              p-6
              opacity-90
              transition
              group-hover:opacity-100
              group-hover:scale-105
            "
          />
        </div>
      ))}
    </div>
  );
}

function ClientMarquee({ clients }) {
  if (!clients.length) return null;

  return (
    <div className="relative mt-20 w-full overflow-hidden">
      <MotionDiv
        className="flex w-max items-center gap-16"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {clients.map((c, i) => (
          <div
            key={`${c.name}-${i}`}
            className="relative flex h-48 w-52 py-10 items-center justify-center rounded-xl px-10"
          >
            <Image
              src={c.logo}
              alt={c.name}
              fill
              sizes="208px"
              className="object-contain opacity-90 transition hover:opacity-100"
              priority={i < clients.length / 2}
            />
          </div>
        ))}
      </MotionDiv>
    </div>
  );
}
