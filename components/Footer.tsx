import Link from 'next/link';


const Footer = () => {
  return (
    <footer className="bg-accent  py-5 text-center">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-around">
        <div className="mb-4 md:mb-0 flex flex-col items-center">
          <span className="text-sm text-foreground mt-2 font-bold">szymonnawrocki.dev © 2024 </span>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0 gap-2">
        </div>
      </div>
    </footer>
  );
};

export default Footer;
