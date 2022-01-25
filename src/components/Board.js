import React, { useState, useEffect, useContext } from "react";
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
  const {
    currPlayer,
    setCurrPlayer,
    gameBoard,
    setGameBoard,
    xIsNext,
    setXIsNext,
  } = useContext(GameContext);

  const [placed, setPlaced] = useState(false);

  const renderSquare = (i) => {
    return <Square index={i} handleClick={handleClick} />;
  };

  useEffect(() => {
    changePlayer();
    console.log("1");
  }, [gameBoard]);

  const changePlayer = () => {
    if (currPlayer === "X" && placed) {
      setCurrPlayer("O");
    } else {
      setCurrPlayer("X");
    }
    console.log("hi");
  };

  const handleClick = (i) => {
    console.log("The index of the square U clicked: " + i);

    if (gameBoard[i] === null) {
      //the spot in the board is empty

      let board = [...gameBoard];
      board[i] = currPlayer;
      setGameBoard(board);
      setPlaced(true);
    } else {
      console.log("Cannot place marker here!");
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
