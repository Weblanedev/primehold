"use client";
import CoreFeatures from "@/components/CoreFeatures";
import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-48">
      <HeroSection />
      <Features />
      <Services />
      <CoreFeatures />
      <Pricing />
    </div>
  );
}
