import React, { useState, useEffect, createContext } from "react";

export const GameContext = createContext(); //creates

export const GameProvider = ({ children }) => {
  //first player is always X
  const [currPlayer, setCurrPlayer] = useState("X");
  const [gameBoard, setGameBoard] = useState(Array(9).fill(null));

  const value = {
    currPlayer,
    setCurrPlayer,
    gameBoard,
    setGameBoard,
  };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
