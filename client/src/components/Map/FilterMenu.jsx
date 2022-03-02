import { useState } from "react";
import styled from "styled-components";
import Button from "../Button";
import Filter from "../../assets/filterIcon.svg";

export default function FilterMenu({
  checkFilteredLocations,
  filteredLocations,
  show,
}) {
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const showFilter = () => {
    setShowFilterMenu(!showFilterMenu);
  };

  return (
    <FilterContainer>
      {(show ?? showFilterMenu) && (
        <ul>
          {filteredLocations?.map((oneFilter, index) => {
            return (
              <li key={index}>
                <input
                  type='checkbox'
                  name={oneFilter.name}
                  onChange={checkFilteredLocations}
                  checked={oneFilter.checked}
                />
                {oneFilter.name}
              </li>
            );
          })}
        </ul>
      )}
      <Button onClickFunction={showFilter}>
        <img src={Filter} alt='filter' />
      </Button>
    </FilterContainer>
  );
}

const FilterContainer = styled.div`
  button {
    position: absolute;
    z-index: 100;
    bottom: 0;
    right: 0;
    margin-right: 1rem;
    margin-bottom: 5rem;
  }
  ul {
    background-color: var(--primary);
    opacity: 80%;
    position: absolute;
    z-index: 150;
    bottom: 0;
    right: 0;
    margin-right: 1rem;
    margin-bottom: 8.5rem;
    padding: 0.5rem;
    border-radius: 20px;
  }
  li {
    color: var(--tertiary);
    list-style: none;
    font-size: 0.9rem;
    margin-top: 1rem;
  }

  input {
    background-color: #fafafa;
    border: 1px solid #cacece;
    border-radius: 3px;
    transform: scale(1.5);
    margin-right: 1rem;
  }
`;
