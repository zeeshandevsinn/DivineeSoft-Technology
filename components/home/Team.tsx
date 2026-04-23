"use client";

import { team } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

export default function Team() {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block"
          >
            Our Team
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            Meet the <span className="text-primary">Experts</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Our diverse team of experts is dedicated to your success.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {team.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-primary rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                <Avatar className="w-40 h-40 border-4 border-border shadow-xl group-hover:scale-105 transition-transform duration-300">
                  <AvatarImage src={t.image} alt={t.name} className="object-cover" />
                  <AvatarFallback className="text-2xl font-bold bg-muted text-primary">
                    {t.name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">{t.name}</h3>
              <p className="text-primary font-medium text-sm">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
