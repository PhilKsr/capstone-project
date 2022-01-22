import { Marker, Popup } from "react-leaflet";
import { getIcon } from "../lib/getIcon";
import styled from "styled-components";

export default function AllLocationMarker({
  locations,
  roadtrip,
  onUpdateRoadtripLocations,
}) {
  const addLocation = (event) => {
    const index = locations.findIndex(
      (oneLocation) => oneLocation._id === event.target.id
    );
    const newLocation = locations[index];
    let updatedRoadtripLocations;
    if (
      roadtrip?.roadtripLocations.some(
        (element) => element._id === locations[index]._id
      )
    ) {
      return null;
    } else {
      updatedRoadtripLocations = [...roadtrip.roadtripLocations, newLocation];
    }
    onUpdateRoadtripLocations({
      ...roadtrip,
      roadtripLocations: updatedRoadtripLocations,
    });
    console.log(roadtrip);
  };

  return (
    <>
      {locations
        .filter((oneLocation) => {
          return !roadtrip.roadtripLocations.some((oneRoadtriplocation) => {
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
            <Popup offset={[0, -5]} keepInView='true'>
              <PopupContent>
                <h3>{oneLocation.properties.name}</h3>
                {oneLocation.properties.website && (
                  <>
                    <p>
                      Visit{" "}
                      <a href={oneLocation.properties.website} target='_blank'>
                        website
                      </a>{" "}
                      for more details!
                      <button
                        onClick={addLocation}
                        id={oneLocation._id}
                        name={index}>
                        +
                      </button>
                    </p>
                  </>
                )}
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
    margin-left: 1rem;
    padding: 0.1rem 0.4rem 0.2rem 0.4rem;
    border: none;
    border-radius: 50%;
    color: var(--white);
    background-color: #026202;
    transform: scale(1.5);
  }
`;
