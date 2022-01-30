import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import Square from "./Square";

const RowContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Row = styled.div`
  display: flex;
  column-gap: 1.25rem;
  margin-bottom: 1.25rem;
`;

const Board = ({
  gameBoard,
  setGameBoard,
  checkWinner,
  currPlayer,
  setCurrPlayer,
}) => {
  const [placed, setPlaced] = useState(false);

  const renderSquare = (i) => {
    return (
      <Square
        index={i}
        gameBoard={gameBoard}
        handleClick={handleClick}
        currPlayer={currPlayer}
      />
    );
  };

  useEffect(() => {
    changePlayer();

    checkWinner(gameBoard);
  }, [gameBoard]);

  const changePlayer = () => {
    if (currPlayer === "X" && placed) {
      setCurrPlayer("O");
    } else if (currPlayer === "O" && placed) {
      setCurrPlayer("X");
    }
  };

  const handleClick = (i) => {
    if (gameBoard[i] === null) {
      let board = [...gameBoard];
      board[i] = currPlayer;
      setGameBoard(board);
      setPlaced(true);
    } else {
      // alert("Space already occupied!");
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
