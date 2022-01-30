import styled from "styled-components/macro";

export const ScreenContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;
`;

export const GameContainer = styled.div`
  max-width: 328px;

  @media (min-width: 550px) {
    max-width: 460px;
  }
`;
