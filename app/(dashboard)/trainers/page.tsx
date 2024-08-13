import Link from "next/link";
import Image from 'next/image';
import { Card, CardHeader } from '@/components/ui/card';
import { PageTitle } from "@/components/PageTitle";

interface Trainer {
  title: string;
  description: string;
  image: {
    url: string;
  }; 
}

async function getTrainers() {
  const response = await fetch(process.env.NEXT_HYGRAPH_ENDPOINT as string, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query Trainers {
                trainers {
                  title 
                  description
                  image {
                    url
                  }
                }
              }`,
    }),
  });
  const json = await response.json();
  return json.data.trainers;
}

export default async function Fighters() {
  const fighters: Trainer[] = await getTrainers();

  return (
    <div className="mt-12 py-12 flex flex-col items-center">
      <PageTitle>Zawodnicy</PageTitle>
      {fighters.map((fighter: Trainer, index: number) => (
        <div key={index} className="w-full max-w-md mb-8">
          <Card className="shadow-lg rounded-lg mt-4">
            <CardHeader className="p-6">
              <h1 className="text-2xl font-semibold mb-4 text-center">{fighter.title}</h1>
              <p className="text-gray-600 mb-4 text-center">{fighter.description}</p>
              <div className="flex justify-center">
                <div className="w-72 h-72 relative">
                  <Image
                    src={fighter.image?.url}
                    alt={fighter.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  );
}
