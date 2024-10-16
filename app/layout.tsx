import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/ui/theme-provider"
import { plPL } from '@clerk/localizations'

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
      <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      localization={plPL}
      appearance={{
        variables: {
          colorPrimary: "grey",
          colorText: "black"
        }
      }}
      afterSignOutUrl={'/'}
      >
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
