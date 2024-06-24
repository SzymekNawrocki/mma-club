import Image from 'next/image';
import { SectionTitle } from './SectionTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link'

const fighters = [
  {
    name: "Wacław Gadzina",
    description: "Doświadczony trener, który wytrenował już wiele soidnych zawodników. Prowadzi grupy brazylijskiego jiu-jitsu, zapasów oraz prowadzi treningi funkcjonalne",
    record: "10-1-0",
    imageUrl: "https://cdn.pixabay.com/photo/2021/11/04/05/08/boxer-6767386_1280.jpg"
  },
  {
    name: "Hanna Kogut",
    description: "Doświadczony trener, który wytrenował już wiele soidnych zawodników. Prowadzi grupy brazylijskiego jiu-jitsu, zapasów oraz prowadzi treningi funkcjonalne",
    record: "25-10-0",
    imageUrl: "https://cdn.pixabay.com/photo/2024/01/14/13/39/ai-generated-8507956_1280.jpg"
  },
  {
    name: "Jacek Filip",
    description: "Doświadczony trener, który wytrenował już wiele soidnych zawodników. Prowadzi grupy brazylijskiego jiu-jitsu, zapasów oraz prowadzi treningi funkcjonalne.",
    record: "15-5-0",
    imageUrl: "https://cdn.pixabay.com/photo/2021/07/21/16/48/kickboxer-6483460_1280.jpg"
  },
  {
    name: "Karolina Pikieta",
    description: "Doświadczony trener, który wytrenował już wiele soidnych zawodników. Prowadzi grupy brazylijskiego jiu-jitsu, zapasów oraz prowadzi treningi funkcjonalne",
    record: "12-3-0",
    imageUrl: "https://cdn.pixabay.com/photo/2015/05/16/17/55/martial-ates-770180_1280.jpg"
  },
  {
    name: "Marcin Kurort",
    description: "Doświadczony trener, który wytrenował już wiele soidnych zawodników. Prowadzi grupy brazylijskiego jiu-jitsu, zapasów oraz prowadzi treningi funkcjonalne",
    record: "8-0-0",
    imageUrl: "https://cdn.pixabay.com/photo/2024/03/22/15/32/ai-generated-8649910_1280.png"
  }
];

const Fighters = () => {
  return (
    <div className="p-8">
    <SectionTitle>Zawodnicy</SectionTitle>
    {fighters.map((fighter, index) => (
      <div key={index} className="mb-8 flex flex-col md:flex-row items-center border border-emerald-300 rounded-xl p-8 md:p-11">
        <div className="w-24 h-24 md:w-48 md:h-48 flex-shrink-0 mb-4 md:mb-0">
          <Image
            src={fighter.imageUrl}
            alt={fighter.name}
            width={300}
            height={300}
            className="object-cover w-full h-full rounded-full"
          />
        </div>
        <div className="text-whiteText w-full md:ml-6">
          <h3 className="text-xl md:text-2xl font-bold mb-2">{fighter.name}</h3>
          <p className="text-gray-700 text-sm md:text-base mb-1">{fighter.description}</p>
          <p className="text-gray-500 text-sm md:text-base">Record: {fighter.record}</p>
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

export default Fighters;
