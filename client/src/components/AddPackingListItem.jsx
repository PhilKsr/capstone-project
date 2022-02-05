import styled from "styled-components";
import Button from "./Button";
import Add from "../images/addIcon.svg";

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
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 1.5rem;

  input {
    :first-of-type {
      color: var(--tertiary);
      background-color: var(--primary);
      border: none;
      width: 12rem;
      height: 30px;
      padding: 5px;
      border-radius: 5px;
      text-align: center;
      :focus {
        outline: none;
      }
    }
  }

  button {
    box-sizing: content-box;
    padding: 0.75rem 0.75rem 0.6rem 0.75rem;
    border: none;
    border-radius: 50%;
    background-color: var(--primary);
    color: white;
    cursor: pointer;
  }
`;
