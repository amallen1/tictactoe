import React, { useContext } from "react";
import { GameContext } from "../contexts/GameContext";
import { Link } from "react-router-dom";
import { ScreenContainer, GameContainer } from "./styles/ContainerStyles";
import {
  Logo,
  ChoosePlayer,
  MarkContainer,
  MarkButton,
  Players,
  Notice,
  Button,
} from "./styles/GameMenuStyles";

const GameMenu = () => {
  const { playerOne, playerTwo, setPlayerOne, setPlayerTwo } =
    useContext(GameContext);

  const setPlayers = (mark) => {
    if (mark === "X") {
      setPlayerOne("X");
      setPlayerTwo("O");
    } else {
      setPlayerOne("O");
      setPlayerTwo("X");
    }
  };

  return (
    <ScreenContainer>
      <GameContainer>
        <div>
          <Logo src="./assets/logo.svg" alt="Logo" />
        </div>

        <ChoosePlayer>
          <p>Pick Player 1's Mark</p>

          <MarkContainer>
            <MarkButton
              onClick={() => setPlayers("X")}
              bgcolor={"var(--semiSilver)"}
            >
              <img height="32" src="./assets/silver-x.svg" alt="X mark" />
            </MarkButton>

            <MarkButton
              onClick={() => setPlayers("O")}
              bgcolor={"var(--silverHover)"}
            >
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
          bgcolor="var(--silver)"
          shadow="var(--grayShadow)"
          disabled="initial"
        >
          <h3>(VS CPU) mode coming soon!</h3>
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
