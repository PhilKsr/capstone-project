import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function ExploreSec() {
  return (
    <ExploreSection>
      <h2>Get inspired</h2>

      <NavLink to='discover'>
        <div>
          <img
            src='https://images.unsplash.com/photo-1569663818462-4e2c95e320e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            alt='Harz'
          />
          <img
            src='https://images.unsplash.com/photo-1584481120104-b11d5e602e46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80'
            alt='Königssee'
          />
          <img
            src='https://images.unsplash.com/photo-1635754822592-7bec2be9ab7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80'
            alt='St. Peter'
          />
          <img
            src='https://images.unsplash.com/photo-1621747609281-38853764c986?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
            alt='Eibsee'
          />
          <img
            src='https://images.unsplash.com/photo-1599394375951-8674ecff3f8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
            alt='Lüneburger Heide'
          />
          <img
            src='https://images.unsplash.com/photo-1633854398595-d95e682fc401?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
            alt='Sächsische Schweiz'
          />
          <img
            src='https://images.unsplash.com/photo-1624871084818-b9f5d63aa8ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
            alt='Schwarzwald'
          />
          <img
            src='https://images.unsplash.com/photo-1616615971452-429ba52c434f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
            alt='Moselschleife'
          />
          <img
            src='https://images.unsplash.com/photo-1640265225639-6cc10eddae74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
            alt='Rhein'
          />
          <img
            src='https://images.unsplash.com/photo-1587821397822-536a429ca1b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
            alt='Oderteich'
          />
        </div>
      </NavLink>
    </ExploreSection>
  );
}

const ExploreSection = styled.section`
  text-align: center;
  margin-bottom: 6rem;

  div {
    display: grid;
    grid-template-columns: 1fr 1fr;

    img {
      width: 10rem;
      height: 10rem;
      border-radius: 15px;
      object-fit: cover;
      justify-self: center;
      margin-top: 1rem;
      box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
      border: solid 2px var(--black);
    }
  }
`;
