"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { getCalApi } from "@calcom/embed-react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, CheckCircle2, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

const highlights = [
  "Web, mobile, AI and marketing teams under one roof",
  "Strategy-first builds for measurable business growth",
  "Clean delivery from idea validation to launch",
];

const metrics = [
  { value: "40+", label: "Products launched" },
  { value: "6+", label: "Core services" },
  { value: "24/7", label: "Growth support" },
];

export default function HeroSection2() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10" />
        <Image
          src="/mainbanner.jpg"
          alt="Office Background"
          fill
          className="object-fit"
          priority
          sizes="100vw"
          quality={85}
        />
      </div>
      /*{" "}
    </section>
  );
}
