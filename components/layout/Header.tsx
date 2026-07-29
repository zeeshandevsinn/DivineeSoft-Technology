"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import Logo from "@/components/Logo";
import { Menu, X, ChevronDown } from "lucide-react";
import { services } from "@/lib/data";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { getCalApi } from "@calcom/embed-react";

/* ================= ROUTE LOGIC ================= */

// const isTransparentRoute = (pathname: string) => {
//   return pathname === "/";
// };
const isTransparentRoute = (pathname: string) => {
  return false; // Disable transparent header for all routes
};

/* ================= COMPONENT ================= */

export default function Header() {
  const pathname = usePathname();
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  const openMobileMenu = () => {
    setMobileMenuOpen(true);
  };

  const toggleMobileServices = () => {
    setMobileServicesOpen((prev) => !prev);
  };

  /* ---------- HEADER BEHAVIOR (SCROLL ONLY) ---------- */

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    // Hide header on scroll down
    if (latest > previous && latest > 120) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    // Solid background after scroll
    setScrolled(latest > 50);
  });

  /* ---------- ROUTE STYLING (NO LAYOUT IMPACT) ---------- */

  const isTransparentPage = isTransparentRoute(pathname);
  const isLightHeader = isTransparentPage && !scrolled;

  // Single source of truth for header-text color, used by
  // every interactive element in the header (desktop links,
  // services dropdown trigger, mobile trigger button).
  const navTextClass = isLightHeader
    ? "text-white hover:text-white/80"
    : "text-foreground hover:text-primary";

  /* ---------- NAV LINKS ---------- */

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blogs", href: "https://blogs.divineesoft.com" },
  ];

  const openCalendar = async () => {
    const cal = await getCalApi({});
    cal("modal", {
      calLink: process.env.NEXT_PUBLIC_CAL_LINK || "zeeshan-malik-x0xcrz/30min",
    });
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-border"
            : "bg-transparent",
        )}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 md:h-20">
          {/* ---------- LOGO ---------- */}
          <Logo forceWhite={isLightHeader} />

          {/* ---------- DESKTOP NAV ---------- */}
          <nav className="hidden items-center gap-6 lg:flex lg:gap-8">
            {navLinks.map((link) => {
              if (link.name === "Services") {
                return (
                  <div key={link.name} className="group relative">
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center gap-1 py-4 text-sm font-medium transition-colors",
                        navTextClass,
                      )}
                    >
                      Services
                      <ChevronDown
                        size={14}
                        className="transition-transform group-hover:rotate-180"
                      />
                      <span className="absolute bottom-3 left-0 h-0.5 w-0 bg-primary transition-all group-hover:w-full" />
                    </Link>

                    {/* Dropdown */}
                    <div className="invisible absolute top-full left-0 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                      <div className="w-64 rounded-xl border border-border bg-card p-2 shadow-xl">
                        {services.map((service) => (
                          <Link
                            key={service.id}
                            href={`/services/${service.id}`}
                            className="block rounded-lg px-4 py-3 transition hover:bg-muted"
                          >
                            <div className="text-sm font-medium text-foreground">
                              {service.title}
                            </div>
                            <div className="line-clamp-1 text-xs text-muted-foreground">
                              {service.desc}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={cn(
                    "group relative py-4 text-sm font-medium transition-colors",
                    navTextClass,
                  )}
                >
                  {link.name}
                  <span className="absolute bottom-3 left-0 h-0.5 w-0 bg-primary transition-all group-hover:w-full" />
                </Link>
              );
            })}
          </nav>

          {/* ---------- CTA & MOBILE ---------- */}
          <div className="flex items-center gap-3 sm:gap-4">
            <ThemeToggle />

            <Button asChild className="hidden rounded-full px-6 lg:inline-flex">
              <Link href="/contact">Get a Quote</Link>
            </Button>
            <Button asChild  onClick={openCalendar} className="hidden rounded-full px-6 lg:inline-flex"
            >Book a Call
            </Button>

            <button
              onClick={openMobileMenu}
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
              className={cn(
                "rounded-lg p-2 transition-colors lg:hidden",
                navTextClass,
              )}
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 28,
            }}
            className="fixed inset-0 z-60 flex flex-col bg-background lg:hidden"
          >
            {/* Top */}
            <div className="flex items-center justify-between border-b p-6">
              <span className="text-lg font-bold">Menu</span>
              <button
                onClick={closeMobileMenu}
                aria-label="Close menu"
                className="rounded-lg p-2 transition-colors hover:bg-muted"
              >
                <X size={26} />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-1 flex-col gap-6 overflow-y-auto p-6">
              {navLinks.map((link) => {
                if (link.name === "Services") {
                  return (
                    <div key={link.name}>
                      <button
                        onClick={toggleMobileServices}
                        aria-expanded={mobileServicesOpen}
                        aria-controls="mobile-services-menu"
                        className="flex w-full justify-between text-xl font-semibold"
                      >
                        Services
                        <ChevronDown
                          className={cn(
                            "transition-transform",
                            mobileServicesOpen && "rotate-180",
                          )}
                        />
                      </button>

                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            id="mobile-services-menu"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="mt-4 flex flex-col gap-3 overflow-hidden pl-4"
                          >
                            {services.map((service) => (
                              <Link
                                key={service.id}
                                href={`/services/${service.id}`}
                                onClick={closeMobileMenu}
                                className="text-muted-foreground transition-colors hover:text-primary"
                              >
                                {service.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="text-xl font-semibold"
                  >
                    {link.name}
                  </Link>
                );
              })}

              <Button asChild className="mt-2 w-full rounded-full">
                <Link href="/contact" onClick={closeMobileMenu}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
