"use client";

import Link from "next/link";
import { getCalApi } from "@calcom/embed-react";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

export default function HeroSection2() {
  const openCalendar = async () => {
    const cal = await getCalApi({});
    cal("modal", {
      calLink: process.env.NEXT_PUBLIC_CAL_LINK || "zeeshan-malik-x0xcrz/30min",
    });
  };

  // Fade-up variants for text elements
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        delay: custom * 0.1,
      },
    }),
  };

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#f5f7fb] text-[#0b0e14] dark:bg-[#030712] dark:text-white py-24 flex items-center justify-center transition-colors duration-300">
      {/* 1. Fine High-Tech Blue Grid Overlay */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(9,75,240,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(9,75,240,0.04)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(9,75,240,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(9,75,240,0.06)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] pointer-events-none"
        style={{
          maskImage:
            "radial-gradient(ellipse at center, black, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black, transparent 85%)",
        }}
      />

      {/* 2. Soft Glowing Radial Gradients (Ambient Lights) */}
      <div className="pointer-events-none absolute -left-20 top-20 h-[400px] w-[400px] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl opacity-60" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-[500px] w-[500px] rounded-full bg-blue-600/5 dark:bg-blue-600/10 blur-3xl opacity-50" />

      <div className="container relative mx-auto px-6 z-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          {/* Left Column: Typography & Actions */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col text-left max-w-[680px]"
          >
            {/* Badge / Chip */}
            <motion.div
              variants={fadeUp}
              custom={0}
              className="mb-6 self-start inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/5 px-4.5 py-2 text-xs font-bold uppercase tracking-wider text-primary shadow-[0_0_15px_rgba(9,75,240,0.1)] dark:shadow-[0_0_15px_rgba(9,75,240,0.15)]"
            >
              <span className="h-2 w-2 rounded-full bg-primary animate-ping" />
              <span className="h-2 w-2 rounded-full bg-primary absolute" />
              Technology Partner for Growing Businesses
            </motion.div>

            {/* Main Premium Heading */}
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold leading-[1.1] tracking-tight text-[#0b0e14] dark:text-white mb-6"
            >
              Every Great <br />
              Business <br />
              Starts With <br />
              One Problem. <br />
              <span className="text-primary bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-primary font-black">
                We Solve It.
              </span>
            </motion.h1>

            {/* Dual Subtitles / Quotes */}
            <motion.div
              variants={fadeUp}
              custom={2}
              className="space-y-1 border-l-2 border-primary/30 pl-4 mb-6"
            >
              <p className="text-sm font-semibold italic text-blue-600/80 dark:text-blue-300/80">
                &ldquo;We don&apos;t just build software. We build
                businesses.&rdquo;
              </p>
              <p className="text-sm font-semibold italic text-blue-600/80 dark:text-blue-300/80">
                &ldquo;Turning Real Problems Into Digital Reality.&rdquo;
              </p>
            </motion.div>

            {/* Description Paragraph */}
            <motion.p
              variants={fadeUp}
              custom={3}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-[580px] mb-10"
            >
              We partner with founders, businesses, and enterprises to transform
              real-world challenges into scalable digital products becoming your
              long-term technology partner, not just a vendor.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={fadeUp}
              custom={4}
              className="flex flex-wrap gap-5"
            >
              <button
                type="button"
                onClick={openCalendar}
                className="group inline-flex h-[56px] items-center justify-center gap-3 rounded-full bg-gradient-to-r from-primary to-blue-600 px-8 text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:to-blue-700 hover:from-primary hover:shadow-[0_0_25px_rgba(9,75,240,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Start Your Project
                <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <Link
                href="/case-studies"
                className="inline-flex h-14 items-center justify-center rounded-full border border-[#0b0e14]/15 bg-transparent text-[#0b0e14] hover:bg-[#0b0e14]/5 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-white/25 dark:hover:bg-white/10 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white px-8"
              >
                See Our Work
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Floating Collage of UI Cards */}
          <div className="relative w-full max-w-[550px] mx-auto lg:mx-0 lg:ml-auto flex flex-col items-center gap-5 sm:gap-7">
            {/* Card 1: SATISFACTION (Top Right) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -8, 0],
              }}
              transition={{
                scale: { duration: 0.6, delay: 0.3 },
                opacity: { duration: 0.6, delay: 0.3 },
                y: { repeat: Infinity, duration: 5, ease: "easeInOut" },
              }}
              className="z-20 w-[170px] sm:w-[190px] self-end mr-1 sm:mr-4 rounded-2xl border border-[#0b0e14]/5 bg-white p-5 shadow-[0_20px_40px_rgba(0,0,0,0.06)] dark:border-white/[0.08] dark:bg-[#0c1322]/85 dark:backdrop-blur-xl dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            >
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Satisfaction
              </div>
              <div className="mt-1 text-3xl font-black text-[#0b0e14] dark:text-white">
                98%
              </div>
              <div className="mt-2.5 flex gap-0.5 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-yellow-500 stroke-yellow-500"
                  />
                ))}
              </div>
            </motion.div>

            {/* Card 2: REVENUE (Center / Main) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{
                opacity: 1,
                y: [0, -12, 0],
              }}
              transition={{
                y: {
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                  delay: 0.4,
                },
              }}
              className="z-10 w-full max-w-[300px] sm:max-w-[350px] rounded-[24px] border border-[#0b0e14]/5 bg-white p-6 shadow-[0_30px_60px_rgba(0,0,0,0.08)] dark:border-white/[0.08] dark:bg-[#0c1322]/90 dark:backdrop-blur-2xl dark:shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                  Revenue &bull; This Month
                </span>
                <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                  &uarr; 24.8%
                </span>
              </div>

              <div className="mt-2 text-3xl font-black tracking-tight text-[#0b0e14] dark:text-white">
                $284,902
              </div>

              <div className="mt-6 flex h-24 items-end gap-2.5 pb-2">
                {[30, 45, 60, 40, 75, 90, 55, 70, 100, 80, 95].map((val, i) => (
                  <div
                    key={i}
                    className="flex-1 flex flex-col justify-end h-full group"
                  >
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${val}%` }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.05 }}
                      className="rounded-t-sm bg-gradient-to-t from-primary/35 via-primary/80 to-primary group-hover:from-primary group-hover:to-cyan-400 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>

              <div className="my-5 border-t border-border/50 dark:border-white/[0.06]" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex size-8 items-center justify-center rounded-full bg-blue-600/20 text-xs font-bold text-blue-500 dark:text-blue-400 border border-blue-600/35">
                      A
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#0b0e14] dark:text-white leading-tight">
                        Ahmed Hassan
                      </div>
                      <div className="text-[9px] text-gray-400 dark:text-gray-500">
                        Restaurant Chain
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#0b0e14] dark:text-white">
                    $48,200
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex size-8 items-center justify-center rounded-full bg-purple-600/20 text-xs font-bold text-purple-500 dark:text-purple-400 border border-purple-600/35">
                      S
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#0b0e14] dark:text-white leading-tight">
                        Sara Mitchell
                      </div>
                      <div className="text-[9px] text-gray-400 dark:text-gray-500">
                        Salon Network
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#0b0e14] dark:text-white">
                    $31,800
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Card 3: ACTIVE PROJECTS (Bottom Left) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -6, 0],
              }}
              transition={{
                scale: { duration: 0.6, delay: 0.5 },
                opacity: { duration: 0.6, delay: 0.5 },
                y: {
                  repeat: Infinity,
                  duration: 4.5,
                  ease: "easeInOut",
                  delay: 0.8,
                },
              }}
              className="z-20 w-[180px] sm:w-[200px] self-start ml-1 sm:ml-4 rounded-2xl border border-[#0b0e14]/5 bg-white p-5 shadow-[0_20px_40px_rgba(0,0,0,0.06)] dark:border-white/[0.08] dark:bg-[#0c1322]/85 dark:backdrop-blur-xl dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            >
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Active Projects
              </div>
              <div className="mt-1 text-3xl font-black text-[#0b0e14] dark:text-white">
                47
              </div>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {["React", "Node", "AWS"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-primary/10 px-1.5 py-0.5 text-[9px] font-extrabold text-primary border border-primary/15 dark:bg-blue-500/10 dark:text-[#38bdf8] dark:border-blue-500/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
