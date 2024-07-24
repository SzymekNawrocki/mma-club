import Link from "next/link";
import Image from 'next/image';

interface Trainer {
  title: string;
  description: string;
  image: {
    url: string;
  } | null;
}

async function getTrainers() {
  const response = await fetch(process.env.NEXT_HYGRAPH_ENDPOINT, {
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

export default async function Home() {

  const trainers: Trainer[] = await getTrainers();

  return (
    <div className="m-12">
      {trainers.map((trainer, index) => (
        <div key={index} className="trainer">
          <h1>{trainer.title}</h1>
          <p>{trainer.description}</p>
          {trainer.image && (
            <Image 
              src={trainer.image.url} 
              alt={trainer.title}
              width={500} 
              height={300} 
            />
          )}
        </div>
      ))}
    </div>
  );
}
