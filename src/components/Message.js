import React, { useContext } from "react";
import { GameContext } from "../contexts/GameContext";
import { Link } from "react-router-dom";
import { Container, WinMessage, Flex, Button } from "./styles/MessageStyles";

const Message = ({ reset, newRound, winner }) => {
  const { playerOne } = useContext(GameContext);

  return (
    <Container>
      {winner ? (
        <div>
          <WinMessage>
            {winner === playerOne ? "Player 1 wins!" : "Player 2 wins!"}
          </WinMessage>
          <Flex>
            {winner === "X" ? (
              <img height="28" src="./assets/icon-x.svg" alt="X mark" />
            ) : (
              <img height="30" src="./assets/icon-o.svg" alt="O mark" />
            )}
            <p
              style={{
                color:
                  winner === "X" ? "var(--lightGreen)" : "var(--lightYellow)",
              }}
            >
              takes the round
            </p>
          </Flex>
        </div>
      ) : (
        <Flex>
          <p style={{ color: "var(--silver)" }}>Round tied</p>
        </Flex>
      )}

      <div>
        <Link to="/">
          <Button
            bgcolor="var(--silver)"
            hovercolor="var(--silverHover)"
            shadow="var(--grayShadow)"
            onClick={reset}
          >
            Quit
          </Button>
        </Link>

        <Button
          bgcolor="var(--lightYellow)"
          hovercolor="var(--lightYellowHover)"
          shadow="var(--lightYellowShadow)"
          onClick={newRound}
        >
          Next Round
        </Button>
      </div>
    </Container>
  );
};

export default Message;
