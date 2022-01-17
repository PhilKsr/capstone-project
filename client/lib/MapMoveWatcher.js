import { useMapEvent } from "react-leaflet";

function MapMoveWatcher({ fetchLocations, filter }) {
  useMapEvent("mouseup", () => {
    fetchLocations(filter);
  });
  return null;
}

export default MapMoveWatcher;
