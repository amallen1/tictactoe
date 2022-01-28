import styled from "styled-components/macro";
import { StyledButton } from "../Button";

export const Container = styled.div`
  width: 100%;
  background-color: var(--semiDarkNavy);
  position: absolute;
  z-index: 20;
  padding: 40px 47px 40px 49px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled(StyledButton)`
  color: #1a2a33;
  padding: 15px 16px 17px 17px;
  border-radius: 10px;

  :first-child {
    margin-right: 1rem;
  }
`;

export const WinMessage = styled.p`
  font-size: 0.875rem;
  letter-spacing: 0.88px;
  font-weight: 700;
  color: var(--silver);
  margin-bottom: 1rem;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 1.5rem;

  img {
    margin-right: 0.45rem;
  }

  p {
    font-size: 1.5rem;
    letter-spacing: 1.5px;
    font-weight: 700;
  }
`;
