"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { UserButton, useAuth } from "@clerk/nextjs";
import { DarkModeToggle } from "./DarkModeToggle";
import { FaLock } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const pathname = usePathname();
  const { isLoaded, isSignedIn } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleRedirect = () => {
    if (!isSignedIn) {
      window.location.href = "/sign-up";
    }
  };

  if (!isLoaded) {
    return null;
  }

  const navLinks = (
    <>
      <Link
        href="/dashboard"
        className={`text-lg px-4 py-2 rounded-full ${
          pathname === "/dashboard" ? "font-bold" : "font-normal"
        } transition-colors duration-200`}
        onClick={closeNavbar}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={`text-lg px-4 py-2 rounded-full ${
          pathname === "/about" ? "font-bold" : "font-normal"
        } transition-colors duration-200`}
        onClick={closeNavbar}
      >
        Team
      </Link>
      <Link
        href="/schedule"
        className={`text-lg px-4 py-2 rounded-full ${
          pathname === "/schedule" ? "font-bold" : "font-normal"
        } transition-colors duration-200`}
        onClick={closeNavbar}
      >
        Grafik
      </Link>
      <Link
        href="/contact"
        className={`text-lg px-4 py-2 rounded-full ${
          pathname === "/contact" ? "font-bold" : "font-normal"
        } transition-colors duration-200`}
        onClick={closeNavbar}
      >
        Kontakt
      </Link>
      <Link
        href="/blog"
        className={`text-lg px-4 py-2 rounded-full ${
          pathname === "/blog" ? "font-bold" : "font-normal"
        } transition-colors duration-200`}
        onClick={closeNavbar}
      >
        Blog
      </Link>
      <Button onClick={handleRedirect} className="flex items-center gap-2">
        <Link
          href={isSignedIn ? "/account" : "/sign-up"}
          className={`text-lg ${
            pathname === "/account" ? "font-bold" : "font-normal"
          } transition-colors duration-200`}
          onClick={closeNavbar}
        >
          Konto
        </Link>
        <FaLock />
      </Button>
      <div className="hidden md:block mt-2">
          <UserButton />
        </div>
    </>
  );

  return (
    <nav
      className={`bg-accent w-full fixed top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center py-2 px-4">
        {/* Logo - zawsze widoczne na dużych ekranach */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Logo.png"
            alt="Plan zajęć"
            width={50}
            height={50}
            className="rounded-full"
          />
        </Link>

        {/* Przełącznik trybu ciemnego */}
        <DarkModeToggle />

        {/* UserButton widoczny tylko na dużych ekranach */}
      
        {/* Menu mobilne */}
        <div className="md:hidden">
          <button onClick={toggleNavbar} className="focus:outline-none">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Linki nawigacyjne - tylko na dużych ekranach */}
        <div className="hidden md:flex items-center gap-5">{navLinks}</div>
      </div>

      {/* Menu mobilne (otwarte) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-accent z-40 flex flex-col items-center justify-start md:hidden pt-16 px-4"
          >
            {/* Logo w rozwijanym menu mobilnym */}
            <Link href="/" className="mb-8" onClick={closeNavbar}>
              <Image
                src="/Logo.png"
                alt="Plan zajęć"
                width={50}
                height={50}
                className="rounded-full"
              />
            </Link>

            {/* Przycisk UserButton umieszczony po lewej stronie w menu mobilnym */}
            <div className="absolute top-4 left-4">
              <UserButton />
            </div>

            {/* Linki nawigacyjne w menu mobilnym */}
            <div className="flex flex-col items-center gap-5">{navLinks}</div>

            {/* Przycisk do zamknięcia */}
            <button
              onClick={toggleNavbar}
              className="absolute top-4 right-4 text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
