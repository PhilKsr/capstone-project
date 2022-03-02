import styled from "styled-components";
import Button from "./Button";
import Confirm from "../assets/confirmIcon.svg";
import Cancel from "../assets/cancelIcon.svg";

export default function Modal({ onBackupHandler, handleRoadtrip, children }) {
  return (
    <>
      <Background onClick={onBackupHandler}></Background>
      <StyledModal data-testid='modal'>
        <CloseButton>
          <Button
            onClickFunction={onBackupHandler}
            size='0.25rem 0.25rem 0.25rem 0.25rem'>
            <img src={Cancel} alt='cancel' />
          </Button>
        </CloseButton>
        <h2>Really {children}?</h2>
        <p>Do you really want to {children} your roadtrip?</p>
        <p>Changes cannot be undone.</p>
        <div>
          <Button
            onClickFunction={() => {
              handleRoadtrip();
              onBackupHandler();
            }}
            buttoncolor='var(--confirm)'>
            <img src={Confirm} alt='confirm' data-testid='confirmRemove' />
          </Button>
          <Button onClickFunction={onBackupHandler} buttoncolor='var(--cancel)'>
            <img src={Cancel} alt='cancel' />
          </Button>
        </div>
      </StyledModal>
    </>
  );
}

const StyledModal = styled.div`
  position: fixed;
  z-index: 150;
  bottom: 0;
  left: 0;
  padding: 0 10px 0 10px;
  margin-left: 2.5rem;
  margin-bottom: 15rem;
  background-color: var(--primary);
  color: white;
  width: 80%;
  border-radius: 15px;
  h2 {
    text-align: center;
    font-size: 1.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  p {
    text-align: center;
    font-size: 1rem;
  }
  div {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    padding-top: 1rem;
  }

  @media (min-height: 740px) {
    margin-bottom: 20rem;
  }
`;

const CloseButton = styled.div`
  button {
    position: absolute;
    top: 0;
    right: 0;
    margin-right: -0.5rem;
    margin-top: -0.5rem;
  }
`;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 125;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: var(--primary);
  opacity: 60%;
`;
