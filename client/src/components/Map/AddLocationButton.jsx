import styled from "styled-components";
import Button from "../Button";
import Pin from "../../assets/pinIcon.svg";

export default function AddButton({ onSetAddNewLocation, addNewLocation }) {
  return (
    <AddLocationButton onClick={onSetAddNewLocation}>
      {addNewLocation ? (
        <Button buttoncolor='var(--confirm)'>
          <img src={Pin} alt='active' />
        </Button>
      ) : (
        <Button>
          <img src={Pin} alt='inactive' />
        </Button>
      )}
    </AddLocationButton>
  );
}

const AddLocationButton = styled.div`
  button {
    box-sizing: content-box;
    position: absolute;
    z-index: 100;
    bottom: 0;
    right: 0;
    margin-right: 1rem;
    margin-bottom: 9rem;
  }

  @media (min-width: 1024px) {
    button {
      margin-bottom: 5rem;
    }
  }
`;
