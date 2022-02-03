import { addNewRoadtrip, isLocationAlreadyOnRoadtrip } from "./roadtripHelpers";

describe("Check if location is already on roadtrip.", () => {
  it("It should return true if location is on roadtrip.", () => {
    const newLocation = { name: "Hamburg", _id: 1 };
    const newRoadtrip = {
      locations: [
        { name: "Hamburg", _id: 1 },
        { name: "Berlin", _id: 2 },
        { name: "München", _id: 3 },
      ],
    };

    const result = isLocationAlreadyOnRoadtrip(newLocation, newRoadtrip);

    expect(result).toBe(true);
  });

  it("It should return false if location is not on roadtrip.", () => {
    const newLocation = { name: "Freiburg", _id: 4 };
    const newRoadtrip = {
      locations: [
        { name: "Hamburg", _id: 1 },
        { name: "Berlin", _id: 2 },
        { name: "München", _id: 3 },
      ],
    };

    const result = isLocationAlreadyOnRoadtrip(newLocation, newRoadtrip);

    expect(result).toBe(false);
  });
});

describe("Add location to locations of raodtrip.", () => {
  const newLocation = { name: "Freiburg", _id: 4 };
  const newRoadtrip = {
    name: "Awesome roadtrip",
    locations: [
      { name: "Hamburg", _id: 1 },
      { name: "Berlin", _id: 2 },
      { name: "München", _id: 3 },
    ],
  };
  const newLocationArray = [
    { name: "Hamburg", _id: 1 },
    { name: "Berlin", _id: 2 },
    { name: "München", _id: 3 },
    { name: "Freiburg", _id: 4 },
  ];

  const result = addNewRoadtrip(newLocation, newRoadtrip);

  expect(result).toEqual(newLocationArray);
});
