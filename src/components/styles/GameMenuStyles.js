import styled from "styled-components/macro";
import { StyledButton } from "./ButtonStyles";

export const Logo = styled.img`
  margin: 2rem auto;
  display: block;
`;

export const ChoosePlayer = styled.div`
  background-color: var(--semiDarkNavy);
  border-radius: 15px;
  box-shadow: inset 0px -8px 0 0 var(--darkNavyShadow);
  padding: 1.5rem 1.5rem 1.875rem;
  text-align: center;
  margin-bottom: 2.5rem;

  p {
    color: var(--silver);
    padding-bottom: 1.5rem;
    font-weight: 700;
    letter-spacing: 1px;
  }
`;

export const Notice = styled.span`
  font-size: 0.875rem;
  color: var(--silver);
  opacity: 50%;
  display: block;
  margin: 1.0625rem 0 0;
  letter-spacing: 0.88px;
`;

export const MarkContainer = styled.div`
  background-color: var(--darkNavy);
  border-radius: 10px;
  padding: 0.5625rem 0.5rem;
  display: flex;
  margin-bottom: 0.5rem;
`;

export const MarkButton = styled.button`
  border-radius: 10px;
  width: 100%;
  margin: 0 auto;
  padding: 9px 0;
  border: none;

  &:last-child {
    background-color: var(--silver);
  }

  &:hover {
    background-color: ${(props) => props.bgcolor};
  }
`;

export const Button = styled(StyledButton)`
  width: 100%;
  padding: 1.0625rem 0 1.5625rem;
  margin-bottom: 1.25rem;
  cursor: ${(props) => props.disabled};
`;

export const Players = styled.div`
  p {
    padding: 0.25rem;
  }
`;
