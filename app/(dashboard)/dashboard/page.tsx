import { PageTitle } from "@/components/PageTitle";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <div className="h-screen mt-10 py-8">
    <PageTitle>O Nas</PageTitle>
    <AboutUs />
  </div>
  );
}
