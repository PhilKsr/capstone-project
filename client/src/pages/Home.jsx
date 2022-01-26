import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Home() {
  const [latestPlan, setLatestPlan] = useState();

  useEffect(() => fetchRoadtrips(), []);

  const fetchRoadtrips = async () => {
    const res = await fetch(`/api/roadtrips`);
    const data = await res.json();
    setLatestPlan(data[data.length - 1]);
  };

  return (
    <ContentContainer>
      <ProfileSection>
        <div>
          <h2>Welcome back Karl!</h2>
          <h3>Ready for the next adventure?</h3>
        </div>
        <img
          src='https://images.unsplash.com/photo-1516939884455-1445c8652f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
          alt='Bild'
        />
      </ProfileSection>
      <CreateRoadtripSection>
        <h2>Create your new roadtrip</h2>
        <div>
          <button>
            <NavLink to={`/roadtrip/`}>
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
      <section>
        <h2>Discover Germany</h2>
        <ul></ul>
      </section>
    </ContentContainer>
  );
}

const ContentContainer = styled.div`
  font-size: 0.9rem;
  margin-bottom: 6rem;

  section {
    width: 100%;
    border-bottom: 1px var(--black) solid;

    :last-child {
      border: none;
    }
  }

  h2 {
    font-size: 1.2rem;
    padding-top: 1rem;
  }

  h3 {
    font-size: 1rem;
  }

  ul {
    padding: 0;
  }

  button {
    box-sizing: content-box;
    padding: 0.75rem 0.75rem 0.6rem 0.75rem;
    border: none;
    border-radius: 50%;
    background-color: var(--black);
    color: white;
    cursor: pointer;
  }

  li {
    list-style: none;
    list-style-position: inside;
  }
`;

const ProfileSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;

  img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    object-fit: cover;
  }

  h3 {
    padding-top: 1rem;
  }
`;

const CreateRoadtripSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    padding: 1rem;
  }
`;

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
    box-shadow: 10px 20px 15px rgba(0, 0, 0, 0.3);
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
