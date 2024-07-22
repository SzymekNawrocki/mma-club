import Link from 'next/link';
import { Button } from './ui/button';

const pricingOptions = [
  {
    title: 'Basic Pass',
    price: '10 zł',
    description: 'Access to basic facilities',
    link: '/buy/basic-pass',
  },
  {
    title: 'Standard Pass',
    price: '20 zł',
    description: 'Access to all standard facilities',
    link: '/buy/standard-pass',
  },
  {
    title: 'Premium Pass',
    price: '30 zł',
    description: 'All-inclusive access',
    link: '/buy/premium-pass',
  },
  {
    title: 'Monthly Pass',
    price: '50 zł',
    description: 'Unlimited access for a month',
    link: '/buy/monthly-pass',
  },
  {
    title: 'Yearly Pass',
    price: '500 zł',
    description: 'Unlimited access for a year',
    link: '/buy/yearly-pass',
  },
  {
    title: 'Family Pass',
    price: '$100',
    description: 'Access for the whole family',
    link: '/buy/family-pass',
  },
];

export default function Pricing() {
  return (
    <div className="bg-background py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        {pricingOptions.map((option, index) => (
          <div key={index} className="bg-accent p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-foreground">{option.title}</h2>
            <p className="text-xl font-semibold mb-4 text-primary">{option.price}</p>
            <p className="text-primary mb-6">{option.description}</p>
            <Link href={option.link}>
            <Button>
                Kup Karnet
            </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
