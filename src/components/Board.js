import React, { useState, useContext } from "react";
import Square from "./Square";
import styled from "styled-components/macro";
import { GameContext } from "../contexts/GameContext";

const RowContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 1.25rem;
`;

const Board = () => {
  const { currPlayer, setCurrPlayer, gameBoard, setGameBoard } =
    useContext(GameContext);

  const handleClick = () => {
    // if (value === null) {
    //   // console.log("empty location");
    //   // gameBoard[index] = currPlayer;
    //   // setGameBoard(gameBoard);
    //   // setIsEmpty(!isEmpty);
    //   //alternates the players
    //   // if (currPlayer === "X") {
    //   //   setCurrPlayer("O");
    //   // } else {
    //   //   setCurrPlayer("X");
    //   // }
    //   //if it is empty, the current player can place their mark here
    //   //the mark in this case would be an image that matches the currplayer mark
    //   //the current player changes
    // } else {
    //   console.log("not empty location");
    // }
  };

  return (
    <RowContainer>
      <Row>
        {gameBoard.map((index) => {
          return (
            <Square
              value={gameBoard[index]}
              key={index}
              index={index}
              handleClick={handleClick}
            />
          );
        })}
      </Row>
    </RowContainer>
  );
};

export default Board;
