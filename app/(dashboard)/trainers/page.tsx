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
  try {
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
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const json = await response.json();
    return json.data.trainers;
  } catch (error) {
    console.error('Failed to fetch trainers:', error);
    return [];
  }
}

export default async function Trainers() {
  const trainers: Trainer[] = await getTrainers();
  console.log('Fetched trainers:', trainers);

  return (
    <div className="mt-12 py-12 flex flex-col items-center">
      <PageTitle>Trenerzy</PageTitle>
      {trainers.map((trainer: Trainer, index: number) => (
        <div key={index} className="w-full max-w-md mt-4">
          <Card className="shadow-lg rounded-lg">
            <CardHeader className="p-6">
              <h1 className="text-2xl font-semibold mb-4 text-center">{trainer.title}</h1>
              <p className="text-gray-600 mb-4 text-center">{trainer.description}</p>
              <div className="flex justify-center">
                <div className="w-72 h-72 relative">
                  <Image
                    src={trainer.image?.url}
                    alt={trainer.title}
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
