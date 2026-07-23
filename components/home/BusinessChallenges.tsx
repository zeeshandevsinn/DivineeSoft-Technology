"use client";

import { motion } from "framer-motion";
import {
  Database,
  Puzzle,
  Clock,
  TrendingUp,
  ShieldAlert,
  Users,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

interface Challenge {
  icon: LucideIcon;
  title: string;
  description: string;
}

const challenges: Challenge[] = [
  {
    icon: Database,
    title: "Legacy Systems Slowing You Down",
    description:
      "Outdated platforms and manual workflows eat up hours your team could spend on customers, product, and growth.",
  },
  {
    icon: Puzzle,
    title: "Tools That Don't Talk to Each Other",
    description:
      "Data scattered across disconnected apps means decisions get made on guesswork instead of real numbers.",
  },
  {
    icon: TrendingUp,
    title: "Growth Outpacing Your Infrastructure",
    description:
      "What worked for your first 10 customers breaks at 10,000. Scaling reactively always costs more than building it right.",
  },
  {
    icon: Clock,
    title: "Slow Time-to-Market",
    description:
      "By the time an idea ships, the window — or a faster competitor — has already moved past it.",
  },
  {
    icon: ShieldAlert,
    title: "Security & Compliance Blind Spots",
    description:
      "One breach or failed audit can undo years of trust built with customers, partners, and investors.",
  },
  {
    icon: Users,
    title: "Experiences That Frustrate Customers",
    description:
      "Clunky interfaces and slow support quietly push customers toward competitors who make things easy.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function BusinessChallenges() {
  return (
    <section className="relative overflow-hidden bg-muted py-24">
      {/* Ambient background accents, consistent with other sections */}
      <div className="pointer-events-none absolute -left-24 top-10 h-[350px] w-[350px] rounded-full bg-primary/5 blur-3xl dark:bg-primary/10" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-[350px] w-[350px] rounded-full bg-blue-600/5 blur-3xl dark:bg-blue-600/10" />

      <div className="container relative z-10 mx-auto px-6">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 block text-sm font-bold uppercase tracking-wider text-primary"
          >
            The Challenge
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl"
          >
            Every Business Hits a Wall.{" "}
            <span className="text-primary">We Know Where.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            After partnering with founders and enterprises across 15+
            industries, we keep seeing the same roadblocks stall growth — right
            before the moment a technology partner should have stepped in.
          </motion.p>
        </div>

        {/* Challenge cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {challenges.map((challenge) => {
            const Icon = challenge.icon;
            return (
              <motion.div
                key={challenge.title}
                variants={cardVariants}
                className="group h-full rounded-xl border border-border bg-card py-6 text-card-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="px-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {challenge.title}
                  </h3>
                </div>
                <div className="px-6 pt-4">
                  <p className="leading-relaxed text-muted-foreground">
                    {challenge.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
