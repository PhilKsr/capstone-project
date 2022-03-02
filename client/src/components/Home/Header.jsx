import styled from "styled-components";
import roAdventure from "../../images/roAdventure.svg";

export default function Header() {
  return (
    <Cover>
      <img src={roAdventure} alt='ROADVENTURE' />
    </Cover>
  );
}

const Cover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("https://images.unsplash.com/photo-1502320332898-8ec6e74e147f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80");
  background-repeat: no-repeat;
  background-size: cover;
`;
