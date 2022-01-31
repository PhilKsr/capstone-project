import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function SaveButton({
  roadtrip,
  confirmation,
  onConfirmationHandler,
}) {
  const roadtripId = useParams();

  const handleSave = () => (roadtrip._id ? updateRoadtrip() : saveRoadtrip());

  const saveRoadtrip = async () => {
    const result = await fetch("/api/roadtrips", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(roadtrip),
    });
    return await result.json();
  };

  const updateRoadtrip = async () => {
    const result = await fetch(`/api/roadtrips?roadtripId=${roadtripId.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(roadtrip),
    });
    return await result.json();
  };

  return (
    <>
      <SaveRoadtripButton
        onClick={() => {
          handleSave(), onConfirmationHandler();
        }}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='24px'
          viewBox='0 0 24 24'
          width='24px'
          fill='#ffffff'>
          <path d='M0 0h24v24H0z' fill='none' />
          <path d='M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z' />
        </svg>
      </SaveRoadtripButton>
      {confirmation && (
        <ConfirmationSign>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='24px'
            viewBox='0 0 24 24'
            width='24px'
            fill='#ffffff'>
            <path d='M0 0h24v24H0z' fill='none' />
            <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
          </svg>
        </ConfirmationSign>
      )}
    </>
  );
}

const SaveRoadtripButton = styled.button`
  box-sizing: content-box;
  position: absolute;
  z-index: 100;
  bottom: 0;
  right: 0;
  margin-right: 5.5rem;
  margin-bottom: 5rem;
  padding: 0.75rem 0.75rem 0.6rem 0.75rem;
  border: none;
  border-radius: 50%;
  background-color: var(--first);
  cursor: pointer;
`;

const ConfirmationSign = styled.button`
  box-sizing: content-box;
  position: absolute;
  z-index: 100;
  bottom: 0;
  right: 0;
  margin-right: 10.2rem;
  margin-bottom: 5rem;
  padding: 0.75rem 0.75rem 0.6rem 0.75rem;
  border: none;
  border-radius: 50%;
  background-color: #1d981d;
  cursor: pointer;
`;
