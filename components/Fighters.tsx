import { gql } from "graphql-request";
import { gqlClient } from "@/lib/gqlClient";
import Image from "next/image";

interface IFightersModel {
  image: {
    url: string;
  };
  title: string;
  description: string;
}

export default async function FighterModelsPage() {
  const query = gql`
  { 
allFightersModels {
  image {
    url
  }
  title
  description
}
}
    `;
    
  const { allFightersModels }: { allFightersModels: IFightersModel[] } = await gqlClient.request(query);

  return (
    <div className="container mx-auto py-4 bg-background">
        <h2 className="text-center">Zawodnicy</h2>
        <div>
          {allFightersModels.map((fighter, index) => (
            <div key={index} className="flex flex-col items-center mb-4">
              <Image
              src={fighter.image.url}
              alt={fighter.title}
              width={300}
              height={100}
              className="ml-4 h-50 rounded-lg mt-11 "
            />
            <h2 className="text-2xl font-bold text-primary mr-4 ml-4">{fighter.title}</h2>
            <p className="text-muted-foreground mt-4 mr-4 ml-4 ">{fighter.description}</p>
        </div>
          ))}
      </div>
      </div>
  );
  }
