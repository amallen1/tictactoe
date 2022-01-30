import React, { useState, createContext } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [playerOne, setPlayerOne] = useState("X");
  const [playerTwo, setPlayerTwo] = useState("O");

  const value = {
    playerOne,
    setPlayerOne,
    playerTwo,
    setPlayerTwo,
  };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
