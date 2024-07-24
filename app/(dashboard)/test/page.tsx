import Link from "next/link";
import Image from 'next/image';
import { Card, CardHeader } from '@/components/ui/card';

interface Fighter {
  title: string;
  description: string;
  image: {
    url: string;
  }; 
}

async function getFighters() {
  const response = await fetch(process.env.NEXT_HYGRAPH_ENDPOINT as string, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query Fighters {
                fighters {
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
  return json.data.fighters;
}

export default async function Test() {
  const fighters: Fighter[] = await getFighters();

  return (
    <div className="mt-12 py-12">
      {fighters.map((fighter: Fighter, index: number) => (
        <div key={index}>
        <div className="py-4">
          <Card>
            <CardHeader>
          <h1>{fighter.title}</h1>
          <p>{fighter.description}</p>
          <Image
          src={fighter.image?.url}
          alt={fighter.title}
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
