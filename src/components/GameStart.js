import React, { useState, useContext } from "react";
import { GameContext } from "../contexts/GameContext";
import { Link } from "react-router-dom";
import { ScreenContainer, GameContainer } from "./styles/ContainerStyles";
import Board from "./Board";
import Message from "./Message";
import Overlay from "./Overlay";

import {
  Header,
  Logo,
  Turn,
  ResetButton,
  ScoreContainer,
  Score,
} from "./styles/GameStartStyles";

const GameStart = () => {
  const { playerOne } = useContext(GameContext);
  const [gameBoard, setGameBoard] = useState(Array(9).fill(null));
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);
  const [ties, setTies] = useState(0);
  const [winner, setWinner] = useState(null);
  const [currPlayer, setCurrPlayer] = useState("X");
  const [gameOver, setGameOver] = useState(false);

  const resetGame = () => {
    setGameBoard(Array(9).fill(null));
    setCurrPlayer("X");

    //reset the score
    setXScore(0);
    setOScore(0);
    setTies(0);

    //reset game state
    setWinner(false);
    setGameOver(false);
  };

  const startNewRound = () => {
    setGameBoard(Array(9).fill(null));
    setCurrPlayer("X");
    setWinner(false);
    setGameOver(false);
  };

  const checkWinner = (board) => {
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
        setWinner(board[one]);
        console.log(`${board[one]} WON!`);

        if (board[one] === "X") {
          setXScore(xScore + 1);
        } else {
          setOScore(oScore + 1);
        }

        setGameOver(true);
        return;
      }
    }

    //returns true when there are no more spots in gameboard
    let isEmpty = board.every((item) => item !== null);

    if (isEmpty) {
      setTies(ties + 1);
      setGameOver(true);
    }
  };

  return (
    <ScreenContainer>
      {gameOver ? <Overlay /> : null}
      {gameOver ? (
        <Message reset={resetGame} newRound={startNewRound} winner={winner} />
      ) : null}

      <GameContainer>
        <Header>
          <Logo>
            <Link to="/" onClick={resetGame}>
              <img src="./assets/logo.svg" alt="Logo" />
            </Link>
          </Logo>

          <Turn>
            {currPlayer === "X" ? (
              <img height="16" src="./assets/silver-x.svg" alt="X mark" />
            ) : (
              <img height="16" src="./assets/icon-o.svg" alt="O mark" />
            )}
            Turn
          </Turn>

          <ResetButton onClick={resetGame}>
            <img src="./assets/icon-restart.svg" alt="Restart button" />
          </ResetButton>
        </Header>

        <div>
          <Board
            gameBoard={gameBoard}
            setGameBoard={setGameBoard}
            checkWinner={checkWinner}
            currPlayer={currPlayer}
            setCurrPlayer={setCurrPlayer}
          />

          <ScoreContainer>
            <Score bgcolor={"var(--lightGreen)"}>
              <span> X ({playerOne === "X" ? "P1" : "P2"})</span>
              <h4>{xScore}</h4>
            </Score>
            <Score bgcolor={"var(--silver)"}>
              <span> Ties</span>
              <h4>{ties}</h4>
            </Score>
            <Score bgcolor={"var(--lightYellow)"}>
              <span>O ({playerOne === "O" ? "P1" : "P2"})</span>
              <h4>{oScore}</h4>
            </Score>
          </ScoreContainer>
        </div>
      </GameContainer>
    </ScreenContainer>
  );
};

export default GameStart;
