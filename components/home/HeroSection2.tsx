"use client";

import Link from "next/link";
import { getCalApi } from "@calcom/embed-react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const chips = [
  "Production-ready AI & SaaS systems",
  "Client-focused delivery",
  "Modern full-stack architecture",
];

export default function HeroSection2() {
  const openCalendar = async () => {
    const cal = await getCalApi({});
    cal("modal", {
      calLink: process.env.NEXT_PUBLIC_CAL_LINK || "zeeshan-malik-x0xcrz/30min",
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#f5f7fb] py-20 text-[#0b0e14] dark:bg-background dark:text-foreground sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute right-0 top-0 h-[420px] w-[48vw] rounded-bl-full bg-primary/10 blur-3xl dark:bg-primary/20" />

      <div className="container relative mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-[650px]"
          >
            <div className="mb-5 inline-flex items-center gap-2.5 text-xs font-medium uppercase text-primary">
              <span className="inline-flex gap-0.5">
                <span className="h-0 w-0 border-y-[5px] border-l-[7px] border-y-transparent border-l-primary" />
                <span className="h-0 w-0 border-y-[5px] border-l-[7px] border-y-transparent border-l-primary" />
              </span>
              Digital Growth Partner
            </div>

            <h1 className="max-w-[650px] text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.04] tracking-normal text-[#0b0e14] dark:text-white">
              Transforming ideas
              <br />
              into <span className="text-primary">digital reality</span>
            </h1>

            <p className="mt-6 max-w-[540px] text-base leading-[1.65] text-[#6b7280] dark:text-muted-foreground sm:text-[17px]">
              Divinee Soft Technologies is a full-service software & digital
              agency. We design, build, and grow production-ready web, mobile,
              and AI products for businesses that want to move faster than their
              market.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={openCalendar}
                className="inline-flex h-[54px] items-center justify-center gap-3 rounded-full bg-[#0b0e14] px-6 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f7fb] dark:bg-white dark:text-[#0b0e14] dark:hover:bg-primary dark:hover:text-white dark:focus-visible:ring-offset-background"
              >
                Book a Meeting
                <ArrowRight className="size-4" />
              </button>

              <Link
                href="/case-studies"
                className="inline-flex h-[54px] items-center justify-center rounded-full border border-[#0b0e14]/10 bg-transparent px-6 text-base font-semibold text-[#0b0e14] transition hover:-translate-y-0.5 hover:border-[#0b0e14] hover:bg-[#0b0e14] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f7fb] dark:border-white/15 dark:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-[#0b0e14] dark:focus-visible:ring-offset-background"
              >
                View Our Work
              </Link>
            </div>

            <div className="mt-10 flex max-w-[620px] flex-wrap gap-3">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex min-h-10 items-center gap-2 rounded-full border border-[#0b0e14]/10 bg-white px-4 py-2 text-sm font-medium text-[#0b0e14] shadow-[0_1px_0_rgba(11,14,20,0.02)] dark:border-white/10 dark:bg-card dark:text-card-foreground"
                >
                  <span className="size-1.5 rounded-full bg-primary" />
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="relative mx-auto aspect-square w-full max-w-[630px] overflow-hidden rounded-[24px] bg-[linear-gradient(155deg,#0b0e14_0%,#101a33_55%,#16224a_100%)] [clip-path:polygon(8%_0,100%_0,100%_92%,92%_100%,0_100%,0_8%)] lg:mx-0 hidden lg:block"
            aria-label="Forward motion signal mark"
          >
            <svg
              viewBox="0 0 620 620"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <path
                d="M185 62 L402 300 L185 538 L185 460 L318 300 L185 140 Z"
                fill="#1f56e8"
              />
              <path
                d="M310 60 L530 300 L310 540 M430 95 L600 300 L430 505"
                fill="none"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="3"
              />
            </svg>

            <div className="absolute inset-x-7 bottom-7 flex items-end justify-between gap-6 text-white sm:inset-x-8 sm:bottom-8">
              <div>
                <div className="text-base font-semibold leading-none">
                  Signal / D-系
                </div>
                <div className="mt-2 text-xs font-medium text-white/60 sm:text-sm">
                  Forward motion, engineered
                </div>
              </div>
              <div className="text-right text-xs font-medium text-white/60 sm:text-sm">
                Lahore, PK
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
