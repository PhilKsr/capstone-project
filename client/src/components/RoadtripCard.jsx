import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Cost from "../images/costIcon.svg";
import Edit from "../images/editIcon.svg";
import Remove from "../images/removeIcon.svg";
import Button from "../components/Button";

export default function RoadtripCard({
  oneRoadtrip,
  index,
  backupHandler,
  costHandler,
}) {
  const showButtons = () => {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      if (button.classList.contains("visible")) {
        button.classList.remove("visible");
      } else {
        button.classList.add("visible");
      }
    });
  };

  return (
    <Roadtripcard
      onClick={showButtons}
      key={oneRoadtrip._id}
      data-testid='roadtrip'>
      <h2>{oneRoadtrip.name}</h2>
      <Button
        onClickFunction={() => backupHandler(index)}
        size='0.45rem 0.45rem 0.35rem 0.45rem'>
        <img src={Remove} alt='remove' data-testid='removeRoadtrip' />
      </Button>
      <NavLink to={`/roadtrip/${oneRoadtrip._id}`}>
        <Button size='0.45rem 0.45rem 0.35rem 0.45rem'>
          <img src={Edit} alt='edit' />
        </Button>
      </NavLink>
      <Button
        onClickFunction={() => costHandler(index)}
        size='0.45rem 0.45rem 0.35rem 0.45rem'>
        <img src={Cost} alt='costs' data-testid='costsButton' />
      </Button>
      <ul className='locations__list'>
        {oneRoadtrip?.locations?.map((oneLocation) => (
          <li key={oneLocation._id}>
            {oneLocation.properties.name} <small>({oneLocation.type})</small>
          </li>
        ))}
      </ul>
    </Roadtripcard>
  );
}

const Roadtripcard = styled.div`
  width: 85%;
  margin: 1rem 0 1rem 0;
  padding: 1rem;
  background-color: var(--secondary);
  color: var(--tertiary);
  border-radius: 15px;
  padding: 1rem;
  position: relative;
  min-height: min-content;

  li {
    margin: 0.4rem;
  }

  h2 {
    padding: 1rem;
  }

  button {
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 0.5rem;
    margin: 0.5rem;
    transition: opacity 0.6s;
    opacity: 0%;
  }
  a + button {
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 0.5rem;
    margin-top: 6.5rem;
    transition: opacity 0.6s;
    opacity: 0%;
  }

  a {
    button {
      position: absolute;
      top: 0;
      right: 0;
      margin-right: 0.5rem;
      margin-top: 3.5rem;
      transition: opacity 0.6s;
      opacity: 0%;
    }
  }

  .visible {
    opacity: 100%;
  }
`;
