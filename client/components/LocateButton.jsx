import styled from "styled-components";

function LocateButton({ mapInstance }) {
  const clicked = (e) => {
    const map = e.target.previousSibling;
    mapInstance.fire("tileunload");
  };
  return <LocateMeButton onClick={clicked}>Locate me!</LocateMeButton>;
}

export default LocateButton;

const LocateMeButton = styled.button`
  position: absolute;
  z-index: 100;
  top: 0;
  right: 0;
`;
