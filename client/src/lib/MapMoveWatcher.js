import { useMapEvent } from "react-leaflet";
import { getFilteredNames } from "./filter";

export default function MapMoveWatcher({ fetchLocations, filteredLocations }) {
  useMapEvent("moveend", () => {
    const result = getFilteredNames(filteredLocations);
    fetchLocations(result);
  });
  return null;
}
