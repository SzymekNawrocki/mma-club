import Fighters from '@/components/Fighters'
import { PageTitle } from '@/components/PageTitle'

export default async function Fighter () {
  return (
    <div className='py-11 mt-11 text-center'>
      <h1>Zawodnicy</h1>
    <Fighters/>
    </div>
  )
}