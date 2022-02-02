export const isLocationAlreadyOnRoadtrip = (newLocation, newRoadtrip) =>
  newRoadtrip?.locations?.some((location) => location._id === newLocation._id);

export const addNewRoadtrip = (newLocation, newRoadtrip) => {
  const updatedArray = [...newRoadtrip.locations, newLocation];
  return updatedArray;
};
