'use client'

import Faq from "@/components/Faq";
import ContactForm from "@/components/ContactForm";
import { PageTitle } from "@/components/PageTitle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function ContactPage() {
  return (
    <div className="1 h-full flex flex-col justify-center items-center py-8">
      <div className="max-w-4xl w-full">
        <PageTitle>Kontakt</PageTitle>
      </div>
      <div className="text-whiteText lg:mt-14 flex flex-col items-center lg:flex-row lg:space-x-8 w-full">
        <div className="lg:w-1/2">
          <ContactForm />
        </div>
        <div className="  space-y-8 ">
          <p className="max-w-lg text-center mt-11 lg:text-2xl ">
            W razie pytań chętnie pomożemy! Skontaktuj się z nami przez media społecznościowe lub napisz na{" "} 
            <a
              href="mailto:szymonjakubnawrocki@gmail.com"
              className="font-semibold text-emerald300 hover:underline"
            >
              justfight@gmail.com
            </a>
          </p>
          <div className="flex justify-center space-x-4 text-emerald300 text-3xl gap-5">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="hover:text-neutral50 transition-colors duration-300" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="hover:text-neutral50 transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
      <div className="lg:mt-32 mb-32 w-full">
        <h1 className="font-bold text-3xl text-whiteText text-center  mt-32 mb-32">Najczęściej zadawane przez was pytania</h1>
        <Faq />
      </div>
    </div>
  );
}
