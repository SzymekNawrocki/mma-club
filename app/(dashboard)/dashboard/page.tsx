import { HoverEffect } from "@/components/ui/card-hover-effect";
import Image from 'next/image'
import { DashboardMenu } from '@/components/DashboardMenu'
import { PageTitle } from "@/components/PageTitle";
import AboutUs from "@/components/AboutUs";
import { SectionTitle } from "@/components/SectionTitle";
import Place from "@/components/Place";

export default function Home() {
  return (
    <div className="h-screen mt-10 py-8">
    <PageTitle>O Nas</PageTitle>
    <AboutUs />
      <Place/>
    <div>
      <SectionTitle>Gdzie możesz nas znaleźć?</SectionTitle>
    </div>
  </div>
  );
}
