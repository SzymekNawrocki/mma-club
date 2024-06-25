'use client'
import Image from "next/image";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import BeginnersGuide from "@/components/BeginnersGuide";
import { PageTitle } from "@/components/PageTitle";

export default function Schedule () {
  return (
    <div className="text-whiteText mx-auto max-w-4xl px-4 md:px-0 py-8"> 
    <PageTitle>Grafik Zajęć</PageTitle>
      <div className="mb-8">
      <div className="max-w-5xl mx-auto px-8 py-11 mt-11 mb-11">
      <Image
          src="/planzajecxxl.png"
          alt="Plan zajęć"
          width={1500}
          height={853}
          className="mb-32 mt-11 rounded-2xl "
        />
        <h1 className="text-center font-bold text-4xl">Cennik</h1>
      <HoverEffect items={projects} />
      </div>
    </div>
      <BeginnersGuide/>
    </div>

  );
};

const projects = [
  {
    title: "Pojedynczy trening ",
    description: "30 zł",
  },
  {
    title: "1 trening w tygodniu",
    description:
      "120 zł za miesiąc",
  },
  {
    title: "2 treningi w tygodniu",
    description:
      "170 zł za miesiąc",
  },
  {
    title: "3-4 treningi w tygodniu",
    description:
      "180 zł za miesiąc",
  },
  {
    title: "Karnet Open",
    description:
      "200 zł",
  },
  {
    title: "Treningi dla dzieci",
    description:
      "120 zł za miesiąc",
  },
];


