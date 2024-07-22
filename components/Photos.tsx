"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

export function Photos() {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Seminarium z mistrzem Kung-Fu Heung Min-Son
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        W październiku 2023 roku mieliśmy przyjemność gościć Mistrza Heung Min Son, który pokazał 
        naszym zawodnikom wiele ciekawych technik walki.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Walka Patryka Kukułki w Tajlandii
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Patryk Kukułka zmierzył się na wyspie Phuket w formule Muay Thai z lokalnym zawodnikiem 
        Petchamorungiem Murungiem i zwyciężył ten pojedynek jednogłośną decyzją sędziów 29-28
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Obóz Treningowy w Karkonoszach
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        W styczniu 2024 roku pojechaliśmy na obóz treningowy całą drużyną oraz ekipą chętnych. 
        
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Walka Sebastiana Jednostrzała w Houston rok 2022
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Piękny czas i piękna wygrana Sebstiana przez ciężki nokaut w 2 rundzie walki. Niezapomniane 
        wspomnienia.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://cdn.pixabay.com/photo/2016/09/18/13/00/tai-chi-1678125_1280.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://cdn.pixabay.com/photo/2022/02/22/12/51/muay-thai-7028711_1280.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://cdn.pixabay.com/photo/2018/02/26/17/27/snow-3183568_1280.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://cdn.pixabay.com/photo/2012/10/25/23/32/boxing-62867_1280.jpg",
  },
];
