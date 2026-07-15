"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

interface Partner {
  name: string;
  role: string;
  location: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

const partners: Partner[] = [
  {
    name: "Malik Zeeshan",
    role: "Co-Founder & Managing Partner",
    location: "Asia Pacific / Pakistan",
    image: "/partners/zeeshan.png",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Kennan Skipper",
    role: "Co-Founder & President",
    location: "North America / United States",
    image: "/partners/kennan.png",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Tonny",
    role: "Director of Operations & Partner",
    location: "European Union / Sweden",
    image: "/partners/zeeshan.png", // Using Zeeshan's image as requested
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
];

export default function InternationalPartners() {
  return (
    <section className="relative overflow-hidden bg-background text-foreground dark:bg-[#070b16] dark:text-white py-24 transition-colors duration-300">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(9,75,240,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(9,75,240,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute -left-24 top-1/4 h-[350px] w-[350px] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute -right-24 bottom-1/4 h-[350px] w-[350px] rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block"
          >
            Global Leadership
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-foreground dark:text-white tracking-tight"
          >
            Our International <span className="text-primary">Partners</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-muted-foreground dark:text-gray-400 text-lg leading-relaxed"
          >
            Connecting expertise across continents. Our leadership team coordinates operations 
            between the US, Europe, and Asia to deliver premium software and digital products globally.
          </motion.p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto justify-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-lg dark:border-white/[0.06] dark:bg-[#0c1322]/60 dark:hover:border-primary/30 dark:hover:bg-[#0c1322]/85 dark:hover:shadow-2xl dark:hover:shadow-primary/5"
            >
              {/* Executive Headshot container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-900 mb-6">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-103"
                  priority={index < 2}
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-[#0c1322]/90 via-transparent to-transparent opacity-65 dark:opacity-85" />
                
                {/* Location Tag */}
                <span className="absolute bottom-4 left-4 rounded-md bg-primary/20 border border-primary/30 px-3 py-1 text-[11px] font-bold text-primary backdrop-blur-md uppercase tracking-wider">
                  {partner.location.split("/")[0]}
                </span>
              </div>

              {/* Partner Details */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold tracking-tight text-foreground dark:text-white group-hover:text-primary transition-colors duration-300">
                  {partner.name}
                </h3>
                
                <p className="text-sm font-semibold text-muted-foreground dark:text-gray-400">
                  {partner.role}
                </p>

                <p className="text-xs text-gray-500 font-medium">
                  {partner.location}
                </p>

                {/* Divider */}
                <div className="pt-4 border-t border-border dark:border-white/[0.06] mt-4 flex items-center gap-3">
                  <a
                    href={partner.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-8 items-center justify-center rounded-full bg-muted dark:bg-white/[0.04] text-muted-foreground dark:text-gray-400 transition hover:bg-primary hover:text-white"
                  >
                    <FaLinkedinIn size={14} />
                  </a>
                  <a
                    href={partner.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-8 items-center justify-center rounded-full bg-muted dark:bg-white/[0.04] text-muted-foreground dark:text-gray-400 transition hover:bg-[#1da1f2] hover:text-white"
                  >
                    <FaTwitter size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
