import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import roAdventure from "../images/roAdventure.svg";

export default function Loading({ setDisplayLoading }) {
  const redirect = useNavigate();
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      redirect("/home");
    }, 2000);
    return () => {
      clearTimeout(redirectTimer);
    };
  }, []);

  return (
    <Loadingscreen onClick={() => setDisplayLoading(false)}>
      <img src={roAdventure} alt='ROADVENTURE' />
    </Loadingscreen>
  );
}

const Loadingscreen = styled.div`
  img {
    padding: 0;
    margin: 0;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 999;
  height: 667px;
  width: 100%;
  background-image: url("https://images.unsplash.com/photo-1502320332898-8ec6e74e147f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80");
  background-repeat: no-repeat;
  background-size: cover;

  //Basic MacBook Pro to use with mouse
  @media (min-width: 600px) {
    width: 100%;
    height: 100vh;
  }
`;
