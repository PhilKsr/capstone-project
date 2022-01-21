import React, { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import MapMoveWatcher from "../lib/MapMoveWatcher";
import LocationMarker from "./LocationMarker";
import LocateButton from "./LocateButton";
import FilterMenu from "./FilterMenu";
import Searchbar from "./Searchbar";
import getIcon from "../lib/getIcon";
import styled from "styled-components";
import { filterLocations } from "../lib/filter";
import {
  id,
  addLocationToRoadtrip,
  deleteLocationFromRoadtrip,
} from "../lib/addLocationToRoadtrip";

function Map() {
  const [locations, setLocations] = useState([]);
  const [mapInstance, setMapInstance] = useState();
  const [roadtrip, setRoadtrip] = useState({
    roadtripName: "",
    roadtripLocations: [],
  });
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

  const addLocation = (event) => {
    const index = event.target.name;
    const newLocation = locations[index];
    let updatedRoadtripLocations;
    if (roadtrip.roadtripLocations.some(id)) {
      updatedRoadtripLocations = deleteLocationFromRoadtrip(
        roadtrip,
        newLocation
      );
    } else {
      updatedRoadtripLocations = addLocationToRoadtrip(roadtrip, newLocation);
    }
    setRoadtrip({ ...roadtrip, roadtripLocations: updatedRoadtripLocations });
    console.log(roadtrip);
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
          {locations.map((oneLocation, index) => (
            <Marker
              key={oneLocation._id}
              position={[
                oneLocation.geometry.coordinates[1],
                oneLocation.geometry.coordinates[0],
              ]}
              icon={getIcon(oneLocation.type)}>
              <Popup offset={[0, -5]} keepInView='true'>
                <div>
                  <h3>{oneLocation.properties.name}</h3>
                  {oneLocation.properties.website && (
                    <>
                      <p>
                        Visit{" "}
                        <a
                          href={oneLocation.properties.website}
                          target='_blank'>
                          website
                        </a>{" "}
                        for more details!
                      </p>
                      <button
                        onClick={addLocation}
                        id={oneLocation._id}
                        name={index}>
                        {roadtrip.roadtripLocations.some(id)
                          ? "Remove from roadtrip"
                          : "Add to roadtrip"}
                      </button>
                    </>
                  )}
                </div>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>

        <Searchbar className='searchbar' />
        <MapMoveWatcher
          fetchLocations={fetchLocations}
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
      <SaveButton>Save roadtrip to collection</SaveButton>
    </>
  );
}

export default Map;

const SaveButton = styled.button`
  position: absolute;
  z-index: 100;
  bottom: 0;
  margin-bottom: 5rem;
  margin-left: 38rem;
`;

const RoadtripName = styled.input`
  position: absolute;
  z-index: 100;
  top: 0;
  margin-left: 5.5rem;
  margin-top: 4rem;
  color: var(--white);
  background-color: var(--black);
  opacity: 95%;
  border: none;
  width: 12rem;
  padding: 5px;
  border-radius: 5px;
  text-align: center;
  :focus {
    outline: none;
  }

  //Basic MacBook Pro to use with mouse
  @media (min-width: 1000px) {
    width: 15rem;
    height: 2rem;
    margin-left: 38rem;
    margin-top: 10px;
  }

  //Basic 2nd screen to use with mouse
  @media (min-width: 1500px) {
    margin-left: 52rem;
    margin-top: 15px;
  }
`;
