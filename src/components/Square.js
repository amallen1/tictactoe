import React from "react";
import { Button } from "./styles/SquareStyles";

const Square = ({ index, gameBoard, handleClick, currPlayer }) => {
  return (
    <div>
      <Button
        hoverImage={
          currPlayer === "X"
            ? "./assets/icon-x-outline.svg"
            : "./assets/icon-o-outline.svg"
        }
        onClick={() => handleClick(index)}
        disable={gameBoard[index] ? true : false}
      >
        {gameBoard[index] === "X" ? (
          <img src="./assets/icon-x.svg" alt="Mark" />
        ) : null}
        {gameBoard[index] === "O" ? (
          <img src="./assets/icon-o.svg" alt="Mark" />
        ) : null}
      </Button>
    </div>
  );
};

export default Square;
