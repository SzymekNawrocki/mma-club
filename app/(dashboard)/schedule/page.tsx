'use client'
import Image from "next/image";
import { PageTitle } from "@/components/PageTitle";
import { Guide } from "@/components/Guide";
import {  SectionTitle  } from "@/components/SectionTitle"
import MMAIcons from "@/components/MixedMartialArts";
import { Card, CardHeader } from "@/components/ui/card";
import Pricing from "@/components/Pricing";
import ScheduleArray from "@/components/ScheduleArray";

export default function Schedule () {
  return (
    <div className="text-whiteText mx-auto max-w-4xl px-4 md:px-0 py-8"> 
    <PageTitle>Grafik Zajęć</PageTitle>
      <div className="mb-8">
      <div className="max-w-5xl mx-auto px-8 py-11 mt-11 mb-11">
      <ScheduleArray/>
        <SectionTitle>Co powinieneś mieć na pierwszy trening</SectionTitle>
      <Card>
    <CardHeader>
        <MMAIcons/>
    </CardHeader>
      </Card>
          </div>
        </div>
      <SectionTitle>Cennik</SectionTitle>
      <Pricing/>
    </div>

  );
};

const prizing = [
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


