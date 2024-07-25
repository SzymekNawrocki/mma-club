import Link from "next/link";
import Image from 'next/image';
import { Card, CardHeader } from '@/components/ui/card';

interface Trainer {
  title: string;
  description: string;
  image: {
    url: string;
  } 
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
    <div className="mt-12 py-12">
      {trainers.map((trainer: Trainer, index: number) => (
        <div key={index} className="py-4">
          <Card>
            <CardHeader>
              <h1>{trainer.title}</h1>
              <p>{trainer.description}</p>
              <Image 
                src={trainer.image?.url}
                alt={trainer.title}
                width={300}
                height={300}
              />
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  );
}
