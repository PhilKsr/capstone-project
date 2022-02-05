import { useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";
import Save from "../../images/saveIcon.svg";
import Confirm from "../../images/confirmIcon.svg";

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
      <SaveRoadtripButton>
        <Button
          onClickFunction={() => {
            handleSave();
            onConfirmationHandler();
          }}>
          <img src={Save} alt='save' data-testid='saveRoadtripButton' />
        </Button>
      </SaveRoadtripButton>
      {confirmation && (
        <ConfirmationSign>
          <Button buttoncolor='var(--confirm)'>
            <img src={Confirm} alt='confirm' data-testid='confirmation' />
          </Button>
        </ConfirmationSign>
      )}
    </>
  );
}

const SaveRoadtripButton = styled.div`
  button {
    position: absolute;
    z-index: 100;
    bottom: 0;
    right: 0;
    margin-right: 5.5rem;
    margin-bottom: 5rem;
  }
`;

const ConfirmationSign = styled.div`
  button {
    position: absolute;
    z-index: 100;
    bottom: 0;
    right: 0;
    margin-right: 10.2rem;
    margin-bottom: 5rem;
  }
`;
