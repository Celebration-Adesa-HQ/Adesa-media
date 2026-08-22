"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "../Container";
import { SectionHeading } from "../SectionHeading";
import { siteConfig } from "@/config/site";

export default function ClientsSection({ showFullClient = false }) {
  const clients = useMemo(() => siteConfig.client.clients, []);
  const headingData = useMemo(() => siteConfig.client.clientsSection, []);

  const repeatedClients = useMemo(() => {
    if (showFullClient) return [];
    return [...clients, ...clients, ...clients];
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
        isFull ? "py-12 pb-24 bg-[#070e24]" : "py-24 bg-[#091333]"
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

function ClientGrid({ clients }) {
  return (
    <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
      {clients.map((c) => (
        <div
          key={c.name}
          className="group relative flex h-40 items-center justify-center rounded-2xl bg-[#0d183d]/80 border border-white/10 p-6 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#ffa205]/40 hover:bg-[#112052]"
        >
          <Image
            src={c.logo}
            alt={c.name}
            fill
            sizes="(max-width:768px) 50vw, (max-width:1024px) 33vw, 25vw"
            className="object-contain p-6 opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}

function ClientMarquee({ clients }) {
  if (!clients.length) return null;

  return (
    <div className="relative mt-14 w-full overflow-hidden">
      {/* Edge gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#091333] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#091333] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex w-max items-center gap-10"
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {clients.map((c, i) => (
          <div
            key={`${c.name}-${i}`}
            className="relative flex h-28 w-48 items-center justify-center rounded-2xl bg-white/5 border border-white/10 p-5 hover:border-[#ffa205]/40 transition-colors"
          >
            <Image
              src={c.logo}
              alt={c.name}
              fill
              sizes="192px"
              className="object-contain p-4 opacity-75 hover:opacity-100 transition-opacity"
              priority={i < 4}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

