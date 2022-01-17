import React, { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import MapMoveWatcher from "../lib/MapMoveWatcher";
import LocationMarker from "./LocationMarker";
import LocateButton from "./LocateButton";
import FilterMenu from "./FilterMenu";

function Map() {
  const [locations, setLocations] = useState([]);
  const [mapInstance, setMapInstance] = useState();
  const [filteredLocations, setFilteredLocations] = useState([]);

  const fetchLocations = async (filterArray) => {
    if (!mapInstance) {
      return;
    }
    if (mapInstance._zoom >= 6) {
      const res = await fetch(
        `/api?boundsSW=${
          mapInstance.getBounds().getWest() +
          "," +
          mapInstance.getBounds().getSouth()
        }&boundsNE=${
          mapInstance.getBounds().getEast() +
          "," +
          mapInstance.getBounds().getNorth()
        }&collections=${
          filterArray && filterArray.length > 0 ? filterArray.join(",") : false
        }`
      );
      const data = await res.json();
      setLocations(data);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, [mapInstance]);

  const addToFilteredLocations = (event) => {
    if (event.target.checked) {
      setFilteredLocations([...filteredLocations, event.target.name]);
    } else if (!event.target.checked) {
      setFilteredLocations(
        filteredLocations.filter(
          (oneLocation) => oneLocation !== event.target.name
        )
      );
    }
  };

  return (
    <>
      <MapContainer
        center={[53.55, 9.99]}
        zoom={8}
        scrollWheelZoom={true}
        whenCreated={setMapInstance}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />

        <MapMoveWatcher
          fetchLocations={fetchLocations}
          filter={filteredLocations}
        />

        <MarkerClusterGroup>
          {locations.map((oneLocation) => (
            <Marker
              key={oneLocation._id}
              position={[
                oneLocation.geometry.coordinates[1],
                oneLocation.geometry.coordinates[0],
              ]}>
              <Popup>
                <div>
                  <p>{oneLocation.properties.name}</p>
                </div>
              </Popup>
            </Marker>
          ))}
          <Marker position={[53.55, 9.99]}></Marker>
        </MarkerClusterGroup>

        <LocationMarker />
      </MapContainer>

      <LocateButton mapInstance={mapInstance} />
      <FilterMenu
        addToFilteredLocations={addToFilteredLocations}
        filteredLocations={filteredLocations}
      />
    </>
  );
}

export default Map;
