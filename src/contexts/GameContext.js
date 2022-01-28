import React, { useState, useEffect, createContext } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [currPlayer, setCurrPlayer] = useState("X");
  const [gameBoard, setGameBoard] = useState(Array(9).fill(null));
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);
  const [ties, setTies] = useState(0);
  const [winner, setWinner] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [playerOne, setPlayerOne] = useState("X");
  const [playerTwo, setPlayerTwo] = useState("O");

  useEffect(() => {}, [gameBoard]);

  const value = {
    playerOne,
    setPlayerOne,
    playerTwo,
    setPlayerTwo,
    currPlayer,
    setCurrPlayer,
    gameBoard,
    setGameBoard,
    xScore,
    setXScore,
    oScore,
    setOScore,
    setWinner,
    winner,
    setGameOver,
    gameOver,
    ties,
    setTies,
  };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
