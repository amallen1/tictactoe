import styled from "styled-components/macro";
import { StyledButton } from "./ButtonStyles";

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;

  @media (min-width: 550px) {
    margin-bottom: 1.25rem;
  }
`;

export const Logo = styled.div`
  margin-right: 46px;

  @media (min-width: 550px) {
    margin-right: 88px;
  }
`;

export const Turn = styled.div`
  background-color: var(--semiDarkNavy);
  box-shadow: inset 0px -4px 0 0 var(--darkNavyShadow);
  color: var(--silver);
  padding: 9px 15px 13px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.88px;
  margin-right: auto;

  img {
    margin-right: 9px;
  }

  @media (min-width: 550px) {
    padding: 13px 30px 19px;
    font-size: 1rem;
    letter-spacing: 1px;

    img {
      width: 20px;
      height: 20px;
      margin-right: 13px;
    }
  }
`;

export const ResetButton = styled(StyledButton)`
  background-color: var(--silver);
  border-radius: 5px;
  padding: 12px;
  box-shadow: inset 0px -4px 0 0 var(--grayShadow);

  :hover {
    background-color: var(--silverHover);
  }

  @media (min-width: 550px) {
    padding: 16px;
  }
`;

export const ScoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Score = styled.div`
  padding: 0.75rem 1.25rem;
  width: 96px;
  border-radius: 15px;
  background-color: ${(props) => props.bgcolor};
  text-align: center;
  font-size: 0.75rem;

  h4 {
    font-size: 1.25rem;
  }

  @media (min-width: 550px) {
    width: 140px;
    font-size: 0.875rem;

    h4 {
      font-size: 1.5rem;
    }
  }
`;
