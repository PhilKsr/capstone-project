import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import LocationMarker from "../components/Map/MapYourLocationMarker";
import LocateButton from "../components/Map/LocateButton";
import FilterMenu from "../components/Map/FilterMenu";
import Searchbar from "../components/Map/Searchbar";
import styled from "styled-components";
import { filterLocations } from "../lib/filter";
import AllLocationMarker from "../components/Map/MapAllLocationMarker";
import RoadtripLocationMarker from "../components/Map/MapRoadtripLocationMarker";
import ResetButton from "../components/Map/ResetButton";
import SaveButton from "../components/Map/SaveButton";
import { useParams } from "react-router-dom";
import ShowAllLocationsButton from "../components/Map/ShowAllLocationsButton";
import AddButton from "../components/Map/AddLocationButton";
import MapNewLocationMarker from "../components/Map/MapNewLocationMarker";
import MapMoveWatcher from "../lib/MapMoveWatcher";

export default function Map() {
  const roadtripId = useParams();

  const emptyRoadtrip = {
    name: "",
    locations: [],
  };

  const [mapInstance, setMapInstance] = useState();
  const [locations, setLocations] = useState([]);
  const [showAllLocations, setShowAllLocations] = useState(true);
  const [roadtrip, setRoadtrip] = useState(emptyRoadtrip);
  const [addNewLocation, setAddNewLocation] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const [filteredLocations, setFilteredLocations] = useState([
    { name: "Alpine Hut", checked: false },
    { name: "Attraction", checked: false },
    { name: "Campsite", checked: false },
    { name: "Caravansite", checked: false },
    { name: "Castle", checked: false },
    { name: "Fuelstation", checked: false },
    { name: "Hotel", checked: false },
    { name: "Restaurant", checked: false },
    { name: "Ruin", checked: false },
    { name: "Themepark", checked: false },
    { name: "Waterfall", checked: false },
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
    if (Object.keys(roadtripId).length) fetchRoadtrip();
  }, []);

  useEffect(() => {
    fetchAllLocations();
  }, [mapInstance]);

  const checkFilteredLocations = (event) => {
    setFilteredLocations(filterLocations(event, filteredLocations));
  };

  const handleInputChange = (event) =>
    setRoadtrip({ ...roadtrip, name: event.target.value });

  const updateRoadtripLocations = (newLocation) => setRoadtrip(newLocation);

  const resetRoadtrip = () => setRoadtrip(emptyRoadtrip);

  const fetchRoadtrip = async () => {
    const res = await fetch(`/api/roadtrip?roadtripId=${roadtripId.id}`);
    const data = await res.json();
    setRoadtrip(data);
  };

  const onSetShowAllLocations = () => setShowAllLocations(!showAllLocations);
  const onSetAddNewLocation = () => setAddNewLocation(!addNewLocation);

  const confirmationHandler = () => {
    setConfirmation(true);
    setTimeout(() => setConfirmation(false), 2000);
  };

  return (
    <>
      <MapContainer
        data-testid='map'
        center={[51.095123, 10.271483]}
        zoom={6}
        scrollWheelZoom={true}
        whenCreated={setMapInstance}
        tap={false}>
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
        <MapNewLocationMarker
          addNewLocation={addNewLocation}
          filteredLocations={filteredLocations}
          onConfirmationHandler={confirmationHandler}
          onSetAddNewLocation={onSetAddNewLocation}
        />
        <Searchbar className='searchbar' />
        <MapMoveWatcher
          fetchLocations={fetchAllLocations}
          filteredLocations={filteredLocations}
        />
        <LocationMarker />
      </MapContainer>

      <RoadtripName
        type='text'
        name='roadtrip'
        placeholder='Roadtrip-name'
        value={roadtrip.name}
        onChange={handleInputChange}
      />
      <LocateButton mapInstance={mapInstance} />
      <FilterMenu
        checkFilteredLocations={checkFilteredLocations}
        filteredLocations={filteredLocations}
      />
      <ResetButton onResetRoadtrip={resetRoadtrip} />
      <SaveButton
        roadtrip={roadtrip}
        confirmation={confirmation}
        onConfirmationHandler={confirmationHandler}
      />
      <ShowAllLocationsButton
        onSetShowAllLocations={onSetShowAllLocations}
        showAllLocations={showAllLocations}
      />
      <AddButton
        onSetAddNewLocation={onSetAddNewLocation}
        addNewLocation={addNewLocation}
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
  color: var(--tertiary);
  background-color: var(--primary);
  opacity: 85%;
  border: none;
  width: 12rem;
  height: 30px;
  padding: 5px;
  border-radius: 5px;
  text-align: center;
  :focus {
    outline: none;
    opacity: 100%;
  }

  @media (min-width: 1024px) {
    width: 25rem;
    margin-right: 1.2rem;
    margin-top: 2.5rem;
    height: 3rem;
    font-size: 1.5rem;
  }
`;
