import styled from "styled-components";

export default function Button({
  children,
  onClickFunction,
  buttoncolor,
  size,
}) {
  return (
    <StyledButton
      onClick={onClickFunction}
      buttoncolor={buttoncolor ? buttoncolor : "var(--primary)"}
      size={size ? size : "0.75rem 0.75rem 0.75rem 0.75rem}"}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  box-sizing: content-box;
  padding: ${(props) => props.size};
  border: none;
  border-radius: 50%;
  background-color: ${(props) => props.buttoncolor};
  color: white;
  cursor: pointer;
  margin: 1rem;
`;
