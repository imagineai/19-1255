// ./pages/pricing.tsx

import Pricing from '../components/Pricing';

const plans = [
  {
    name: 'Basic',
    priceMonthly: 10,
    priceAnnual: 100,
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  {
    name: 'Premium',
    priceMonthly: 20,
    priceAnnual: 200,
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
  },
];

export default function PricingPage() {
  return <Pricing plans={plans} />;
}