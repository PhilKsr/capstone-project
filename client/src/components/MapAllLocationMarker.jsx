import { Marker, Popup } from "react-leaflet";
import { getIcon } from "../lib/getIcon";
import styled from "styled-components";

export default function AllLocationMarker({
  locations,
  roadtrip,
  onUpdateRoadtripLocations,
  showAllLocations,
}) {
  const addLocation = (event) => {
    const index = locations.findIndex(
      (oneLocation) => oneLocation._id === event.target.id
    );
    const newLocation = locations[index];
    let updatedRoadtripLocations;
    if (
      roadtrip?.locations.some(
        (element) => element._id === locations[index]._id
      )
    ) {
      return null;
    } else {
      updatedRoadtripLocations = [...roadtrip.locations, newLocation];
    }
    onUpdateRoadtripLocations({
      ...roadtrip,
      locations: updatedRoadtripLocations,
    });
  };

  return (
    <>
      {showAllLocations &&
        locations
          .filter((oneLocation) => {
            return !roadtrip?.locations?.some((oneRoadtriplocation) => {
              return (
                oneRoadtriplocation.properties.name ===
                oneLocation.properties.name
              );
            });
          })
          .map((oneLocation, index) => (
            <Marker
              key={oneLocation._id}
              position={[
                oneLocation.geometry.coordinates[1],
                oneLocation.geometry.coordinates[0],
              ]}
              icon={getIcon(oneLocation.type)}>
              <Popup offset={[0, -5]}>
                <PopupContent>
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
                    </>
                  )}
                  <button
                    onClick={addLocation}
                    id={oneLocation._id}
                    name={index}>
                    +
                  </button>
                </PopupContent>
              </Popup>
            </Marker>
          ))}
    </>
  );
}

const PopupContent = styled.div`
  text-align: center;
  button {
    box-sizing: content-box;
    padding: 0.1rem 0.4rem 0.2rem 0.4rem;
    margin-top: 0.5rem;
    border: none;
    border-radius: 50%;
    color: var(--white);
    background-color: #026202;
    transform: scale(1.5);
  }
`;
