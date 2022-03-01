import styled from "styled-components";
import CreateRoadtripSec from "../components/Home/CreateRoadtripSec";
import ExploreSec from "../components/Home/ExploreSec";
import Header from "../components/Home/Header";
import RoadtripSec from "../components/Home/RoadtripSec";

export default function Home() {
  return (
    <>
      <ContentContainer>
        <Header />
        <CreateRoadtripSec />
        <RoadtripSec />
        <ExploreSec />
      </ContentContainer>
    </>
  );
}

const ContentContainer = styled.div`
  font-size: 1rem;

  h2 {
    font-size: 1.3rem;
    font-weight: bold;
    padding-top: 1rem;
  }
`;
