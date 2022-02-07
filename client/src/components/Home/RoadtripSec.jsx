import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import RoadtripCard from "../RoadtripCard";

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
      <div className='homeCard'>
        <NavLink to='/collections'>
          {latestPlan && <RoadtripCard oneRoadtrip={latestPlan} />}
        </NavLink>
      </div>
    </RoadtripSection>
  );
}

const RoadtripSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    margin-left: 0.65rem;
  }
  a {
    text-decoration: none;
    color: var(--tertiary);
  }
`;
