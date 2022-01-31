import styled from "styled-components";

export default function CostsList({ allCosts, onRemoveCost }) {
  return (
    <>
      <ListOfCosts>
        {allCosts?.map((purchase, index) => (
          <li>
            <div>
              <span>{purchase.title}</span>
              <span>Paid by {purchase.name}</span>
            </div>
            <span>{purchase.cost} €</span>
            <button onClick={() => onRemoveCost(index)}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='24px'
                viewBox='0 0 24 24'
                width='24px'
                fill='#ffffff'>
                <path d='M0 0h24v24H0z' fill='none' />
                <path d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z' />
              </svg>
            </button>
          </li>
        ))}
      </ListOfCosts>
    </>
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

    button {
      box-sizing: content-box;
      padding: 0.45rem 0.45rem 0.3rem 0.45rem;
      border: none;
      border-radius: 50%;
      background-color: var(--first);
      color: white;
      cursor: pointer;
    }

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
