export const filterLocations = (event, filteredLocations) => {
  const index = filteredLocations.findIndex(
    (location) => location.name === event.target.name
  );
  let newFilterLocation = filteredLocations.map((element, i) => {
    if (i === index) {
      return { ...element, checked: event.target.checked };
    }
    return element;
  });
  return newFilterLocation;
};

export const getFilteredNames = (filterArray) => {
  const result = filterArray
    .filter((location) => location.checked)
    .map((location) => location.name);
  return result;
};
