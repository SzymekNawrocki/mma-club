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

export default async function TrainersSection() {
  const trainers: Trainer[] = await getTrainers();
  return (
    <div className="mt-12 py-12">
      {trainers.map((trainer: Trainer, index: number) => (
        <div key={index}>
        <div className="py-4">
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
        </div>
      ))}
    </div>
  );
}
