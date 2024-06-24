import Image from "next/image";
import { SectionTitle } from "./SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link'

const trainers = [
  {
    name: "Przemysław Witkowski",
    description: "Doświadczony trener, który wytrenował już wiele soidnych zawodników. Prowadzi grupy brazylijskiego jiu-jitsu, zapasów oraz prowadzi treningi funkcjonalne",
    fightersTrained: 10,
    imageUrl:
      "https://cdn.pixabay.com/photo/2024/06/21/17/38/ai-generated-8844755_1280.jpg",
  },
  {
    name: "Jan Kowal",
    description: "Doświadczony trener, który wytrenował już wiele soidnych zawodników. Prowadzi grupy brazylijskiego jiu-jitsu, zapasów oraz prowadzi treningi funkcjonalne",
    fightersTrained: 15,
    imageUrl:
      "https://cdn.pixabay.com/photo/2020/10/09/17/40/man-5641082_960_720.jpg",
  },
];

const Trainers = () => {
  return (
    <div className="p-8">
    <SectionTitle>Trenerzy</SectionTitle>
    {trainers.map((trainer, index) => (
      <div key={index} className="mb-8 flex flex-col md:flex-row items-center border border-emerald-300 rounded-xl p-8 md:p-11">
        <div className="w-24 h-24 md:w-48 md:h-48 flex-shrink-0 mb-4 md:mb-0">
          <Image
            src={trainer.imageUrl}
            alt={trainer.name}
            width={300}
            height={300}
            className="object-cover w-full h-full rounded-full"
          />
        </div>
        <div className="text-whiteText w-full md:ml-6">
          <h3 className="text-xl md:text-2xl font-bold mb-2">{trainer.name}</h3>
          <p className="text-gray-700 text-sm md:text-base mb-1">{trainer.description}</p>
          <p className="text-gray-500 text-sm md:text-base">Fighters Trained: {trainer.fightersTrained}</p>
          <div className="flex space-x-2 md:space-x-4 mt-4 gap-3 justify-end">
            <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="text-2xl md:text-4xl text-blue-600 hover:text-white" />
            </Link>
            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="text-2xl md:text-4xl text-pink-500 hover:text-white" />
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
  );
};

export default Trainers;
