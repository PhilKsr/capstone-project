import { Marker, Popup } from "react-leaflet";
import { getIcon } from "../../lib/getIcon";
import styled from "styled-components";
import {
  addNewRoadtrip,
  isLocationAlreadyOnRoadtrip,
} from "../../lib/roadtripHelpers";

export default function AllLocationMarker({
  locations,
  roadtrip,
  onUpdateRoadtripLocations,
  showAllLocations,
}) {
  const addLocation = (newElement, elementArray) => {
    if (!isLocationAlreadyOnRoadtrip(newElement, elementArray)) {
      onUpdateRoadtripLocations({
        ...roadtrip,
        locations: addNewRoadtrip(newElement, elementArray),
      });
    }
  };

  return (
    <>
      {showAllLocations &&
        locations
          .filter(
            (oneLocation) => !isLocationAlreadyOnRoadtrip(oneLocation, roadtrip)
          )
          .map((oneLocation) => (
            <Marker
              data-testid='allLocations'
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
                  <button onClick={() => addLocation(oneLocation, roadtrip)}>
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
    color: var(--tertiary);
    background-color: #026202;
    transform: scale(1.5);
  }
`;
