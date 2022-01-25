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
import ResetButton from "./ResetButton";
import SaveButton from "./SaveButton";
import { useParams } from "react-router-dom";
import ShowAllLocationsButton from "./ShowAllLocationsButton";

export default function Map() {
  const roadtripId = useParams();

  const emptyRoadtrip = {
    name: "",
    locations: [],
  };

  const [locations, setLocations] = useState([]);
  const [showAllLocations, setShowAllLocations] = useState(true);
  const [mapInstance, setMapInstance] = useState();
  const [roadtrip, setRoadtrip] = useState(emptyRoadtrip);
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
    if (Object.keys(roadtripId).length) {
      fetchRoadtrip();
    }
  }, []);

  useEffect(() => {
    fetchAllLocations();
  }, [mapInstance]);

  const checkFilteredLocations = (event) => {
    setFilteredLocations(filterLocations(event, filteredLocations));
  };

  const getFiltered = () => {
    return filteredLocations
      .filter((location) => location.checked)
      .map((location) => location.name);
  };

  const handleInputChange = (event) => {
    setRoadtrip({ ...roadtrip, name: event.target.value });
  };

  const updateRoadtripLocations = (newLocation) => {
    setRoadtrip(newLocation);
  };

  const resetRoadtrip = () => {
    setRoadtrip(emptyRoadtrip);
  };

  const fetchRoadtrip = async () => {
    const res = await fetch(`/api/roadtrip?roadtripId=${roadtripId.id}`);
    const data = await res.json();
    setRoadtrip(data);
  };

  const onSetShowAllLocations = () => {
    setShowAllLocations(!showAllLocations);
  };

  return (
    <>
      <MapContainer
        center={[51.095123, 10.271483]}
        zoom={6}
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
            showAllLocations={showAllLocations}
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
        placeholder='Type a name!'
        value={roadtrip.name}
        onChange={handleInputChange}
      />
      <LocateButton mapInstance={mapInstance} />
      <FilterMenu
        checkFilteredLocations={checkFilteredLocations}
        filteredLocations={filteredLocations}
      />
      <ResetButton onResetRoadtrip={resetRoadtrip} />
      <SaveButton roadtrip={roadtrip} />
      <ShowAllLocationsButton
        onSetShowAllLocations={onSetShowAllLocations}
        showAllLocations={showAllLocations}
      />
    </>
  );
}

const RoadtripName = styled.input`
  position: absolute;
  z-index: 100;
  top: 0;
  right: 0;
  margin-right: 5.5rem;
  margin-top: 10px;
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
