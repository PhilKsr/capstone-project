import styled from "styled-components";
import Visible from "../../assets/visibleIcon.svg";
import Invisible from "../../assets/invisibleIcon.svg";
import Button from "../Button";

export default function ShowAllLocationsButton({
  onSetShowAllLocations,
  showAllLocations,
}) {
  return (
    <VisibilityButton>
      <Button onClickFunction={onSetShowAllLocations}>
        {showAllLocations ? (
          <img src={Invisible} alt='invisible' />
        ) : (
          <img src={Visible} alt='visible' />
        )}
      </Button>
    </VisibilityButton>
  );
}

const VisibilityButton = styled.div`
  button {
    position: absolute;
    z-index: 90;
    bottom: 0;
    right: 0;
    margin-right: 10.2rem;
    margin-bottom: 5rem;
  }
  @media (min-width: 768px) {
    button {
      margin-bottom: 1rem;
    }
  }
`;
