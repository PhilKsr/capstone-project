import { useEffect, useState } from "react";
import { getAverage, getTotalCostsPerHead } from "../lib/costsHelpers";

export default function CostsBalance({ allCosts }) {
  const [totalCostPerHead, setTotalCostPerHead] = useState({});

  useEffect(() => {
    const newTotalcostsPerHead = getTotalCostsPerHead(allCosts);
    const average = getAverage(allCosts, newTotalcostsPerHead);

    Object.keys(newTotalcostsPerHead).forEach((key) => {
      let balance = average - newTotalcostsPerHead[key];
      newTotalcostsPerHead[key] = balance;
      setTotalCostPerHead(newTotalcostsPerHead);
    });
  }, [allCosts]);

  return (
    <div>
      {Object.keys(totalCostPerHead).map((key, index) => (
        <li key={index}>
          <span>
            {totalCostPerHead[key] < 0
              ? `${key} gets paid ${(totalCostPerHead[key] * -1).toFixed()} €`
              : `${key} has to pay ${totalCostPerHead[key].toFixed()} €`}
          </span>
        </li>
      ))}
    </div>
  );
}
