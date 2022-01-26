import React, { useState, useEffect, createContext } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [currPlayer, setCurrPlayer] = useState("X");
  const [gameBoard, setGameBoard] = useState(Array(9).fill(null));
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);

  useEffect(() => {}, [gameBoard]);

  const value = {
    currPlayer,
    setCurrPlayer,
    gameBoard,
    setGameBoard,
    xScore,
    setXScore,
    oScore,
    setOScore,
  };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
