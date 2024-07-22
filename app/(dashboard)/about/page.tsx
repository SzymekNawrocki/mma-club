import Fighters from "@/components/Fighters"
import Trainers from "@/components/Trainers"
import { PageTitle } from "@/components/PageTitle"
import { Photos } from "@/components/Photos"
import TeamComponent from "@/components/TeamComponent"
import { SectionTitle } from "@/components/SectionTitle"

export default async function TrainerModelsPage() {
  

  return (
    <div>
    <div className="bg-background flex flex-col justify-center items-center py-8 mt-11">
      <PageTitle>Team</PageTitle>
  <div className="w-full max-w-4xl mt-11">
    <TeamComponent />
  </div>
  <div className="w-full max-w-4xl mb-11 py-8">
  </div>
      </div>
      <Fighters/>
    </div>
  )}