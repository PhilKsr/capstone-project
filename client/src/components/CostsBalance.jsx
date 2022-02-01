import { useEffect, useState } from "react";
import styled from "styled-components";

export default function CostsBalance({ allCosts }) {
  const [totalCostPerHead, setTotalCostPerHead] = useState({});

  useEffect(() => {
    const newTotalcosts = {};
    allCosts.forEach((cost) => {
      if (!(cost.name in newTotalcosts)) {
        newTotalcosts[cost.name] = cost.cost;
        return;
      }
      newTotalcosts[cost.name] = newTotalcosts[cost.name] + cost.cost;
    });

    const sum = allCosts.reduce((a, b) => Number(a) + Number(b.cost), 0);
    const average = sum / Object.keys(newTotalcosts).length;

    Object.keys(newTotalcosts).forEach((key) => {
      let balance = average - newTotalcosts[key];
      newTotalcosts[key] = balance;
      setTotalCostPerHead(newTotalcosts);
    });
  }, [allCosts]);

  return (
    <>
      <div>
        {Object.keys(totalCostPerHead).map((key) => (
          <li>
            <span>
              {totalCostPerHead[key] < 0
                ? `${key} gets paid ${(totalCostPerHead[key] * -1).toFixed()} €`
                : `${key} has to pay ${totalCostPerHead[key].toFixed()} €`}
            </span>
          </li>
        ))}
      </div>
    </>
  );
}
