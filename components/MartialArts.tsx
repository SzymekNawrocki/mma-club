"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";

interface TabContentProps {
  
  text: string;
  imgSrc: string;
}

export function MartialArts() {
  const tabs = [
    {
      title: "Tajski Boks",
      value: "product",
      content: (
        <SectionContent 
       
          text="Boks tajski sport walki kładący nacisk na walkę w klinczu z wykorzystaniem uderzeń łokciami, nogami i kolanami."
          imgSrc="https://cdn.pixabay.com/photo/2018/12/08/10/43/phuket-3863143_1280.jpg" 
        />
      ),
    },
    {
      title: "Brazylijskie Jiu-Jitsu",
      value: "services",
      content: (
        <SectionContent 
          text="Brazylijskie jiu-jitsu brazylijski sport walki wywodzący się z ju-jitsu, zapasów i judo, który wyróżnia się naciskiem na walkę w parterze." 
          imgSrc="https://cdn.pixabay.com/photo/2017/11/17/10/38/brazilian-jiu-jitsu-2957075_1280.jpg" 
        />
      ),
    },
    {
      title: "Zapasy",
      value: "playground",
      content: (
        <SectionContent 
          text="Zapasy – sport walki, polegający na fizycznym zmaganiu dwóch zawodników – walka odbywa się wręcz przez stosowanie chwytów i rzutów.
          " 
          imgSrc="https://cdn.pixabay.com/photo/2018/11/04/13/06/wrestle-3793900_1280.jpg" 
        />
      ),
    },
    {
      title: "Trening Funkcjonalny",
      value: "content",
      content: (
        <SectionContent 
          text="Trening funkcjonalny to zestaw różnych ćwiczeń, których celem jest poprawa sprawności potrzebnej podczas wykonywania codziennych czynności." 
          imgSrc="https://cdn.pixabay.com/photo/2021/01/04/06/21/man-5886576_1280.jpg" 
        />
      ),
    },
    {
      title: "Treningi dla dzieci",
      value: "random",
      content: (
        <SectionContent 
          text="W naszym klubie istnieje możliwość przyprowadzenia dzieci od 3 roku życia." 
          imgSrc="https://cdn.pixabay.com/photo/2019/06/06/02/14/martial-arts-4255007_1280.jpg" 
        />
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full  my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const SectionContent: React.FC<TabContentProps> = ({ text, imgSrc }) => {
  return (
    <div className="w-full overflow-hidden h-full rounded-2xl p-4 md:p-10 text-lg md:text-4xl font-bold text-whiteText  bg-black items-center flex">
      <p className="">{text}</p>
      <Image
        src={imgSrc}
        alt="background image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="opacity-15 rounded-2xl"
      />
    </div>
  );
};
