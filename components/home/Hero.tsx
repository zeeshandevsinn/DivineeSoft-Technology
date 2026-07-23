"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Calendar } from "lucide-react";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

import Image from "next/image";

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

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-900/70 z-10" />
        <Image
          src="/mainBg.jpeg"
          alt="Office Background"
          fill
          className="object-fit"
          priority
          sizes="100vw"
          quality={85}
        />
      </div>{" "}
      <div className="container mx-auto px-6 relative z-10 pb-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-blue-300 text-sm font-medium mb-8 border border-blue-500/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            #1 Digital Agency in Pakistan
          </motion.div> */}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[clamp(2rem,6vw,5.2rem)] font-bold text-white mb-8 sm:tracking-tight  sm:leading-tight md:pt-0 pt-6"
          >
            Transforming Ideas into <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Digital Reality
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-200 mb-12 max-w-2xl leading-relaxed"
          >
            We are Divinee Soft Technology. A full-service agency delivering
            smart, creative, and result-driven solutions to help your business
            grow online.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8 h-14 text-lg shadow-lg shadow-secondary/20"
              onClick={async () => {
                const cal = await getCalApi({});
                cal("modal", {
                  calLink:
                    process.env.NEXT_PUBLIC_CAL_LINK ||
                    "zeeshan-malik-x0xcrz/30min",
                });
              }}
            >
              Book Meeting <Calendar className="ml-2 w-5 h-5" />
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 h-14 text-lg border-white/20 hover:bg-white/10 text-white hover:text-white bg-transparent"
            >
              <Link href="/case-studies">View Our Work</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-14 flex flex-col sm:flex-row sm:flex-wrap justify-center lg:justify-start sm:items-center lg:items-start gap-4 sm:gap-6 text-sm font-medium text-muted-foreground"
          >
            {[
              "Production-ready AI & SaaS systems",
              "Client-focused delivery",
              "Modern full-stack architecture",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-center sm:text-left"
              >
                <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                <span className="leading-snug">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>{" "}
        /
      </div>
    </section>
  );
}
