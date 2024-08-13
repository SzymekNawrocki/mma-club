'use client'
import { PageTitle } from "@/components/PageTitle";
import Form from '@/components/Form'
import Questions from "@/components/Questions";

export default function ContactPage() {
  return (
    <div className="h-full flex flex-col justify-center items-center py-8">
    <div className="max-w-4xl w-full">
      <PageTitle>Kontakt</PageTitle>
    </div>
    <div className="text-whiteText flex flex-col items-center w-full space-y-8">
      <div className="w-full max-w-4xl">
      </div>
      <div className="w-full max-w-4xl text-center">
        <div className="flex justify-center space-x-4  text-3xl mt-8">
        </div>
      </div>
    </div>
      <Form />
    <div className="w-full">
      <h1 className="font-bold text-3xl text-whiteText text-center mt-32 mb-16">Najczęściej zadawane przez was pytania</h1>
    
      <Questions />
    </div>
  </div>
  );
}
