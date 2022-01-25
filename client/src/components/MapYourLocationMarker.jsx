import { useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";

export default function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    tileunload() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, 12, map.getZoom());
    },
  });

  return position == null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}
