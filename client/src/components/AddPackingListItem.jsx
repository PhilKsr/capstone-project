import styled from "styled-components";

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
      <button>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='24px'
          viewBox='0 0 24 24'
          width='24px'
          fill='#ffffff'>
          <path d='M0 0h24v24H0z' fill='none' />
          <path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' />
        </svg>
      </button>
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
