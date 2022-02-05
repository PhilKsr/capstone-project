import styled from "styled-components";
import Remove from "../../images/removeIcon.svg";
import Button from "../Button";

export default function CostsList({ allCosts, onRemoveCost }) {
  return (
    <ListOfCosts>
      {allCosts?.map((purchase, index) => (
        <li key={index} data-testid='costList'>
          <div>
            <span>{purchase.title}</span>
            <span>Paid by {purchase.name}</span>
          </div>
          <span>{purchase.cost} €</span>
          <Button
            onClickFunction={() => onRemoveCost(index)}
            size='0.45rem 0.45rem 0.45rem 0.45rem'>
            <img src={Remove} alt='remove' data-testid='removeCostButton' />
          </Button>
        </li>
      ))}
    </ListOfCosts>
  );
}

const ListOfCosts = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    display: flex;
    justify-content: space-evenly;
    padding: 3rem;
    border-bottom: 1px solid black;
    align-items: center;
    margin-top: 1rem;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    div + span {
      margin-left: 5rem;
    }
  }
`;
