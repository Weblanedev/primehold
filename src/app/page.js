"use client";
import CoreFeatures from "@/components/CoreFeatures";
import HeroSection from "@/components/HeroSection";
import Pricing from "@/components/Pricing";


export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-48 mt-[200px]">
      <HeroSection />
      <CoreFeatures />
    </div>
  );
}
