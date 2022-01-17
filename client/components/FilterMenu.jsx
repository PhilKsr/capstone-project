import { useState } from "react";
import styled from "styled-components";

function FilterMenu({ addToFilteredLocations }) {
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const showFilter = () => {
    setShowFilterMenu(!showFilterMenu);
  };

  const filterOptions = [
    "Alpine Huts",
    "Attractions",
    "Campsites",
    "Caravansites",
    "Castles",
    "Fuelstations",
    "Hotels",
    "Restaurants",
    "Ruins",
    "Themeparks",
    "Waterfalls",
  ];

  return (
    <Filtercontainer>
      <ul>
        {showFilterMenu &&
          filterOptions.map((option, index) => {
            return (
              <li key={index}>
                <input
                  type='checkbox'
                  name={option}
                  onClick={addToFilteredLocations}
                />
                {option}
              </li>
            );
          })}
      </ul>
      <button onClick={showFilter}>Filter</button>
    </Filtercontainer>
  );
}

export default FilterMenu;

const Filtercontainer = styled.div`
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
`;
