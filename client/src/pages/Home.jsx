import styled from "styled-components";
import CreateRoadtripSec from "../components/Home/CreateRoadtripSec";
import ExploreSec from "../components/Home/ExploreSec";
import ProfileSec from "../components/Home/ProfileSec";
import RoadtripSec from "../components/Home/RoadtripSec";

export default function Home() {
  return (
    <>
      <ContentContainer>
        <ProfileSec />
        <CreateRoadtripSec />
        <RoadtripSec />
        <ExploreSec />
      </ContentContainer>
    </>
  );
}

const ContentContainer = styled.div`
  font-size: 0.9rem;

  section {
    width: 100%;
    border-bottom: 2px var(--primary) solid;

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

  li {
    list-style-position: inside;
  }
`;
