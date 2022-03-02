import styled from "styled-components";
import roAdventure from "../../assets/roAdventure.svg";
import video from "../../assets/Timelapse.mp4";

export default function Header() {
  return (
    <>
      <CoverImage>
        <img src={roAdventure} alt='ROADVENTURE' />
      </CoverImage>
      <CoverVideo
        autoPlay
        loop
        muted
        poster='https://images.unsplash.com/photo-1502320332898-8ec6e74e147f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'>
        <source src={video} type='video/mp4' />
        <img src={roAdventure} alt='ROADVENTURE' />
      </CoverVideo>
    </>
  );
}

const CoverImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url("https://images.unsplash.com/photo-1502320332898-8ec6e74e147f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80");
  background-repeat: no-repeat;
  background-size: cover;
`;

const CoverVideo = styled.video`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
`;
