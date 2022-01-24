import React, { useState, useContext } from "react";
import Square from "./Square";
import styled from "styled-components/macro";
import { GameContext } from "../contexts/GameContext";

const RowContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* display: flex; */
  /* column-gap: 1.25rem; */
  /* justify-content: center; */
  /* margin-bottom: 1.25rem; */
`;

const Row = styled.div`
  display: flex;
  column-gap: 1.25rem;
  margin-bottom: 1.25rem;

  /* margin-bottom: 1.25rem; */
`;

const Board = () => {
  const { currPlayer, setCurrPlayer, gameBoard, setGameBoard } =
    useContext(GameContext);

  const renderSquare = (i) => {
    return <Square index={i} handleClick={handleClick} />;
  };
  const handleClick = (i) => {
    console.log(i);

    if (gameBoard[i] === null) {
      //the spot in the board is empty
      console.log("You can place something here!");
      gameBoard[i] = currPlayer;
      setGameBoard(gameBoard);

      //alternates the players
      if (currPlayer === "X") {
        setCurrPlayer("O");
      } else {
        setCurrPlayer("X");
      }
    } else {
      console.log("this spot is taken");
    }
  };

  return (
    <RowContainer>
      <Row>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </Row>

      <Row>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </Row>

      <Row>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </Row>
    </RowContainer>
  );
};

export default Board;
