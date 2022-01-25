import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components/macro";
import { GameContext } from "../contexts/GameContext";

const Button = styled.button`
  border: none;
  background-color: var(--semiDarkNavy);
  box-shadow: inset 0px -8px 0 0 var(--darkNavyShadow);
  padding: 2rem 1.75rem;
  height: 96px;
  width: 96px;
  border-radius: 15px;
  position: relative;
  cursor: pointer;

  @media (min-width: 550px) {
    height: 140px;
    width: 140px;
  }

  /* Desktop only should have this hovering feature */
  @media (min-width: 1000px) {
    :hover::after {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      content: url(${(props) => props.markImage});
    }
  }
`;

const Square = ({ handleClick, index, changePlayer }) => {
  const { currPlayer, gameBoard } = useContext(GameContext);

  const xImage = "./assets/icon-x.svg";
  const xOutlineImage = "./assets/icon-x-outline.svg";
  const yImage = "./assets/icon-o.svg";
  const yOutlineImage = "./assets/icon-o-outline.svg";

  // console.log("Square " + index);

  useEffect(() => {
    // if (gameBoard[index]) {
    //   changePlayer();
    // }
    console.log("2");
  });

  // console.log("square");

  return (
    <div>
      {/* {
        <Button
          markImage={currPlayer === "X" ? xOutlineImage : yOutlineImage}
          onClick={() => handleClick(index)}
        >
          {gameBoard[index] ? (
            <img src={currPlayer === "X" ? xImage : yImage} alt="Mark" />
          ) : null}
        </Button>
      } */}

      <Button
        markImage={currPlayer === "X" ? xOutlineImage : yOutlineImage}
        onClick={() => handleClick(index)}
      >
        {gameBoard[index] === "X" ? (
          <img src="./assets/icon-x.svg" alt="Mark" />
        ) : null}
        {gameBoard[index] === "O" ? (
          <img src="./assets/icon-o.svg" alt="Mark" />
        ) : null}
      </Button>
    </div>
  );
};

export default Square;
