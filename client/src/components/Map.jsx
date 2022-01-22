import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import MapMoveWatcher from "../lib/MapMoveWatcher";
import LocationMarker from "./MapYourLocationMarker";
import LocateButton from "./LocateButton";
import FilterMenu from "./FilterMenu";
import Searchbar from "./Searchbar";
import styled from "styled-components";
import { filterLocations } from "../lib/filter";
import AllLocationMarker from "./MapAllLocationMarker";
import RoadtripLocationMarker from "./MapRoadtripLocationMarker";
import { loadFromLocal, saveToLocal } from "../lib/localStorage";

function Map() {
  const resetRoadtrip = {
    roadtripName: "",
    roadtripLocations: [],
  };
  const recentRoadtrip = loadFromLocal("_roadtrip");
  const [locations, setLocations] = useState([]);
  const [mapInstance, setMapInstance] = useState();
  const [roadtrip, setRoadtrip] = useState(recentRoadtrip ?? resetRoadtrip);
  const [filteredLocations, setFilteredLocations] = useState([
    { name: "Alpine Huts", checked: false },
    { name: "Attractions", checked: false },
    { name: "Campsites", checked: false },
    { name: "Caravansites", checked: false },
    { name: "Castles", checked: false },
    { name: "Fuelstations", checked: false },
    { name: "Hotels", checked: false },
    { name: "Restaurants", checked: false },
    { name: "Ruins", checked: false },
    { name: "Themeparks", checked: false },
    { name: "Waterfalls", checked: false },
  ]);

  const fetchAllLocations = async (filterArray) => {
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
    fetchAllLocations();
  }, [mapInstance]);
  useEffect(() => {
    saveToLocal("_roadtrip", roadtrip);
  }, [roadtrip]);

  const checkFilteredLocations = (event) => {
    setFilteredLocations(filterLocations(event, filteredLocations));
  };

  const getFiltered = () => {
    return filteredLocations
      .filter((location) => location.checked)
      .map((location) => location.name);
  };

  const handleInputChange = (event) => {
    setRoadtrip({ ...roadtrip, roadtripName: event.target.value });
  };

  const updateRoadtripLocations = (newLocation) => {
    setRoadtrip(newLocation);
  };

  const addRoadtripToDatabase = async () => {
    const result = await fetch("/api/roadtrips", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(roadtrip),
    });
    return await result.json();
  };

  return (
    <>
      <MapContainer
        center={[48.137154, 11.576124]}
        zoom={8}
        scrollWheelZoom={true}
        whenCreated={setMapInstance}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <MarkerClusterGroup>
          <AllLocationMarker
            locations={locations}
            roadtrip={roadtrip}
            onUpdateRoadtripLocations={updateRoadtripLocations}
          />
        </MarkerClusterGroup>
        <RoadtripLocationMarker
          roadtrip={roadtrip}
          onUpdateRoadtripLocations={updateRoadtripLocations}
        />

        <Searchbar className='searchbar' />
        <MapMoveWatcher
          fetchLocations={fetchAllLocations}
          filter={getFiltered()}
        />
        <LocationMarker />
      </MapContainer>

      <RoadtripName
        type='text'
        name='roadtrip'
        placeholder='Name of roadtrip...'
        value={roadtrip.name}
        onChange={handleInputChange}
      />
      <LocateButton mapInstance={mapInstance} />
      <FilterMenu
        checkFilteredLocations={checkFilteredLocations}
        filteredLocations={filteredLocations}
      />
    </>
  );
}

export default Map;

const RoadtripName = styled.input`
  position: absolute;
  z-index: 100;
  top: 0;
  right: 0;
  margin-right: 5.5rem;
  margin-top: 15px;
  color: var(--white);
  background-color: var(--black);
  opacity: 95%;
  border: none;
  width: 12rem;
  height: 30px;
  padding: 5px;
  border-radius: 5px;
  text-align: center;
  :focus {
    outline: none;
  }

  //Basic MacBook Pro to use with mouse
  @media (min-width: 600px) {
    width: 15rem;
    margin-right: 23em;
    margin-top: 15px;
  }
`;
