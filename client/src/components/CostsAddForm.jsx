import { useState } from "react";
import styled from "styled-components";

export default function CostsAddForm({ showForm, onAddCost }) {
  const initialNewCost = {
    name: "",
    title: "",
    cost: "",
    date: "",
  };
  const [newCost, setNewCost] = useState(initialNewCost);

  const inputHandler = (event) => {
    if (event.target.name === "cost") {
      setNewCost({
        ...newCost,
        [event.target.name]: Number(event.target.value),
      });
    } else {
      setNewCost({ ...newCost, [event.target.name]: event.target.value });
    }
  };

  return (
    <FormContainer
      data-testid='addCostForm'
      onSubmit={(event) => {
        onAddCost(event, newCost);
        setNewCost(initialNewCost);
      }}>
      <input
        type='text'
        name='name'
        placeholder='Paid by...'
        value={newCost.name}
        required
        onChange={inputHandler}
      />
      <input
        type='text'
        name='title'
        placeholder='Title'
        value={newCost.title}
        required
        onChange={inputHandler}
      />
      <input
        type='number'
        name='cost'
        placeholder='Cost rounded'
        value={newCost.cost}
        required
        onChange={inputHandler}
      />
      <input
        type='date'
        name='date'
        onChange={(event) => inputHandler(event)}
      />
      <div>
        <button data-testid='addOneCostButton'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='24px'
            viewBox='0 0 24 24'
            width='24px'
            fill='#ffffff'>
            <path d='M0 0h24v24H0z' fill='none' />
            <path d='M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z' />
          </svg>
        </button>
        <button onClick={showForm}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='24px'
            viewBox='0 0 24 24'
            width='24px'
            fill='#ffffff'>
            <path d='M0 0h24v24H0z' fill='none' />
            <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
          </svg>
        </button>
      </div>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  button {
    margin: 1rem;
  }

  input {
    background: var(--primary);
    margin-bottom: 1rem;
    border: none;
    border-radius: 15px;
    font-size: 0.9rem;
    padding: 0.5rem;
    color: var(--tertiary);
    :focus {
      outline: none;
    }
  }
`;
