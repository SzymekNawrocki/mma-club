import { PageTitle } from "@/components/PageTitle";
import  Konto  from '@/components/Konto';
import { SignedOut, RedirectToSignIn } from "@clerk/nextjs";

export default function Account() {
    return (
        <div className="h-screen py-12 text-white mt-20">
            <PageTitle>Twoje Konto</PageTitle>
        <Konto />
        </div>
    )
}