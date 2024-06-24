'use client'

import Faq from "@/components/Faq";
import ContactForm from "@/components/ContactForm";
import { PageTitle } from "@/components/PageTitle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function ContactPage() {
  return (
    <div className="h-full flex flex-col justify-center items-center py-8 space-y-16">
    <div className="max-w-4xl w-full">
      <PageTitle>Kontakt</PageTitle>
    </div>
    <div className="text-whiteText flex flex-col items-center w-full space-y-8">
      <div className="w-full max-w-4xl">
        <ContactForm />
      </div>
      <div className="w-full max-w-4xl text-center">
        <p className="max-w-lg mx-auto text-2xl mt-11">
          W razie pytań chętnie pomożemy! Skontaktuj się z nami przez media społecznościowe lub napisz na{" "} 
          <a
            href="mailto:justfight@gmail.com"
            className="font-semibold text-emerald300 hover:underline"
          >
            justfight@gmail.com
          </a>
        </p>
        <div className="flex justify-center space-x-4  text-3xl mt-8">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="text-blue-600 hover:text-neutral50 transition-colors duration-300" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="text-pink-500 hover:text-neutral50 transition-colors duration-300" />
          </a>
        </div>
      </div>
    </div>
    <div className="w-full max-w-4xl">
      <h1 className="font-bold text-3xl text-whiteText text-center mt-32 mb-16">Najczęściej zadawane przez was pytania</h1>
      <Faq />
    </div>
  </div>
  
  );
}
