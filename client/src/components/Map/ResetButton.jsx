import { useState } from "react";
import styled from "styled-components";
import Button from "../Button";
import Modal from "../Modal";
import Reset from "../../assets/resetIcon.svg";

export default function ResetButton({ onResetRoadtrip }) {
  const [backupQuestion, setBackupQuestion] = useState(false);
  const backupHandler = () => {
    setBackupQuestion(!backupQuestion);
  };

  return (
    <>
      <StyledResetButton>
        <Button onClickFunction={backupHandler}>
          <img src={Reset} alt='reset' />
        </Button>
      </StyledResetButton>
      {backupQuestion && (
        <Modal onBackupHandler={backupHandler} handleRoadtrip={onResetRoadtrip}>
          reset
        </Modal>
      )}
    </>
  );
}

const StyledResetButton = styled.div`
  button {
    position: absolute;
    z-index: 100;
    bottom: 0;
    left: 0;
    margin-left: 5.5rem;
    margin-bottom: 5rem;
  }
  @media (min-width: 1024px) {
    button {
      margin-bottom: 1rem;
    }
  }
`;
