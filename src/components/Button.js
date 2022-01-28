import styled from "styled-components/macro";

export const StyledButton = styled.button`
  background-color: ${(props) => props.bgcolor};
  color: var(--darkNavy);
  box-shadow: inset 0px -8px 0 0 ${(props) => props.shadow};
  border-radius: 15px;
  border: none;

  :hover {
    background-color: ${(props) => props.hovercolor};
  }
`;
