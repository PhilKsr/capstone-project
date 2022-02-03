export const getTotalCostsPerHead = (allCostItems) => {
  const newTotalCostsPerHead = {};
  allCostItems.forEach((cost) => {
    if (!(cost.name in newTotalCostsPerHead)) {
      newTotalCostsPerHead[cost.name] = cost.cost;
      return;
    }
    newTotalCostsPerHead[cost.name] =
      newTotalCostsPerHead[cost.name] + cost.cost;
  });
  return newTotalCostsPerHead;
};

export const getAverage = (allCostItems, totalCosts) => {
  const sum = allCostItems.reduce((a, b) => Number(a) + Number(b.cost), 0);
  const average = sum / Object.keys(totalCosts).length;
  return average;
};
