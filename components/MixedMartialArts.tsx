// components/MMAIcons.js
import React from 'react';
import { GiBoxingGlove, GiBlackBelt, GiBoxingRing } from 'react-icons/gi';

export default function MixedMartialArts() {
  return (
    <div className="flex flex-col items-start p-11 bg-background rounded-lg gap-10 text-justify">
      <div className="flex flex-col items-center ">
        <GiBoxingGlove className="text-foreground text-4xl" />
        <span className="text-lg font-semibold">Muay Thai</span>
        <p>Dla treningu Muay Thai, najważniejsze są rękawice, które można wypożyczyć lub kupić. Zaleca się również ochraniacze na golenie i rękawice na worki.</p>
      </div>
      <div className="flex flex-col items-center">
        <GiBlackBelt className="text-foreground text-4xl" />
        <span className="text-lg font-semibold">BJJ</span>
        <p>Dla treningu BJJ, najważniejsze jest gi, czyli kimono. Jeśli masz własne, koniecznie je zabierz, a jeśli nie, większość klubów ma kimona do wypożyczenia lub pozwala na trening w zwykłym stroju sportowym. </p>
      </div>
      <div className="flex flex-col items-center">
        <GiBoxingRing className="text-foreground text-4xl" />
        <span className="text-lg font-semibold">MMA</span>
        <p>Dla treningu MMA, potrzebne są rękawice MMA, ochraniacze na zęby, ochraniacze na golenie oraz kask do sparingów. Warto również zaopatrzyć się w rashguard i spodenki bez zamków.</p>
      </div>
    </div>
  );
}
