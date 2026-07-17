"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";

interface Partner {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
}

const partners: Partner[] = [
  {
    name: "Malik Zeeshan",
    role: "CEO of Divineesoft Technologies",
    image: "/partners/zeeshan.png",
    linkedin: "https://www.linkedin.com/in/zeeshan-malik-0749a7252",
  },
  {
    name: "Kennan Skipper",
    role: "CEO of Barberzlink",
    image: "/partners/kennan.png",
    linkedin: "https://www.linkedin.com/in/keenan-skipper-80b151407",
  },
];

export default function InternationalPartners() {
  return (
    <section className="relative overflow-hidden bg-background text-foreground dark:bg-[#070b16] dark:text-white py-24 transition-colors duration-300">
      {/* 1. Subtle grid lines and large background glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(9,75,240,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(9,75,240,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute left-1/4 top-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block"
          >
            Global Leadership
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight"
          >
            Our International <span className="text-primary">Partners</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-muted-foreground dark:text-gray-400 text-base sm:text-lg leading-relaxed"
          >
            Connecting expertise across continents. Our leadership team coordinates operations 
            globally to deliver premium software and digital products.
          </motion.p>
        </div>

        {/* Partners Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto justify-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl overflow-hidden border border-border/40 bg-card shadow-md transition-all duration-500 hover:border-primary/30 hover:shadow-2xl dark:border-white/[0.06] dark:bg-[#0c1322]/30 w-full max-w-[360px] mx-auto aspect-[3/4]"
            >
              {/* Glowing background blob behind card on hover */}
              <div className="absolute -inset-0.5 -z-10 rounded-3xl bg-gradient-to-r from-primary/30 to-blue-500/30 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100" />

              {/* Headshot Portrait */}
              <div className="absolute inset-0 w-full h-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 360px"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  priority={index === 0}
                />
                
                {/* Gradient Shadows to blend image top and bottom */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50 pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background/95 dark:from-[#070b16]/95 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Details Glass Card */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="bg-white/80 dark:bg-[#0c1322]/85 backdrop-blur-xl border border-black/5 dark:border-white/[0.08] rounded-2xl p-5 shadow-2xl transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-[0_15px_30px_rgba(9,75,240,0.15)]">
                  <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold tracking-tight text-foreground dark:text-white group-hover:text-primary transition-colors duration-300">
                        {partner.name}
                      </h3>
                      
                      <p className="text-[11px] font-extrabold uppercase tracking-wider text-primary">
                        {partner.role}
                      </p>
                    </div>

                    {partner.linkedin && (
                      <a
                        href={partner.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary border border-primary/20 transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-[0_0_15px_rgba(9,75,240,0.4)]"
                      >
                        <FaLinkedinIn size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
