"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export function LandingText() {
  const words = [
    {
      text: "Witamy",
    },
    {
      text: "na",
    },
    {
      text: "stronie",
    },
    {
      text: "klubu",
    },
    {
      text: "Shin to Chin MMA",
      className: "text-secondary dark:text-foreground",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center ">
      
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}