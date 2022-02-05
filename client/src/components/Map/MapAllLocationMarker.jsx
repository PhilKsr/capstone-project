import { Marker, Popup } from "react-leaflet";
import { getIcon } from "../../lib/getIcon";
import styled from "styled-components";
import {
  addNewRoadtrip,
  isLocationAlreadyOnRoadtrip,
} from "../../lib/roadtripHelpers";
import Button from "../Button";
import Add from "../../images/addIcon.svg";

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
                  <Button
                    onClickFunction={() => addLocation(oneLocation, roadtrip)}
                    size='0.2rem 0.2rem 0.2rem 0.2rem'
                    buttoncolor='var(--confirm)'>
                    <img src={Add} alt='add' />
                  </Button>
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
    margin: 0;
  }
`;
