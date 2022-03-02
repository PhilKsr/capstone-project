import styled from "styled-components";
import Button from "./Button";
import Add from "../assets/addIcon.svg";

export default function AddPackingListItem({ onGetNewItem }) {
  const addItem = (event) => {
    event.preventDefault();
    const value = event.target.formItem.value;
    const newItem = {
      title: value,
      checked: false,
    };
    onGetNewItem(newItem);
    event.target.reset();
  };

  return (
    <FormContainer onSubmit={addItem}>
      <input type='text' name='formItem' placeholder='Add item...' />
      <div data-testid='addButton'>
        <Button data-testid='addButton'>
          <img src={Add} alt='add' />
        </Button>
      </div>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin: 1.5rem;

  input {
    color: var(--tertiary);
    background-color: var(--primary);
    border: none;
    width: 13rem;
    height: 30px;
    padding: 1.3rem;
    border-radius: 15px;
    text-align: center;
    :focus {
      outline: none;
    }
  }

  button {
    margin: 0;
  }

  @media (min-width: 768px) {
    input {
      width: 100%;
    }
  }
`;
