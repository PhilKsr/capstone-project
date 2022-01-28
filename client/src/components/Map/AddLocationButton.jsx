import styled from "styled-components";

export default function AddButton({ onSetAddNewLocation, addNewLocation }) {
  return (
    <>
      <AddLocationButton onClick={onSetAddNewLocation}>
        {addNewLocation ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            enable-background='new 0 0 24 24'
            height='24px'
            viewBox='0 0 24 24'
            width='24px'
            fill='#16bc1f'>
            <g>
              <rect fill='none' height='24' width='24' />
            </g>
            <g>
              <path
                d='M16,9V4l1,0c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H7C6.45,2,6,2.45,6,3v0 c0,0.55,0.45,1,1,1l1,0v5c0,1.66-1.34,3-3,3h0v2h5.97v7l1,1l1-1v-7H19v-2h0C17.34,12,16,10.66,16,9z'
                fillRule='evenodd'
              />
            </g>
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            enable-background='new 0 0 24 24'
            height='24px'
            viewBox='0 0 24 24'
            width='24px'
            fill='#ffffff'>
            <g>
              <rect fill='none' height='24' width='24' />
            </g>
            <g>
              <path
                d='M16,9V4l1,0c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H7C6.45,2,6,2.45,6,3v0 c0,0.55,0.45,1,1,1l1,0v5c0,1.66-1.34,3-3,3h0v2h5.97v7l1,1l1-1v-7H19v-2h0C17.34,12,16,10.66,16,9z'
                fillRule='evenodd'
              />
            </g>
          </svg>
        )}
      </AddLocationButton>
    </>
  );
}

const AddLocationButton = styled.button`
  box-sizing: content-box;
  position: absolute;
  z-index: 100;
  bottom: 0;
  right: 0;
  margin-right: 1rem;
  margin-bottom: 9rem;
  padding: 0.75rem 0.75rem 0.6rem 0.75rem;
  border: none;
  border-radius: 50%;
  background-color: var(--black);
  cursor: pointer;
`;