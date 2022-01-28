import React, { useState, useEffect, useContext } from "react";
import Square from "./Square";
import styled from "styled-components/macro";
import { GameContext } from "../contexts/GameContext";
import Message from "./Message/Message";

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

const Board = ({ setModal }) => {
  const {
    currPlayer,
    setCurrPlayer,
    gameBoard,
    setGameBoard,
    setXScore,
    xScore,
    oScore,
    setOScore,
    setGameOver,
    gameOver,
    setWinner,
    ties,
    setTies,
  } = useContext(GameContext);

  const [placed, setPlaced] = useState(false);

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
      // console.log("X");
      setCurrPlayer("O");
    } else if (currPlayer === "O" && placed) {
      // console.log("O");
      setCurrPlayer("X");
    }
    setPlaced(false);
  };

  const handleClick = (i) => {
    // console.log("The index of the square you clicked: " + i);

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

  const checkForTie = () => {
    //check that there are no winners
    //and gameboard is full

    //turns false the moment there is no more room in the array. this is how we know the game is over
    let gameCheck = gameBoard.some((item) => item === null);
    if (gameCheck === false) {
      return true;
    } else {
      return false;
    }

    // for (let i = 0; i < gameBoard.length; i++) {
    //   console.log("hi");
    //   let variable = gameBoard.includes((i) => i === null);
    //   console.log("what is variable?");
    //   console.log(variable);
    //   if (gameBoard[i] === null) {
    //     //there is a spot in the board that's still empty
    //     return false;
    //   }
    // }

    // console.log("hi");
    // setGameOver(true);

    //there are no spots empty, game is over so if there is no winner,
    //its a time
  };

  const checkWinner = (board) => {
    // console.log("in checkwinner");
    let checkVar = checkForTie();
    // console.log("What is being returned: " + checkVar);
    if (checkVar) {
      setWinner(null);
      setTies(ties + 1);
      console.log("we have a tie!");
      setModal(true);

      // console.log("true while checking for tie");
    } else {
      //we do not have a tie
    }

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

    for (let i = 0; i < patterns.length; i++) {
      const [one, two, three] = patterns[i];

      if (
        board[one] &&
        board[one] === board[two] &&
        board[one] === board[three]
      ) {
        //setting winner to true here
        // setGameOver(true);
        setWinner(board[one]);
        console.log(`${board[one]} WON!`);
        setGameOver(true);

        if (board[one] === "X") {
          setXScore(xScore + 1);
        } else {
          setOScore(oScore + 1);
        }

        setModal(true);
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
