import { ILayout } from "@/app/_types/types";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function DashboardLayout({ children }: Readonly<ILayout>) {
  return (
    <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow">
      {children}
    </main>
    <Footer />
  </div> 
  );
}