import styled from "styled-components";
import CreateRoadtripSec from "../components/Home/CreateRoadtripSec";
import ExploreSec from "../components/Home/ExploreSec";
import ProfileSec from "../components/Home/ProfileSec";
import RoadtripSec from "../components/Home/RoadtripSec";

export default function Home() {
  return (
    <ContentContainer>
      <ProfileSec />
      <CreateRoadtripSec />
      <RoadtripSec />
      <ExploreSec />
    </ContentContainer>
  );
}

const ContentContainer = styled.div`
  font-size: 0.9rem;

  section {
    width: 100%;
    border-bottom: 2px var(--first) solid;

    :last-child {
      border: none;
    }
  }

  h2 {
    font-size: 1.3rem;
    font-weight: bold;
    padding-top: 1rem;
  }

  ul {
    padding: 0;
  }

  button {
    box-sizing: content-box;
    padding: 0.75rem 0.75rem 0.6rem 0.75rem;
    border: none;
    border-radius: 50%;
    background-color: var(--first);
    color: white;
    cursor: pointer;
  }

  li {
    list-style: none;
    list-style-position: inside;
  }
`;
