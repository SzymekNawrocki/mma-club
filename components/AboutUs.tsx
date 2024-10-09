import Image from "next/image";
import { Card, CardHeader } from "./ui/card";

const AboutUs: React.FC = () => {
  return (
    <div className="p-6 rounded-lg text-foreground flex flex-col lg:flex-row items-center  mb-11  mx-11">
      <div className="md:w-2/3 p-4 flex justify-center">
        <Image 
          width={600}
          height={300}
          src="https://cdn.pixabay.com/photo/2019/03/12/12/47/people-4050698_1280.jpg"
          alt="O Nas" 
          className="rounded-lg"
          />
      </div>
      <div className="p-8 text-justify">
        <p className="text-lg mb-4">
          Jesteśmy zespołem pasjonatów sztuk walki, z wieloletnim doświadczeniem w treningach BJJ, MMA i Muay Thai. Naszym celem jest promowanie zdrowego stylu życia i dostarczanie najlepszych porad dotyczących treningów oraz wyboru sprzętu.
        </p>
        <p className="text-lg">
          Nasz zespół składa się z wykwalifikowanych instruktorów i zawodników, którzy regularnie biorą udział w zawodach i szkoleniach na całym świecie. Dzięki temu możemy dzielić się z Wami najnowszymi trendami i technikami w świecie sztuk walki.
        </p>
      </div>
    </div>
          
         
  );
};

export default AboutUs;

