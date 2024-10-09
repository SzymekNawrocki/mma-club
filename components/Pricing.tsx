import Link from 'next/link';
import { Button } from './ui/button';

const pricingOptions = [
  {
    title: 'Pojedynczy Trening',
    price: '10 zł',
    link: '/buy/',
  },
  {
    title: '2 treningi tygodniowo',
    price: '20 zł',
    link: '/buy',
  },
  {
    title: '3-4 treningi tygodniowo',
    price: '30 zł',
    link: '/buy/',
  },
  {
    title: 'Karnet Open',
    price: '50 zł',
    link: '/buy/',
  },
  {
    title: 'Karnet Trening dla Kobiet',
    price: '50 zł',
    link: '/buy',
  },
  {
    title: 'Karnet dla dzieci poniżej 12 roku życia',
    price: '100 zł',
    link: '/buy',
  },
];

export default function Pricing() {
  return (
    <div className="bg-background py-12">
  <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
    {pricingOptions.map((option, index) => (
      <div key={index} className="bg-accent p-6 rounded-lg border flex flex-col justify-between">
        <div className="flex-col mb-4">
          <h2 className="text-xl font-bold text-foreground">{option.title}</h2>
          <p className="text-xl text-primary mt-2">{option.price}</p> 
        </div>
        <Link href={option.link}>
          <Button className="mt-auto">
            Kup Karnet
          </Button>
        </Link>
      </div>
    ))}
  </div>
</div>


  );
}
