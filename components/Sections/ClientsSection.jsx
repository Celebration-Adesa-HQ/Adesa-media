"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function ClientsSection() {
  const clients = [
    { name: "Spotify", logo: "/clients/spotify.svg" },
    { name: "Adobe", logo: "/clients/adobe.svg" },
    { name: "Slack", logo: "/clients/slack.svg" },
    { name: "Dropbox", logo: "/clients/dropbox.svg" },
    { name: "Stripe", logo: "/clients/stripe.svg" },
    { name: "Shopify", logo: "/clients/shopify.svg" },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-heading font-bold text-center text-[#151E47] mb-12">
          Clients We Have Worked With
        </h3>
      </div>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex items-center gap-20 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-slate-50 px-10 py-6 rounded-xl border border-slate-100"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={140}
                height={60}
                className="object-contain grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition"
                priority={index < clients.length}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ClientsSection;
