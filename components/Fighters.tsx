import Link from "next/link";
import Image from 'next/image'

interface Fighter {
  title: string;
  description: string;
  image: {
    url: string;
  } | null;
}

async function getFighters() {
  const response = await fetch(process.env.NEXT_HYGRAPH_ENDPOINT, {
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
export default async function Home() {

  const fighters: Fighter[] = await getFighters();

  return (
    <div className="m-12">
    {fighters.map((fighter, index) => (
      <div key={index}>
        <h1>{fighter.title}</h1>
        <p>{fighter.description}</p>
      </div>
    ))}
  </div>
  );
}