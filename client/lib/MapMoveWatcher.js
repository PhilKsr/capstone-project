import { useMapEvent } from "react-leaflet";

function MapMoveWatcher({ fetchLocations }) {
  useMapEvent("mouseup", () => {
    fetchLocations();
  });
  return null;
}

export default MapMoveWatcher;
