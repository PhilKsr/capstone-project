import React, { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";

function Map() {
  const [initialLocations, setInitialLocations] = useState([]);
  const [map, setMap] = useState();

  const fetchLocations = async () => {
    const res = await fetch(
      `http://localhost:5000/api/waterfalls?boundsSW=${
        map.getBounds()._southWest.lat + "," + map.getBounds()._southWest.lng
      }&boundsNE=${
        map.getBounds()._northEast.lat + "," + map.getBounds()._northEast.lng
      }`
    );
    const data = await res.json();
    setInitialLocations(data);
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  const clickHandler = () => {
    console.log(map);
    console.log(map.getBounds()._southWest.lat);
    console.log(map.getBounds()._southWest.lng);
  };

  return (
    <>
      <button onClick={clickHandler}>show all</button>
      <MapContainer
        center={[53.55, 9.99]}
        zoom={7}
        scrollWheelZoom={true}
        whenCreated={setMap}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {initialLocations.map((location) => (
          <Marker
            key={location._id}
            position={[
              location.geometry.coordinates[1],
              location.geometry.coordinates[0],
            ]}></Marker>
        ))}
        <Marker position={[53.55, 9.99]}></Marker>
      </MapContainer>
    </>
  );
}

export default Map;
