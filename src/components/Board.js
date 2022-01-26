import React, { useState, useEffect, useContext } from "react";
import Square from "./Square";
import styled from "styled-components/macro";
import { GameContext } from "../contexts/GameContext";

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

const Board = () => {
  const {
    currPlayer,
    setCurrPlayer,
    gameBoard,
    setGameBoard,
    setXScore,
    xScore,
    oScore,
    setOScore,
  } = useContext(GameContext);

  const [placed, setPlaced] = useState(false);
  const [winner, setWinner] = useState(false);

  const renderSquare = (i) => {
    return <Square index={i} handleClick={handleClick} />;
  };

  useEffect(() => {
    changePlayer();

    //checking for the winner
    checkWinner(gameBoard);
  }, [gameBoard]);

  //alternates the players only if they were able to
  //place a marker on the board
  const changePlayer = () => {
    if (currPlayer === "X" && placed) {
      console.log("X");
      setCurrPlayer("O");
    } else if (currPlayer === "O" && placed) {
      console.log("O");
      setCurrPlayer("X");
    }
    setPlaced(false);
  };

  const handleClick = (i) => {
    console.log("The index of the square you clicked: " + i);

    if (gameBoard[i] === null) {
      //if there is no mark in the spot

      let board = [...gameBoard];
      board[i] = currPlayer;
      setGameBoard(board);
      setPlaced(true);
    } else {
      console.log("Cannot place marker here!");
      setPlaced(false);
    }
  };

  const checkWinner = (board) => {
    console.log("checkwinner");

    const patterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    //you know you won with these patterns if the elements at each index are the same thing

    for (let i = 0; i < patterns.length; i++) {
      const [one, two, three] = patterns[i];

      if (
        board[one] &&
        board[one] === board[two] &&
        board[one] === board[three]
      ) {
        console.log("SOMEONE WON!");
        setWinner(true);
        console.log(board[one]);
      }

      if (winner === "X") {
        setXScore(xScore + 1);
      } else {
        setOScore(oScore + 1);
      }
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
