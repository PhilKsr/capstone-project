import styled from "styled-components";

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
          <label>
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
              onChange={(event) => onEditItem(event, packingItems)}
            />
          </label>
          <button name='delete' onClick={() => onDeleteItem(item.title)}>
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
    </ItemsList>
  );
}

const ItemsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  .checkbox {
    transform: scale(1.5);
  }
  li {
    display: flex;
    align-items: center;
    margin-top: 1rem;

    input {
      background: var(--primary);
      margin-right: 1rem;
      border: none;
      border-radius: 15px;
      font-size: 0.9rem;
      padding: 0.5rem;
      color: var(--tertiary);
      :focus {
        outline: none;
      }
    }
  }
  button {
    box-sizing: content-box;
    padding: 0.45rem 0.45rem 0.3rem 0.45rem;
    border: none;
    border-radius: 50%;
    background-color: var(--primary);
    color: white;
    cursor: pointer;
  }
  .line-through {
    text-decoration: line-through;
  }
`;
