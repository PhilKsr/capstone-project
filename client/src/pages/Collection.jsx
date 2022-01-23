import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Collection() {
  const [roadtrips, setRoadtrips] = useState([]);

  useEffect(() => {
    fetchRoadtrips();
  }, []);

  const fetchRoadtrips = async () => {
    const res = await fetch(`/api/roadtrips`);
    const data = await res.json();
    setRoadtrips(data);
    console.log(data);
  };

  return (
    <>
      <CardContainer>
        {roadtrips.map((oneRoadtrip) => (
          <RoadtripCard>
            <div>
              <li>
                <h2>{oneRoadtrip.name}</h2>
                <button>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    height='24px'
                    viewBox='0 0 24 24'
                    width='24px'
                    fill='#ffffff'>
                    <path d='M0 0h24v24H0z' fill='none' />
                    <path d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z' />
                  </svg>
                </button>
                <ul>
                  {oneRoadtrip.locations.map((oneLocation) => (
                    <li>{oneLocation.properties.name}</li>
                  ))}
                </ul>
              </li>
            </div>
          </RoadtripCard>
        ))}
      </CardContainer>
    </>
  );
}

const CardContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  width: 100%;
  height: 100%;
  font-size: 1rem;
`;

const RoadtripCard = styled.div`
  width: 90%;
  margin: 1rem 0 1rem 0;
  padding: 1rem;
  background-color: var(--black);
  color: white;
  box-shadow: 10px 20px 15px rgba(0, 0, 0, 0.3);

  div {
    padding: 1rem;
    position: relative;
  }
  li ul {
    padding-top: 1rem;
  }
  button {
    box-sizing: content-box;
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.75rem 0.75rem 0.6rem 0.75rem;
    border: none;
    border-radius: 50%;
    background-color: var(--black);
    color: white;
    cursor: pointer;
  }
`;
