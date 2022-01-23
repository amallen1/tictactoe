import React, { useState, useEffect, createContext } from "react";

export const GameContext = createContext(); //creates

export const GameProvider = ({ children }) => {
  const [currPlayer, setCurrPlayer] = useState("X");
  const [gameBoard, setGameBoard] = useState(["", "", "", "", "", "", "", "", "",])

  

  const value = {
    currPlayer,
    setCurrPlayer,
    gameBoard
  };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
