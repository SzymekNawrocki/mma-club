import { PageTitle } from "@/components/PageTitle";
import AboutUs from "@/components/AboutUs";
import TeamComponent from "@/components/TeamComponent";
import { SectionTitle } from "@/components/SectionTitle";

export default function Home() {
  return (
    <div className="mt-10 p-8">
    <PageTitle>O Nas</PageTitle>
    <AboutUs />
    <SectionTitle>Nasza Ekipa</SectionTitle>
    <TeamComponent /> 
  </div>
  );
}
