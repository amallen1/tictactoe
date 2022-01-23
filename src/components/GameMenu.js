import React, { useState, useEffect, useContext } from "react";
import styled, { css } from "styled-components/macro";
import { StyledButton } from "./Button";
import { Link } from "react-router-dom";
import { ScreenContainer, GameContainer } from "./Containers";
import { GameContext } from "../contexts/GameContext";

const Logo = styled.img`
  margin: 2rem auto;
  display: block;
`;

const ChoosePlayer = styled.div`
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

const Notice = styled.span`
  font-size: 0.875rem;
  color: var(--silver);
  opacity: 50%;
  display: block;
  margin: 1.0625rem 0 0;
  letter-spacing: 0.88px;
`;

const MarkContainer = styled.div`
  background-color: var(--darkNavy);
  border-radius: 10px;
  padding: 9px;
  display: flex;
  margin-bottom: 0.5rem;

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

const MarkButton = styled.button``;

const Button = styled(StyledButton)`
  width: 100%;
  padding: 1.0625rem 0 1.5625rem;
  margin-bottom: 1.25rem;
`;

const Players = styled.div`
  p {
    padding: 0.25rem;
  }
`;

const GameMenu = () => {
  const [playerOne, setPlayerOne] = useState("X");
  const [playerTwo, setPlayerTwo] = useState("O");

  const setPlayers = (mark) => {
    if (mark === "X") {
      setPlayerOne("X");
      setPlayerTwo("O");
    } else {
      setPlayerOne("O");
      setPlayerTwo("X");
    }
  };

  useEffect(() => {
    if (playerOne === "X" || playerOne === "O") {
      console.log("player 1 is " + playerOne);
      console.log("player 2 is " + playerTwo);
    }
  }, [playerOne]);

  return (
    <ScreenContainer>
      <GameContainer>
        <div>
          <Logo src="./assets/logo.svg" alt="Logo" />
        </div>

        <ChoosePlayer>
          <p>Pick Player 1's Mark</p>

          <MarkContainer>
            <MarkButton onClick={() => setPlayers("X")}>
              <img height="32" src="./assets/silver-x.svg" alt="X mark" />
            </MarkButton>

            <MarkButton onClick={() => setPlayers("O")}>
              <img height="32" src="./assets/darknavy-o.svg" alt="O mark" />
            </MarkButton>
          </MarkContainer>
          <Players>
            <p>Player 1 is {playerOne}</p>
            <p>Player 2 is {playerTwo}</p>
          </Players>
          <Notice>Remember : X goes first</Notice>
        </ChoosePlayer>

        <Button
          bgcolor="var(--lightYellow)"
          hovercolor="var(--lightYellowHover)"
          shadow="var(--lightYellowShadow)"
        >
          <h3>New Game (vs CPU)</h3>
        </Button>

        <Link to="/gamestart">
          <Button
            bgcolor="var(--lightGreen)"
            hovercolor="var(--lightGreenHover)"
            shadow="var(--lightGreenShadow)"
          >
            <h3>New Game (vs player)</h3>
          </Button>
        </Link>
      </GameContainer>
    </ScreenContainer>
  );
};

export default GameMenu;
