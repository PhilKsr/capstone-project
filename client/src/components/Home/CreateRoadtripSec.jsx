import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function CreateRoadtripSec() {
  return (
    <CreateRoadtripSection>
      <h2>Create your next roadtrip</h2>
      <div>
        <button data-testid='createNewRoadtrip'>
          <NavLink to={`/roadtrip`}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='24px'
              viewBox='0 0 24 24'
              width='24px'
              fill='#ffffff'>
              <path d='M0 0h24v24H0z' fill='none' />
              <path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' />
            </svg>
          </NavLink>
        </button>
      </div>
    </CreateRoadtripSection>
  );
}

const CreateRoadtripSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    padding: 1rem;
  }
`;
