"use client";
import { useRef } from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import { motion } from "framer-motion";
import { MartialArts } from "@/components/MartialArts";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Link from 'next/link';

const images = [
  "https://cdn.pixabay.com/photo/2023/07/06/21/35/bjj-8111393_960_720.jpg",
  "https://cdn.pixabay.com/photo/2016/08/07/08/49/mma-1575852_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/08/07/08/50/mma-1575857_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/12/21/19/22/boxer-1923694_1280.jpg"
];

export default function Home() {
  const martialArtsRef = useRef<HTMLDivElement>(null);

  const scrollToMartialArts = () => {
    if (martialArtsRef.current) {
      martialArtsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white">
      <ImagesSlider className="w-screen h-screen" images={images}>
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.p className="font-bold text-base lg:text-xl text-center text-white w-1/2 py-7">
            Witamy na stronie klubu sztuk walkii i centrum treningu funkcjonalnego Just Fight.
          </motion.p>
          <HoverBorderGradient onClick={scrollToMartialArts}>Co trenujemy?</HoverBorderGradient>
        </motion.div>
      </ImagesSlider>
      <h1 ref={martialArtsRef}></h1>
      <MartialArts />

      <Link className="py-11 mb-32 " href="/about">
        <HoverBorderGradient>
          Dowiedz się więcej o nas!
        </HoverBorderGradient>
      </Link>
    </div>
  );
}
