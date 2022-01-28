import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RoadtripSec() {
  const [latestPlan, setLatestPlan] = useState();

  useEffect(() => fetchRoadtrips(), []);

  const fetchRoadtrips = async () => {
    const res = await fetch(`/api/roadtrips`);
    const data = await res.json();
    setLatestPlan(data[data.length - 1]);
  };

  return (
    <RoadtripSection>
      <h2>Work on your latest plans</h2>
      <div>
        <NavLink to='collections'>
          <h3>{latestPlan?.name}</h3>
          <ul>
            {latestPlan?.locations?.map((location) => (
              <li key={location._id}>
                {location.properties.name} ({location.type})
              </li>
            ))}
          </ul>
        </NavLink>
      </div>
    </RoadtripSection>
  );
}

const RoadtripSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    text-align: center;
    padding-top: 1rem;
  }

  div {
    width: 90%;
    margin: 1rem 0 1rem 0;
    padding: 1rem;
    background-color: grey;
    color: white;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
    border-radius: 15px;

    a {
      text-decoration: none;
      color: var(--white);
    }

    li ul {
      padding-top: 1rem;
    }
  }
`;
