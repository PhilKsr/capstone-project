export const id = (element) => element._id === event.target.id;

export function deleteLocationFromRoadtrip(roadtrip, newLocation) {
  return roadtrip.roadtripLocations.filter((oneLocation) => {
    return oneLocation._id !== newLocation._id;
  });
}

export function addLocationToRoadtrip(roadtrip, newLocation) {
  return [...roadtrip.roadtripLocations, newLocation];
}
