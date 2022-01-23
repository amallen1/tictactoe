import React, { useContext } from "react";
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

  :hover::after {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    content: url(${(props) => props.markImage});
  }

  @media (min-width: 550px) {
    height: 140px;
    width: 140px;
  }
`;

const Square = () => {
  const { currPlayer } = useContext(GameContext);
  return (
    <div>
      {currPlayer === "X" ? (
        <Button markImage={"./assets/icon-x-outline.svg"}></Button>
      ) : (
        <Button markImage={"./assets/icon-o-outline.svg"}></Button>
      )}
    </div>
  );
};

export default Square;
