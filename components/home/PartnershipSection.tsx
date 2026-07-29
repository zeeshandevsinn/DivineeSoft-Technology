"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MdArrowForward,
  MdCheck,
  MdHandshake,
  MdOutlineLayers,
} from "react-icons/md";
import { Button } from "@/components/ui/button";

interface ProofItem {
  label: string;
}

interface StatItem {
  value: string;
  label: string;
}

const proofItems: ProofItem[] = [
  { label: "Product strategy and roadmap planning" },
  { label: "Admin systems and internal operations" },
  { label: "Cloud servers and infrastructure" },
  { label: "Web and mobile product engineering" },
];

const statItems: StatItem[] = [
  { value: "4+", label: "core systems managed" },
  { value: "24/7", label: "technical continuity" },
];

const PartnershipSection = () => {
  return (
    <section className="relative overflow-hidden bg-card py-24 text-card-foreground">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-linear-to-l from-primary/10 to-transparent" />

      <div className="container relative z-10 mx-auto grid grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="h-0.5 w-12 bg-primary" />
            <span className="text-sm font-bold uppercase tracking-wider text-primary">
              Partnership program
            </span>
          </div>

          <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
            Have a strong idea? We become the technical partner behind it.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            If your idea has real market potential, we help shape, build,
            launch, and maintain the complete digital product while you stay
            focused on growth, customers, and business decisions.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-md px-7 font-semibold uppercase tracking-wide shadow-md"
            >
              <Link href="/contact">
                Pitch your idea <MdArrowForward className="size-5" />
              </Link>
            </Button>
            <p className="text-sm font-medium text-muted-foreground">
              Strategy, design, engineering, servers, and long-term support.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -left-4 top-8 hidden h-24 w-24 rounded-full border border-primary/20 lg:block" />
          <div className="relative rounded-2xl border border-border bg-background p-6 shadow-xl shadow-primary/5 md:p-8">
            <div className="flex flex-col gap-5 border-b border-border pb-6 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-primary">
                  Partnership in practice
                </span>
                <h3 className="mt-3 text-2xl font-bold text-foreground">
                  BarberzLink LLC - United States
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  A long-running technical partnership where we manage the
                  product ecosystem from infrastructure to customer-facing apps.
                </p>
              </div>
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <MdHandshake className="size-7" />
              </span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {statItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-border bg-muted/50 p-4"
                >
                  <div className="text-2xl font-bold text-primary">
                    {item.value}
                  </div>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-primary/5 p-5">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <MdOutlineLayers className="size-5" />
                </span>
                <h4 className="text-base font-bold text-foreground">
                  What we operate
                </h4>
              </div>

              <ul className="grid gap-3 sm:grid-cols-2">
                {proofItems.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-start gap-3 text-sm font-medium leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-0.5 flex size-5 hrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MdCheck size={14} />
                    </span>
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnershipSection;
