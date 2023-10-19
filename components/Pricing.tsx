// ./components/Pricing.tsx

import React, { useState } from 'react';

type Plan = {
  name: string;
  priceMonthly: number;
  priceAnnual: number;
  features: string[];
};

type PricingProps = {
  plans: Plan[];
};

const Pricing: React.FC<PricingProps> = ({ plans }) => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="flex flex-wrap justify-center">
      <button 
        className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setIsAnnual(!isAnnual)}
      >
        {isAnnual ? 'Switch to Monthly' : 'Switch to Annual'}
      </button>
      {plans.map((plan, index) => (
        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{plan.name}</div>
            <p className="text-gray-700 text-base">
              {isAnnual ? plan.priceAnnual : plan.priceMonthly} per {isAnnual ? 'year' : 'month'}
            </p>
            <ul className="list-disc pl-5">
              {plan.features.map((feature, index) => (
                <li key={index} className="py-1">{feature}</li>
              ))}
            </ul>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign Up
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pricing;