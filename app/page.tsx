import HeroSection2 from "@/components/home/HeroSection2";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Stats from "@/components/home/Stats";
import FAQ from "@/components/home/FAQ";
import Testimonials from "@/components/home/Testimonials";
import CalInline from "@/components/CalInline";
import { Metadata } from "next";
import ServicesTicker from "@/components/home/ServicesTicker";
import PartnershipSection from "@/components/home/PartnershipSection";
import BlogPreview from "@/components/home/BlogPreview";
import InternationalPartners from "@/components/home/InternationalPartners";

export const metadata: Metadata = {
  title: "DivineeSoft Technology | Transform Ideas Into Digital Success",
  description:
    "Grow your business with DivineeSoft Technology! Expert web, mobile, AI & marketing solutions designed to boost visibility, engagement & results.",
  keywords:
    "digital agency, web & app development, AI solutions, marketing strategies, business growth, online success",
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection2 />
      <ServicesTicker />
      <About />
      <Services />
      <Stats />
      <InternationalPartners />
      <PartnershipSection />
      <Testimonials />
      <BlogPreview />
      <FAQ />
      <CalInline />
    </div>
  );
}
