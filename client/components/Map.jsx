import React, { useEffect, useRef, useState } from "react";
import {
  MapContainer,
  Marker,
  TileLayer,
  useMapEvent,
  Popup,
} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";

function Map() {
  const [initialLocations, setInitialLocations] = useState([]);
  const [map, setMap] = useState();

  const fetchLocations = async () => {
    const res = await fetch(
      `http://localhost:5000/api/castles?boundsSW=${
        map.getBounds()._southWest.lng + "," + map.getBounds()._southWest.lat
      }&boundsNE=${
        map.getBounds()._northEast.lng + "," + map.getBounds()._northEast.lat
      }`
    );
    const data = await res.json();
    setInitialLocations(data);
  };

  useEffect(() => {
    fetchLocations();
  }, [map]);

  const EventWatcher = () => {
    useMapEvent("mouseup", () => {
      fetchLocations();
    });
    return null;
  };

  return (
    <>
      <MapContainer
        center={[53.55, 9.99]}
        zoom={7}
        scrollWheelZoom={true}
        whenCreated={setMap}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <EventWatcher />
        <MarkerClusterGroup>
          {initialLocations.map((location) => (
            <Marker
              key={location._id}
              position={[
                location.geometry.coordinates[1],
                location.geometry.coordinates[0],
              ]}>
              <Popup>
                <div>
                  <p>{location.properties.name}</p>
                </div>
              </Popup>
            </Marker>
          ))}
          <Marker position={[53.55, 9.99]}></Marker>
        </MarkerClusterGroup>
      </MapContainer>
    </>
  );
}

export default Map;
