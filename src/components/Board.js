import React, { useState, useContext } from "react";
import Square from "./Square";
import styled from "styled-components/macro";
import { GameContext } from "../contexts/GameContext";

const RowContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 1.25rem;
`;

const Board = () => {
  const { gameBoard, setGameBoard } = useContext(GameContext);

  return (
    <RowContainer>
      <Row>
        {gameBoard.map((section) => {
          return <Square />;
        })}
      </Row>
    </RowContainer>
  );
};

export default Board;
