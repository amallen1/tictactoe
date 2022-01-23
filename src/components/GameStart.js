import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components/macro";
import Board from "./Board";
import { ScreenContainer, GameContainer } from "./Containers";
import { StyledButton } from "./Button";
import { GameContext } from "../contexts/GameContext";
import { Link } from "react-router-dom";

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
`;

const Turn = styled.div`
  background-color: var(--semiDarkNavy);
  box-shadow: inset 0px -4px 0 0 var(--darkNavyShadow);
  color: var(--silver);
  padding: 9px 15px 13px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.88px;

  img {
    margin-right: 9px;
  }
`;

const ResetButton = styled(StyledButton)`
  background-color: var(--silver);
  border-radius: 5px;
  padding: 12px;
  box-shadow: inset 0px -4px 0 0 var(--grayShadow);

  :hover {
    background-color: var(--silverHover);
  }
`;

const ScoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Score = styled.div`
  padding: 0.75rem 1.25rem;
  border-radius: 10px;
  background-color: ${(props) => props.bgcolor};
  text-align: center;
`;

const GameStart = () => {
  const { currPlayer } = useContext(GameContext);

  useEffect(() => {
    console.log("Curr player is: " + currPlayer);
  }, [currPlayer]);

  return (
    <ScreenContainer>
      <GameContainer>
        <Row>
          <div>
            <Link to="/">
              <img src="./assets/logo.svg" alt="Logo" />
            </Link>
          </div>

          <Turn>
            {currPlayer === "X" ? (
              <img height="16" src="./assets/silver-x.svg" alt="X mark" />
            ) : (
              <img height="16" src="./assets/icon-o.svg" alt="O mark" />
            )}
            Turn
          </Turn>

          <ResetButton>
            <img src="./assets/icon-restart.svg" alt="Restart button" />
          </ResetButton>
        </Row>

        <div>
          <Board />

          <ScoreContainer>
            <Score bgcolor={"var(--lightGreen)"}>
              <span> X (You)</span>
              <h4>0</h4>
            </Score>
            <Score bgcolor={"var(--silver)"}>
              <span> Ties</span>
              <h4>0</h4>
            </Score>
            <Score bgcolor={"var(--lightYellow)"}>
              <span>O (Cpu)</span>
              <h4>0</h4>
            </Score>
          </ScoreContainer>
        </div>
      </GameContainer>
    </ScreenContainer>
  );
};

export default GameStart;