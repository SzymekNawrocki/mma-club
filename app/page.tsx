"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import { LandingText } from '@/components/LandingText'
import Link from 'next/link'

export default function Home() {
  const images = [
    "https://cdn.pixabay.com/photo/2023/07/06/21/35/bjj-8111390_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/07/26/16/59/men-8151667_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/07/06/21/35/bjj-8111393_1280.jpg",
  ];

  return (
    <div className="relative h-screen overflow-hidden">
      <ImagesSlider className="absolute inset-0 z-0" images={images} />
      <div className="relative z-10 flex flex-col justify-center items-center h-full w-full">
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="flex flex-col justify-center items-center"
        >
          <LandingText/>
  <div className="py-4">
            <Card>
              <CardHeader>
              <Image
          src="/Logo.png"
          alt="Plan zajęć"
          width={150}
          height={100}
          className="rounded-full justify-center items-center mb-5"
        />
            <Button>
                  <Link href="/sign-in">Zaloguj się</Link>
            </Button>
            <Button>
              <Link href="/sign-up">Zarejestruj się</Link></Button>
            <Button>
                <Link href="/dashboard">Przeglądaj stronę</Link>
            </Button>
              </CardHeader>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
