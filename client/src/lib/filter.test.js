import { filterLocations, getFilteredNames } from "./filter";

describe("Update checked boolean value from array.", () => {
  it("It should return a new array with checked filtered locations.", () => {
    // arrange [AAA]
    const newEvent = { target: { name: "Castle", checked: true } };
    const filteredArray = [
      { name: "Alpine Hut", checked: false },
      { name: "Attraction", checked: false },
      { name: "Castle", checked: false },
    ];
    const resultingArray = [
      { name: "Alpine Hut", checked: false },
      { name: "Attraction", checked: false },
      { name: "Castle", checked: true },
    ];

    // act
    const result = filterLocations(newEvent, filteredArray);

    // assert
    expect(result).toEqual(resultingArray);
  });

  it("It should return the same array if checked is still false.", () => {
    // arrange
    const newEvent = { target: { name: "Cookies", checked: false } };
    const filteredArray = [
      { name: "Cookies", checked: false },
      { name: "Coffee", checked: false },
      { name: "Tea", checked: false },
    ];
    const resultingArray = [
      { name: "Cookies", checked: false },
      { name: "Coffee", checked: false },
      { name: "Tea", checked: false },
    ];

    // act
    const result = filterLocations(newEvent, filteredArray);

    // assert
    expect(result).toEqual(resultingArray);
  });
});

describe("Return array with only checked elements", () => {
  it("It should only return checked", () => {
    const filterArray = [
      { name: "Carl", checked: false },
      { name: "Susanne", checked: true },
      { name: "Jim", checked: false },
      { name: "Jasmin", checked: true },
    ];
    const resultingArray = ["Susanne", "Jasmin"];

    const result = getFilteredNames(filterArray);

    expect(result).toEqual(resultingArray);
  });

  it("It should return an empty array if nothings checked", () => {
    const filterArray = [
      { name: "Carl", checked: false },
      { name: "Susanne", checked: false },
      { name: "Jim", checked: false },
      { name: "Jasmin", checked: false },
    ];
    const resultingArray = [];
    const result = getFilteredNames(filterArray);

    expect(result).toEqual(resultingArray);
  });
});
