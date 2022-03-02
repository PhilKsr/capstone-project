import styled from "styled-components";
import Button from "./Button";
import Remove from "../assets/removeIcon.svg";

export default function PackList({
  packingItems,
  onDeleteItem,
  onEditItem,
  onCheckItem,
}) {
  return (
    <ItemsList>
      {packingItems?.map((item, index) => (
        <li key={index}>
          <input
            type='checkbox'
            data-testid='check'
            onChange={(event) => onCheckItem(event, packingItems)}
            className='checkbox'
            name={item.title}
            checked={item.checked}
          />
          <input
            data-testid='item'
            type='text'
            value={item.title}
            name={item.title}
            className={item.checked ? "line-through" : ""}
            onChange={(event) => onEditItem(event, packingItems)}></input>
          <Button
            onClickFunction={() => onDeleteItem(item.title)}
            size='0.45rem 0.45rem 0.45rem 0.45rem'>
            <img src={Remove} alt='remove' name='delete' />
          </Button>
        </li>
      ))}
    </ItemsList>
  );
}

const ItemsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  .checkbox {
    transform: scale(1.5);
    margin: 1rem;
  }
  li {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    background: var(--primary);
    border-radius: 15px;
  }
  input {
    background: var(--primary);
    margin-right: 1rem;
    border: none;
    font-size: 0.9rem;
    padding: 0.5rem;
    color: var(--tertiary);
    :focus {
      outline: none;
    }
  }

  button {
    margin: 0;
  }

  .line-through {
    text-decoration: line-through;
  }
`;
