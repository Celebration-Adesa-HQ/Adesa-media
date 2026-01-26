import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Digital Revenue Surge",
    description:
      "Increased sales by 220% for a luxury retailer using omnichannel optimization.",
    category: "E-commerce",
    categoryColor: "bg-orange-500",
    tags: ["SEO", "PPC"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "SaaS Growth Engine",
    description:
      "Complete digital transformation for a fintech startup, resulting in 300% user growth.",
    category: "SaaS",
    categoryColor: "bg-blue-500",
    tags: ["Branding", "Content"],
    image:
      "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Global Expansion",
    description:
      "Navigated complex healthcare compliance to launch a global telehealth campaign.",
    category: "Healthcare",
    categoryColor: "bg-emerald-500",
    tags: ["Local SEO", "Ads"],
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800",
  },
];

function FeaturedWorkSection() {
  return (
    <motion.section
      id="work"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-24 bg-[#151E47] text-white"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#FFA205] font-bold tracking-widest uppercase text-sm">
              Case Studies
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Portfolio Highlights
            </h2>
          </div>
          <a
            href="#"
            className="text-[#FFA205] font-semibold border-b-2 border-[#FFA205] pb-1 hover:text-white hover:border-white transition-all"
          >
            View All Projects
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-3xl mb-6 aspect-video relative">
                <Image
                  src={project.image}
                  alt={project.category}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                  <span
                    className={`text-xs font-bold uppercase tracking-widest ${project.categoryColor} px-3 py-1 rounded`}
                  >
                    {project.category}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-[#FFA205] transition-colors">
                {project.title}
              </h3>
              <p className="text-blue-200/80 mb-6">{project.description}</p>
              <div className="flex gap-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs font-semibold px-3 py-1 bg-white/10 rounded-full border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default FeaturedWorkSection;
