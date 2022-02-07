import { useState } from "react";
import styled from "styled-components";
import Button from "../Button";
import Save from "../../images/saveIcon.svg";
import Cancel from "../../images/cancelIcon.svg";

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
        <Button>
          <img src={Save} alt='Save' data-testid='addOneCostButton' />
        </Button>
        <Button onClickFunction={showForm} buttoncolor='var(--cancel)'>
          <img src={Cancel} alt='Cancel' />
        </Button>
      </div>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

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
