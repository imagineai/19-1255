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
    <div>
      <button onClick={() => setIsAnnual(!isAnnual)}>
        {isAnnual ? 'Switch to Monthly' : 'Switch to Annual'}
      </button>
      {plans.map((plan, index) => (
        <div key={index}>
          <h2>{plan.name}</h2>
          <p>{isAnnual ? plan.priceAnnual : plan.priceMonthly} per {isAnnual ? 'year' : 'month'}</p>
          <ul>
            {plan.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <button>Sign Up</button>
        </div>
      ))}
    </div>
  );
};

export default Pricing;