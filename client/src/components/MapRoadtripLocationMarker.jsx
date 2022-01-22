import { Marker, Popup } from "react-leaflet";
import { getRoadtripIcon } from "../lib/getIcon";
import styled from "styled-components";

export default function RoadtripLocationMarker({
  roadtrip,
  onUpdateRoadtripLocations,
}) {
  const removeLocation = (event) => {
    const index = roadtrip.roadtripLocations.findIndex(
      (oneLocation) => oneLocation._id === event.target.id
    );
    const updatedRoadtripLocations = roadtrip.roadtripLocations.filter(
      (oneLocation) => {
        return oneLocation._id !== roadtrip.roadtripLocations[index]._id;
      }
    );
    onUpdateRoadtripLocations({
      ...roadtrip,
      roadtripLocations: updatedRoadtripLocations,
    });
    console.log(updatedRoadtripLocations);
  };

  return (
    <>
      {roadtrip.roadtripLocations.map((oneLocation) => (
        <Marker
          key={oneLocation._id}
          position={[
            oneLocation.geometry.coordinates[1],
            oneLocation.geometry.coordinates[0],
          ]}
          icon={getRoadtripIcon(oneLocation.type)}>
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
                    <button onClick={removeLocation} id={oneLocation._id}>
                      -
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
    background-color: #9f0303;
    transform: scale(1.5);
  }
`;
