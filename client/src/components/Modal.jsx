import styled from "styled-components";

export default function Modal({ onBackupHandler, handleRoadtrip, children }) {
  return (
    <>
      <Background onClick={onBackupHandler}></Background>
      <StyledModal>
        <CloseButton onClick={onBackupHandler}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='24px'
            viewBox='0 0 24 24'
            width='24px'
            fill='#ffffff'>
            <path d='M0 0h24v24H0z' fill='none' />
            <path d='M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z' />
          </svg>
        </CloseButton>
        <h2>Really {children}?</h2>
        <p>Do you really want to {children} your roadtrip?</p>
        <p>Changes cannot be undone.</p>
        <div>
          <button
            onClick={() => {
              handleRoadtrip(), onBackupHandler();
            }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='24px'
              viewBox='0 0 24 24'
              width='24px'
              fill='#ffffff'>
              <path d='M0 0h24v24H0z' fill='none' />
              <path d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' />
            </svg>
          </button>
          <button onClick={onBackupHandler}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='24px'
              viewBox='0 0 24 24'
              width='24px'
              fill='#ffffff'>
              <path d='M0 0h24v24H0z' fill='none' />
              <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
            </svg>
          </button>
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
    button {
      margin-bottom: 1rem;
      padding: 0.75rem 0.75rem 0.6rem 0.75rem;
      border: none;
      border-radius: 50%;
      background-color: #1d981d;
      cursor: pointer;
    }
    button + button {
      background-color: #ef3c3c;
    }
  }

  @media (min-height: 740px) {
    margin-bottom: 20rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.25rem 0.25rem 0.1rem 0.25rem;
  margin-right: -0.5rem;
  margin-top: -0.5rem;
  border: none;
  border-radius: 50%;
  background-color: var(--primary);
  cursor: pointer;
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
