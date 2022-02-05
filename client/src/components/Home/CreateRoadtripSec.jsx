import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";
import Add from "../../images/addIcon.svg";

export default function CreateRoadtripSec() {
  return (
    <CreateRoadtripSection>
      <h2>Create your next roadtrip</h2>
      <NavLink to={`/roadtrip`}>
        <Button data-testid='createNewRoadtrip'>
          <img src={Add} alt='add' data-testid='createNewRoadtrip' />
        </Button>
      </NavLink>
    </CreateRoadtripSection>
  );
}

const CreateRoadtripSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    padding: 1rem;
  }
`;
