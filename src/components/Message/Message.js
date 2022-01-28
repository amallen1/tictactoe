import React from "react";
import { Container, WinMessage, Flex, Button } from "./MessageStyles";
import { Link } from "react-router-dom";

// const winMessage = "Oh no you lost";
// const loseMessage = "You won!";

/**
 * In this component, I need to know
 * WHO WON (Player 1 or Player 2)?
 * The marker of the winner
 *
 */

const Message = ({ winner, reset, newRound }) => {
  //correctly passes the winner
  console.log("who be da winna?" + winner);
  //needs to know what player O and X is
  //we get that from GameMenu.js

  if (winner === null) {
    console.log("ITS A TIE HOE");
  }

 
  return (
    <Container>
      {winner === null ? (
        <Flex>
          <p style={{ color: "var(--silver)" }}>Round tied</p>
        </Flex>
      ) : (
        <div>
          <WinMessage>Player wins!</WinMessage>
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
