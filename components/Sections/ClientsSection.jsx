"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../Container";
import { SectionHeading } from "../SectionHeading";
import { siteConfig } from "@/config/site";

export default function ClientsSection({ showFullClient = false }) {
  const clients = siteConfig.client.clients;
  const { eyebrow, title, description } = siteConfig.client.clientsSection;

  const HeadingBlock = (
    <SectionHeading
      showFullClient={showFullClient}
      eyebrow={eyebrow}
      title={title}
      description={description}
    />
  );

  return (
    <section
      className={`overflow-hidden ${
        showFullClient ? "py-0 pb-24 bg-brand-blue" : "py-24 bg-brand-orange/20"
      }`}
    >
      {showFullClient ? (
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

      <Container>
        {showFullClient && (
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
                {/* Dark layer for white logos */}
                <div className="absolute inset-0 rounded-2xl bg-brand-dark opacity-0 group-hover:opacity-5 transition" />

                <Image
                  src={c.logo}
                  alt={c.name}
                  fill
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
        )}
      </Container>

      {!showFullClient && (
        <div className="relative mt-20 w-full overflow-hidden">
          <motion.div
            className="flex w-max items-center gap-16"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {[...clients, ...clients].map((c, i) => (
              <div
                key={c.name + "-" + i}
                className="relative flex h-48 w-52 py-10 items-center justify-center rounded-xl px-10 "
              >
                <Image
                  src={c.logo}
                  alt={c.name}
                  fill
                  className="object-contain opacity-90 transition hover:opacity-100"
                  priority={i < clients.length}
                />
              </div>
            ))}
          </motion.div>
        </div>
      )}
    </section>
  );
}
