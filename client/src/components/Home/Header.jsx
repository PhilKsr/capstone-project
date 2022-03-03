import styled from "styled-components";
import roAdventure from "../../assets/roAdventure.svg";
import video from "../../assets/Timelapse.mp4";
import ScreenPicture from "../../assets/Screen.png";

export default function Header() {
  return (
    <>
      <CoverImage>
        <img src={roAdventure} alt='ROADVENTURE' />
      </CoverImage>
      <CoverVideo>
        <video autoPlay loop muted poster={ScreenPicture}>
          <source src={video} type='video/mp4' />
        </video>
        <h1>Ready for the next adventure?</h1>
      </CoverVideo>
    </>
  );
}

const CoverImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("https://images.unsplash.com/photo-1502320332898-8ec6e74e147f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80");
  background-size: cover;
  background-position-x: 40%;
  @media (min-width: 1024px) {
    display: none;
  }
`;

const CoverVideo = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    height: 90vh;
    color: var(--tertiary);
    video {
      opacity: 90%;
      display: block;
      width: 100vw;
      height: 90vh;
      object-fit: cover;
      position: absolute;
      z-index: -1;
    }
  }
`;
