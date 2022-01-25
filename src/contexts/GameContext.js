import React, { useState, useEffect, createContext } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [currPlayer, setCurrPlayer] = useState("X");
  const [gameBoard, setGameBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  useEffect(() => {
    // console.log(gameBoard);
  }, [gameBoard]);

  const value = {
    currPlayer,
    setCurrPlayer,
    gameBoard,
    setGameBoard,
    xIsNext,
    setXIsNext
  };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
