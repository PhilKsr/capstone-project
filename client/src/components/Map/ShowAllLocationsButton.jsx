import styled from "styled-components";
import Visible from "../../images/visibleIcon.svg";
import Invisible from "../../images/invisibleIcon.svg";
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
`;
