"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling when loading
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleLoad = () => {
      // Add a slight delay for better visual presentation
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1500);
      return () => clearTimeout(timer);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      // Fallback timer to ensure page doesn't get stuck if load event doesn't fire
      const fallback = setTimeout(() => {
        setIsLoading(false);
      }, 3500);

      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(fallback);
      };
    }
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030712] text-white"
        >
          <div className="relative flex flex-col items-center gap-8 px-6 text-center">
            {/* Ambient Background Glow */}
            <div className="absolute -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

            {/* Logo Wrapper */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.5, ease: "easeOut" },
              }}
              className="relative h-16 w-52 sm:h-20 sm:w-64 md:h-24 md:w-72"
            >
              <Image
                src="/logoWhite.png"
                alt="DivineeSoft Logo"
                fill
                sizes="(max-width: 640px) 13rem, (max-width: 768px) 16rem, 18rem"
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Animated Loading Text / Subtitle */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 0.8,
                transition: { delay: 0.2, duration: 0.4 },
              }}
              className="text-xs font-semibold uppercase tracking-[0.25em] text-primary sm:text-sm"
            >
              Digital Excellence
            </motion.div>

            {/* Premium Loading Spinner & Line */}
            <div className="mt-4 flex flex-col items-center gap-4">
              {/* Spinner */}
              {/* <div className="relative h-10 w-10">
                <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-t-primary border-r-primary"
                />
              </div> */}

              {/* Progress Line Simulation */}
              <div className="h-[2px] w-32 overflow-hidden rounded-full bg-primary/10">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                  className="h-full w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent"
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
