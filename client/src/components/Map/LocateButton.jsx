import styled from "styled-components";
import Locate from "../../images/locateIcon.svg";
import Button from "../Button";

export default function LocateButton({ mapInstance }) {
  const clicked = () => {
    mapInstance.fire("tileunload");
  };
  return (
    <LocateMeButton>
      <Button onClickFunction={clicked}>
        <img src={Locate} alt='locate' />
      </Button>
    </LocateMeButton>
  );
}

const LocateMeButton = styled.div`
  button {
    position: absolute;
    z-index: 100;
    bottom: 0;
    left: 0;
    margin-left: 1rem;
    margin-bottom: 5rem;
  }
`;
