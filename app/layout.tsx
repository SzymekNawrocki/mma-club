import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "@/components/Header"
import { ClerkProvider, SignedIn, SignIn, SignedOut, UserButton } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import { ThemeProvider } from "@/components/ui/theme-provider"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Klub MMA",
  description: "Strona internetowa klubu MMA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClerkProvider appearance={{
        variables: {
          colorPrimary: "red",
          colorText: "black"
        }
      }}
      afterSignOutUrl={'/dashboard'}>
    <html lang="en">
        <body className="bg-background">
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
         
         {children}
         
         </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
