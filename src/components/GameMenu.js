import React from "react";
import styled from "styled-components/macro";

const ScreenContainer = styled.div`
  /* border: 1px solid red; */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;
`;

const GameContainer = styled.div`
  width: 100%;
  max-width: 460px;
`;

const Logo = styled.img`
  margin: 2rem auto;
  display: block;
`;

const ChoosePlayer = styled.div`
  background-color: var(--semiDarkNavy);
  border-radius: 15px;
  box-shadow: inset 0px -8px 0 0 rgba(16, 33, 42, 1);
  padding: 1.5rem 1.5rem 2rem;
  color: #10212a;
  text-align: center;

  p {
    text-transform: uppercase;
    color: var(--silver);
    padding-bottom: 1.5rem;
  }
`;

const MarkContainer = styled.div`
  background-color: var(--darkNavy);
  border-radius: 10px;
  padding: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 72px;

  div {
    border-radius: 10px;
    width: 100%;
    margin: 0 auto;
    padding: 11px 0;
  }

  div:last-child {
    background-color: var(--silver);
  }
`;

const GameMenu = () => {
  return (
    <ScreenContainer>
      <GameContainer>
        <div>
          <Logo src="./assets/logo.svg" alt="Logo" />
        </div>

        <ChoosePlayer>
          <p>Pick Player 1's Mark</p>
          <MarkContainer>
            <div>
              <img height="32" src="./assets/silver-x.svg" alt="X mark" />
            </div>

            <div>
              <img height="32" src="./assets/darknavy-o.svg" alt="O mark" />
            </div>
          </MarkContainer>
        </ChoosePlayer>
      </GameContainer>
    </ScreenContainer>
  );
};

export default GameMenu;
