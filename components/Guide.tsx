"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";


export function Guide() {
  return (
    <div className="max-w-xl mx-auto antialiased pt-4 relative flex-row">
    {dummyContent.map((item, index) => (
      <div 
        key={`content-${index}`} 
        className="mb-10 p-6 bg-secondary rounded-xl shadow-md"
      >
        <h2 className="bg-foreground text-accent text-center justify-center items-center rounded-full text-sm w-fit px-4 py-1 mb-4">
          {item.badge}
        </h2>
      
        <div className="text-sm prose prose-sm dark:prose-invert">
          {item?.image && (
            <div className="flex justify-center mb-10">
              <Image
                src={item.image}
                alt="blog thumbnail"
                width={500}
                height={300}
                className="rounded-lg r"
              />
            </div>
          )}
          <p className="text-foreground">{item.description}</p>
        </div>
      </div>
    ))}
  </div>
  );
}

const dummyContent = [
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Sit duis est minim proident non nisi velit non consectetur. Esse
          adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
          Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
          
        </p>
        <p>
          Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
          veniam in commodo id reprehenderit adipisicing. Proident duis
          exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
        </p>
        <p>
          Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
          reprehenderit deserunt amet laborum consequat adipisicing officia qui
          irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
          Amet culpa officia aliquip deserunt veniam deserunt officia
          adipisicing aliquip proident officia sunt.
        </p>
      </>
    ),
    badge: "React",
    image:
      "https://cdn.pixabay.com/photo/2022/02/22/12/52/thai-boxer-7028714_960_720.jpg",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
        <p>
          In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
          veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
          reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
          cillum ut mollit.
        </p>
      </>
    ),
    badge: "Changelog",
    image:
      "https://cdn.pixabay.com/photo/2022/02/22/12/52/thai-boxer-7028714_960_720.jpg",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
      </>
    ),
    badge: "Launch Week",
    image:
      "https://cdn.pixabay.com/photo/2022/02/22/12/52/thai-boxer-7028714_960_720.jpg",
  },
];
