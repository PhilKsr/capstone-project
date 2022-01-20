import { useMapEvent } from "react-leaflet";

export default function MapMoveWatcher({ fetchLocations, filter }) {
  useMapEvent("moveend", () => {
    fetchLocations(filter);
  });
  return null;
}
