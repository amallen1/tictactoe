import React from "react";
import styled from "styled-components/macro";

const Div = styled.div`
  background-color: #000;
  opacity: 50%;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 10;
`;

const Overlay = () => {
  return <Div />;
};

export default Overlay;
