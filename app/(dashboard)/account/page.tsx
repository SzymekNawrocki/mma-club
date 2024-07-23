import { DashboardMenu } from '@/components/DashboardMenu'
import { PageTitle } from "@/components/PageTitle";
import  Konto  from '@/components/Konto';

export default function Account() {
    return (
        <div className="h-screen py-12 text-white mt-20">
            <PageTitle>Twoje Konto</PageTitle>
        <Konto />
        </div>
    )
}