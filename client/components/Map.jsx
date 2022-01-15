import React, { useEffect, useRef, useState } from "react";
import {
  MapContainer,
  Marker,
  TileLayer,
  Popup,
  useMapEvents,
} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import MapMoveWatcher from "../lib/MapMoveWatcher";
import styled from "styled-components";
import LocationMarker from "./LocationMarker";

function Map() {
  const [initialLocations, setInitialLocations] = useState([]);
  const [mapInstance, setMapInstance] = useState();

  const fetchLocations = async () => {
    if (!mapInstance) {
      return;
    }
    const res = await fetch(
      `http://localhost:5000/api/castles?boundsSW=${
        mapInstance.getBounds().getWest() +
        "," +
        mapInstance.getBounds().getSouth()
      }&boundsNE=${
        mapInstance.getBounds().getEast() +
        "," +
        mapInstance.getBounds().getNorth()
      }`
    );
    const data = await res.json();
    setInitialLocations(data);
  };

  const clicked = (e) => {
    const map = e.target.previousSibling;
    mapInstance.fire("tileunload");
  };

  useEffect(() => {
    fetchLocations();
  }, [mapInstance]);

  return (
    <>
      <MapContainer
        center={[53.55, 9.99]}
        zoom={7}
        scrollWheelZoom={true}
        whenCreated={setMapInstance}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />

        <MapMoveWatcher fetchLocations={fetchLocations} />

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
        <LocationMarker />
      </MapContainer>
      <LocateButton onClick={clicked}>Locate me!</LocateButton>
    </>
  );
}

export default Map;

const LocateButton = styled.button`
  position: absolute;
  z-index: 100;
  top: 0;
  right: 0;
`;
