import Fighters from "@/components/Fighters"
import Trainers from "@/components/Trainers"
import AboutUs from "@/components/AboutUs"
import { PageTitle } from "@/components/PageTitle"


export default async function TrainerModelsPage() {
  

  return (
    <div className=" flex flex-col justify-center items-center py-8">
      <PageTitle>O Nas</PageTitle>
  <div className="w-full max-w-4xl ">
    <AboutUs />
  </div>
  <div className="w-full max-w-4xl mt-11">
    <Trainers />
  </div>
  <div className="w-full max-w-4xl mb-11 py-8">
    <Fighters />
  </div>
</div>
  )}