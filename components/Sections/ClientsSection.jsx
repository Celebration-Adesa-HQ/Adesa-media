"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../Container";
import { SectionHeading } from "../SectionHeading";

const clients = [
  { name: "FBN Trustees", logo: "/clients/fbn-trustees.svg" },
  { name: "Leadway Assurance", logo: "/clients/leadway.svg" },
  { name: "W Health (Leadway Health)", logo: "/clients/w-health.svg" },
  { name: "WEMA Bank / ALAT", logo: "/clients/wema-alat.svg" },
  { name: "FirstBank", logo: "/clients/firstbank.svg" },
  { name: "FBNQuest", logo: "/clients/fbnquest.svg" },
  { name: "FCMB (Flexx)", logo: "/clients/fcmb-flexx.svg" },
  { name: "Toyota (Nigeria) Limited", logo: "/clients/toyota.svg" },
  { name: "Mikano Motors (Changan)", logo: "/clients/mikano-changan.svg" },
  { name: "Enterprise Life", logo: "/clients/enterprise-life.svg" },
  { name: "Health Partners HMO", logo: "/clients/health-partners.svg" },
  { name: "Black Knight Whisky", logo: "/clients/black-knight.svg" },
  { name: "New Look Drinks", logo: "/clients/new-look-drinks.svg" },
  { name: "May & Baker Nigeria", logo: "/clients/may-baker.svg" },
  { name: "The Meadows (Ibeju-Lekki)", logo: "/clients/the-meadows.svg" },
  { name: "Greenwich Capital", logo: "/clients/greenwich-capital.svg" },
];

export default function ClientsSection({ showFullClient = false }) {
  const HeadingBlock = (
    <SectionHeading
      showFullClient={showFullClient}
      eyebrow="Our Clients"
      title="Trusted by Leading Brands"
      description="We partner with ambitious brands across finance, healthcare, mobility, and consumer markets."
    />
  );

  return (
    <section
      className={`overflow-hidden ${
        showFullClient ? "py-0 pb-24 bg-slate-50" : "py-24 bg-slate-50"
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
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {clients.map((c) => (
              <div
                key={c.name}
                className="flex h-20 items-center justify-center rounded-xl bg-white border border-slate-200"
              >
                <Image
                  src={c.logo}
                  alt={c.name}
                  width={120}
                  height={48}
                  className="object-contain grayscale opacity-80"
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
                key={`${c.name}-${i}`}
                className="flex h-16 items-center justify-center rounded-xl bg-white px-10 border border-slate-200"
              >
                <Image
                  src={c.logo}
                  alt={c.name}
                  width={120}
                  height={48}
                  className="object-contain grayscale opacity-70"
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
