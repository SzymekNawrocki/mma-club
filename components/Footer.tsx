import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-neutral50 text-white py-5 text-center">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-around">
        <div className="mb-4 md:mb-0 flex flex-col items-center">
          <span className="text-sm text-blackText mt-2 font-bold">szymonnawrocki.dev © 2024 </span>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
     
              <FontAwesomeIcon icon={faFacebook} className="text-xl text-blackText hover:text-white" />
     
          </Link>
          <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        
              <FontAwesomeIcon icon={faInstagram} className="text-xl text-blackText hover:text-white" />
            
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
