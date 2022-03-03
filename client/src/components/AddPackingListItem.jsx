import styled from "styled-components";
import Button from "./Button";

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
      <input type='text' name='formItem' />
      <div data-testid='addButton'>
        <Button data-testid='addButton'>
          <h3>ADD</h3>
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
    padding: 1.5rem;
    border-radius: 15px;
    text-align: center;
    :focus {
      outline: none;
    }
  }
  button {
    padding: 1rem 2rem;
    border-radius: 15px;
    color: orange;
    margin: 0;

    :hover {
      opacity: 100%;
    }
  }

  @media (min-width: 768px) {
    input {
      width: 100%;
    }
    button {
      padding: 1rem 3rem;
      border-radius: 15px;
      margin: 0;
      color: orange;

      :hover {
        opacity: 100%;
      }
    }
  }
`;
