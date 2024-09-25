'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { UserButton } from '@clerk/nextjs';
import { DarkModeToggle } from './DarkModeToggle';
import Image from 'next/image'
import { Button } from '@/components/ui/button';
import { FaLock } from 'react-icons/fa';
import { useAuth } from "@clerk/nextjs";

interface NavLinkProps {
  href: string;
  active: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink = ({ href, active, children, onClick }: NavLinkProps) => (
  <Link
    className={`md:flex px-4 text-whiteText rounded-full  ${active ? 'font-bold' : 'font-normal'} text-lg py-2`}
    onClick={onClick}
    href={href}
  >
    {children}
  </Link>
);

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const { isSignedIn } = useAuth();

  const handleRedirect = () => {
    if (!isSignedIn) {
      window.location.href = '/sign-up'; 
    }
  };

  return (
    <nav className={`bg-accent py-2 w-full fixed top-0 z-50 transition-colors duration-300  ${scrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-4xl mx-auto flex justify-between items-center px-4">
        <Link className="rounded-full py-3 px-3 flex font-bold text-lg gap-2" href="/">
          <Image
          src="/Logo.png"
          alt="Plan zajęć"
          width={65}
          height={100}
          className=" rounded-full "
        />
        </Link>
            <DarkModeToggle/>
        <div className="md:hidden text-emerald300">
          <button onClick={toggleNavbar} className="focus:outline-none">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
        <div className="hidden md:flex px-4 py-2 rounded-full gap-5 z-50 ">
          <NavLink href="/dashboard" active={pathname === '/dashboard'}>Home</NavLink>
          <NavLink href="/about" active={pathname === '/about'}>Team</NavLink>
          <NavLink href="/schedule" active={pathname === '/schedule'}>Grafik</NavLink>
          <NavLink href="/contact" active={pathname === '/contact'}>Kontakt</NavLink>
          <NavLink href="/blog" active={pathname === '/blog'}>Blog</NavLink>
          <Button onClick={handleRedirect}>
            <NavLink href={isSignedIn ? "/account" : "/sign-up"} active={pathname === '/account'}>
              Konto
            </NavLink>
                  <FaLock />
            </Button>
          <UserButton/>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.3 }}
          className="gap-5 fixed inset-0 bg-neutral400 z-50 text-white flex flex-col items-center justify-center md:hidden"
          >
            <button onClick={toggleNavbar} className="absolute top-4 right-4 text-white focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <NavLink href="/dashboard" active={pathname === '/dashboard'} onClick={toggleNavbar}>Home</NavLink>
            <NavLink href="/about" active={pathname === '/about'} onClick={toggleNavbar}>Team</NavLink>
            <NavLink href="/schedule" active={pathname === '/schedule'} onClick={toggleNavbar}>Grafik</NavLink>
            <NavLink href="/contact" active={pathname === '/contact'} onClick={toggleNavbar}>Kontakt</NavLink>
            <NavLink href="/contact" active={pathname === '/contact'} onClick={toggleNavbar}>Kontakt</NavLink>
          </motion.div>
        )}
      </AnimatePresence>
      
    </nav>
  );
};

export default Navbar;
