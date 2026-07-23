"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * Simple Hero Section
 * --------------------------------------------------
 * Left side: headline + text + buttons + stats
 * Right side: a fake "terminal" card with a typing
 * animation and colored dots that light up on hover
 * --------------------------------------------------
 */

// ---------------- Data (easy to edit) ----------------

const ROLES = [
  "--stack production-ready",
  "--Modern tech stack",
  "--High-performance stack",
];

const HEADLINE_LINES = [
  { text: "Every great business", accent: false },
  { text: "starts with one problem.", accent: false },
  { text: "We solve it.", accent: true },
];

const TERMINAL_STEPS = ["mapped business goals", "scoped MVP in 2 weeks"];

const TECH_BADGES = ["React", "Node", "AWS", "Flutter", "AI"];

const STATS = [
  { value: "50+", label: "projects shipped" },
  { value: "8+", label: "years building" },
  { value: "15+", label: "industries served" },
];

// ---------------- Typing effect component ----------------

function TypingText({ words }: { words: string[] }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Blink the cursor every half second
  useEffect(() => {
    const blinkTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkTimer);
  }, []);

  // Handle typing and deleting letters
  useEffect(() => {
    const currentWord = words[wordIndex];

    // Word fully typed -> wait, then start deleting
    if (!isDeleting && text === currentWord) {
      const timeout = setTimeout(() => setIsDeleting(true), 1500);
      return () => clearTimeout(timeout);
    }

    // Word fully deleted -> move to next word
    if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    // Otherwise keep typing or deleting one letter at a time
    const speed = isDeleting ? 30 : 50;
    const timeout = setTimeout(() => {
      const nextLength = isDeleting ? text.length - 1 : text.length + 1;
      setText(currentWord.slice(0, nextLength));
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words]);

  return (
    <span className="inline-flex items-center font-semibold text-primary">
      {text}
      <span
        className="ml-0.5 inline-block h-[1em] w-0.5 bg-primary"
        style={{ opacity: showCursor ? 1 : 0 }}
      />
    </span>
  );
}

// ---------------- Main component ----------------

export default function WeSolveIt() {
  return (
    <section className="relative overflow-hidden bg-background py-24 text-foreground">
      {/* background grid + glow */}
      <div
        className="pointer-events-none absolute inset-0 "
        style={{ maskImage: "radial-gradient(black, transparent 85%)" }}
      />
      <div className="pointer-events-none absolute -left-20 top-20 h-100 w-100 rounded-full " />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-125 w-125ss rounded-full bg-blue-600/10 blur-3xl" />

      <div className="container relative z-10 mx-auto grid gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        {/* ---------------- Left column ---------------- */}
        <div className="flex max-w-160 flex-col">
          {/* small badge on top */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex w-fit items-center gap-2.5 rounded-full border border-primary/20  px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full " />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Technology Partner for Growing Businesses
          </motion.div>

          {/* headline */}
          <h1 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold leading-[1.15] tracking-tight">
            {HEADLINE_LINES.map((line, index) => (
              <motion.span
                key={line.text}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                className={`block ${
                  line.accent ? "text-primary" : "text-foreground"
                }`}
              >
                {line.text}
              </motion.span>
            ))}
          </h1>

          {/* two quote lines */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-6 mt-4 space-y-1 border-l-2 border-primary/30 pl-4"
          >
            <p className="text-sm font-semibold italic text-blue-500/80">
              &ldquo;We don&apos;t just build software. We build
              businesses.&rdquo;
            </p>
            <p className="text-sm font-semibold italic text-blue-500/80">
              &ldquo;Turning Real Problems Into Digital Reality.&rdquo;
            </p>
          </motion.div>

          {/* paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-10 max-w-140 text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            We partner with founders, businesses, and enterprises to transform
            real-world challenges into scalable digital products — becoming your
            long-term technology partner, not just a vendor.
          </motion.p>

          {/* buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-5"
          >
            <button className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-linear-to-r from-primary to-blue-600 px-8 text-base font-bold text-white transition-transform hover:-translate-y-0.5">
              Start Your Project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>

            <a
              href="/case-studies"
              className="inline-flex h-14 items-center justify-center rounded-full border border-foreground/15 bg-white/5 px-8 text-base font-semibold text-foreground transition-transform hover:-translate-y-0.5 hover:bg-white/10"
            >
              See Our Work
            </a>
          </motion.div>

          {/* stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-8"
          >
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-black text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ---------------- Right column: terminal card ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="group relative w-full hidden lg:block"
        >
          {/* glow that appears on hover */}
          <div className="pointer-events-none absolute -inset-4 rounded-[28px] bg-linear-to-r from-red-500/0 via-primary/0 to-emerald-500/0 opacity-0 blur-2xl transition-all duration-500 group-hover:from-red-500/20 group-hover:via-primary/20 group-hover:to-emerald-500/20 group-hover:opacity-100" />

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c1322] p-6 shadow-[0_30px_60px_rgba(0,0,0,0.45)] transition-colors duration-300 hover:-translate-y-1 group-hover:border-white/20">
            {/* title bar with 3 dots */}
            <div className="mb-6 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-white/15 transition-colors duration-300 group-hover:bg-[#ff5f57] group-hover:shadow-[0_0_8px_rgba(255,95,87,0.7)]" />
              <span className="h-3 w-3 rounded-full bg-white/15 transition-colors duration-300 group-hover:bg-[#febc2e] group-hover:shadow-[0_0_8px_rgba(254,188,46,0.7)]" />
              <span className="h-3 w-3 rounded-full bg-white/15 transition-colors duration-300 group-hover:bg-[#28c840] group-hover:shadow-[0_0_8px_rgba(40,200,64,0.7)]" />
              <span className="ml-3 font-mono text-xs text-gray-500">
                ~/divineesoft
              </span>
            </div>

            {/* terminal content */}
            <div className="space-y-3 font-mono text-sm">
              {/* first command line */}
              <p className="flex flex-wrap items-center gap-2">
                <span className="text-emerald-400">→</span>
                <span className="text-gray-400">discovery</span>
                <span className="text-blue-300">./understand-your-problem</span>
              </p>

              {/* checkmarks */}
              {TERMINAL_STEPS.map((step) => (
                <p
                  key={step}
                  className="flex items-center gap-2 pl-5 text-blue-300/90"
                >
                  <span className="text-blue-400">✓</span>
                  {step}
                </p>
              ))}

              {/* typing effect line */}
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">→</span>
                <span className="text-gray-400">build</span>
                <TypingText words={ROLES} />
              </div>

              {/* tech badges */}
              <div className="flex flex-wrap gap-2 pl-5 pt-1">
                {TECH_BADGES.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-md border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary transition-transform hover:-translate-y-0.5"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* deploy command */}
              <p className="flex flex-wrap items-center gap-2">
                <span className="text-emerald-400">→</span>
                <span className="text-gray-400">deploy</span>
                <span className="text-blue-300">--partner-mode on</span>
              </p>

              {/* success line */}
              <p className="flex items-center gap-2 text-emerald-400">
                <span className="text-emerald-400">✓</span>
                shipped & scaling
                <motion.span
                  className="ml-1 h-2 w-2 rounded-full bg-emerald-400"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                />
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
