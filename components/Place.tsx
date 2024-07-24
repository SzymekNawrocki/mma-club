'use client'
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import Link from 'next/link';
import { Card, CardHeader } from '@/components/ui/card';
import { PageTitle } from '@/components/PageTitle';

interface Gps {
  latitude: number;
  longitude: number;
}

interface Place {
  name: string;
  slug: string;
  gps: Gps;
}

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), {
  ssr: false
});
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), {
  ssr: false
});
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), {
  ssr: false
});
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), {
  ssr: false
});

async function getPlaces() {
  const response = await fetch(process.env.NEXT_HYGRAPH_ENDPOINT as string, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `query Places {
        places {
          name
          slug
          gps {
            latitude
            longitude
          }
        }
      }`,
    }),
  });

  if (!response.ok) {
    console.error('Failed to fetch places:', response.statusText);
    return [];
  }

  const json = await response.json();
  return json.data.places;
}

const Place = () => {
  const [places, setPlaces] = useState<Place[]>([]);

  useEffect(() => {
    const loadPlaces = async () => {
      const fetchedPlaces = await getPlaces();
      setPlaces(fetchedPlaces);
      console.log('Fetched places:', fetchedPlaces);  // Debugging line
    };

    loadPlaces();
  }, []);

  if (places.length === 0) {
    return <p>Loading places...</p>;  // Indicate loading state
  }

  return (
    <div className="m-12 py-8">
      <PageTitle>Places</PageTitle>
      <ul className="space-y-4">
        {places.map((place, index) => (
          <li key={index}>
            <Card className="mt-11 hover:bg-accent transition duration-200 text-center">
              <CardHeader>
                <Link href={`/place/${place.slug}`}>
                  {place.name}
                </Link>
              </CardHeader>
              <MapContainer center={[place.gps.latitude, place.gps.longitude]} zoom={13} style={{ height: '200px', width: '100%' }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[place.gps.latitude, place.gps.longitude]}>
                  <Popup>{place.name}</Popup>
                </Marker>
              </MapContainer>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Place;
