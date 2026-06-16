"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string; 
  textClassName?: string;
  iconClassName?: string;
  showText?: boolean; 
  isFooter?: boolean; // Prop to adjust styling for footer context if needed
  forceWhite?: boolean; // Force white text (e.g. for transparent header)
}

export default function Logo({
  className,
  textClassName,
  iconClassName,
  showText = true,
  isFooter = false,
  forceWhite = false
}: LogoProps) {
  const shouldUseWhite = isFooter || forceWhite;

  return (
    <Link
      href="/"
      className={cn("flex items-center gap-3 group", className)}
    >
      {/* Logo Icon */}
      <div
        className={cn(
          "relative transition-transform duration-300",
          isFooter
            ? "w-12 h-12 drop-shadow-sm group-hover:drop-shadow-md"
            : "w-12 h-12 group-hover:scale-105",
          iconClassName
        )}
      >
        <img
          src="/logo.png"
          alt="DivineeSoft Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Logo Text */}
      {showText && (
        <div className={cn("flex flex-col justify-center", isFooter ? "hidden lg:flex" : "")}>
          <h1
            className={cn(
              "text-sm md:text-base lg:text-lg font-bold leading-none md:tracking-[3px] sm:tracking-[1px] logoText transition-colors",
              shouldUseWhite ? "text-white" : "text-foreground",
              textClassName
            )}
          >
            DIVINEESOFT
          </h1>
          <h2
            className={cn(
              "text-[8px] font-semibold leading-tight tracking-wider uppercase mt-0.5",
              isFooter ? "text-muted-foreground" : (forceWhite ? "text-white/80" : "text-primary")
            )}
          >
            Technology
          </h2>
        </div>
      )}
    </Link>
  );
}
