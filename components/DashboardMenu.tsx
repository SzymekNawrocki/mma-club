import { HoverEffect } from "@/components/ui/card-hover-effect";

export function DashboardMenu() {
    return (
      <div className="max-w-5xl mx-auto px-8 text-center">
        <HoverEffect items={menu} />
      </div>
    );
  }

  export const menu = [
    {
      title: "Zapłać za Karnet",
      link: "https://stripe.com",
      backgroundImage: "https://cdn.pixabay.com/photo/2024/04/28/02/44/leaves-8724660_1280.jpg",
    },
    {
      title: "Twoje Dane",
      link: "https://google.com",
      backgroundImage: "https://cdn.pixabay.com/photo/2024/04/28/02/44/leaves-8724660_1280.jpg",
    },
  ];
  