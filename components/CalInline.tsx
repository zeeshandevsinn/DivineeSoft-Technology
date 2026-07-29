"use client";

import Cal from "@calcom/embed-react";
import { useEffect, useState } from "react";
import { CAL_INLINE_CONFIG, configureCalUi, DEFAULT_CAL_LINK, watchCalThemeChanges } from "@/lib/cal";
import { Calendar, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function CalInline() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    void configureCalUi();
    const stopWatching = watchCalThemeChanges();
    return () => stopWatching();
  }, []);

  return (
    <section className="relative py-24 overflow-hidden bg-background">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-primary/10 blur-[120px] opacity-60 dark:opacity-40" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10 max-w-[950px]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 space-y-4"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <Calendar className="w-3.5 h-3.5" />
            Book a Direct Consultation
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
            Schedule Your <span className="text-primary bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-indigo-500">Free Strategy Call</span>
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Select a convenient slot to meet with our senior engineering team. We&apos;ll analyze your requirements, discuss solutions, and provide a clear roadmap.
          </p>

          {/* Quick Perks */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-semibold text-foreground/90">
            <div className="flex items-center gap-2 bg-card/80 border border-border/80 px-3.5 py-2 rounded-full shadow-xs backdrop-blur-xs">
              <Clock className="w-4 h-4 text-primary" />
              <span>30-Min Free Session</span>
            </div>
            <div className="flex items-center gap-2 bg-card/80 border border-border/80 px-3.5 py-2 rounded-full shadow-xs backdrop-blur-xs">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Custom Tech Architecture</span>
            </div>
            <div className="flex items-center gap-2 bg-card/80 border border-border/80 px-3.5 py-2 rounded-full shadow-xs backdrop-blur-xs">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>100% Confidential</span>
            </div>
          </div>
        </motion.div>

        {/* Cal Container Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mx-auto rounded-3xl border border-border/80 dark:border-white/10 bg-card/70 dark:bg-[#0c1322]/90 backdrop-blur-xl shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden p-2 sm:p-3"
        >
          <div className="w-full h-[540px] sm:h-[580px] rounded-2xl overflow-hidden">
            {mounted ? (
              <Cal
                calLink={DEFAULT_CAL_LINK}
                style={{ width: "100%", height: "100%", overflow: "auto" }}
                config={CAL_INLINE_CONFIG}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <span className="animate-pulse">Loading scheduling calendar...</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

