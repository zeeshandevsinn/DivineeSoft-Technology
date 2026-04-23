import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeaderSpacer from "@/components/layout/HeaderSpacer";
import { ThemeProvider } from "@/components/theme-provider";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "DivineeSoft Technology - Your Digital Growth Partner",
  description: "DivineeSoft Technology helps businesses grow online through innovative digital marketing strategies, cutting-edge web development, SEO optimization, and creative branding solutions. Partner with us to boost your online presence and drive measurable results.",
  keywords: [
    "digital agency",
    "SEO services",
    "web development",
    "digital marketing",
    "branding",
    "online growth"
  ],
  openGraph: {
    title: "DivineeSoft Technology - Your Digital Growth Partner",
    description: "DivineeSoft Technology helps businesses grow online through innovative digital marketing strategies, web development, SEO, and branding solutions. Boost your online presence today.",
    url: "https://www.divineesofttechnology.com",
    siteName: "DivineeSoft Technology",
    images: [
      {
        url: "https://www.divineesofttechnology.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DivineeSoft Technology",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DivineeSoft Technology - Your Digital Growth Partner",
    description: "Grow your business online with DivineeSoft Technology's digital marketing, web development, SEO, and branding solutions.",
    images: ["https://www.divineesofttechnology.com/og-image.jpg"],
    site: "@divineesofttech",
    creator: "@divineesofttech",
  },
};

import ScrollToTop from "@/components/ui/ScrollToTop";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans antialiased flex flex-col min-h-screen w-screen overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollToTop />
          <Header />

          {/* Header Spacer (Conditional) */}
          <HeaderSpacer />

          {/* Main Content */}
          <main className="flex-grow">
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
