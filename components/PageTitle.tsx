import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function PageTitle({ children }: Readonly<Props>) {
  return (
    <h1 className="text-3xl font-bold  text-secondary text-whiteText text-center md:text-4xl lg:text-5xl mt-11 py-8">
      {children}
    </h1>
  );
}