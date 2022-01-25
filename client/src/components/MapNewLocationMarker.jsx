import { useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import styled from "styled-components";

export default function MapNewLocationMarker({
  addNewLocation,
  filteredLocations,
}) {
  const [newLocation, setNewLocation] = useState([]);

  useMapEvents({
    click(e) {
      setNewLocation([e.latlng]);
    },
  });

  return (
    <>
      {addNewLocation && newLocation.length && (
        <Marker position={newLocation[0]}>
          <Popup offset={[0, -5]}>
            <PopupContent>
              <FormContainer>
                <label htmlFor='name'>Name of location:</label>
                <input type='text' name='name' />
              </FormContainer>
              <FormContainer>
                <label htmlFor='type'>Choose type of location:</label>
                <select name='type'>
                  {filteredLocations?.map((filter, index) => (
                    <option key={index}>{filter.name}</option>
                  ))}
                </select>
              </FormContainer>
              <FormContainer>
                <label htmlFor='website'>Website:</label>
                <input type='text' name='website' />
              </FormContainer>
              <SaveButton>
                <button>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    height='24px'
                    viewBox='0 0 24 24'
                    width='24px'
                    fill='#ffffff'>
                    <path d='M0 0h24v24H0z' fill='none' />
                    <path d='M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z' />
                  </svg>
                </button>
              </SaveButton>
            </PopupContent>
          </Popup>
        </Marker>
      )}
      )
    </>
  );
}

const PopupContent = styled.div`
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
    box-sizing: content-box;
    padding: 0.75rem 0.75rem 0.6rem 0.75rem;
    border: none;
    border-radius: 50%;
    background-color: var(--black);
    cursor: pointer;
  }
`;
