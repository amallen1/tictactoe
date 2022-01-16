import React from "react";
import styled from "styled-components/macro";
import { StyledButton } from "./Button";

const ScreenContainer = styled.div`
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
  padding: 1.5rem 1.5rem 30px;
  color: #10212a;
  text-align: center;
  margin: 0rem 0 2.5rem;

  p {
    color: var(--silver);
    padding-bottom: 1.5rem;
    font-weight: 700;
    letter-spacing: 1px;
  }

  span {
    font-size: 0.875rem;
    color: var(--silver);
    opacity: 50%;
    display: block;
    margin: 1.0625rem 0 0;
    letter-spacing: 0.88px;
  }
`;

const MarkContainer = styled.div`
  background-color: var(--darkNavy);
  border-radius: 10px;
  padding: 9px;
  display: flex;

  button {
    border-radius: 10px;
    width: 100%;
    margin: 0 auto;
    padding: 9px 0;
    border: none;
  }

  button:first-child:hover {
    background-color: var(--semiSilver);
  }

  button:last-child {
    background-color: var(--silver);
  }

  button:last-child:hover {
    background-color: var(--silverHover);
  }
`;

const Button = styled(StyledButton)`
  width: 100%;
  padding: 1.0625rem 0 1.5625rem;
  margin-bottom: 1.25rem;
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
            <button>
              <img height="32" src="./assets/silver-x.svg" alt="X mark" />
            </button>

            <button>
              <img height="32" src="./assets/darknavy-o.svg" alt="O mark" />
            </button>
          </MarkContainer>
          <span>Remember : X goes first</span>
        </ChoosePlayer>

        <Button
          bgcolor="var(--lightYellow)"
          hovercolor="var(--lightYellowHover)"
          shadow="var(--lightYellowShadow)"
        >
          <h3>New Game (vs CPU)</h3>
        </Button>

        <Button
          bgcolor="var(--lightGreen)"
          hovercolor="var(--lightGreenHover)"
          shadow="var(--lightGreenShadow)"
        >
          <h3>New Game (vs player)</h3>
        </Button>
      </GameContainer>
    </ScreenContainer>
  );
};

export default GameMenu;
