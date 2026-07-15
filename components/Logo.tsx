"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  iconClassName?: string;
  isFooter?: boolean; // Prop to adjust styling for footer context if needed
  forceWhite?: boolean; // Force white logo (e.g. for transparent header)
}

export default function Logo({
  className,
  iconClassName,
  isFooter = false,
  forceWhite = false,
}: LogoProps) {
  const shouldUseWhite = isFooter || forceWhite;

  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reserve the final rendered size before mount so the header
  // doesn't jump/reflow once the theme resolves on the client.
  if (!mounted) {
    return (
      <div
        className={cn("h-10 w-28 sm:h-11 sm:w-32 md:h-12 md:w-36", className)}
      />
    );
  }

  const logoSrc = shouldUseWhite
    ? "/whiteLogo.png"
    : resolvedTheme === "light"
      ? "/newlogo.png"
      : "/whiteLogo.png";

  return (
    <Link
      href="/"
      className={cn("group flex shrink-0 items-center gap-3", className)}
    >
      <div
        className={cn(
          "relative h-10 w-28 transition-transform duration-300 sm:h-11 sm:w-32 md:h-12 md:w-36",
          "group-hover:scale-105 ",
          iconClassName,
        )}
      >
        <Image
          src={logoSrc}
          alt="DivineeSoft Logo"
          fill
          sizes="(max-width: 640px) 7rem, (max-width: 768px) 8rem, 9rem"
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
}
