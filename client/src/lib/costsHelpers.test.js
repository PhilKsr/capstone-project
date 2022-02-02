import { getAverage, getTotalCostsPerHead } from "./costsHelpers";

describe("Get total from array of objects (costs).", () => {
  it("It should return an filled object.", () => {
    const costs = [
      { name: "Kevin", cost: 3 },
      { name: "Kevin", cost: 8 },
      { name: "Kevin", cost: 12 },
      { name: "Kevin", cost: 7 },
    ];
    const expectedObject = { Jeff: 7, Kevin: 3, Lisa: 20 };

    const result = getTotalCostsPerHead(costs);

    expect(result).toBeTruthy();
  });
  it("It should return an object with names as property and cost as keys.", () => {
    const costs = [
      { name: "Kevin", cost: 3 },
      { name: "Lisa", cost: 8 },
      { name: "Lisa", cost: 12 },
      { name: "Jeff", cost: 7 },
    ];
    const expectedObject = { Jeff: 7, Kevin: 3, Lisa: 20 };

    const result = getTotalCostsPerHead(costs);

    expect(result).toEqual(expectedObject);
  });
});

describe("Get average of object values (costs).", () => {
  it("It should return a number greater than 9", () => {
    const costs = [{ cost: 3 }, { cost: 8 }, { cost: 12 }, { cost: 7 }];
    const totalCostsPerHead = [7, 3, 20];

    const result = getAverage(costs, totalCostsPerHead);

    expect(result).toBeGreaterThanOrEqual(10);
  });

  it("It should return one third of the total sum.", () => {
    const costs = [{ ost: 12 }, { cost: 8 }, { cost: 12 }, { ost: 13 }];
    const totalCostsPerHead = [13, 12, 20];
    const sum = costs.reduce((a, b) => Number(a) + Number(b.cost), 0);

    const result = getAverage(costs, totalCostsPerHead);

    expect(result).toEqual(sum / 3);
  });
});
