import React, { useState, useContext } from "react";
import styled from "styled-components/macro";
import { GameContext } from "../contexts/GameContext";

const Button = styled.div`
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

const Square = ({ handleClick }) => {
  const { currPlayer, setCurrPlayer, gameBoard, setGameBoard } =
    useContext(GameContext);

  const [isEmpty, setIsEmpty] = useState(true);

  return (
    <div>
      {currPlayer === "X" ? (
        <Button markImage={"./assets/icon-x-outline.svg"} onClick={handleClick}>
          {isEmpty ? null : <img src="./assets/icon-x.svg" alt="x mark" />}
        </Button>
      ) : (
        <Button markImage={"./assets/icon-o-outline.svg"} onClick={handleClick}>
          {isEmpty ? null : <img src="./assets/icon-o.svg" alt="o mark" />}
        </Button>
      )}
    </div>
  );
};

export default Square;
