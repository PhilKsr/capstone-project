import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";
import Add from "../../assets/addIcon.svg";

export default function CreateRoadtripSec() {
  return (
    <CreateRoadtripSection>
      <h2>Create your next roadtrip</h2>
      <h3>Give it a name</h3>
      <p>
        Choose a name for your plans. Maybe it contains a hint for the duration
        like 'weekend'. Be creative!
      </p>
      <h3>Add locations</h3>
      <p>
        Discover locations in the area you are heading to. Get excited while
        planning the Roadtrip. Did you find anything new on your researches? Add
        the location and shareit with the rest of the world.
      </p>
      <h3>Save your trip</h3>
      <p>
        Don't forget to click on save. Even if you are not done with planning
        you should save the current status.
      </p>
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
  padding: 1rem 1rem;
  h2 {
    font-size: 1.5rem;
    padding: 1.5rem;
  }
  h3 {
    padding-top: 1rem;
  }
  a {
    padding: 1rem;
  }
`;
