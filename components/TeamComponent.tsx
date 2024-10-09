import { Metadata } from "next/types";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dashboard",
};

interface IMenuItem {
  title: string;
  image: any;
  path: string;
}

const menuItems: IMenuItem[] = [
  {
    title: "Trenerzy",
    image: "https://cdn.pixabay.com/photo/2024/06/04/11/09/monk-8808400_1280.png",
    path: "/trainers",
  },
  {
    title: "Zawodnicy",
    image: "https://cdn.pixabay.com/photo/2013/03/04/03/03/men-89800_1280.jpg",
    path: "/fighters",
  },
];

export default function TeamComponent() {
  return (
    <>
      <div className="flex items-center py-4 justify-center">
        <div className="mt-4 flex flex-col justify-center gap-10 lg:flex-row">
          {menuItems.map((el: IMenuItem, index: number) => (
            <Link
              href={el.path}
              key={index}
              className="group relative h-[320px] w-[300px] sm:h-[400px] sm:w-[360px] lg:h-[560px] lg:w-[450px] overflow-hidden rounded-lg"
            >
              <Image
                layout="fill"
                objectFit="cover"
                src={el.image}
                alt={el.title}
                className="transition-opacity duration-300 group-hover:opacity-50 opacity-80"
              />
              <div className="absolute bottom-8 left-8 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground md:text-6xl">
                <span>{el.title.split(" ")[0]}</span>
                <br />
                <span>{el.title.split(" ")[1]}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
