import { Marker, Popup } from "react-leaflet";
import { getRoadtripIcon } from "../lib/getIcon";
import styled from "styled-components";

export default function RoadtripLocationMarker({
  roadtrip,
  onUpdateRoadtripLocations,
}) {
  const removeLocation = (index) => {
    const updatedRoadtripLocations = roadtrip.locations.filter(
      (oneLocation) => {
        return oneLocation._id !== roadtrip.locations[index]._id;
      }
    );
    onUpdateRoadtripLocations({
      ...roadtrip,
      locations: updatedRoadtripLocations,
    });
  };

  return (
    <>
      {roadtrip?.locations?.map((oneLocation, index) => (
        <Marker
          key={oneLocation._id}
          position={[
            oneLocation.geometry.coordinates[1],
            oneLocation.geometry.coordinates[0],
          ]}
          icon={getRoadtripIcon(oneLocation.type)}>
          <Popup offset={[0, -5]}>
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
                  </p>
                </>
              )}
              <button onClick={() => removeLocation(index)}>-</button>
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
    padding: 0.1rem 0.45rem 0.2rem 0.45rem;
    border: none;
    border-radius: 50%;
    color: var(--white);
    background-color: #9f0303;
    transform: scale(1.5);
  }
`;
