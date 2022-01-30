import styled from "styled-components/macro";

export const Button = styled.button`
  border: none;
  background-color: var(--semiDarkNavy);
  box-shadow: inset 0px -8px 0 0 var(--darkNavyShadow);
  padding: 1.5rem 1.75rem 2rem;
  height: 96px;
  width: 96px;
  border-radius: 15px;
  position: relative;
  cursor: pointer;

  @media (min-width: 550px) {
    height: 140px;
    width: 140px;
    padding: 2.375rem;
  }

  /* Desktop only should have this hovering feature */
  @media (min-width: 1000px) {
    :hover::after {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      content: url(${(props) => (props.disable ? null : props.hoverImage)});
    }
  }
`;
