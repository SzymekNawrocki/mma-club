import Image from "next/image";

const BeginnersGuide: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center p-6">
      <div className="lg:w-3/4 p-4">
        <h2 className="text-2xl font-bold mb-4">Porady dotyczące zakupu sprzętu na trening BJJ, MMA i Muay Thai</h2>
        <p className="text-lg mb-4">
          Trening BJJ, MMA i Muay Thai wymaga specjalistycznego sprzętu, który zapewni bezpieczeństwo i komfort podczas treningów. Oto kilka porad:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li>BJJ: Wybierz gi (kimono) wykonane z wysokiej jakości materiałów, które są trwałe i wygodne. Pamiętaj także o ochraniaczu na zęby.</li>
          <li>MMA:Potrzebujesz rękawic MMA, ochraniaczy na golenie, ochraniacza na zęby oraz kasku ochronnego. Upewnij się, że rękawice są dobrze dopasowane i wykonane z trwałych materiałów.</li>
          <li>Muay Thai:Kluczowe są rękawice bokserskie, bandaże bokserskie, ochraniacze na golenie i ochraniacz na krocze. Wybierz rękawice odpowiednie do swojej wagi i poziomu zaawansowania.</li>
        </ul>
      </div>
      <div className="">
        <Image 
        src="https://cdn.pixabay.com/photo/2013/07/13/12/35/boxing-gloves-159920_1280.png" 
        alt="Sprzęt treningowy" 
        width={300}
        height={300}
        className="rounded-lg"/>
      </div>
    </div>
  );
};

export default BeginnersGuide;
