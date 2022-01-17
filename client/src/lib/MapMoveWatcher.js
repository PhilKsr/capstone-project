import { useMapEvent } from "react-leaflet";

function MapMoveWatcher({ fetchLocations, filter }) {
  useMapEvent("moveend", () => {
    fetchLocations(filter);
  });
  return null;
}

export default MapMoveWatcher;
