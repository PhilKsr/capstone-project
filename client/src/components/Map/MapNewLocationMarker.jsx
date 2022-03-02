import { useEffect, useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import styled from "styled-components";
import Button from "../Button";
import Save from "../../assets/saveIcon.svg";

export default function MapNewLocationMarker({
  addNewLocation,
  filteredLocations,
  onConfirmationHandler,
  onSetAddNewLocation,
}) {
  const initialLocationDetails = {
    type: "",
    properties: {
      name: "",
      website: "",
    },
    geometry: {
      type: "Point",
      coordinates: [],
    },
  };

  const [newLocation, setNewLocation] = useState([]);
  const [locationDetails, setLocationDetails] = useState(
    initialLocationDetails
  );

  useEffect(() => {
    const newCoordinates = {
      ...locationDetails.geometry,
      coordinates: [newLocation[1], newLocation[0]],
    };
    setLocationDetails({
      ...locationDetails,
      geometry: newCoordinates,
    });
  }, [newLocation]);

  useMapEvents({
    click(e) {
      const coordinates = Object.values(e.latlng);
      setNewLocation(coordinates);
    },
  });

  const handleSelectChange = (event) => {
    setLocationDetails({ ...locationDetails, type: event.target.value });
  };

  const handleInputChange = (event) => {
    const newProperties = {
      ...locationDetails.properties,
      [event.target.name]: event.target.value,
    };
    setLocationDetails({
      ...locationDetails,
      properties: newProperties,
    });
  };

  const saveNewLocation = async () => {
    const result = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(locationDetails),
    });
    setLocationDetails(initialLocationDetails);
    onSetAddNewLocation();
    return await result.json();
  };

  return (
    <>
      {addNewLocation && newLocation.length && (
        <Marker position={newLocation}>
          <Popup offset={[0, -5]}>
            <PopupForm>
              <FormContainer>
                <label htmlFor='name'>Name of location:</label>
                <input
                  type='text'
                  name='name'
                  value={locationDetails.properties.name}
                  onChange={handleInputChange}
                />
              </FormContainer>
              <FormContainer>
                <label htmlFor='type'>Choose type of location:</label>
                <select name='type' onChange={handleSelectChange}>
                  <option value=''> -Please choose- </option>
                  {filteredLocations?.map((filter, index) => (
                    <option key={index} value={filter.name}>
                      {filter.name}
                    </option>
                  ))}
                </select>
              </FormContainer>
              <FormContainer>
                <label htmlFor='website'>Website:</label>
                <input
                  type='text'
                  name='website'
                  value={locationDetails.properties.website}
                  onChange={handleInputChange}
                />
              </FormContainer>
              <SaveButton>
                <Button
                  onClick={() => {
                    saveNewLocation(), onConfirmationHandler();
                  }}
                  size='0.4rem 0.4rem 0.4rem 0.4rem'>
                  <img src={Save} alt='save' />
                </Button>
              </SaveButton>
            </PopupForm>
          </Popup>
        </Marker>
      )}
      )
    </>
  );
}

const PopupForm = styled.div`
  padding: 0.5rem;
  font-size: 0.8rem;

  input {
    padding-left: 1rem;
    border-radius: 5px;
    border: 1px black solid;
  }
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
`;

const SaveButton = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1rem;

  button {
    margin: 0;
  }
`;
